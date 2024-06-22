import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TAB } from './tab.type';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
})
export class TabsComponent {
  @Input({
    required: true,
  })
  activeTab: string = '';
  @Input({
    required: true,
  })
  tabs: TAB[] = [];

  constructor(private readonly router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.activeTab = params['tab'] || '';
    });
  }

  changeTab(tab: string) {
    const queryParams = tab ? { tab: tab } : {};
    this.activeTab = tab;
    this.router.navigate(['/instances'], {
      queryParams: queryParams,
    });
  }
}
