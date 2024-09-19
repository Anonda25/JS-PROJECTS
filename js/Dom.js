// console.log('hello  DOM');

document.getElementById('btn-login')
.addEventListener('click', function(event){
    event.preventDefault();//<--------- amar jonno vajal
    const textInput = document.getElementById('text-input').value;
    const yourPin = document.getElementById('you-pin').value;
    document.getElementById('text-input').value= '';
    document.getElementById('you-pin').value= '';
    // console.log(textInput, yourPin);
    //bad way to laran 

    if(textInput=== '10' && yourPin === '1234'){
        console.log('You are Login now');
        window.location.href ='./Home.html'
    }
    else{
        alert('textInput or your pin not mass')
    }
})