import { Routes } from '@angular/router';
import { ListComponent } from './core/features/tests/components/list/list.component';
import { DetailComponent } from './core/features/tests/components/detail/detail.component';
import { ListComponent as TestrunnerListComponent } from './core/features/testrunner/components/list/list.component';
import { DetailComponent as TestrunnerDetailComponent } from './core/features/testrunner/components/detail/detail.component';
import { TestListSerivce } from './core/features/tests/services/list.service';
import { TestListResolver } from './core/features/tests/resolver/test-list.resolver';
import { TestDetailSerivce } from './core/features/tests/services/details.service';
import { TestDetailResolver } from './core/features/tests/resolver/test-detail.resolver';
import { StartComponent } from './core/features/tests/components/start/start.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/tests',
    pathMatch: 'full',
  },
  {
    path: 'tests',
    component: ListComponent,
    title: 'Sourcepark | Tests',
    providers: [TestListSerivce, TestListResolver],
    resolve: { tests: TestListResolver },
  },
  {
    path: 'tests/tests-1',
    component: DetailComponent,
    title: 'Sourcepark | Test-1',
    providers: [TestDetailSerivce, TestDetailResolver],
    resolve: { testDetails: TestDetailResolver },
  },
  {
    path: 'tests/start-test',
    component: StartComponent,
    title: 'Sourcepark | Start Test',
  },
  {
    path: 'testrunner',
    component: TestrunnerListComponent,
    title: 'Sourcepark | Testrunner',
  },
  {
    path: 'testrunner/runner-1',
    component: TestrunnerDetailComponent,
    title: 'Sourcepark | Testrunner',
  },
];
