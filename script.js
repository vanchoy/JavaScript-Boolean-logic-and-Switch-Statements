var age = 20;

if (age < 20) {
    console.log('Ivan is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log('Ivan is a young man.');
} else {
    console.log('Ivan is a man.');
}


var job = 'teacher';

job = prompt('What does Ivan do?');

switch (job) {
    case 'teacher':
        console.log('Ivan teaches kids.');
        break;
    case 'driver':
        console.log('Ivan drives a cab in Lisbon.');
        break;
    case 'cop':
        console.log('Ivan helps fight crime.');
        break;
    default:
        console.log('Ivan does something else.');
}
