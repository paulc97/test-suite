import { Injectable } from '@angular/core';

@Injectable()
export class TestDetailSerivce {
  getTestDetails(id: number) {
    return {
      id: id,
      name: 'test-'+id,
      status: 'running',
      testrunner: 'testrunner-as123',
      lastPing: 'vor 5 Sekunden',
      progress: 0.1,
      startTime: new Date(),
      elapsedSeconds: 300,
      errorCode: '404',
      errorText: 'Not Found ist auch super',
      report: 'Das wird garantiert ein file sein',
      description:
        'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.',
    };
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
