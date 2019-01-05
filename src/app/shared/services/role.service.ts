import { HttpClient } from "@angular/common/http";
import { Role } from "./../models/role/role";
import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RoleService {
  private readonly baseURLs = "http://127.0.0.1:3000/roles";
  private readonly baseURL = "http://127.0.0.1:3000/role";
  updateRole: Subject<Role[]> = new Subject<Role[]>();
  constructor(private http: HttpClient) {}
  get Roles(): Observable<Role[]> {
    return <Observable<Role[]>>this.http.get(this.baseURLs);
  }
  getRole(id: string): Observable<Role[]> {
    return <Observable<Role[]>>this.http.get(`${this.baseURL}/${id}`);
  }
  addRole(role: Role) {
    return <Observable<Role[]>>this.http.post(this.baseURLs, role);
  }
  editRole(id: string, role: Role): Observable<Role[]> {
    return <Observable<Role[]>>this.http.put(`${this.baseURL}/${id}`, role);
  }
  deleteRole(id: string): Observable<Role[]> {
    return <Observable<Role[]>>this.http.delete(`${this.baseURL}/${id}`);
  }
}
