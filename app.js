function generate(){
    let length=document.getElementById('length').value||12;
    let char='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+{}:><';
    let pass="";
    for(let i=0; i<length; i++){
        pass+=char.charAt(Math.floor(Math.random()*char.length));
        document.getElementById("password").value=pass;
    }
}


function copyPass(){
    let pass= document.getElementById("password");
    pass.select();
    document.execCommand('copy');
    alert("Copyed:" +pass.value);
    
}