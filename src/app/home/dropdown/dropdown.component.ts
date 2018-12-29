import { ModelService } from "./../../shared/services/model.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.less"]
})
export class DropdownComponent implements OnInit {
  constructor(
    private router: Router,
    private acRoute: ActivatedRoute,
    private mService: ModelService
  ) {}

  ngOnInit() {}
  onLoadModel() {
    this.mService.loadModel(this.acRoute);
  }
}
