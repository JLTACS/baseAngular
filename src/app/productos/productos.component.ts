import { Component, OnInit, Input } from '@angular/core';
import { Product } from './Producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  @Input() prod: Product;
  @Input() exist: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
