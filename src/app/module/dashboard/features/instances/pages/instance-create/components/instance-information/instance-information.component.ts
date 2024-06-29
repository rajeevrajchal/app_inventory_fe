import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-instance-create-instance-information',
  templateUrl: './instance-information.component.html',
})
export class InstanceInformationComponent {
  @Input({
    required: true,
  })
  label: string = '';
}
