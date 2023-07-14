class CartButtonComponent extends Component {
    #rootElement
    #qtyElement

    constructor() {
        super();
        this.#rootElement = this.createElementByTemplate('#js-cart-button-template');
        this.#qtyElement = this.#rootElement.querySelector('.js-qty');
        this.#qtyElement.innerText = cartStorage.getLength();
        document.addEventListener("change-cart",() => {
            this.#qtyElement.innerText = cartStorage.getLength();
        });
        document.querySelector('.js-cart-icon').appendChild(this.#rootElement);
    }
}