import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})

export class NotificationService {

    constructor(private toastr: ToastrService) { }

    showSuccess(message: string, title: string) {
        this.showHTMLMessage(true, message, title);
    }

    showError(message: string, title: string) {
        this.showHTMLMessage(false, message, title);
    }


    showHTMLMessage(success: boolean, message: string, title: string) {
        if (success) {
            this.toastr.success(message, title, {
                enableHtml: true,
                positionClass: 'toast-bottom-center'
            })

        } else {
            this.toastr.error(message, title, {
                timeOut: 3000,
                enableHtml: true,
                positionClass: 'toast-bottom-center'
            });
        }
    }
}