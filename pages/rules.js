import Link from 'next/link';
import Layout from '../components/Layout.js';

import "../styles/index.css";

export default () => pug`
  Layout
    h2 Contest rules
    p.
      The ICPC regional contest rules can be found at the ICPC regionals web
      site; #[a(href="https://icpc.baylor.edu/regionals/rules") official ICPC regional rules].

    p.
      In addition to the ICPC rules, the following local rules also apply:

    h3 Team composition
    // TODO: Update with 2020 version when it has been published
    p.
      A student may compete when eligible according to the 2020 ICPC Regionals Eligibility Diagram.
      (This year's diagram has not been published. See the
      #[a(href="http://icpc.baylor.edu/download/regionals/rules/EligibilityDecisionTree-2019.pdf") 2019 ICPC Regionals Eligibility Diagram]
      for reference.)

    p
      ul
        li A team consists of 3 eligible students.
        // li An educational institution may send up to two teams. TODO: This doesn't seem to be true anymore?
        li.
          The educational institutions must be from one of the region member
          countries. By special request teams from other countries may be
          allowed to participate in this region, as stated in the ICPC Regional
          Rules.
        li.
          All teams who want to participate have to check-in at the registration
          desk. The location of the registration desk and the office hours will
          be announced to the participants in advance.

    h3 Contest material
    p.
      We follow the World Finals’ Rules, so a team is allowed to bring 3 copies
      of their Team Reference Document, but not allowed to bring any additional
      reference materials such as books, program listings and notes! You may not
      bring any electronic device or machine readable media (this includes but
      is not limited to cell phones, digital cameras, and mp3 players). You may
      bring pens or pencils, but not paper (these will be provided). Winter
      coats, bags etc. should not be brought to the contest floor.

    p.
      Each contestant may bring a copy of a Team Reference Document. This document
      may contain up to 25 pages of reference materials, single-sided, letter or
      A4 size, with pages numbered in the upper right-hand corner and your
      university name printed in the upper left-hand corner. Text and
      illustrations must be readable by a person with correctable eyesight without
      magnification from a distance of 1⁄2 meter. It may include hand-written
      comments and corrections on the fronts of pages only, and they must be
      present and identical in all copies of the document. The document should
      be in some type of notebook or folder with the name of your institution on
      the front.

    p.
      Each team member may bring one printed, unannotated natural language
      dictionary. You may bring mascots such as stuffed toy animals or party
      hats (provided they do not violate any of the above constraints). If there
      is some other item your team needs at the contest, please contact the Head
      of Jury.

    p.
      Teams are allowed to bring one keyboard to replace the keyboard provided
      by the notebook. Note that keyboards with pre-programmed macro keys are
      not allowed. Wireless keyboards are also not allowed. A (single) mouse is
      allowed too, but is subject to the same macro rule as with the keyboard.

    p.
      Keyboard, mouse, and Team Reference Documents should be handed in at the
      registration.

`;
