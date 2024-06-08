import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Your login logic here
    console.log('Logging in with username:', this.username, 'and password:', this.password);
    // Redirect to home or dashboard upon successful login
    // this.router.navigate(['/home']);
    // this.loginUser(this.username, this.password);
  }


// Function to handle user login
async loginUser(username: string, password: string) {
  try {
    // Make login request to Cognito
    // const user = await Amplify.signIn(username, password);
    
    // If login is successful, user object will be returned
    // console.log('User logged in:', user);
    
    // Optionally, you can redirect the user to a different page or perform other actions upon successful login
    // For example: window.location.href = '/dashboard';
  } catch (error) {
    // Handle login errors
    console.error('Error logging in:', error);
    // Display error message to the user
    // For example: alert('Failed to log in. Please check your username and password.');
  }
}

}
