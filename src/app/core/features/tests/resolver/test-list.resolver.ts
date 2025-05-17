import { Resolve } from '@angular/router';
import { testListElement, TestListSerivce } from '../services/list.service';
import { inject, Injectable } from '@angular/core';

@Injectable()
export class TestListResolver implements Resolve<testListElement[]> {
  private testListService = inject(TestListSerivce);

  resolve() {
    return this.testListService.getTests();
  }
}
