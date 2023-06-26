import React, { useEffect, useState } from "react";
import styles from "scss/layout/Navbar.module.scss";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
// import { IKImage } from "imagekitio-react";
import Logo from "../assets/logo.png";
import DropdownItem from "components/DropdownItem";
import { BiChevronDown } from "react-icons/bi";
import useMediaQuery from "hooks/useMediaQuery";
import Model from "../components/Model";
import { NavLink, Link } from "react-router-dom";
import { BsTelegram } from "react-icons/bs";

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const isBellow1024px = useMediaQuery("(max-width : 64em)");
  const sidebarRef = OutsideClickDetector(() => {
    setIsOpen(false);
  });
  const dropdownRef = OutsideClickDetector(() => {
    setIsHover(false);
  });

  const dropdownToggler = () => {
    setIsHover((val) => !val);
  };

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handler);

    return () => {
      document.removeEventListener("scroll", handler);
    };
  });

  return (
    <div
      className={`${styles.navbarWrapper} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <Link to="/">
            <img src={Logo} alt="" className={styles.logo} />
          </Link>

          <div
            className={`${styles.right} ${isOpen ? styles.show : ""}`}
            ref={sidebarRef}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              <IoClose color="white" />
            </button>

            <ul>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "active Navbar_navLink__lF6Im font-b  fs-20px white weight-4 pointer"
                    : "Navbar_navLink__lF6Im font-b fs-20px white weight-4 font-b pointer"
                }
              >
                Home
              </NavLink>
              <div
                className={`${styles.navLink} ${styles.isDropdown}`}
                ref={dropdownRef}
              >
                <button
                  className={`${styles.drodpownTitle} fs-20px white weight-4 pointer font-b pd-r`}
                  onMouseEnter={() =>
                    isBellow1024px ? null : setIsHover(true)
                  }
                  onMouseLeave={() =>
                    isBellow1024px ? null : setIsHover(false)
                  }
                  onClick={() => dropdownToggler()}
                >
                  Services <BiChevronDown color="white" />
                </button>
                <div
                  className={`${styles.dropdown} ${
                    isHover ? styles.active : ""
                  }`}
                  onMouseEnter={() =>
                    isBellow1024px ? null : setIsHover(true)
                  }
                  onMouseLeave={() =>
                    isBellow1024px ? null : setIsHover(false)
                  }
                >
                  <NavLink
                    to="/audit-service"
                    className={({ isActive }) =>
                      isActive ? "active pointer" : " pointer"
                    }
                  >
                    <DropdownItem title="Audits" icon="icons/automated.svg" />
                  </NavLink>

                  <NavLink
                    to="/pen-test"
                    className={({ isActive }) =>
                      isActive ? "active pointer" : " pointer"
                    }
                  >
                    <DropdownItem title="Pen Test" icon="icons/solidity.svg" />
                  </NavLink>
                  <NavLink
                    to="/management"
                    className={({ isActive }) =>
                      isActive ? "active pointer" : " pointer"
                    }
                  >
                    <DropdownItem
                      title="Management"
                      icon="icons/recommendation.svg"
                    />
                  </NavLink>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active pointer" : " pointer"
                    }
                  >
                    <DropdownItem
                      title="Consultation"
                      icon="icons/reporting.svg"
                    />
                  </NavLink>
                </div>
              </div>

              <a
                href="#about"
                className={`${styles.navLink} fs-20px white weight-4 pointer font-b`}
              >
                About Us
              </a>

              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "active Navbar_navLink__lF6Im  fs-20px white weight-4 pointer font-b"
                    : "Navbar_navLink__lF6Im fs-20px white weight-4 pointer font-b"
                }
              >
                Projects
              </NavLink>

              <a
                href="https://blockauditreport.medium.com/"
                target="_blank"
                rel="noreferrer"
                className={`${styles.navLink} fs-20px white weight-4 pointer font-b`}
              >
                Blogs
              </a>
            </ul>
          </div>

          <aside className="side-btn">
            <a
              href="https://t.me/BlockAuditReport"
              target="_blank"
              rel="noreferrer"
              className="full-withradius fs-20px white weight-4 pointer flex-btn desk-btn"
            >
              Telegram <BsTelegram />
            </a>
          </aside>

          <div className="flex-btn ham">
            <span className=" fs-28px white weight-4 pointer mob-btn">
              <a
                href="https://t.me/BlockAuditReport"
                target="_blank"
                rel="noreferrer"
              >
                <BsTelegram />
              </a>
            </span>
            <button
              className={styles.hamburger}
              onClick={() => setIsOpen(true)}
            >
              <FiMenu color="white" />
            </button>
          </div>
        </div>
      </div>

      <div className={`black-screen ${isOpen ? "show" : ""}`}></div>
      {modalOpen && <Model setOpenModal={setModalOpen} />}
    </div>
  );
}

export default Navbar;
