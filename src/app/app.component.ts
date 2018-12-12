import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YuBan Proyect';
  nombre = 'Yu Ban Mena Zabala';
  edad = 12;
  email = 'yubanmenazabala@outlook.com';
  frameworks = ['laravel', 'grails', 'angular', 'react'];

  materias = [7500, 1200, 543, 1234];
  activo = true;

  esActivo() {
    if (this.activo)
      return 'Trabajador Activo';
    else
      return 'Trabajador Inactivo'
  }

  ultimos3Sueldos() {
    let suma = 0;
    for (let x = 0; x < this.materias.length; x++)
      suma += this.materias[x];
    return suma;
  }

}
