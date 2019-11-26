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
  searchResults() {
    return this.http
      .jsonp(
        "https://api.duckduckgo.com/?q=sensor&format=json&pretty=1",
        "callback"
      )
      .subscribe(res => {
        //this.results = res.json("RelatedTopics");

        console.log(res);
      });
  }
}
