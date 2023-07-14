class ProductsComponent extends Component {
    #products;
    #rootElement;
    constructor (parentElement, products) {
        super();
        this.#rootElement = this.createElementByTemplate('#js-products');
        this.#products = products;
        products.forEach((el) => {
            new ProductComponent(this.#rootElement.querySelector('.js-products'), el);
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
    #korzElement;
    constructor (parentElement, product) {
        super();
        this.#rootElement = this.createElementByTemplate('#js-product-card');
        this.#product = product;
        this.#nameElement = this.#rootElement.querySelector(".js-name");
        this.#korzElement = this.#rootElement.querySelector(".js-korz");
        this.#buttonElement = this.#rootElement.querySelector(".js-btn");
        this.#imgElement = this.#rootElement.querySelector(".js-img");
        this.#priceElement = this.#rootElement.querySelector(".js-price");
        this.#nameElement.innerText = this.#product.name;
        this.#imgElement.setAttribute("src", "/day4/public/"+this.#product.img);
        this.#priceElement.innerText = this.#product.price;
        this.#buttonElement.addEventListener("click", () => {this.addToCart()});
        this.#korzElement.style.display = 'none';
        //product.forEach((el) => {
        //    new ProductComponent(this.#rootElement.querySelector('.js-product-card'), el);
        //});
        parentElement.appendChild(this.#rootElement);
    }
    addToCart() {
        cartStorage.add(this.#product.id);
        if ("click") { 
        this.#buttonElement.style.display ='none';
        this.#korzElement.style.display = 'block';
    }
    }
}