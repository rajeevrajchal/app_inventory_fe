import { Injectable } from '@angular/core';
import { $FIX_ME } from 'app/types/fix_me.type';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastr: ToastrService) {}

  toasterOption: $FIX_ME = {
    preventDuplicates: true,
  };

  showSuccess(message: string, title?: string) {
    this.toastr.success(message, title, this.toasterOption);
  }

  showError(message: string, title?: string) {
    this.toastr.error(message, title);
  }

  showInfo(message: string, title?: string) {
    this.toastr.info(message, title);
  }

  showWarning(message: string, title?: string) {
    this.toastr.warning(message, title);
  }
}
