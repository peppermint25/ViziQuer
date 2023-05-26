import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResearchComponent } from './research/research.component';
import { SampleProjectsComponent } from './sample-projects/sample-projects.component';
import { QuerryEnvironmentComponent } from './querry-environment/querry-environment.component';
import { ContactsComponent } from './contacts/contacts.component';
import { OpenSourceCodeComponent } from './open-source-code/open-source-code.component';
import { DataSchemaComponent } from './data-schema/data-schema.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ResearchComponent,
    SampleProjectsComponent,
    QuerryEnvironmentComponent,
    ContactsComponent,
    OpenSourceCodeComponent,
    DataSchemaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
