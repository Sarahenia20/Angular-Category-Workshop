// card.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() id: number |undefined;
  @Input() image: string |undefined;
  @Input() title: string |undefined;
  @Input() description: string |undefined;
  @Input() available: boolean |undefined;
  @Input() btnText: string |undefined;

  @Output() addToShortlist = new EventEmitter<number>();

  addShortlist() {
    this.addToShortlist.emit(this.id);
  }
}
