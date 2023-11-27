import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-div1',
  templateUrl: './div1.component.html',
  styleUrls: ['./div1.component.scss']
})
export class Div1Component {
  redirect(x: string) {
    window.location.href = x;
  } 
  @Input() foto: string='';
  @Input() title: string='';
  @Input() nombre: string='';
  @Input() email: string='';
  @Input() telefono: string='';
  @Input() facebok: string='';
  
}
