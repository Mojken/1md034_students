let orderButton = document.getElementById("order");

function order() {
  var form = document.getElementById("secrets");

  var nameArr = Array.from(form.getElementsByClassName("name"));
  var emailArr = Array.from(form.getElementsByClassName("email"));
  var addressArr = Array.from(form.getElementsByClassName("street"));
  var phoneArr = Array.from(form.getElementsByClassName("phone"));
  var genderArr = Array.from(form.getElementsByClassName("gender"));
  var paymentArr = Array.from(form.getElementsByClassName("payment"));

  function getGender(gender) {
    if (gender.checked) return gender.value;
    else return "";
  }

  var name = nameArr.map(x => x.value).join(", ");
  var email = emailArr.map(x => x.value).join(", ");
  var address = addressArr.map(x => x.value).join(", ");
  var phone = phoneArr.map(x => x.value).join(", ");
  var gender = genderArr.map(x => getGender(x)).join("");
  var payment = paymentArr.map(x => x.value).join(", ");

  console.log("--- Order: --- \n" +
  "Name: " + name + "\n" +
  "Email: " + email + "\n" +
  "Address: " + address + "\n" +
  "Phone: " + phone + "\n" +
  "Gender: " + gender + "\n" +
  "Payment: " + payment + "\n");
}

//orderButton.addEventListener("click", order);

