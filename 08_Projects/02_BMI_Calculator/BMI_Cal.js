const form = document.querySelector('form')
// This usecase will give empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML=`Please give vaild Height ${height}`;
    }  

    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML=`Please give vaild Weight ${weight}`;
    }

    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        //show result
        if(bmi<18.6)
        results.innerHTML=`<span>${bmi}</span> Under Weight`
        else if(bmi <24.9 && bmi>18.6)
        results.innerHTML=`<span>${bmi}</span> Normal Range`
        else
        results.innerHTML=`<span>${bmi}</span> Overweight`
    }
})