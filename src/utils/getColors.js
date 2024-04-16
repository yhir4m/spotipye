import getColors from "get-image-colors"
import { createCanvas,loadImage } from 'canvas';

export default function getColor(url){

  const reader = new FileReader();
  console.log("a")

    const imageBuffer = url
    console.log(imageBuffer)
    
    // Obtiene los colores de la imagen
    getColors(imageBuffer, 'image/jpeg').then(colors => {
      const colorsDiv = document.getElementById('colors');
      colorsDiv.innerHTML = '';
      
      colors.forEach(color => {
        const colorDiv = document.createElement('div');
        colorDiv.style.backgroundColor = color.hex();
        colorDiv.textContent = color.hex();
        colorsDiv.appendChild(colorDiv);
      });
    }).catch(err => {
      console.error(err);
    });
  


}



