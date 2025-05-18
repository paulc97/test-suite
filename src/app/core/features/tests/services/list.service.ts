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
        id: 2,
        name: 'test-2',
        status: 'failed',
        testrunner: 'testrunner-as1234',
        lastPing: 'vor 5 Sekunden',
        progress: 0.5,
      },
            {
        id: 3,
        name: 'test-3',
        status: 'failed',
        testrunner: 'testrunner-as123',
        lastPing: 'vor 5 Sekunden',
        progress: 0.5,
      },
            {
        id: 4,
        name: 'test-4',
        status: 'failed',
        testrunner: 'testrunner-as123',
        lastPing: 'vor 5 Sekunden',
        progress: 0.5,
      },
            {
        id: 5,
        name: 'test-5',
        status: 'failed',
        testrunner: 'testrunner-as123',
        lastPing: 'vor 5 Sekunden',
        progress: 0.5,
      },
            {
        id: 6,
        name: 'test-6',
        status: 'failed',
        testrunner: 'testrunner-as123',
        lastPing: 'vor 5 Sekunden',
        progress: 0.5,
      },
            {
        id: 7,
        name: 'test-7',
        status: 'failed',
        testrunner: 'testrunner-as123',
        lastPing: 'vor 5 Sekunden',
        progress: 0.5,
      },
            {
        id: 8,
        name: 'test-8',
        status: 'failed',
        testrunner: 'testrunner-as123',
        lastPing: 'vor 5 Sekunden',
        progress: 0.5,
      },
            {
        id: 9,
        name: 'test-9',
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
