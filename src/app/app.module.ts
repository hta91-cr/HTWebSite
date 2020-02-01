
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module'
import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
/* ---------------------------------- */
import { MenuComponent } from '../menu/menu/menu.component';
import { HomeComponent } from '../core/home/home.component';
import { AboutComponent } from '../core/about/about.component';
import { ParticlesModule } from 'angular-particle';
import { SkillsComponent } from '../core/skills/skills.component';
import { ProjectsComponent } from '../core/projects/projects.component';
import { ContactComponent } from '../core/contact/contact.component';
import { MainService } from '../services/main.service'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    HttpClientModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    })
    , AppRoutingModule,
    ReactiveFormsModule
    , ParticlesModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    , AngularFirestoreModule,
  ],
  providers: [MDBSpinningPreloader, MainService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
