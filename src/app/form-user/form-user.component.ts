import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../Models/User';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
})
export class FormUserComponent {
  userForm: FormGroup;
  usersList: User[] = [];

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]
      ],
      lastName: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]
      ],
      email: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@gmail.com$')]
      ],
      category: ['Customer', [Validators.required, this.validateCategory]],
      password: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9]{8,}$')]
      ]
    });
  }

  // Custom validator to ensure category is always 'Customer'
  validateCategory(control: any) {
    return control.value === 'Customer' ? null : { invalidCategory: true };
  }

  // Save user
  onSave() {
    if (this.userForm.valid) {
      const newUser: User = { ...this.userForm.value, id: this.usersList.length + 1 };
      this.usersList.push(newUser);
      alert('User added successfully!');
      this.userForm.reset({ category: 'Customer' }); // Reset form with default category
    }
  }
}
