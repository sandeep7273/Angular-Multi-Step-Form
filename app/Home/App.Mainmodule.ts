import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule,}  from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './App.HomeComponent'
import { MasterComponent } from './App.MasterComponent';
import { MainRouts } from '../Routing/App.MainRouting'
import { FormService } from '../form.service';
import { RegistrationComponent } from '../Registration/App.RegistrationComponent';
import { EducationComponent } from '../Education/App.EducationComponent';
import { SubmitComponent } from '../Submit/App.SubmitComponent';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AdminComponent } from '../Admin/App.AdminComponent';

@NgModule({
  declarations: [
    MasterComponent, HomeComponent,
    RegistrationComponent, EducationComponent,
    SubmitComponent, AdminComponent,
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(MainRouts),
    HttpClientModule, ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.fireBase),
    ],
  
  providers: [
    FormService 
  ],

  bootstrap: [MasterComponent]
})
export class MainModule { }
