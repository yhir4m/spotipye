

export function defineFontSize(itemId,str){

    try{
        const element = document.getElementById(itemId);
        if(element != null){
            const size = Math.ceil(16-(str.length*0.4));
            element.style.fontSize = size + "px";
        }
        return
        
        

    }catch(err){
        throw "parametro incorrecto" + err;
    }



};