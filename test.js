import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  hideMenu = false;
  hideUser = false;

  constructor(private translate: TranslateService,
              private router: Router) {
    this.router.events.pipe(
      filter(e => e instanceof ActivationEnd),
      throttleTime(0),
    ).subscribe((event) => {
      if (event instanceof ActivationEnd) {
        if (event.snapshot.data) {
          this.hideMenu = !!event.snapshot.data.hideMenu;
          this.hideUser = !!event.snapshot.data.hideUser;
        }
      }
    });
  }

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

}


/////
<div class="app layout-width">
  <app-header [hideUser]="hideUser"></app-header>
  <div class="content-area row" role="main">
    <div *ngIf="!hideMenu" class="menu">
      <app-menu></app-menu>
    </div>
    <div class="flex p-5">
      <router-outlet></router-outlet>
    </div>
  </div>
</div>
