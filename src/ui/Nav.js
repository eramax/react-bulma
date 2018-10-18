import React from "react";
export default class Nav extends React.Component {
  state = {
    isActive: false,
    ltr: true
  };
  toggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  isActive = () => {
    return this.state.isActive ? "is-active" : "";
  };
  render() {
    return (
      <nav className="navbar ">
        <div className="navbar-brand ">
          <a className="navbar-item" href="http://bulma.io">
            <img
              src="http://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>

          <a
            className="navbar-item is-hidden-desktop"
            href="https://github.com/jgthms/bulma"
            target="_blank"
          >
            <span className="icon" style={{ color: "#333" }}>
              <i className="fab fa-github" />
            </span>
          </a>

          <a
            className="navbar-item is-hidden-desktop"
            href="https://twitter.com/jgthms"
            target="_blank"
          >
            <span className="icon" style={{ color: "#55acee" }}>
              <i className="fab fa-twitter" />
            </span>
          </a>

          <div className="navbar-burger burger" data-target="navMenubd-example">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenubd-example" className="navbar-menu">
          <div className="container">
            <div className="columns">
              <div className="column is-5">
                <div className="navbar-start">
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a
                      className="navbar-link  is-active"
                      href="/documentation/overview/start/"
                    >
                      Docs
                    </a>
                    <div className="navbar-dropdown ">
                      <a
                        className="navbar-item "
                        href="/documentation/overview/start/"
                      >
                        Overview
                      </a>
                      <a
                        className="navbar-item "
                        href="http://bulma.io/documentation/modifiers/syntax/"
                      >
                        Modifiers
                      </a>
                      <a
                        className="navbar-item "
                        href="http://bulma.io/documentation/columns/basics/"
                      >
                        Columns
                      </a>
                      <a
                        className="navbar-item "
                        href="http://bulma.io/documentation/layout/container/"
                      >
                        Layout
                      </a>
                      <a
                        className="navbar-item "
                        href="http://bulma.io/documentation/form/general/"
                      >
                        Form
                      </a>
                      <a
                        className="navbar-item "
                        href="http://bulma.io/documentation/elements/box/"
                      >
                        Elements
                      </a>

                      <a
                        className="navbar-item is-active"
                        href="http://bulma.io/documentation/components/breadcrumb/"
                      >
                        Components
                      </a>

                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div>
                          <p className="is-size-6-desktop">
                            <strong className="has-text-info">0.5.1</strong>
                          </p>

                          <small>
                            <a
                              className="bd-view-all-versions"
                              href="/versions"
                            >
                              View all versions
                            </a>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link " href="http://bulma.io/blog/">
                      Messages
                    </a>
                    <div
                      id="blogDropdown"
                      className="navbar-dropdown "
                      data-style="width: 18rem;"
                    >
                      <a
                        className="navbar-item"
                        href="/2017/08/03/list-of-tags/"
                      >
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">03 Aug 2017</small>
                          </p>
                          <p>New feature: list of tags</p>
                        </div>
                      </a>

                      <a
                        className="navbar-item"
                        href="/2017/08/01/bulma-bootstrap-comparison/"
                      >
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">01 Aug 2017</small>
                          </p>
                          <p>Bulma / Bootstrap comparison</p>
                        </div>
                      </a>

                      <a
                        className="navbar-item"
                        href="/2017/07/24/access-previous-bulma-versions/"
                      >
                        <div className="navbar-content">
                          <p>
                            <small className="has-text-info">24 Jul 2017</small>
                          </p>
                          <p>Access previous Bulma versions</p>
                        </div>
                      </a>

                      <a className="navbar-item" href="http://bulma.io/blog/">
                        More posts
                      </a>
                      <hr className="navbar-divider" />
                      <div className="navbar-item">
                        <div className="navbar-content">
                          <div className="level is-mobile">
                            <div className="level-left">
                              <div className="level-item">
                                <strong>Stay up to date!</strong>
                              </div>
                            </div>
                            <div className="level-right">
                              <div className="level-item">
                                <a
                                  className="button bd-is-rss is-small"
                                  href="http://bulma.io/atom.xml"
                                >
                                  <span className="icon is-small">
                                    <i className="fa fa-rss" />
                                  </span>
                                  <span>Subscribe</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {this.props.getDir() == "ltr" ? (
                    <a className="navbar-item " onClick={this.props.rtl}>
                      <div className="mlang">عربي</div>
                    </a>
                  ) : (
                    <a className="navbar-item " onClick={this.props.ltr}>
                      <div className="mlang">English</div>
                    </a>
                  )}
                </div>
              </div>
              <div className="column is-6">
                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="field is-grouped">
                      <div className="navbar-item has-dropdown is-hoverable control">
                        <div className="navbar-link ">Notifications</div>
                        <div id="moreDropdown" className="navbar-dropdown ">
                          <a
                            className="navbar-item "
                            href="http://bulma.io/extensions/"
                          >
                            <div className="level is-mobile">
                              <div className="level-left">
                                <div className="level-item">
                                  <p>
                                    <strong>Extensions</strong>
                                    <br />
                                    <small>
                                      Side projects to enhance Bulma
                                    </small>
                                  </p>
                                </div>
                              </div>
                              <div className="level-right">
                                <div className="level-item">
                                  <span className="icon has-text-info">
                                    <i className="fa fa-plug" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <p className="control">
                        <a
                          className="button is-primary"
                          href="https://github.com/"
                        >
                          <span className="icon">
                            <i className="fas fa-sign-out-alt" />
                          </span>
                          <span>Logout</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
