import { Component, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-countertimer',
  templateUrl: './countertimer.component.html',
  styleUrls: ['./countertimer.component.css']
})
export class CountertimerComponent implements OnDestroy{
  inputMinutes: number = 10;
  hours: number = 0;
  mins: number = 0;
  secs: number = 0;
  
  timerInterval: any;
  isRunning: boolean = false;
  
  startTimer() {
    if (!this.isRunning && this.inputMinutes > 0) {
      this.isRunning = true;
      this.calculateTime();
      
      this.timerInterval = setInterval(() => {
        if (this.secs > 0) {
          this.secs--;
        } else {
          if (this.mins > 0) {
            this.mins--;
            this.secs = 59;
          } else if (this.hours > 0) {
            this.hours--;
            this.mins = 59;
            this.secs = 59;
          } else {
            this.stopTimer();
          }
        }
      }, 1000);
    }
  }
  
  stopTimer() {
    this.isRunning = false;
    clearInterval(this.timerInterval);
  }
  
  resetTimer() {
    this.stopTimer();
    this.calculateTime();
  }
  
  private calculateTime() {
    this.hours = Math.floor(this.inputMinutes / 60);
    this.mins = this.inputMinutes % 60;
    this.secs = 0;
  }
  
  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
  
  formatNumber(num: number): string {
    return num.toString().padStart(2, '0');
  }
}
