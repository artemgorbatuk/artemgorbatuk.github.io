function calculateAge(date) {
    const now = new Date();
    const diff = Math.abs(now - date);
    const age = Math.floor(diff /(1000 * 60 * 60 * 24 * 365));
    return age
}

function getAge() {
    let birthday = new Date(1980, 4, 16);
    let valueAge = calculateAge(birthday);
    let elementAge = document.getElementById('age');
    elementAge.innerHTML = valueAge;
}
