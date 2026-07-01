// US National Parks visited. Scope: only the 63 official "National Park"
// designations (excludes National Monuments, Lakeshores, Historic Sites, etc.).
//
// Each entry lists the state(s) the park spans and the counties within Varun's
// visited counties data that reach that park — this lets the parks list
// double-check consistency against the counties data.

const parks = {
  lastUpdated: "May 2026",
  totalUSNationalParks: 63,
  visited: [
    { name: "Channel Islands", states: ["California"], counties: ["Santa Barbara"] },
    { name: "Grand Canyon", states: ["Arizona"], counties: ["Coconino"] },
    { name: "Great Smoky Mountains", states: ["North Carolina", "Tennessee"], counties: ["Swain", "Blount", "Sevier"] },
    { name: "Indiana Dunes", states: ["Indiana"], counties: ["Porter"] },
    { name: "Joshua Tree", states: ["California"], counties: ["Riverside", "San Bernardino"] },
    { name: "Kings Canyon", states: ["California"], counties: ["Fresno"] },
    { name: "Mount Rainier", states: ["Washington"], counties: ["Pierce"] },
    { name: "New River Gorge", states: ["West Virginia"], counties: ["Fayette", "Raleigh"] },
    { name: "Pinnacles", states: ["California"], counties: ["San Benito"] },
    { name: "Sequoia", states: ["California"], counties: ["Tulare"] },
    { name: "Shenandoah", states: ["Virginia"], counties: ["Albemarle", "Augusta", "Greene", "Madison", "Page", "Rappahannock", "Rockingham", "Warren"] },
    { name: "Yosemite", states: ["California"], counties: ["Madera", "Mariposa"] },
  ],
};

export default parks;
