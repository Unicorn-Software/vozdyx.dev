import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        <Container className="footer" fluid>
            <div id="top" style={{display: 'flex'}}>
                <div className="text" id="top_text" style={{height: '50%', width: '35%'}}>Все права принадлежат Банану. Я принадлежу Банану</div>
                <p className="spoiler" style={{height: '50%',width: '10%'}}>(ПАМАГИТЕ!)</p>
            </div>
            <div className="text" id="bottom">© 2022 Vozdyx</div>
        </Container>
    );
};

export default Footer;