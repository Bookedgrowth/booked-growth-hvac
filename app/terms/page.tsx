import { terms } from "@/content/legal";
import { buildMetadata } from "@/lib/seo";
import LegalPage from "@/components/LegalPage";

export const metadata = buildMetadata({ ...terms.meta, path: "/terms", ogTitle: terms.title });

export default function TermsPage() {
  return <LegalPage path="/terms" {...terms} />;
}
