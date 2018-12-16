import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThingComponent } from './thing/thing.component';
import { AppbarComponent } from './common/appbar/appbar.component';
import { CardComponent } from './common/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ThingComponent,
    AppbarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
