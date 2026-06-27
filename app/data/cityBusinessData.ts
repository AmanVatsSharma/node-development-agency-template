/**
 * @fileoverview City-specific LocalBusiness data for city landing pages.
 * @description Maps each city landing page to its LocalBusiness JSON-LD shape.
 *  Each entry feeds the LocalBusinessStructuredData component via the
 *  areaServed / address fields. The parent organization is the company HQ
 *  (read from companyProfile).
 */
import { companyProfile } from './companyProfile';

export interface CityBusinessData {
  /** City name as it appears in the URL slug and page title. */
  name: string;
  /** Full city name for the areaServed LocalBusiness field. */
  city: string;
  /** State or region. */
  region: string;
  /** ISO 3166-2 subdivision code (e.g. "IN-DL" for Delhi). */
  regionCode: string;
  /** Country (always "IN" for this site). */
  country: string;
  /** Approximate latitude for the city center (decimal degrees). */
  latitude: number;
  /** Approximate longitude for the city center (decimal degrees). */
  longitude: number;
}

/**
 * Per-city metadata for the 7 web-development landing pages.
 * Keys MUST match the route segment of each city page (lowercased),
 * e.g. `web-development-mumbai` -> `cityBusinessData.mumbai`.
 */
export const cityBusinessData: Record<string, CityBusinessData> = {
  bangalore: {
    name: 'Bangalore',
    city: 'Bangalore',
    region: 'Karnataka',
    regionCode: 'IN-KA',
    country: 'IN',
    latitude: 12.9716,
    longitude: 77.5946,
  },
  delhi: {
    name: 'Delhi',
    city: 'Delhi',
    region: 'Delhi',
    regionCode: 'IN-DL',
    country: 'IN',
    latitude: 28.6139,
    longitude: 77.2090,
  },
  gurgaon: {
    name: 'Gurgaon',
    city: 'Gurgaon',
    region: 'Haryana',
    regionCode: 'IN-HR',
    country: 'IN',
    latitude: 28.4595,
    longitude: 77.0266,
  },
  hyderabad: {
    name: 'Hyderabad',
    city: 'Hyderabad',
    region: 'Telangana',
    regionCode: 'IN-TS',
    country: 'IN',
    latitude: 17.3850,
    longitude: 78.4867,
  },
  mumbai: {
    name: 'Mumbai',
    city: 'Mumbai',
    region: 'Maharashtra',
    regionCode: 'IN-MH',
    country: 'IN',
    latitude: 19.0760,
    longitude: 72.8777,
  },
  noida: {
    name: 'Noida',
    city: 'Noida',
    region: 'Uttar Pradesh',
    regionCode: 'IN-UP',
    country: 'IN',
    latitude: 28.5355,
    longitude: 77.3910,
  },
  pune: {
    name: 'Pune',
    city: 'Pune',
    region: 'Maharashtra',
    regionCode: 'IN-MH',
    country: 'IN',
    latitude: 18.5204,
    longitude: 73.8567,
  },
};

/**
 * The HQ city (parent organization location) — used as the default
 * addressLocality / addressRegion / geo for LocalBusiness JSON-LD when no
 * cityData override is passed. Vedpragya Bharat Private Limited is
 * registered in Haryana, India (CIN: U47912HR2025PTC131357), so Gurugram
 * (Haryana) is the HQ.
 */
export const hqBusinessData: CityBusinessData = {
  name: 'Gurugram',
  city: 'Gurugram',
  region: companyProfile.legal.registrationState?.split(',')[0]?.trim() || 'Haryana',
  regionCode: 'IN-HR',
  country: 'IN',
  latitude: 28.4595,
  longitude: 77.0266,
};
