import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-instance-create-sub_instances',
  templateUrl: './sub_instances.component.html',
})
export class SubInstancesComponent {
  @Input({
    required: true,
  })
  label: string = '';

  // constructor(@Inject('label') private injectedLabel: string) {
  //   this.label = this.injectedLabel;
  // }
}
