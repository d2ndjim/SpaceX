import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Dragons from '../Dragons/Dragons';

describe('Dragons test', () => {
  it('renders dragons', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Dragons />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
