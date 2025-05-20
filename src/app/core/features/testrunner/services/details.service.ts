import { Injectable } from '@angular/core';

@Injectable()
export class TestrunnerDetailSerivce {
  getTestrunnerDetails(id: number) {
    return {
      id: id,
      name: 'testrunner-'+id,
      status: 'sleeping',
      lastPing: 'vor 5 Sekunden',
      startTime: new Date(),
      uptimeSeconds: 300,
      activeTest: "laufendertest-123"
    };
  }
}

export interface testrunnerDetails {
  id: number;
  name: string;
  status: string;
  lastPing: string;
  uptimeSeconds: number;
  activeTest: string;
  startTime: Date;
}

