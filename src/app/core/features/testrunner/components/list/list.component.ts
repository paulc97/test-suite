import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faFileZipper,
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
  faFaceSleeping,
} from '@fortawesome/pro-solid-svg-icons';
import { testrunnerListElement } from '../../services/list.service';
import { firstValueFrom } from 'rxjs';
import { ConfirmComponent } from '../../../shared/components/confirm/confirm.component';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-list',
  imports: [RouterLink, FontAwesomeModule],
  template: `
    <div id="testrunner-list" class="flex flex-col h-full px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold text-gray-900">Testrunner (5)</h1>
          <p class="mt-2 text-sm text-gray-700">
            Übersicht aller verganenden Tests.
          </p>
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
                CPU
              </th>
              <th
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Letzter Ping
              </th>
              <th
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Aktion
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            @for(testrunner of testrunners();track testrunner){
            <tr class="hover:bg-gray-100" [routerLink]="[testrunner.id]">
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                {{ testrunner.name }}
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm">
                <span class="inline-flex items-center gap-2 text-green-600">
                  <fa-icon [icon]="icons.faFaceSleeping" class="text-xs" />
                  {{ testrunner.status }}
                </span>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                {{ testrunner.cpu }}
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {{ testrunner.lastPing }}
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm flex gap-2">
                <button class="text-red-600 hover:text-red-800"
                (click)="onHeartbeatClicked($event)"
                >
                  <fa-icon [icon]="icons.heartBeat" size="lg"></fa-icon>
                </button>
              </td>
            </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: ``,
})
export class ListComponent {

   testrunners = input<testrunnerListElement[]>();

   private dialog = inject(Dialog);

  async onHeartbeatClicked($event: Event) {
    $event.stopPropagation();
    const result = await this.openConfirmDialog(
      'Wirklich Heartbeat Anfordern?'
    );
    console.log('Dialog closed', result);
  }

      private async openConfirmDialog(confirmText: string): Promise<any> {
        const dialogRef = this.dialog.open(ConfirmComponent, {
          data: { confirmText },
          width: '400px',
        });
    
        return await firstValueFrom(dialogRef.closed);
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
    faFaceSleeping: faFaceSleeping,
  };
}
