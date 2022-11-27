let flag = 1
let draw = 0
let checkone,checktwo,checkthree,checkfour,checkfive,checksix,checkseven,checkeight,checknine
let reset = document.querySelector('.reset').innerHTML = 'Reset'
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let win = document.querySelector('.winner')

function funcone(){
    if(flag == 1){
        one.innerHTML = '<img class="cross" src="https://cdn-icons-png.flaticon.com/512/2997/2997911.png"/>'
        flag = 0
        checkone = 1
        one.disabled = true
        draw++
        Test() 
    }else{
        one.innerHTML = '<img class="cross" src="https://cdn-icons-png.flaticon.com/512/481/481078.png"/>'
        flag = 1
        checkone = 0
        one.disabled = true
        draw++
        Test()
    }
}
function functwo(){
    if(flag == 1){
        two.innerHTML = '<img class="cross" src="https://cdn-icons-png.flaticon.com/512/2997/2997911.png"/>'
        flag = 0
        checktwo = 1
        two.disabled = true
        draw++
        Test()
    }else{
        two.innerHTML = '<img class="cross" src="https://cdn-icons-png.flaticon.com/512/481/481078.png"/>'
        flag = 1
        checktwo = 0
        two.disabled = true
        draw++
        Test()
    }
}

function functhree(){
    if(flag == 1){
        three.innerHTML = '<img class="cross" src="https://cdn-icons-png.flaticon.com/512/2997/2997911.png"/>'
        flag = 0
        checkthree = 1
        three.disabled = true
        draw++
        Test()
    }else{
        three.innerHTML = '<img class="cross" src="https://cdn-icons-png.flaticon.com/512/481/481078.png"/>'
        flag = 1
        checkthree = 0
        three.disabled = true
        draw++
        Test()
    }
}

function funcfour(){
    if(flag == 1){
        four.innerHTML = '<img class="cross" src="https://cdn-icons-png.flaticon.com/512/2997/2997911.png"/>'
        flag = 0
        checkfour = 1
        four.disabled = true
        draw++
        Test()
    }else{
        four.innerHTML = '<img class="cross" src="https://cdn-icons-png.flaticon.com/512/481/481078.png"/>'
        flag = 1
        checkfour = 0
        four.disabled = true
        draw++
        Test()
    }
}
function funcfive(){
    if(flag == 1){
        five.innerHTML = '<img class="cross" src="https://cdn-icons-png.flaticon.com/512/2997/2997911.png"/>'
        flag = 0
        checkfive = 1
        five.disabled = true
        draw++
        Test()
    }else{
        five.innerHTML = '<img class="cross" src="https://cdn-icons-png.flaticon.com/512/481/481078.png"/>'
        flag = 1
        checkfive = 0
        five.disabled = true
        draw++
        Test()
    }
}

function funcsix(){
    if(flag == 1){
        six.innerHTML = '<img class="cross" src="https://cdn-icons-png.flaticon.com/512/2997/2997911.png"/>'
        flag = 0
        checksix = 1
        six.disabled = true
        draw++
        Test()
    }else{
        six.innerHTML = '<img class="cross" src="https://cdn-icons-png.flaticon.com/512/481/481078.png"/>'
        flag = 1
        checksix = 0
        six.disabled = true
        draw++
        Test()
    }
}


function funcseven(){
    if(flag == 1){
        seven.innerHTML = '<img class="cross" src="https://cdn-icons-png.flaticon.com/512/2997/2997911.png"/>'
        flag = 0
        checkseven = 1
        seven.disabled = true
        draw++
        Test()
    }else{
        seven.innerHTML = '<img class="cross" src="https://cdn-icons-png.flaticon.com/512/481/481078.png"/>'
        flag = 1
        checkseven = 0
        seven.disabled = true
        draw++
        Test()
    }
}

function funceight(){
    if(flag == 1){
        eight.innerHTML = '<img class="cross" src="https://cdn-icons-png.flaticon.com/512/2997/2997911.png"/>'
        flag = 0
        checkeight = 1
        eight.disabled = true
        draw++
        Test()
    }else{
        eight.innerHTML = '<img class="cross" src="https://cdn-icons-png.flaticon.com/512/481/481078.png"/>'
        flag = 1
        checkeight = 0
        eight.disabled = true
        draw++
        Test()
    }
}

function funcnine(){
    if(flag == 1){
        nine.innerHTML = '<img class="cross" src="https://cdn-icons-png.flaticon.com/512/2997/2997911.png"/>'
        flag = 0
        checknine = 1
        nine.disabled = true
        draw++
        Test()
    }else{
        nine.innerHTML = '<img class="cross" src="https://cdn-icons-png.flaticon.com/512/481/481078.png"/>'
        flag = 1
        checknine = 0
        nine.disabled = true
        draw++
        Test()
    }
}
function Test(){
    if((checkone == 1 && checktwo == 1 && checkthree == 1) || (checkone == 0 && checktwo == 0 && checkthree == 0)){
        if(checkone == 1){
            win.innerHTML = "User 1 Winner!"
        }else{
            win.innerHTML = "User 2 Winner!"
        }
        four.disabled = true
        five.disabled = true
        six.disabled = true
        seven.disabled = true
        eight.disabled = true
        nine.disabled = true

    }else if((checkfour == 1 && checkfive == 1 && checksix == 1) || (checkfour == 0 && checkfive == 0 && checksix == 0)){
        if(checkfour == 1){
            win.innerHTML = "User 1 Winner!"
        }else{
            win.innerHTML = "User 2 Winner!"
        }
        
        one.disabled = true
        two.disabled = true
        three.disabled = true
        seven.disabled = true
        eight.disabled = true
        nine.disabled = true
    }else if((checkseven == 1 && checkeight == 1 && checknine == 1) || (checkseven == 0 && checkeight == 0 && checknine == 0)){
        if(checkseven == 1){
            win.innerHTML = "User 1 Winner!"
        }else{
            win.innerHTML = "User 2 Winner!"
        }
        four.disabled = true
        five.disabled = true
        six.disabled = true
        one.disabled = true
        two.disabled = true
        three.disabled = true
    }else if((checkone == 1 && checkfour == 1 && checkseven == 1) || (checkone == 0 && checkfour == 0 && checkseven == 0)){
        if(checkone == 1){
            win.innerHTML = "User 1 Winner!"
        }else{
            win.innerHTML = "User 2 Winner!"
        }
        three.disabled = true
        five.disabled = true
        six.disabled = true
        two.disabled = true
        eight.disabled = true
        nine.disabled = true
    }else if((checktwo == 1 && checkfive == 1 && checkeight == 1) || (checktwo == 0 && checkfive == 0 && checkeight == 0)){
        if(checktwo == 1){
            win.innerHTML = "User 1 Winner!"
        }else{
            win.innerHTML = "User 2 Winner!"
        }
        three.disabled = true
        four.disabled = true
        six.disabled = true
        one.disabled = true
        seven.disabled = true
        nine.disabled = true
    }else if( (checkthree == 1 && checksix == 1 && checknine == 1) || (checkthree == 0 && checksix == 0 && checknine == 0)){
        if(checkthree == 1){
            win.innerHTML = "User 1 Winner!"
        }else{
            win.innerHTML = "User 2 Winner!"
        }
        two.disabled = true
        four.disabled = true
        five.disabled = true
        one.disabled = true
        seven.disabled = true
        eight.disabled = true
    }
    else if((checkone == 1 && checkfive == 1 && checknine == 1) || (checkone == 0 && checkfive == 0 && checknine == 0)){
        if(checkone == 1){
            win.innerHTML = "User 1 Winner!"
        }else{
            win.innerHTML = "User 2 Winner!"
        }
        two.disabled = true
        four.disabled = true
        six.disabled = true
        three.disabled = true
        seven.disabled = true
        eight.disabled = true
    }else if((checkthree == 1 && checkfive == 1 && checkseven == 1) || (checkthree == 0 && checkfive == 0 && checkseven == 0)){
        if(checkthree == 1){
            win.innerHTML = "User 1 Winner!"
        }else{
            win.innerHTML = "User 2 Winner!"
        }
        two.disabled = true
        four.disabled = true
        six.disabled = true
        one.disabled = true
        nine.disabled = true
        eight.disabled = true
    }
    else if(draw >= 9){
        document.querySelector('.draw').innerHTML = "Game Draw!"
    }
} 
function funcreset(){
    location.reload();
}