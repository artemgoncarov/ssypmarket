let cartStorage = {
    items : [],
    ...storage,
    add : function(id) {
        if (!items.includes(id)) {
            this.items.load('cart');
            this.items.push(id);
            this.items.save('cart');
        }
    }
    
}
