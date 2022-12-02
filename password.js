function pwid_validation(pwid,mx,my)
{
var pwid_len = pwid.value.length;
if (pwid_len == 0 ||pwid_len >= my || pwid_len < mx)
{
alert("Password should not be empty / length must be between "+mx+" to "+my);
pwid.focus();
return false;
}
return true;
}