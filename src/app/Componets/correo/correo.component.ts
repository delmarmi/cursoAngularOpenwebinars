import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {
	correo:any;
  constructor() { 
  	this.correo={titulo: "Titulo provisional del correo", asunto:"Asunto provisional",cuerpo:"Cuerpo provisional del correo que puede ser muy largo o muy corto o nada.....",emisor:"emisor@correo.punto",receptor:"receptor@correo.punto"}
}  	
  ngOnInit(): void {
  }

}
