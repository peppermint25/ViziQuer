import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { SampleProjectsComponent } from './sample-projects/sample-projects.component';
import { QuerryEnvironmentComponent } from './querry-environment/querry-environment.component';
import { ContactsComponent } from './contacts/contacts.component';
import { OpenSourceCodeComponent } from './open-source-code/open-source-code.component';
import { DataSchemaComponent } from './data-schema/data-schema.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'sample-project', component: SampleProjectsComponent},
  {path: 'querry-environment', component: QuerryEnvironmentComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'open-source-code', component: OpenSourceCodeComponent},
  {path: 'data-schema', component: DataSchemaComponent},

  {path: '**', redirectTo: ''}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
