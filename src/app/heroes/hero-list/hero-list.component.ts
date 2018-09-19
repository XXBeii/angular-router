import { Component, OnInit } from '@angular/core';
import { Hero, HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  template: `
    <h2>HEROES</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes$ | async"
        [class.selected]="hero.id === selectedId"
        (click)="onSelect(hero)">
        <div [routerLink]="['/hero', hero.id]">
          <span class="badge">{{ hero.id }}</span>{{ hero.name }}
        </div>
      </li>
    </ul>
    <button routerLink="/sidekicks">Go to sidekicks</button>
  `,
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  selectedId: number;
  heroes$: Observable<Hero[]>;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute  
  ) { }

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.heroService.getHeroes();
      })
    )
  }

  onSelect(hero: Hero): void {
    this.selectedId = hero.id;
  }

}