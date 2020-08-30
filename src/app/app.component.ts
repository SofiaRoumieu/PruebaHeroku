import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';

  public numero1 ;
  public numero2;
  public promedio;
  constructor() { }

  ngOnInit() {
  }

  Promediar() {
    this.promedio = (this.numero1+this.numero2)/2;
  }

  Limpiar(){
    this.numero1='';
    this.numero2='';
    this.promedio='';
  }
}