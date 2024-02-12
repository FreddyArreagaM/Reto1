import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reto1';

  formulario: FormGroup;

  constructor(private fb: FormBuilder){
    this.formulario = this.fb.group({
      nombre: ['', Validators.required] ,
      telefono: ['', [Validators.required, Validators.minLength(10)]],
      correo :['', [Validators.required, Validators.email,Validators.pattern("^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
    })
  }

  send(){
    if(this.formulario.invalid){
      console.log("formulario invalido")
    }else{
      console.log("formulario valido")
    }
  }
}
