import { ModelService } from "src/app/shared/services/model.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-manage-faculty",
  templateUrl: "./manage-faculty.component.html",
  styleUrls: ["./manage-faculty.component.less"]
})
export class ManageFacultyComponent implements OnInit {
  constructor(private aRoute: ActivatedRoute, private mService: ModelService) {}

  ngOnInit() {}
  loadModel() {
    this.mService.loadModel(this.aRoute);
  }
}
