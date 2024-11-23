const body = document.getElementsByTagName("body")[0];

const configBody = document.getElementById("config-body");
const configButton = document.getElementById("config-button");
const darkModeCb = document.getElementById("dark-mode-cb");

console.log("config body");
console.log(configBody);

configButton.addEventListener("click", () => {
    if (configBody.style.display === "none") {
        configBody.style.display = "block";
    } else {
        configBody.style.display = "none";
    }
});

darkModeCb.addEventListener("change", () => {
    if (darkModeCb.checked) {
        body.dataset.theme = "dark";
    } else {
        body.dataset.theme = "";
    }
});
