import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  constructor(private http: HttpClient) {}
  searchResults() {
    return this.http
      .get("https://api.duckduckgo.com/?q=sensor&format=json&pretty=1")
      .subscribe(data => {
        console.log(data);
      });
  }
}
