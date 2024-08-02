function calculateAge() {
    const dob = new Date(document.getElementById("dob").value);
    if (isNaN(dob.getTime())) {
        alert('Please enter a valid date of birth.');
        return;
    }

    const today = new Date();
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("year").innerHTML = years;
    document.getElementById("month").innerHTML = months;
    document.getElementById("day").innerHTML = days;
}
