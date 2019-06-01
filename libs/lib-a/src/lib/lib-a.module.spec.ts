import {
  async,
  TestBed
} from '@angular/core/testing';
import { LibAModule } from './lib-a.module';

describe('LibAModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LibAModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LibAModule).toBeDefined();
  });
});
