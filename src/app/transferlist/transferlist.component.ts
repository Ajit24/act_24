import { Component } from '@angular/core';
import {TransferItem, initialItems} from '../data'
@Component({
  selector: 'app-transferlist',
  templateUrl: './transferlist.component.html',
  styleUrls: ['./transferlist.component.css']
})
export class TransferlistComponent {
  leftItems: TransferItem[] = [...initialItems];
  rightItems: TransferItem[] = [];
  selectedLeftItems: number[] = [];
  selectedRightItems: number[] = [];

  toggleLeftItem(id: number) {
    const index = this.selectedLeftItems.indexOf(id);
    if (index === -1) {
      this.selectedLeftItems.push(id);
    } else {
      this.selectedLeftItems.splice(index, 1);
    }
  }

  toggleRightItem(id: number) {
    const index = this.selectedRightItems.indexOf(id);
    if (index === -1) {
      this.selectedRightItems.push(id);
    } else {
      this.selectedRightItems.splice(index, 1);
    }
  }

  moveRight() {
    const itemsToMove = this.leftItems.filter(item => 
      this.selectedLeftItems.includes(item.id)
    );
    this.rightItems = [...this.rightItems, ...itemsToMove];
    this.leftItems = this.leftItems.filter(item => 
      !this.selectedLeftItems.includes(item.id)
    );
    this.selectedLeftItems = [];
  }

  moveLeft() {
    const itemsToMove = this.rightItems.filter(item => 
      this.selectedRightItems.includes(item.id)
    );
    this.leftItems = [...this.leftItems, ...itemsToMove];
    this.rightItems = this.rightItems.filter(item => 
      !this.selectedRightItems.includes(item.id)
    );
    this.selectedRightItems = [];
  }
}
