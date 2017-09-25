/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {UserDataService} from './user-data.service';
import { ApiService } from './api.service';
import { ApiMockService } from './api-mock.service';

describe('UserDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserDataService,
        {
          provide: ApiService,
          useClass: ApiMockService
        }
      ]
    });
  });

  it('should ...', inject([UserDataService], (service: UserDataService) => {
    expect(service).toBeTruthy();
  }));

});
