import { MISModule } from './mis.module';

describe('MISModule', () => {
  let mISModule: MISModule;

  beforeEach(() => {
    mISModule = new MISModule();
  });

  it('should create an instance', () => {
    expect(mISModule).toBeTruthy();
  });
});
