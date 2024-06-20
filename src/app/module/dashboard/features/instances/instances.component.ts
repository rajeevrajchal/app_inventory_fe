import { Component, OnInit } from '@angular/core';
import { INSTANCE } from 'app/model/instance.model';
import { TAB } from 'app/shared/tabs/tab.type';
import { take } from 'rxjs';
import { InstancesService } from './instances.service';

@Component({
  selector: 'app-instances',
  templateUrl: './instances.component.html',
})
export class InstancesComponent implements OnInit {
  instances: INSTANCE[] = [];
  isLoading: boolean = false;
  tabs: TAB[] = [
    {
      label: 'active',
      key: '',
    },
    {
      label: 'on hold',
      key: 'on_hold',
    },
    {
      label: 'archived',
      key: 'archived',
    },
  ];

  constructor(private readonly instanceService: InstancesService) {}

  ngOnInit(): void {
    this.getAllInstance();
  }

  getAllInstance() {
    this.isLoading = true;
    this.instanceService
      .list()
      .pipe(take(1))
      .subscribe((data) => {
        this.instances = data;
        this.isLoading = false;
      });
  }
}
