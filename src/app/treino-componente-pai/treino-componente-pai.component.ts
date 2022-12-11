import { Component } from '@angular/core';

@Component({
  selector: 'app-treino-componente-pai',
  templateUrl: './treino-componente-pai.component.html',
  styleUrls: ['./treino-componente-pai.component.css']
})
export class TreinoComponentePaiComponent {
  sobrenome = "Bandeira ";

  mostrarNomeCompleto (nomeCompleto: any){
    alert (`Seu nome completo e: ${nomeCompleto}`)
  }
}
