// Your code here
function wrapAdjective(params ="*"){
    return function(param = "special") {
        return `You are ${params}${param}${params}!`
    }

}


function saturdayFun(activity = 'roller-skate' ) {
    let currentActivity = `This Saturday, I want to ${activity}!`
    return currentActivity
    
}

function mondayWork(activity = 'go to the office') {
    let currentActivity = `This Monday, I will ${activity}.`
    return currentActivity
}

const Calculator = {
   add,
   subtract,
   multiply,
   divide
}



function add() {
    return  1 + 3
}
function subtract() {
    return 1 - 3
}
function multiply() {
    return  1 * 3
}
function divide() {
    return  10 / 5
}

function actionApplyer(num, array) {
    if (array.length === 0){
        return num 
    }
    return array.forEach(element => {element(num)});
}