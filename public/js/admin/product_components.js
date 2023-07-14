class AdminProductsListItemComponent extends Component {
    #rootElement
    #nameElement
    #priceElement
    #deleteElement
    #products
    #parent
    constructor(parent, products) {
        super();
        this.#parent = parent;
        this.#rootElement = this.createElementByTemplate('#js-list-item');
        this.#nameElement = this.#rootElement.querySelector(".js-name");
        this.#priceElement = this.#rootElement.querySelector(".js-price");
        this.#deleteElement = this.#rootElement.querySelector(".js-delete");
        this.#nameElement.innerText = products.name;
        this.#priceElement.innerText = products.price;
        this.#deleteElement.addEventListener("click", (el) => {
            this.delete();
        })
        parent.productsListElement.appendChild(this.#rootElement);
        this.#products = products;
    }
    delete() {
        Api.post('/api/admin/product/delete.php', {
            password: storagePassword.get(),
            id: this.#products.id,
        }).then((data) => {
            if (data.result === "wrong_password") {
                alert("Wrong password");
            } else {
                this.#parent.updateList();
            }
        });
    }
}

class AdminProductsFormComponent extends Component {
    #rootElement
    #formElement
    #nameElement
    #imgElement
    #short_descriptionElement
    #descriptionElement
    #sort_orderElement
    #priceElement
    #qtyElement
    #buttonElement
    #showAllElement
    #productsListElement
    constructor() {
        super();
        this.#rootElement = this.createElementByTemplate("#js-product-form-template");
        this.#formElement = this.#rootElement.querySelector(".js-product-form");
        this.#nameElement = this.#rootElement.querySelector(".js-name");
        this.#imgElement = this.#rootElement.querySelector(".js-img");
        this.#short_descriptionElement = this.#rootElement.querySelector(".js-small-description");
        this.#descriptionElement = this.#rootElement.querySelector(".js-description");
        this.#sort_orderElement = this.#rootElement.querySelector(".js-sort-order");
        this.#priceElement = this.#rootElement.querySelector(".js-price");
        this.#qtyElement = this.#rootElement.querySelector(".js-qty");
        this.#buttonElement = this.#rootElement.querySelector(".js-btn");
        this.#showAllElement = this.#rootElement.querySelector(".js-show-all");
        this.#productsListElement = this.#rootElement.querySelector(".js-product-list");
        this.#showAllElement.addEventListener("click", () => {
            this.updateList();
        });
        this.#formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            this.save();
        });
        this.getRoot().appendChild(this.#rootElement);
    }
    updateList() {
        Api.post("/api/product/getAll.php", { "password": storagePassword.get() }).then((data) => {

            this.#productsListElement.innerHTML = '';
            data.forEach(element => {
                new AdminProductsListItemComponent(this, element);
            });

        });
    }
    get productsListElement() {
        return this.#productsListElement;
    }
    save() {
        let obj = {
            name: this.#nameElement.value,
            img: this.#imgElement.value,
            short_description: this.#short_descriptionElement.value,
            description: this.#descriptionElement.value,
            sort_order: this.#sort_orderElement.value,
            qty: this.#qtyElement.value,
            price: this.#priceElement.value,
            password: storagePassword.get(),
        };
        Api.post("/api/admin/product/create.php", obj).then((data) => {
            if (data.result === "wrong_password") {
                alert("Ошибка: неправильный пароль.");
            }
            else if (data.result === "ok") {
                this.updateList();
            }
        });
    }
}