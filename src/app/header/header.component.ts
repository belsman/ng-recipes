import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() headerItemSelected = new EventEmitter<string>();
  selectedNav = 'recipe';
  collapsed = true;

  onSelectNav(navLabel: string) {
    this.headerItemSelected.emit(navLabel);
    this.selectedNav = navLabel;
  }
}
