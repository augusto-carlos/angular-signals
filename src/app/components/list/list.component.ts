import { Component, computed, effect, signal } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { CommonModule } from '@angular/common';

interface Item {
  name: string;
  selected?: boolean;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  items = signal<Item[]>([
    {name: "apple"},
    {name: "orange"},
    {name: "strawberry"},
  ]
  )

  constructor() {
    effect(() => {
      const selectedItem = this.items().find(item => item.selected)
      console.log("selected item", selectedItem)
    })
  }
}


