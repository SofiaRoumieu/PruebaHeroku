import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  public numero1 ;
  public numero2;
  public promedio;
  public suma;
  constructor() { }

  Promediar() {
    this.suma=this.numero1+this.numero2;
    this.promedio = (this.suma)/2;
  }

  Limpiar(){
    this.numero1='';
    this.numero2='';
    this.promedio='';
    this.suma='';
  }
  ngOnInit(): void {
  }

}
