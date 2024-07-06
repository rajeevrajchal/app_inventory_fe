import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'app/core/service/toast.service';
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
  activeTab: 'on_hold' | 'archived' | '' = '';
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

  constructor(
    private readonly instanceService: InstancesService,
    private readonly toast: ToastService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.activeTab = params['tab'] || '';
      this.getAllInstance();
    });
  }

  getAllInstance() {
    this.isLoading = true;
    this.instanceService
      .list(this.activeTab || '')
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          this.instances = data;
          this.isLoading = false;
        },
        error: (e) => {
          this.toast.showError(e, 'Instances');
          this.isLoading = false;
        },
      });
  }
}
