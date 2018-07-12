"use strict";

(function () {

    var $theH1 = document.querySelector("h1");
    var $adult = document.querySelector("#adult");
    var $kid = document.querySelector("#kid");

    $adult.addEventListener("click", function () {
        axios.get("http://localhost:1337/").then(function (response) {
            $theH1.textContent = response.data;
        });
    });

    $kid.addEventListener("click", function () {
        axios.get("http://localhost:1338/").then(function (response) {
            $theH1.textContent = response.data;
        });
    });
})();
//# sourceMappingURL=main.js.map
