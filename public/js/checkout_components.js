class CheckoutComponent extends Component {
    #rootElement
    #cartItemsElement
    #couponElement
    #summaElement
    #balanceElement
    #formElement
    #nameElement
    #phoneElement
    #commentElement
    #couponCode = ''
    #sum = 0
    #balance = 0
    #nErrorProducts = 0
    #acceptButtonElement
    #itemOkElement
    #allElement
    constructor() {
        super();
        if(cartStorage.getLength() === 0){
            location.href = '/empty/';   
        }else{
            this.#rootElement = this.createElementByTemplate("#js-checkout-template");
            this.#cartItemsElement = this.#rootElement.querySelector(".js-cart-items");
            this.#couponElement = this.#rootElement.querySelector(".js-coupon");
            this.#summaElement = this.#rootElement.querySelector(".js-summa");
            this.#couponCode = this.#rootElement.querySelector(".js-coupon-form-component");
            this.#balanceElement = this.#rootElement.querySelector(".js-balance");
            this.#acceptButtonElement = this.#rootElement.querySelector(".js-accept-button");
            this.#formElement = this.#rootElement.querySelector(".js-checkout");
            this.#nameElement = this.#rootElement.querySelector(".js-name");
            this.#phoneElement = this.#rootElement.querySelector(".js-phone");
            this.#commentElement = this.#rootElement.querySelector(".js-comment");
            this.#itemOkElement = this.#rootElement.querySelector(".js-item-ok");
            this.#allElement = this.#rootElement.querySelector(".js-all");
            this.#itemOkElement.style.display = "none";
            this.#formElement.addEventListener("submit", (event) => {
                this.checkout();
                event.preventDefault();
            });
            const ids = cartStorage.getAll();
            
            ids.forEach((id) => {
                new CartItemComponent(this, id); 
            });
            this.getRoot().appendChild(this.#rootElement);
            new CouponFormComponent(this);
        };
    }
    proofErrors(){
        let hasError = false;
        hasError = hasError || (this.#nErrorProducts > 0) ;
        hasError  = hasError || (this.#balance < this.#sum);
        if (hasError){
            this.#acceptButtonElement.classList.add('disabled');
        }
        else {
            this.#acceptButtonElement.classList.remove('disabled');
        }
    }
    changeNErrorProducts(i) {
        this.#nErrorProducts += i;
        this.proofErrors();
    }
    changeSum(sum){
        this.#sum += sum;
        this.#summaElement.innerText = this.#sum;
        this.proofErrors();
    }
    setCoupon (balance,code) {
        this.#balance = balance;
        this.#balanceElement.innerText = balance;
        this.#couponCode = code;
        this.proofErrors();
    }


    get cartItemsElement() {
        return this.#cartItemsElement;
    }
    get couponElement() {
        return this.#couponElement;
    }
    
    checkout() {
        Api.post("/api/checkout/addOrder.php",{
        products : cartStorage.items, 
        name : this.#nameElement.value, 
        phone : this.#phoneElement.value,
        comment : this.#commentElement.value, 
        coupon_code : this.#couponCode}).then((data) => {
            if (data.result == "ok") {
                cartStorage.clear();
                this.okItem();
            } else if (data.result == "no_money") {
                location.reload();
            } else {
                location.reload();
            }
        })
    }

    okItem() {
        this.#allElement.style.display = "none";
        this.#itemOkElement.style.display = "block";
    }
}
class CartItemComponent extends Component {
    #rootElement
    #imgElement
    #nameElement
    #priceElement
    #deleteElement
    #id
    #parent
    #product
    #cartItemElement
    #hrefElement
    #href1Element
    #stockElement
    constructor(parent, id) {
        super();
        this.#id = parseInt(id);
        this.#parent = parent;
        this.#rootElement = this.createElementByTemplate("#js-cart-item-template");
        this.#stockElement = this.#rootElement.querySelector(".js-stock");
        this.#imgElement = this.#rootElement.querySelector(".js-img");
        this.#nameElement = this.#rootElement.querySelector(".js-name");
        this.#priceElement = this.#rootElement.querySelector(".js-price");
        this.#deleteElement = this.#rootElement.querySelector(".js-delete");
        this.#href1Element = this.#rootElement.querySelector(".js-img-href1");
        this.#hrefElement = this.#rootElement.querySelector(".js-img-href");
        this.#cartItemElement = this.#rootElement.querySelector('.js-cart-item');
        this.#stockElement = this.#rootElement.querySelector(".js-stock");
        this.#hrefElement.setAttribute("href", "/product/?id=" + this.#id);
        this.#href1Element.setAttribute("href", "/product/?id=" + this.#id);
        Api.post("/api/product/get.php", { id: this.#id }).then((el) => {
            if(!el){
                cartStorage.delete(this.#id);
            }
            else {
                this.#product = el;                
                if (this.#product.qty === 0) {
                    parent.changeNErrorProducts(1);
                } else {
                    this.#stockElement.style.display = "none";
                }
                parent.changeSum(this.#product.price);
                this.#nameElement.innerText = this.#product.name;
                this.#imgElement.setAttribute("src", "/../public/img/products/small/" + this.#product.img);
                this.#priceElement.innerText = this.#product.price + " б.";
                this.#deleteElement.addEventListener("click", () => {
                    this.delete();
                });
                parent.cartItemsElement.appendChild(this.#rootElement);
            }
        });
    }
    delete() {
        this.#cartItemElement.style.display = 'none';
        this.#parent.changeSum(-this.#product.price);
        if (this.#product.qty === 0) 
            this.#parent.changeNErrorProducts(-1);
        cartStorage.delete(this.#product.id);
        if(cartStorage.getLength() === 0)
            location.href = '/empty/';    
    }
}

class CouponFormComponent extends Component {
    #rootElement
    #formElement
    #codeElement
    #btnElement
    #parent
    #flawElement
    #waitElement
    #okElement
    constructor(parent) {
        super();
        this.#parent = parent;
        this.#rootElement = this.createElementByTemplate("#js-coupon-form-template");
        this.#formElement = this.#rootElement.querySelector(".js-coupon-form");
        this.#codeElement = this.#rootElement.querySelector(".js-code");
        this.#btnElement = this.#rootElement.querySelector(".js-button");
        this.#flawElement = this.#rootElement.querySelector(".js-flaw");
        this.#waitElement = this.#rootElement.querySelector(".js-wait");
        this.#okElement = this.#rootElement.querySelector(".js-ok");
        this.hideMessages();
        this.#formElement.addEventListener("submit", (event) => {
            this.getCoupon();
            event.preventDefault();
        });
        parent.couponElement.appendChild(this.#rootElement);
    }
    getCoupon () {
        this.hideMessages();
        this.#waitElement.style.display = "block";
        Api.post("/api/admin/coupon/checkBalance.php", { code: this.#codeElement.value }).then((el) => {
            this.hideMessages();
            if (el.result !== "error" && el.items[0].value !== 0) {
                this.#okElement.style.display = "block"; 
                this.#parent.setCoupon(el.items[0].value,this.#codeElement.value);
            } else {
                this.#flawElement.style.display = "block";
                this.#parent.setCoupon(0,this.#codeElement.value);
            }
        });
    }
    hideMessages () {
        this.#flawElement.style.display = "none";
        this.#waitElement.style.display = "none";
        this.#okElement.style.display = "none";
    }
 
}