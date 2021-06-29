import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../HeroesService";
import {MessageService} from "../MessageService";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes
  selectedHero
  // heroService = HeroesService
  constructor(private heroService: HeroesService,private messageService: MessageService) { }
  onSelect(hero){
    this.selectedHero = hero
    this.messageService.add(`This hero with id=${hero.id} and name=${hero.name} is clicked`)
  }
  ngOnInit(): void {
    this.getHeroes()
  }
  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

}
