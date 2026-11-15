import ServicePage, { serviceMetadata } from "@/components/ServicePage";

export const metadata = serviceMetadata("google-business-profile");

export default function Page() {
  return <ServicePage slug="google-business-profile" />;
}
