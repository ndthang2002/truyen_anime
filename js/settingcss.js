function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#imagePreview").css(
        "background-image",
        "url(" + e.target.result + ")"
      );
      $("#imagePreview").hide();
      $("#imagePreview").fadeIn(650);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload").change(function () {
  readURL(this);
});

var ktlike = document.getElementById("like");
var paramthich = document.getElementById("paramthich");
var countlike = document.getElementById("countlike");
var i = 1;
var count = 0;
function like() {
  if (i % 2 != 0) {
    ktlike.style.color = "#2196f3";
    paramthich.value = "Thích";
    i++;
    count = 1;
    countlike.innerHTML = count + " lượt thích";
  } else {
    ktlike.style.color = "black";
    paramthich.value = "Bỏ thích";
    count = 0;
    i++;
    countlike.innerHTML = count + " lượt thích";
  }
  console.log(paramthich.value);
}

var preview = document.querySelector("#preview");
document.querySelector("#browse").onchange = function () {
  [].forEach.call(this.files, function (file) {
    if (/image\/.*/.test(file.type)) {
      // use any image format the browser can read
      var img = new Image();
      img.onload = remURL; // to remove Object-URL after use
      img.style.width = "100%"; // use style, "width" defaults to "auto"
      img.src = (URL || webkitURL).createObjectURL(file);
      preview.appendChild(img); // add image to preview container
    }
  });

  function remURL() {
    (URL || webkitURL).revokeObjectURL(this.src);
  }
};
var reset = document.getElementById("reset");
reset.onclick = () => {
  preview.innerHTML = "";
};
var resetcomment = document.getElementById("resetcomment");
resetcomment.onclick = () => {
  blah.src = "";
  console.log(blah.src);
};
imgInp.onchange = (evt) => {
  const [file] = imgInp.files;
  if (file) {
    blah.src = URL.createObjectURL(file);
  }
};


// like button css

let button = document.querySelector(".like-button");

button.addEventListener("click", function(e) {
  e.preventDefault();
  this.classList.toggle("active");
  this.classList.add("animated");
  generateClones(this);
});


function generateClones(button) {
  let clones = randomInt(2, 4);
  for (let it = 1; it <= clones; it++) {
    let clone = button.querySelector("svg").cloneNode(true),
      size = randomInt(5, 16);
    button.appendChild(clone);
    clone.setAttribute("width", size);
    clone.setAttribute("height", size);
    clone.style.position = "absolute";
    clone.style.transition =
      "transform 0.5s cubic-bezier(0.12, 0.74, 0.58, 0.99) 0.3s, opacity 1s ease-out .5s";
    let animTimeout = setTimeout(function() {
      clearTimeout(animTimeout);
      clone.style.transform =
        "translate3d(" +
        (plusOrMinus() * randomInt(10, 25)) +
        "px," +
        (plusOrMinus() * randomInt(10, 25)) +
        "px,0)";
      clone.style.opacity = 0;
    }, 1);
    let removeNodeTimeout = setTimeout(function() {
      clone.parentNode.removeChild(clone);
      clearTimeout(removeNodeTimeout);
    }, 900);
    let removeClassTimeout = setTimeout( function() {
      button.classList.remove("animated")
    }, 600);
  }
}


function plusOrMinus() {
  return Math.random() < 0.5 ? -1 : 1;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

