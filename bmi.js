const form = document.querySelector("form")

//const height = parseInt(document.querySelector("height").value) --> This will give us empty value in height as it will take the value when the page is reloaded, hence no value is given at that time and we get empty string


form.addEventListener("submit", function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value) //we get the value of height in string form so we have to convert into integer form
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    if(height == "" || height<0 || isNaN(height)){
        results.innerHTML = "Please give a valid height"
    }
    else if(weight == "" || weight<0 || isNaN(weight)){
        results.innerHTML = "Please give a valid weight"
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2); //toFixed(x) rounds off to x decimal places
        let output = `${bmi}`;
        if(bmi<18.6){
            output += ", You are under weight";
        }
        else if(bmi>=18.6 && bmi<24.9){
            output += ", You have a normal BMI";
        }
        else if(bmi>=24.9){
            output += ", You are overweight";
        }
        results.innerHTML = output;
    }
})