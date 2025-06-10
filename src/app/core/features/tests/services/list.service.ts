import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TestListService {
  private readonly http = inject(HttpClient);

  /** Gesamtliste aller Tests */
  getTests(): Observable<TestListElement[]> {
    return this.http
      .get<TestApiResponse[]>('/test')
      .pipe(map((tests) => tests.map((t) => this.apiToElement(t))));
  }

  /** Einzelnen Teststatus (Heartbeat) abrufen */
  fetchStatus(id: string): Observable<PartialTestUpdate> {
    return this.http.get<PartialTestUpdate[]>(`/test/${id}/status`).pipe(
      map((arr) => arr[0]) // das Backend liefert ein Array mit einem Objekt
    );
  }

  restartTest(id: string): Observable<void> {
    return this.http.post<void>(`/test/${id}/restart`, {});
  }

  /* --------------------- Mappings & Helfer --------------------- */
  private apiToElement(t: TestApiResponse): TestListElement {
    return {
      id: t.id,
      name: t.name,
      status: t.status,
      testrunner: t.test_runner_id,
      lastPing: this.formatUnix(t.lastHeartbeat),

      progress: t.progress,
    };
  }

  private formatUnix(timestamp: string | null | undefined): string {
    if (!timestamp) return '---';

    const now = Date.now();
    const ts = Number(timestamp);
    const diffSeconds = (now - ts) / 1000;

    if (diffSeconds < 60) return `vor ${Math.round(diffSeconds)} Sekunden`;
    if (diffSeconds < 3600)
      return `vor ${Math.round(diffSeconds / 60)} Minuten`;
    if (diffSeconds < 86400)
      return `vor ${Math.round(diffSeconds / 3600)} Stunden`;
    return `vor ${Math.round(diffSeconds / 86400)} Tagen`;
  }

  deleteTest(id: string): Observable<void> {
    return this.http.delete<void>(`/test/${id}`);
  }

  reloadTestPlans(): Observable<ReloadResponse> {
    return this.http.post<ReloadResponse>('/test/reload', {});
  }

  /** GET /test/last-reload */
  getLastReload(): Observable<string> {
    return this.http
      .get<{ last_reload: string }[]>('/test/last-reload')
      .pipe(map((arr) => arr[0]?.last_reload ?? ''));
  }
}

/* ----------- Typen für Liste & API-Antwort ------------------- */
export interface TestListElement {
  id: string;
  name: string;
  status: string;
  testrunner: string;
  lastPing: string;
  progress: number;
}

export interface TestApiResponse {
  id: string;
  name: string;
  status: string;
  test_runner_id: string;
  progress: number;
  lastHeartbeat: string; // Unix-Millis oder ISO – wird via formatUnix behandelt
}

export interface PartialTestUpdate {
  id: string;
  status?: string;
  progress?: number;
  last_message?: string;
}

export interface ReloadResponse {
  success: boolean;
  message: string;
  updated: string[];
  failed: string[];
  timestamp: string;
}
