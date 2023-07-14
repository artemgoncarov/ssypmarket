let couponStorage = {
    ...storage,
    code: "",
    value: 0,
    set : function(c, v) {
        this.load("coupon");
        this.code = c;
        this.value = v;
        this.save("coupon");
    }


}