export type { NicheData, Treatment, CitationDirectory } from "./types";
export { images } from "./images";

import { nicheData as dermatologists } from "./dermatologists";
import { nicheData as dentists } from "./dentists";
import { nicheData as plasticSurgeons } from "./plastic-surgeons";
import { nicheData as ivfClinics } from "./ivf-clinics";
import { nicheData as lawyers } from "./lawyers";
import { nicheData as realEstate } from "./real-estate";
import { nicheData as eyeClinics } from "./eye-clinics";
import { nicheData as orthopedics } from "./orthopedics";
import { nicheData as caFirms } from "./ca-firms";
import { nicheData as restaurants } from "./restaurants";
import { nicheData as gyms } from "./gyms";
import { nicheData as weddingPlanners } from "./wedding-planners";
import { nicheData as physiotherapy } from "./physiotherapy";
import { nicheData as veterinary } from "./veterinary";
import { nicheData as coachingInstitutes } from "./coaching-institutes";
import { nicheData as interiorDesigners } from "./interior-designers";
import { nicheData as ayurvedaClinics } from "./ayurveda-clinics";
import { nicheData as hairSalons } from "./hair-salons";
import { nicheData as pediatricians } from "./pediatricians";
import { nicheData as psychiatrists } from "./psychiatrists";

import type { NicheData } from "./types";

export const niches: NicheData[] = [
  dermatologists,
  dentists,
  plasticSurgeons,
  ivfClinics,
  lawyers,
  realEstate,
  eyeClinics,
  orthopedics,
  caFirms,
  restaurants,
  gyms,
  weddingPlanners,
  physiotherapy,
  veterinary,
  coachingInstitutes,
  interiorDesigners,
  ayurvedaClinics,
  hairSalons,
  pediatricians,
  psychiatrists,
];

export function getAllNiches(): NicheData[] {
  return niches;
}

export function getNicheBySlug(slug: string): NicheData | undefined {
  return niches.find((n) => n.slug === slug);
}

export function getNicheSlugs(): string[] {
  return niches.map((n) => n.slug);
}
