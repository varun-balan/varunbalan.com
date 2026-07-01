// Counties visited, as rich entries with state, label, places, and FIPS code.
// The map derives the visited-FIPS set from this list; the inventory list
// below the map renders state → county/city → places from the same source.
//
// Disambiguation notes (for entries where the same name exists as both a
// county and an independent city in the topojson):
//   - MD: Baltimore City (24510) only — Baltimore County not visited.
//   - MO: St. Louis City (29510) only — St. Louis County not visited.
//   - VA: Richmond City (51760) only — Richmond County (Northern Neck) not visited.
//   - VA: Roanoke County (51161), Washington County (51191), Fairfax County
//     (51059) explicitly the counties, not the same-named cities.
//   - VA independent cities listed as "(City)": Covington (51580),
//     Falls Church (51610), Manassas (51683), Virginia Beach (51810).
//   - DC: 11001 included; rendered on the map, counted in the county total,
//     but excluded from the "states represented" stat (DC isn't a state).
//
// To add an entry: drop a new object into the list. Order in this file does
// not matter — sorting happens at render time.

const travel = {
  visited: [
    // Arizona
    { fips: "04005", state: "Arizona", label: "Coconino County", places: ["Grand Canyon Village", "Page", "Williams"] },

    // California
    { fips: "06019", state: "California", label: "Fresno County", places: ["Fresno", "Grant Grove Village", "Kings Canyon National Park"] },
    { fips: "06037", state: "California", label: "Los Angeles County", places: ["Los Angeles", "Santa Monica"] },
    { fips: "06039", state: "California", label: "Madera County", places: ["Oakhurst", "Yosemite National Park"] },
    { fips: "06043", state: "California", label: "Mariposa County", places: ["Yosemite National Park", "Yosemite Valley"] },
    { fips: "06065", state: "California", label: "Riverside County", places: ["Joshua Tree National Park"] },
    { fips: "06071", state: "California", label: "San Bernardino County", places: ["Joshua Tree", "Rancho Cucamonga", "San Bernardino"] },
    { fips: "06073", state: "California", label: "San Diego County", places: ["San Diego"] },
    { fips: "06107", state: "California", label: "Tulare County", places: ["Sequoia National Park"] },

    // Connecticut
    { fips: "09009", state: "Connecticut", label: "New Haven County", places: ["Hammonasset Beach State Park", "New Haven"] },
    { fips: "09011", state: "Connecticut", label: "New London County", places: ["Ledyard", "Mystic", "New London"] },

    // Delaware
    { fips: "10005", state: "Delaware", label: "Sussex County", places: ["Dewey Beach", "Rehoboth Beach"] },

    // District of Columbia
    { fips: "11001", state: "District of Columbia", label: "Washington", places: [] },

    // Florida
    { fips: "12086", state: "Florida", label: "Miami-Dade County", places: ["Miami", "Miami Beach"] },
    { fips: "12087", state: "Florida", label: "Monroe County", places: ["Key West"] },
    { fips: "12095", state: "Florida", label: "Orange County", places: ["Orlando"] },
    { fips: "12097", state: "Florida", label: "Osceola County", places: ["Celebration", "Kissimmee"] },
    { fips: "12127", state: "Florida", label: "Volusia County", places: ["Daytona Beach", "Ormond Beach"] },

    // Illinois
    { fips: "17031", state: "Illinois", label: "Cook County", places: ["Chicago", "Schaumburg", "Streamwood"] },
    { fips: "17043", state: "Illinois", label: "DuPage County", places: ["Naperville", "Willowbrook"] },
    { fips: "17097", state: "Illinois", label: "Lake County", places: ["Gurnee"] },
    { fips: "17111", state: "Illinois", label: "McHenry County", places: ["Union"] },

    // Indiana
    { fips: "18057", state: "Indiana", label: "Hamilton County", places: ["Fishers"] },
    { fips: "18067", state: "Indiana", label: "Howard County", places: ["Kokomo"] },
    { fips: "18089", state: "Indiana", label: "Lake County", places: ["Gary"] },
    { fips: "18097", state: "Indiana", label: "Marion County", places: ["Indianapolis", "Speedway"] },
    { fips: "18121", state: "Indiana", label: "Parke County", places: ["Turkey Run State Park"] },
    { fips: "18127", state: "Indiana", label: "Porter County", places: ["Indiana Dunes"] },
    { fips: "18157", state: "Indiana", label: "Tippecanoe County", places: ["Lafayette", "West Lafayette"] },

    // Kentucky
    { fips: "21117", state: "Kentucky", label: "Kenton County", places: ["Covington"] },

    // Maryland
    { fips: "24003", state: "Maryland", label: "Anne Arundel County", places: ["Annapolis"] },
    { fips: "24510", state: "Maryland", label: "Baltimore (City)", places: [] },
    { fips: "24021", state: "Maryland", label: "Frederick County", places: ["Catoctin Mountain Park", "Cunningham Falls State Park"] },
    { fips: "24031", state: "Maryland", label: "Montgomery County", places: ["Bethesda", "Rockville"] },
    { fips: "24033", state: "Maryland", label: "Prince George's County", places: ["College Park", "National Harbor", "Oxon Hill"] },
    { fips: "24043", state: "Maryland", label: "Washington County", places: ["Hancock"] },

    // Massachusetts
    { fips: "25001", state: "Massachusetts", label: "Barnstable County", places: ["Provincetown", "Yarmouth"] },
    { fips: "25009", state: "Massachusetts", label: "Essex County", places: ["Salem"] },
    { fips: "25017", state: "Massachusetts", label: "Middlesex County", places: ["Cambridge"] },
    { fips: "25025", state: "Massachusetts", label: "Suffolk County", places: ["Boston"] },

    // Michigan
    { fips: "26003", state: "Michigan", label: "Alger County", places: ["Munising", "Pictured Rocks National Lakeshore"] },
    { fips: "26055", state: "Michigan", label: "Grand Traverse County", places: ["Peninsula Township", "Traverse City"] },
    { fips: "26061", state: "Michigan", label: "Houghton County", places: ["Houghton"] },
    { fips: "26083", state: "Michigan", label: "Keweenaw County", places: ["Copper Harbor", "Eagle Harbor", "Gay"] },
    { fips: "26089", state: "Michigan", label: "Leelanau County", places: ["Sleeping Bear Dunes"] },
    { fips: "26103", state: "Michigan", label: "Marquette County", places: ["Marquette"] },

    // Minnesota
    { fips: "27049", state: "Minnesota", label: "Goodhue County", places: ["Frontenac State Park"] },
    { fips: "27053", state: "Minnesota", label: "Hennepin County", places: ["Bloomington", "Minneapolis"] },
    { fips: "27109", state: "Minnesota", label: "Olmsted County", places: ["Rochester"] },

    // Missouri
    { fips: "29510", state: "Missouri", label: "St. Louis (City)", places: [] },

    // Nevada
    { fips: "32003", state: "Nevada", label: "Clark County", places: ["Hoover Dam", "Las Vegas"] },

    // New Hampshire
    { fips: "33011", state: "New Hampshire", label: "Hillsborough County", places: ["Manchester"] },

    // New Jersey
    { fips: "34001", state: "New Jersey", label: "Atlantic County", places: ["Atlantic City"] },
    { fips: "34021", state: "New Jersey", label: "Mercer County", places: ["Princeton", "West Windsor Township"] },
    { fips: "34023", state: "New Jersey", label: "Middlesex County", places: ["Edison", "North Brunswick Township"] },
    { fips: "34025", state: "New Jersey", label: "Monmouth County", places: ["Sandy Hook"] },
    { fips: "34029", state: "New Jersey", label: "Ocean County", places: ["Jackson Township"] },
    { fips: "34035", state: "New Jersey", label: "Somerset County", places: ["Green Brook Township"] },

    // New York
    { fips: "36001", state: "New York", label: "Albany County", places: ["Albany"] },
    { fips: "36039", state: "New York", label: "Greene County", places: ["Kaaterskill Falls"] },
    { fips: "36047", state: "New York", label: "Kings County", places: ["Brooklyn"] },
    { fips: "36061", state: "New York", label: "New York County", places: ["Manhattan"] },
    { fips: "36081", state: "New York", label: "Queens County", places: ["Queens"] },
    { fips: "36085", state: "New York", label: "Richmond County", places: ["Staten Island"] },
    { fips: "36111", state: "New York", label: "Ulster County", places: ["Accord", "Minnewaska State Park Reserve"] },

    // North Carolina
    { fips: "37173", state: "North Carolina", label: "Swain County", places: ["Great Smoky Mountains National Park"] },
    { fips: "37183", state: "North Carolina", label: "Wake County", places: ["Cary", "Morrisville", "Raleigh"] },

    // Ohio
    { fips: "39041", state: "Ohio", label: "Delaware County", places: ["Alum Creek"] },
    { fips: "39049", state: "Ohio", label: "Franklin County", places: ["Columbus"] },
    { fips: "39061", state: "Ohio", label: "Hamilton County", places: ["Cincinnati"] },
    { fips: "39073", state: "Ohio", label: "Hocking County", places: ["Hocking Hills State Park"] },
    { fips: "39113", state: "Ohio", label: "Montgomery County", places: ["Dayton"] },

    // Oregon
    { fips: "41051", state: "Oregon", label: "Multnomah County", places: ["Portland"] },

    // Pennsylvania
    { fips: "42001", state: "Pennsylvania", label: "Adams County", places: ["Gettysburg"] },
    { fips: "42003", state: "Pennsylvania", label: "Allegheny County", places: ["Pittsburgh"] },
    { fips: "42043", state: "Pennsylvania", label: "Dauphin County", places: ["Grantville", "Harrisburg", "Hershey"] },
    { fips: "42051", state: "Pennsylvania", label: "Fayette County", places: ["Ohiopyle"] },

    // Rhode Island
    { fips: "44005", state: "Rhode Island", label: "Newport County", places: ["Newport"] },
    { fips: "44007", state: "Rhode Island", label: "Providence County", places: ["Providence"] },

    // South Carolina
    { fips: "45083", state: "South Carolina", label: "Spartanburg County", places: ["Spartanburg"] },

    // Tennessee
    { fips: "47009", state: "Tennessee", label: "Blount County", places: ["Alcoa", "Great Smoky Mountains National Park"] },
    { fips: "47155", state: "Tennessee", label: "Sevier County", places: ["Gatlinburg", "Great Smoky Mountains National Park", "Pigeon Forge"] },

    // Texas
    { fips: "48029", state: "Texas", label: "Bexar County", places: ["San Antonio"] },
    { fips: "48039", state: "Texas", label: "Brazoria County", places: ["Pearland"] },
    { fips: "48085", state: "Texas", label: "Collin County", places: ["Celina", "Frisco", "McKinney", "Plano"] },
    { fips: "48091", state: "Texas", label: "Comal County", places: ["Natural Bridge Caverns"] },
    { fips: "48113", state: "Texas", label: "Dallas County", places: ["Dallas", "Garland", "Grand Prairie", "Irving", "Richardson"] },
    { fips: "48167", state: "Texas", label: "Galveston County", places: ["Galveston"] },
    { fips: "48201", state: "Texas", label: "Harris County", places: ["Houston"] },
    { fips: "48453", state: "Texas", label: "Travis County", places: ["Austin"] },
    { fips: "48491", state: "Texas", label: "Williamson County", places: ["Round Rock"] },

    // Virginia
    { fips: "51003", state: "Virginia", label: "Albemarle County", places: ["Shenandoah"] },
    { fips: "51013", state: "Virginia", label: "Arlington County", places: ["Arlington"] },
    { fips: "51015", state: "Virginia", label: "Augusta County", places: ["Shenandoah"] },
    { fips: "51017", state: "Virginia", label: "Bath County", places: ["Douthat State Park", "Hot Springs", "Warm Springs"] },
    { fips: "51035", state: "Virginia", label: "Carroll County", places: ["New River Trail State Park"] },
    { fips: "51580", state: "Virginia", label: "Covington (City)", places: [] },
    { fips: "51047", state: "Virginia", label: "Culpeper County", places: ["Culpeper"] },
    { fips: "51059", state: "Virginia", label: "Fairfax County", places: ["Annandale", "Chantilly", "Herndon", "Lincolnia", "Mason Neck", "McLean", "Reston", "Tysons"] },
    { fips: "51610", state: "Virginia", label: "Falls Church (City)", places: [] },
    { fips: "51075", state: "Virginia", label: "Goochland County", places: ["Capital One Office"] },
    { fips: "51079", state: "Virginia", label: "Greene County", places: ["Shenandoah"] },
    { fips: "51087", state: "Virginia", label: "Henrico County", places: ["Short Pump"] },
    { fips: "51107", state: "Virginia", label: "Loudoun County", places: ["Ashburn", "Leesburg", "Sterling"] },
    { fips: "51113", state: "Virginia", label: "Madison County", places: ["Shenandoah"] },
    { fips: "51683", state: "Virginia", label: "Manassas (City)", places: [] },
    { fips: "51121", state: "Virginia", label: "Montgomery County", places: ["Blacksburg", "Christiansburg"] },
    { fips: "51139", state: "Virginia", label: "Page County", places: ["Luray", "Shenandoah"] },
    { fips: "51153", state: "Virginia", label: "Prince William County", places: ["Leesylvania State Park", "Woodbridge"] },
    { fips: "51157", state: "Virginia", label: "Rappahannock County", places: ["Shenandoah", "Washington"] },
    { fips: "51760", state: "Virginia", label: "Richmond (City)", places: [] },
    { fips: "51161", state: "Virginia", label: "Roanoke County", places: ["Shantiniketan Temple"] },
    { fips: "51163", state: "Virginia", label: "Rockbridge County", places: ["Natural Bridge State Park"] },
    { fips: "51165", state: "Virginia", label: "Rockingham County", places: ["Shenandoah"] },
    { fips: "51810", state: "Virginia", label: "Virginia Beach (City)", places: [] },
    { fips: "51187", state: "Virginia", label: "Warren County", places: ["Front Royal", "Shenandoah"] },
    { fips: "51191", state: "Virginia", label: "Washington County", places: ["Abingdon"] },
    { fips: "51197", state: "Virginia", label: "Wythe County", places: ["Wytheville"] },

    // Washington
    { fips: "53015", state: "Washington", label: "Cowlitz County", places: ["Castle Rock"] },
    { fips: "53033", state: "Washington", label: "King County", places: ["Redmond", "Seattle", "Snoqualmie"] },
    { fips: "53035", state: "Washington", label: "Kitsap County", places: ["Bainbridge Island"] },
    { fips: "53041", state: "Washington", label: "Lewis County", places: ["Centralia"] },
    { fips: "53053", state: "Washington", label: "Pierce County", places: ["Mount Rainier", "Puyallup"] },
    { fips: "53061", state: "Washington", label: "Snohomish County", places: ["Mountlake Terrace"] },
    { fips: "53067", state: "Washington", label: "Thurston County", places: ["Olympia"] },

    // West Virginia
    { fips: "54019", state: "West Virginia", label: "Fayette County", places: ["Fayetteville", "Gauley Bridge", "New River Gorge National Park"] },
    { fips: "54023", state: "West Virginia", label: "Grant County", places: ["Petersburg"] },
    { fips: "54037", state: "West Virginia", label: "Jefferson County", places: ["Harpers Ferry"] },
    { fips: "54065", state: "West Virginia", label: "Morgan County", places: ["Berkeley Springs"] },
    { fips: "54081", state: "West Virginia", label: "Raleigh County", places: ["Beckley", "New River Gorge National Park"] },
    { fips: "54093", state: "West Virginia", label: "Tucker County", places: ["Blackwater Falls", "Davis", "Lion's Head Rocks"] },

    // Wisconsin
    { fips: "55009", state: "Wisconsin", label: "Brown County", places: ["Green Bay"] },
    { fips: "55025", state: "Wisconsin", label: "Dane County", places: ["Madison", "Middleton"] },
    { fips: "55029", state: "Wisconsin", label: "Door County", places: ["Egg Harbor", "Peninsula State Park", "Sturgeon Bay"] },
    { fips: "55055", state: "Wisconsin", label: "Jefferson County", places: ["Johnson Creek"] },
    { fips: "55079", state: "Wisconsin", label: "Milwaukee County", places: ["Milwaukee"] },
    { fips: "55111", state: "Wisconsin", label: "Sauk County", places: ["Devil's Lake State Park", "Wisconsin Dells"] },
    { fips: "55127", state: "Wisconsin", label: "Walworth County", places: ["Lake Geneva"] },
  ],
};

export default travel;
