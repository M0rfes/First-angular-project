import { Component, OnInit } from "@angular/core";
import { slideInAnimation } from "src/app/shared/animations/animation";

@Component({
  selector: "app-dashbord",
  templateUrl: "./dashbord.component.html",
  styleUrls: ["./dashbord.component.less"],
  animations: [slideInAnimation]
})
export class DashbordComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
