let storage = { 
    load : function(name) {
        let q = localStorage.getItem(name)
        if (q !== null)
        {
            q = JSON.parse(q);
            for(i in q)
            {
                ihis[i] = q[i];
            }
        }
    },
    save : function(name) {
        localStorage.setItem(name, JSON.stringify(this));
    }
}