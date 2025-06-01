import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable()
export class TestListSerivce {
  constructor(private http: HttpClient) {}

  getTests(): Observable<testListElement[]> {
    return this.http.get<any[]>('/test').pipe(
      map((tests) =>
        tests.map((t) => ({
          id: t.id,
          name: t.name,
          status: t.status,
          testrunner: t.testRunner,
          lastPing: this.formatUnix(t.lastHeartbeat),
          progress: t.progress,
        }))
      )
    );
  }

  private formatUnix(timestamp: string): string {
    const seconds = Date.now() / 1000 - Number(timestamp);
    if (seconds < 60) return `vor ${Math.round(seconds)} Sekunden`;
    if (seconds < 3600) return `vor ${Math.round(seconds / 60)} Minuten`;
    return `vor ${Math.round(seconds / 3600)} Stunden`;
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
