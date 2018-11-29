import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-entity-type',
  templateUrl: './entity-type.component.html',
  styleUrls: ['./entity-type.component.scss']
})
export class EntityTypeComponent implements OnInit {

  @Input() entityType: any;
  @Input() list: any;

  constructor() { }

  ngOnInit() {
  }

}
