
module.exports = {
  menu_items: [
    { url: '/', title: 'Home', sub: [] },
    //{ url: '/cfp', title: 'CFP', sub: [] },
    //{ url: '/results', title: 'Results', sub: [
    //  { url: '/photos', title: 'Photos' },
    //  { url: '/problems', title: 'Problem set' },
    //  { url: '/standings', title: 'Final standings' },
    //] },
    { url: '/contest', title: 'Contest', sub: [
      { url: '/rules', title: 'Rules' },
      //{ url: '/system', title: 'System' },
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
