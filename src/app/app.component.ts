import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Your City Zoo';

  masterAnimalList: Animal[] = [
    new Animal("Arctic Fox", "Moon", 2, "carnivore", "Northern Trail", 5, "female", "cool shade", "loud noises"),
    new Animal("Ocelot", "Prince", 4, "carnivore", "Tropical Rain Forest Building", 6, "male", "laying in the sunshine", "toys that are not rope-based"),
    new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "herbivore", "Northern Trail", 2, "female", "delicate root and leaves", "loud noises")
  ];
}
