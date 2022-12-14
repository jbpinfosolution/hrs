import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ReportComponent } from './report/report.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AttendanceComponent,
    ReportComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
  
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
