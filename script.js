function check(){
	var name=document.forms.log.user.value;
	var pass=document.forms.log.pass.value;
	if(name=="" || pass==""){
		window.alert("please enter username and password");
		name.focus();
	}
        document.location.href="index.html";
}