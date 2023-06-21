import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario, UsuarioService } from 'src/app/SERVICE/usuario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  id:string=""; 
  usuarioActual: Usuario ={id:'',nombre:'',email:'',prioridad:'',estado:1};
  constructor( 
    private usuarioService : UsuarioService, 
    private activaRouter : ActivatedRoute, 
    private router : Router)
    {}


  ngOnInit(): void {
   this.id = this.activaRouter.snapshot.params['id'];
   this.usuarioService.getUnUsuario(this.id).subscribe(
     res=> {this.usuarioActual= res},
     err => console.log(err)



   );
  }

  guardar(){
    this.usuarioService.editUsuario(this.id, this.usuarioActual).subscribe(
      res=> {this.router.navigate(['/inicio'])},
      err => console.log(err)
    );
  }

}
