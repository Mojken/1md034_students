var borgarVue = new Vue({
	el: '#vue',
  data: {
    burgers: menu,
    secrets: fields,
    payment: "",
    orderData: {"ordered": false}
  },
  methods: {
    order: function () {
      orderedBurgers = [];
      for (burger in this.burgers) {
        if (this.burgers[burger].selected) {
          orderedBurgers.push(this.burgers[burger].name);
        }
      }
      this.orderData.burgers = orderedBurgers;
      this.orderData.ordered = true;

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

      this.orderData.name = nameArr.map(x => x.value).join(", ");
      this.orderData.email = emailArr.map(x => x.value).join(", ");
      this.orderData.address = addressArr.map(x => x.value).join(", ");
      this.orderData.phone = phoneArr.map(x => x.value).join(", ");
      this.orderData.gender = genderArr.map(x => getGender(x)).join("");
      this.orderData.payment = paymentArr.map(x => x.value).join(", ");

      console.log(this.orderData);
    }
  }
})
