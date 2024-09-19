/**
 * THE LERAN TO STEAP BY STAPE 
 * 
 * --------------------- START-------------------
 * 
 * Step-1: add Event handler 
 * prevent page relod after from submit 
 * step-2:  get monet to be added to the account balance
 * get a pin Number 
 * step-3 : verify The Pin Nu8mber
 */


//step-1: add a  Event handler to the add money btn inside the from
document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        //prevent page relode after from submit
        event.preventDefault();
        // step-2: get the money to ba added to account balance
        const addMoney = document.getElementById('input-add-money').value;
        document.getElementById('input-add-money').value='';
        console.log(addMoney);
        // get to the pin Number to ba added corect pin number
        const addPinNumber = document.getElementById('input-pin-Number').value;
        document.getElementById('input-pin-Number').value='';
        console.log(addPinNumber);
        //step-3: condisation for fokira 
        //fokira type 
        if(addPinNumber === '1234'){
            // the corent balance to be inside a account balance 
            const updetBalance = document.getElementById('total-balance').innerText;
            // the convert the number type !== strinng
            const corentBalance = parseFloat(updetBalance);
            const newBlance = parseFloat(addMoney);
            // total amount ar sum 
            const updetToBalance = newBlance + corentBalance;
            console.log(updetToBalance);
            // step-6: get new balance
            document.getElementById('total-balance').innerText = updetToBalance;
        }
        else{
            alert('wrong password ? please try agin')
        }

    })