import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  results: any = [];
  error: String = null;
  constructor(private http: HttpClient) {}
  //todo: this doesn't work on a second search
  searchResults(query: String) {
    return this.http
      .jsonp(
        `https://api.duckduckgo.com/?q=${query}&format=json&pretty=1`,
        "callback"
      )
      .subscribe(
        (data: {}) => {
          this.error = null;
          this.results = data["RelatedTopics"];
          if (this.results.length === 0) {
            this.error = "Nothing found...";
          }
        },
        (error: any) => {
          this.error = error.message;
        }
      );
  }
}
