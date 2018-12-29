import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[appDropDown]"
})
export class DropDownDirective {
  @HostBinding("class.open")
  isActive = false;
  @HostListener("click")
  toggleOpen() {
    this.isActive = !this.isActive;
  }
  constructor() {}
}
