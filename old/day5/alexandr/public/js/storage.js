let storage = {
    load: function (name) {
        let t = localStorage.getItem(name);
        if (t !== null) {
            t = JSON.parse(t);
            for (i in t) {
                this[i] = t[i];
            }
        }
    },
    save: function (name) { 
        localStorage.setItem(name, JSON.stringify(this)); 
    }
}