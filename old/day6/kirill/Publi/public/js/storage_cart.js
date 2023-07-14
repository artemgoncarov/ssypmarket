let cartStorage = {
    ...storage,
    items : [],
    add : function(id) {
        if (!this.items.includes(id)) {
            this.items.push(id);
        }
    }
}