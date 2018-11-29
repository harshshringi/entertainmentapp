import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entity-type-control',
  templateUrl: './entity-type-control.component.html',
  styleUrls: ['./entity-type-control.component.scss']
})
export class EntityTypeControlComponent implements OnInit {

  @Input() entityType: any;
  @Input() list: any;

  constructor() { }

  ngOnInit() {
  }

}
