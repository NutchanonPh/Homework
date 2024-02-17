const users = [
    {username: 'Andy', password: '1234'},
    {username: 'Bobby', password: '2345'},
    {username: 'Candy', password: '3456'}
];

let loginCount = 3;
while (loginCount > 0) {
    let input1 = prompt('Username');
    if (input1 == null) {
        alert('Process abort please try again later');
        break;
    }
    let input2 = prompt('Password');
    if (input2 == null) {
        alert('Process abort please try again later');
        break;
    }
    let user = users.find(u => u.username == input1);
    if (user && user.password == input2) {
        alert(`Welcome ${user.username}!`);
        break;
    } else {
        alert('Username or Password are incorrect please try again later');
        loginCount--;

        if (loginCount > 0) {
            alert(`${loginCount}`);
        } else {
            alert('You are out of login please tryr again later');
        }
    }
}