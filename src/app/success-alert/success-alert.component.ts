import { sharedStylesheetJitUrl } from '@angular/compiler';
import {Component} from '@angular/core'

@Component ({
    selector: 'app-success-alert',
    template: `
        <p>Success!</p>
    `,
    styleUrls: ['./success-alert.component.css']
})

export class SuccessAlertComponent {
}