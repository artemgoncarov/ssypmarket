class ProductsComponent extends Component {
    #products
    #rootElement
    constructor(parentElement, products){
        super();
        this.#rootElement = this.createElementByTemplate("#js-products");
        this.#products = products;
        products.forEach(el => {
            new ProductComponent(this.#rootElement.querySelector(".js-products"), el);
        });
        parentElement.appendChild(this.#rootElement);
    };
};

class ProductComponent extends Component {
    #product
    #rootElement
    #nameElement
    #imgElement
    #priceElement
    constructor(parentElement, product){
        super();
        this.#rootElement = this.createElementByTemplate("#js-product-card");
        this.#product = product;
        this.#nameElement = this.#rootElement.querySelector(".js-name");
        this.#imgElement = this.#rootElement.querySelector(".js-img");
        this.#priceElement = this.#rootElement.querySelector(".js-price");
        this.#nameElement.innerText = this.#product.name;
        this.#imgElement.setAttribute("src", "/day5/rodoslav/public/img/"+this.#product.img);
        this.#priceElement.innerText = this.#product.price;
        this.#imgElement.addEventListener("click", event => {if(localStorage.getItem("cart").indexOf(this.#product.name)==-1){if(confirm('Добавить "'+this.#product.name+'" в корзину?')){cartStorage.add(this.#product.name);}}else{alert("Товар уже находится в корзине.");}});
        parentElement.appendChild(this.#rootElement);
    };
};