import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  apiUrl = 'https://fakestoreapi.com/users';
  users: any[] = [];
  filteredUsers: any[] = [];
  searchTerm: string=  '';

  constructor(private http: HttpClient, private fb: FormBuilder) {

  } 
   ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers() {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.users = data;
      this.filteredUsers = data;  
    }, error => {
      console.error('Error fetching users:', error);
    });
  }
  onSearch() {
    if (this.searchTerm) {
      this.filteredUsers = this.users.filter(user =>
        user.name.firstname.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.name.lastname.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.phone.includes(this.searchTerm) ||
        user.address.city.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredUsers = this.users;
    }
  }

}
