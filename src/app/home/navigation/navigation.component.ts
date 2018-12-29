import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { fadin } from "src/app/shared/animations/animation";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.less"],
  animations: [fadin]
})
export class NavigationComponent implements OnInit {
  drop = false;
  constructor() {}

  ngOnInit() {}
  toggel() {
    this.drop = !this.drop;
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData["fade"];
  }
}
