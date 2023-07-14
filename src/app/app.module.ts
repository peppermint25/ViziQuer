import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResearchComponent } from './research/research.component';
import { QuerryEnvironmentComponent } from './querry-environment/querry-environment.component';
import { ContactsComponent } from './contacts/contacts.component';

import { DocumentationComponent } from './documentation/documentation.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ResearchComponent,
    QuerryEnvironmentComponent,
    ContactsComponent,
    DocumentationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    [RouterModule],
    [NgbModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
