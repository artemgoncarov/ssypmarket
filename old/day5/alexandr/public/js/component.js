class Component {
    createByTemplate(selector) {
        return document.querySelector(selector).content.cloneNode(true);
    } 
}