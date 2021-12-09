import { Component} from '@angular/core';

@Component({
  selector: 'app-ejercicio4',
  templateUrl: './ejercicio4.component.html',
  styleUrls: ['./ejercicio4.component.css']
})
export class Ejercicio4Component {

comidas:string[] = ["lentejas", "huevos fritos", "cocido madrileño", "pollo asado", "pez espada", "puré de patatas", "tacos", "pizza"];

  borrarTodasComidas(){
    this.comidas = [];

  }

}


