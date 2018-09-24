import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 80px;
`;

const NavLeft = styled.div`
  & > a {
    padding-left: 25px;
  }
`;

const NavRight = styled.div`
  & > a {
    padding-right: 25px;
  }
`;

const EclipsedLogo = styled.img`
  width: 100px;
  &:hover {
    cursor: pointer;
  }
`;

const GithubLogo = styled.svg`
  z-index: 5;
  transition: transform 600ms;
  path {
    fill: #fff;
    transition: fill 600ms;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.3, 1.3) rotate(7deg);
    transition: transform 400ms;
    path {
      fill: #ffd97d;
      transition: fill 600ms;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLeft>
        <Link to="/">
          <EclipsedLogo src="images/hype-logo.png"/>
        </Link>
      </NavLeft>
      <NavRight>
        <a href="https://github.com/NicBonetto/eclipsed">
          <GithubLogo height="26" width="26" viewBox="0 0 220.4405 194.8299">
            <g><path d="M74.1975,106.8299c-11.0272,0-20,10.7657-20,24c0,13.2345,8.9728,24,20,24s20-10.7655,20-24   C94.1975,117.5956,85.2247,106.8299,74.1975,106.8299z M74.1975,146.8299c-6.6172,0-12-7.1775-12-16c0-8.8223,5.3828-16,12-16   s12,7.1777,12,16C86.1975,139.6524,80.8147,146.8299,74.1975,146.8299z"/><path d="M150.1975,106.8299c-11.0272,0-20,10.7657-20,24c0,13.2345,8.9728,24,20,24s20-10.7655,20-24   C170.1975,117.5956,161.2247,106.8299,150.1975,106.8299z M150.1975,146.8299c-6.6172,0-12-7.1775-12-16c0-8.8223,5.3828-16,12-16   s12,7.1777,12,16C162.1975,139.6524,156.8147,146.8299,150.1975,146.8299z"/><path d="M156.3011,86.8299c-0.1972,0-0.3984,0.0021-0.5976,0.004c-3.7052,0.0645-7.4124,0.2149-11.1192,0.3653   c-3.3752,0.1368-6.75,0.2732-10.1232,0.3416l-5.8592,0.1232c-10.174,0.2128-20.7128,0.4296-31.004,0.3888   c-4.6972-0.0196-9.3944-0.1976-14.09-0.3732c-6.3904-0.242-12.99-0.496-19.5428-0.33c-9.09,0.2208-16.7404,3.1248-22.7384,8.6368   h-0.002c-9.9628,9.154-14.082,21.2988-12.5896,37.1268c2.166,22.9727,11.4392,34.7188,32.0076,40.5392   c17.2912,4.8924,34.6584,5.33,49.2892,5.1248l4.8712,0.0256c1.6444,0.0136,3.2868,0.0271,4.9316,0.0271   c2.0272,0,4.0564-0.0195,6.082-0.084c14.3788-0.4587,26.9824-2.6091,38.5292-6.5743c12.6776-4.3512,21.1152-12.662,25.0764-24.6992   c3.0232-9.2008,3.912-17.916,2.7148-26.6465C190.1879,106.6192,177.7991,86.8299,156.3011,86.8299z M181.8227,144.9724   c-3.182,9.666-9.7484,16.088-20.0744,19.6328c-10.7812,3.7012-22.6172,5.7112-36.1856,6.1447   c-3.5644,0.1133-7.1288,0.0781-10.6932,0.0549l-4.9964-0.0276c-14.1012,0.2012-30.75-0.2088-47.0504-4.824   c-17.2676-4.8848-24.3752-13.9904-26.2228-33.59c-1.2404-13.168,2.0428-23.1408,10.0372-30.4864   c4.5312-4.16,10.4256-6.3572,17.5212-6.5312c6.3028-0.1424,12.7832,0.0936,19.0488,0.328c4.7852,0.18,9.5724,0.3596,14.3556,0.3792   c10.4316,0.0468,20.9864-0.176,31.2072-0.3909l5.8532-0.1211c3.43-0.072,6.8576-0.2109,10.2852-0.3496   c3.6448-0.1464,7.2892-0.2948,10.9336-0.3573c0.1448-0.004,0.2892-0.004,0.4336-0.004c16.5196,0,26.428,16.0901,27.9356,27.0821   C185.2387,129.4099,184.4571,136.9548,181.8227,144.9724z"/><path d="M207.4631,61.4356c-2.3808-3.2777-3.4668-5.2032-3.1268-8.7052c0.7088-7.3712-0.3008-14.7912-1.2756-21.9648   l-0.0644-0.4728c-1.3048-9.6172-3.8164-18.7928-7.4668-27.2752L194.2307,0l-5.912,1.2596   c-8.2052,1.7248-16.6916,3.51-24.428,7.9748c-5.1364,2.9668-10.248,6.1308-15.1892,9.1872   c-3.3088,2.0492-6.6152,4.096-9.9436,6.094c-0.1816,0.1092-0.5388,0.1952-0.6404,0.1952c0,0,0,0-0.002,0   c-17.8868-3.1249-36.4688-3.1544-55.2364-0.0936c-0.2304,0.0407-0.9884-0.088-1.59-0.4456   c-2.0624-1.236-4.074-2.5624-6.0856-3.8884c-2.332-1.5392-4.666-3.0744-7.0664-4.4804   C56.6895,9.0819,44.0411,2.5996,29.1251,0.6952l-2.916-0.3733l-1.5564,3.3733c-0.2932,0.6172-0.5392,1.1464-0.7464,1.6992   c-4.2812,11.5372-6.8612,23.6328-7.6952,36.34c-0.2908,4.404-0.5916,8.9588,0.0568,13.5075   c0.2148,1.5061,0.0372,1.8109-0.5528,2.5489c-5.3868,6.7168-9.2404,13.7424-11.7792,21.4708   c-4.2676,12.9843-5.0412,27.3788-2.4356,45.2948c2.16,14.9884,5.834,25.924,11.91,35.4532   c12.7716,20.0312,32.4884,31.3163,58.6056,33.5412c13.0508,1.1111,26.2948,1.2791,39.2812,1.2791   c2.7912,0,5.5724-0.008,8.336-0.0155c3.6444-0.0116,7.2928-0.0216,10.9276-0.0136c16.7208,0.0096,30.0548-2.168,42.1796-6.914   c21.584-8.4456,35.9356-24.174,42.6524-46.75c3.7444-12.5784,5.42-25.9572,4.9788-39.7656   C219.8791,85.9864,215.5375,72.5508,207.4631,61.4356z M207.7247,138.8552c-6.0624,20.3732-18.4588,33.9747-37.9004,41.5824   c-11.158,4.3708-23.4804,6.4392-39.248,6.3632c-3.6504-0.008-7.3064,0.002-10.9648,0.0136   c-15.4452,0.0428-31.41,0.088-46.916-1.2365c-23.834-2.0291-41.0196-11.7987-52.5392-29.8691   c-5.4352-8.5252-8.748-18.4844-10.738-32.2989c-2.4552-16.8787-1.8008-29.7243,2.1192-41.6503   c2.2344-6.8048,5.6424-13.0076,10.4216-18.9668c2.09-2.6092,2.7344-5.1229,2.2288-8.6796   c-0.5316-3.7248-0.258-7.8556,0.0332-12.244c0.7344-11.2288,3.0428-22.258,6.8552-32.7873   c12.26,2.168,23.09,7.7949,33.0136,13.6213c2.2816,1.3376,4.4944,2.7987,6.7092,4.2576c2.1092,1.3908,4.2188,2.7792,6.3888,4.078   c2.16,1.2871,4.7692,1.838,6.986,1.4728c17.8712-2.918,35.5588-2.8924,52.586,0.082c1.9612,0.33,4.2988-0.1328,6.1116-1.2168   c3.3632-2.0196,6.7012-4.086,10.0388-6.1504c4.9668-3.074,9.9336-6.1485,14.9824-9.0645   c6.4768-3.7383,13.7852-5.3299,21.5256-6.9587c2.6992,6.9608,4.5976,14.402,5.6524,22.166l0.0644,0.4724   c0.912,6.7228,1.8572,13.676,1.2364,20.1212c-0.6156,6.3751,1.8356,10.3436,4.6208,14.174   c7.2132,9.9336,10.9376,21.5428,11.3828,35.488C212.7891,114.576,211.2247,127.1016,207.7247,138.8552z"/></g>
          </GithubLogo>
        </a>
      </NavRight>
    </Nav>
  );
};

export default Navbar;