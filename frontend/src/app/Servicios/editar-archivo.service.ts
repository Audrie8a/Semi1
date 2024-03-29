import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EditarArchivoComponent } from '../Componentes/editar-archivo/editar-archivo.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class EditarArchivoService {

  url:string="http://bl-475949248.us-east-2.elb.amazonaws.com:3000/"
  constructor(private httpClient: HttpClient) { }

  getMisArchivos(iduser:string | null){
    const ruta = this.url+"Inicio/getMisFiles";
    const data= {iduser};
    return this.httpClient.post(ruta,data).toPromise();
  }

  editarEstado(iduser: string | null, estado: string){
    const ruta = this.url+"Inicio/editFile";
    const data= {iduser, estado};
    return this.httpClient.post(ruta,data).toPromise();
  }

  verificar(id:string | null, contraAct:string){
    const ruta = this.url+"Inicio/verifica";
    const data = {id, contraAct};
    return this.httpClient.post(ruta, data).toPromise();
  }

}
