import { Component, OnInit } from "@angular/core";
import { ReumMap } from "src/app/shared/models/reumMap/reumMap";
import { ReumMapService } from "src/app/shared/services/reum-map.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.less"]
})
export class TableComponent implements OnInit {
  reumCalc: ReumMap[];
  constructor(private reumMapS: ReumMapService) {}
  ngOnInit() {
    this.reumCalc = this.reumMapS.ReumMap;
    this.reumMapS.Update.subscribe((newReum: ReumMap[]) => {
      this.reumCalc = newReum;
    });
  }
  onEdit(id:number) {
    
  }
}
