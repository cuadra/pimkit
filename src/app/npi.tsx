import React, { ChangeEvent, useEffect, useState } from "react";
import { isValidNPI } from "./utils/luhn";
interface NPIProps {
  setFName?: React.Dispatch<React.SetStateAction<string>>;
  setLName?: React.Dispatch<React.SetStateAction<string>>;
  setPhone?: React.Dispatch<React.SetStateAction<string>>;
  setNPI?: React.Dispatch<React.SetStateAction<string>>;
}
export const NPI = (props: NPIProps) => {
  const [npi, setNpi] = useState("test");
  const { setFName, setLName, setPhone, setNPI } = props;
  const cachedData: string[] = [];

  const fnWrapper = (
    fn: React.Dispatch<React.SetStateAction<string>> | undefined | null,
    data: string,
  ) => {
    if (fn !== undefined && fn !== null) {
      fn(data);
    }
  };
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNpi(e.target.value);
  };

  useEffect(() => {
    const valid = isValidNPI(npi);

    /*
    if (valid) {
      fnWrapper(setFName, "John");
      fnWrapper(setLName, "Joe");
      fnWrapper(setNPI, npi);
      fnWrapper(setPhone, "3213214321");
      fetch(
        `https://npiregistry.cms.hhs.gov/api/?number=${1003101296}&version=2.1`,
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched data:", data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
    */
  }),
    [npi];

  return (
    <div>
      <h1>NPI Component {npi}</h1>
      <input onChange={changeHandler} value={npi} />
    </div>
  );
};
