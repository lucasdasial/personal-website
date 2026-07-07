import Portfolio from "@/components/Portfolio";
import GitlabActivity from "@/components/GitlabActivity";
import LocaleGate from "@/components/LocaleGate";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lucas Alves",
  alternateName: "Dasial",
  url: "https://lucasdasial.com.br",
  image: "https://lucasdasial.com.br/assets/lucas.jpeg",
  jobTitle: "Backend Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Idopter Labs",
  },
  email: "mailto:as.lucasalves@gmail.com",
  sameAs: ["https://www.linkedin.com/in/lucasdasial/"],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "UNAMA · Universidade da Amazônia",
  },
  knowsAbout: ["Elixir", "Phoenix", "PostgreSQL", "Node.js", "TypeScript", "GraphQL"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <LocaleGate />
      <Portfolio initialLang="en" gitlabActivity={<GitlabActivity lang="en" />} />
    </>
  );
}
