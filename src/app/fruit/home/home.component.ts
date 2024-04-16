import { FruitService } from './../fruit.service';
import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allfruits:Fruit[]=[];
  constructor(private FruitService:FruitService ){}
  
  ngOnInit(): void {
      this.FruitService.getAll().subscribe((data) =>{
        this.allfruits = data;
  })

 
}
deleteItem(id:number)
{
  this.FruitService.delete(id).subscribe({ 
    next:(data)=>{
      this.allfruits = this.allfruits.filter(_=>_.id !=id)
    },
  });
}



//   }
//  }


// }

// import { FruitService } from './../fruit.service';
// import { Component, OnInit } from '@angular/core';
// import { Fruit } from '../fruit';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {

//   allfruits: Fruit[] = [];

//   constructor(private fruitService: FruitService) {}

//   ngOnInit(): void {
//     this.fruitService.getAll().subscribe((data) => {
//       this.allfruits = data;
//     });
//   }

//   deleteItem(id: number) {
//     this.fruitService.delete(id).subscribe({
//       next: (data) => {
//         this.allfruits = this.allfruits.filter(_ => _.id != id);
//       }
//     });
//   }
// }

  }