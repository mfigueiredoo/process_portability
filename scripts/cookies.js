var Cookies = {
    setCookie : (coockie_name, coockie_value, exdays) => {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = coockie_name + "=" + coockie_value + ";" + expires + ";path=/";
    },
    getCookie : (coockie_name) => {
        let name = coockie_name + "=";
        let cookies = document.cookie.split(';');
        for(let i = 0; i < cookies.length; i++) {
            let c = cookies[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
}

export default Cookies