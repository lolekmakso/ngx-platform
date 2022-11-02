import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonTypes } from 'src/app/modules/button/button.interface';
import { InputTypes } from 'src/app/modules/input/input.interface';
import { FormComponent, FormModules } from '../../form.service';
import { FormGroup } from '@angular/forms';
import { UiService } from 'wacom';

@Component({
	selector: 'form-component',
	templateUrl: './component.component.html',
	styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {
	readonly modules = FormModules;

	readonly inputTypes = InputTypes;

	@Input() form: FormGroup;

	@Input() component: FormComponent;

	@Output() submit = new EventEmitter();

	@Output() change = new EventEmitter();

	ngOnInit(): void {}

	inputType(): InputTypes {
		return (
			(this.component.type as unknown as InputTypes) || InputTypes.TEXT
		);
	}

	items(): string[] {
		return (this.component.items as unknown as string[]) || [];
	}

	disabled(): boolean {
		if (typeof this.component.disabled === 'function') {
			return this.component.disabled();
		} else {
			return false;
		}
	}

	setWinput(): string | number {
		return this.component.set as unknown as string | number;
	}

	buttonType(): ButtonTypes {
		return this.component.type as unknown as ButtonTypes;
	}

	password = false;

	togglePassword() {
		if (this.password) {
			this.password = false;

			this.component.type = InputTypes.PASSWORD;
		} else {
			this.password = true;

			this.component.type = InputTypes.TEXT;
		}
	}

	next() {
		this.submit.emit();
	}

	constructor(public ui: UiService) {}
}