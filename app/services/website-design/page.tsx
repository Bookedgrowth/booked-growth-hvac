import ServicePage, { serviceMetadata } from "@/components/ServicePage";

export const metadata = serviceMetadata("website-design");

export default function Page() {
  return <ServicePage slug="website-design" />;
}
