const articleList= document.querySelector(".my-article-list");

document.querySelectorAll(".btn-del").forEach( btn => {
    btn.addEventListener("click", () => {
        articleList.removeChild(btn.closest(".article"));
    })
})