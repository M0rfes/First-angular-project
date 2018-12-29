import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {
  slideInAnimation,
  slideLeft,
  fadin
} from "./shared/animations/animation";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
  animations: [slideInAnimation]
})
export class AppComponent {
  state = "1";
  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData["animation"];
  }
}
