import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {}

  onSubmit(formData){
    console.log(formData.value);
    this.authService.emailSignup(
      formData.value.email,
      formData.value.password
    );
  }

}
