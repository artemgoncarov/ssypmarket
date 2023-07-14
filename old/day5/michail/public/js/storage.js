let storage = {
    load: function(name){
        let savename = localStorage.getItem(name);
        if (savename !== null) {
            js = JSON.parse(savename);
            for (i in js){
                this[i] = js[i];
            }
        }

    
    },
    save: function(name){
        localStorage.setItem(name, JSON.stringify(this))
    }
}
