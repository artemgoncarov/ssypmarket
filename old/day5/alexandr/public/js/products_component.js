class ProductsComponent extends Component {
    #products
    #rootElement
    constructor(parentElement, products) {
        super();
        this.#rootElement = this.createByTemplate('#js-products');
        this.#products = products;
        this.#products.forEach(product => {
            new ProductComponent(this.#rootElement.querySelector('.js-products'), product);
        });
        parentElement.appendChild(this.#rootElement)
    }
}
class ProductComponent extends Component {
    #product
    #rootElement
    #nameElement
    #priceElement
    #imgElement
    #btnElement
    constructor (parentElement, product) {
        super();
        this.#rootElement = this.createByTemplate('#js-product-card');
        this.#nameElement = this.#rootElement.querySelector('.js-name');
        this.#priceElement = this.#rootElement.querySelector('.js-price');
        this.#imgElement = this.#rootElement.querySelector('.js-img');
        this.#btnElement = this.#rootElement.querySelector('.js-btn');
        
        this.#nameElement.innerText = product.name;
        this.#priceElement.innerText = product.price;
        this.#imgElement.setAttribute('src', './public/img/'+product.img); 
        parentElement.appendChild(this.#rootElement);      
    }
}