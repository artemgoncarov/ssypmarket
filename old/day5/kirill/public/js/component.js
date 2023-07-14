class Component {
    createElementByTemplate(selector)
    {
        return document.querySelector(selector).content.clonenode(true);
    }
}