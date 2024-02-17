const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const res = [
    {day: 'Mon', sum: 100},
    {day: 'Wed', sum: 300},
];

function findSum(day) {
    const foundDay = res.find(item => item.day == day);
    return foundDay ? foundDay.sum : 0;
}

const expectedResult = days.map(day => ({day, sum: findSum(day)}));

console.log(expectedResult);