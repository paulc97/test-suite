import { Injectable } from '@angular/core';

@Injectable()
export class TestrunnerDetailSerivce {
  getTestrunnerDetails(id: number) {
    if (id === 123) {
          return {
      id: id,
      name: 'testrunner-'+id,
      status: 'running',
      lastPing: 'vor 5 Sekunden',
      startTime: new Date(Date.now() - 300 * 1000),
      uptimeSeconds: 300,
      activeTest: "test-1",
      plattform: "Vagrant"
    };
    } else if (id == 456) {
          return {
      id: id,
      name: 'testrunner-'+id,
      status: 'sleeping',
      lastPing: 'vor 10 Sekunden',
      startTime: new Date(Date.now() - 350 * 1000),
      uptimeSeconds: 350,
      activeTest: "--",
      plattform: "k8s"
    };
    } else {
          return {
      id: id,
      name: 'testrunner-'+id,
      status: 'sleeping',
      lastPing: 'vor 20 Sekunden',
      startTime: new Date(Date.now() - 680 * 1000),
      uptimeSeconds: 680,
      activeTest: "--",
      plattform: "Docker"
    };
    }
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
  plattform: String;
}

