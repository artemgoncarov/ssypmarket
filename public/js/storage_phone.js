let phoneStorage = {
    ...Storage,
    phone: "",
    set: function(t) {
        this.load("phone");
        this.phone = t;
        this.save("phone");
    }
}