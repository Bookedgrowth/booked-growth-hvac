/**
 * The one switch for which industry this build shows.
 * To make the therapist version: create content/industries/therapy.ts (and therapy-faq.ts)
 * and point these two exports at it. No component changes needed.
 */
import { hvac, hvacFaqs } from "./industries/hvac";

export const industry = hvac;
export const faqs = hvacFaqs;
export { site, socialLinks } from "./site";
export type * from "./industries/types";
