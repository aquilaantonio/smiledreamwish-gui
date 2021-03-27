import { ThrowStmt } from "@angular/compiler";
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
export class Wish{
  descricao: string;
   dataIda: Date ;
   dataVolta: Date ;
   localOrigem: string ;
    localDestino: string;
    cotacaoAtual:  number;
    constructor(descricao:string, dataIda: Date, dataVolta: Date, localOrigem:string, localDestino:string,cotacaoAtual:number){
    this.descricao = descricao;
    this.dataIda= dataIda;
    this.dataVolta=dataVolta;
    this.localOrigem =localOrigem;
    this.localDestino =localDestino;
    this.cotacaoAtual = cotacaoAtual;
    }

}
