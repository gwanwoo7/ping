export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: "clear-focus",
    name: "Clear Focus",
    subtitle: "No.1 Eucalyptus & Menthol",
    description: "Invigorate your senses and sharpen your mind with this refreshing blend of eucalyptus and menthol. Perfect for morning showers or whenever you need mental clarity.",
    price: 19.99,
    image: "External_Package_No_1_dvapqt"
  },
  {
    id: "forest-bath",
    name: "Forest Bath",
    subtitle: "No.2 Pine Tree",
    description: "Transport yourself to a serene forest with this pine-scented shower steamer. Experience the therapeutic benefits of forest bathing in your own shower.",
    price: 19.99,
    image: "External_Package_No_2_tplhx9"
  },
  {
    id: "quiet-mind",
    name: "Quiet Mind",
    subtitle: "No.3 Hinoki",
    description: "Find your inner peace with the calming scent of Hinoki. This Japanese cypress-inspired steamer helps reduce stress and promote mental tranquility.",
    price: 19.99,
    image: "External_Package_No_3_sgnley"
  },
  {
    id: "midnight-calm",
    name: "Midnight Calm",
    subtitle: "No.4 Lavender & Chamomile",
    description: "Prepare for restful sleep with this soothing combination of lavender and chamomile. Perfect for evening showers to promote deep relaxation.",
    price: 19.99,
    image: "External_Package_No_4_zx9o3u"
  },
  {
    id: "radiant-energy",
    name: "Radiant Energy",
    subtitle: "No.5 Citrus & Yuzu",
    description: "Boost your energy with this uplifting blend of citrus and yuzu. A perfect way to revitalize your body and mind any time of day.",
    price: 19.99,
    image: "External_Package_No_5_qhmcfs"
  },
  {
    id: "gentle-grace",
    name: "Gentle Grace",
    subtitle: "No.6 Rose",
    description: "Indulge in the delicate essence of rose with this luxurious shower steamer. Experience a moment of grace and self-care in your daily routine.",
    price: 19.99,
    image: "External_Package_No_6_rjnvsc"
  }
];
