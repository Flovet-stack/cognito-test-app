import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import React, { useState } from "react";
import UserPool from "./Userpool";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [givenName, setGivenName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [gender, setGender] = useState("");
  const [zoneInfo, setZoneInfo] = useState("");
  const [locale, setLocale] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");

  function setCognitoUserAttribute(name: string, value: string): any {
    const attribute = new CognitoUserAttribute({
      Name: name,
      Value: value,
    });
    return attribute;
  }

  const onSubmit = (event: any) => {
    event.preventDefault();
    let userAttributes: CognitoUserAttribute[] = [];
    let attributeList: CognitoUserAttribute[] = [];

    attributeList.push(setCognitoUserAttribute("given_name", givenName));
    attributeList.push(setCognitoUserAttribute("family_name", familyName));
    attributeList.push(setCognitoUserAttribute("gender", gender));
    attributeList.push(setCognitoUserAttribute("zoneinfo", zoneInfo));
    attributeList.push(setCognitoUserAttribute("locale", locale));
    attributeList.push(setCognitoUserAttribute("phone_number", phoneNumber));
    attributeList.push(setCognitoUserAttribute("updated_at", updatedAt));

    UserPool.signUp(
      email,
      password,
      attributeList,
      userAttributes,
      (error, data) => {}
    );
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <label htmlFor="given_name">given name</label>
        <input
          type="text"
          name="given_name"
          id="given_name"
          value={givenName}
          onChange={(event) => setGivenName(event.target.value)}
        />

        <label htmlFor="family_name">family name</label>
        <input
          type="family_name"
          name="family_name"
          id="family_name"
          value={familyName}
          onChange={(event) => setFamilyName(event.target.value)}
        />

        <label htmlFor="gender">gender</label>
        <input
          type="gender"
          name="gender"
          id="gender"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        />

        <label htmlFor="zoneinfo">zoneinfo</label>
        <input
          type="zoneinfo"
          name="zoneinfo"
          id="zoneinfo"
          value={zoneInfo}
          onChange={(event) => setZoneInfo(event.target.value)}
        />

        <label htmlFor="locale">locale</label>
        <input
          type="locale"
          name="locale"
          id="locale"
          value={locale}
          onChange={(event) => setLocale(event.target.value)}
        />

        <label htmlFor="phone_number">phone number</label>
        <input
          type="phone_number"
          name="phone_number"
          id="phone_number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />

        <label htmlFor="updated_at">updated at</label>
        <input
          type="updated_at"
          name="updated_at"
          id="updated_at"
          value={updatedAt}
          onChange={(event) => setUpdatedAt(event.target.value)}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Register;
