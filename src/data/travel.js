// Counties visited, as 5-digit FIPS codes. Resolved from a (state, county)
// list against the us-atlas counties topology. To update: edit this list.
//
// A few entries were disambiguations between two same-named FIPS. For the
// independent-city-vs-surrounding-county pairs, only the city was visited:
//   - MD: Baltimore City (24510) only (NOT Baltimore County 24005)
//   - MO: St. Louis City (29510) only (NOT St. Louis County 29189)
//   - VA: Richmond City (51760) only (NOT Richmond County 51159 in the Northern Neck)
//   - VA: Roanoke County (51161), Washington County (51191), Fairfax County (51059)
//     all explicitly chosen by context in the source list.
//   - VA independent cities: Covington (51580), Falls Church (51610),
//     Manassas (51683), Virginia Beach (51810).
//   - DC: 11001 (single county-equivalent) included.

const travel = {
  visited: [
    "04005", "06019", "06037", "06039", "06043", "06065", "06071", "06073",
    "06107", "09009", "09011", "10005", "11001", "12086", "12087", "12095",
    "12097", "12127", "17031", "17043", "17097", "17111", "18057", "18067",
    "18089", "18097", "18121", "18127", "18157", "21117", "24003", "24021",
    "24031", "24033", "24043", "24510", "25001", "25009", "25017", "25025",
    "26003", "26055", "26061", "26083", "26089", "26103", "27049", "27053",
    "27109", "29510", "32003", "33011", "34001", "34021",
    "34023", "34025", "34029", "34035", "36001", "36039", "36047", "36061",
    "36081", "36085", "36111", "37173", "37183", "39041", "39049", "39061",
    "39073", "39113", "41051", "42001", "42003", "42043", "42051", "44005",
    "44007", "45083", "47009", "47155", "48029", "48039", "48085", "48091",
    "48113", "48167", "48201", "48453", "48491", "51003", "51013", "51015",
    "51017", "51035", "51047", "51059", "51075", "51079", "51087", "51107",
    "51113", "51121", "51139", "51153", "51157", "51161", "51163", "51165",
    "51187", "51191", "51197", "51580", "51610", "51683", "51760", "51810",
    "53015", "53033", "53035", "53041", "53053", "53061", "53067", "54019",
    "54023", "54037", "54065", "54081", "54093", "55009", "55025", "55029",
    "55055", "55079", "55111", "55127",
  ],
};

export default travel;
