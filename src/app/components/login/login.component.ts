import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest/rest.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-form-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class FormLoginComponent implements OnInit {

  public hide: boolean = true;
  public form: FormGroup = new FormGroup({});
  public user: FormControl = new FormControl('');
  public password: FormControl = new FormControl('');
  public textError: String = '';
  public textSuccess: String = '';

  constructor(private rest: RestService, private formBuilder: FormBuilder) {}

  public login(): void {
    console.log(this.form.value);
     this.rest.login(this.form.value).subscribe({
      next:(response)=>{
       localStorage.setItem('session',JSON.stringify(response))
       this.textError=''
       this.textSuccess="Login realizado correctamente"
      },
      error:(error)=>{
        this.textSuccess=''
        this.textError=error.error.status.description
      }
     })
    
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      user: this.user,
      password: this.password,
    });
  }
}
