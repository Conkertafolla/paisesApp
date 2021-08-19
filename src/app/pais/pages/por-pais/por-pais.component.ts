import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {
  termino:string='Hola Mundo'
  hasError:boolean=false;
  paises:Country[]=[]
  constructor(private paisService:PaisService){

  }

  buscar(termino:string){
    this.hasError=false
    this.termino = termino
    this.paisService.buscarPais(this.termino)
    .subscribe((paises)=>{
        this.paises = paises

      },
      (err)=>{
        this.hasError=true;
        this.paises = []
      }
    )
  }

  sugerencias(termino:string){
    console.log(termino)
    this.hasError= false;
    //TODO: Crear sugerencias
  }

}
