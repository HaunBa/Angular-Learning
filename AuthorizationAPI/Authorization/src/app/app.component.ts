import { Component } from '@angular/core';
import { User } from './models/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Authorization';
  user = new User();
  username = localStorage.getItem('username');

  constructor(private authService : AuthService) {}

  register(user : User){
    this.authService.register(user).subscribe();
  }

  login(user : User){
    this.authService.login(user).subscribe((token: string) => {
      localStorage.setItem('authToken', token);

    });
  }

  getUsername() :string{
    this.authService.getMe().subscribe((name: string) => {
      localStorage.setItem('username', name);
      return name;
    })

    return '';
  }

  getMe(){
    this.authService.getMe().subscribe((name: string) =>{
      console.log(name);
    })
  }

  testRole(){
    this.authService.testRole().subscribe((result : string) => {
      console.log(result);
    })
  }

  testModerator(){
    this.authService.testModerator().subscribe((result : string) => {
      console.log(result);
    })
  }
}
