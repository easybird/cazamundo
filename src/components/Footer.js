import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Cazamundo G.C.V. - Gezondheidstraat, 9000 Gent. BTW: BE0546917177</p>
        <p className="copyright">---</p>
        <p className="copyright">Website Design licensed under Creative Commons License, created by <a href="https://html5up.net" rel="noopener noreferrer" target="_blank">HTML5 Up</a>, rebranded by <a href="https://easybird.be" rel="noopener noreferrer" target="_blank">Easybird</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
