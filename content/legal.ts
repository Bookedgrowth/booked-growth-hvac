/**
 * Legal copy. Not industry-specific.
 * Privacy Policy is carried over from the live site, plus an SMS section for A2P.
 * Terms of Service are new standard terms.
 * TODO(stefano): have both reviewed (ideally by a lawyer) before launch.
 */

export type LegalSection = { heading: string; paragraphs: string[]; bullets?: string[] };

export const privacy = {
  title: "Privacy Policy",
  meta: {
    title: "Privacy Policy | Booked Growth",
    description: "Learn how Booked Growth collects, uses and protects your information, including SMS and mobile data.",
  },
  // TODO(stefano): update the effective date when you approve the new SMS section.
  effectiveDate: "September 16, 2026",
  intro:
    'Booked Growth ("we," "us," or "our") respects your privacy. This policy explains what information we collect through bookedgrowth.net and how we use it.',
  sections: [
    {
      heading: "Information We Collect",
      paragraphs: [
        "When you submit a form on our site or through our advertising (including Google lead forms), we may collect your name, email address, phone number, business name, and details about your business needs.",
        "We also use Google Analytics and Google Ads to understand site traffic and measure the performance of our advertising. These tools may use cookies or similar technologies to collect information such as your IP address, browser type, and pages visited.",
      ],
    },
    {
      heading: "How We Use Your Information",
      paragraphs: [
        "We use the information you provide to respond to your inquiry, prepare proposals, deliver services you've requested, and improve our marketing. We do not sell your personal information to third parties.",
      ],
    },
    {
      heading: "Advertising and Analytics",
      paragraphs: [
        "We use Google Ads and Google Analytics (GA4) to measure how people interact with our site and ads. You can learn more about how Google uses this data at [policies.google.com/technologies/partner-sites](https://policies.google.com/technologies/partner-sites). You can opt out of personalized advertising through Google's Ad Settings.",
      ],
    },
    {
      heading: "Text Messages (SMS)",
      paragraphs: [
        "If you give us your mobile number and agree to receive text messages, we may text you about your inquiry, appointments and our services. Message frequency varies. Message and data rates may apply. Reply STOP to opt out at any time, or HELP for help.",
        "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging opt-in data and consent will not be shared with any third parties, except service providers that help us send messages.",
      ],
    },
    {
      heading: "Data Sharing",
      paragraphs: [
        "We do not share your personal information with third parties except service providers who help us operate our business (such as our CRM or hosting provider), and only as needed to provide our services to you.",
      ],
    },
    {
      heading: "Your Choices",
      paragraphs: ["You can ask us to delete your information at any time by contacting us at the email below."],
    },
    {
      heading: "Children's Privacy",
      paragraphs: ["Our services are not directed to individuals under 18, and we do not knowingly collect information from children."],
    },
    {
      heading: "Contact Us",
      paragraphs: ["Questions about this policy? Email us at [sbranca@bookedgrowth.net](mailto:sbranca@bookedgrowth.net)."],
    },
    {
      heading: "Changes to This Policy",
      paragraphs: ["We may update this policy from time to time. Changes will be posted on this page with a new effective date."],
    },
  ] satisfies LegalSection[],
};

export const terms = {
  title: "Terms of Service",
  meta: {
    title: "Terms of Service | Booked Growth",
    description: "The terms that apply when you use bookedgrowth.net, contact Booked Growth or agree to receive text messages from us.",
  },
  // TODO(stefano): set the effective date once you've reviewed these terms.
  effectiveDate: "November 15, 2026",
  intro:
    'These Terms of Service ("Terms") apply to your use of bookedgrowth.net (the "Site") and to communications with Booked Growth LLC ("Booked Growth," "we," "us," or "our"). By using the Site, you agree to these Terms.',
  sections: [
    {
      heading: "Use of the Site",
      paragraphs: [
        "You may use the Site to learn about our services and contact us. You agree not to misuse the Site, interfere with how it works, or try to access it in ways we did not intend.",
      ],
    },
    {
      heading: "Our Services",
      paragraphs: [
        "Information on the Site describes our services in general terms. The scope, timeline, fees and terms for any paid work are set out in a separate written agreement between you and Booked Growth. If that agreement conflicts with these Terms, the agreement controls.",
      ],
    },
    {
      heading: "Free Audit",
      paragraphs: [
        "Our free online audit is provided for information only. It is not a guarantee of results. You are not required to buy anything after the audit.",
      ],
    },
    {
      heading: "SMS Terms",
      paragraphs: [
        "By providing your mobile number and opting in, you agree to receive text messages from Booked Growth about your inquiry, appointments and our services.",
      ],
      bullets: [
        "Program name: Booked Growth",
        "Message frequency varies.",
        "Message and data rates may apply.",
        "Reply STOP to cancel at any time. You will get one message confirming you have opted out.",
        "Reply HELP for help, or contact us at sbranca@bookedgrowth.net.",
        "Carriers are not liable for delayed or undelivered messages.",
        "Consent to receive texts is not a condition of buying any service.",
        "See our Privacy Policy for how we handle your information. We do not share mobile numbers or SMS consent with third parties for marketing.",
      ],
    },
    {
      heading: "Intellectual Property",
      paragraphs: [
        "The Site and its content, including text, graphics and logos, belong to Booked Growth or its licensors. You may not copy or reuse them without our written permission. Sample website designs shown on the Site are for demonstration only.",
      ],
    },
    {
      heading: "Third-Party Links and Tools",
      paragraphs: [
        "The Site may link to or embed third-party services, such as scheduling and analytics tools. We are not responsible for their content or practices. Your use of them is subject to their own terms.",
      ],
    },
    {
      heading: "Disclaimers",
      paragraphs: [
        'The Site is provided "as is." We do our best to keep information accurate, but we do not promise that the Site will be error-free or always available. Marketing results depend on many factors outside our control.',
      ],
    },
    {
      heading: "Limitation of Liability",
      paragraphs: [
        "To the fullest extent allowed by law, Booked Growth is not liable for any indirect, incidental or consequential damages arising from your use of the Site.",
      ],
    },
    {
      heading: "Governing Law",
      paragraphs: ["These Terms are governed by the laws of the State of Florida, without regard to its conflict of law rules."],
    },
    {
      heading: "Changes to These Terms",
      paragraphs: ["We may update these Terms from time to time. Changes will be posted on this page with a new effective date."],
    },
    {
      heading: "Contact",
      paragraphs: ["Booked Growth LLC, Miami, FL. Email [sbranca@bookedgrowth.net](mailto:sbranca@bookedgrowth.net)."],
    },
  ] satisfies LegalSection[],
};
