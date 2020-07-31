import React, { useContext } from "react"
import { Container } from "react-bootstrap"
import { Link } from "react-scroll"
import PortfolioContext from "../../context/context"

const Footer = () => {
  const { footer } = useContext(PortfolioContext)
  const { networks } = footer

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
            <p style={{ marginTop: "-2rem" }}>Scroll to top</p>
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map(network => {
              const { id, name, url } = network
              return (
                <a
                  key={id}
                  href={
                    url ||
                    "https://www.linkedin.com/public-profile/in/jeroen-theunissen-developer"
                  }
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || "refresh"} fa-inverse`} />
                </a>
              )
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} -{" "}
          <a
            href="https://www.linkedin.com/public-profile/in/jeroen-theunissen-developer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jeroen Theunissen
          </a>
        </p>
      </Container>
    </footer>
  )
}

export default Footer
