import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    addresses: [
      {
        address_1: "1400 WHITE DR STE B",
        address_purpose: "MAILING",
        address_type: "DOM",
        city: "TITUSVILLE",
        country_code: "US",
        country_name: "United States",
        postal_code: "327809657",
        state: "FL",
        telephone_number: "321-676-8989",
      },
      {
        address_1: "1400 WHITE DR STE B",
        address_purpose: "LOCATION",
        address_type: "DOM",
        city: "TITUSVILLE",
        country_code: "US",
        country_name: "United States",
        postal_code: "327809657",
        state: "FL",
        telephone_number: "321-676-8989",
      },
    ],
    basic: {
      authorized_official_first_name: "DALE",
      authorized_official_last_name: "GREYSLAK",
      authorized_official_name_prefix: "Mr.",
      authorized_official_name_suffix: "--",
      authorized_official_telephone_number: "3212677576",
      authorized_official_title_or_position: "Managing Member",
      enumeration_date: "2011-06-15",
      last_updated: "2013-08-23",
      organization_name: "101 DIABETIC SUPPLIES, LLC",
      organizational_subpart: "NO",
      status: "A",
    },
    created_epoch: "1308167765000",
    endpoints: [],
    enumeration_type: "NPI-2",
    identifiers: [],
    last_updated_epoch: "1377289220000",
    number: "1003101296",
    other_names: [
      {
        code: "4",
        organization_name: "JADE DIABETIC GROUP",
        type: "Former Legal Business Name",
      },
    ],
    practiceLocations: [],
    taxonomies: [
      {
        code: "332B00000X",
        desc: "Durable Medical Equipment & Medical Supplies",
        license: null,
        primary: true,
        state: null,
        taxonomy_group: "",
      },
    ],
  };
  return NextResponse.json(data);
}
