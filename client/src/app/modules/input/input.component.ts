import { Component, Input, Output, EventEmitter, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { InputTypes } from './input.interface';

@Component({
	selector: 'winput',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
	@Input() type: InputTypes | string = InputTypes.TEXT;

	@Input() label = '';

	@Input() items: string[] = [];

	@Input() wClass: string;

	@Input() formControl: FormControl;

	@Input() name = 'name';

	@Input() placeholder = '';

	@Input() set: string | number = '';

	@Input() disabled: boolean;

	@Input() focused = false;

	@Output() change = new EventEmitter();

	@Output() submit = new EventEmitter();

	@ViewChild('inputEl') inputEl: ElementRef;

	ngOnInit() {
		if (!this.formControl) {
			this.formControl = new FormControl(this.set);
		}
		if (this.focused) {
			setTimeout(() => {
				this.inputEl.nativeElement.focus();
			}, 100);
		}
	}
}