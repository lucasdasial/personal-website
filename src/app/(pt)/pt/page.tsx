import Portfolio from "@/components/Portfolio";
import GitlabActivity from "@/components/GitlabActivity";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lucas Alves",
  alternateName: "Dasial",
  url: "https://lucasdasial.com.br/pt",
  image: "https://lucasdasial.com.br/assets/lucas.jpeg",
  jobTitle: "Engenheiro de Software Backend",
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

export default function HomePt() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Portfolio initialLang="pt" gitlabActivity={<GitlabActivity lang="pt" />} />
    </>
  );
}
