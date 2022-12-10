import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = `Alexander`;
  dataNascimento = `1995-01-23`;
  imagemUrl = '../assets/2181.jpg';
  mostrarDataNascimento() {
    alert (`A data de nascimento de Alexander é ${this.dataNascimento}`)
  }
}
