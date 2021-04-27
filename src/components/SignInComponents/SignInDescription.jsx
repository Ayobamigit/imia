import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {ReactComponent as Check} from '../../assets/icons/yellowCheck.svg';
import './SignInComponents.scss';

const SignInDescription = () => {
    return (
        <div className="sign-in-desc">
          <div className="signIn-img"></div>  
          <div className="desc-sign">
              <Row>
                  <Col lg={4}>
                      <h1 className="desc-header">Take your business to the next level with IMIA.</h1>
                  </Col>
                  <Col lg={8}>
                      <Row className="mb-15">
                          <Col lg={1}>
                              <Check />
                          </Col>
                          <Col lg={10}>
                              <h3 className="signIn-head">Reach more people with your products.</h3>
                              <p className="signIn-paragraph">This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel.</p>
                          </Col>
                      </Row>

                      <Row className="mb-15">
                          <Col lg={1}>
                              <Check />
                          </Col>
                          <Col lg={10}>
                              <h3 className="signIn-head">Increase your sales.</h3>
                              <p className="signIn-paragraph">Think of them merely as actors on a paper stage, in a performance devoid of content yet rich in form.</p>
                          </Col>
                      </Row>

                      <Row className="mb-15">
                          <Col lg={1}>
                              <Check />
                          </Col>
                          <Col lg={10}>
                              <h3 className="signIn-head">Bring Africa to the world.</h3>
                              <p className="signIn-paragraph">After all, you have many other things you should be doing. Who's paying you to waste this time, anyway.</p>
                          </Col>
                      </Row>
                  </Col>
              </Row>
          </div>
        </div>
    )
}

export default SignInDescription
