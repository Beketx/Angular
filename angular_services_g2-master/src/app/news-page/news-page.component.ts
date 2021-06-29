import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {
  pageNews: any;

  constructor(private newsService: NewsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPageNews();
  }

  getPageNews() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.newsService.getNewsPageById(id).subscribe(news => this.pageNews = news);
  }

  changeTitle() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.newsService.changeNewsPageTitleById(id, 'Hello Imma new titel');
  }
}
