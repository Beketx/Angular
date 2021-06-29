import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  categories: string[];

  constructor(public categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList() {
    const newsObservable = this.categoryService.getCategoryList()
    .subscribe(categories => this.categories = categories);
  }

}
