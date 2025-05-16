import { Component, OnInit } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Seleccion } from '../../../shared/entidades/Seleccion';
import { SeleccionService } from '../../../core/servicios/seleccion.service';

@Component({
  selector: 'app-seleccion',
  imports: [
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule
  ],
  templateUrl: './seleccion.component.html',
  styleUrl: './seleccion.component.css'
})
export class SeleccionComponent implements OnInit {
  public textoBusqueda: string = "";
  public selecciones: Seleccion[] = [];

  constructor(private seleccionServicio: SeleccionService) { }
  ngOnInit(): void {
   this.listar();
  }

  public listar() {
    this.seleccionServicio.listar().subscribe({
      next: (response) => {
        //agrego objetos al vector de selecciones
        this.selecciones=response;
      },
      error: (error) => {
        window.alert(error.message);
      }
    })


  }

  public buscar() { }

}
