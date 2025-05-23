import { Component, OnInit } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { ColumnMode, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Seleccion } from '../../../shared/entidades/Seleccion';
import { SeleccionService } from '../../../core/servicios/seleccion.service';
import { MatDialog } from '@angular/material/dialog';
import { SeleccionEditarComponent } from '../seleccion-editar/seleccion-editar.component';

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

  public columnas = [
    {
      name: "Nombre", prop: "nombre"
    },
    {
      name: "Entidad", prop: "entidad"
    }
  ];

  public modoColumna = ColumnMode;

  constructor(private seleccionServicio: SeleccionService,
    public dialogoServicio: MatDialog,

  ) { }
  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.seleccionServicio.listar().subscribe({
      next: (response) => {
        //agrego objetos al vector de selecciones
        this.selecciones = response;
      },
      error: (error) => {
        window.alert(error.message);
      }
    })


  }

  public buscar() { }

  public agregar() {
    const dialogoEdicion = this.dialogoServicio.open(SeleccionEditarComponent, {
      width: "500px", height: "300px", data: {
        encabezado: "Agregando una nueva seleccion de Fútbol",
        seleccion:{
          id:0,
          nombre:"",
          entidad:"",
        }
      },
      disableClose: true
    });

    dialogoEdicion.afterClosed().subscribe({
      next:(seleccion) => {
        window.alert("se cerro el cuadro de dialgo");
      },
      error: (error) => {
        window.alert(error);
      }
    });
  }

  public modificar() { }

  public eliminar() { }

}
