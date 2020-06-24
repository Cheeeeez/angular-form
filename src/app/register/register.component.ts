import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pwGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      }, { validator: comparePassword }),
      country: ['', Validators.required],
      age: ['18', [Validators.required, Validators.min(18)]],
      gender: ['male', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]],
    })
  }
  onSubmit() {
    console.log(this.registerForm.controls);
  }
}
