import Settings from "./settings.js";

var Cookies = {
    setCookie : (cookie_name, cookie_value, exdays) => {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cookie_name + "=" + cookie_value + ";" + expires + ";path=/";
    },
    getCookie : (cookie_name) => {
        let name = cookie_name + "=";
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
        return ""
    },
    updateCookie : (cookie_name, cookie_value, exdays) => {
        if (Cookies.getCookie(cookie_name) == "") return false
        Cookies.deleteCookiebyName(cookie_name)
        Cookies.setCookie(cookie_name, cookie_value, exdays)
    },
    deleteCookiebyName : (cookie_name) => {
        document.cookie = cookie_name + '=; Max-Age=0'
        if (Cookies.getCookie(cookie_name) == "") return true
        return false
    },
    getAllCookieNames : () => {
        let cookies = document.cookie.split(';');
        let cookie_names = []
        for(let i = 0; i < cookies.length; i++) {
            let c = cookies[i];
            if (c.charAt(0) == ' ') { c = c.substring(1)}
            let c_name = c.split('=')[0];
            cookie_names.push(c_name)
        }
        return cookie_names
    },
    deleteAllCookies : () => {
        let sucess = true
        let cookie_names = Cookies.getAllCookieNames()
        for(let i = 0; i < cookie_names.length; i++) {
            if (!Cookies.deleteCookiebyName(cookie_names[i]))
                sucess = false;
        }
        return sucess
    }
}

export default Cookies