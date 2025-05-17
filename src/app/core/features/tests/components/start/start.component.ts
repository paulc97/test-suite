import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-start',
  imports: [NgSelectModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="forms" class="mx-auto max-w-7xl py-4 sm:px-6 lg:px-8">
      <div class="px-4 sm:px-0">
        <h3 class="text-base/7 font-semibold text-gray-900">Test Starten</h3>
        <p class="mt-1 max-w-2xl text-sm/6 text-gray-500">
          Starten Sie einen neuen Test mit dem Testrunner.
        </p>
      </div>
      <div class="mt-6 border-t border-gray-100">
        <dl class="divide-y divide-gray-100">
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm/6 font-medium text-gray-900">Testdefinition</dt>
            <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              <ng-select
                formControlName="testDefinitionForm"
                [items]="testDefinitions"
                bindLabel="name"
                bindValue="id"
                placeholder="Bitte auswählen"
                [multiple]="false"
                [searchable]="true"
                [closeOnSelect]="true"
                notFoundText="Keine Einträge gefunden"
              ></ng-select>
            </dd>
          </div>

          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm/6 font-medium text-gray-900">Testrunner</dt>
            <dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
              <ng-select
                formControlName="testRunnersForm"
                [items]="testrunners"
                bindLabel="name"
                bindValue="id"
                placeholder="Bitte auswählen"
                [multiple]="true"
                [searchable]="true"
                [closeOnSelect]="false"
                notFoundText="Keine Einträge gefunden"
              ></ng-select>
            </dd>
          </div>

          <button (click)="logForms()">LOG</button>
        </dl>
      </div>
    </form>
  `,
  styles: ``,
})
export class StartComponent implements OnInit {
  forms = new FormGroup({
    testDefinitionForm: new FormControl(null),
    testRunnersForm: new FormControl(1, { nonNullable: true }),
  });

  ngOnInit(): void {
    this.forms.controls.testDefinitionForm.valueChanges.subscribe((value) => {
      console.log(value);

      if (value) {
        this.forms.controls['testRunnersForm'].enable();
      } else {
        this.forms.controls['testRunnersForm'].disable();
      }
    });

    this.forms.controls['testRunnersForm'].disable();
  }

  logForms() {
    console.log(this.forms);
  }

  testDefinitions = [
    { id: 1, name: 'Test 1' },
    { id: 2, name: 'Test 2' },
    { id: 3, name: 'Test 3' },
  ];

  testrunners = [
    { id: 1, name: 'Testrunner 1' },
    { id: 2, name: 'Testrunner 2' },
    { id: 3, name: 'Testrunner 3' },
  ];
}
