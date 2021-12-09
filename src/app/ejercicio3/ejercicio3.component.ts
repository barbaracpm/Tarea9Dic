import { Component} from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component {

  flores:string[] = ["margaritas", "rosas", "pensamientos", "gardenias", "claveles", "tulipanes", "girasoles", "flor de loto"];

  borrarTodasFlores(){
    this.flores = [];

  }
}

