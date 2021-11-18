import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  @Input() productoRecibido?: Producto;

  constructor() { }

  ngOnInit(): void {
    console.log(this.productoRecibido);
  }
}

