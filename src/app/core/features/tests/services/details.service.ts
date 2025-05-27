import { Injectable } from '@angular/core';

@Injectable()
export class TestDetailSerivce {
  getTestDetails(id: number) {
    
    
    if (id === 1) {
          return {
      id: id,
      name: 'test-'+id,
      status: 'running',
      testrunner: 'testrunner-123',
      lastPing: 'vor 5 Sekunden',
      progress: 0.2,
      startTime: new Date(Date.now() - 300 * 1000),
      elapsedSeconds: 300,
      errorCode: '--',
      errorText: '--',
      report: '--',
      description:
        'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.',
    };
    } else if (id === 2) {
          return {
      id: id,
      name: 'test-'+id,
      status: 'failed',
      testrunner: 'testrunner-456',
      lastPing: 'vor 15 Sekunden',
      progress: 0.3,
      startTime: new Date(Date.now() - 701 * 1000),
      elapsedSeconds: 701,
      errorCode: '404',
      errorText: 'Konnte nicht gefunden werden.',
      report: '--',
      description:
        'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.',
    };
    } else if (id===3){
          return {
      id: id,
      name: 'test-'+id,
      status: 'failed',
      testrunner: 'testrunner-789',
      lastPing: 'vor 42 Sekunden',
      progress: 0.2,
      startTime: new Date(Date.now() - 1001 * 1000),
      elapsedSeconds: 1001,
      errorCode: '404',
      errorText: 'Konnte nicht gefunden werden.',
      report: '--',
      description:
        'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.',
    };
    } else {
          return {
      id: id,
      name: 'test-'+id,
      status: 'completed',
      testrunner: 'testrunner-123',
      lastPing: 'vor 55 Sekunden',
      progress: 1,
      startTime: new Date(Date.now() - 3071 * 1000),
      elapsedSeconds: 3071,
      errorCode: '--',
      errorText: '--',
      report: 'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.',
      description:
        'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.',
    };
    }

  }
}

export interface testDetails {
  id: number;
  name: string;
  status: string;
  testrunner: string;
  lastPing: string;
  progress: number;
  startTime: Date;
  elapsedSeconds: number;
  errorCode: string;
  errorText: string;
  report: string;
  description: string;
}
