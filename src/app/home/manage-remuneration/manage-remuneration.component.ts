import { ModelService } from "src/app/shared/services/model.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-manage-remuneration",
  templateUrl: "./manage-remuneration.component.html",
  styleUrls: ["./manage-remuneration.component.less"]
})
export class ManageRemunerationComponent implements OnInit {
  constructor(private aRoute: ActivatedRoute, private mService: ModelService) {}

  ngOnInit() {}

  loadModel() {
    this.mService.loadModel(this.aRoute);
  }
}
