let storage = {
    load : function(name) {
        let json = localStorage.getItem(name);
        if(json) {
            let data = JSON.parse(json);
            for (i in data) {
                this[i] = data[i];
            }
        }
        

    },
    save : function(name) {
        localStorage.setItem(name, JSON.stringify(this));
    }

    
}