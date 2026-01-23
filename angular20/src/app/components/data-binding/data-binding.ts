import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName: string = "A-20 tutorial";
  productPrice: Number = 12500;
  maxLength: Number = 5;
  minLength: Number = 3;

  inputType: string = "checkbox";

  constructor() {
    this.courseName = "A2T";
  }

  showWelcomMessage() {
    alert("Welcome to courseName");
  }

  changeCourseName() {
    this.courseName = "Welcome to Advanced Course";
  }

  onCityChange() {
    alert("City selection changed");
  }
}
