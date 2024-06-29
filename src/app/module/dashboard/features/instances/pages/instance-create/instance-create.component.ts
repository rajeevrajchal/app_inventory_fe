import { Component } from '@angular/core';
import { $FIX_ME } from 'app/types/fix_me.type';
import { InstanceInformationComponent } from './components/instance-information/instance-information.component';
import { SubInstancesComponent } from './components/sub_instances/sub_instances.component';

@Component({
  selector: 'app-instance-create',
  templateUrl: './instance-create.component.html',
})
export class InstanceCreateComponent {
  active: number = 0;

  label: string = 'hello world';

  steps: $FIX_ME = [
    {
      label: 'Instance',
      component: InstanceInformationComponent,
    },
    {
      label: 'Sub Instances',
      component: SubInstancesComponent,
    },
  ];

  nextStep() {
    this.active++;
  }

  prevStep() {
    this.active--;
  }

  setStep(next: number) {
    this.active = next;
  }

  getComponent() {
    return this.steps[this.active].component;
  }
}
