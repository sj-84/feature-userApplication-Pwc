import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  { path: 'user_info', component: UserInfoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'user_info', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { initialNavigation: 'enabledNonBlocking' }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
