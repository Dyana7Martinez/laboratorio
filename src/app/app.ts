import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  titulo = 'Lista de productos';
 

products = [
  { name: 'Product 1', stock: 10 },
  { name: 'Product 2', stock: 3 },
  { name: 'Product 3', stock: 7 },
  { name: 'Product 4', stock: 2 },
  { name: 'Product 5', stock: 15 },
  { name: 'Product 6', stock: 4 },
  { name: 'Product 7', stock: 9 },
  { name: 'Product 8', stock: 0 }
  
];

}