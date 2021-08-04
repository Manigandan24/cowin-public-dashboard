import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/authguard.service';
import { CowinPublic } from './cowin-public/cowin-component';
import { DistrictComponent } from './cowin-public/public-apis/admin/district/districtlist';
import { StateComponent } from './cowin-public/public-apis/admin/state/statelist';
import { PublicApi } from './cowin-public/public-apis/public-api';
import { CalenderByPin } from './cowin-public/public-apis/sessions/calender/calender-pin';
import { CalenderSession } from './cowin-public/public-apis/sessions/calender/calender-sessions-card';
import { SessionByDistrict } from './cowin-public/public-apis/sessions/sessions.district';
import { SessionByPin } from './cowin-public/public-apis/sessions/sessions.pin';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'cowin', component: CowinPublic, canActivate: [AuthGuardService], children: [
      { path: '', redirectTo: 'api', pathMatch: 'full' }, //default page 
      {
        path: 'api' , component:PublicApi, children:[
        { path: 'admin/states', component:StateComponent},
        { path: 'admin/districts', component:DistrictComponent},
        { path: 'sessions/pin',component:SessionByPin},
        { path: 'sessions/district',component:SessionByDistrict},
        { path: 'centers/pin',component:CalenderByPin},
        { path: 'centers/pin/sessions',component:CalenderSession}
        ]
      }
  ]
},
{ path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
