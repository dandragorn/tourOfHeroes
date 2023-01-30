import {Injectable} from '@angular/core';
import {IHero} from "../Interfaces/IHero";
import {HEROES} from "../Data/mock-heroes";
import {Observable,of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }

  getHeroes():Observable<IHero[]>{
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id:number):Observable<IHero>{
    const hero = of(HEROES.find(h => h.id === id));
    this.messageService.add(`Hero Serv: fetched hero id=${id}`);
    // @ts-ignore
    return hero;
  }

}
