let storage = {
    save : function(name){
        localStorage.setItem(name, JSON.stringify(this));
    },
    load : function(name){
        let js = localStorage.getItem(name);
        if (js !== null) {
            let e = JSON.parse(js);
            for (i in e) {
                this[i] = e[i]; 
            }
        } 
    }
 }