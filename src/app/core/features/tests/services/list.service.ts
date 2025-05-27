import { Injectable } from '@angular/core';

@Injectable()
export class TestListSerivce {
  getTests() {
    return [
      {
        id: 1,
        name: 'test-1',
        status: 'running',
        testrunner: 'testrunner-123',
        lastPing: 'vor 5 Sekunden',
        progress: 0.2,
      },
      {
        id: 2,
        name: 'test-2',
        status: 'failed',
        testrunner: 'testrunner-456',
        lastPing: 'vor 15 Sekunden',
        progress: 0.3,
      },
            {
        id: 3,
        name: 'test-3',
        status: 'failed',
        testrunner: 'testrunner-768',
        lastPing: 'vor 42 Sekunden',
        progress: 0.2,
      },
            {
        id: 4,
        name: 'test-4',
        status: 'completed',
        testrunner: 'testrunner-123',
        lastPing: 'vor 55 Sekunden',
        progress: 1,
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
