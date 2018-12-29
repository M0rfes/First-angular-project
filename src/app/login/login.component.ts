import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"]
})
export class LoginComponent implements OnInit {
  @ViewChild("f") loginForm: NgForm;
  constructor(private router: Router) {}

  ngOnInit() {}

  onLogin(f: NgForm) {
    this.router.navigate(["home"]);
  }
}
