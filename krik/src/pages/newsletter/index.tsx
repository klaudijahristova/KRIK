import { GetServerSideProps } from "next";
import React from "react";
import HeroNewsletter from "src/components/newslletter/HeroNewsletter";
import TimeLine from "src/components/newslletter/TimeLine";
import { NewsletterPageProps } from "src/interfaces/NewsletterPage";

function newsletter({
  newsletterPageData,
}: {
  newsletterPageData: NewsletterPageProps[];
}) {
  return (
    <div className="newsletterPage">
      <HeroNewsletter />
      <TimeLine newsletterPageData={newsletterPageData} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const newsletterPageRes = await fetch(
    "http://localhost:5002/newsletter_page"
  );
  const newsletterPageData: NewsletterPageProps[] =
    await newsletterPageRes.json();

  return {
    props: {
      newsletterPageData,
    },
  };
};

export default newsletter;
