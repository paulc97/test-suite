import { Component } from '@angular/core';
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
            @for(runner of [1, 2, 3];track runner){
            <tr class="hover:bg-gray-100" [routerLink]="['runner-1']">
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                runner-{{ runner }}
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm">
                <span class="inline-flex items-center gap-2 text-green-600">
                  <fa-icon [icon]="icons.faFaceSleeping" class="text-xs" />
                  Schlafend
                </span>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                Testrunner-as123
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                vor {{ runner + 5 + runner * 2 }} Sekunden
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm flex gap-2">
                <button class="text-red-600 hover:text-red-800">
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
