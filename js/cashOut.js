document.getElementById('add-cash-out').addEventListener('click',function(e){
    e.preventDefault();
    const cashOut = document.getElementById('input-cash-out').value;
    document.getElementById('input-cash-out').value='';
    const cashOutNumber = parseFloat(cashOut);
    const cashOutPin = document.getElementById('input-cash-out-pin').value;
    document.getElementById('input-cash-out-pin').value='';
    const cashOutPinNumber = parseFloat(cashOutPin);
    //fokira type
    if(cashOutPin=== '1234'){
        const balance = document.getElementById('total-balance').innerText;
      
        const outCash = balance - cashOutNumber;
        console.log(outCash);

        document.getElementById('total-balance').innerText = outCash;

    }else{
        alert('plaese type your corent ans or password');
    }

})

// cashOut btn hendlers event 

