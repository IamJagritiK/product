import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CertificatesComponent} from './certificates/certificates.component';
import {CertificateComponent} from './certificates/certificate/certificate.component';
import {CertificateListComponent} from './certificates/certificate-list/certificate-list.component';
import {CategorySelectorComponent} from './certificates/category-selector/category-selector.component';
import {CategoryEventsComponent} from './Events/category-events/category-events.component';
import {EventCardsComponent} from './Events/event-cards/event-cards.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {ChatComponent} from './pages/chat/chat.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  // { path: '', redirectTo: 'certificates/uploadCertificate', pathMatch: 'full' },
  {path: '', redirectTo: 'categoryEvents', pathMatch: 'full'},
  {
    path: 'certificates', component: CertificatesComponent, children: [
      {path: 'uploadCertificate', component: CertificateComponent},
      {
        path: 'certificateList', component: CertificateListComponent, children: [
          {path: 'categorySelector', component: CategorySelectorComponent}
        ]
      }
    ]
  },
  {path: 'categoryEvents', component: CategoryEventsComponent},
  {path: 'eventCards', component: EventCardsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {
    path: 'chat/:chatroomId', component: ChatComponent, canActivate: [AuthGuard],
  },
  {path: '**', redirectTo: '/login'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
