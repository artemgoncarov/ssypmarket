class ProductsComponent extends Component {
    #products;
    #rootElement
    constructor(parentElement, products){
        super();
        this.#rootElement = this.createElementByTemplate('#js-products');
        this.#products = products
        products.forEach((el) => {
            new ProductComponent(this.#rootElement.quarySelector('.js-products'));
        });
        parentElement.appendChild(this.#rootElement);
    }
}

class ProductComponent extends Component {
    #product;
    #rootElement;
    #nameElement;
    #imgElement;
    #priceElement;
    #buttonElement;
    constructor(parentElement, product){
        super();
        this.#rootElement = this.createElementByTemplate('#js-product-cart');
        this.#product = product;
        this.#nameElement = this.#rootElement.quarySelector('.js-name');
        this.#corzElement = this.#rootElement.quarySelector('.js-corz');
        this.#buttonElement = this.#rootElement.quarySelector('.js-btn');
        this.#imgElement = this.#rootElement.quarySelector('.js-img');
        this.#priceElement = this.#rootElement.quarySelector('.js-price');
        this.#nameElement.innerText = this.#product.name;
        this.#imgElement.setAttribute('src', "/day4/public/" = +this.#product.img);
        this.#priceElement.innerText = this.#product.price;
        this.#buttonElement.addEventListener("click", () => {this.addToCart()});
        this.#corzElement.style.display = 'none';
        //product.forEach((el) => {
            //new ProductComponent(this.#rootElement.quarySelector('.js-product-cart'), el);
        //});
        parentElement.appendChild(this.#rootElement);
    }
    addToCart(){
        cartStorage.add(this.#product.id );
        if ("click"){
            this.#buttonElement.style.display = 'none';
            this.#corzElement.style.display = 'block';
        }
    }
}