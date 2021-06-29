import { HeroesService } from "./HeroesService";
import {HEROES} from "./Hero-server";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages = []
  add(m) {
    this.messages.push(m)
  }
  clear() {
    this.messages = []
  }
}
