export interface AreaDetail {
  slug: string;
  name: string;
  overview: string;
  apartmentLiving: string;
  balconySafety: string;
  birdProblem: string;
  weatherDetails: string;
  nearbySlugs: string[];
}

// Data details representing key unique features of each Pune neighborhood to construct natural text
const localTraits: Record<string, { desc: string; housingType: string; localizedDetail: string }> = {
  "kothrud": {
    desc: "Kothrud is an established, prime residential area in Pune known for its rapid development, premium housing, and high family population.",
    housingType: "premium family apartments and modern residential blocks",
    localizedDetail: "With many active families and children playing around open balconies, child-safe invisible grills are a top local safety priority.",
  },
  "baner": {
    desc: "Baner is a bustling IT-adjacent residential hub in Pune, popular with working professionals and families residing in modern high-rises.",
    housingType: "modern high-rise condominiums and premium residential blocks",
    localizedDetail: "Balconies constructed with low handrail heights represent potential hazards for active children and pets, making protective steel grills essential.",
  },
  "hinjewadi": {
    desc: "Hinjewadi is Pune's premier IT park and tech corridor, dominated by multi-story gated communities and high-rise towers.",
    housingType: "premium high-rise gated community townships and IT apartments",
    localizedDetail: "High-floor wind pressures and kids playing on high balconies make high-tensile SS316 invisible grills a crucial safety check.",
  },
  "viman-nagar": {
    desc: "Viman Nagar is an upscale neighborhood in eastern Pune, close to the airport, featuring premium residential societies.",
    housingType: "premium luxury apartments and family housing blocks",
    localizedDetail: "Aesthetic window invisible grills are widely preferred here to secure windows without blocking flight-path breeze or light.",
  },
  "wakad": {
    desc: "Wakad is a fast-growing suburb in western Pune, popular for its high-rise residential complexes and proximity to IT parks.",
    housingType: "newly constructed high-rise apartments and family flats",
    localizedDetail: "Newly constructed flats here require early pet and child safety planning before residents move in.",
  },
  "aundh": {
    desc: "Aundh is an affluent suburb of Pune, known for its premium residential towers, green avenues, and active urban lifestyle.",
    housingType: "premium residential towers and green housing layouts",
    localizedDetail: "Homeowners choose invisible grills to maintain unobstructed views of the tree-lined streets while maintaining safety.",
  },
  "kharadi": {
    desc: "Kharadi is a major IT and commercial center in eastern Pune, witnessing high-rise residential growth along the Mula-Mutha river.",
    housingType: "modern multi-story apartments and tech-worker flats",
    localizedDetail: "The nearby open spaces attract birds, making window and balcony safety setups essential for home hygiene.",
  },
  "hadapsar": {
    desc: "Hadapsar is a prominent industrial and IT hub with massive high-rise townships and residential blocks.",
    housingType: "massive IT professional gated communities and flats",
    localizedDetail: "Residents here install high-strength sports nets and balcony grills to secure play areas and open balcony slots.",
  },
  "pune-cantonment": {
    desc: "Pune Cantonment is a historic, well-preserved military residential area featuring traditional layouts and modern housing blocks.",
    housingType: "traditional housing blocks and family apartments",
    localizedDetail: "Open banisters and old stair railings present falling hazards, requiring staircase invisible grills.",
  },
  "kondhwa": {
    desc: "Kondhwa is a rapidly developing, high-density residential zone in southern Pune with modern apartment complexes.",
    housingType: "high-density residential flats and mid-rise complexes",
    localizedDetail: "Balcony protection systems are highly popular among residents seeking reliable toddler fall-safety grids.",
  },
  "katraj": {
    desc: "Katraj is a scenic southern suburb of Pune, bordered by hills and lakes, featuring many residential high-rises.",
    housingType: "scenic view high-rises and family flats",
    localizedDetail: "Aesthetic invisible grills allow residents to enjoy scenic lake and hill views without safety compromises.",
  },
  "pimpri-chinchwad": {
    desc: "Pimpri-Chinchwad is a massive industrial city and residential satellite hub of Pune, featuring high-rise gated societies.",
    housingType: "high-rise gated societies and family residential towers",
    localizedDetail: "Strong wind gusts and safety standards require professional, heavy-duty anchoring systems for high-rise balconies.",
  },
  "magarpatta": {
    desc: "Magarpatta is a premium, state-of-the-art integrated township in Pune, characterized by massive IT towers and luxury residential spaces.",
    housingType: "premium luxury apartments and integrated township towers",
    localizedDetail: "High-end duplex villas and high-floor apartments rely on vertical staircase invisible grills and balcony guards.",
  },
  "wanowrie": {
    desc: "Wanowrie is a well-established, green residential locality in southeastern Pune with numerous multi-family apartment projects.",
    housingType: "green residential flats and multi-family apartments",
    localizedDetail: "Sports nets and window invisible grills are ideal for keeping balconies safe for pets and children alike.",
  },
};

// Master list of 14 Pune areas
export const areasList = Object.keys(localTraits);

// Dynamically generate the full data dictionary for 14 Pune areas
export const areasData: Record<string, AreaDetail> = areasList.reduce((acc, slug) => {
  const trait = localTraits[slug];
  const areaName = slug
    .replace("-", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  // Generate 5 nearby areas dynamically by slicing the master list
  const currentIdx = areasList.indexOf(slug);
  const nearbySlugs = [
    areasList[(currentIdx + 1) % areasList.length],
    areasList[(currentIdx + 2) % areasList.length],
    areasList[(currentIdx + 3) % areasList.length],
    areasList[(currentIdx + 4) % areasList.length],
    areasList[(currentIdx + 5) % areasList.length],
  ];

  acc[slug] = {
    slug,
    name: areaName,
    overview: `${trait.desc} As more families relocate to ${areaName} for its excellent infrastructure and proximity to work hubs, apartment living has become the standard. RJ Invisible Grills provides premium sports nets and invisible grill solutions in ${areaName} to ensure safe spaces.`,
    apartmentLiving: `Living in modern high-rise apartments in ${areaName} offers convenience, but open balconies and windows pose safety risks. Balconies constructed with low handrail heights represent potential hazards for active children and pets. RJ Invisible Grills installs custom-fit protective systems to secure these spaces.`,
    balconySafety: `Accidental balcony slips are a major concern. Our child safety systems and bite-resistant pet safety invisible grills seal open balcony gaps in ${areaName} homes. ${trait.localizedDetail}`,
    birdProblem: `Birds nesting in open ducts and window ledges present severe health risks. In ${areaName}, our transparent monofilament sports nets block bird intrusions, maintaining balcony cleanliness and hygiene.`,
    weatherDetails: `Pune's dry summer heat, direct sunlight, and seasonal monsoon rains require robust materials. For ${areaName} homes, RJ Invisible Grills installs UV-treated netting and rustproof SS316 marine-grade invisible grills that withstand the local climate without degrading.`,
    nearbySlugs,
  };

  return acc;
}, {} as Record<string, AreaDetail>);
