import { Router } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.less"]
})
export class SidebarComponent implements OnInit {
  @Input("in") toggleState: boolean;
  dropDownActive = false;
  constructor(private router: Router) {}

  ngOnInit() {}
  toggle() {
    this.dropDownActive = !this.dropDownActive;
  }
  active() {
    this.dropDownActive = !this.dropDownActive;
  }
  onLogout() {
    this.router.navigate([""]);
  }
}
