import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropDown {
@HostBinding('class.open') isOpen = false

@HostListener('click') toggleDropDown() {
  this.isOpen = !this.isOpen
}

}
