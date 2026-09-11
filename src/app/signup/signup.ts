import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  constructor(private router: Router) {
  }

  signup() {
    alert('Account created successfully!');
    this.router.navigate(['/login']);
  }

}