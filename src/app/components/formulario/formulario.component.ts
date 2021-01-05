import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() parametrosSeleccionados = new EventEmitter<any>();

  categoriaSeleccionada = 'general';
  paisSeleccionado = 'ar';

  categorias: any[] = [
    { value: 'general', nombre: 'General' },
    { value: 'business', nombre: 'Negocios' },
    { value: 'entertainment', nombre: 'Entretenimiento' },
    { value: 'health', nombre: 'Salud' },
    { value: 'science', nombre: 'Ciencia' },
    { value: 'sports', nombre: 'Deportes' },
    { value: 'technology', nombre: 'Tecnología' }
  ]

  paises: any[] = [
    { value: 'ar', nombre: 'Argentina' },
    { value: 'br', nombre: 'Brazil' },
    { value: 'fr', nombre: 'Francia' },
    { value: 'hu', nombre: 'Hungría' },
    { value: 'mx', nombre: 'México' },
    { value: 'gb', nombre: 'Reino Unido' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia(): void {
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }

    this.parametrosSeleccionados.emit(PARAMETROS);
  }

}
