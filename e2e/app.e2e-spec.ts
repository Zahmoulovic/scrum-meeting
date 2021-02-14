import { Scrum.MeetingPage } from './app.po';

describe('scrum.meeting App', () => {
  let page: Scrum.MeetingPage;

  beforeEach(() => {
    page = new Scrum.MeetingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
