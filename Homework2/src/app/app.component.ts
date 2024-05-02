import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Livres, livres';

  index = 0;
  isLivreShowed = false;
  isEnded = false;

  public livres = [
    { 
      title: 'Господарката на седемте камъка: Ръката на съдбата',
      description: 'След древна легенда, светът е творение на братята Мороз и Луминус',
      writer: 'Ванина Божилова, Евгения Танева',
      rating: 0,
    },
    { 
      title: 'Господарката на седемте камъка: Краят е вечен',
      description: 'Ревностно пазени тайни и нови съмнения пораждат любов и омраза, жажда за мъст и примирение сред членовете на Ордена.',
      writer: 'Ванина Божилова, Евгения Танева',
      rating: 0,
    },
    { 
      title: 'Опасни дами',
      description: 'Джес и Аби са две сестри, но толкова различни, че малко хора могат да се досетят за родствената им връзка.',
      writer: 'Натали Фокс',
      rating: 0,
    },
    { 
      title: 'Ласитър: В бърлогата на звяра',
      description: 'След края на Гражданската война, Ласитър се опитва да започне нов живот в Тексас.',
      writer: 'Джек Слейд',
      rating: 0,
    },
    { 
      title: 'Ласитър: В бърлогата на звяра',
      description: 'Ласитър е нает от красива жена, за да убие нейния съпруг.',
      writer: 'Джек Слейд',
      rating: 0,
    }
  ];

  rateLivre(rating: number) {
    this.livres[this.index].rating += rating;
    if (this.index < this.livres.length - 1) {
      this.index++;
    } else {
      this.isLivreShowed = true;
    }
  }

  averageRating() {
    let totalRating = 0;
    for (let i = 0; i < this.livres.length; i++) {
      totalRating += this.livres[i].rating;
    }
    return (totalRating / this.livres.length).toFixed(2);
  }
  
  gradeAgain() {
    this.index = 0;
    this.isLivreShowed = false;
  }

  successful() {
    this.isEnded = true;
  }
}
