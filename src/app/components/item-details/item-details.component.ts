import { Component, Input, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  public item: any
  @Input() id: string = '';
  constructor(private service: ItemsService) { }

  ngOnInit(): void {
    this.item = this.service.items.filter(item => item.id == this.id);
    this.item = this.item[0]
  }

}
