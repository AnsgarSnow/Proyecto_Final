import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { PrincipalComponent } from './principal/principal.component';
import { MateriasComponent } from './materias/materias.component';
import { TemasComponent } from './temas/temas.component';
import { DivComponent } from './materias/div/div.component';
import { TutoresComponent } from './tutores/tutores.component';
import { Div1Component } from './tutores/div1/div1.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    MateriasComponent,
    TemasComponent,
    DivComponent,
    TutoresComponent,
    Div1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
