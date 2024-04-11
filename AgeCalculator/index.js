function calculateAge() {
  var dob = document.getElementById("dob").value;
  var today = new Date();
  var birthDate = new Date(dob);
  var years = today.getFullYear() - birthDate.getFullYear();
  var months = today.getMonth() - birthDate.getMonth();
  var days = today.getDate() - birthDate.getDate();

  if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
    years--;
    months += 12;
  }

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  // var age = years + " years, " + months + " months, " + days + " days";
  document.getElementById("years").innerHTML = years;
  document.getElementById("months").innerHTML = months;
  document.getElementById("days").innerHTML = days;
}
