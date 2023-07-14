let cartStorage = {
    ...storage,
    items : [],
    add: function(id){
        this.load('cart');
        if (this.items.indexOf(id) == -1) {
        this.items.push(id); }
        this.save('cart');
    },
    //isInCart: function(id){
    //    if (this.items.indexOf(id) == -1) {
    //        this.#korzElement.style.display = 'none';
    //    }
    //    else
    //    this.#korzElement.style.display = 'block';
    //}
}