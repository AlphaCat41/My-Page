let myBirth = new Date("08/11/1998");
//calculate month difference from current date in time  
let month_diff = Date.now() - myBirth.getTime();

//convert the calculated difference in date format  
let age_dt = new Date(month_diff);

//extract year from date      
let year = age_dt.getUTCFullYear();

//now calculate the age of the user  
let age = Math.abs(year - 1970);

document.getElementById("age").innerHTML = "(" + age + " years)"

var text_name = document.querySelector(".name");

text_name.addEventListener("mouseover", function () {
    this.textContent = "ภักดี หนุนภักดี";
})

text_name.addEventListener("mouseout", function () {
    this.textContent = "Pakdee Hnoonpakdee";
})