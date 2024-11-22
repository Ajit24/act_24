import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent {
  items: number[] = [];
  loading: boolean = false;
  limit: number = 20;

  constructor() {
    this.loadMoreItems();
  }

  loadMoreItems() {
    if (this.loading) return;

    this.loading = true;
    setTimeout(() => {
      const start = this.items.length;
      const end = start + this.limit;
      this.items = this.items.concat(Array.from({ length: this.limit }, (_, i) => start + i + 1));
      this.loading = false;
    }, 1000); // Simulate a network delay
  }

  onScroll(event: any) {
    const bottom = event.target.scrollHeight === event.target.scrollTop + event.target.clientHeight;
    if (bottom) {
      this.loadMoreItems();
    }
  }

  reset() {
    this.items = [];
    this.loadMoreItems();
    // Reset scroll position
    const container = document.querySelector('.scroll-container') as HTMLElement;
    if (container) {
      container.scrollTop = 0;
    }
  }
}