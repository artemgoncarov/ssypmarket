class ProductCardsComponent extends Component{
    #rootElement
    #listElement
    constructor(){
        super();
        this.#rootElement = this.createElementByTemplate("#js-list-template")
        this.#listElement = this.#rootElement.querySelector(".js-list");
        Api.post('/api/product/getAll.php').then((data) => {
            data.forEach((el) => {
                new ProductCardComponent(this, el);
            })
        })
        this.getRoot().appendChild(this.#rootElement);
    }
    get listElement() {
        return this.#listElement;
    }
}
class ProductCardComponent extends Component{
    #rootElement
    #nameElement
    #imgElement
    #descriptionElement
    #priceElement
    #addElement
    #toElement
    #qtyElement
    #idElement
    #hrefElement
    #href1Element
    constructor(parent, product){
        super();
        this.#rootElement = this.createElementByTemplate('#js-list-item-template');
        this.#nameElement = this.#rootElement.querySelector(".js-name");
        this.#imgElement = this.#rootElement.querySelector(".js-img");
        this.#descriptionElement = this.#rootElement.querySelector(".js-descr");
        this.#priceElement = this.#rootElement.querySelector(".js-price");
        this.#addElement = this.#rootElement.querySelector(".js-btn-add");
        this.#toElement = this.#rootElement.querySelector(".js-btn-to-car");
        this.#qtyElement = this.#rootElement.querySelector(".js-btn-no-qty");
        this.#nameElement.innerText = product.name; 
        this.#descriptionElement.innerText = product.short_description;
        this.#imgElement.setAttribute('src', '/public/img/products/small/' + product.img);

        this.#hrefElement = this.#rootElement.querySelector(".js-img-link");
        this.#href1Element = this.#rootElement.querySelector(".js-img-link1");  
        this.#priceElement.innerText = product.price; 
        this.#addElement.style.display = 'none';
        this.#toElement.style.display = 'none';
        this.#qtyElement.style.display = 'none';

        this.#hrefElement.setAttribute("href", "/product/?id=" + product.id);
        this.#href1Element.setAttribute("href", "/product/?id=" + product.id);
        
        if (cartStorage.has(product.id)){
            this.#toElement.style.display = 'inline-block';
        }
        else {
            this.#addElement.style.display = 'inline-block';
        }
        if (product.qty == 0) {
            this.#qtyElement.style.display = 'inline-block';
            this.#addElement.style.display = 'none';
            this.#toElement.style.display = 'none';
        }

        this.#addElement.addEventListener("click", (el) => {
            cartStorage.add(product.id);
            this.#addElement.style.display = 'none';
            this.#toElement.style.display = 'block';
        })
        parent.listElement.appendChild(this.#rootElement);
    }
}