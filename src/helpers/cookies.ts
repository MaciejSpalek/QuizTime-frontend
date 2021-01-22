export const showCookie = (name: string): any => {
    if (document.cookie !== "") {
        const cookies = document.cookie.split(/; */);

        for (let i=0; i<cookies.length; i++) {
            const [cookieName, cookieVal] = cookies[i].split("=")

            if (cookieName === decodeURIComponent(name)) {
                return decodeURIComponent(cookieVal);
            }
        }
    }
}

export const setCookie = (name: string, val: string, date?: Date, path?: string, domain?: string, secure?: string): void => {
    if (navigator.cookieEnabled) { 
        const cookieName = encodeURIComponent(name);
        const cookieVal = encodeURIComponent(val);
        let cookieText = cookieName + "=" + cookieVal;

        date && (cookieText += "; expires=" + date.toUTCString());
        path && (cookieText += "; path=" + path);
        domain && (cookieText += "; domain=" + domain);
        secure && (cookieText += "; secure");
        
        document.cookie = cookieText;
    }
}

export const deleteCookie = (name: string): void => {
    const cookieName = encodeURIComponent(name);
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

export const getExpireDate = (tokenLifeTime: number): Date => {
    const getSecondsSinceEpoch = (): number => {  
        const date = new Date(); 
        return Math.round(date.getTime() / 1000)  
    } 
    
    return new Date((getSecondsSinceEpoch() + tokenLifeTime) * 1000)
}

  