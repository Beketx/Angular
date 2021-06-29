class newsPaper{
    constructor(name){
        this.name = name
    }
    publishNews(news){
        console.log(this.name + ' : ' + news)
    }
}

const KazNews = new newsPaper('Tengrinews');
const AmericanNews = new newsPaper('NewYorkTimes');
const RussianNews = new newsPaper('Vesti');

// KazNews.publishNews('You wont believe!!!');
// AmericanNews.publishNews('You wont believe!!!');
// RussianNews.publishNews('You wont believe!!!');

class SportNewsObservable{
    constructor() {
        this.subscriber = []
    }

    subscribe(sub) {
        this.subscriber.push(sub)
    }

    unsubscribe(exSub) {
        this.subscriber = this.subscriber.filter(sub=> sub !== exSub)
    }

    notify(content) {
        this.subscriber.forEach(sub => sub.publishNews(content))
    }
}

const Initializer = new SportNewsObservable();

Initializer.subscribe(KazNews);
Initializer.subscribe(AmericanNews);
Initializer.subscribe(RussianNews);

Initializer.notify('Why Kawhi Leonard does not have instagram');

Initializer.unsubscribe(KazNews);

Initializer.notify('Why Kawhi Leonard does not have instagram');