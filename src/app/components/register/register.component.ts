import { Component } from '@angular/core';
import { FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { RestService } from 'src/app/services/rest/rest.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  [key: string]: any;
  public hide: boolean = true;
 public form:FormGroup=new FormGroup({})
 public userEmail:FormControl = new FormControl('', [Validators.required, Validators.email]);
 public userName:FormControl = new FormControl('', [Validators.required, Validators.maxLength(20),Validators.minLength(4)]);
 public userFirstName:FormControl = new FormControl('', [Validators.required, Validators.maxLength(20),Validators.minLength(4)]);
 public userLastName:FormControl = new FormControl('', [Validators.required, Validators.maxLength(20),Validators.minLength(4)]);
 public userPassword:FormControl = new FormControl('', [Validators.required, Validators.maxLength(20),Validators.minLength(4)]);
 public propToValidate:FormControl=new FormControl()


 constructor(private formBuilder:FormBuilder,private http:RestService){}
 

 //! Get message error
 public getErrorMessage(inputName:string) {
  if (this.hasOwnProperty(inputName)) {
    this.propToValidate=this[inputName]
  }
    if (this.propToValidate.hasError('required')) {
      return 'El campo no puede estar vacio';
    }
    if(this.propToValidate.hasError('userEmail')){
      return  'Email invalido'
    }
    if(this.propToValidate.hasError('requiredTrue')){
      return 'Seleccione una opcion'
    }
    if(this.propToValidate.hasError('nullValidator')){
      return 'Seleccione una opcion'
    }
    return 'Campo invalido'
  }

 //?Send Data 
  public sendData(){
    console.log(this.form.value);
    this.http.register(this.form.value).subscribe(data=>console.log(data))
  }


//* Capture value from multiselect and set into a prop


  ngOnInit(): void {
      this.form=this.formBuilder.group({
        userEmail:this.userEmail,
        userName:this.userName,
        userFirstName:this.userFirstName,
        userLastName:this.userLastName,
        userPassword:this.userPassword,
      })
      console.log(this.form.value.radio);
  }
}
