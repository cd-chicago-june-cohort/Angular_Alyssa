import { WeatherForecasePage } from './app.po';

describe('weather-forecase App', () => {
  let page: WeatherForecasePage;

  beforeEach(() => {
    page = new WeatherForecasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
