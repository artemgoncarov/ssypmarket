let cartStorage = {
    ...storage,
    items: [],
    add: function (id) {
        id = parseInt(id);
        this.load('cart');
        if (!this.items.includes(id)) {
            this.items.push(id);
        }
        this.save('cart');
        document.dispatchEvent(new CustomEvent("change-cart"));
    },
    has: function (id) {
        id = parseInt(id);
        this.load('cart');
        return (this.items.includes(id));
    },
    delete: function (id) {
        id = parseInt(id);
        this.load("cart");
        this.items = this.items.filter((el) => {
            return id !== el;
        }); 
        this.save("cart");
        document.dispatchEvent(new CustomEvent("change-cart"));
    },
    getQty: function () {
        this.load('cart');
        return (this.items.find(qty));
    },
    getAll: function (){
        this.load("cart");
        return this.items;
    },
    getLength: function () {
        this.load("cart");
        return this.items.length;
    },
    clear: function () {
        this.load("cart");
        this.items.length = 0;
        this.save("cart");
    }
}