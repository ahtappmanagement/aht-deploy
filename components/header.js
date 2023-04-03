import Image from "next/image";
import Link from "next/link";

import Logo from "../assets/Logo.jpg";
import logos from "../assets/logos/index";
import brands from "../assets/brands/index";

import { BiSearchAlt2 } from "react-icons/bi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { MdArrowDropDown, MdOutlineArrowRight } from "react-icons/md";
import { products } from "../server/api";
import {
  achievementLogos,
  achievementMobileView,
  achievementStyle,
  achievementLogosMobileView,
  productMobileView,
  productStyle,
  navbarItemHover,
  eventsNew,
  brandMobileView,
  downArrow,
  menuT,
  toggleFirstRow,
  closeMenu,
  navItemListPhoneView,
  navItemPhoneView,
  navtailwindstyles,
  logo,
  navItemDeskViewWrapper,
  deskViewNavItems,
  navItemListSubList,
  navItemListInNavbarDesk,
  achievementSubList,
  brandsEventSubList,
  brandImg,
  searchInputIcon,
  searIconDesk,
  searchInputDesk,
  searchWrapperMScreen,
  searchIconMScreen,
  socialMediaWrapper,
  burgerMenu,
  flexCenter,
} from "./tailwindstyles";
import { useRouter } from "next/router";

const Header = () => {
  const { IFS, SEDEX, KOSHER, USDA, FDA, ORGANIC, HALAL, KSTAR, FSSC } = logos;
  const { kindKids, majestic, peachFull, queen } = brands;

  const [menuToggle, setMenuToggle] = useState(false);
  const [product, setProduct] = useState(false);
  const [achievement, setAchievement] = useState(false);
  const [aboutState, setAbout] = useState(false);
  const [bulk, setBulk] = useState(false);
  const [brand, setBrand] = useState(false);
  const [newsState, setNews] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const closeMenues = () => {
    setProduct(false);
    setAbout(false);
    setAchievement(false);
    setBrand(false);
    setNews(false);
    setBulk(false);
    setMenuToggle(false);
  };

  const handleSearch = () => {
    router.push(`/${search}`);
  };

  return (
    <>
      {menuToggle ? (
        <div className={menuT}>
          <div className={toggleFirstRow}>
            <div
              id="PRODUCTS"
              onClick={() => setProduct(!product)}
              className={navItemPhoneView}
            >
              PRODUCTS BULK/FOOD SERVICE
            </div>
            <button className={closeMenu} onClick={() => closeMenues()}>
              <IoMdClose />
            </button>
          </div>

          {product && (
            <div className="shadow-inner">
              <Link
                href={`/${products}/category/5&type=bulk`}
                className={productMobileView}
                onClick={() => closeMenues()}

              >
                NUTS <MdOutlineArrowRight />
              </Link>
              <Link
                href={`/${products}/category/1&type=bulk`}
                className={productMobileView}
                onClick={() => closeMenues()}

              >
                SUN-DRIED FRUITS <MdOutlineArrowRight />
              </Link>

              <Link
                href={`/${products}/category/2&type=bulk`}
                className={productMobileView}
                onClick={() => closeMenues()}

              >
                AIR-DRIED FRUITS <MdOutlineArrowRight />
              </Link>
              <Link
                href={`/${products}/category/3&type=bulk`}
                className={productMobileView}
                onClick={() => closeMenues()}

              >
                FREEZE-DRIED FRUITS & VEG
                <MdOutlineArrowRight />
              </Link>
              <Link
                href={`/${products}/category/6&type=bulk`}
                className={productMobileView}
                onClick={() => closeMenues()}

              >
                SAFFRON <MdOutlineArrowRight />
              </Link>
            </div>
          )}

          <div className={navItemListPhoneView}>
            <div onClick={() => setBulk(!bulk)} className={navItemPhoneView}>
              PRODUCTS PRIVATE LABLE
            </div>
          </div>
          {/* BULK PRODUCT TOGGLE  */}

          {bulk && (
            <div className=" shadow-inner">
              <Link
                href={`/${products}/category/5&type=retail`}
                className={productMobileView}
                onClick={() => closeMenues()}

              >
                NUTS <MdOutlineArrowRight />
              </Link>
              <Link
                href={`/${products}/category/1&type=retail`}
                className={productMobileView}
                onClick={() => closeMenues()}

              >
                SUN-DRIED FRUITS <MdOutlineArrowRight />
              </Link>

              <Link
                href={`/${products}/category/2&type=retail`}
                className={productMobileView}
                onClick={() => closeMenues()}

              >
                AIR-DRIED FRUITS
                <MdOutlineArrowRight />
              </Link>
              <Link
                href={`/${products}/category/3&type=retail`}
                className={productMobileView}
                onClick={() => closeMenues()}

              >
                FREEZE-DRIED FRUITS & VEG
                <MdOutlineArrowRight />
              </Link>
              <Link
                href={`/${products}/category/6&type=retail`}
                className={productMobileView}
                onClick={() => closeMenues()}

              >
                SAFFRON <MdOutlineArrowRight />
              </Link>
            </div>
          )}

          <div className={navItemListPhoneView}>
            <div
              onClick={() => setAchievement(!achievement)}
              className={navItemPhoneView}
            >
              ACHIEVEMENTS
            </div>
          </div>
          {/* ACHIVEMENT TOGGLE  */}

          {achievement && (
            <div className="shadow-inner">
              <Link href="#" className={achievementMobileView}>
                <Image
                  src={IFS}
                  alt={"IFS"}
                  className={achievementLogosMobileView}
                />
                International Featured Standard
              </Link>
              <Link href="#" className={achievementMobileView}>
                <Image
                  src={SEDEX}
                  alt={"SEDEX"}
                  className={achievementLogosMobileView}
                />
                Supplier Ethical Data Exchange
              </Link>
              <Link href="#" className={achievementMobileView}>
                <Image
                  src={KOSHER}
                  alt={"KOSHER CERTIFIED"}
                  className={achievementLogosMobileView}
                />
                KOSHER CERTIFIED
              </Link>
              <Link href="#" className={achievementMobileView}>
                <Image
                  src={USDA}
                  alt={"USDA ORGANIC"}
                  className={achievementLogosMobileView}
                />
                USDA ORGANIC
              </Link>
              <Link href="#" className={achievementMobileView}>
                <Image
                  src={FDA}
                  alt={"Food and Drug Administration"}
                  className={achievementLogosMobileView}
                />
                Food and Drug Administration
              </Link>
              <Link href="#" className={achievementMobileView}>
                <Image
                  src={ORGANIC}
                  alt={"ORGANIC"}
                  className={achievementLogosMobileView}
                />
                ORGANIC
              </Link>
              <Link href="#" className={achievementMobileView}>
                <Image
                  src={HALAL}
                  alt={"HALAL CERTIFIED"}
                  className={achievementLogosMobileView}
                />
                HALAL CERTIFIED
              </Link>
              <Link href="#" className={achievementMobileView}>
                <Image
                  src={KSTAR}
                  alt={"K-STAR"}
                  className={achievementLogosMobileView}
                />
                K-STAR
              </Link>
              <Link href="#" className={achievementMobileView}>
                <Image
                  src={FSSC}
                  alt={"FSSC"}
                  className={achievementLogosMobileView}
                />
                Food Safety System Certification
              </Link>
            </div>
          )}

          <div className={navItemListPhoneView}>
            <div onClick={() => setBrand(!brand)} className={navItemPhoneView}>
              BRANDS
            </div>
          </div>
          {/* BRAND TOGGLE  */}
          {brand && (
            <div className="shadow-inner">
              <Link href={`#`} className={brandMobileView}>
                <Image src={majestic} alt="majestic" className={brandImg} />
              </Link>
              <Link href={`#`} className={brandMobileView}>
                <Image src={peachFull} alt="peachFull" className={brandImg} />
              </Link>
              <Link href={`#`} className={brandMobileView}>
                <Image src={kindKids} alt="kindKids" className={brandImg} />
              </Link>
              <Link href={`#`} className={brandMobileView}>
                <Image src={queen} alt="queen" className={brandImg} />
              </Link>
            </div>
          )}

          <div className={navItemListPhoneView}>
            <div
              onClick={() => setNews(!newsState)}
              className={navItemPhoneView}
            >
              NEWS AND EVENTS
            </div>
          </div>

          {/* EVENTS AND NEWS TOGGLE  */}
          {newsState && (
            <div className="shadow-inner">
              <Link href={`/event-news`} className={eventsNew}>
                Events
              </Link>

              <Link href={`/event-news`} className={eventsNew}>
                News
              </Link>
            </div>
          )}

          <div className={navItemListPhoneView}>
            <div
              onClick={() => setAbout(!aboutState)}
              className={navItemPhoneView}
            >
              ABOUT US
            </div>
          </div>

          {/* ABOUT TOGGLE  */}
          {aboutState && (
            <div className="shadow-inner">
              <a href={`/about`} className={productMobileView}
                onClick={() => closeMenues()}
              >
                ABOUT US
              </a>

              <a href={`/e-catalogue`} className={productMobileView}
                onClick={() => closeMenues()}
              >
                CATALOGUE
              </a>

              <a href={`/factory`} className={productMobileView}
                onClick={() => closeMenues()}
              >
                FACTORIES
              </a>

              <a href={`/quality-food-safety`} className={productMobileView}
                onClick={() => closeMenues()}
              >
                QUALITY AND FOOD SAFETY
              </a>
              <a href={`/custom-packing`} className={productMobileView}
                onClick={() => closeMenues()}
              >
                CUSTOM PACKING
              </a>
              <a href={`/research-development`} className={productMobileView}
                onClick={() => closeMenues()}
              >
                R & D
              </a>
              <a href={`/FAQ`} className={productMobileView}
                onClick={() => closeMenues()}
              >
                FAQ
              </a>
            </div>
          )}
          <a href={`/contact`} className={navItemListPhoneView}>
            CONTACT
          </a>
        </div>
      ) : null}

      {/* CONTACT LINK */}

      <nav className={navtailwindstyles}>
        <Link href="/">
          <Image src={Logo} alt="AHT FOODS" className={logo} />
        </Link>

        <div className={navItemDeskViewWrapper}>
          {/* NAVIGATION LINKS */}
          <div className={navItemListInNavbarDesk}>
            <div className={navbarItemHover}>
              <div className={flexCenter}>
                <div className={deskViewNavItems}>
                  {" "}
                  PRODUCTS{" "}
                  <span>
                    {" "}
                    <MdArrowDropDown />{" "}
                  </span>
                </div>
                <div className="text-xs">BULK/FOOD SERVICE</div>
              </div>
              <div className={navItemListSubList}>
                <Link
                  href={`/${products}/category/5&type=bulk`}
                  className={productStyle}
                >
                  NUTS <MdOutlineArrowRight />
                </Link>
                <Link
                  href={`/${products}/category/1&type=bulk`}
                  className={productStyle}
                >
                  SUN-DRIED FRUITS FRUITS
                  <MdOutlineArrowRight />
                </Link>
                <Link
                  href={`/${products}/category/2&type=bulk`}
                  className={productStyle}
                >
                  AIR-DRIED FRUITS
                  <MdOutlineArrowRight />
                </Link>
                <Link
                  href={`/${products}/category/3&type=bulk`}
                  className={productStyle}
                >
                  FREEZE-DRIED FRUITS & VEG
                  <MdOutlineArrowRight />
                </Link>
                <Link
                  href={`/${products}/category/6&type=bulk`}
                  className={productStyle}
                >
                  SAFFRON <MdOutlineArrowRight />
                </Link>
              </div>
            </div>

            <div className={navbarItemHover}>
              <div className={flexCenter}>
                <div className={deskViewNavItems}>
                  {" "}
                  PRODUCTS{" "}
                  <span>
                    {" "}
                    <MdArrowDropDown />{" "}
                  </span>
                </div>
                <div className="text-xs">PRIVATE LABEL</div>
              </div>
              <div className={navItemListSubList}>
                <Link
                  href={`/${products}/category/5&type=retail`}
                  className={productStyle}
                >
                  NUTS <MdOutlineArrowRight />
                </Link>
                <Link
                  href={`/${products}/category/1&type=retail`}
                  className={productStyle}
                >
                  SUN-DRIED FRUITS <MdOutlineArrowRight />
                </Link>
                <Link
                  href={`/${products}/category/2&type=retail`}
                  className={productStyle}
                >
                  AIR-DRIED FRUITS
                  <MdOutlineArrowRight />
                </Link>
                <Link
                  href={`/${products}/category/3&type=retail`}
                  className={productStyle}
                >
                  FREEZE-DRIED FRUITS & VEG
                  <MdOutlineArrowRight />
                </Link>

                <Link
                  href={`/${products}/category/6&type=retail`}
                  className={productStyle}
                >
                  SAFFRON <MdOutlineArrowRight />
                </Link>
              </div>
            </div>

            <div className="m-2.5 group relative cursor-pointer  ">
              <div className={deskViewNavItems}>
                ACHIEVEMENTS{" "}
                <span>
                  {" "}
                  <MdArrowDropDown />{" "}
                </span>
              </div>
              <div className={achievementSubList}>
                <Link href="#" className={achievementStyle}>
                  <Image
                    src={IFS}
                    alt={"IFS"}
                    className="w-[45px] mx-auto mx-2"
                  />
                  International Featured Standard
                </Link>
                <Link href="#" className={achievementStyle}>
                  <Image
                    src={SEDEX}
                    alt={"SEDEX"}
                    className={achievementLogos}
                  />
                  Supplier Ethical Data Exchange
                </Link>
                <Link href="#" className={achievementStyle}>
                  <Image
                    src={KOSHER}
                    alt={"KOSHER CERTIFIED"}
                    className={achievementLogos}
                  />
                  KOSHER CERTIFIED
                </Link>
                <Link href="#" className={achievementStyle}>
                  <Image
                    src={USDA}
                    alt={"USDA ORGANIC"}
                    className={achievementLogos}
                  />
                  USDA ORGANIC
                </Link>
                <Link href="#" className={achievementStyle}>
                  <Image
                    src={FDA}
                    alt={"Food and Drug Administration"}
                    className={achievementLogos}
                  />
                  Food and Drug Administration
                </Link>
                <Link href="#" className={achievementStyle}>
                  <Image
                    src={ORGANIC}
                    alt={"ORGANIC"}
                    className={achievementLogos}
                  />
                  ORGANIC
                </Link>
                <Link href="#" className={achievementStyle}>
                  <Image
                    src={HALAL}
                    alt={"HALAL CERTIFIED"}
                    className={achievementLogos}
                  />
                  HALAL CERTIFIED
                </Link>
                <Link href="#" className={achievementStyle}>
                  <Image
                    src={KSTAR}
                    alt={"K-STAR"}
                    className={achievementLogos}
                  />
                  K-STAR
                </Link>
                <Link href="#" className={achievementStyle}>
                  <Image src={FSSC} alt={"FSSC"} className={achievementLogos} />
                  Food Safety System Certification
                </Link>
              </div>
            </div>

            <div className={navbarItemHover}>
              <div className={deskViewNavItems}>
                BRANDS{" "}
                <span>
                  {" "}
                  <MdArrowDropDown />{" "}
                </span>
              </div>
              <div className={brandsEventSubList}>
                  <Image src={majestic} alt="majestic" className={brandImg} />
                  <Image src={peachFull} alt="peachFull" className={brandImg} />
                  <Image src={kindKids} alt="kindKids" className={brandImg} />
                  <Image src={queen} alt="queen" className={brandImg} />
              </div>
            </div>

            <div className={navbarItemHover}>
              <div className={deskViewNavItems}>
                EVENTS & NEWS{" "}
                <span>
                  {" "}
                  <MdArrowDropDown />{" "}
                </span>
              </div>
              <div className={brandsEventSubList}>
                <Link href={`/event-news`} className={productStyle}>
                  Events
                </Link>

                <Link href={`/event-news`} className={productStyle}>
                  News
                </Link>
              </div>
            </div>

            <div className={navbarItemHover}>
              <div className={deskViewNavItems}>
                ABOUT{" "}
                <span>
                  {" "}
                  <MdArrowDropDown />{" "}
                </span>
              </div>
              <div className={navItemListSubList}>
                <Link className={productStyle} href={`/about`}>
                  ABOUT US
                </Link>

                <Link className={productStyle} href={`/e-catalogue`}>
                  CATALOGUE
                </Link>

                <Link className={productStyle} href={`/factory`}>
                  FACTORIES
                </Link>

                <Link className={productStyle} href={`/quality-food-safety`}>
                  QUALITY AND FOOD SAFETY
                </Link>
                <Link className={productStyle} href={`/custom-packing`}>
                  CUSTOM PACKING
                </Link>
                <Link className={productStyle} href={`/research-development`}>
                  R & D
                </Link>
                <Link className={productStyle} href={`/FAQ`}>
                  FAQ
                </Link>
              </div>
            </div>

            <div className={deskViewNavItems}>
              <Link href={`/contact`}>CONTACT</Link>
            </div>
          </div>

          {/* SEARCH BAR */}
          <div className={searchInputIcon}>
            <div className={searIconDesk}>
              <BiSearchAlt2 onClick={() => handleSearch()} />
            </div>
            <input
              id="header-search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={searchInputDesk}
              placeholder="Search Products..."
            />
          </div>

          {/* SEARCH FOR MEDIUM SIZE */}
          <div className={searchWrapperMScreen}>
            <div className={searchIconMScreen}>
              <BiSearchAlt2 />
            </div>
          </div>

          {/* SOCIAL MEDIA */}
          <div className={socialMediaWrapper}>
            <Link href="https://www.instagram.com/ahtfoods/" target="_blanket">
              <FaInstagram className={navItemPhoneView} />
            </Link>
            <Link
              href="https://api.whatsapp.com/send/?phone=989123865564&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <FaWhatsapp className={navItemPhoneView} />
            </Link>
            <Link href="mailto:info@ahtfoods.com? subject= subject text">
              <CgMail className={navItemPhoneView} />
            </Link>
          </div>

          {/* HAMBERGER MENU */}
          <div className={burgerMenu} onClick={() => setMenuToggle(true)}>
            <TiThMenu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
