import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { Seleccion } from '../../../shared/entidades/Seleccion';


export interface DatosEdicionSeleccion {
  encabezado: string,
  seleccion: Seleccion

}

@Component({
  selector: 'app-seleccion-editar',
  imports: [
    ReferenciasMaterialModule,
    FormsModule
  ],
  templateUrl: './seleccion-editar.component.html',
  styleUrl: './seleccion-editar.component.css'
})
export class SeleccionEditarComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DatosEdicionSeleccion, private dialogoReferencia:MatDialogRef<SeleccionEditarComponent>) { }

  cerrar() {
    this.dialogoReferencia.close();
  }

}
