import '@testing-library/jest-dom';
import firebase from 'firebase/app';

jest.mock('firebase/app', () => {
  return {
    auth: jest.fn(),
  };
});

describe('61408137', () => {
  it('should return user', () => {
    (firebase.auth = jest.Mocked).mockReturnValueOnce({
      currentUser: { email: 'example@gmail.com', uid: 1, emailVerified: true },
    });
    const actual = App.getLoggedInUser();
    expect(actual).toEqual({
      email: 'example@gmail.com',
      userId: 1,
      isEmailVerified: true,
    });
  });

  it('should return undefined', () => {
    (firebase.auth = jest.Mocked).mockReturnValueOnce({});
    const actual = App.getLoggedInUser();
    expect(actual).toBeUndefined();
  });
});
