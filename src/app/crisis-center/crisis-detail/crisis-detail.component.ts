import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { slideInDownAnimation } from '../../animations';
import { Crisis, CrisisService } from '../crisis.service';

@Component({
  template: `
  <div *ngIf="crisis$ | async as crisis">
    <h3>"{{ crisis.name }}"</h3>
    <div>
      <label>Id: </label>{{ crisis.id }}
    </div>
  </div>
  `,
  styles: ['input {width: 20em}'],
  animations: [ slideInDownAnimation ]
})
export class CrisisDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  crisis$: Observable<Crisis>;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cs: CrisisService
  ) {}

  ngOnInit() {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.cs.getCrisis(params.get('id')))
    );
  }

}
