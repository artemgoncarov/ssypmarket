class ProductsComponent extends Component {
    #products;
    #rootElement;
    constructor(parentElement, products) {
        super();
        this.#rootElement = this.createElementByTemplate('.cardlist');
        this.#products = products;
        products.forEach((el) => {
            new ProductComponent(this.#rootElement.querySelector('.cardlist'), el);
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
    constructor(parentElement, product) {
        super();
        this.#rootElement = this.createElementByTemplate('.card');
        this.#product = product;
        this.#nameElement = this.#rootElement.querySelector(".name");
        this.#korzElement = this.#rootElement.querySelector(".basket");
        this.#buttonElement = this.#rootElement.querySelector(".button");
        this.#imgElement = this.#rootElement.querySelector(".img");
        this.#priceElement = this.#rootElement.querySelector(".price");
        this.#nameElement.innerText = this.#product.name;
        this.#imgElement.setAttribute("src", "/day4/public/" + this.#product.img);
        this.#priceElement.innerText = this.#product.price;
        this.#buttonElement.addEventListener("click", () => { this.addToCart() });
        this.#korzElement.style.display = 'none';
        //product.forEach((el) => {
        //    new ProductComponent(this.#rootElement.querySelector('.js-product-card'), el);
        //});
        parentElement.appendChild(this.#rootElement);
    }
    addToCart() {
        cartStorage.add(this.#product.id);
        if ("click") {
            this.#buttonElement.style.display = 'none';
            this.#korzElement.style.display = 'block';
        }
    }
}