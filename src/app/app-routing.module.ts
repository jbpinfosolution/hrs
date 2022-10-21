import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'attendance', component: AttendanceComponent},
  { path: 'report', component: ReportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


