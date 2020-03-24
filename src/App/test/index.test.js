import React from 'react';
import { render, cleanup, act } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Provider, { store } from 'store-redux/Provider';
import { login, logout } from 'store-redux/actions/auth';
import App from '..';

afterEach(cleanup);

describe('[main]', () => {
  describe('User-is-Authenticated', () => {
    it('<App /> renders-correctly', () => {
      act(() => {
        store.dispatch(login());
      });

      const { getByTestId } = render(
        <Provider>
          <App />
        </Provider>,
      );

      const app = getByTestId('App');
      expect(app).toBeInstanceOf(HTMLDivElement);
    });

    it('<Layout /> is-in-the <App />', () => {
      act(() => {
        store.dispatch(login());
      });

      const { getByTestId } = render(
        <Provider>
          <App />
        </Provider>,
      );

      const app = getByTestId('App');
      const layout = getByTestId('Layout');
      expect(app.firstChild).toEqual(layout);
    });

    it('<Header />, <Content />, <Footer /> is-in-the <Layout />', () => {
      act(() => {
        store.dispatch(login());
      });

      const { getByTestId } = render(
        <Provider>
          <App />
        </Provider>,
      );

      const layout = getByTestId('Layout');
      const header = getByTestId('Header');
      const content = getByTestId('Content');
      const footer = getByTestId('Footer');

      [header, content, footer].forEach((child, i) => expect(child).toEqual(layout.children[i]));
    });
  });

  describe('User-is-not-Authenticated', () => {
    it('<App /> renders-correctly', () => {
      act(() => {
        store.dispatch(logout());
      });

      const { getByTestId } = render(
        <Provider>
          <App />
        </Provider>,
      );

      const app = getByTestId('App');
      expect(app).toBeInstanceOf(HTMLDivElement);
    });

    it('<Layout /> is-in-the <App />', () => {
      act(() => {
        store.dispatch(logout());
      });

      const { getByTestId } = render(
        <Provider>
          <App />
        </Provider>,
      );

      const app = getByTestId('App');
      const layout = getByTestId('Layout');
      expect(app.firstChild).toEqual(layout);
    });

    it('<Content />, <Footer /> is-in-the <Layout />', () => {
      act(() => {
        store.dispatch(logout());
      });

      const { getByTestId } = render(
        <Provider>
          <App />
        </Provider>,
      );

      const layout = getByTestId('Layout');
      const content = getByTestId('Content');
      const footer = getByTestId('Footer');

      [content, footer].forEach((child, i) => expect(child).toEqual(layout.children[i]));
    });
  });
});

describe('[snapshots]', () => {
  describe('User-is-Authenticated', () => {
    it('Matches-snapshot <App>', () => {
      renderer.act(() => {
        store.dispatch(login());
      });

      const tree = renderer
        .create(
          <Provider>
            <App />
          </Provider>,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('User-is-not-Authenticated', () => {
    it('Matches-snapshot <App>', () => {
      renderer.act(() => {
        store.dispatch(logout());
      });

      const tree = renderer
        .create(
          <Provider>
            <App />
          </Provider>,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
