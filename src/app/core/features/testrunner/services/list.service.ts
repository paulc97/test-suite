import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable()
export class TestrunnerListSerivce {
  private readonly http = inject(HttpClient);

  getTestrunners() {
    return this.http.get<TestrunnerListResponse[]>('/test-runner').pipe(
      map((testsRunner) =>
        testsRunner.map((t) => ({
          id: t.id,
          name: t.name,
          status: t.status,
          platform: t.platform,
          lastHeartbeat: this.formatUnix(t.last_heartbeat),
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

export interface testrunnerListElement {
  id: string;
  name: string;
  status: string;
  platform: string[];
  lastHeartbeat: string;
}

export interface TestrunnerListResponse {
  id: string;
  name: string;
  status: string;
  platform: string[];
  last_heartbeat: string;
  last_feedback?: string;
  last_update?: string;
  active_test?: string;
  elapsed_seconds?: string;
  start_time?: string;
}
