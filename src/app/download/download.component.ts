import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent {
  selectedFile: File | null = null;
  @ViewChild('fileInput') fileInput!: ElementRef; 

  constructor(private http: HttpClient) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('Selected file:', this.selectedFile.name);
    }
  }

  onDownloadTemplate(): void {
    const url = 'http://106.51.41.113:9091/exact_api/UsertoDeviceMappingUploadFileFormat';
    const headers = new HttpHeaders({
      'cache-control': 'no-cache',
      'Authorization': 'Basic c2luY2hhbmEubjpUZXN0QDEyMzQ=',
    });

    this.http.get(url, { headers, responseType: 'blob' }).subscribe(
      (response: Blob) => {
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = 'UserDeviceBulkUploadFileFormat.xlsx'; 
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(downloadUrl);
      },
      (error) => {
        console.error('Download error:', error);
      }
    );
  }

  onUploadSheet(): void {
    if (this.selectedFile) {
      const url = 'http://106.51.41.113:9091/exact_api/UsertoDeviceMappingUpload';
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);

      const headers = new HttpHeaders({
        'cache-control': 'no-cache',
        'Authorization': 'Basic c2luY2hhbmEubjpUZXN0QDEyMzQ=',
      });

      this.http.post(url, formData, { headers }).subscribe(
        (response) => {
          console.log('Upload successful:', response);
          this.selectedFile = null;
        },
        (error) => {
          console.error('Upload error:', error);
        }
      );
    } else {
      console.log('No file selected for upload.');
    }
  }

  onCancel(): void {
    console.log(this.selectedFile);
    this.selectedFile =null; 
    console.log('Upload canceled.');
  }
}