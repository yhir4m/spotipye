export const generateRandomString = (length) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
};

export const sha256 = async (plain) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest('SHA-256', data);
};

export const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
};

export const getCode = (codeVerifier,codeChallenge) => {
  const clientId = '1cbfd428352d473fa5f1e965948bab92';
  const redirectUri = 'http://localhost:5173/token';

  const scope = 'user-read-private user-read-email';
  const authUrl = new URL("https://accounts.spotify.com/authorize");

  // generated in the previous step
  window.localStorage.setItem('code_verifier', codeVerifier);

  const params =  {
    response_type: 'code',
    client_id: clientId,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  };

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();
};

export const getToken = async () => {
  try {
    let codeVerifier = localStorage.getItem('code_verifier');
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');
    const clientId = '1cbfd428352d473fa5f1e965948bab92';
    const redirectUri = 'http://localhost:5173/token';

    if (!code) {
      throw new Error('No se encontró un código de autorización en la URL');
    }

    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        code_verifier: codeVerifier,
      }),
    };
    
    const response = await fetch('https://accounts.spotify.com/api/token', payload);

    if (!response.ok) {
      throw new Error(`Error al obtener el token: ${response.status} - ${response.statusText}`);
    }

    const responseBody = await response.json();
    console.log('Respuesta del servidor:', responseBody);

    if (!responseBody.access_token) {
      throw new Error('No se recibió un token de acceso válido');
    }

    localStorage.setItem('access_token', responseBody.access_token);
    return responseBody.access_token;

  } catch (error) {
    console.error('Error al obtener el token de acceso:', error);
    throw error; // Re-lanza el error para que el componente que llama a getToken pueda manejarlo
  }
};
