import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { Remuneration } from "../models/remuneration/remuneration";

@Injectable({
  providedIn: "root"
})
export class RemunerationService {
  updateReum: Subject<Remuneration[]> = new Subject<Remuneration[]>();
  private remunerations: Remuneration[] = [
    new Remuneration("type", 3, new Date("2018"))
  ];
  private AllYear: number[] = [];
  constructor() {}
  get Remunerations(): Remuneration[] {
    return this.remunerations.slice();
  }
  set addRemuneration(reum: Remuneration) {
    this.remunerations.push(reum);
    this.updateReum.next(this.Remunerations);
  }

  getReum(id: number): Remuneration {
    return this.remunerations[id];
  }

  editReum(id: number, reum: Remuneration) {
    this.remunerations[id] = reum;
    this.updateReum.next(this.Remunerations);
  }

  years(): number[] {
    let end = new Date().getFullYear() - 30;
    let today = new Date().getFullYear();
    for (let year = end; year <= today; year++) {
      this.AllYear.push(year);
    }
    return this.AllYear;
  }
}
