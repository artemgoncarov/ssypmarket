class ProductsComponent extends Component {
    #products
    #rootElement
    constructor(parentElement,products){
        super();
        this.#rootElement = this.createElementByTemplate('#js-products');
        this.#products = products;
        this.#products.forEach(el => {
            new ProductComponent(this.#rootElement.querySelector('.js-products'),el);
            
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
    #btnElementplus
    #btnElementminus
    constructor(parentElement,product){
        super();
        // this.#rootElement = this.createElemententByTemplate('.js-product-cart');
        this.#product = product;
        this.#rootElement = this.createElementByTemplate('#js-product-card');
        this.#nameElement = this.#rootElement.querySelector('.js-name');
        this.#priceElement = this.#rootElement.querySelector('.js-price');
        this.#imgElement = this.#rootElement.querySelector('.js-img');
        this.#btnElementplus = this.#rootElement.querySelector('.js-btnplus');
        this.#btnElementminus = this.#rootElement.querySelector('.js-btnminus');


        this.#nameElement.innerText = this.#product.name;
        this.#priceElement.innerText = this.#product.price;
        this.#imgElement.src = "./public/img/" +  this.#product.img;
        this.#btnElementplus.innerText = "Купить";
        this.#btnElementminus.innerText = "Убрать";



        // this.#product.querySelector('.js-name').innerText = product.name;
        // this.#product.querySelector('.js-price').innerText = product.price;
        // this.#product.querySelector('.js-img').src ="./public/img/" + product.img;
        this.#btnElementplus.addEventListener(
            'click',(event)=>{
                this.addToCart();
                
            }
        );
        this.#btnElementminus.addEventListener(
            'click',(event)=>{
                this.clearthis(this.#nameElement);
                
            }
        );
        // this.#product.querySelector('#')
        parentElement.appendChild(this.#rootElement);
        // console.log(this.#product);
    }

    addToCart() {
        // alert(this.#product.name);
        cartStorage.add(this.#product.name)
                // cart = JSON.stringify(o[i]);
    }
    clearthis(name){
        let r = cartStorage.del(name.name);
        if(r === undefined){
            alert("этого нет в корзине");
        }
        
    }
}