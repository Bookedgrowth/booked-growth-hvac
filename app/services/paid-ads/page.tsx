import ServicePage, { serviceMetadata } from "@/components/ServicePage";

export const metadata = serviceMetadata("paid-ads");

export default function Page() {
  return <ServicePage slug="paid-ads" />;
}
