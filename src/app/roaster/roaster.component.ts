import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  loginId?: string; // Optional property for loginId
  status?: string;  // Optional property for status
}

@Component({
  selector: 'app-roaster',
  templateUrl: './roaster.component.html',
  styleUrls: ['./roaster.component.css']
})
export class RoasterComponent implements OnInit {
  public mainData: Comment[] = [];
  displayModal: boolean = false;  // Controls the visibility of the modal
  selectedComment: Comment = { postId: 0, id: 0, name: '', email: '', body: '' }; // Initialize with empty values
  statusOptions: { label: string; value: string }[] = [
    { label: 'Leave', value: 'Leave' },
    { label: 'Present', value: 'Present' },
    { label: 'Absent', value: 'Absent' },
  ];
  currentDate: string;
  constructor(private http: HttpClient) {
    this.currentDate = formatDate(new Date(), 'dd/MM/yyyy', 'en-US');

  }

  ngOnInit(): void {
    this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe(data => {
        this.mainData = data;
        console.log(this.mainData); 
      });
  }

  openEditModal(data: Comment) {
    // Set the selected comment data and open the modal
    this.selectedComment = { ...data, loginId: '', status: '' }; // Reset loginId and status for the modal
    this.displayModal = true;
  }

  accept() {
    // Implement your accept logic here
    console.log('Accepted:', this.selectedComment);
    this.displayModal = false; // Close the modal after acceptance
  }

  update() {
    // Implement your update logic here
    console.log('Updated:', this.selectedComment);
    this.displayModal = false; // Close the modal after update
  }
}