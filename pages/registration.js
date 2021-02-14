import Link from 'next/link';
import Layout from '../components/Layout.js';

import "../styles/index.css";

export default () => pug`
  Layout
    h2 Registration
    p.
        The registration for NWERC 2020 is now open and takes place on the
        #[a(href="https://icpc.global/private/teamRegistration/site/18460") ICPC registration system].
        Registration closes on #[b March 16th, 2020].

    p.
        Each team must have a non-student coach that is associated with the
        institution they represent. Details about valid team compositions are
        described on the #[Link(href="/rules") #[a rules]] page. In particular,
        each institution may send up to 3 teams to NWERC 2020.

    p To register, the #[i coach] of the teams must do the following:
        ul
            li.
                Check that your institution is in the NWERC region. If you have
                any doubts about whether you are counted as part of this
                region, please #[Link(href="/about") #[a contact us]].
            li.
                Check carefully that all team members are eligible
                according to the #[a(href="https://icpc.global/newcms/regionals/rules/EligibilityDecisionTree-2020.pdf") eligibility diagram].
            li.
                Fill in the registration form for
                #[a(href="https://icpc.global/private/teamRegistration/site/18460") NWERC 2020 - Online contest]
                and assign yourself as a coach. If the team was already
                registered in the ICPC system for one of the NWERC
                subregionals, you may instead have to "promote" the team to
                NWERC, choosing the site "NWERC 2020 - Online contest".
            li.
                Make sure all team members fill in their ICPC profiles,
                completing the registration.
            li.
                When the NWERC organizers have reviewed your registration,
                teams will be marked as Approved in the registration system.
                Any further instructions will be sent out via email.

`;
