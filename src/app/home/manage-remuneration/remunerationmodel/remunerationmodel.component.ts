import { RemunerationService } from "./../../../shared/services/remuneration.service";
import { Remuneration } from "./../../../shared/models/remuneration/remuneration";
import { NgForm } from "@angular/forms";
import { ModelService } from "src/app/shared/services/model.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-remunerationmodel",
  templateUrl: "./remunerationmodel.component.html",
  styleUrls: ["./remunerationmodel.component.less"]
})
export class RemunerationmodelComponent implements OnInit, OnDestroy {
  id: number;
  editMode = false;
  editRum = "";
  editAmount: number = null;
  year: number = null;
  allYears: number[];
  constructor(
    private aRoute: ActivatedRoute,
    public mService: ModelService,
    private reumService: RemunerationService
  ) {}
  ngOnInit() {
    this.allYears = this.reumService.years();
    console.log(this.allYears);
    this.aRoute.params.subscribe((params: Params) => {
      if (params["id"]) {
        console.log(params["id"]);
        this.id = +params["id"];
        this.editMode = true;
        this.editRum = this.reumService.getReum(this.id).Type;
        this.editAmount = this.reumService.getReum(this.id).Amount;
        this.year = this.reumService.getReum(this.id).Year.getFullYear();
      }
    });
  }

  unLoadModel() {
    this.mService.unLoadModel(this.aRoute);
  }
  onSubmit(f: NgForm) {
    const value = f.value;
    const newReum = new Remuneration(
      value.Name,
      value.Amount,
      new Date(value.Year)
    );
    if (!this.editMode) {
      this.reumService.addRemuneration = newReum;
    } else {
      this.reumService.editReum(this.id, newReum);
    }
    this.unLoadModel();
  }

  ngOnDestroy() {}
}
