import { ModelService } from "src/app/shared/services/model.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-manage-roles",
  templateUrl: "./manage-roles.component.html",
  styleUrls: ["./manage-roles.component.less"]
})
export class ManageRolesComponent implements OnInit {
  constructor(private aRout: ActivatedRoute, private mService: ModelService) {}

  ngOnInit() {}

  loadModel() {
    this.mService.loadModel(this.aRout);
  }
}
