class Api {
    static post(url, obj = {}) {
        return new Promise((resolve) => {
            let r = new XMLHttpRequest();
            r.open('post', url, true);
            r.setRequestHeader('Content-type', 'application/json');
            let json = JSON.stringify(obj);
            r.send(json);
            r.addEventListener('load', () => {
                if (r.status < 400 && r.status >= 200) {
                    resolve(JSON.parse(r.responseText));
                }
                else {
                    console.log("Error");
                }
            });
        });
    }
}