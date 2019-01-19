import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { RadioOption } from './radio-option.model';

@Component({
    selector: 'mt-radio',
    templateUrl: './radio.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => RadioComponent)
        }
    ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

    @Input() radioOptions: RadioOption[];
    value: any;
    onChange: any;

    constructor() {}

    ngOnInit() {}

    setValue(value: any): void {
        this.value = value;
        this.onChange(value);
    }

    writeValue(obj: any): void {
        this.value = obj;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {}
    setDisabledState?(isDisabled: boolean): void {}
}
