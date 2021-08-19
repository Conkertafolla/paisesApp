import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {
  hasError:boolean = false
  termino:string=""
  paises:Country[]=[]
  constructor(private paisService:PaisService) { }

  buscar(termino:string){
    this.hasError=false
    this.termino = termino
    this.paisService.buscarCapital(termino)
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
  }


  
}
