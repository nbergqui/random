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

  // First generator
  inputNumber: number = 0;
  randomSequence: number[] = [];

  // Second generator
  inputNumber2: number = 0;
  randomSequence2: number[] = [];

  // Third generator
  inputNumber3: number = 0;
  randomSequence3: number[] = [];

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

  generateRandomSequence2() {
    const num = Number(this.inputNumber2);
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

    this.randomSequence2 = sequence;
    this.inputNumber2 = num; // Ensure it's stored as number
    this.saveToSessionStorage();
  }

  generateRandomSequence3() {
    const num = Number(this.inputNumber3);
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

    this.randomSequence3 = sequence;
    this.inputNumber3 = num; // Ensure it's stored as number
    this.saveToSessionStorage();
  }

  private saveToSessionStorage() {
    // First generator
    sessionStorage.setItem(
      "randomGenerator_input",
      this.inputNumber.toString()
    );
    sessionStorage.setItem(
      "randomGenerator_output",
      JSON.stringify(this.randomSequence)
    );

    // Second generator
    sessionStorage.setItem(
      "randomGenerator_input2",
      this.inputNumber2.toString()
    );
    sessionStorage.setItem(
      "randomGenerator_output2",
      JSON.stringify(this.randomSequence2)
    );

    // Third generator
    sessionStorage.setItem(
      "randomGenerator_input3",
      this.inputNumber3.toString()
    );
    sessionStorage.setItem(
      "randomGenerator_output3",
      JSON.stringify(this.randomSequence3)
    );
  }

  private loadFromSessionStorage() {
    // First generator
    const savedInput = sessionStorage.getItem("randomGenerator_input");
    const savedOutput = sessionStorage.getItem("randomGenerator_output");

    if (savedInput) {
      this.inputNumber = parseInt(savedInput, 10);
    }

    if (savedOutput) {
      this.randomSequence = JSON.parse(savedOutput);
    }

    // Second generator
    const savedInput2 = sessionStorage.getItem("randomGenerator_input2");
    const savedOutput2 = sessionStorage.getItem("randomGenerator_output2");

    if (savedInput2) {
      this.inputNumber2 = parseInt(savedInput2, 10);
    }

    if (savedOutput2) {
      this.randomSequence2 = JSON.parse(savedOutput2);
    }

    // Third generator
    const savedInput3 = sessionStorage.getItem("randomGenerator_input3");
    const savedOutput3 = sessionStorage.getItem("randomGenerator_output3");

    if (savedInput3) {
      this.inputNumber3 = parseInt(savedInput3, 10);
    }

    if (savedOutput3) {
      this.randomSequence3 = JSON.parse(savedOutput3);
    }
  }
}
