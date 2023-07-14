class AdminPasswordComponent extends Component {
    #rootElement
    #passwordElement
    constructor() {
        super();
        this.#rootElement = this.createElementByTemplate("#js-password-template");
        this.#passwordElement = this.#rootElement.querySelector(".js-password");
        this.#passwordElement.addEventListener("input", () => {
            storagePassword.set(this.#passwordElement.value);

        });
     
        this.getRoot().appendChild(this.#rootElement);
    }
}