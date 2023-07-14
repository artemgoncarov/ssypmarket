class ProductPageComponent extends Component {
    #rootElement
    #nameElement
    #imgElement
    #descriptionElement
    #priceElement
    #qtyElement
    #buyElement
    #nonElement
    #alreadyInElement
    #id
    #jsDiv1Element
    constructor() {
        super();
        this.#rootElement = this.createElementByTemplate('#js-product-page-template');
        this.#id = parseInt(this.#rootElement.querySelector('.js-id').dataset.id);
        this.#priceElement = this.#rootElement.querySelector('.js-price');
        this.#descriptionElement = this.#rootElement.querySelector('.js-description');
        this.#nameElement = this.#rootElement.querySelector('.js-name')
        this.#imgElement = this.#rootElement.querySelector('.js-img');
        this.#nonElement = this.#rootElement.querySelector('.js-non');
        this.#alreadyInElement = this.#rootElement.querySelector('.js-already-in');
        this.#buyElement = this.#rootElement.querySelector('.js-buy');
        this.#imgElement = this.#rootElement.querySelector('.js-img');
        this.#jsDiv1Element = this.#rootElement.querySelector('.js-img');
        this.#buyElement.style.display = 'none';
        this.#nonElement.style.display = 'none';
        this.#alreadyInElement.style.display = 'none';


        Api.post('/api/product/get.php', {id:this.#id}).then((data) => {
            if(data.id === undefined){
                location.href  = '/404/';
            }else{
                this.#nameElement.innerText = data['name'];
                this.#imgElement.src = '/../public/img/products/small/' + data['img'];
                this.#descriptionElement.innerText = data['description'];
                this.#priceElement.innerText = data['price'];
                this.#qtyElement = data['qty'];
                
                if (this.#qtyElement !== 0) {
                    if(!cartStorage.has(this.#id)){
                        this.#buyElement.style.display = 'block';
                        this.#buyElement.addEventListener('click', (e) => {
                            cartStorage.add(this.#id);
                            this.#buyElement.style.display = 'none';
                            this.#alreadyInElement.style.display = 'block';
                        });
                    }else{
                        this.#alreadyInElement.style.display = 'block';
                    }
                } else {
                    this.#nonElement.style.display = 'block';
             }
             this.getRoot().appendChild(this.#rootElement);
            }
        });
    }
}