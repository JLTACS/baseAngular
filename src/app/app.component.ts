import { Component } from '@angular/core';
import { Product } from './productos/Producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Buscador de Productos';

  checkExistence = false;
  checkOnlyExistence = false;
  checkOrder = false;

  productos: Product[];
  findings: Product[];
  beforeState: Product[];


  searchInput = '';

  constructor() {
    this.productos = [new Product(2, 'Smarthphone', 'Motorola', 'Quadcore 3GHZ', 12018.5, 5),
                      new Product(22, 'Smartwatch', 'Xaomi', '3rd Generation, 3GB Ram', 799.99, 0),
                      new Product(222, 'Smart TV', 'Samsung', '60 pulgadas, Wifi', 100560.99, 3),
                      new Product(111, 'Laptop', 'Acer', 'Intel i7, 4GB Ram, 1000 GB HDD', 12199.5, 4),
                      new Product(11, 'Alexa', 'Amazon', 'Malvado IA por Jeff Bezoz?', 1000.42, 0)];
    this.search();
  }

  search() {
    this.findings =  this.productos.filter((item) => item.nombre.toUpperCase().includes(this.searchInput.toUpperCase()) ||
    item.descripcion.toUpperCase().includes(this.searchInput.toUpperCase()));
    if (this.checkOrder) {
      this.order();
    }
  }

  order() {
    if (this.checkOrder) {
      this.beforeState = this.findings.slice();
      this.findings.sort((a, b) => a.precio - b.precio);
    } else {
      this.findings = this.beforeState.slice();
    }
    
  }
}
