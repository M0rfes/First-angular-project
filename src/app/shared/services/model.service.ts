import { Router, ActivatedRoute } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ModelService {
  constructor(private router: Router) {}
  loadModel(acRoute: ActivatedRoute) {
    this.router.navigate(["model"], { relativeTo: acRoute });
  }
  unLoadModel(acRouter: ActivatedRoute) {
    this.router.navigate(["../"], { relativeTo: acRouter });
  }
}
