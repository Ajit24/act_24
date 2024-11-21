import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-exactfaq',
  templateUrl: './exactfaq.component.html',
  styleUrls: ['./exactfaq.component.css']
})
export class ExactfaqComponent {
  searchQuery: string = '';
  userData: any = ''; // To store the user data
  searchAttempted: boolean = false; 

  private apiUrl = 'https://api.example.com/search';

  constructor(private http: HttpClient) {}

  onSearch(): void {
    this.searchAttempted = true; 
    if (this.searchQuery.trim()) {
      this.search(this.searchQuery).subscribe(
        (response) => {
          console.log(response); 
          if (response.data) {
            this.userData = response.data; 
          } else {
            this.userData = null; 
          }
        },
        (error) => {
          console.error('Error fetching data:', error);
          this.userData = null; 
        }
      );
    } else {
      this.userData = null;
    }
  }

  private search(query: string): Observable<any> {
    if (query === 'abcd') {
      return of({
        statusCode: 200,
        statusMessage: 'Success',
        data: {
          Status: '1',
          deviceRegToken: '3e16cfebd441401f',
          EmpId: '15154',
          firstName: 'Eshwar',
          lastName: 'Singh',
          mobileNo: '9912226603',
          emailId: 'eshwar.m@hyd.actcorp.in',
          modifiedBy: '13668867258955',
          lastLoginTime: '2024-10-03 20:38:59.0',
          failedLoginAttempts: '5',
          lastFailedAttemptOn: '2024-10-18 12:00:00.0',
          isADuser: '0',
          Remark: 'You have entered the wrong password many times. Wait for -4447 minutes before trying again'
        }
      });
    }
    return of({ statusCode: 404, statusMessage: 'User not found', data: null });
  }
}