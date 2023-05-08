function addEmploye(event){
    let localdata=localStorage.getItem("emp_project")
    if(localdata != null){
        arr=JSON.parse(localdata)
    }
    else{
        arr=[];
    }
    event.preventDefault();
    let name=frm.name.value;
    let email=frm.email.value;
    let password=frm.pwd.value;
// let arr=[];
    arr.push({"uname":name,"uemail":email,"upassword":password});
    localStorage.setItem("emp_project",JSON.stringify(arr));
}

