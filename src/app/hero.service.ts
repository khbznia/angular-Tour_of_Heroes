import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';


@Injectable({
  providedIn: 'root' ,
})

export class HeroService {

  constructor(private messageService: MessageService){}

  getHeros(): Observable<Hero[]>{
    this.messageService.add('HeroSerice: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero>{
    this.messageService.add(`HeroSerice: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}