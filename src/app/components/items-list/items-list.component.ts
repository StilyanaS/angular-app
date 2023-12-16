import { Component, Input, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  public selectedItem: any
  public items: any
  public filterList: any[] = []
  public filteredItems: any[] = []
  constructor(private service: ItemsService) { }
  public filtered: any
  public shown: any
  ngOnInit(): void {
    this.items = this.service.items;
    this.filteredItems = this.service.items;
  }
  public selectItem(item: any) {
    this.selectedItem = item;
  }
  public showFilters() {
    this.shown == true ? this.shown = false : this.shown = true;
    console.log(this.shown)
  }
  public filterArr() {
    this.filterList = [];
    this.filteredItems = [];
    this.filtered = document.querySelectorAll(".checkbox input");
    for (let i = 0; i < this.filtered.length; i++){
      this.filtered[i].checked && this.filterList.push(this.filtered[i].name)
    }
    console.log(this.filterList)
    this.items.forEach((item: any) => {
      for (let j = 0; j < this.filterList.length; j++){
          console.log(this.filterList[j])
        if (this.filterList[j] == item['tag']) {
          this.filteredItems.push(item);

        }
      }
    })
    if (this.filterList.length < 1) {
      this.filteredItems = this.items;
    }
    console.log(this.filteredItems)
  }
  public uncheck() {
    document.querySelectorAll(".checkbox input").forEach((check: any) => {
      check.checked = false;
    });
  }

}
