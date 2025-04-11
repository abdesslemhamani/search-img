const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const results = document.getElementById("search-results");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const query = input.value;
    results.innerHTML = "Searching...";

    const accessKey = "9FSLHlxhEsJlUJbqqNyHpmoHQDel3qkQRDPOVQBdjIA";

    const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=${accessKey}`
    );

    const data = await response.json();

    results.innerHTML = "";
    data.results.forEach((photo) => {
        const img = document.createElement("img");
        img.src = photo.urls.small;
        results.appendChild(img);
    });
});
