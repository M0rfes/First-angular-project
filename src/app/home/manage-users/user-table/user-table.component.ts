import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { User } from "serve/src/entity/User";
import { UserService } from "src/app/shared/services/user.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user-table",
  templateUrl: "./user-table.component.html",
  styleUrls: ["./user-table.component.less"]
})
export class UserTableComponent implements OnInit, OnDestroy {
  users: User[];
  sub: Subscription;
  constructor(
    private userService: UserService,
    private router: Router,
    private acRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userService.Users.subscribe((users: User[]) => {
      console.log(users);
      this.users = users;
    });
    this.sub = this.userService.updateUser.subscribe((users: User[]) => {
      console.log(users);
      this.users = users;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onEdit(id: string) {
    this.router.navigate([id], { relativeTo: this.acRouter });
  }
}
