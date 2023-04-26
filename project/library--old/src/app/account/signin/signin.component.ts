import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm !: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder : FormBuilder, private route : ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if(this.signinForm.invalid) {
      return;
    }
    this.loading = this.signinForm.valid;
    console.log(this.signinForm.value);
    
    
  }

  get f() {
    return this.signinForm.controls;
  }

}
