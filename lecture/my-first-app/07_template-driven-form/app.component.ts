import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-first-app';

  @ViewChild("f") signupForm : NgForm;

  isSubmitted = false;

  user = {
    username: "",
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }

  defaultQuestion = "teacher";

  answer = '';

  genders = ["female", "male"];

  suggestUserName() {
    const suggestedName = "Superuser";
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit() {
    
    // console.log(this.signupForm);
    this.isSubmitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();

    
  }

}
