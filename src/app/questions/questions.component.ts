import { Component } from '@angular/core';

interface Question {
  text: string;
  category: string;
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
  questions: Question[] = [
    // Preguntas de ejemplo
    { text: '¿Quién descubrió América?', category: 'Historia' },
    { text: '¿Quién fue el primer hombre en la luna?', category: 'Ciencia' },
  ];

  deleteQuestion(questionToDelete: Question): void {
    this.questions = this.questions.filter(question => question !== questionToDelete);
  }

}
