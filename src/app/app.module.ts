import { NgModule, isDevMode, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'; 
import { MatListModule } from '@angular/material/list'; 
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';  
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatTableModule } from '@angular/material/table';
 import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatBadgeModule } from '@angular/material/badge'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { SearchPipe } from './search.pipe';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ConnexionDialogComponent } from './connexion-dialog/connexion-dialog.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { HeroDetailDialogComponent } from './hero-detail-dialog/hero-detail-dialog.component';
import { OtpDialogComponent } from './otp-dialog/otp-dialog.component';
import { PhoneConnexionDialogComponent } from './phone-connexion-dialog/phone-connexion-dialog.component';
import { InformDialogComponent } from './inform-dialog/inform-dialog.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    HeroEditComponent,
    DialogComponent,
    SearchPipe,
    ConnexionDialogComponent,
    UserProfilComponent,
    HeroDetailDialogComponent,
    OtpDialogComponent,
    PhoneConnexionDialogComponent,
    InformDialogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatMenuModule,
    MatGridListModule,
    MatIconModule,
    MatButtonToggleModule,
    MatTableModule,
    AngularFireAuthModule,
    NgxOtpInputModule,
    AngularFirestoreModule,
    MatToolbarModule,
    MatInputModule,
    MatBadgeModule,
    MatDialogModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(){
    FirebaseTSApp.init(environment.firebaseConfig);
  }
 }
