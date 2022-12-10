import { Component } from '@angular/core';
import { Celular } from '../Types/Celular';

@Component({
  selector: 'app-rendenrizando-listas',
  templateUrl: './rendenrizando-listas.component.html',
  styleUrls: ['./rendenrizando-listas.component.css'],
})
export class RendenrizandoListasComponent {
  celulares: Celular[] = [
    {
      id: 1,
      nome: 'Celular XL',
      descricao: 'Um celular grande',
      esgotado: false,
    },
    {
      id: 2,
      nome: 'Celular Normal',
      esgotado: false,
    },
    {
      id: 3,
      nome: 'Celular Mini',
      descricao: 'Um celular pequeno',
      esgotado: true,
    },
  ];
}
