import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'app/core/service/config.service';
import { INSTANCE } from 'app/model/instance.model';
import { $FIX_ME } from 'app/types/fix_me.type';
import { Observable } from 'rxjs';

const instancesAPI = 'system';

const instance_all: Record<string, string> = {
  '': instancesAPI,
  archived: `${instancesAPI}?type=archived`,
  on_hold: `${instancesAPI}?type=on_hold`,
};

@Injectable({
  providedIn: 'root',
})
export class InstancesService {
  constructor(
    private readonly http: HttpClient,
    private readonly config: ConfigService
  ) {}

  list(tab: 'on_hold' | 'archived' | ''): Observable<INSTANCE[] | $FIX_ME> {
    return this.http.get<Observable<INSTANCE[] | $FIX_ME>>(
      `${this.config.getBaseUrl()}${instance_all[tab]}`
    );
  }

  detail(id: string): Observable<INSTANCE | $FIX_ME> {
    return this.http.get<Observable<INSTANCE>>(
      `${this.config.getBaseUrl()}${instancesAPI}/${id}`
    );
  }
}
