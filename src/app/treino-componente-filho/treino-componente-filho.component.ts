import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-treino-componente-filho',
  templateUrl: './treino-componente-filho.component.html',
  styleUrls: ['./treino-componente-filho.component.css']
})
export class TreinoComponenteFilhoComponent {
  @Input() sobrenome = '';
  @Output() mostrarNome = new EventEmitter();
  nome = "";
}
