class AdminProductListItemComponent extends Component {
    #rootElement
    #nameElement
    #imgElement
    #priceElement
    constructor() {
        super();
        this.#rootElement = this.createElementByTemplate('#js-cart-item-template');
        this.#nameElement
        this.#nameElement = this.#rootElement.querySelector('.js-name');    
        this.#imgElement = this.#rootElement.querySelector('.js-img');
        this.#priceElement = this.#rootElement.querySelector('.js-price');
        parent.appendChild(this.#rootElement);
    }
}

class AdminProductListComponent extends Component {
    #rootElement
    constructor(parent,products) {
        super();
        this.#rootElement = this.createElementByTemplate('#js-list-template');
        parent.appendChild(this.#rootElement);
    }
}
class AdminProductFormComponent extends Component {
    #rootElement 
    #nameElement
    #imgElement
    #smalldescriptionElement
    #descriptionElement
    #sortorderElement
    #priceElement
    #qtyElement
    constructor() {
        super();
        this.#rootElement = this.createElementByTemplate('#js-list-template');
        this.#nameElement = this.#rootElement.querySelector('.js-name');
        this.#imgElement = this.#rootElement.querySelector('.js-img');
        this.#smalldescriptionElement = this.#rootElement.querySelector('.js-small-description');
        this.#descriptionElement = this.#rootElement.querySelector('.js-description');
        this.#sortorderElement = this.#rootElement.querySelector('.js-sort-order');
        this.#priceElement = this.#rootElement.querySelector('.js-price');
        this.#qtyElement = this.#rootElement.querySelector('.js-qty');
    }
}

