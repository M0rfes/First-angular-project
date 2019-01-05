import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { FacultyRemunerationMap } from "serve/src/entity/FacultyRemunerationMap";
import { Component, OnInit } from "@angular/core";
import { ReumMapService } from "src/app/shared/services/reum-map.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.less"]
})
export class TableComponent implements OnInit {
  reumCalc: FacultyRemunerationMap[];
  constructor(
    private reumMapS: ReumMapService,
    private router: Router,
    private acRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.reumMapS.ReumMap.subscribe(newReum => {
      newReum.map(data => (data.year = new Date(data.year)));
      this.reumCalc = newReum;
    });
    this.reumMapS.Update.subscribe((newReum: FacultyRemunerationMap[]) => {
      newReum.map(data => (data.year = new Date(data.year)));
      this.reumCalc = newReum;
    });
  }
  onEdit(id: string) {
    this.router.navigate(["pay", id], { relativeTo: this.acRoute });
  }
}
