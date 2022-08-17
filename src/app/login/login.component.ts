import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: string ='';
  password: string='';
  constructor(public userService: UserService, public router: Router) {}

  ngOnInit(): void {
    const token = this.userService.getToken()
    if (token)
    {
      this.router.navigateByUrl('/home');
    }
  }

   login ()  {
     const user = {usuario: this.usuario, password: this.password};
     this.userService.login(user).subscribe((data:any) => {
       this.userService.setToken(data.token);
       this.router.navigateByUrl('/home');
     });
  }

}
