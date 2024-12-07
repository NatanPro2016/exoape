import React, { useContext, useEffect, useState } from "react";
import UpAnimtion from "./UpAnimtion";
import { motion, AnimatePresence } from "framer-motion";
import { PageTranstionContext } from "../context/PageTranstion";

const Nav = ({ color }: { color?: string }) => {
  const menuOpend = useContext(PageTranstionContext);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [settingVisible, setSettingVisible] = useState(
    window.innerWidth <= 750
  );
  const [navColor, setNavColor] = useState("#fff");
  const [isHover, setIsHover] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [number, setNumber] = useState(1);

  const handleOpen = () => {
    setNavOpen(!navOpen);
    menuOpend?.setMenuOpend(!menuOpend.menuOpend);
    if (!navOpen) {
      menuOpend?.setscrollPos(window.scrollY);
    }
  };

  const handleScroll = () => {
    // sections have are different backgrounds so the navgation color had to change opposite color to background

    // height are different in different pages the navgation bar color changes
    if (window.location.pathname === "/") {
      const hero = document.querySelector(".hero");
      const work = document.querySelector(".work");
      const work_motion = document.querySelector(".work-motion");
      const gallary = document.querySelector(".gallary");
      const spread = document.querySelector(".spread");

      const hero_height = hero ? hero?.clientHeight - 500 : 0;
      const work_height = work ? hero_height + work?.clientHeight : 0;
      const work_motion_height = work_motion
        ? work_height + work_motion?.clientHeight
        : 0;
      const gallary_height =
        gallary && spread
          ? work_motion_height + gallary?.clientHeight + spread?.clientHeight
          : 0;

      if (navOpen) {
        setIsMobile(true);
        setNavColor("#fff");
      } else {
        if (window.innerWidth >= 750) {
          setIsMobile(window.scrollY >= 20);
        }
        if (window.scrollY <= hero_height) {
          setNavColor("#fff");
        } else if (window.scrollY <= work_height) {
          setNavColor("#000");
        } else if (window.scrollY <= work_motion_height) {
          setNavColor("#fff");
        } else if (window.scrollY <= gallary_height) {
          setNavColor("#000");
        } else {
          setNavColor("#e0ccbb");
        }
      }
    } else if (window.location.pathname === "/contact") {
      const contact = document.querySelector(".contact");
      const contact_height = contact
        ? contact?.clientHeight - 0.05 * window.innerWidth
        : 0;
      if (navOpen) {
        setIsMobile(true);
        setNavColor("#fff");
      } else {
        if (window.innerWidth >= 750) {
          setIsMobile(window.scrollY >= 20);
        }
        if (window.scrollY <= contact_height) {
          setNavColor("#000");
        } else {
          setNavColor("#e0ccbb");
        }
      }
    }
    if (window.location.pathname === "/studio") {
      const hero = document.querySelector(".studio .studio_hero");
      const partners = document.querySelector(".studio .partners");
      const how = document.querySelector(".studio .how");
      const what_we_believe = document.querySelector(
        ".studio .what-we-believe"
      );
      const the_ape = document.querySelector(".studio .the-ape");
      const recognition = document.querySelector(".studio .recognition");

      const hero_height = hero
        ? hero?.clientHeight - 0.05 * window.innerWidth
        : 0;

      const partners_height = partners
        ? hero_height + partners.clientHeight
        : 0;
      const how_height = how ? partners_height + how?.clientHeight : 0;
      const what_height = what_we_believe
        ? how_height + what_we_believe?.clientHeight
        : 0;
      const the_ape_height = the_ape ? what_height + the_ape?.clientHeight : 0;
      const recognition_height = recognition
        ? the_ape_height + recognition?.clientHeight
        : 0;

      if (navOpen) {
        setIsMobile(true);
        setNavColor("#fff");
      } else {
        if (window.innerWidth >= 750) {
          setIsMobile(window.scrollY >= 20);
        }
        if (window.scrollY <= hero_height) {
          setNavColor("#fff");
        } else if (window.scrollY <= partners_height) {
          setNavColor("#000");
        } else if (window.scrollY <= how_height) {
          setNavColor("#fff");
        } else if (window.scrollY <= what_height) {
          setNavColor("#000");
        } else if (window.scrollY <= the_ape_height) {
          setNavColor("#fff");
        } else if (window.scrollY <= recognition_height) {
          setNavColor("#000");
        } else {
          setNavColor("#e0ccbb");
        }
      }
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 750);
    setSettingVisible(window.innerWidth <= 750);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navOpen]);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className={`fixed flex w-full items-start z-50 top-0 right-0`}>
      <nav
        className={`flex absolute top-0 w-full mx-auto md:px-[3.5vw] md:py-[0.3vw]  px-[8vw] py-[10vw] justify-between items-center z-50 text-${
          color ?? "white"
        }`}
      >
        <a href="/" className="logo text-[2vw]">
          {isMobile || settingVisible ? (
            <svg
              viewBox="0 0 64 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-[3vw] w-[12vw] transition-all duration-300"
            >
              <g clipPath="url(#clip0_187_6)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="transition-all duration-300"
                  d="M58.1473 10.4536C58.1889 10.3412 58.2551 10.3412 58.2944 10.4536L59.5768 13.9755C59.7492 14.3768 60.0634 14.6975 60.4571 14.8741L63.9193 16.1771C64.0272 16.217 64.0272 16.2844 63.9193 16.3268L60.4571 17.6298C60.0625 17.8052 59.748 18.1263 59.5768 18.5284L58.2944 22.0403C58.2551 22.1527 58.1889 22.1527 58.1473 22.0403L56.8673 18.5184C56.6961 18.1163 56.3815 17.7952 55.987 17.6198L52.5248 16.3168C52.4169 16.2744 52.4169 16.207 52.5248 16.1671L55.987 14.8641C56.3807 14.6875 56.6949 14.3668 56.8673 13.9655L58.1473 10.4536ZM50.2787 7.40835C50.1752 7.64899 49.986 7.84076 49.7491 7.94501L47.6723 8.72877C47.6085 8.75373 47.6085 8.79367 47.6723 8.81863L49.7491 9.5999C49.9867 9.70432 50.1762 9.89718 50.2787 10.1391L51.0462 12.2532C51.0707 12.3181 51.11 12.3181 51.1345 12.2532L51.9044 10.1391C52.0068 9.89792 52.1952 9.70527 52.4316 9.5999L54.5085 8.81114C54.5747 8.78618 54.5747 8.74625 54.5085 8.72128L52.4316 7.93752C52.1959 7.83234 52.0077 7.64077 51.9044 7.40086L51.1345 5.28669C51.11 5.21929 51.0707 5.21929 51.0462 5.28669L50.2787 7.40835ZM54.2289 45.7206C53.8734 53.9751 46.4266 61.049 42.0179 64.531C41.0528 65.2897 39.8683 65.7022 38.6488 65.7042C38.01 65.7045 37.3761 65.5913 36.7755 65.3697C24.5743 60.8768 9.3816 50.6778 1.74604 43.4167C1.13958 42.8432 0.668906 42.137 0.369468 41.3514C0.07003 40.5657 -0.050365 39.7212 0.0173654 38.8814C1.34635 21.908 15.5828 0 28.8849 0C36.5377 0 38.4478 2.57345 41.9223 9.93188C43.0625 12.3356 44.7298 14.3924 46.3359 16.3792C50.139 21.0619 53.7312 25.4874 48.2975 32.7834C52.4316 36.7896 54.4251 41.1428 54.2289 45.7206ZM45.6812 33.1454C46.2844 32.6462 46.9367 31.4655 47.253 30.5919C44.3375 32.0122 43.033 30.0353 40.8777 30.4995C37.3591 31.2484 36.0742 32.8933 31.2242 31.7875C32.7199 32.8309 34.8065 34.0939 36.5131 34.6405C34.3652 36.852 32.9945 39.7874 32.2197 43.6863C34.2401 43.9634 36.5818 43.3319 39.1956 42.7403C38.1952 41.1004 37.7048 38.9088 37.5307 36.3803C38.5154 38.6814 40.0773 40.6785 42.0596 42.1712C45.181 41.672 48.6187 41.647 52.2967 43.4192C50.5092 36.2505 45.6812 33.1454 45.6812 33.1454ZM6.56424 23.0038C7.4486 24.7677 8.38527 26.5075 9.37424 28.2231C12.6894 20.8297 17.1668 13.4963 24.486 7.60304C17.8215 14.9041 13.7854 23.0937 11.3457 31.5005C11.8819 32.3541 12.4311 33.2003 12.9934 34.039C15.2419 27.1523 18.5301 20.2182 24.4566 14.2551C19.197 21.4563 16.3797 29.1916 15.0163 36.9694C15.5631 37.7182 16.1247 38.4845 16.6935 39.2333C17.9195 33.048 20.0283 26.7355 24.4296 20.9196C20.6879 27.8212 19.0769 34.8976 18.7262 41.8192C20.7761 44.3436 22.9527 46.7798 25.256 49.1277C27.144 51.0497 29.0934 52.8852 31.104 54.6341L31.2315 54.6815C28.1739 49.5645 25.1162 43.3593 23.6303 37.853C25.4031 33.36 27.8551 28.5127 30.7681 26.9376C33.6811 25.3626 37.2316 28.9969 41.1082 28.4153C43.1556 28.1083 45.5537 24.5764 48.1651 28.2356C52.5027 23.8675 41.7752 16.1521 38.0162 7.01896C36.3783 3.02524 33.0754 1.83212 28.1714 2.06176C16.9461 2.57096 7.3636 21.2341 6.56424 23.0038ZM38.2859 63.5351C24.5148 53.9191 13.1953 41.0981 5.26712 26.1364C4.5663 27.9933 3.9695 29.8892 3.47961 31.815C7.241 38.18 10.512 41.9415 15.9996 47.7724C10.5856 44.0058 6.38524 39.5129 2.77098 34.97C2.60914 35.8187 2.36884 37.1765 2.17023 38.9038C2.11006 39.4339 2.17351 39.971 2.35542 40.4715C2.53734 40.972 2.8326 41.4217 3.21724 41.7843C13.3628 51.3456 25.2869 58.7414 38.2859 63.5351ZM52.336 45.8354C47.2848 42.0539 38.6856 45.9652 31.2291 46.5643C37.1629 48.3889 43.6657 45.5159 49.3911 47.3131C48.577 51.217 46.765 55.2856 44.5705 59.4166C48.2362 55.8047 51.2694 51.1695 52.336 45.8354ZM43.2292 36.7896C42.1749 36.5145 41.1567 36.1123 40.1961 35.5915L39.2594 37.3388C39.9239 37.6782 42.8369 38.135 44.0629 38.0477C44.2385 38.0358 44.4028 37.9553 44.5214 37.823C45.3159 36.9419 45.9411 35.8262 46.5247 34.8003C45.5983 35.557 44.5956 36.2113 43.5333 36.7522C43.4397 36.8017 43.3317 36.815 43.2292 36.7896Z"
                  fill={navColor == "#000" ? navColor : "none"}
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M58.1443 10.4537C58.186 10.3413 58.2522 10.3413 58.2914 10.4537L59.5714 13.9756C59.7449 14.3764 60.0599 14.6962 60.4541 14.8717L63.9139 16.1772C64.0242 16.2171 64.0242 16.2845 63.9139 16.3269L60.4541 17.6299C60.0595 17.806 59.7444 18.1268 59.5714 18.5285L58.2914 22.0404C58.2522 22.1503 58.186 22.1503 58.1443 22.0404L56.8644 18.5185C56.6938 18.1151 56.3779 17.7935 55.9816 17.6199L52.5218 16.3169C52.4115 16.2745 52.4115 16.2071 52.5218 16.1672L55.9816 14.8617C56.3772 14.6883 56.6929 14.3678 56.8644 13.9656L58.1443 10.4537ZM50.2758 7.40595C50.1724 7.64725 49.9832 7.83984 49.7462 7.9451L47.6693 8.72637C47.6031 8.75133 47.6031 8.79376 47.6693 8.81623L49.7462 9.6C49.9832 9.70526 50.1724 9.89785 50.2758 10.1392L51.0433 12.2508C51.0678 12.3182 51.107 12.3182 51.1316 12.2508L51.899 10.1392C52.0016 9.89728 52.1911 9.70442 52.4287 9.6L54.508 8.81124C54.5742 8.78877 54.5742 8.74634 54.508 8.72138L52.4311 7.94011C52.1935 7.83569 52.0041 7.64283 51.9015 7.40096L51.134 5.28928C51.1095 5.22188 51.0703 5.22188 51.0457 5.28928L50.2758 7.40595ZM45.6807 33.143C46.2815 32.6438 46.9362 31.4656 47.25 30.592C44.3346 32.0122 43.0326 30.0354 40.8748 30.4996C37.3561 31.2485 36.0713 32.8909 31.2188 31.7851C32.7169 32.831 34.8012 34.094 36.5102 34.6406C34.3622 36.8521 32.9891 39.785 32.2143 43.6864C34.2347 43.9635 36.5789 43.3295 39.1927 42.7379C38.1898 41.098 37.6994 38.9089 37.5253 36.3779C38.5108 38.6799 40.0735 40.6778 42.0567 42.1713C45.1781 41.6721 48.6158 41.6471 52.2938 43.4193C50.5038 36.2506 45.6807 33.143 45.6807 33.143ZM6.56377 23.0014C7.44976 24.7686 8.38643 26.5084 9.37378 28.2207C12.6889 20.8298 17.1663 13.4939 24.4855 7.60064C17.821 14.9042 13.7849 23.0938 11.3452 31.4981C11.8797 32.3542 12.4314 33.2004 12.9929 34.0391C15.239 27.1524 18.5271 20.2183 24.4561 14.2552C19.1965 21.4564 16.3792 29.1917 15.0134 36.9695C15.5627 37.7299 16.1225 38.4846 16.693 39.2334C17.919 33.0481 20.0278 26.7331 24.4291 20.9197C20.6874 27.8188 19.0764 34.8852 18.7258 41.8193C20.7756 44.3404 22.9522 46.7757 25.2555 49.1253C27.1435 51.0473 29.0929 52.8828 31.1035 54.6317C31.1452 54.6467 31.1869 54.6666 31.231 54.6791C28.1734 49.5622 25.1157 43.3594 23.6298 37.8531C25.405 33.3601 27.8571 28.5103 30.77 26.9377C33.683 25.3652 37.2335 28.997 41.1102 28.4154C43.1576 28.1084 45.5557 24.5739 48.1671 28.2357C52.5047 23.8676 41.7747 16.1522 38.0182 7.00408C36.3802 3.01036 33.0774 1.81973 28.1734 2.04937C16.9431 2.57105 7.36067 21.2342 6.56132 23.0014H6.56377ZM38.283 63.5352C24.5121 53.9189 13.1928 41.098 5.26421 26.1365C4.56222 27.9933 3.96459 29.8892 3.47423 31.8151C7.23807 38.1801 10.5091 41.9391 15.9942 47.7725C10.5826 44.0059 6.38232 39.513 2.77051 34.9701C2.60867 35.8188 2.36837 37.1766 2.16976 38.9039C2.10919 39.434 2.17246 39.9712 2.35439 40.4718C2.53633 40.9723 2.83181 41.4221 3.21677 41.7844C13.3606 51.3454 25.2831 58.7412 38.2806 63.5352H38.283ZM52.3355 45.833C47.2819 42.054 38.6827 45.9653 31.2286 46.5644C37.1624 48.389 43.6652 45.516 49.3906 47.3132C48.5766 51.2146 46.7645 55.2832 44.57 59.4142C48.2333 55.8023 51.2664 51.1696 52.333 45.833H52.3355ZM43.2287 36.7897C42.175 36.5128 41.157 36.1107 40.1956 35.5916L39.2589 37.3389C39.9234 37.6783 42.8364 38.1351 44.0624 38.0478C44.238 38.0359 44.4023 37.9554 44.5209 37.8231C45.3154 36.942 45.9406 35.8263 46.5242 34.8004C45.6 35.562 44.5989 36.2213 43.5377 36.7673C43.4407 36.8125 43.331 36.8205 43.2287 36.7897Z"
                  fill={navColor == "#000" ? "none" : navColor}
                  className="transition-all duration-300"
                />
              </g>
              <defs>
                <clipPath id="clip0_187_6">
                  <rect width="64" height="66" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <>
              <strong> exo</strong>
              <em> ape</em>
            </>
          )}
        </a>
        {isMobile || settingVisible ? (
          <div
            className={`flex gap-[0.7vw] p-[3vw] pr-0 cursor-pointer text-[${navColor}]`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={handleOpen}
          >
            <p
              className={`md:text-[0.9vw] text-[3.7vw] transition-all duration-300`}
              style={{ color: navColor }}
            >
              {navOpen ? "Close" : "Menu"}
            </p>
            <motion.svg
              className={`md:w-[1.4vw] w-[3.4vw] origin-center transition-all duration-300 ${
                isHover && "rotate-90"
              }`}
              viewBox="0 0 31 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                className=" transition-all duration-300"
                d="M0.867181 1.00789C0.637191 1.00789 0.41662 0.954846 0.253992 0.860433C0.0913637 0.76602 0 0.637968 0 0.504447C0 0.370926 0.0913637 0.242874 0.253992 0.148461C0.41662 0.0540478 0.637191 0.00100681 0.867181 0.00100681L30.1328 0C30.3628 3.97922e-09 30.5834 0.0530407 30.746 0.147454C30.9086 0.241867 31 0.36992 31 0.50344C31 0.636961 30.9086 0.765013 30.746 0.859426C30.5834 0.953839 30.3628 1.00688 30.1328 1.00688L0.867181 1.00789ZM0.867181 9.50394C0.637191 9.50394 0.41662 9.4509 0.253992 9.35649C0.0913637 9.26208 0 9.13402 0 9.0005C0 8.86698 0.0913637 8.73893 0.253992 8.64452C0.41662 8.5501 0.637191 8.49706 0.867181 8.49706L30.1328 8.49505C30.3628 8.49505 30.5834 8.54809 30.746 8.6425C30.9086 8.73692 31 8.86497 31 8.99849C31 9.13201 30.9086 9.26006 30.746 9.35448C30.5834 9.44889 30.3628 9.50193 30.1328 9.50193L0.867181 9.50394ZM0.867181 18C0.637191 18 0.41662 17.947 0.253992 17.8525C0.0913637 17.7581 0 17.6301 0 17.4966C0 17.363 0.0913637 17.235 0.253992 17.1406C0.41662 17.0462 0.637191 16.9931 0.867181 16.9931L30.1328 16.9911C30.3628 16.9911 30.5834 17.0441 30.746 17.1386C30.9086 17.233 31 17.361 31 17.4945C31 17.6281 30.9086 17.7561 30.746 17.8505C30.5834 17.9449 30.3628 17.998 30.1328 17.998L0.867181 18Z"
                fill={navColor}
                initial={{ opacity: 0, pathLength: 0 }}
                transition={{ duration: 0.4 }}
                animate={{ opacity: 1, pathLength: 1 }}
              />
            </motion.svg>
          </div>
        ) : (
          <ul className="flex gap-[3vw] text-[0.9vw] p-[3vw] pr-0">
            <li>
              <a href="/"> Home</a>
            </li>
            <li>
              <a href="/works"> Work</a>
            </li>
            <li>
              <a href="/studio"> Studio</a>
            </li>

            <li>
              <a href="/contact"> Contanct</a>
            </li>
          </ul>
        )}
      </nav>
      <AnimatePresence>
        {navOpen && (
          <motion.div
            className="flex justify-center overflow-hidden w-[107vw] h-screen items-center gap-[16vw] -ml-[7vw] origin-top-right bg-dark-blue"
            transition={{
              duration: 0.8,
            }}
            exit={{ height: 0, scale: 1.2 }}
            initial={{ height: 0, scale: 1.2 }}
            animate={{ scale: 1, height: "100vh" }}
          >
            {!settingVisible && (
              <div className="overflow-hidden w-[21vw] h-[31vw]">
                <AnimatePresence>
                  {number === 1 && (
                    <motion.img
                      src="./images/black-women.webp"
                      alt=""
                      className="w-[21vw] h-[31vw] object-cover"
                      transition={{ ease: "easeIn", duration: 0.8 }}
                      initial={{ rotate: "20deg", scale: 1.2 }}
                      animate={{ rotate: "0deg", scale: 1 }}
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {number === 2 && (
                    <motion.img
                      src="./images/computer.webp"
                      alt=""
                      className="w-[21vw] h-[31vw] object-cover "
                      transition={{ ease: "easeIn", duration: 0.5 }}
                      initial={{ rotate: "20deg", scale: 1.2 }}
                      animate={{ rotate: "0deg", scale: 1 }}
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {number === 3 && (
                    <motion.img
                      src="./images/awwwards annual nominee.webp"
                      alt=""
                      className="w-[21vw] h-[31vw] object-cover"
                      transition={{ ease: "easeIn", duration: 0.8 }}
                      initial={{ rotate: "20deg", scale: 1.2 }}
                      animate={{ rotate: "0deg", scale: 1 }}
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {number === 4 && (
                    <motion.img
                      src="./images/man-using-computer.webp"
                      alt=""
                      className="w-[21vw] h-[31vw] object-cover"
                      transition={{ ease: "easeIn", duration: 0.8 }}
                      initial={{ rotate: "20deg", scale: 1.2 }}
                      animate={{ rotate: "0deg", scale: 1 }}
                    />
                  )}
                </AnimatePresence>
              </div>
            )}

            <div className="flex flex-col text-sand-4 md:text-[3.6vw] text-[16vw]">
              <a
                href="/"
                className="flex overflow-hidden h-[18vw] md:h-[5vw] "
                onMouseEnter={() => setNumber(3)}
              >
                <UpAnimtion
                  content="Home"
                  className={`md:text-[3.6vw] text-[16vw] ${
                    !settingVisible && "hover-line"
                  }`}
                />
              </a>
              <a
                href="/works"
                className="flex overflow-hidden h-[18vw] cursor-pointer md:h-[5vw]"
                onMouseEnter={() => setNumber(1)}
              >
                <UpAnimtion
                  content="Work"
                  className={settingVisible ? "" : "hover-line"}
                />
              </a>
              <a
                href="/studio"
                className="flex overflow-hidden h-[18vw] md:h-[5vw]"
                onMouseEnter={() => setNumber(2)}
              >
                <UpAnimtion
                  content="Studio"
                  className={settingVisible ? " " : "hover-line"}
                />
              </a>
              <a
                href="/contact"
                className="flex overflow-hidden h-[18vw] hover-line md:h-[5vw]"
                onMouseEnter={() => setNumber(4)}
              >
                <UpAnimtion
                  content="Contact"
                  className={settingVisible ? "" : "hover-line"}
                />
              </a>
              {!settingVisible && (
                <ul className="flex flex-col mt-[2vw] text-sand-6 text-[1.2vw]">
                  <li>
                    <a href="#" className="">
                      Behance
                    </a>
                  </li>
                  <li>
                    <a href="#"> Dribbble</a>
                  </li>
                  <li>
                    <a href="#"> Twitter</a>
                  </li>
                  <li>
                    <a href="#"> Instagram</a>
                  </li>
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
