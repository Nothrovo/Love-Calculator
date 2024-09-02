// script.js
const form = document.getElementById("compatibility-form");
const calculateButton = document.getElementById("calculate-button");
const compatibilityScoreElement = document.getElementById("compatibility-score");
const heartContainer = document.querySelector(".heart-container");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name1 = document.getElementById("name1").value;
    const birthdate1 = document.getElementById("birthdate1").value;
    const name2 = document.getElementById("name2").value;
    const birthdate2 = document.getElementById("birthdate2").value;

    // Calculate compatibility score using the same hash function as before
    const hash = (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash * 31 + str.charCodeAt(i)) % 1000000007;
        }
        return hash;
    };

    const hash1 = hash(name1) + hash(birthdate1);
    const hash2 = hash(name2) + hash(birthdate2);
    const combinedHash = hash1 * 31 + hash2;
    const compatibilityScore = combinedHash % 100;

    // Display compatibility score and hearts
    compatibilityScoreElement.textContent = `Your compatibility score is: ${compatibilityScore}%`;
    heartContainer.innerHTML = "";
    for (let i = 0; i < Math.floor(compatibilityScore / 10); i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heartContainer.appendChild(heart);
    }
});