import {
  Component,
  inject,
  input,
  signal,
  OnInit,
  WritableSignal,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
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
  faFaceSleeping,
  faFileZipper,
} from '@fortawesome/pro-solid-svg-icons';
import {
  testrunnerListElement,
  TestrunnerListSerivce,
} from '../../services/list.service';
import { firstValueFrom } from 'rxjs';
import { ConfirmComponent } from '../../../shared/components/confirm/confirm.component';
import { Dialog } from '@angular/cdk/dialog';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule, NgClass],
  template: `
    <div id="testrunner-list" class="flex flex-col h-full px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold text-gray-900">
            Testrunner ({{ testrunners().length }})
          </h1>
          <p class="mt-2 text-sm text-gray-700">Übersicht aller Testrunner.</p>
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
                ID
              </th>
              <th
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Status
              </th>
              <th
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Plattform
              </th>
              <th
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Letzter Heartbeat
              </th>
              <th
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Aktion
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            @for (testrunner of testrunners(); track testrunner) {
            <tr class="hover:bg-gray-100" [routerLink]="[testrunner.id]">
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                {{ testrunner.name }}
              </td>

              <td class="whitespace-nowrap px-3 py-4 text-sm">
                <span
                  class="inline-flex items-center gap-2"
                  [ngClass]="{
                    'text-yellow-600': testrunner.status === 'sleeping',
                    'text-green-600': testrunner.status !== 'sleeping'
                  }"
                >
                  <fa-icon
                    [icon]="getStatusIcon(testrunner.status)"
                    class="text-xs"
                  />
                  {{ testrunner.status }}
                </span>
              </td>

              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                {{ testrunner.platform.join(', ') }}
              </td>

              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {{ testrunner.lastHeartbeat }}
              </td>

              <td class="whitespace-nowrap px-3 py-4 text-sm flex gap-2">
                <button
                  class="text-orange-600 hover:text-orange-800"
                  (click)="onHeartbeatClicked($event, testrunner.id)"
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
export class ListComponent implements OnInit {
  /* ------------------------------------------------------------------ */
  /*                   Eingangsdaten (read-only InputSignal)            */
  /* ------------------------------------------------------------------ */
  initialTestrunners = input<testrunnerListElement[]>();
  private readonly route = inject(ActivatedRoute);

  /* ------------------------------------------------------------------ */
  /*           Beschreibbares Signal zum Aktualisieren der Tabelle      */
  /* ------------------------------------------------------------------ */
  testrunners: WritableSignal<testrunnerListElement[]> = signal<
    testrunnerListElement[]
  >([]);

  /* ------------------------------------------------------------------ */
  /*                         Services / DI                              */
  /* ------------------------------------------------------------------ */
  private readonly dialog = inject(Dialog);
  private readonly testrunnerService = inject(TestrunnerListSerivce);

  /* ------------------------------------------------------------------ */
  /*                            Lifecycle                               */
  /* ------------------------------------------------------------------ */
  ngOnInit(): void {
    const data = this.route.snapshot.data['testrunners'] as
      | testrunnerListElement[]
      | undefined;
    this.testrunners.set(data ?? []);
  }

  /* ------------------------------------------------------------------ */
  /*                             Aktionen                               */
  /* ------------------------------------------------------------------ */
  async onHeartbeatClicked(event: Event, id: string): Promise<void> {
    event.stopPropagation();

    try {
      await firstValueFrom(this.testrunnerService.triggerHeartbeat(id));
      await this.reloadTestrunners();
    } catch (err) {
      console.error('Fehler beim Senden des Heartbeats:', err);
    }
  }

  /** Ruft aktuelle Liste ab und schreibt sie ins writable Signal */
  private async reloadTestrunners(): Promise<void> {
    const data = await firstValueFrom(this.testrunnerService.getTestrunners());
    this.testrunners.set(data);
  }

  getStatusIcon(status: string): IconDefinition {
    console.log(status);
    switch (status) {
      case 'RUNNING':
        return this.icons.rabbitRunning;
      case 'SLEEPING':
        return this.icons.faceSleeping;
      case 'UNREACHABLE':
        return this.icons.trash;
      case 'IDLE':
        return this.icons.sleeping;
      default:
        return this.icons.trash;
    }
  }

  /* ------------------------------------------------------------------ */
  /*                               Icons                                */
  /* ------------------------------------------------------------------ */
  icons = {
    filter: faFilter,
    arrowRight: faArrowRight,
    arrowLeft: faArrowLeft,
    arrowUp: faArrowUp,
    arrowDown: faArrowDown,
    arrowsRotate: faArrowsRotate,
    heartBeat: faWavePulse,
    rabbitRunning: faRabbitRunning,
    faceSleeping: faFaceSleeping,
    trash: faTrash,
    male: faMars,
    female: faVenus,
    diverse: faVenusMars,
    fileZipper: faFileZipper,
    sleeping: faFaceSleeping,
  };
}
