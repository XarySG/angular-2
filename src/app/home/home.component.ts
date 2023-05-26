import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cardBackgroundColor: string = ''; // Propiedad para almacenar el color de fondo

  changeCardBackgroundColor(color: string): void {
    this.cardBackgroundColor = color; // Método para cambiar el color de fondo del div "card"
  }

  scrollToCard(card: HTMLElement): void {
    // Utiliza el método scrollIntoView() para hacer scroll hasta el card correspondiente
    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
