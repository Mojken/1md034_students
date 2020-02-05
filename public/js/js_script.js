function menuItem(name, img, calories, contents, allergy) {
  this.name = name;
  this.img = img;
  this.calories = calories;
  this.contents = contents;
  this.allergy = allergy;
  this.stats = function() {
    return this.name + ": " + this.calories;
  };
}

let a = new menuItem(
  "Halloumiburger",
  "https://www.max.se/contentassets/be939d2988e747adacd14f5ead4231cb/product_halloumiburgare.jpg",
  645.5,
  ["brioche bread", "jalapeño salsa", "halloumi burger", "tomato", "onions", "lettuce", "mayonnaise"],
  ["gluten", "milk protein", "lactose", "egg", "mustard"]
);

let b = new menuItem(
  "Smokey Chipotle Halloumiburger",
  "https://www.max.se/contentassets/873f8597a2db48ff80b26b4f3d628b6d/product_gdl-smokey-chipotle-halloumi.jpg",
  970.6,
  ["Sweet potato bread", "chipotle sauce", "halloumi", "onion rings", "pickled onions", "lettuce", "mayonnaise"],
  ["gluten", "milk protein", "lactose", "egg", "mustard"]
);

let c = new menuItem(
  "Umami Halloumiburger",
  "https://www.max.se/contentassets/00848003f52b4c8d8dcf139ecdb3fc1e/product_gdl-umami-halloumi2.jpg",
  839.7,
  ["brioche bread", "halloumi burger", "tomato", "pickled onions", "umami dressing"],
  ["gluten", "milk protein", "lactose", "egg", "mustard"]
);

let d = new menuItem(
  "Smokey Chipotle Plant Beef",
  "https://www.max.se/contentassets/32f727872e644cf1803605d39bacd581/product_gdl-smokey-chipotle-plant-beef.jpg",
  920.2,
  ["sweet potato bread", "cheddar", "chipotle sauce", "plant beef", "onion rings", "pickled oniens", "lettuce", "mayonnaise"],
  ["gluten", "milk protein", "lactose", "celery", "soya beans", "egg", "mustard"]
);

let e = new menuItem(
  "Delifresh Signature Plant Beef",
  "https://www.max.se/contentassets/359fcb7f236247a7a4a41cdf2ddf36b0/product_delifresh-signature-plant-beef.jpg",
  870.6,
  ["sesame bread", "Delifresh plant beef", "cheddar", "ketchup", "tomato", "onions", "lettuce", "original dressing"],
  ["gluten", "sesame seeds", "milk protein", "lactose", "celery", "soya beans", "egg", "mustard"]
);

function burger(burger) {
  ret = "<div class='menuborgar'>";
  ret += "<h2>" + burger.name + "</h2>";
  ret += '<div class="box image-div"><img src="' + burger.img + '" width="300"></div>';
  ret += "<div class='box'>"
  ret += "<dt>Calories</dt><dd>" + burger.calories + "</dd>";
  ret += "<dt>Content</dt><dd>" + burger.contents.join(', ').replace(/^\w/, c => c.toUpperCase()) + "</dd>";
  ret += "<dt>Allergy</dt><dd>" + burger.allergy.join(', ').replace(/^\w/, c => c.toUpperCase()) + "</dd>";
  ret += "</div></div>"
  return ret;
}

let burgers = [a, b, c, d, e]; 

document.getElementById("borgar-wrapper").innerHTML += burgers.map(x => burger(x)).join('');
