// 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FruitService } from './../fruit.service';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private fruitService: FruitService, private router: Router) {}

  lastId: number = 0;

  formdata: Fruit = {
    id: 0,
    name: '',
    quantity: 0,
    price: 0
  };

  ngOnInit() {
    // Fetch existing fruits data to find the maximum ID
    this.fruitService.getAll().subscribe((fruits: Fruit[]) => {
      if (fruits && fruits.length > 0) {
        // Find the maximum ID
        this.lastId = Math.max(...fruits.map(fruit => fruit.id));
      }
    });
  }

  create() {
    // Increment lastId and assign it to the new fruit's ID
    this.lastId++;
    this.formdata.id = this.lastId;

    this.fruitService.create(this.formdata).subscribe({
      next: (data) => {
        this.router.navigate(["/fruit/home"]);
      },
      error: (er) => {
        console.log(er);
      }
    });
  }
}
