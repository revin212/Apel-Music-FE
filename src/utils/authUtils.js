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
    document.cookie = 'token=; SameSite=None; Secure; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    document.cookie = 'userId=; SameSite=None; Secure; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    document.cookie = 'rolename=; SameSite=None; Secure; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    document.cookie = `token=${data.token}; SameSite=None; Secure; path=/`;
    document.cookie = `userId=${data.userId}; SameSite=None; Secure; path=/`;
    document.cookie = `rolename=${data.roleName}; SameSite=None; Secure; path=/`;
  }

  export const deleteAuthCookies = () => {
    document.cookie = 'token=; SameSite=None; Secure; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    document.cookie = 'userId=; SameSite=None; Secure; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    document.cookie = 'rolename=; SameSite=None; Secure; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
  }