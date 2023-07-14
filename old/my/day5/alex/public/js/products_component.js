class ProductsComponent extends Component {
    #products
    #rootElement
    constructor(parent, products) {
        super();
        this.#products = products;
        this.#rootElement = this.createElementByTemplate('#js-products');
        this.#products.forEach(product => {
            new ProductComponent(this.#rootElement.querySelector('.js-products'), product)
        });
        parent.appendChild(this.#rootElement);
    }
}

class ProductComponent extends Component {
    #product
    #rootElement
    #nameElement
    #imgElement
    #priceElement
    #btnElement
    #btnToCartElement
    constructor(parent, product) {
        super();
        this.#rootElement = this.createElementByTemplate('#js-product-card');
        this.#nameElement = this.#rootElement.querySelector('.js-name');
        this.#imgElement = this.#rootElement.querySelector('.js-img');
        this.#priceElement = this.#rootElement.querySelector('.js-price');
        this.#btnElement = this.#rootElement.querySelector('.js-btn');
        this.#product = product;
        this.#nameElement.innerText = product.name;
        this.#priceElement.innerText = product.price;
        this.#imgElement.setAttribute('src', './public/img/'+product.img);
        parent.appendChild(this.#rootElement);
        this.#btnElement.addEventListener('click', () => {this.addToCart()});
    }

    addToCart() {
        cartStorage.add(this.#product);
    }
}