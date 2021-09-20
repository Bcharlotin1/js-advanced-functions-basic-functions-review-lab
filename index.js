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

function calculato(params) {
    
}