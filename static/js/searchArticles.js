function filterContent() {
    const searchInput = document.querySelector("input[placeholder='Search articles...']").value.toLowerCase();


    const badges = document.querySelectorAll(".subtle-black .flex a");
    badges.forEach((badge) => {
        if (badge.textContent.toLowerCase().includes(searchInput)) {
            badge.style.display = ""; // Show the badge
        } else {
            badge.style.display = "none"; // Hide the badge
        }
    });


    const articles = document.querySelectorAll(".grid article");
    articles.forEach((article) => {
        const title = article.querySelector("h2").textContent.toLowerCase();
        const description = article.querySelector("p").textContent.toLowerCase();
        if (title.includes(searchInput) || description.includes(searchInput)) {
            article.style.display = ""; // Show the article
        } else {
            article.style.display = "none"; // Hide the article
        }
    });
}


document.querySelector("input[placeholder='Search articles...']").addEventListener("input", filterContent);