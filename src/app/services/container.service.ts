import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Container } from '../clases/container';


@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  containers: any[] = [];

  //rutaDeLaColeccion = '/container';
  dbContainersRef: AngularFirestoreCollection<Container>;

  constructor(private bd: AngularFirestore) {
    this.dbContainersRef = bd.collection('container');

    this.dbContainersRef.valueChanges().subscribe((data: any) => {
      data.forEach((element: any) => {
        this.containers.push(element);
      });
    });
  }

  public CrearContainer(con: Container): any {
    return this.dbContainersRef.add({ ...con });
  }

  public getContainers() {
    return this.dbContainersRef;
  }

  public modificarContainer(id:string,data:any) : any
  {
     return this.dbContainersRef.doc(id).set(data);
  }

   public eliminarContainer(id:string) : any
   {
      return this.dbContainersRef.doc(id).delete();
   }

   updateStockContainer(id:string,data:any)
   { 
     console.log(data);
     return  this.dbContainersRef.doc(id).update({
       stock: data.stock,
       capacidadParcial:data.capacidadParcial
     }) 
 
   }
 

  public getAll() {
    return this.containers;
  }
}
