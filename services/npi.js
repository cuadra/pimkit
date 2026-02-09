import { isValidNPI } from "../src/app/utils/luhn.ts";
async function getNPIInfo(npiNumber) {
  if (!isValidNPI(npiNumber)) {
    console.error("Invalid NPI number provided.");
    return null;
  }
  const url = `https://npiregistry.cms.hhs.gov/api/?number=${npiNumber}&version=2.1`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results[0];
  } catch (error) {
    console.error("Error fetching NPI information:", error);
    return null;
  }
}

//1003101296 Example NPI number
getNPIInfo(process.argv[2]).then((npiInfo) => {
  if (npiInfo) {
    console.log(JSON.stringify(npiInfo, null, 2));
  } else {
    console.log("No information found for the given NPI number.");
  }
});
