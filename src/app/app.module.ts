import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { NavigationComponent } from "./home/navigation/navigation.component";
import { IconComponent } from "./home/navigation/icon/icon.component";
import { SidebarComponent } from "./home/navigation/sidebar/sidebar.component";
import { PanelComponent } from "./home/dashbord/panel/panel.component";
import { ChartComponent } from "./home/dashbord/chart/chart.component";
import { NotificationComponent } from "./home/dashbord/notification/notification.component";
import { ChatComponent } from "./home/dashbord/chat/chat.component";
import { DashbordComponent } from "./home/dashbord/dashbord.component";
import { ManageDepartmentComponent } from "./home/manage-department/manage-department.component";
import { ManageFacultyComponent } from "./home/manage-faculty/manage-faculty.component";
import { ManageRemunerationComponent } from "./home/manage-remuneration/manage-remuneration.component";
import { ManageUsersComponent } from "./home/manage-users/manage-users.component";
import { ManageRolesComponent } from "./home/manage-roles/manage-roles.component";
import { DropdownComponent } from "./home/dropdown/dropdown.component";
import { PaneldefaultComponent } from "./home/paneldefault/paneldefault.component";
import { TableComponent } from "./home/dashbord/table/table.component";
import { UserTableComponent } from "./home/manage-users/user-table/user-table.component";
import { RoleTableComponent } from "./home/manage-roles/role-table/role-table.component";
import { DepartmentTableComponent } from "./home/manage-department/department-table/department-table.component";
import { FacultyTableComponent } from "./home/manage-faculty/faculty-table/faculty-table.component";
import { RemunerationTableComponent } from "./home/manage-remuneration/remuneration-table/remuneration-table.component";
import { DropDownDirective } from "./shared/drop-down.directive";
import { ModalComponent } from "./home/manage-roles/modal/modal.component";
import { UsermodelComponent } from "./home/manage-users/usermodel/usermodel.component";
import { DepartmentmodelComponent } from "./home/manage-department/departmentmodel/departmentmodel.component";
import { FacultymodelComponent } from "./home/manage-faculty/facultymodel/facultymodel.component";
import { RemunerationmodelComponent } from "./home/manage-remuneration/remunerationmodel/remunerationmodel.component";
import { PreventDirective } from "./shared/prevent.directive";
import { DatamodelComponent } from "./home/dashbord/datamodel/datamodel.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    IconComponent,
    SidebarComponent,
    PanelComponent,
    ChartComponent,
    NotificationComponent,
    ChatComponent,
    DashbordComponent,
    ManageFacultyComponent,
    ManageDepartmentComponent,
    ManageRemunerationComponent,
    ManageUsersComponent,
    ManageRolesComponent,
    DropdownComponent,
    PaneldefaultComponent,
    TableComponent,
    UserTableComponent,
    RoleTableComponent,
    DepartmentTableComponent,
    FacultyTableComponent,
    RemunerationTableComponent,
    DropDownDirective,
    ModalComponent,
    UsermodelComponent,
    DepartmentmodelComponent,
    FacultymodelComponent,
    RemunerationmodelComponent,
    PreventDirective,
    DatamodelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
