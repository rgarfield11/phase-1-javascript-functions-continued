// code your solution here

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
};

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
};

/*function wrapAdjective(outerP = '*') {
    return function(innerP = 'special') {
        return `You are ${outerP}${innerP}${outerP}`
    }
}
*/
function wrapAdjective(flair = "*"){
    return function(adj = 'special'){
        return `You are ${flair}${adj}${flair}!`
    }
}