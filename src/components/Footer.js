import React from 'react'
import PropTypes from 'prop-types'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Cazamundo G.C.V. - Gezondheidstraat, 9000 Gent. BTW: BE0546917177</p>
        <p className="copyright">---</p>
        <p className="copyright">Website Design licensed under Creative Commons License, created by <OutboundLink href="https://html5up.net" rel="noopener noreferrer" target="_blank">HTML5 Up</OutboundLink>, rebranded by <OutboundLink href="https://easybird.be" rel="noopener noreferrer" target="_blank">Easybird</OutboundLink></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
