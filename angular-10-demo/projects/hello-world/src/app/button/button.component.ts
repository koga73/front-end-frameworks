import { Component, OnInit, Input } from '@angular/core';

export class ButtonDisplay {
  static readonly PRIMARY = 'primary';
  static readonly SECONDARY = 'secondary';
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() display: string;

  constructor() { }

  ngOnInit(): void {
    this.display = this.display || ButtonDisplay.PRIMARY; // Default to primary
  }

}
