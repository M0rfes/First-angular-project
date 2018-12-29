import { Role } from "./../../../shared/models/role/role";
import { RoleService } from "./../../../shared/services/role.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-role-table",
  templateUrl: "./role-table.component.html",
  styleUrls: ["./role-table.component.less"]
})
export class RoleTableComponent implements OnInit, OnDestroy {
  roles: Role[];
  sub: Subscription;
  constructor(private roleService: RoleService) {}

  ngOnInit() {
    this.roles = this.roleService.Roles;
    this.sub = this.roleService.updateRole.subscribe((roles: Role[]) => {
      this.roles = roles;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
