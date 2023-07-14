class ProductsComponent extends Component {
    #products
    #rootElement
    constructor(parentElement, products){
        super();
        this.#rootElement = this.createElementBySelector('#js-products');
        this.#products = products;
        this.#products.forEach(element => {
            new ProductComponent(this.#rootElement.querySelector('.js-products'), element);   
        });
        parentElement.appendChild(this.#rootElement);
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
        this.#rootElement = this.createElementBySelector('#js-product-card');
        this.#priceElement = this.#rootElement.querySelector(".js-price");
        this.#nameElement = this.#rootElement.querySelector('.js-name');
        this.#btnElement = this.#rootElement.querySelector('.js-btn')  
        this.#imgElement = this.#rootElement.querySelector('.js-img')

        this.#nameElement.innerText = product.name;
        this.#priceElement.innerText = product.price;
        this.#imgElement.setAttribute('src', './public/img/'+product.img);
        
        
        parentElement.appendChild(this.#rootElement);



    }

    addToCart() {
        
    }

}