import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropDown {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleDropDown() {
    this.isOpen = !this.isOpen;
  }
}
