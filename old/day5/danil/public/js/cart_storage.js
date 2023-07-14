let cartStorage = {
    ...storage,
    items:[],
    add: function(id) {
        this.load('cart');
        // for(let i in this.items){
        //     if(this.items[i] === id){
        //         return undefined;
        //     }
        // }
        this.items.push(id);
        this.save("cart");
    },
    del: function(name){
        for(let i in this.items){
            if(this.items[i] === name){
                this.items.clear(i);
                return true;
            }
        }
        return undefined;
    }
}
