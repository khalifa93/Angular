import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { MainFormComponent } from './main-form/main-form.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MonthlyUpdateComponent } from './monthly-update/monthly-update.component';
import { HttpClientModule } from '@angular/common/http';
import { PredictionService } from './prediction.service';


@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    HomeComponent,

    MonthlyUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    NgbModule,
    HttpClientModule
  ],
  providers: [ PredictionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
