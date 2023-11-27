import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.scss']
})
export class DivComponent {
  @Input() tema: string = '';
  @Input() contenido: string = '';
}
