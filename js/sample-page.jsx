import React from "react";
import { Link } from "react-router";
import {
  Code,
  CustomerQuote, CustomerQuotes,
  DropdownMenu, DropdownToggle,
  Footer, FooterAddress,
  Hero,
  HorizontalSplit,
  ImageList, ImageListItem,
  Navbar, NavItem,
  Page,
  PricingPlan, PricingTable,
  Section,
  SignupInline, SignupModal,
  Stripe,
  Team,
  TeamMember,
} from "neal-react";


const brandName = "CMD+N GmbH";
const brand = <span>{brandName}</span>;

const onSignup = ({ name: name, email: email }) => Stripe.StripeHandler.open({
  name: "Stripe Integration Included",
  description: "Like this? Donate $5 <3",
  panelLabel: "Donate {{amount}}",
  email: email,
  amount: 500,
});

const businessAddress = (
  <address>
    <strong>{brandName}</strong><br/>
    Sanderstr. 22<br/>
    12047 Berlin<br/>
  </address>
);

const pricingPlan1 = {
  name: "Personal",
  description: "Describe your plans with easy-to-use pricing tables. Each plan provides callbacks to handle visitor clicks.",
  price: "9,99€",
  features: {
    "Describe pricing plans as JSON": true,
    "Features can be active/inactive": true,
    "Works on mobile": true,
    "Custom callbacks": true,
    "Extra Feature 1": false,
    "Extra Feature 2": false,
  },
  onClick: onSignup,
};

const pricingPlan2 = Object.assign({}, pricingPlan1, {
  price: "59,99€",
  name: "Startup",
  features: Object.assign({}, pricingPlan1.features, {
    "Extra Feature 1": true,
  }),
});




export default (props) => {
  return (
    <Page>

      <Hero backgroundImage="img/macbook.jpg"
        className="text-xs-center">
        <h1 className="display-4">Bookclub chat </h1>
        <p className="lead">Diskutiere in unserer Slackcommunity über die wichtigsten Bücher.</p>
      </Hero>

      <Section className="subhero">
        <p className="lead">Sobald 30 Teilnehmer zusammen gekommen sind, erstellen wir einen Slack Channel pro Buch.</p>
        <ImageList centered>
          <ImageListItem src="img/cover/lean-startup.jpg" />
          <ImageListItem src="img/cover/holocracy.jpg" />
          <ImageListItem src="img/cover/blockchain-revolution.jpg" />
          <ImageListItem src="img/cover/null-grenzkosten-gesellschaft.jpg" />
          <ImageListItem src="img/cover/singularity.jpg" />
          <ImageListItem src="img/cover/sprint.jpg" />
          <ImageListItem src="img/cover/digital-innovation-playbook.jpg" />
          <ImageListItem src="img/cover/new-business-order.jpg" />
          <ImageListItem src="img/cover/remote.jpg" />
          <ImageListItem src="img/cover/predictably-irrational.jpg" />
          <ImageListItem src="img/cover/start-with-why.jpg" />
          <ImageListItem src="img/cover/hooked.jpg" />
          <ImageListItem src="img/cover/dont-make-me-think.jpg" />
          <ImageListItem src="img/cover/the-innovators-dilemma.jpg" />
          <ImageListItem src="img/cover/kopf-schlaegt-kapital.jpg" />
          <ImageListItem src="img/cover/zero-to-one.jpg" />
          <ImageListItem src="img/cover/hard-things.jpg" />
          <ImageListItem src="img/cover/rework.jpg" />
          <ImageListItem src="img/cover/business-model-generation.jpg" />
          <ImageListItem src="img/cover/measure-anything.jpg" />
          <ImageListItem src="img/cover/4-stunden-woche.jpg" />
          <ImageListItem src="img/cover/open-source-manifesto.jpg" />
          <ImageListItem src="img/cover/matchmakers.jpeg" />
          <ImageListItem src="img/cover/platform-revolution.jpg" />
          <ImageListItem src="img/cover/dquarks.jpg" />
          <ImageListItem src="img/cover/deutschland-4null.jpg" />
          <ImageListItem src="img/cover/silicon-germany.jpg" />
          <ImageListItem src="img/cover/vierte-industrielle-revolution.jpg" />
          <ImageListItem src="img/cover/data-unser.jpg" />
          <ImageListItem src="img/cover/granulare-gesellschaft.jpg" />
          <ImageListItem src="img/cover/create-a-mind.jpg" />
        </ImageList>
      </Section>

      <Section>
        <HorizontalSplit padding="md">
          <div>
            <p className="lead">Slack</p>
            <p>Diskutiere in unserer Slackcommunity über die wichtigsten Bücher zur Digitalen Transformation und tausche dich mit anderen Lesern aus.</p>
          </div>
          <div>
            <p className="lead">Meetups</p>
            <p>Wir wollen Meetups veranstalten, um uns zu treffen und zu disktutieren</p>
          </div>
        </HorizontalSplit>
      </Section>

      <Section>
        <PricingTable>
          <PricingPlan {... pricingPlan1} />
          <PricingPlan {... pricingPlan2} />
        </PricingTable>
      </Section>


      <Footer brandName={brandName}
        facebookUrl="http://www.facebook.com"
        twitterUrl="http://www.twitter.com/dennybritz"
        githubUrl="https://github.com/dennybritz/neal-react"
        address={businessAddress}>
      </Footer>
    </Page>
  );
};
