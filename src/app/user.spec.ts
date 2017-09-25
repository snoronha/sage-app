import {User} from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const user = new User({
      title: 'hello',
      complete: true
    });
    expect(user.title).toEqual('hello');
    expect(user.complete).toEqual(true);
  });
});
