import React, { Component } from 'react';
import { Button, Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, Footer } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {Card, CardBody, CardImage, CardTitle, CardText, Input, FormInline } from 'mdbreact';
import './index.css';

const NavLink = require('react-router-dom').NavLink;

import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="flyout">
          <Navbar color="indigo" dark expand="md" fixed="top" scrolling>
            <NavbarBrand href="/">
              <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMyAyMC40NjM0OCI+PHRpdGxlPmxvZ288L3RpdGxlPjxwYXRoIGQ9Ik0xOC45MTA3LDYuNjMyNTdoMHEtLjM2NzIxLS4xMjYtLjc0MDQyLS4yMzMzLjA2MTg3LS4yNTE0MS4xMTQ0MS0uNTA1Yy41NjA0NS0yLjcyMDY0LjE5NC00LjkxMjM3LTEuMDU3MzktNS42MzM4Ni0xLjE5OTgtLjY5Mi0zLjE2MjEuMDI5NTItNS4xNDM5NCwxLjc1NDE0cS0uMjkyOTMuMjU1NS0uNTcyNjcuNTI1NTQtLjE4NzI3LS4xNzk1MS0uMzgxMS0uMzUyQzkuMDUyNTcuMzQzOSw2Ljk3MDY2LS40MzMxNiw1LjcyMDU4LjI5MDQ2LDQuNTIxOTEuOTg0MzYsNC4xNjY4NiwzLjA0NDg5LDQuNjcxNDQsNS42MjMyMnEuMDc1My4zODMuMTcuNzYxNzljLS4yOTQ1OC4wODM2Ny0uNTc5MDguMTcyODQtLjg1MTI3LjI2NzcxQzEuNTU1MTQsNy41MDE2NSwwLDguODMyMjUsMCwxMC4yMTIzMWMwLDEuNDI1NDYsMS42NjkzNSwyLjg1NTIsNC4yMDU3NSwzLjcyMnEuMzA4NS4xMDQ5NC42MjE5My4xOTQ0Mi0uMTAxNzkuNDA4LS4xODA2OC44MjExNGMtLjQ4MTA2LDIuNTMzNTQtLjEwNTM1LDQuNTQ1MjEsMS4wOTAxNyw1LjIzNDg0LDEuMjM0ODEuNzEyLDMuMzA3MjUtLjAxOTg1LDUuMzI1MzMtMS43ODM4N3EuMjM5MjYtLjIwOTE3LjQ3OTk0LS40NDIzOC4zMDI5LjI5MjI1LjYyMTczLjU2NzI3YzEuOTU0NzcsMS42ODIwNywzLjg4NTMxLDIuMzYxMzIsNS4wNzk4MiwxLjY2OTg2LDEuMjMzNjktLjcxNDE2LDEuNjM0NTQtMi44NzUyNSwxLjExNC01LjUwNDU5cS0uMDU5NTUtLjMwMTI0LS4xMzc5Mi0uNjE0ODEuMjE4MzQtLjA2NDQzLjQyNzcyLS4xMzM1NUMyMS4yODQ1NCwxMy4wNjkxNSwyMywxMS42NTY4MSwyMywxMC4yMTIzMiwyMyw4LjgyNzI2LDIxLjM5NDc4LDcuNDg3NzEsMTguOTEwNyw2LjYzMjU3Wk0xMi43Mjg0LDIuNzU1ODFDMTQuNDI2NDYsMS4yNzgsMTYuMDEzNDYuNjk0NTcsMTYuNzM2NTcsMS4xMTE2aDBjLjc3MDE0LjQ0NDIxLDEuMDY5NzEsMi4yMzU0LjU4NTgsNC41ODQ0MXEtLjA0NzU4LjIyOTUzLS4xMDM0Mi40NTcyNGEyMy41Mzc1MiwyMy41Mzc1MiwwLDAsMC0zLjA3NTI3LS40ODU4NEEyMy4wODEyOCwyMy4wODEyOCwwLDAsMCwxMi4xOTk1LDMuMjQwOTRRMTIuNDU3ODgsMi45OTE4NCwxMi43Mjg0LDIuNzU1ODFaTTYuNzkxMTEsMTEuMzkxMjRxLjMxMi42MDI2NS42NTIwNywxLjE5MDEzLjM0NjkyLjU5OTExLjcyMjEsMS4xODExN2EyMC45MjE2OCwyMC45MjE2OCwwLDAsMS0yLjExOTY3LS4zNDA4QzYuMjQ4NjcsMTIuNzY2LDYuNDk4ODcsMTIuMDg0NDMsNi43OTExMSwxMS4zOTEyNFpNNi43OSw5LjA4MDQxYy0uMjg2MTMtLjY3ODYzLS41MzA5My0xLjM0NTg2LS43MzA4NS0xLjk5MDE5LjY1NjI0LS4xNDY4OCwxLjM1Ni0uMjY2ODksMi4wODUxNi0uMzU4cS0uMzY2MTEuNTcxLS43MDUxLDEuMTU4NzdRNy4xMDA3Niw4LjQ3OCw2Ljc5LDkuMDgwNDFabS41MjIyOCwxLjE1NTUycS40NTQxMS0uOTQ1MTcuOTc4My0xLjg1NDJ2LjAwMDJxLjUyMzY5LS45MDg1NywxLjExNTIxLTEuNzc1NDJjLjY4NC0uMDUxNzEsMS4zODUzNi0uMDc4NzksMi4wOTQzMi0uMDc4NzkuNzEyMTIsMCwxLjQxNDM3LjAyNzI4LDIuMDk4MTkuMDc5NHEuNTg1MTQuODY0ODcsMS4xMDgxOCwxLjc2OTQxLjUyNTY1LjkwNjM1Ljk5MTUzLDEuODQ1NDUtLjQ2MDgzLjk0ODE3LS45ODgyOCwxLjg2MTczaC0uMDAwMXEtLjUyMjYxLjkwNzg2LTEuMTAzNCwxLjc4MDNjLS42ODI0LjA0ODc2LTEuMzg3Ni4wNzM5LTIuMTA2MjMuMDczOS0uNzE1NjgsMC0xLjQxMTkzLS4wMjIyOS0yLjA4MjQxLS4wNjU3NXEtLjU5NTU1LS44Njk5NS0xLjEyNDA2LTEuNzgzMDVRNy43Njc4OSwxMS4xODE0OCw3LjMxMjI3LDEwLjIzNTkzWm04LjI0ODUzLDIuMzM4NjJxLjM0Ny0uNjAxODIuNjY3LTEuMjE4NjNoMGEyMC44NjY3MSwyMC44NjY3MSwwLDAsMSwuNzcyMzgsMi4wMjMyNywyMC44NTE2NCwyMC44NTE2NCwwLDAsMS0yLjE0NTUyLjM2NTczUTE1LjIxOTM1LDEzLjE2NjgyLDE1LjU2MDgsMTIuNTc0NTVabS42NTc2Ny0zLjQ5MzQzcS0uMzE4ODMtLjYwNS0uNjYxNjMtMS4xOTY4NGgwcS0uMzM3MjctLjU4MjU4LS42OTk0LTEuMTUwMjJjLjczMzkuMDkyNjMsMS40MzcuMjE1NzksMi4wOTcxNy4zNjY1NEEyMC45NTkwOSwyMC45NTkwOSwwLDAsMSwxNi4yMTg0Nyw5LjA4MTEyWk0xMS41MTEsMy45NDM1OWEyMS4wMTI4OCwyMS4wMTI4OCwwLDAsMSwxLjM1MzUsMS42MzM5M3EtMS4zNTg0My0uMDY0MTktMi43MTg0LS4wMDA2MUMxMC41OTMsNC45ODc2NSwxMS4wNTA3LDQuNDQwMjIsMTEuNTExLDMuOTQzNTlaTTYuMjEyODQsMS4xNDA4MWMuNzY5NTMtLjQ0NTQzLDIuNDcwOTUuMTg5NzMsNC4yNjQyOCwxLjc4Mi4xMTQ2MS4xMDE3OS4yMjk3NC4yMDgzNi4zNDUwNy4zMTg2QTIzLjU0NTQyLDIzLjU0NTQyLDAsMCwwLDguODYyOTQsNS42NjYwOGEyNC4wMDgsMjQuMDA4LDAsMCwwLTMuMDY5MTYuNDc3cS0uMDg4LS4zNTIyOC0uMTU4MDgtLjcwODY2di4wMDAxQzUuMjAzMzksMy4yMjUzNiw1LjQ5MDQ0LDEuNTU5LDYuMjEyODQsMS4xNDA4MVpNNS4wOTEzMiwxMy4xODIzM3EtLjI4Ni0uMDgxODctLjU2Nzc4LS4xNzc3M0E4LjMyMzcxLDguMzIzNzEsMCwwLDEsMS44NDEsMTEuNTc5NTVhMi4wMzA3MiwyLjAzMDcyLDAsMCwxLS44NTg0OS0xLjM2NzI0YzAtLjgzNzQyLDEuMjQ4NjUtMS45MDU3MSwzLjMzMTE3LTIuNjMxNzhxLjM5MjA4LS4xMzYxLjc5MTYyLS4yNDkwOGEyMy41NjQ1NSwyMy41NjQ1NSwwLDAsMCwxLjEyMSwyLjkwNDc4QTIzLjkyMjQ3LDIzLjkyMjQ3LDAsMCwwLDUuMDkxMzIsMTMuMTgyMzNaTTEwLjQxNTk0LDE3LjY2MWE4LjMyMTYxLDguMzIxNjEsMCwwLDEtMi41NzQ2NywxLjYxMTg0aC0uMDAwMWEyLjAzMDQyLDIuMDMwNDIsMCwwLDEtMS42MTMwNi4wNjA2N2MtLjcyNTU2LS40MTgzNi0xLjAyNzA2LTIuMDMzNzYtLjYxNTczLTQuMjAwMzVxLjA3MzM3LS4zODQwNy4xNjgtLjc2MzYzYTIzLjEwNDQ0LDIzLjEwNDQ0LDAsMCwwLDMuMDk5NS40NDg2OSwyMy45MDk1NCwyMy45MDk1NCwwLDAsMCwxLjk3NDMxLDIuNDM5MjlRMTAuNjQsMTcuNDY0NTksMTAuNDE1OTQsMTcuNjYxWm0xLjEyMjIzLTEuMTEwNTNjLS40NjU2OS0uNTAyNTMtLjkzMDE1LTEuMDU4MzEtMS4zODM4My0xLjY1NjEycS42NjA1MS4wMjYsMS4zNDU2Ni4wMjYwNi43MDMyNiwwLDEuMzg4NDEtLjAzMDg0QTIwLjg5NDI1LDIwLjg5NDI1LDAsMCwxLDExLjUzODE3LDE2LjU1MDQ1Wm01Ljk2NjUxLDEuMzY3YTIuMDMwMzksMi4wMzAzOSwwLDAsMS0uNzUzLDEuNDI3OGMtLjcyNDg1LjQxOTU4LTIuMjc1LS4xMjU4MS0zLjk0NjU5LTEuNTY0MzFxLS4yODc1LS4yNDczNS0uNTc4MzctLjUyNzI3YTIzLjA4OTE0LDIzLjA4OTE0LDAsMCwwLDEuOTI3OS0yLjQ0OCwyMi45MzY0NywyMi45MzY0NywwLDAsMCwzLjExNTA3LS40ODAxNHEuMDcwMjQuMjg0LjEyNDQ5LjU1NjM4aDBBOC4zMiw4LjMyLDAsMCwxLDE3LjUwNDY4LDE3LjkxNzQ5Wm0uODM0MTctNC45MDczOWgtLjAwMDFjLS4xMjU3MS4wNDE2My0uMjU0NzguMDgxODQtLjM4NjI5LjEyMDgyYTIzLjA2MTIxLDIzLjA2MTIxLDAsMCwwLTEuMTY0NjgtMi45MTM3MywyMy4wNTExMiwyMy4wNTExMiwwLDAsMCwxLjExOTM4LTIuODcxMjhjLjIzNTI0LjA2ODIuNDYzNjUuMTQuNjgzNzIuMjE1NzksMi4xMjg0Mi43MzI1OCwzLjQyNjY1LDEuODE1OTMsMy40MjY2NSwyLjY1MDYxQzIyLjAxNzUzLDExLjEwMTQ1LDIwLjYxNTM4LDEyLjI1NTc0LDE4LjMzODg1LDEzLjAxMDFaIiBmaWxsPSIjNjFkYWZiIi8+PHBhdGggZD0iTTExLjUsOC4xNTg1YTIuMDUzODYsMi4wNTM4NiwwLDEsMS0yLjA1MzgxLDIuMDUzODFBMi4wNTM4MSwyLjA1MzgxLDAsMCwxLDExLjUsOC4xNTg1IiBmaWxsPSIjNjFkYWZiIi8+PC9zdmc+" alt="" height="20" /> MDB React
            </NavbarBrand>
            <NavbarToggler />
            <div className="collapse navbar-collapse" id="reactNavbar">

              <NavbarNav className="ml-auto">
                <NavItem>
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/css">Tech</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/components">Blog</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/javascript">People</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/javascript">Services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/javascript">Contact us</NavLink>
                </NavItem>
              </NavbarNav>

            </div>
          </Navbar>
          <div className="start-page padding-style-page">
            <div className="jumbotron">
              <div className="container text-center">
                <div className="jumbotron-tenfins-section">
                <p>Agile Mobile and Web</p>
                <h2>Tenfins </h2>
                </div>
              </div>
            </div>
          </div>
           <div className="technology padding-style-page">
             <div className="container text-center">
                <h3>Technology</h3> 
                <h2>Mobile apps today can be developed with Native, Hybrid or Cross Platforms tools. 
                    Hybrid tools use embedded web browser controls and are slow 
                    Cross Platform tools use Native api's and are closer to Native performance
                    React Native and Google's new tool Flutter are Cross Platform tools.</h2>
                <div className="row">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-12">
                        <h4>Google Flutter is new tech that is coming on strong and will challenge React Native.
                         We think Flutter has the potential to be a better solution.  
                         </h4>
                         <h5>
                         "While it's still very early days, the team are onto something big, They have hit a sweet
                          spot of productivity and power, and have the momentum and backing to be successful.
                           The ability to write an app that runs on both iOS and Android,
                           with one code base, without compromise, using a highly productive 
                           language and set of libraries -- it's a compelling value proposition."
                         </h5>
                         <p className="">- Tim Sneath, 17-Year Microsoft Vet now leading Google's Flutter Team
                         </p>
                      </div>
                    </div>
                    </div>
                    <div className="col-md-9">
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F1BXg4wfB9pA%3Fwmode%3Dtransparent%26feature%3Doembed&amp;wmode=transparent&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1BXg4wfB9pA&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F1BXg4wfB9pA%2Fhqdefault.jpg&amp;key=0ae70bf4c11f11e09f134040d3dc5c07&amp;type=text%2Fhtml&amp;schema=youtube" scrolling="no" allowfullscreen="" width="640" height="360" frameborder="0"></iframe>
                      </div>

                    </div>
                </div>
             </div>
           </div>
           <div className="blog-section padding-style-page">
                <div className="container">
                  <div className="title-subtitle-section">
                    <h5>The Blog</h5>
                    <h2>Thoughts, musings, and ruminations.</h2>
                  </div>
                </div>
           </div>

           <div className="people-section padding-style-page">
               <div className="container">
                <div className="title-subtitle-section">
                  <h5>People</h5>
                  <h2> Success comes from People and Technology you can rely on 
                  We're based in Boulder, Colorado and can assist locally or remotely
                  We've got expertise in React Native, Flutter and Backends in C#, Dart and Java
                  .</h2>
                </div> 
              <div className="row">
                    <div className="col-md-9">
                          <div className="embed-responsive embed-responsive-16by9">
                             <iframe className="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FabSNo2P9mMM%3Fwmode%3Dtransparent%26feature%3Doembed&amp;wmode=transparent&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DabSNo2P9mMM&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FabSNo2P9mMM%2Fhqdefault.jpg&amp;key=0ae70bf4c11f11e09f134040d3dc5c07&amp;type=text%2Fhtml&amp;schema=youtube" scrolling="no" allowfullscreen="" width="640" height="360" frameborder="0"></iframe>
                          </div> 
                    </div>
                    <div className="col-md-3">
                      <h2>React Native</h2>
                      <p>Scaling to 80 Million Users </p>
                      <p>React Native is making inroads into mainstream Mobile cross platform development. </p>
                    </div>
                  
                    <div className="col-md-3">
                      <h2>Flutter vs React Native</h2>
                      <p>Scaling to 80 Million Users </p>
                      <p>Mobile developers compare Flutter and React Native </p>
                    </div>
                     <div className="col-md-9">
                          <div className="embed-responsive embed-responsive-16by9">
                             <iframe className="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FabSNo2P9mMM%3Fwmode%3Dtransparent%26feature%3Doembed&amp;wmode=transparent&amp;url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DabSNo2P9mMM&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FabSNo2P9mMM%2Fhqdefault.jpg&amp;key=0ae70bf4c11f11e09f134040d3dc5c07&amp;type=text%2Fhtml&amp;schema=youtube" scrolling="no" allowfullscreen="" width="640" height="360" frameborder="0"></iframe>
                      </div> 
                    </div>
                 </div>
              </div>
              </div>
              <div className="services-section padding-style-page">
                <div className="container">
                  <div className="title-subtitle-section">
                    <h5>Services</h5>
                    <h2>Contact us for Mobile and Web Development</h2>
                      <FormInline>
                        <Input label="Type your email" icon="envelope" group type="email" />
                        <Input label="Type your password" icon="lock" group type="password" />
                        <Button>Login</Button>
                      </FormInline>
                  </div>
                </div>
           </div>
          <main style={{marginTop: '4rem'}}>
            <Routes />
          </main>
          <Footer color="indigo">
            <p className="footer-copyright mb-0">
              &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
            </p>
          </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
