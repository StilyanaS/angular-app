import { Component } from '@angular/core';
import { ItemsFService } from 'src/app/services/items-f.service';
@Component({
  selector: 'app-item-list-service',
  templateUrl: './item-list-service.component.html',
  styleUrls: ['./item-list-service.component.scss']
})
export class ItemListServiceComponent {
  public items: any
  public products: any
  public results: any
  constructor(private service: ItemsFService) { }
  ngOnInit(): void {
    this.service.getAll()
      .subscribe(response => {
        this.products = response;
        this.items = this.products.products;
        console.log(this.items);
        console.log(typeof this.items);
      })
  }
}
