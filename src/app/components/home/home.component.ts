import { Component } from '@angular/core';
import { User } from 'src/app/interface/interfaces';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public user!:User

  constructor(private router:Router){}

public getSessionDetails(){
 const userString= localStorage.getItem('session');
 this.user=JSON.parse(userString!).data
console.log(this.user);
}

public logout(){
  localStorage.removeItem('session')
  this.router.navigate(['/login'])
}
ngOnInit(): void {
 this.getSessionDetails()
}
}
