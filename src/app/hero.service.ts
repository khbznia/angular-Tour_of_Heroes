import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';


@Injectable({
  providedIn: 'root' ,
})

export class HeroService {

  constructor(private messageService: MessageService){

  }

  getHeros(): Observable<Hero[]>{
    this.messageService.add('HeroSerice: fetched heroes');
    return of(HEROES);
  }

}