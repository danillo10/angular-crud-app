import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() formData: FormGroup;
  @Input() control: string;
  @Input() data: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
