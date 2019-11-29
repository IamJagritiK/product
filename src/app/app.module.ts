import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';


import {AuthenticationModule} from './authentication/authentication.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';

import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { AlertService } from './shared/alert.service';
import { LoadingService } from './shared/loading.service';
import { NgxLoadingModule } from 'ngx-loading';

// import {LoginComponent} from './authentication/login/login.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { CertificateComponent } from './certificates/certificate/certificate.component';
import { CertificateListComponent } from './certificates/certificate-list/certificate-list.component';
import {DocPipe} from './doc.pipe';
import { CategorySelectorComponent } from './certificates/category-selector/category-selector.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { CategoryEventsComponent } from './Events/category-events/category-events.component';
import { EventCardsComponent } from './Events/event-cards/event-cards.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import { ChatComponent } from './pages/chat/chat.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatInputComponent } from './pages/chat/chatComponents/chat-input/chat-input.component';
import { ChatroomListComponent } from './pages/chat/chatComponents/chatroom-list/chatroom-list.component';
import { ChatroomTitleBarComponent } from './pages/chat/chatComponents/chatroom-title-bar/chatroom-title-bar.component';
import { ChatMessageComponent } from './pages/chat/chatComponents/chat-message/chat-message.component';
import { ChatroomWindowComponent } from './pages/chat/chatComponents/chatroom-window/chatroom-window.component';
import {AuthService} from './shared/auth.service';
import {AuthGuard} from './guards/auth.guard';
import {ChatroomService} from './shared/chatroom.service';

// import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    // tslint:disable-next-line:max-line-length
    AppComponent, LoginComponent, SignupComponent, CertificatesComponent, CertificateComponent, CertificateListComponent, DocPipe, CategorySelectorComponent, CategoryEventsComponent, EventCardsComponent, ChatComponent, NavbarComponent, ChatInputComponent, ChatroomListComponent, ChatroomTitleBarComponent, ChatMessageComponent, ChatroomWindowComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgxLoadingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    AlertModule.forRoot(),
    AuthenticationModule,
    ReactiveFormsModule,
    AngularFirestoreModule
  ],
  providers: [ AngularFireAuth,
    AngularFireDatabase,
    AlertService, LoadingService , AuthService, ChatroomService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

