import React from 'react';
import PropTypes from 'prop-types';
import {OutboundLink} from 'gatsby-plugin-google-analytics';

const Header = props => (
  <header id="header" style={props.timeout ? {display: 'none'} : {}}>
    <div className="logo">
      <span className="icon fa-globe" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Cazamundo</h1>
        <h3>- The world as our playground -</h3>
        <p>
          Two people, our passions combined in one company.
          Software solutions with
          {' '}
          <OutboundLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://smartondernemen.be"
          >
            {' '}Smartondernemen.be
          </OutboundLink>
          ,
          Crafting gold with
          <OutboundLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://vogelvrij.be"
          >
            {' '}Atelier VogelVrij
          </OutboundLink>
          {' '}
          and
          <OutboundLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.homeaway.nl/vakantiewoning/p6790598"
          >
            {' '}Mountain Lovers
          </OutboundLink>
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle ('easybird');
            }}
          >
            Software
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle ('vogelvrij');
            }}
          >
            Jewelry
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle ('mountains');
            }}
          >
            Mountains
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle ('contact');
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
