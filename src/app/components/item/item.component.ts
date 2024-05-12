import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  item = input<{name: string, selected?: boolean}>();
  listComponent = inject(ListComponent)

  get items(){
    return this.listComponent?.items
  }

  remove() {
    this.items.update(items => items.filter(item => item.name !== this.item()?.name))
  }

  select() {
    this.items.update(items => items.map(item => ({
      ...item,
      selected: item.name === this.item()?.name
    })))
  }
}
