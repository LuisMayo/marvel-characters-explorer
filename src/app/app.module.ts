import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './pages/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { DetailComponent } from './pages/detail/detail.component';
import { InfoCardComponent } from './components/info-card/info-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    InfoCardComponent
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
