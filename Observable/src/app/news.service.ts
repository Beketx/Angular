import { Injectable } from '@angular/core';
import {NEWS_LIST} from "./newsList";
import {Observable,of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news = NEWS_LIST ;

  addNews(){
    this.news.push({
        id: Math.max(...NEWS_LIST.map(item=>item.id))+1,
        title: 'New news',
        description: 'Description of new news'
      }
    );

  }

  removeNewsByID(id){
    this.news = this.news.filter(newsPage => newsPage.id !== id)
  }

  getNewsList():Observable<string[]>{
    return of(this.news);
  }

}
