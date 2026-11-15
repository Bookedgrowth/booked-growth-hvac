import ServicePage, { serviceMetadata } from "@/components/ServicePage";

export const metadata = serviceMetadata("seo");

export default function Page() {
  return <ServicePage slug="seo" />;
}
