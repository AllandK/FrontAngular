import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario, UsuarioService } from 'src/app/SERVICE/usuario.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {


  usuarioNuevo: Usuario={id:'',nombre:'',email:'',prioridad:'',estado:1};
  constructor(private usuarioService: UsuarioService, private router:Router){}


  ngOnInit(): void {

  }


  agregarUsuario(){
    this.usuarioService.saveUsuario(this.usuarioNuevo).subscribe(
     res=>{
      console.log(res);
      this.router.navigate(['/inicio']);
     },
     err=>console.log(err)


    );
  }


}
