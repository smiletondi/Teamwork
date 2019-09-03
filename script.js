const articleList= document.querySelector(".my-article-list");

// Deleting 
document.querySelectorAll(".btn-del").forEach( btn => {
    btn.addEventListener("click", () => {
        articleList.removeChild(btn.closest(".article"));
    })
})