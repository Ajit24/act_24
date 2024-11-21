import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  employees: any[] = [];
  isEditMode: boolean = false;
  editIndex: number = -1;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      position: ['', Validators.required],
      department: ['', Validators.required],
      startDate: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(0)]],
      gender: ['', Validators.required],
      address: ['']
    });
  } 
   ngOnInit() {
    this.loadFormDataFromLocalStorage();

  }

  onSubmit() {
        const employeeData = this.employeeForm.value;
        if (this.isEditMode) {
          this.employees[this.editIndex] = employeeData;
        } else {
          this.employees.push(employeeData);
        }
        this.saveEmployeesToLocalStorage();
        this.employeeForm.reset();
        this.closeModal();
        this.isEditMode = false;
        this.editIndex = -1;

  }
  onFileChange(event: any, field: string) {
    const file = event.target.files[0];
    this.employeeForm.patchValue({
      [field]: file
    });
  }

  editEmployee(index: number) {
    this.isEditMode = true;
    this.editIndex = index;
    const employee = this.employees[index];
    this.employeeForm.patchValue(employee);
    this.openModal();
  }

  deleteEmployee(index: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employees.splice(index, 1);
      this.saveEmployeesToLocalStorage();
    }
  }
  openModal() {
    this.loadFormDataFromLocalStorage();
  }

  closeModal() {
    this.employeeForm.reset();
   // this.saveFormDataToLocalStorage();
    this.isEditMode = false;
    this.editIndex = -1;
  }

  saveEmployeesToLocalStorage() {
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }

  loadFormDataFromLocalStorage() {
    const savedData = localStorage.getItem('employeeFormData');
    if (savedData) {
      this.employeeForm.patchValue(JSON.parse(savedData));
    }
  }
  clearLocalStorage() {
    localStorage.removeItem('employeeFormData');
  }
  }

