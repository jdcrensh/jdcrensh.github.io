import ReactDOM from 'react-dom';

describe('index', () => {
  it('is imported with no smoke', () => {
    ReactDOM.render = jest.fn();
    require('./index');
    expect(ReactDOM.render).toHaveBeenCalled();
  });
});
