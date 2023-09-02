import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<div class="grid justify-center mt-10">
    <h1><b>Esta ruta no esta definida</b></h1>
    <div class="w-36 h-36">
      <img src="../../../assets/images/not_found.png" alt="" />
    </div>
  </div> `,
  standalone: true,
})
export class NotFoundComponent {}
