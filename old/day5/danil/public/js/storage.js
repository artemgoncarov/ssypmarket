let storage = {
    load: function(name){
        k = localStorage.getItem(name);
        if(k !== null){
            k = JSON.parse(k);
            for(i in k){
                this[i] = k[i];
            }
        }
    },
    save : function(name) {
        localStorage.setItem(name, JSON.stringify(this));
    },
    clearall: function(i){
        localStorage[i].style.display ='none';
        console.log("kaka");
    },
    clear: function(i){
        localStorage[i].style.display ='none';
        console.log("kaka");
    } 
}