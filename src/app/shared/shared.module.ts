import { NgModule } from '@angular/core';

import { DropdownDirective } from './dropdown.directive';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DropdownDirective,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
  ],
})
export class SharedModule {}
