import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '../button/button.module';
import { InputModule } from '../input/input.module';
import { TextareaModule } from '../textarea/textarea.module';
import { FormComponent } from './form/form.component';
import { ModalComponent } from './modal/modal.component';
import { ComponentComponent } from './form/component/component.component';

@NgModule({
	imports: [
		CommonModule,
		InputModule,
		ButtonModule,
		TextareaModule
	],
	declarations: [
		ModalComponent,
		FormComponent,
		ComponentComponent
	],
	exports: [ FormComponent ],
	providers: []
})

export class FormModule { }
