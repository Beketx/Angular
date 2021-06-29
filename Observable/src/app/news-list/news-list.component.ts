import { Component, OnInit } from '@angular/core';
import { NewsService } from "../news.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  componentNews: string [];

  constructor(public newsService: NewsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getComponentNews();
  }
  getComponentNews(){
    const newsObservable = this.newsService.getNewsList()
    newsObservable.subscribe(news=>this.componentNews=news)
  }

  addNewsService(){
    this.newsService.addNews()
  }

  getPageNews(){
    const id = +this.route.snapshot.paramMap.get('id')
    this.newsService.ge
  }

  deleteNews(){
    this.newsService.removeNewsByID(id)
  }

}
