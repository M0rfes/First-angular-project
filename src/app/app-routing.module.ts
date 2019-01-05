import { DepartmentmodelComponent } from "./home/manage-department/departmentmodel/departmentmodel.component";
import { ManageRolesComponent } from "./home/manage-roles/manage-roles.component";
import { ManageDepartmentComponent } from "./home/manage-department/manage-department.component";
import { ManageFacultyComponent } from "./home/manage-faculty/manage-faculty.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { DashbordComponent } from "./home/dashbord/dashbord.component";
import { ManageUsersComponent } from "./home/manage-users/manage-users.component";
import { ManageRemunerationComponent } from "./home/manage-remuneration/manage-remuneration.component";
import { ModalComponent } from "./home/manage-roles/modal/modal.component";
import { UsermodelComponent } from "./home/manage-users/usermodel/usermodel.component";
import { FacultymodelComponent } from "./home/manage-faculty/facultymodel/facultymodel.component";
import { RemunerationmodelComponent } from "./home/manage-remuneration/remunerationmodel/remunerationmodel.component";
import { DatamodelComponent } from "./home/dashbord/datamodel/datamodel.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: DashbordComponent,
        data: { fade: Math.random() },
        children: [
          { path: "model", component: DatamodelComponent },
          { path: "pay", redirectTo: "", pathMatch: "full" },
          { path: "pay/:id", component: DatamodelComponent, pathMatch: "full" }
        ]
      },
      {
        path: "dashbord",
        redirectTo: ""
      },
      {
        path: "ManageUsers",
        component: ManageUsersComponent,
        data: { fade: Math.random() },
        children: [
          {
            path: "model",
            component: UsermodelComponent,
            data: { animate: 3 }
          },
          { path: ":id", component: UsermodelComponent }
        ]
      },
      {
        path: "ManageRoles",
        component: ManageRolesComponent,
        data: { fade: Math.random() },
        children: [
          { path: "model", component: ModalComponent },
          { path: ":id", component: ModalComponent }
        ]
      },
      {
        path: "ManageFaculty",
        component: ManageFacultyComponent,
        data: { fade: Math.random() },
        children: [
          {
            path: "model",
            component: FacultymodelComponent
          },
          {
            path: ":id",
            component: FacultymodelComponent
          }
        ]
      },
      {
        path: "ManageDepartment",
        component: ManageDepartmentComponent,
        data: { fade: Math.random() },
        children: [
          {
            path: "model",
            component: DepartmentmodelComponent
          },
          {
            path: ":id",
            component: DepartmentmodelComponent
          }
        ]
      },
      {
        path: "ManageRemuneration",
        component: ManageRemunerationComponent,
        data: { fade: Math.random() },
        children: [
          {
            path: "model",
            component: RemunerationmodelComponent
          },
          {
            path: ":id",
            component: RemunerationmodelComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
