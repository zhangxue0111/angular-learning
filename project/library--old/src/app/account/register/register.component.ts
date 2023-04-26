import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm !: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private route : ActivatedRoute, private router: Router) {};

  ngOnInit(): void {
    
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(6)]
    });

  }

  onSubmit() {
    this.submitted = true;
  }

  get f () {
    return this.registerForm.controls;
  }


}
