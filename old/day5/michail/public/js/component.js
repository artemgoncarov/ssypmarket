class Component {
    createElementBySelector(selector){
        return document.querySelector(selector).content.cloneNode(true);
    }
}