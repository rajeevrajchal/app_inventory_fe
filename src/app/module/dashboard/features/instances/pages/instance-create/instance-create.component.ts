import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { $FIX_ME } from 'app/types/fix_me.type';

@Component({
  selector: 'app-instance-create',
  templateUrl: './instance-create.component.html',
})
export class InstanceCreateComponent implements OnInit {
  @ViewChild('instance') instance: TemplateRef<any> | undefined;
  @ViewChild('sub_instance') sub_instance: TemplateRef<any> | undefined;
  steps: $FIX_ME = [
    {
      label: 'Instance',
    },
    {
      label: 'Sub Instances',
    },
  ];

  active: $FIX_ME = this.steps[1];
  constructor() {
    console.log('the active is', this.active);
  }

  ngOnInit() {}
}
