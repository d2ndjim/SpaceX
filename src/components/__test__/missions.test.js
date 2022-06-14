import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Missions from '../mission/missions';

describe('Missions test', () => {
  it('renders missions', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
