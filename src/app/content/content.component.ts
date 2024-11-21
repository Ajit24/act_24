// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-content',
//   templateUrl: './content.component.html',
//   styleUrls: ['./content.component.css']
// })
// export class ContentComponent {

// }
import { Component, HostListener } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  sections: string[] = ['section1', 'section2', 'section3', 'section4', 'section5'];
  activeSection: string = '';

  constructor() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;

    this.sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, clientHeight } = element;

        if (
          scrollPosition >= offsetTop - clientHeight / 3 &&
          scrollPosition < offsetTop + clientHeight - clientHeight / 3
        ) {
          this.activeSection = section;
        }
      }
    });
  }
  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}