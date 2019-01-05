import { HttpClient } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { RoleService } from "./role.service";
import { DepartmentService } from "./department.service";
import { userData } from "src/app/shared/models/user/user";
import { User } from "serve/src/entity/User";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class UserService {
  updateUser: Subject<User[]> = new Subject<User[]>();
  private readonly baseUrls = "http://localhost:3000/users";
  private readonly baseUrl = "http://localhost:3000/user";
  constructor(
    private depService: DepartmentService,
    private roleService: RoleService,
    private http: HttpClient
  ) {}
  get Users(): Observable<User[]> {
    return <Observable<User[]>>this.http.get(this.baseUrls);
  }
  getUser(id: string): Observable<User[]> {
    return <Observable<User[]>>this.http.get(`${this.baseUrl}/${id}`);
  }
  addUser(newUser: userData): Observable<User[]> {
    return <Observable<User[]>>this.http.post(this.baseUrls, newUser);
  }
  editUser(id: string, user: userData): Observable<User[]> {
    return <Observable<User[]>>this.http.put(`${this.baseUrl}/${id}`, user);
  }
  deleteUser(id: string): Observable<User[]> {
    return <Observable<User[]>>this.http.delete(`${this.baseUrl}/${id}`);
  }
}
