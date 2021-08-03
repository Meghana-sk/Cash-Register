const payme = document.querySelector("#pay");
const givenCash = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check");
const notesToBeGiven = document.querySelectorAll(".notes-denominations-given");

let availablecash = [2000,500,100,20,10,5,1];//0 0 100*4 20*4 10*0 5*1 3*1

payme.addEventListener("change",
function displayGivenCash() {
    givenCash.style.display = "inline";
    document.getElementById("second-input").style.display = "block";

});



checkBtn.addEventListener("click",
   function calculateNoteDenominationToBeGivenBack() {
       
    
    let amountToBeGivenback = parseInt(givenCash.value) - parseInt(payme.value);//488
    if (typeof(amountToBeGivenback) === "number") {
    for (let index = 0; index < availablecash.length; index++) {
        const notes = Math.trunc(amountToBeGivenback / availablecash[index]);
        amountToBeGivenback = (amountToBeGivenback % availablecash[index]);
        notesToBeGiven[index].innerText = notes;
    }
}
else {
    console.log("Invalid bill or given amount")
}
  
});

// let Rs2000 = document.getElementById("Rs2000");
// Rs2000.innerText = temp[0];
// let Rs500 = document.getElementById("Rs500");
// Rs500.innerText = temp[1];
// let Rs100 = document.getElementById("Rs100");
// Rs100.innerText = (temp[2]);
// let Rs20 = document.getElementById("Rs20");
// Rs20.innerText = (temp[3]);
// let Rs5 = document.getElementById("Rs5");
// Rs5.innerText = (temp[4]);
// let Rs1 = document.getElementById("Rs1");
// Rs1.innerText = (temp[5]);



// temp.push(parseInt(amountToBeGivenback / availablecash[0]))
// temp.push(parseInt((amountToBeGivenback % availablecash[0])/ availablecash[1]))
// temp.push(parseInt((amountToBeGivenback % availablecash[1]) / availablecash[2]))
// temp.push(parseInt((amountToBeGivenback % availablecash[2]) / availablecash[3]))
// temp.push(parseInt((amountToBeGivenback % availablecash[3]) / availablecash[4]))
// temp.push(parseInt((amountToBeGivenback % availablecash[4]) / availablecash[5]))
// temp.push(parseInt((amountToBeGivenback % availablecash[5])/ availablecash[6]))
