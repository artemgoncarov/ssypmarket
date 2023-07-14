// class CouponFormComponent extends Component{
//     constructor() {
//         super();
//     }
    
// }
class CheckoutComponent extends Component {
    #rootElement
    #parent
    constructor(parent, items) {
        super();
        this.#rootElement = this.createElementByTemplate("js-form-template")
    }
}