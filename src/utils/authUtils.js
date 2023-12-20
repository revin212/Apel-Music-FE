import { dateAddDays, dateAddMinutes } from "./DateUtils";

export const doesHttpOnlyCookieExist =  (cookiename) => {
    var d = new Date();
    d.setTime(d.getTime() + (1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookiename + "=new_value;path=/;" + expires;
    return document.cookie.indexOf(cookiename + '=') == -1;
  }

  export const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  export const setAuthCookies = (data) => {
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'userId=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'rolename=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'email=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = `token=${data.token}; path=/; expires=${dateAddMinutes(Date.now(), 15).toUTCString()};`;
    document.cookie = `userId=${data.userId}; path=/; expires=${dateAddMinutes(Date.now(), 15).toUTCString()};`;
    document.cookie = `rolename=${data.roleName}; path=/; expires=${dateAddMinutes(Date.now(), 15).toUTCString()};`;
    document.cookie = `refreshToken=${data.refreshToken.refreshToken}; path=/; expires=${dateAddDays(Date.now(), 7).toUTCString()};`;
    document.cookie = `email=${data.refreshToken.email}; path=/; expires=${dateAddDays(Date.now(), 7).toUTCString()};`;
  }

  export const deleteAuthCookies = () => {
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'userId=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'rolename=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'email=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }


  export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[_!@#$%^&*-]).{6,}$/
    return passwordRegex.test(password);
  }

  export const validateName = (name)=>{
    if (!name.replace(/\s/g, '').length) {
      return false
    }
    return true
  }

  export const validateEmail = (email)=>{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return true
  }
    return false
}