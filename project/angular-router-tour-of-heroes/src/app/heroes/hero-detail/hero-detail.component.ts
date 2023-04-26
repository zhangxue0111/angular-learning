import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Hero } from '../hero';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{

  hero!: Observable<Hero>;

  constructor(private route : ActivatedRoute, private router: Router, private heroService : HeroService) {

  }

  ngOnInit(): void {
    this.hero = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.heroService.getHero(params.get('id')!))
      ); 
  }

  gotoHeroes(hero : Hero) {
    this.router.navigate(['/heroes']);
  }


}
