import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{
      cursor:pointer;
    }
  `
  ]
})
export class PorPaisComponent  {
  termino:string=''
  hasError:boolean=false;
  paises:Country[]=[]
  paisesSugeridos:Country[]=[]
  showSuggest :boolean =true
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

  buscarSugerido(termino:string){
    this.buscar(termino)
    this.showSuggest=false

  }

  sugerencias(termino:string){
    this.hasError= false;
    this.termino= termino
    this.showSuggest = true
    this.paisService.buscarPais(termino)
      .subscribe((paises=> {this.paisesSugeridos = paises.splice(1,10)}),
                  (err)=>{this.paisesSugeridos=[]; this.hasError=true} );
      
  }

}
