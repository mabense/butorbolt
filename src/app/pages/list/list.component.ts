import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  @Input() results: Array<Product> = new Array();

  ngOnInit(): void {
  }


}
