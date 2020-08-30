import Link from 'next/link';
import Layout from '../components/Layout.js';

import "../styles/index.css";

const news = [
  // Newest at the top
  {
    title: 'COVID-19 Update',
    published: 'August 30, 2020',
    content: pug`
      p.
        In light of the ongoing pandemic, the decision has been made not to
        host the 2020 edition of NWERC onsite at Reykjavík University. Instead,
        planning is underway for a distributed contest during the first quarter
        of 2021, with local contest sites across the region. We are actively
        looking for volunteers and points of contact for participating
        universities and countries to help us make the contest become a
        reality. Read the #[a(href="/covid-update") full announcement] and
        reach out to us at #[a(href="mailto:contact@nwerc.eu") contact@nwerc.eu].
    `,
  },
  {
    title: 'Lithuania joining NWERC',
    published: 'August 29, 2020',
    content: pug`
      p.
        This year the NWERC family has gotten bigger. Please give a warm
        welcome to participants from Lithuania, who have now become members of
        NWERC and NCPC. We are delighted to have you, welcome!
    `,
  },
  {
    title: 'Call for Problems announced',
    published: 'May 6, 2020',
    content: pug`
      p.
        We are pleased to announce the Call for Problems (CfP) for the 2020
        edition of the NWERC programming contest. The deadline for submitting
        candidate problems is #[b July 12, 2020]. Information about the submission
        requirements and procedures can be found on our #[Link(href="/cfp") #[a CfP page]].
    `,
  },
];

export default () => pug`
  Layout
    h2 Welcome
    p.
      Welcome to the website for the Northwestern Europe Regional
      Contest 2020 (NWERC). NWERC 2020 is hosted by Reykjavík
      University in Iceland.
    p.
      NWERC 2020 is an official regional contest in the
      #[a(href="https://icpc.baylor.edu/") ACM International Collegiate Programming Contest].
      It draws students from colleges and universities throughout
      Belgium, Germany, Denmark, Estonia, Finland, Great Britain,
      Ireland, Iceland, the Netherlands, Norway, Sweden and Luxembourg,
      in addition to countries that joined in 2020: Lithuania!
      The top teams will advance to the ACM ICPC World Finals.
    p.
      Stay tuned for news and information about team registration, the
      location and accommodation as the contest draws closer.

    each news_item in news
      h3= news_item.title
      h4.published.flex
        svg.mt-bump.h-4.w-4.fill-current(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24")
          path(d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z")
        span.ml-1= news_item.published
      = news_item.content
`;
