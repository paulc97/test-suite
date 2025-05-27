import { Injectable } from '@angular/core';

@Injectable()
export class TestrunnerListSerivce {
  getTestrunners() {
    return [
      {
        id: 123,
        name: 'testrunner-123',
        status: 'running',
        cpu: 'Vagrant',
        lastPing: 'vor 5 Sekunden',
      },
            {
        id: 456,
        name: 'testrunner-456',
        status: 'sleeping',
        cpu: 'k8s',
        lastPing: 'vor 10 Sekunden',
      },
            {
        id: 768,
        name: 'testrunner-768',
        status: 'sleeping',
        cpu: 'Docker',
        lastPing: 'vor 20 Sekunden',
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
