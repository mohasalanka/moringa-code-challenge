// The Challenge 1
function ShowGrade(){
    // Get the value entered in the input field
    let mark=parseInt(document.getElementById("grade").value);

    //convert the value to a number mark=Number(mark);
    //caculate the grade based on the mark
  


    let grade;
    
    if(mark>79 && mark <= 100){
         grade="A"
    }else if(mark>= 60 && mark<=79){
         grade="B"
    }else if(mark>= 50 && mark<=59){
        grade="C"
    }else if(mark>= 40 && mark<=49){
         grade="D"
    }
    else if (mark <0 || mark >100){
        grade="invalid number"

    }else{
         grade="E"
    }


    // Display the grade on the page
    document.getElementById("result")
    .innerHTML="The student's grade " + grade;
    
}


let btn=document.getElementById("btn")
btn.addEventListener("click", ()=>{
    ShowGrade()
})
// The challenge 2

function caculater(){
    const speedInput= document.getElementById("speed")
    const speed = speedInput.value;

    const resultDiv = document.getElementById("output")

    if(speed < 70){
        resultDiv.ineerHTML = "OK";
    }else{

        const demeritPoint = Math.floor((speed-70)/5);

        if(demeritPoints >12) {
            resultDiv.innerHTML = "License suspended";
        }else{
            resultDiv.innerHTML = `Points: ${demeritPoints}`;
        }
    }
}
