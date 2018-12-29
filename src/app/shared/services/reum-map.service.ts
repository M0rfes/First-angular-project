import { RemunerationService } from "./remuneration.service";
import { FacultyService } from "./faculty.service";
import { Injectable } from "@angular/core";
import { ReumMap } from "../models/reumMap/reumMap";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ReumMapService {
  Update: Subject<ReumMap[]> = new Subject<ReumMap[]>();
  private reumMaps: ReumMap[] = [
    new ReumMap(
      this.facService.getFaculty(0),
      this.reuService.getReum(0),
      22,
      new Date("2002")
    )
  ];
  constructor(
    private facService: FacultyService,
    private reuService: RemunerationService
  ) {}
  createRumMap(
    reumID: number,
    depID: number,
    students: number,
    date: string
  ): ReumMap {
    return new ReumMap(
      this.facService.getFaculty(reumID),
      this.reuService.getReum(depID),
      students,
      new Date(date)
    );
  }
  get ReumMap(): ReumMap[] {
    return this.reumMaps.slice();
  }
  set addMap(newMap: ReumMap) {
    this.reumMaps.push(newMap);
    this.Update.next(this.ReumMap);
  }
}
