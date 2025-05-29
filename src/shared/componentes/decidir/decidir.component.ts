import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReferenciasMaterialModule } from '../../modulos/referencias-material.module';

export interface DatosDecision {
  encabezado: string;
  id: number;
}
@Component({
  selector: 'app-decidir',
  imports: [
    ReferenciasMaterialModule
  ],
  templateUrl: './decidir.component.html',
  styleUrl: './decidir.component.css'
})
export class DecidirComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public datos: DatosDecision, public dialogRef: MatDialogRef<DecidirComponent>,) { }
  cerrar() {
    this.dialogRef.close();
  }

}
