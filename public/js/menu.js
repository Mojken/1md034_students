let menu = [
  {
    "name": "Halloumiburger",
    "img": "https://www.max.se/contentassets/be939d2988e747adacd14f5ead4231cb/product_halloumiburgare.jpg",
    "calories": 645.5,
    "contents": ["brioche bread", "jalapeño salsa", "halloumi burger", "tomato", "onions", "lettuce", "mayonnaise"],
    "allergy": ["gluten", "milk protein", "lactose", "egg", "mustard"]
  },
  {
    "name": "Smokey Chipotle Halloumiburger",
    "img": "https://www.max.se/contentassets/873f8597a2db48ff80b26b4f3d628b6d/product_gdl-smokey-chipotle-halloumi.jpg",
    "calories": 970.6,
    "contents": ["Sweet potato bread", "chipotle sauce", "halloumi", "onion rings", "pickled onions", "lettuce", "mayonnaise"],
    "allergy": ["gluten", "milk protein", "lactose", "egg", "mustard"]
  },
  {
    "name": "Umami Halloumiburger",
    "img": "https://www.max.se/contentassets/00848003f52b4c8d8dcf139ecdb3fc1e/product_gdl-umami-halloumi2.jpg",
    "calories": 839.7,
    "contents": ["brioche bread", "halloumi burger", "tomato", "pickled onions", "umami dressing"],
    "allergy": ["gluten", "milk protein", "lactose", "egg", "mustard"]
  },
  {
    "name": "Smokey Chipotle Plant Beef",
    "img": "https://www.max.se/contentassets/32f727872e644cf1803605d39bacd581/product_gdl-smokey-chipotle-plant-beef.jpg",
    "calories": 920.2,
    "contents": ["sweet potato bread", "cheddar", "chipotle sauce", "plant beef", "onion rings", "pickled oniens", "lettuce", "mayonnaise"],
    "allergy": ["gluten", "milk protein", "lactose", "celery", "soya beans", "egg", "mustard"]
  },
  {
    "name": "Delifresh Signature Plant Beef",
    "img": "https://www.max.se/contentassets/359fcb7f236247a7a4a41cdf2ddf36b0/product_delifresh-signature-plant-beef.jpg",
    "calories": 870.6,
    "contents": ["sesame bread", "Delifresh plant beef", "cheddar", "ketchup", "tomato", "onions", "lettuce", "original dressing"],
    "allergy": ["gluten", "sesame seeds", "milk protein", "lactose", "celery", "soya beans", "egg", "mustard"]
  }
];


let fields = [
  {
    "name": "name",
    "text": "Full legal name",
    "show": true,
    "required": "true",
    "inputs": [
      {
        "checked": false,
        "value": "",
        "type": "text",
        "placeholder": "Here please",
        "autocomplete": "name",
        "text": "" 
      }
    ]
  },
  {
    "name": "email",
    "text": "Email",
    "show": true,
    "required": "true",
    "inputs": [
      {
        "checked": false,
        "value": "",
        "type": "email",
        "placeholder": "We won't spam",
        "autocomplete": "email",
        "text": "" 
      }
    ]
  },
  {
    "name": "phone",
    "text": "Phone",
    "show": true,
    "required": "true",
    "inputs": [
      {
        "checked": false,
        "value": "",
        "type": "tel",
        "placeholder": "We won't call",
        "autocomplete": "tel",
        "text": "" 
      }
    ]
  },
  {
    "name": "gender",
    "text": "ZOI Gender",
    "show": true,
    "required": false,
    "inputs": [
      {
        "checked": false,
        "type": "radio",
        "placeholder": false,
        "autocomplete": false,
        "text": "Agender",
        "value": "Agender"
      },
      {
        "checked": false,
        "value": "Monogender",
        "type": "radio",
        "placeholder": false,
        "autocomplete": false,
        "text": "Monogender"
      },
      {
        "checked": true,
        "value": "Multigender",
        "type": "radio",
        "placeholder": false,
        "autocomplete": false,
        "text": "Multigender"
      }
    ]
  },
  {
    "name": "cardnumber",
    "show": false,
    "autocomplete": "cc-number"
  },
  {
    "name": "cvc",
    "show": false,
    "autocomplete": "cc-csc"
  },
  {
    "name": "cc-exp",
    "show": false,
    "autocomplete": "cc-exp"
  }
];
