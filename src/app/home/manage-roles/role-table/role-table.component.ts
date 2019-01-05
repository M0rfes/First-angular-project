import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Role } from "./../../../shared/models/role/role";
import { RoleService } from "./../../../shared/services/role.service";
import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-role-table",
  templateUrl: "./role-table.component.html",
  styleUrls: ["./role-table.component.less"]
})
export class RoleTableComponent implements OnInit, OnDestroy {
  sub: Subscription;
  roles: Role[];
  constructor(
    private roleService: RoleService,
    private roter: Router,
    private acroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.roleService.updateRole.subscribe((roles: Role[]) => {
      this.roles = roles;
    });
    this.roleService.Roles.subscribe((roles: Role[]) => {
      this.roles = roles;
    });
  }
  onEdit(id: string) {
    this.roter.navigate([id], { relativeTo: this.acroute });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
