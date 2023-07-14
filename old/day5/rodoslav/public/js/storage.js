let storage = {
    save(name) {
        localStorage.setItem(name, JSON.stringify(this));
    },
    load(name){
        if (localStorage.getItem(name) !== null) {
            value = JSON.parse(localStorage.getItem(name));
            for (i in value) {
                this[i] = value[i];
            }
        }
    },
};