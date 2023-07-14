let storagePassword = {
    ...storage,
    password: "",
    set (password) {
        this.password = password;
        this.save("password");
    },
    get () {
        this.load("password");
        return this.password;
    }
}