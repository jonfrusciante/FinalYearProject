import { Component } from '@angular/core';

import { LoginService } from './login.service';
@Component({
  selector: 'login',
  templateUrl: 'app/login.component.html',
})
export class LoginComponent {
  errorMessage: any;

  constructor(private loginService: LoginService) {}

  submitted = false;

  loginAccount = {username: '', password: ''};

  onSubmit() {
    //this.submitted = true;
    this.loginService.checkUser(this.loginAccount.username, this.loginAccount.password)
                      .subscribe(
                        valid => {
                          this.submitted = valid;
                          console.log(this.submitted);
                          },
                      error => this.errorMessage = <any>error
                      );
    
  }
}