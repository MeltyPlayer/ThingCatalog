import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThingComponent } from './thing/thing.component';
import { AppbarComponent } from './common/appbar/appbar.component';
import { CardComponent } from './common/card/card.component';
import { LeftnavComponent } from './common/leftnav/leftnav.component';
import { PanelComponent } from './common/panel/panel.component';
import { HeaderComponent } from './common/card/header/header.component';
import { BodyComponent } from './common/card/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    ThingComponent,
    AppbarComponent,
    CardComponent,
    LeftnavComponent,
    PanelComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
