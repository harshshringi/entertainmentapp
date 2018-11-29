import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntityControlComponent } from './entity-control/entity-control.component';
import { EntityDetailsComponent } from './entity-details/entity-details.component';
import { EntityTypeControlComponent } from './entity-type-control/entity-type-control.component';
import { EntityTypeComponent } from './entity-type/entity-type.component';

@NgModule({
  declarations: [
    AppComponent,
    EntityControlComponent,
    EntityDetailsComponent,
    EntityTypeControlComponent,
    EntityTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
