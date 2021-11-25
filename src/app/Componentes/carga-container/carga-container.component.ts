import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Container } from 'src/app/clases/container';
import { ContainerService } from 'src/app/services/container.service';
import { ProductosService } from 'src/app/services/productos.service';
import { take } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-carga-container',
  templateUrl: './carga-container.component.html',
  styleUrls: ['./carga-container.component.css']
})
export class CargaContainerComponent implements OnInit {

  listaContainers : Observable<Container[]>;
  listadoProductos:any;
  producto:any;
  cantidadIngresada:number;
  container : Container = new Container();
  containerSeleccionado:boolean=false;
  productoSeleccionado:boolean=false;
  cantidadTotal;
  public formProducto: FormGroup;
  
  constructor(private contSvc : ContainerService,private prodSVC: ProductosService,private fb:FormBuilder) 
  { 
    this.cantidadTotal=0;
    this.listaContainers = this.contSvc.getContainers().valueChanges();
    this.prodSVC.getProductos().subscribe(productos =>{  
      this.listadoProductos=productos;
      console.log(this.listadoProductos);
  })
  
  }

  ngOnInit(): void {
   
  }

  tomarContainer(container: Container)
  {
    this.container.codigo = container.codigo;
    this.container.marca = container.marca;
    this.container.capacidad = container.capacidad;
    this.container.stock=container.stock;
    this.container.capacidadParcial=container.capacidadParcial;
    this.containerSeleccionado=true;
  }

  tomarProducto(producto:Producto){
    this.producto= new Producto(producto.descripcion,producto.precio, producto.stock, producto.paisOrigen,producto.comestible, producto.codigo);
    this.productoSeleccionado=true;
  }

  cargarProducto(){

    let cantidad=this.cantidadIngresada;
    this.cantidadTotal+=cantidad;

    if((this.producto.stock>=cantidad) && (this.container.capacidadParcial>=cantidad)){
      console.log(this.container);

      this.producto.stock-=cantidad;
    
      this.container.stock.push({producto:this.producto.descripcion,stock:cantidad});
      this.container.capacidadParcial-=cantidad;
      
      this.contSvc.getContainers().snapshotChanges().pipe(take(1)).subscribe(list=>{
        list.forEach((response):any =>{
          console.log("hola");
          let container = response.payload.doc.data();
            let id = response.payload.doc.id;
            if(container.codigo == this.container.codigo)
            {
              this.contSvc.updateStockContainer(id,JSON.parse(JSON.stringify(this.container)));
 
              this.prodSVC.getProductossss().snapshotChanges().pipe(take(1)).subscribe(list=>{
                list.forEach((response):any =>{
                  let producAux = response.payload.doc.data();
                    let id = response.payload.doc.id;
                    if(producAux.codigo == this.producto.codigo)
                    {
                      this.prodSVC.updateStockProducto(id,JSON.parse(JSON.stringify(this.producto)));
                    }
                });
              });

              Swal.fire({
                title:'Producto cargado',
                text:'El producto se cargó correctamente al container',
                icon:'success',
                confirmButtonText:'Cerrar'
              });
              this.productoSeleccionado=false;
              this.containerSeleccionado=false;
              this.container=new Container();
              this.cantidadIngresada=0;
            }
        });
      });
    }
    else{
      this.cantidadTotal-=cantidad;
      Swal.fire({
        title:'No se puede cargar el producto',
        text:'La cantidad ingresada supera el stock del producto o la capacidad del container',
        icon:'error',
        confirmButtonText:'Cerrar'
      });
    }
  }
}
