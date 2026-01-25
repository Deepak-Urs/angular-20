import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isParaVisible: boolean = true;
  cityList: string[] = ['Mysuru', 'Bengaluru', 'Riverside', 'Dallas'];
  studentDetails: any[] = [
    {name: 'A', city: 'Mysuru', isActive: 'true'},
    {name: 'BB', city: 'Bengaluru', isActive: 'false'},
    {name: 'CCC', city: 'Riverside', isActive: 'true'},
    {name: 'DDDD', city: 'Dallas', isActive: 'false'},
  ]
  toggleBtn(val: boolean) {
    this.isParaVisible = val;
  }
}
