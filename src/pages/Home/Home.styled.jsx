import styled from 'styled-components';

import HomeImg from '../../img/home_img.jpg';

export const Main = styled.main`
  min-height: 100vh;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: linear-gradient(
      90deg,
      rgba(122, 182, 191, 0.6167060574229692) 0%,
      rgba(20, 67, 152, 0.03687412464985995) 35%,
      rgba(243, 132, 140, 0.6223082983193278) 100%
    ),
    url('${HomeImg}');
`;

export const Wrapp = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 0px;
  min-width: 300px;
  text-align: center;
`;

export const Title = styled.h1`
  color: #ffff;
  font-size: 60px;
  font-weight: 900px;
  padding: 50px;

  @media screen and (max-width: 749.9px) {
    font-size: 40px;
  }
`;
