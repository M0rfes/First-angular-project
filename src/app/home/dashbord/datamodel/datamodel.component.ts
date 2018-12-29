import { FacultyService } from "./../../../shared/services/faculty.service";
import { RemunerationService } from "./../../../shared/services/remuneration.service";
import { Remuneration } from "./../../../shared/models/remuneration/remuneration";
import { Faculty } from "./../../../shared/models/faculty/faculty";
import { Department } from "./../../../shared/models/department/department";
import { ReumMapService } from "./../../../shared/services/reum-map.service";
import { ModelService } from "./../../../shared/services/model.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-datamodel",
  templateUrl: "./datamodel.component.html",
  styleUrls: ["./datamodel.component.less"]
})
export class DatamodelComponent implements OnInit {
  faculties: Faculty[];
  remunerations: Remuneration[];
  allYears: number[];
  constructor(
    private acRoute: ActivatedRoute,
    private mService: ModelService,
    private reumMap: ReumMapService,
    private reumService: RemunerationService,
    private facService: FacultyService
  ) {}

  ngOnInit() {
    this.faculties = this.facService.Faculties;
    this.remunerations = this.reumService.Remunerations;
    this.allYears = this.reumService.years();
  }
  onUnLoade() {
    this.mService.unLoadModel(this.acRoute);
  }
  onSubmit(f: NgForm) {
    const v = f.value;
    console.log(v);
    const newMap = this.reumMap.createRumMap(
      +v.Faculty,
      +v.Remuneration,
      v.noofs,
      v.year
    );
    this.reumMap.addMap = newMap;
    this.onUnLoade();
  }
}
