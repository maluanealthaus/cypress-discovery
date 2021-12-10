function verifyAge() {
    var name = document.querySelector('input[name=name]');
    var age = document.querySelector('input[name=age]');

    if (name.value.length == 0) {
        alert('Name is required')
        return
    } else if (age.value.length == 0) {
        alert('Age is required')
        return
    }

    var ageNum = parseInt(age.value)

    if (ageNum >= 18 && ageNum < 70) {
        alert('Ok, you can get your license.')
    } else if (ageNum > 5 && ageNum < 18) {
        alert('Sorry, you may have to ride your bycicle.')
    } else if (ageNum >= 70) {
        alert('Sorry, you are too old.')
    } else {
        alert('You better drink milk.')
    }

}