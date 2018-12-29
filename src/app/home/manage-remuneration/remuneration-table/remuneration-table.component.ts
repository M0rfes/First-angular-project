import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Remuneration } from "src/app/shared/models/remuneration/remuneration";
import { RemunerationService } from "src/app/shared/services/remuneration.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-remuneration-table",
  templateUrl: "./remuneration-table.component.html",
  styleUrls: ["./remuneration-table.component.less"]
})
export class RemunerationTableComponent implements OnInit, OnDestroy {
  remunerations: Remuneration[];
  sub: Subscription;
  constructor(
    private acRoute: ActivatedRoute,
    private reService: RemunerationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.remunerations = this.reService.Remunerations;
    this.sub = this.reService.updateReum.subscribe(
      (remunerations: Remuneration[]) => {
        this.remunerations = remunerations;
      }
    );
  }
  ngOnDestroy() {
    this.reService.updateReum.next(this.remunerations);
    this.sub.unsubscribe();
  }

  editReum(id: number) {
    this.router.navigate([id], { relativeTo: this.acRoute });
  }
}
