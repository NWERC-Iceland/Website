
module.exports = {
  menu_items: [
    { url: '/', title: 'Home', sub: [] },
    // { url: '/cfp', title: 'CFP', sub: [] },
    //{ url: '/results', title: 'Results', sub: [
    //  { url: '/photos', title: 'Photos' },
    //  { url: '/problems', title: 'Problem set' },
    //  { url: '/standings', title: 'Final standings' },
    //] },
    { url: '/system', title: 'System', sub: [
      { url: '/system', title: 'Judging' },
      { url: '/vm', title: 'Contest environment' },
    ] },
    { url: '/contest', title: 'Contest', sub: [
      { url: '/rules', title: 'Rules' },
      { url: '/contest', title: 'About' },
    ] },
    //{ url: '/attendees', title: 'Attendees', sub: [
    //  { url: '/registration', title: 'Registration' },
    //  { url: '/location', title: 'Location' },
    //  { url: '/schedule', title: 'Schedule' },
    //] },
    { url: '/about', title: 'About', sub: [] },
  ]
};
