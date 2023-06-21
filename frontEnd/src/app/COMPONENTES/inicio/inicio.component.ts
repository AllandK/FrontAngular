import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/SERVICE/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

lista:any=[];
  constructor(private usuarioService: UsuarioService ){}

  ngOnInit(): void {
    this.listarUsuarios();  
  }

  listarUsuarios(){
    this.usuarioService.getUsuarios().subscribe(
       res=>{this.lista=res},
       err => console.log(err)
    );


  }

eliminar(id:string){
  this.usuarioService.deleteUsuario(id).subscribe(
    res=> {this.ngOnInit();},
    err=> console.log(err)
  );
}



}
