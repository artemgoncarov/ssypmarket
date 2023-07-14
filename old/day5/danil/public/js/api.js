class Api {
    static post (url, object = {}){
        // console.log("abrakadabra");
        return new Promise((resolve) =>{
            let r = new XMLHttpRequest();
            r.open('post', url, true);
            r.setRequestHeader('Content-type','application/json');
            r.send(JSON.stringify(object));
            r.addEventListener('load',() => {
                if(r.status <400 && r.status >=200){
                    resolve(JSON.parse(r.responseText));
                }else{
                    console.log("Error " + r.status);
                }
            },
            );
        });
    }
}
// console.log(('./public/json/products.json'));
// Api.post('./json/products.json').then((data) =>{

// });