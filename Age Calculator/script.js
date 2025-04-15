const btn = document.getElementById("btn")
const birthday = document.getElementById("birthday")
const result = document.getElementById("result")
function calculate() {
    const bdayval = birthday.value
    if(bdayval===""){
        alert("Please enter your birthday")
    }else{
        const currentDate = new Date()
        const dob = new Date(bdayval)
        if(dob>currentDate){
            alert("Your birthday cannot be in the future!")
        }else{
        const age = getAge(bdayval)
        result.innerText = `Your are ${age} ${age>1? "years" : "year"} old`
        }
    }
    
}

function getAge(bdayval) {
    const cur = new Date()
    const birthdate = new Date(bdayval)
    let age = cur.getFullYear() - birthdate.getFullYear()
    const month = cur.getMonth() - birthdate.getMonth();
    if (month<0 || (month===0 && cur.getDate()<birthdate.getDate())){
        age--
    }    
    return age 
}

btn.addEventListener("click",calculate)