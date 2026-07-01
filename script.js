const imageContainer = document.getElementById("images");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const result = document.getElementById("para");

const classes = ["img1", "img2", "img3", "img4", "img5"];

// choose duplicate randomly
const duplicate = classes[Math.floor(Math.random() * classes.length)];

let images = [...classes, duplicate];

// shuffle
images.sort(() => Math.random() - 0.5);

let selected = [];

images.forEach((cls, index) => {
    const img = document.createElement("img");

    img.classList.add(cls);
    img.dataset.type = cls;
    img.id = "img" + (index + 1);

    img.addEventListener("click", function () {

        if (selected.length === 2) return;

        if (selected.includes(this)) return;

        this.classList.add("selected");
        selected.push(this);

        resetBtn.style.display = "inline-block";

        if (selected.length === 2) {
            verifyBtn.style.display = "inline-block";
        }

    });

    imageContainer.appendChild(img);
});

resetBtn.addEventListener("click", function () {

    selected.forEach(img => img.classList.remove("selected"));

    selected = [];

    verifyBtn.style.display = "none";
    resetBtn.style.display = "none";

    result.innerText = "";

});

verifyBtn.addEventListener("click", function () {

    if (selected[0].dataset.type === selected[1].dataset.type) {

        result.innerText =
            "You are a human. Congratulations!";

    } else {

        result.innerText =
            "We can't verify you as a human. You selected the non-identical tiles.";

    }

    verifyBtn.style.display = "none";

});//your code here
