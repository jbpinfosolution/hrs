import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ReportComponent } from './report/report.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '',  component: LoginComponent },
  { path: 'login',   component: LoginComponent },
  { path: 'attendance', canActivate:[AuthGuard],  component: AttendanceComponent},
  { path: 'report', canActivate:[AuthGuard], component: ReportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],

})
export class AppRoutingModule { }


