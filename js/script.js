var introimg=0;
function introimgchange()
{
    let imagefolder="images/";
    if(introimg>2)
        introimg=0;
    switch(introimg)
    {
        case 0:
            _('introimage').style.opacity=0;
            setTimeout(
                function(){
                    _('introimage').src=imagefolder+"inimg0.jpg";
                    introimg++;
                    _('introimage').style.opacity=1;
                },600);
            break;
        case 1:
            _('introimage').style.opacity=0;
            setTimeout(
                function(){
                    _('introimage').src=imagefolder+"inimg1.jpg";
                    introimg++;
                    _('introimage').style.opacity=1;
                },600);
            break;
        case 2:
            _('introimage').style.opacity=0;
            setTimeout(
                function(){
                    _('introimage').src=imagefolder+"inimg2.jpg";
                    introimg++;
                    _('introimage').style.opacity=1;
                },600);
            break;
            break;
    }
}
function contact_click()
{
    let name=_('name').value;
    let email=_('email').value;
    let message=_('message').value;
    if(!validEmail(email))
        alert("Enter Valid Email");
    else
    {
        _('name').value="";
        _('email').value="";
        _('message').value="";
        if(!contact(name,email,message))
        {
            _('name').value=name;
            _('email').value=email;
            _('message').value=message;
        }
    }
}
function contact(name,email,message)
{
    let url="api.php";
    let params="name="+name+"&email="+email+"&message="+message;
    let response=makeRequest(url,false);
    if(response=="1")
    {
        alert("Message Sent Successfully");
        return true;
    }
    else
    {
        alert("Error Occured");
        return false;
    }
}
setInterval(introimgchange,6000);