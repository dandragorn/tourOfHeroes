import {Component, OnInit} from '@angular/core';
import {IHero} from "../../Interfaces/IHero";
import {HeroService} from "../../Services/hero.service";

@Component({
  selector: 'app-heroesList',
  templateUrl: './heroesList.component.html',
  styleUrls: ['./heroesList.css']
})
export class HeroesListComponent implements OnInit{

  constructor(private heroService: HeroService) {}

  heroes:IHero[] = [];

  ngOnInit(): void {
    this.getHeroes();
    }

  //отображает список героев из массива
  getHeroes():void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
