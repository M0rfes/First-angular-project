import { Observable } from "rxjs";
import { ReumMap } from "./../../../shared/models/reumMap/reumMap";
import { FacultyService } from "./../../../shared/services/faculty.service";
import { RemunerationService } from "./../../../shared/services/remuneration.service";
import { Remuneration } from "./../../../shared/models/remuneration/remuneration";
import { Faculty } from "serve/src/entity/Faculty";
import { ReumMapService } from "./../../../shared/services/reum-map.service";
import { ModelService } from "./../../../shared/services/model.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-datamodel",
  templateUrl: "./datamodel.component.html",
  styleUrls: ["./datamodel.component.less"]
})
export class DatamodelComponent implements OnInit {
  faculties: Observable<Faculty[]>;
  remunerations: Observable<Remuneration[]>;
  allYears: number[];
  editMode = false;
  noStudents: number = null;
  id: string;
  constructor(
    private acRoute: ActivatedRoute,
    private mService: ModelService,
    private reumMap: ReumMapService,
    private reumService: RemunerationService,
    private facService: FacultyService
  ) {}

  ngOnInit() {
    console.log(this.editMode);
    this.faculties = this.facService.Faculties;
    this.remunerations = this.reumService.Remunerations;
    this.allYears = this.reumService.years();
    this.acRoute.params.subscribe((params: Params) => {
      if (params["id"]) {
        console.log(params["id"]);
        this.id = params["id"];
        this.editMode = true;
        this.reumMap
          .getPay(this.id)
          .subscribe(pays => (this.noStudents = +pays[0].noStudents));
      }
    });
  }
  onUnLoade() {
    this.mService.unLoadModel(this.acRoute);
  }
  onSubmit(f: NgForm) {
    const v = f.value;
    const newMap = new ReumMap(v.Faculty, v.Remuneration, v.noofs, v.year);
    if (!this.editMode) {
      this.reumMap
        .addMap(newMap)
        .subscribe(pays => this.reumMap.Update.next(pays));
    } else {
      console.log("h");
      this.reumMap
        .editPay(this.id, newMap)
        .subscribe(pays => this.reumMap.Update.next(pays));
    }
    this.onUnLoade();
  }
  onDelete() {
    this.reumMap
      .deletePay(this.id)
      .subscribe(pays => this.reumMap.Update.next(pays));
    this.onUnLoade();
  }
}
