"use client";
import React, { useState } from "react";
import { NPI } from "./npi";
export const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [npiNumber, setNPINumber] = useState("");
  const map = {
    setFName: setFirstName,
    setLName: setLastName,
    setPhone: setPhone,
    setNPI: setNPINumber,
  };
  const firstNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const lastNameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  return (
    <form>
      <fieldset>
        <input
          type="text"
          onChange={firstNameChangeHandler}
          value={firstName}
          placeholder="First Name"
        />
        <input
          type="text"
          onChange={lastNameChangeHandler}
          value={lastName}
          placeholder="Last Name"
        />
      </fieldset>
      <NPI {...map}>Test</NPI>
    </form>
  );
};
