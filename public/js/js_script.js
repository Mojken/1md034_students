
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

//document.getElementById("borgar-wrapper").innerHTML += burgers.map(x => burger(x)).join('');
