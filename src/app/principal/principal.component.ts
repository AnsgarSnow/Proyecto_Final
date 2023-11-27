import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage} from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
  irPrincipal() {
    this.router.navigate(['/Principal']);
  }
  constructor(private router:Router){}
  irMateria(x: number) {
    this.router.navigate([`/Materias/${x}`]);
  }
  title = 'Primeros Pasos en Informática';
}
