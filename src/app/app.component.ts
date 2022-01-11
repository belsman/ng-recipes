import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedNavItem = 'recipe';

  onNavItemClick(navItem: string) {
    this.selectedNavItem = navItem;
  }
}
