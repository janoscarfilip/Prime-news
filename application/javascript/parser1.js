const xmlUrl = 'https://oscarswebsite.se/application/data/article1.xml';

// Function to parse XML and display news
function displayData(data) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'application/xml');

    const home_feed = document.getElementById('home_feed');
    const articles = xmlDoc.getElementsByTagName('article');

    for (let i = 0; i < articles.length; i++) {
        const img = articles[i].getElementsByTagName('img')[0].textContent;
        const headline = articles[i].getElementsByTagName('headline')[0].textContent;
        const content = articles[i].getElementsByTagName('content')[0].textContent;

        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article-container');
        articleDiv.innerHTML = `
                                <img src="${img}" class="news_img" alt="News-image"></img>
                                <h2>${headline}</h2>
                                <p>${content}</p>
                                <p>${content}</p>
                                <p>${content}</p>
                                <p>${content}</p>
                                <p>${content}</p>`;
        home_feed.appendChild(articleDiv);
    }
    if (home_feed.innerHTML === '') {
        // If no articles are found or the structure is incorrect, display a message
        home_feed.textContent = 'No articles found.';
    }
}

var xhr = new XMLHttpRequest();
xhr.open("GET", xmlUrl, true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        // Use the fetched XML data directly
        displayData(xhr.responseText);
    }
};
xhr.send();