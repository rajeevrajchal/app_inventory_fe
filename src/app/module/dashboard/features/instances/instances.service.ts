import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'app/core/service/config.service';
import { INSTANCE } from 'app/model/instance.model';
import { $FIX_ME } from 'app/types/fix_me.type';
import { Observable } from 'rxjs';

const instancesAPI = 'system';

@Injectable({
  providedIn: 'root',
})
export class InstancesService {
  constructor(
    private readonly http: HttpClient,
    private readonly config: ConfigService
  ) {}

  list(): Observable<INSTANCE[] | $FIX_ME> {
    return this.http.get<Observable<INSTANCE[] | $FIX_ME>>(
      `${this.config.getBaseUrl()}${instancesAPI}`
    );
  }
}
