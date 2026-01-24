import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css',
})
export class SignalEx {
  firstName: string = "Deepak";
  productName = "Google"

  courseName = signal<string>("Angular");
  courseDuration = signal("15 videos");

  courseDetails = computed(() => this.courseName() + " -- cobined -> " + this.courseDuration());

  constructor() {
    this.firstName = "Deepak Urs";
    console.log(this.firstName);
    
    console.log(this.courseName());
    this.courseName.set("Angular-20");
    console.log(this.courseName());
    setTimeout(() => {
      this.courseName.set("React")
    }, 3000);
    
  }
}
