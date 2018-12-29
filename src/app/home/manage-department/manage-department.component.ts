import { ModelService } from "src/app/shared/services/model.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-manage-department",
  templateUrl: "./manage-department.component.html",
  styleUrls: ["./manage-department.component.less"]
})
export class ManageDepartmentComponent implements OnInit {
  constructor(private aRoute: ActivatedRoute, private mService: ModelService) {}

  ngOnInit() {}

  loadModel() {
    this.mService.loadModel(this.aRoute);
  }
}
