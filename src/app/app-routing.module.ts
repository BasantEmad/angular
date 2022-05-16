import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AdddoctorsComponent } from './shared/adddoctors/adddoctors.component';
import { AddHelpusComponent } from './shared/addhelpus/addhelpus.component';
import { AddpatientComponent } from './shared/addpatient/addpatient.component';
import { DoctorslistComponent } from './shared/doctorslist/doctorslist.component';
import { HelpuslistComponent } from './shared/helpuslist/helpuslist.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PatientlistComponent } from './shared/patientlist/patientlist.component';
import { UpdateDoctorsComponent } from './shared/updatedoctors/updatedoctors.component';
import { UpdateHelpusComponent } from './shared/updatehelpus/updatehelpus.component';
import { UpdatepatientComponent } from './shared/updatepatient/updatepatient.component';



const routes: Routes = [
  {path:"home", component:HomeComponent },
  {path:"about-us", component:AboutUsComponent},
  {path:"contact-us", component:ContactUsComponent},
  {path:"navbar", component:NavbarComponent},
  {path:"patientlist", component:PatientlistComponent},
  {path:"addpatient", component:AddpatientComponent},
  {path: "updatepatient" , component:UpdatepatientComponent},
  {path:"doctorslist", component:DoctorslistComponent},
  {path:"adddoctors", component:AdddoctorsComponent},
  {path: "updatedoctors" , component:UpdateDoctorsComponent},
  {path:"helpuslist", component:HelpuslistComponent},
  {path:"addhelpus", component:AddHelpusComponent},
  {path: "updatehelpus" , component:UpdateHelpusComponent},
  {path:"" , component:HomeComponent },
  {path: "**" , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
