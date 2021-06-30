import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { AdminDashboardComponent } from './adminDashboard/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home/home.component';
import { EditGymComponent } from './gyms/edit-gym/edit-gym.component';
import { FindAllGymsComponent } from './gyms/find-all-gyms/find-all-gyms.component';
import { AddSportComponent } from './sports/add-sport/add-sport.component';
import { AddSportsSportsmanComponent } from './sports/add-sports-sportsman/add-sports-sportsman.component';
import { DisplaySportComponent } from './sports/display-sport/display-sport.component';
import { AddWorktimeComponent } from './worktime/add-worktime/add-worktime.component';
import { FindAllWorktimeComponent } from './worktime/find-all-worktime/find-all-worktime.component';
import { AddSportsManComponent } from './sportsMan/add-sports-man/add-sports-man.component';
import { DisplaySportsManComponent } from './sportsMan/display-sports-man/display-sports-man.component';
import { AddTrainSportComponent } from './trains/add-train-sport/add-train-sport.component';
import { AddTrainComponent } from './trains/add-train/add-train.component';
import { AddArbitrateSportComponent } from './arbitrates/add-arbitrate-sport/add-arbitrate-sport.component';
import { AddArbitrateComponent } from './arbitrates/add-arbitrate/add-arbitrate.component';
import { AddPaymentComponent } from './payments/add-payment/add-payment.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { FirstPageComponent } from './firstPage/first-page/first-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    HomeComponent,
    EditGymComponent,
    FindAllGymsComponent,
    AddSportComponent,
    AddSportsSportsmanComponent,
    DisplaySportComponent,
    AddWorktimeComponent,
    FindAllWorktimeComponent,
    AddSportsManComponent,
    DisplaySportsManComponent,
    AddTrainSportComponent,
    AddTrainComponent,
    AddArbitrateSportComponent,
    AddArbitrateComponent,
    AddPaymentComponent,
    WelcomeComponent,
    FirstPageComponent,

  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,

    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
