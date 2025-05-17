import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faDatabase,
  faTasks,
  faUserFriends,
  faUserTie,
} from '@fortawesome/pro-solid-svg-icons';

@Component({
  selector: 'app-side-navigation',
  imports: [FontAwesomeModule, RouterModule],
  template: `
    <div class="flex bg-white h-full w-full">
      <div class="flex flex-col w-full">
        <div
          class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6"
        >
          <div class="flex h-16 shrink-0 items-center pt-4">
            <img
              class="h-11 w-auto m-auto"
              src="assets/images/logo.png"
              alt="Your Company"
            />
          </div>
          <hr />
          <nav class="flex  flex-1 flex-col">
            <ul
              role="list"
              class="flex flex-1 justify-between flex-col gap-y-7"
            >
              <li>
                <ul role="list" class="-mx-2 space-y-1">
                  <!-- Einsätze -->
                  <li>
                    <a
                      [routerLink]="['tests']"
                      routerLinkActive="bg-gray-50 text-mhd border-l-4 border-mhd"
                      class="text-gray-700 hover:text-mhd hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold cursor-pointer"
                    >
                      <fa-icon [icon]="icons.assignment" size="xl" />
                      Tests
                    </a>
                  </li>
                  <!-- Klienten -->
                  <li>
                    <a
                      [routerLink]="['/testrunner']"
                      routerLinkActive="bg-gray-50 text-mhd border-l-4 border-mhd"
                      class="text-gray-700 hover:text-mhd hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold cursor-pointer"
                    >
                      <fa-icon [icon]="icons.clients" size="xl" />
                      Testrunner
                    </a>
                  </li>
                  <!-- Mitarbeiter -->
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class SideNavigationComponent {
  icons = {
    assignment: faTasks,
    clients: faUserFriends,
    employees: faUserTie,
    masterData: faDatabase,
  };
}
