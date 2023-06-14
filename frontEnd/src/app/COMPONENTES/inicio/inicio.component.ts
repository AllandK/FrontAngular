import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/SERVICE/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{


  constructor(private usuarioService: UsuarioService ){}

  ngOnInit(): void {
    this.listarUsuarios();  
  }

  listarUsuarios(){
    this.usuarioService.getUsuarios().subscribe(
       res=>{console.log(res);},
       err => console.log(err)
    );


  }

}
