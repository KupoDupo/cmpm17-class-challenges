import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pet-profile',
  standalone: true,
  imports: [],
  templateUrl: './pet-profile.component.html',
  styleUrl: './pet-profile.component.scss'
})
export class PetProfileComponent {
name = signal('Benson'); //name: string = "Benson"; variable version
age = signal(2); // age: number = 2; variable version
moods: string[] = ["lazy", "hungry", "angry", "curious", "cuddly", "hyper"];
currentMood = signal(''); //currentMood: string = "empty";
getRandomMood():void{
const index = Math.floor(Math.random() * this.moods.length);
this.currentMood.set(this.moods[index]);
}
}
