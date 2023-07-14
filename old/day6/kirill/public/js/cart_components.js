class CartItemComponent extends Component{
    constructor(parent, products){
        super();
    }
}

class CartComponent extends Component{
    #rootElement
    #products
    #name
    #img
    #price
    constructor(parent, products){
        super();
        this.#rootElement = this.createElementByTemplate('#js-cart');
        this.#name = this.createElementByTemplate('.js-name');
        this.#img = this.createElementByTemplate('.js-img');
        this.#price = this.createElementByTemplate('.js-price');
        this.#products.forEach(product => {
            new CartItemComponent(this.#rootElement.querySelector('.js-cart-item-template'), product)});
        parent.appendChild(this.#rootElement);
    }
}