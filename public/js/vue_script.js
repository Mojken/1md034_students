/* jslint es6:true, indent: 2 */
/* global Vue, io */
/* exported vm */
'use strict';
const socket = io();

var borgarVue = new Vue({
	el: '#vue',
  data: {
    orders: {},
    burgers: menu,
    secrets: fields,
    payment: "",
    orderData: {"ordered": false}
  },
  created: function() {
    /* When the page is loaded, get the current orders stored on the server.
     * (the server's code is in app.js) */
    socket.on('initialize', function(data) {
      this.orders = data.orders;
    }.bind(this));

    /* Whenever an addOrder is emitted by a client (every open map.html is
     * a client), the server responds with a currentQueue message (this is
     * defined in app.js). The message's data payload is the entire updated
     * order object. Here we define what the client should do with it.
     * Spoiler: We replace the current local order object with the new one. */
    socket.on('currentQueue', function(data) {
      this.orders = data.orders;
    }.bind(this));
  },
  methods: {
    getNext: function() {
      /* This function returns the next available key (order number) in
       * the orders object, it works under the assumptions that all keys
       * are integers. */
      let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function(event) {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      };
      socket.emit('addOrder', {
        orderId: this.getNext(),
        details: {
          x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y,
        },
        orderItems: ['Beans', 'Curry'],
      });
    },
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
      var phoneArr = Array.from(form.getElementsByClassName("phone"));
      var genderArr = Array.from(form.getElementsByClassName("gender"));
      var paymentArr = Array.from(form.getElementsByClassName("payment"));

      function getGender(gender) {
        if (gender.checked) return gender.value;
        else return "";
      }

      this.orderData.name = nameArr.map(x => x.value).join(", ");
      this.orderData.email = emailArr.map(x => x.value).join(", ");
      //this.orderData.address = addressArr.map(x => x.value).join(", ");
      this.orderData.phone = phoneArr.map(x => x.value).join(", ");
      this.orderData.gender = genderArr.map(x => getGender(x)).join("");
      this.orderData.payment = paymentArr.map(x => x.value).join(", ");

      console.log(this.orderData);
    }
  }
})
