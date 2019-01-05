import { HttpClient } from "@angular/common/http";
import { FacultyRemunerationMap } from "serve/src/entity/FacultyRemunerationMap";
import { Injectable } from "@angular/core";
import { ReumMap } from "../models/reumMap/reumMap";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ReumMapService {
  Update: Subject<FacultyRemunerationMap[]> = new Subject<
    FacultyRemunerationMap[]
  >();
  private reumMaps: ReumMap[] = [];
  private readonly baseUrls = "http://localhost:3000/pays";
  private readonly baseUrl = "http://localhost:3000/pay";
  constructor(private http: HttpClient) {}
  get ReumMap(): Observable<FacultyRemunerationMap[]> {
    return <Observable<FacultyRemunerationMap[]>>this.http.get(this.baseUrls);
  }
  addMap(newMap: ReumMap): Observable<FacultyRemunerationMap[]> {
    console.log(newMap);
    return <Observable<FacultyRemunerationMap[]>>(
      this.http.post(this.baseUrls, newMap)
    );
  }
  getPay(id: string): Observable<FacultyRemunerationMap[]> {
    return <Observable<FacultyRemunerationMap[]>>(
      this.http.get(`${this.baseUrl}/${id}`)
    );
  }
  editPay(id: string, reumMap: ReumMap): Observable<FacultyRemunerationMap[]> {
    return <Observable<FacultyRemunerationMap[]>>(
      this.http.put(`${this.baseUrl}/${id}`, reumMap)
    );
  }
  deletePay(id: string): Observable<FacultyRemunerationMap[]> {
    return <Observable<FacultyRemunerationMap[]>>(
      this.http.delete(`${this.baseUrl}/${id}`)
    );
  }
}
