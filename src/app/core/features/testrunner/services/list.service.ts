import { Injectable } from '@angular/core';

@Injectable()
export class TestrunnerListSerivce {
  getTestrunners() {
    return [
      {
        id: 1,
        name: 'testrunner-1',
        status: 'sleeping',
        cpu: '123',
        lastPing: 'vor 5 Sekunden',
      },
            {
        id: 2,
        name: 'testrunner-2',
        status: 'sleeping',
        cpu: '2cpu',
        lastPing: 'vor 5 Sekunden',
      },
            {
        id: 3,
        name: 'testrunner-3',
        status: 'sleeping',
        cpu: '3cpu',
        lastPing: 'vor 5 Sekunden',
      },
    ];
  }
}

export interface testrunnerListElement {
  id: number;
  name: string;
  status: string;
  cpu: string;
  lastPing: string;
}
