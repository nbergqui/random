import { Component, OnInit, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Signal } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "random-ui";

  inputNumber: number = 0;
  randomSequence: number[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadFromSessionStorage();
  }

  generateRandomSequence() {
    const num = Number(this.inputNumber);
    if (!num || num < 1) {
      return;
    }

    // Create array with numbers from 1 to inputNumber
    const sequence = Array.from({ length: num }, (_, i) => i + 1);

    // Fisher-Yates shuffle algorithm
    for (let i = sequence.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sequence[i], sequence[j]] = [sequence[j], sequence[i]];
    }

    this.randomSequence = sequence;
    this.inputNumber = num; // Ensure it's stored as number
    this.saveToSessionStorage();
  }

  private saveToSessionStorage() {
    sessionStorage.setItem(
      "randomGenerator_input",
      this.inputNumber.toString()
    );
    sessionStorage.setItem(
      "randomGenerator_output",
      JSON.stringify(this.randomSequence)
    );
  }

  private loadFromSessionStorage() {
    const savedInput = sessionStorage.getItem("randomGenerator_input");
    const savedOutput = sessionStorage.getItem("randomGenerator_output");

    if (savedInput) {
      this.inputNumber = parseInt(savedInput, 10);
    }

    if (savedOutput) {
      this.randomSequence = JSON.parse(savedOutput);
    }
  }
}
