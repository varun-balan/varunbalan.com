// Countries visited (excluding the United States, which is the home country
// and drives the counties page).
//
// Shape per entry:
//   - country: display name
//   - continent: "Asia" | "Europe" | "North America"
//   - regions: optional array of { name, places } — use when the country's
//     places group naturally into states/provinces (India).
//   - places: optional flat array of place names — for countries where the
//     source list didn't group by region.
//   - note: optional short parenthetical (e.g. "city-state", "SAR").
//
// Rule for whether a country counts: user stayed there or did an activity.
// All place lists are alphabetized at data time; component may re-sort but
// doesn't need to.

const countries = {
  lastUpdated: "May 2026",
  visited: [
    // --- Asia ---
    {
      country: "Cambodia",
      continent: "Asia",
      places: ["Phnom Penh", "Siem Reap"],
    },
    {
      country: "Hong Kong",
      continent: "Asia",
      note: "SAR",
      places: [],
    },
    {
      country: "India",
      continent: "Asia",
      regions: [
        { name: "Andhra Pradesh", places: ["Tirupati"] },
        { name: "Chandigarh", places: ["Chandigarh (UT)"] },
        { name: "Dadra & Nagar Haveli", places: ["Dudhni", "Silvassa"] },
        { name: "Delhi", places: ["New Delhi"] },
        { name: "Gujarat", places: ["Ahmedabad"] },
        { name: "Karnataka", places: ["Bangalore", "Madikeri (Coorg)", "Mysore", "Srirangapatna"] },
        {
          name: "Maharashtra",
          places: [
            "Alibag", "Amboli", "Kalyan", "Karnala Bird Sanctuary", "Khandala",
            "Lonavala", "Mahabaleshwar", "Malshej Ghats", "Malvan", "Mumbai",
            "Navi Mumbai", "Panchgani", "Pune", "Shirdi", "Sindhudurg",
            "Thane", "Titwala",
          ],
        },
        { name: "Punjab", places: ["Amritsar", "Hardo Rattan (Wagah Border)"] },
        { name: "Sikkim", places: ["Changu Lake", "Gangtok", "Nathula Pass"] },
        { name: "Tamil Nadu", places: ["Chennai"] },
        { name: "Uttar Pradesh", places: ["Agra"] },
        { name: "West Bengal", places: ["Darjeeling", "Kalimpong"] },
      ],
    },
    {
      country: "Indonesia",
      continent: "Asia",
      places: ["Bali", "Bintan"],
    },
    {
      country: "Japan",
      continent: "Asia",
      places: ["Himeji", "Hiroshima", "Kagoshima", "Kobe", "Kyoto", "Miyajima", "Nara", "Osaka", "Tokyo"],
    },
    {
      country: "Malaysia",
      continent: "Asia",
      places: ["Johor Bahru", "Langkawi", "Penang"],
    },
    {
      country: "Philippines",
      continent: "Asia",
      places: ["Bohol", "Cebu City"],
    },
    {
      country: "Singapore",
      continent: "Asia",
      note: "city-state",
      places: [],
    },
    {
      country: "Taiwan",
      continent: "Asia",
      places: ["Keelung City", "Taipei", "Xiulin Township (Taroko Gorge)", "Yuchi Township"],
    },
    {
      country: "Thailand",
      continent: "Asia",
      places: ["Bangkok", "Chiang Mai", "Chiang Rai", "Chon Buri (Pattaya, Si Racha)"],
    },
    {
      country: "Vietnam",
      continent: "Asia",
      places: ["Halong Bay", "Hanoi", "Ho Chi Minh City"],
    },

    // --- Europe ---
    {
      country: "Denmark",
      continent: "Europe",
      places: ["Copenhagen", "Sommer's Automobile Museum (Nærum)"],
    },
    {
      country: "Italy",
      continent: "Europe",
      places: ["Bellagio", "Como", "Florence", "Malpensa Airport", "Menaggio", "Milan", "Pisa", "Varenna"],
    },
    {
      country: "Netherlands",
      continent: "Europe",
      places: ["Amsterdam", "Zaanse Schans"],
    },
    {
      country: "Sweden",
      continent: "Europe",
      places: ["Lund", "Malmö"],
    },

    // --- North America (excluding US) ---
    {
      country: "Bahamas",
      continent: "North America",
      places: ["Celebration Key", "Grand Bahama Island"],
    },
    {
      country: "Canada",
      continent: "North America",
      places: ["Lynn Creek (North Vancouver)", "New Westminster", "Surrey", "Vancouver"],
    },
    {
      country: "Mexico",
      continent: "North America",
      places: ["Costa Maya", "Cozumel"],
    },
  ],
};

export default countries;
