import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes() : Observable<Hero[]> {
    return of(HEROES);
  }

  getHero(id: number | string) {
    return this.getHeroes().pipe(
      map((heroes: Hero[]) => heroes.find(hero => hero.id === +id)!)
    );
  }

 
}
