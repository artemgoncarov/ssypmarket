class Component {
    createElementByTemplate (selector){
        // let element =  document.querySelector(selector).content.cloneNode(true); 
        return  document.querySelector(selector).content.cloneNode(true);
    }
}