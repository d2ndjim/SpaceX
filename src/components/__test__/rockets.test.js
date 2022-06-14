import React from "react";
import renderer from 'react-test-renderer'
import { Provider } from "react-redux";
import store from '../../redux/configureStore'
import Rockets from '../Rocket/Rockets'

describe('Rockets test', () => {
  it ('renders rockets', () => {
    const app = renderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>
    ).toJSON();
    expect(app).toMatchSnapshot();
  })
})