import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) {
  }
  getCategoryList(): Observable<string[]> {
    return this.http.get('http://localhost:8000/api/categories/')
    // return of(this.news);
  }
  //
  // getNewsPageById(id): Observable<any> {
  //   const neededNewsPage = this.news.find(newsPage => newsPage.id === id);
  //   return of(neededNewsPage);
  // }

}
