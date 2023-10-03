function sub_click(dir)
{
    let email=_('semail').value;
    if(!validEmail(email))
        alert("Enter Valid Email");
    else
    {
        _('semail').value="";
        subscribe(email,dir);
    }
}
function subscribe(email,dir)
{
    let url=dir+"subscribe.php?email="+email;
    let response=makeRequest(url,false);
    if(response=="1")
    {
        alert("Subscribed Successfully");
        return true;
    }
    else if(response=="2")
    {
        alert("Already Subscribed");
        return false;
    }
    else
    {
        alert("Error Occured");
        return false;
    }
}