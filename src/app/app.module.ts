import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/authguard.service';

import { LoginComponent } from './login/login.component';
import {MatModule} from './mat.module'
import {CowinPublic} from './cowin-public/cowin-component'
import {PublicApi} from './cowin-public/public-apis/public-api'
import { UserService } from './auth/user.service';
import {StateComponent} from './cowin-public/public-apis/admin/state/statelist'
import { NavItems } from './cowin-public/public-apis/side-nav-items/side-nav-items';
import { DistrictComponent } from './cowin-public/public-apis/admin/district/districtlist';
import { SessionByPin } from './cowin-public/public-apis/sessions/sessions.pin';
import { SessionByDistrict } from './cowin-public/public-apis/sessions/sessions.district';
import { SessionsCard } from './cowin-public/public-apis/sessions/sessions-card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalenderByPin } from './cowin-public/public-apis/sessions/calender/calender-pin';
import { CalenderCenter } from './cowin-public/public-apis/sessions/calender/calender-centers-card';
import { CalenderSession } from './cowin-public/public-apis/sessions/calender/calender-sessions-card';


@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    CowinPublic,
    PublicApi,
    StateComponent,
    DistrictComponent,
    SessionByPin,
    SessionByDistrict,
    SessionsCard,
    CalenderByPin,
    CalenderCenter,
    CalenderSession,
    NavItems
  ],
  imports: [ 
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [AuthService,AuthGuardService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
