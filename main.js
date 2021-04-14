const body = document.querySelector('body');

const parent = document.createElement('div');

const child = document.createElement('div');

parent.appendChild(child);
body.appendChild(parent);

function getHackerNews() {
    console.log('did it work?')
    function getItToWork() {
        const URL = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'; //500 stories
        fetch (URL)
        .then((function (rawResponse) { // rawResponse => response json
            console.log(rawResponse.json)
            return rawResponse.json();
        }))
        .then((function (json) {
            json = json.slice(0,99); //this stands for stories 1-99 starting at [i]
            json.forEach(function(storyIds){
                let newsURL = `https://hacker-news.firebaseio.com/v0/item/${storyIds}.json?print=pretty`
                getTheJuice(newsURL);
                console.log(newsURL);
            })}))
            
            function getTheJuice(newsURL) {
                fetch(newsURL)
                .then((rawResponse => response.json()) 
                .then(function (newsURL) {
                    makeNewsApp(newsURL) 
                    console.log(newsURL)
                }
                ))
            }
            function makeNewsApp(newsURL) {
                let html = `<div class='container'> 
                <h6 class="title "><a class="glow-on-hover kir" href=${newsURL.url}>${newsURL.title}</a></h6>
                <br>
                <div> 
                ${newsURL.score} points by <a class="glow-on-hover" href="#" > ${newsURL.by} </a> ${Math.floor(Math.random()* 99).toFixed(0)} hours ago |  | 
                <button height="3opx" type="button" class="btn btn-sm  btn-dark position-relative animated-button1">
                comments<span class="position-absolute top-0  translate-middle badge rounded-pill bg-secondary">${Math.floor(Math.random()* 99).toFixed(0)} <span class="visually-hidden">unread messages</span></span>
                </button>
                </div>
                </div>`
                
                body.innerHTML += html;
            }
                
        } 
        getItToWork();
    }
    
    getHackerNews();   