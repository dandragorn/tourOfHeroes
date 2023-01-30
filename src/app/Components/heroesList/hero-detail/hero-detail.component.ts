import {Component, Input, OnInit} from '@angular/core';
import { IHero } from "../../../Interfaces/IHero";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService} from "../../../Services/hero.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.css']
})
export class HeroDetailComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  @Input() selectedHero?:IHero;

  ngOnInit(): void {
    this.getHero();
  }

  getHero(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero=>this.selectedHero = hero);
  }
  goBack():void{
    this.location.back();
  }
}
