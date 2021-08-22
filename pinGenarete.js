/// genarate pin number
function genaratePin(){
    const genareteInputValue = document.getElementById("genarateInput");
    const createGenareteNumber = Math.round(Math.random()*10000);
    // console.log(createGenareteNumber);
    const genareteNumberString = "" + createGenareteNumber;
    // console.log(genareteNumberString.length);
    if(genareteNumberString.length == 4){
        genareteInputValue.value = createGenareteNumber; 
    }else{
        genaratePin();
    };
};

document.getElementById("calcAllBtn").addEventListener("click", function(event){
    // console.log(event.target.innerText);
    const calcInputValue = document.getElementById("calcInputValue");
    const numbers = event.target.innerText;
    if(isNaN(numbers)){
        if(numbers == "C"){
            calcInputValue.value = "";
        }
    }else{
        const currentNum = numbers
        const priviousNum = calcInputValue.value
        calcInputValue.value = priviousNum + currentNum;
        // console.log(calcInputValue.value);
    };

});

function checkMsg(){
    const genaretorMsg = document.getElementById("genarateInput").value;
    // console.log(genaretorMsg);
    const typeYourMsg = document.getElementById("calcInputValue").value;
    // console.log(typeYourMsg);
    const successMsg = document.getElementById("successMsg");
    const failerMsg = document.getElementById("failerMsg");
    if(genaretorMsg == typeYourMsg){
        successMsg.style.display = "block";
        failerMsg.style.display = "none";
        
    }else{
        failerMsg.style.display = "block";
        successMsg.style.display = "none";
    }
};


