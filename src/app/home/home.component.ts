import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  paginaActual: string = 'Inicio'; 

  cambiarPagina(pagina: string) {
    this.paginaActual = pagina;
  }

}
