export function timeFormat(ms){
    let residuo = Math.floor((ms%60000)/1000);
    return `${Math.floor(ms/60000)}:${residuo.toString().length == 1? residuo = "0"+ residuo: residuo = residuo}`;
}