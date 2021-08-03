import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "document",
  templateUrl: "./document.component.html",
})
export class DocumentComponent implements OnInit {
  @Output() GetAction = new EventEmitter();
  constructor() {}
  ngOnInit() {}
  Action(event: any) {
    let data = { event: event };
    this.GetAction.emit(data);
  }
}
