import {HEROES} from "./Hero-server";
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import { MessageService} from "./MessageService";

@Injectable({
  providedIn: 'root',
})

export class HeroesService {

  constructor(private messageService: MessageService) {
  }
  getHeroes(): Observable<any>{
    this.messageService.add('All Heroes Fetched');
    return of(HEROES);
  }

  getHero(id): Observable<any>{
    this.messageService.add(`This hero fetched ${id}`)
    return of(HEROES.find(hero=> hero.id === id))
  }

  // static getHeroes() {
  //   return HEROES
  // }
}

