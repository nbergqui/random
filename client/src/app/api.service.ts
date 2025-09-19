import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { toSignal } from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private apiUrl = "/api";

  constructor(private http: HttpClient) {}
}
