import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { AuthGuard } from './guards/auth.guard';
import { AllMoveListComponent } from './pages/all-move-list/all-move-list.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { ContactResolver } from './resolvers/contact.resolver';

const routes: Routes = [
   {
      path: 'contact/edit/:id', component: ContactEditComponent,
      canActivate: [AuthGuard], resolve: { contact: ContactResolver }
   },
   { path: 'contact/edit', component: ContactEditComponent ,canActivate: [AuthGuard]},
   {
      path: 'contact/:id', component: ContactDetailsComponent
      , canActivate: [AuthGuard], resolve: { contact: ContactResolver }
   },
   { path: 'contact', component: ContactPageComponent ,canActivate: [AuthGuard]},
   { path: 'moves', component: AllMoveListComponent ,canActivate: [AuthGuard]},
   { path: '', component: HomepageComponent }
];

@NgModule({
   imports: [RouterModule.forRoot(routes, { useHash: true })],
   exports: [RouterModule]
})
export class AppRoutingModule { }
