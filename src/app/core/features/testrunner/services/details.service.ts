import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TestrunnerListResponse } from './list.service';
import { map } from 'rxjs';

@Injectable()
export class TestrunnerDetailSerivce {
  private readonly http = inject(HttpClient);

  getTestrunnerDetails(id: string) {
    return this.http.get<testrunnerDetails>(`/test-runner/${id}`).pipe(
      map((testsRunner) => ({
        id: testsRunner.id,
        name: testsRunner.name,
        status: testsRunner.status,
        platform: testsRunner.platform,
        last_heartbeat: this.formatUnix(testsRunner.last_heartbeat),
      }))
    );
  }

  private formatUnix(timestamp: string): string {
    const seconds = Date.now() / 1000 - Number(timestamp);
    if (seconds < 60) return `vor ${Math.round(seconds)} Sekunden`;
    if (seconds < 3600) return `vor ${Math.round(seconds / 60)} Minuten`;
    return `vor ${Math.round(seconds / 3600)} Stunden`;
  }
}

export interface testrunnerDetails {
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
