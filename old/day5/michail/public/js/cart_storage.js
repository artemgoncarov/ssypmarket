let cartStorage = {
    items: [],
    ...storage,
    add: function (id) {
        this.load();
        this.items.push(id);
        // this.items.save('cart');
    }
}
