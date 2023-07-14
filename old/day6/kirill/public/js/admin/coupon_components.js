class AdminCouponListItemComponent extends Component{
    #rootElement
    #codeElement
    #valueElement
    #deleteElement
    #coupon
    #parent
    constructor(parent, coupon){
        super();
        this.#parent = parent;
        this.#rootElement = this.createElementByTemplate('#js-list-item');
        this.#codeElement = this.#rootElement.querySelector(".js-code");
        this.#valueElement = this.#rootElement.querySelector(".js-value");
        this.#deleteElement = this.#rootElement.querySelector(".js-delete");
        this.#codeElement.innerText = coupon.code;
        this.#valueElement.innerText = coupon.value;
        this.#deleteElement.addEventListener("click", (el) => {
            this.delete();
        })
        parent.couponListElement.appendChild(this.#rootElement);
        this.#coupon = coupon;
    }
    delete () {
            Api.post('/api/admin/coupon/delete.php', {
                password : storagePassword.get(),
                id : this.#coupon.id,
            }).then((data) => {
                if(data.result === "wrong_password"){
                    alert("Wrong password");
                }else{
                    this.#parent.updateList();
                }
            });
    }
}

class AdminCouponFormComponent extends Component{
    #rootElement
    #formElement
    #codeElement
    #valueElement
    #showAllElement
    #couponListElement
    constructor(){
        super();
        this.#rootElement = this.createElementByTemplate("#js-form-template");
        this.#formElement = this.#rootElement.querySelector(".js-coupon-form")
        this.#codeElement = this.#rootElement.querySelector(".js-code");
        this.#valueElement = this.#rootElement.querySelector(".js-value");
        this.#showAllElement = this.#rootElement.querySelector(".js-show-all"); 
        this.#couponListElement = this.#rootElement.querySelector(".js-coupon-list");
        this.#showAllElement.addEventListener("click", () => {
            this.updateList();
        })
        this.#formElement.addEventListener("submit", (e) => {
            e.preventDefault(); 
            e.stopImmediatePropagation(); 
            this.save(); 
        })
        this.getRoot().appendChild(this.#rootElement);
    }
    updateList () {
        Api.post("/api/admin/coupon/getAll.php", {"password": storagePassword.get()}).then((data) => {
            if (data.result === "wrong_password") {
                alert("Ошибка: неправильный пароль.");
            }
            else if (data.result === "ok") {
                this.#couponListElement.innerHTML = '';
                data.items.forEach(element => {
                    new AdminCouponListItemComponent(this, element);
                });
            }
        });
    }
    get couponListElement() {
        return this.#couponListElement;
    }
    save() {
        let obj = {
            code: this.#codeElement.value,
            value: this.#valueElement.value,
            password: storagePassword.get(),
        };
        Api.post("/api/admin/coupon/create.php", obj).then((data) => {
            if (data.result === "wrong_password") {
                alert("Ошибка: неправильный пароль.");
            }
            else if (data.result === "ok") {
                this.updateList();
            }
        });
    }
}