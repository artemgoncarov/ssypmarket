
class Api {
    static post (url, obj) {
         return new Promise ((resolve) => {
            let t = new XMLHttpRequest();
            t.open('post', url, true);
            t.setRequestHeader('Content-type', 'aplication/json');
            let r = JSON.stringify(obj);
            t.send(r);
            t.addEventListener('load', () => {
                if(t.status >= 200 && t.status < 400) {
                   resolve(JSON.parse(t.responseText));
                } 
                else {
                    console.log("ERROR!");
                }
            })
            
        })
    }
}