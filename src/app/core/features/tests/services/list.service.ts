import { Injectable } from '@angular/core';

@Injectable()
export class TestListSerivce {
  getTests() {
    return [
      {
        id: 1,
        name: 'test-1',
        status: 'running',
        testrunner: 'testrunner-as123',
        lastPing: 'vor 5 Sekunden',
        progress: 0.1,
      },
      {
        id: 1,
        name: 'test-2',
        status: 'failed',
        testrunner: 'testrunner-as123',
        lastPing: 'vor 5 Sekunden',
        progress: 0.5,
      },
    ];
  }
}

export interface testListElement {
  id: number;
  name: string;
  status: string;
  testrunner: string;
  lastPing: string;
  progress: number;
}
