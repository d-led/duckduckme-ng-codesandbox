import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  results = [];
  constructor(private http: HttpClient) {}
  searchResults(event = null) {
    if (event && event.key !== "Enter") {
      return;
    }
    return this.http
      .jsonp(
        "https://api.duckduckgo.com/?q=sensor&format=json&pretty=1",
        "callback"
      )
      .subscribe(res => {
        console.log(res);
        this.results = res.RelatedTopics;
      });
  }
}
