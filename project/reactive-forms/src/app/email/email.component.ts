import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  constructor(private formBuilder : FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]]
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    if(this.form.invalid) {
      return;
    }
    alert('SUCCESS!!:' + JSON.stringify(this.form.value));
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
  }


  get f() {
    return this.form.controls;
  }


}
