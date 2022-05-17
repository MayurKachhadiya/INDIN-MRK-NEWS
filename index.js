console.log("we can create news web. application");
//98b6fd3c2895488a9e53a143d4e3c3e8

let nws = "bbc-news";
let apk = "98b6fd3c2895488a9e53a143d4e3c3e8";
let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${nws}&apikey=${apk}`, true);

xhr.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHTML = "";

        articles.forEach(function(element, index) {
            let news = `<div class="card">
            <div class="card-header" id="heading${index}">
            <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
              <b>Breaking News: ${index+1}</b> ${element["title"]}
            </button>
            </h2>
            </div>
            <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#newsAccording">
                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</div>
            </div>
        </div>`;
            newsHTML += news;
        });
        newsAccordion.innerHTML = newsHTML;
    } else {
        console.log("some error occured");
    }
}

xhr.send();