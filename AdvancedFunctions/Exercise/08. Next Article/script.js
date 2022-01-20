function getArticleGenerator(articles) {
    let content = document.getElementById("content");
    return () => {
        if (articles.length != 0) {
            let newElement = document.createElement('article');
            newElement.textContent = articles.shift();
            content.appendChild(newElement);
        }
    }
}
