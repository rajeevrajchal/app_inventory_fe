import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'app/core/service/toast.service';
import { INSTANCE } from 'app/model/instance.model';
import { $FIX_ME } from 'app/types/fix_me.type';
import { InstancesService } from '../../instances.service';

@Component({
  selector: 'app-instance-detail',
  templateUrl: './instance-detail.component.html',
})
export class InstanceDetailComponent implements OnInit {
  instance: INSTANCE = {} as INSTANCE;
  isLoading: boolean = false;

  constructor(
    private readonly instanceService: InstancesService,
    private readonly toast: ToastService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    const instanceId = this.route.snapshot.paramMap.get('instance_id');
    if (instanceId !== null) {
      this.getInstanceDetail(instanceId);
    }
  }

  getInstanceDetail(id: string) {
    this.isLoading = true;
    this.instanceService.detail(id).subscribe({
      next: (data: $FIX_ME) => {
        this.isLoading = false;
        this.instance = data;
      },
      error: (e) => {
        this.toast.showError(e, 'Instance');
        this.isLoading = false;
      },
    });
  }
}
