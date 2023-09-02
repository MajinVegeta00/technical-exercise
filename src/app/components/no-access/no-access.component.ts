import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-no-access',
  template: `<div class="grid justify-center mt-4 ">
    <h1><b>La ruta a la que intenta acceder esta protegida</b></h1>
    <div class=" w-36 h-36 mb-4">
      <img
        src="../../../assets/images/protected-route.jpg"
        alt=""
      />
      <div class="mt-4">
        <button mat-raised-button class="p-2" color="primary" [routerLink]="['/', 'login']">
        Autentiquese
        </button>
      </div>
    </div>
  </div>`,
  standalone: true,
  imports: [RouterModule,MatButtonModule],
})
export class NoAccessComponent {
  constructor(){}
}
