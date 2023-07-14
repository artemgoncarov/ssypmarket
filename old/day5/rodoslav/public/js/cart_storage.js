let cartStorage = {
    ...storage,
    items: [],
    add(id){this.load("cart"); if (this.items.indexOf(id)==-1) {this.items.push(id);} this.save("cart");},
};