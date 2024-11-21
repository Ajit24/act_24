import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface UserName {
  firstname: string;
  lastname: string;
}

interface User {
  id: any;
  name: UserName;
  email: string;
  // ... other properties ...
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  form: FormGroup;
  showAlert: boolean = false;
  users: User[] = [];
  apiUrl = 'https://fakestoreapi.com/users';

  constructor() {
    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      terms: new FormControl(false, Validators.requiredTrue)
    });
  }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    fetch(this.apiUrl)
      .then(response => response.json())
      .then((users: User[]) => {
        this.users = users.map((user: User) => ({
          id: user.id,
          name: user.name,
          email: user.email
        }));
      });
      // console.log("api data", this.users);
  }

  searchUsers(searchTerm: string) {
    const filteredUsers = this.users.filter(user => {
      const userName = user.name as UserName;
      if (typeof userName.firstname === 'string' && typeof userName.lastname === 'string' && typeof user.email === 'string') {
        return (
          userName.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
          userName.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else {
        return false;
      }
    });
    return filteredUsers;
  }

  onSearchInput(event: any) {
    const searchTerm = event.target.value;
    const filteredUsers = this.searchUsers(searchTerm);
    const userListHtml = filteredUsers.map(user => {
      return `<div class="user-item">${user.name} (${user.email})</div>`;
    }).join('');
    const userListElement = document.getElementById('user-list');
    if (userListElement) {
      userListElement.innerHTML = userListHtml;
    }

    const userItems = document.querySelectorAll('.user-item');
    userItems.forEach(item => {
      item.addEventListener('click', () => {
        console.log(`Selected user: ${item.textContent}`);
      });
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // Submit form data to API or perform other actions
    } else {
      this.showAlert = true;
    }
  }

  resetForm() {
    this.form.reset();
    this.showAlert = false;
  }

  closeAlert() {
    this.showAlert = false;
  }
}