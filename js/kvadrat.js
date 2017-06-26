var aValue = Number(prompt('Enter value of A'));
document.write('<br>')
document.write('Value a = ' + aValue)

var bValue = Number(prompt('Enter value of B'));
document.write('<br>')
document.write('Value b = ' + bValue)

var cValue = Number(prompt('Enter value of C'));
document.write('<br>')
document.write('Value c = ' + cValue)

var discr = (bValue * bValue) - 4 * (aValue * cValue);
document.write('<br>')
document.write('Discriminant ' + discr);

function solution(discr){
    if (discr > 0){
        return 'Quadratic equation has two roots';
    }
    if (discr == 0){
        return 'Quadratic equation has one root';
    }
    if (discr < 0){
        return 'There is no solution';
    }
}

document.write('<br>')
document.write('Answer: ' + solution(discr));