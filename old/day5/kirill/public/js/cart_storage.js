let cartStorage = {
    items: [],
    ...storage,
    add: function(id)
    {
        items.load("cart");
        this.items.push(id);
        this.items.save("cart")        
    }
}