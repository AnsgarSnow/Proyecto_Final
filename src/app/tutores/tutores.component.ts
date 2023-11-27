import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutores',
  templateUrl: './tutores.component.html',
  styleUrls: ['./tutores.component.scss']
})
export class TutoresComponent {
  id: number =1 ;
  ngOnInit(){
    this.id = +this.route.snapshot.paramMap.get('id')!;
  }
  redirectToYoutube(x:number) {
  if(x == 1){
    window.location.href = 'https://www.youtube.com/playlist?list=PLPmRzmMDGerWEzjT0Vqy8D-IixKMY_6N6'
  }
  if(x == 2){
    window.location.href = 'https://www.youtube.com/playlist?list=PLE8uP447fYpis_9iiaT1GrdOLmg85pAJB'
  }
  if(x == 3){
    window.location.href = 'https://www.youtube.com/playlist?list=PLuyqRxNKadzntrdSlwOkLYkP1H3FwDYna'
  }
  if(x == 4){
    window.location.href = 'https://www.youtube.com/playlist?list=PL3v2dgnQ47vzhSdS5oEaGqBnCA-8gADBf'
  }
  if(x == 5){
    window.location.href = 'https://www.youtube.com/playlist?list=PLmGNSxrYSXDLhINoFWHpiPmVTvAK3yQ8o'
  }
  if(x == 6){
    window.location.href = 'https://www.youtube.com/playlist?list=PL34PZAXdQqX5Gh4sIMLPwBpvtNrpARaU8'
  }
}
irPrincipal() {
  this.router.navigate(['/Principal']);
}
irforms(x:number){
  if(x == 1){
    window.location.href ='https://forms.gle/PFfwJHUWjEmWdRvy9';
  }
  if(x == 2){
    window.location.href = 'https://forms.gle/sCqF62d52imhTsKJ7'
  }
  if(x == 3){
    window.location.href = 'https://forms.gle/xmoE5QCyMK3ezSV87'
  }
  if(x == 4){
    window.location.href = 'https://forms.gle/s3pRDufTsLU2JSdS6'
  }
  if(x == 5){
    window.location.href = 'https://forms.gle/efRjvaEbKYRK9EHh8'
  }
  if(x == 6){
    window.location.href = 'https://forms.gle/cinh74gyTuQjZScW9'
  }
}
irMateria(x: number) {
  this.router.navigate([`/Materias/${x}`]);
}
    constructor(private route:ActivatedRoute,private router:Router){}
  
    divsContenido: any[] = [
      {
        foto: 'https://robohash.org/1.png',
        title: 'https://www.facebook.com/oscarluis.lujannacho',
        nombre: 'Oscar Lujan',
        email: 'rpablo@gmail.com',
        telefono: 72578945,
        facebok: 'Ansgar'
      },
      {
        foto: 'https://robohash.org/2.png',
        title: 'https://www.facebook.com/ModricLuka10',
        nombre: 'Luka Modric',
        email: 'Luka@gmail.com',
        telefono: 54564565,
        facebok: 'Luka'
      },
      {
        foto: 'https://robohash.org/3.png',
        title: 'https://www.facebook.com/SergioRamosOficial',
        nombre: 'Sergio Ramos',
        email: 'Sergio@gmail.com',
        telefono: 78665456,
        facebok: 'Sergio'
      },
      {
        foto: 'https://robohash.org/4.png',
        title: 'https://www.facebook.com/Bale',
        nombre: 'Garet Bale',
        email: 'Garet@gmail.com',
        telefono: 877654345,
        facebok: 'Garet'
      },
      {
        foto: 'https://robohash.org/5.png',
        title: 'https://www.facebook.com/Cristiano',
        nombre: 'Cristiano Ronaldo',
        email: 'Cristiano@gmail.com',
        telefono: 14758694,
        facebok: 'Cristiano'
      },
      {
        foto: 'https://robohash.org/6.png',
        title: 'https://www.facebook.com/Elmaestro.Xavier',
        nombre: 'Xavi Hernandez',
        email: 'Xavi@gmail.com',
        telefono: 45678917,
        facebok: 'Xavi'
      },
      {
        foto: 'https://robohash.org/7.png',
        title: 'https://www.facebook.com/mesutoezil',
        nombre: 'Mesut Ozil',
        email: 'Mesut@gmail.com',
        telefono: 78954846,
        facebok: 'Mesut'
      },
      {
        foto: 'https://robohash.org/8.png',
        title: 'https://www.facebook.com/tonikroos',
        nombre: 'Toni Kross',
        email: 'Toni@gmail.com',
        telefono: 76584953,
        facebok: 'Toni'
      }
    ]
}  

