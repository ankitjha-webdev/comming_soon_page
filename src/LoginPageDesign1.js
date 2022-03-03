import React from "react";
import styled from "styled-components";
export const LoginPageDesign1 = ({}) => {
  return (
    <LoginPageDesignRoot>
      <WhiteFlexRow>
        <FlexRow>
          <CableCarelogo
            src={
              "https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/c2679467-728e-4baf-a4eb-befd4df7b0d4.png?alt=media&token=d7a4dfd4-77bf-40c9-953d-bcce16c7f294"
            }
          />
          <Text1>About Company</Text1>
        </FlexRow>
        <FlexRow1>
          <Text2>Comming Soon...</Text2>
          <Paragraph>
            Cable Care is a young start-up organization having <br />
            formed by professionals having over 25 years of Industry
            <br />
            experience with a mission to offer the most cost-effective
            <br />
            structured cabling solutions.
          </Paragraph>
        </FlexRow1>
      </WhiteFlexRow>
    </LoginPageDesignRoot>
  );
};
const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: #e5e5e5;
`;
const LoginPageDesignRoot = styled.div`
background-color: #805359;
overflow: hidden;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-flex-direction: row;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-pack: center;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
padding-top: 50px;
padding-bottom: 0;
margin: auto;
min-width: 1500px;
height: 100vh;
`;
const WhiteFlexRow = styled.div`
  background-color: #ffffff;
  height: 460px;
    width: 1040px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 23px;
  padding-top: 109px;
  padding-bottom: 109px;
  padding-left: 161px;
  padding-right: 127px;
  border-radius: 75px;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 435px;
  align-items: flex-start;
`;
const CableCarelogo = styled.img`
  width: 212px;
  height: 149px;
  align-self: stretch;
`;
const Text1 = styled.div`
  color: #ff6d66;
  width: 527px;
    height: 81px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-size: 55px;
    font-family: Sofia Sans;
    font-weight: 900;
    line-height: 75px;
    margin-top: 15px;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 102px;
  align-items: flex-end;
`;
const Text2 = styled.div`
color: #ff6d66;
font-size: 70px;
font-family: Sofia Sans;
font-weight: 900;
line-height: 75px;
`;
const Paragraph = styled.div`
  font-size: 22px;
  font-family: Poppins;
  font-weight: 900;
  line-height: 40px;
  align-self: stretch;
`;
