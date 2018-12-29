import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[appPrevent]"
})
export class PreventDirective {
  @HostListener("click", ["$event"])
  privat(event) {
    event.stopPropagation();
  }
  constructor() {}
}
