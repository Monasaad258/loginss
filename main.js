var btn=document.getElementById('button');
var item1=document.querySelector('.item1')
var item2=document.querySelector('.item2')
// form1
var Email=document.getElementById('Email')
var password=document.getElementById('password')
var logIn=document.getElementById('logIn')
// form2
var btnIn=document.getElementById('button2')
var myName=document.getElementById('Name')
var myGmail=document.getElementById('gmail')
var myPass=document.getElementById('myPass')
var signUp=document.getElementById('signUp')
// form3
var smart=document.getElementById('smart')
var Logout=document.getElementById('Logout')

var container;

function addProduct(){
container={
Gmail:myGmail.value,
pass:myPass.value,
Name:myName.value
}
localStorage.setItem('product',JSON.stringify(container));

}

function myValidation(){
    var regex={
        Name:/^[A-Z][a-z]{3,8}/,
        Gmail:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        pass:/[0-9]{3,}[a-z_]/
        }

signUp.addEventListener('click',function(){
if(regex.Name.test(myName.value)){
    if(regex.Gmail.test(myGmail.value)){
        if(regex.pass.test(myPass.value)){
            document.getElementById("success").innerHTML="success"
            // clearForm()
        }

}
}

else{

    document.getElementById("failed").innerHTML="All input is Required"
}
})

}

logIn.addEventListener('click',function(){
    addProduct()
    if(Email.value==container.Gmail){
        if(password.value==container.pass){
        smart.classList.replace('d-none','d-block')
        document.getElementById('welcome').innerHTML=container.Name;
        }
        else{
            document.getElementById('incorrect').innerHTML="incorrect email or password"
        }
    }
    })
    

    Logout.addEventListener('click',function(){

        smart.classList.replace('d-block','d-none')
    })

myName.addEventListener('input',function(){
    myValidation()
})
myGmail.addEventListener('input',function(){
    myValidation()
})

myPass.addEventListener('input',function(){
    myValidation()
})
btn.addEventListener('click',function(){
item2.style.left=0;

})

btnIn.addEventListener('click',function(){

item2.style.left='100%';
    })


// function clearForm(){
// myGmail.value=null
// myPass.value=null
// myName.value=null
// }
