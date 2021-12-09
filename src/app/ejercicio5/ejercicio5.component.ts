import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio5',
  templateUrl: './ejercicio5.component.html',
  styleUrls: ['./ejercicio5.component.css']
})
export class Ejercicio5Component {

  ciudades:string[] = [];
  ciudadBorrada: any = "";
  ciudadesBorradas:string[] = [];

  mostrarCiudades() {
   this.ciudades = ["Madrid", "Barcelona", "Sevilla", "Valencia", "San Sebastián", "Murcia"];
  }

  borrarCiudades() {
    this.ciudadBorrada = this.ciudades.pop();
    this.ciudadesBorradas.push(this.ciudadBorrada);
  }



}
