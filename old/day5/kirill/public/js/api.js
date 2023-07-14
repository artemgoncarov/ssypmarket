class Api {
    static post(url, obj = {}) {
        return new Promise((resolve) => {
            let r = new XMLHttpRequest();
            r.open('post', url, true);
            r.setRequestHeader('Content-Type', 'application/json');
            r.send(JSON.stringify(obj));
            r.addEventListener('load', () => {
                if (r.status >= 200 && r.status < 400) {
                    resolve(JSON.parse(r.responseText));
                }
                else {
                    console.log("Error")
                }
            });

        });
    }
}
