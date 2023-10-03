function _(id)
{
    return document.getElementById(id);
}
function __(cls)
{
    return document.getElementsByClassName(cls);
}
function makeRequest(url,typ=true) 
{
    var xhr = new XMLHttpRequest();
    if(typ)
        xhr.open('GET', url, false); // Third parameter set to false for synchronous request
    else
        xhr.open('POST', url, false); // Third parameter set to false for synchronous request
    xhr.send();

    if (xhr.status === 200) {
      return xhr.responseText;
    } else {
      return null;
    }
}
function validEmail(email)
{
    let emailregex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailregex.test(email);
}
function redirect(url)
{
    window.location.href=url;
}