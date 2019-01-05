import { HttpClient } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Remuneration } from "../models/remuneration/remuneration";

@Injectable({
  providedIn: "root"
})
export class RemunerationService {
  updateReum: Subject<Remuneration[]> = new Subject<Remuneration[]>();

  private AllYear: number[] = [];
  private readonly baseUrls = "http://localhost:3000/remunerations";
  private readonly baseUrl = "http://localhost:3000/remuneration";
  constructor(private http: HttpClient) {}
  get Remunerations(): Observable<Remuneration[]> {
    return <Observable<Remuneration[]>>this.http.get(this.baseUrls);
  }
  addRemuneration(reum: Remuneration): Observable<Remuneration[]> {
    return <Observable<Remuneration[]>>this.http.post(this.baseUrls, reum);
  }

  getReum(id: string): Observable<Remuneration[]> {
    return <Observable<Remuneration[]>>this.http.get(`${this.baseUrl}/${id}`);
  }

  editReum(id: string, reum: Remuneration): Observable<Remuneration[]> {
    return <Observable<Remuneration[]>>(
      this.http.put(`${this.baseUrl}/${id}`, reum)
    );
  }
  deleteRemuneration(id: string): Observable<Remuneration[]> {
    return <Observable<Remuneration[]>>(
      this.http.delete(`${this.baseUrl}/${id}`)
    );
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
