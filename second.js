let name = document.querySelector(".name1");
let nameRegex = /^[A-Z][a-z]{2,10}$/
let numberRejex=/\d/;
let spaceRejex=/\s/;
let p = document.querySelector(".p1")
let p2=document.querySelector(".p2")
let p3=document.querySelector(".p3")


name.addEventListener("input", () => {

    let value = name.value

    let test = nameRegex.test(value)

    if (test) {

        p.textContent = "Valid"

        p.style.color = "green"

    }
    

    else if(numberRejex.test(value)){
p.textContent="only letters"
p.style.color="red"
}
else if(spaceRejex.test(value)){
p.textContent="no space"


}
else if(value.length>0&&value.length<3){
p.textContent="more than 2 letters"
p.style.color="red"

}

    
    else {

        p.textContent = "Invalid"

        p.style.color = "red"
    }

    })
    let name2=document.querySelector(".name2")
name2.addEventListener("input", () => {

    let value = name2.value

    let test = nameRegex.test(value)

    if (test) {

        p2.textContent = "Valid"

        p2.style.color = "green"

    }
    

    else if(numberRejex.test(value)){
p2.textContent="only letters"
p2.style.color="red"
}
else if(spaceRejex.test(value)){
p2.textContent="no space"


}
else if(value.length>0&&value.length<3){
p2.textContent="more than 2 letters"
p2.style.color="red"

}

    
    else {

        p2.textContent = "Invalid"

        p2.style.color = "red"
    }

    })









let email = document.querySelector(".email");
let mailRegex = /^[a-z][A-Za-z0-9]{3,20}(@gmail.com)$/
let p4 = document.querySelector(".p4")
let startRejex=/^[a-z]/


email.addEventListener("input", () => {

    let value = email.value

    let test = mailRegex.test(value)

    if (test) {

        p4.textContent = "Valid"

        p4.style.color = "green"

    }
    else if(spaceRejex.test(value)){
p4.textContent="no space"
p4.style.color="red"
    }
    else {

        p4.textContent = "Invalid"

        p4.style.color = "red"
    }

    })

let phone = document.querySelector(".phone");
let phoneRegex = /^(01)[1250]{8}$/;
let numberOnlyRejex=/\d/;
let egyptRejex=/^(010|011|012|015)\d{8}$/;

phone.addEventListener("input", () => {

    let value = phone.value

    let test = phoneRegex.test(value)

 if(egyptRejex.test(value)){
p3.textContent="Valid"
p3.style.color="green"

    }
    
    else if(numberOnlyRejex.test(value)){
p3.textContent="only numbers"
p3.style.color="red"

    }
    else if(spaceRejex.test(value)){
p3.textContent="no space"
p3.style.color="red"

    }
    
    
    else {

        p3.textContent = "Invalid"

        p3.style.color = "red"
    }

    })
    let date=document.querySelector(".birth")
    let birth2=document.querySelector(".birth2")
let dateRejex= /^\d{2}\/\d{2}\/\d{4}$/

date.addEventListener("input", () => {

    let value = date.value

    let test = dateRegex.test(value)
if(test){
birth2.textContent="valid"
birth2.style.color="green"
}
else {
birth2.textContent="date of birth must be with this form"
birth2.style.color="red"

}



})