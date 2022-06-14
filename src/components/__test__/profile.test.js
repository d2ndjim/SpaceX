import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Profile from '../profile/profile';

describe('Profiles test', () => {
  it('renders profiles', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Profile />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
