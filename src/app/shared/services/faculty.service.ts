import { HttpClient } from "@angular/common/http";
import { FacultyData } from "./../models/faculty/faculty";
import { Subject, Observable } from "rxjs";
import { Faculty } from "serve/src/entity/Faculty";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class FacultyService {
  updateFaculties: Subject<Faculty[]> = new Subject<Faculty[]>();
  private readonly baseURls = "http://localhost:3000/faculties";
  private readonly baseURl = "http://localhost:3000/faculty";
  constructor(private http: HttpClient) {}
  get Faculties(): Observable<Faculty[]> {
    return <Observable<Faculty[]>>this.http.get(this.baseURls);
  }

  addFaculty(faculty: FacultyData): Observable<Faculty[]> {
    console.log(faculty);
    return <Observable<Faculty[]>>this.http.post(this.baseURls, faculty);
  }

  getFaculty(id: string): Observable<Faculty[]> {
    return <Observable<Faculty[]>>this.http.get(`${this.baseURl}/${id}`);
  }

  editFaculty(id: string, faculty: FacultyData): Observable<Faculty[]> {
    console.log(faculty);
    return <Observable<Faculty[]>>(
      this.http.put(`${this.baseURl}/${id}`, faculty)
    );
  }
}
