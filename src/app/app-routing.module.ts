import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { QuerryEnvironmentComponent } from './querry-environment/querry-environment.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DocumentationComponent } from './documentation/documentation.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'querry-environment', component: QuerryEnvironmentComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'documentation', component: DocumentationComponent},
  {path: '**', redirectTo: ''}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
