document.getElementById('cash-out')
.addEventListener('click',function(){
    document.getElementById('cash-out-from').classList.remove('hidden');
    document.getElementById('add-money-from').classList.add('hidden');
})
document.getElementById('add-money')
.addEventListener('click',function(){
    document.getElementById('cash-out-from').classList.add('hidden');
    document.getElementById('add-money-from').classList.remove('hidden');
})