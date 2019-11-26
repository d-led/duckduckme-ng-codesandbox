import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  results: any = [];
  constructor(private http: HttpClient) {}
  //todo: this doesn't work on a second search
  searchResults(event = null) {
    if (event && event.key !== "Enter") {
      return;
    }
    return this.http
      .jsonp(
        "https://api.duckduckgo.com/?q=sensor&format=json&pretty=1",
        "callback"
      )
      .subscribe((data: {}) => {
        this.results = data;
        console.log(this.results);
        console.log(data);
      }); // subscribe(res => console.log(res))      });

    //  handleError(arg0: string, arg1: string): any {
    //     throw new Error("Method not implemented.");
    //   }
    //   log(arg0: string) {
    //     throw new Error("Method not implemented.");
    //   }
  }
}
