import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroesService} from "../HeroesService";

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero
  constructor(  private route: ActivatedRoute,
                private heroService: HeroesService,
                private location: Location) { }

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void{
      const id = +this.route.snapshot.paramMap.get('id');
      this.heroService.getHero(id).subscribe(hero=>this.hero=hero)
  }
  goBack(): void{
    this.location.back()
  }
}
