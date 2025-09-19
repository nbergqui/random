import { Component, signal } from "@angular/core";
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
export class AppComponent {
  title = "random-ui";

  constructor(private apiService: ApiService) {}
}
