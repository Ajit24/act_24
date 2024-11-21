import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [FormsModule, CommonModule], // Add CommonModule here
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.css']
})
export class IfelseComponent {

  div1Visible: boolean = true;
  isWarningDivVisible: boolean = true; 
  num1: number = 0;
  num2: number = 0;
  selectedStatus: string = '';

  showDiv1() {
    this.div1Visible = true;
    console.log("show clicked");
  }

  hideDiv1() {
    this.div1Visible = false;
    console.log("hide clicked");

  }

  toggleDiv2() { 
    console.log("toggle clicked");

    this.isWarningDivVisible = !this.isWarningDivVisible;
  }

}
