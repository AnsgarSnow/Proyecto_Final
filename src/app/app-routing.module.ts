import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MateriasComponent } from './materias/materias.component';
import { TemasComponent } from './temas/temas.component';
import { PrincipalComponent } from './principal/principal.component';
import { TutoresComponent } from './tutores/tutores.component';

const routes: Routes = [
  {
    path:'Principal',
    component: PrincipalComponent
  },
  {
    path:'Materias/:id',
    component: MateriasComponent
  },
  {
    path:'Temas/:id/:x',
    component: TemasComponent
  },
  {
    path:'Tutores/:id',
    component: TutoresComponent
  },
  {
    path:'',
    component: PrincipalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
