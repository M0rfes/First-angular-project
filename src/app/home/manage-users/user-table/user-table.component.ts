import { Component, OnInit, OnDestroy } from "@angular/core";
import { User } from "src/app/shared/models/user/user";
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
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.Users;
    this.sub = this.userService.updateUser.subscribe((users: User[]) => {
      this.users = users;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
