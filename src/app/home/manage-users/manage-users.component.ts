import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModelService } from "src/app/shared/services/model.service";

@Component({
  selector: "app-manage-users",
  templateUrl: "./manage-users.component.html",
  styleUrls: ["./manage-users.component.less"]
})
export class ManageUsersComponent implements OnInit {
  constructor(private aRoute: ActivatedRoute, private mService: ModelService) {}

  ngOnInit() {}

  loadModel() {
    this.mService.loadModel(this.aRoute);
  }
}
