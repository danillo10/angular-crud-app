import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() formData: FormGroup;
  @Input() control: string;
  @Input() tipo: 'default' | 'currency';

  constructor() { }

  ngOnInit(): void {
  }

}
