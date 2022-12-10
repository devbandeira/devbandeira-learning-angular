import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteTesteComponent } from './primeiro-componente-teste/primeiro-componente-teste.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MultiplicadorPipe } from './multiplicador.pipe';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { RendenrizandoListasComponent } from './rendenrizando-listas/rendenrizando-listas.component';
import { ComponentePersonalizadoComponent } from './componente-personalizado/componente-personalizado.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    PrimeiroComponenteTesteComponent,
    SegundoComponenteComponent,
    MultiplicadorPipe,
    PipeCustomizadoComponent,
    TwoWayDataBindingComponent,
    RendenrizandoListasComponent,
    ComponentePersonalizadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
