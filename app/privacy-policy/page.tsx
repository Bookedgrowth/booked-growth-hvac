import { privacy } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";
import LegalPage from "@/components/LegalPage";

export const metadata = buildMetadata({ ...privacy.meta, path: "/privacy-policy", ogTitle: privacy.title });

export default function PrivacyPolicyPage() {
  return <LegalPage path="/privacy-policy" {...privacy} />;
}
