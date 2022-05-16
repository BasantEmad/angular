import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AddpatientComponent } from './shared/addpatient/addpatient.component';
import { PatientlistComponent } from './shared/patientlist/patientlist.component';
import { NotfoundComponent } from './notfound/notfound.component';
import{HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { UpdatepatientComponent } from './shared/updatepatient/updatepatient.component';
import { AdddoctorsComponent } from './shared/adddoctors/adddoctors.component';
import { DoctorslistComponent } from './shared/doctorslist/doctorslist.component';
import { HelpuslistComponent } from './shared/helpuslist/helpuslist.component';
import { AddHelpusComponent } from './shared/addhelpus/addhelpus.component';
import { UpdateHelpusComponent } from './shared/updatehelpus/updatehelpus.component';
import { UpdateDoctorsComponent } from './shared/updatedoctors/updatedoctors.component';













@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    AddpatientComponent,
    PatientlistComponent,
    NotfoundComponent,
    UpdatepatientComponent,
    AdddoctorsComponent,
    DoctorslistComponent,
    HelpuslistComponent,
    AddHelpusComponent,
    UpdateHelpusComponent,
    UpdateDoctorsComponent
   
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 

    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
