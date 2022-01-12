import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  // if appDropdown property binding is
  @Input() appDropdown: boolean = false;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.classList.add(
      this.appDropdown ? 'open' : 'false'
    );
  }
}
