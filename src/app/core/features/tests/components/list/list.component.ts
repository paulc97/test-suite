import { Component, inject, input } from '@angular/core';
import {
  FontAwesomeModule,
  IconDefinition,
} from '@fortawesome/angular-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faFilter,
  faMars,
  faVenus,
  faVenusMars,
  faArrowUp,
  faArrowDown,
  faArrowsRotate,
  faWavePulse,
  faTrash,
  faRabbitRunning,
  faXmark,
  faCircleCheck,
} from '@fortawesome/pro-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { testListElement } from '../../services/list.service';
import { Dialog } from '@angular/cdk/dialog';
import { ConfirmComponent } from '../../../shared/components/confirm/confirm.component';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-list',
  imports: [FontAwesomeModule, RouterLink, NgClass],
  template: `<div
    id="testrunner-list"
    class="flex flex-col h-full px-4 sm:px-6 lg:px-8"
  >
    <!-- Header -->

    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold text-gray-900">Tests (4)</h1>
        <p class="mt-2 text-sm text-gray-700">Übersicht aller Tests.</p>
      </div>
      <div class="mt-4 sm:mt-0 sm:flex-none flex items-center gap-2">
        <button
          id="new-client-button"
          [routerLink]="['start-test']"
          class="cursor-pointer block rounded-md bg-mhd px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-mhd/80"
        >
          Test erstellen
        </button>
      </div>
    </div>

    <!-- Liste -->
    <div class="flex-1 overflow-y-auto mt-4">
      <table class="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th
              class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Name
            </th>
            <th
              class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Status
            </th>
            <th
              class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Testrunner
            </th>
            <th
              class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Letztes Update
            </th>
            <th
              class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Progress
            </th>
            <th
              class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Aktionen
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          @for(test of tests();track test){
          <tr class="hover:bg-gray-100" [routerLink]="[test.id]">
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
              {{ test.name }}
            </td>
            <td class="whitespace-nowrap px-3 py-4 text-sm">
              <span
                class="inline-flex items-center gap-2"
                [ngClass]="{
                  ' text-red-600 ': test.status === 'failed',
                  ' text-green-600 ': test.status !== 'failed'
                }"
              >
                <fa-icon [icon]="getStatusIcon(test.status)" class="text-xs" />
                {{ test.status }}
              </span>
            </td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
              {{ test.testrunner }}
            </td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {{ test.lastPing }}
            </td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {{ test.progress }}%
            </td>
            <td class="whitespace-nowrap px-3 py-4 text-sm flex gap-2">
              <button
                class="text-orange-600 hover:text-orange-800"
                (click)="onHeartbeatClicked($event)"
              >
                <fa-icon [icon]="icons.heartBeat" size="lg"></fa-icon>
              </button>
              <button
                class="text-orange-600 hover:text-orange-800"
                (click)="onRefreshClicked($event)"
              >
                <fa-icon [icon]="icons.arrowsRotate" size="lg"></fa-icon>
              </button>
              <button
                class="text-orange-600 hover:text-orange-800"
                (click)="onDeleteClicked($event)"
              >
                <fa-icon [icon]="icons.xMark" size="lg"></fa-icon>
              </button>
            </td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  </div>`,
  styles: ``,
})
export class ListComponent {
  private dialog = inject(Dialog);

  tests = input<testListElement[]>();

  async onHeartbeatClicked($event: Event) {
    $event.stopPropagation();
  }

  private async openConfirmDialog(confirmText: string): Promise<any> {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: { confirmText },
      width: '400px',
    });

    return await firstValueFrom(dialogRef.closed);
  }
  async onRefreshClicked($event: Event) {
    $event.stopPropagation();
    const result = await this.openConfirmDialog('Test wirklich neustarten?');
    console.log('Dialog closed', result);
  }
  async onDeleteClicked($event: Event) {
    $event.stopPropagation();
    const result = await this.openConfirmDialog('Test wirklich abbrechen?');
    console.log('Dialog closed', result);
  }

  getStatusIcon(status: string): IconDefinition {
    switch (status) {
      case 'running':
        return this.icons.rabbitRunning;
      case 'passed':
        return this.icons.trash;
      case 'failed':
        return this.icons.xMark;
      case 'skipped':
        return this.icons.trash;
      case 'pending':
        return this.icons.trash;
      case 'unreachable':
        return this.icons.trash;
      case 'completed':
        return this.icons.circlecCheck;
      default:
        return this.icons.trash;
    }
  }

  icons = {
    male: faMars,
    female: faVenus,
    diverse: faVenusMars,
    filter: faFilter,
    arrowRight: faArrowRight,
    arrowLeft: faArrowLeft,
    trash: faTrash,
    arrowUp: faArrowUp,
    arrowDown: faArrowDown,
    arrowsRotate: faArrowsRotate,
    heartBeat: faWavePulse,
    rabbitRunning: faRabbitRunning,
    xMark: faXmark,
    circlecCheck: faCircleCheck,
  };
}
