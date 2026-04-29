import SEO from '../../components/SEO';
import Section from '../../components/ui/Section';
import { Heading } from '../../components/ui/Heading';
import { Text } from '../../components/ui/Text';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { resolveLucideIcon } from '../../lib/utils';
import yaml from 'js-yaml';
import betterGovYaml from '../../data/about_bettergov.yaml?raw';

interface Benefit {
  audience: string;
  icon?: string;
  description: string;
}

interface BetterGovData {
  name: string;
  tagline: string;
  description: string;
  mission: string;
  why: string;
  benefits: Benefit[];
}

const data = yaml.load(betterGovYaml) as BetterGovData;

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'BetterGov', href: '/about/bettergov' },
];

const AboutBetterGov: React.FC = () => {
  return (
    <>
      <SEO
        title={`About ${data.name}`}
        description={data.description}
        keywords="BetterGov, BetterLGU, local government, civic technology, Philippines"
      />

      {/* Blue hero banner */}
      <div className="py-12 text-white bg-linear-to-r from-primary-600 to-primary-700">
        <div className="container px-6 mx-auto text-center sm:px-12 lg:px-20">
          <Breadcrumbs
            className="justify-center mb-6 text-white"
            items={breadcrumbs}
          />
          <Heading level={1} className="text-white">
            {data.name}
          </Heading>
          <Text className="mt-4 text-primary-100 max-w-none sm:px-8 lg:px-16">
            {data.tagline}
          </Text>
        </div>
      </div>

      <Section className="p-1 px-6 mb-12 sm:px-10 lg:px-20 xl:px-30">
        {/* What is BetterGov */}
        <div className="mb-12">
          <Text className="text-lg leading-relaxed text-gray-700 max-w-none">
            {data.description}
          </Text>
        </div>

        <hr className="mb-12 border-gray-200" />

        {/* Mission */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block w-1 h-5 rounded-full bg-primary-500" />
            <Text className="text-xs font-bold tracking-widest uppercase text-primary-500 max-w-none">
              Our Mission
            </Text>
          </div>
          <Heading level={2} className="mb-3 text-gray-900">
            What We&apos;re Here to Do
          </Heading>
          <Text className="leading-relaxed text-gray-600 max-w-none">
            {data.mission}
          </Text>
        </div>

        {/* Why It Exists */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block w-1 h-5 rounded-full bg-primary-500" />
            <Text className="text-xs font-bold tracking-widest uppercase text-primary-500 max-w-none">
              Why It Exists
            </Text>
          </div>
          <Heading level={2} className="mb-3 text-gray-900">
            The Problem We&apos;re Solving
          </Heading>
          <Text className="leading-relaxed text-gray-600 max-w-none">
            {data.why}
          </Text>
        </div>

        <hr className="mb-12 border-gray-200" />

        {/* Who It's For */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block w-1 h-5 rounded-full bg-primary-500" />
            <Text className="text-xs font-bold tracking-widest uppercase text-primary-500 max-w-none">
              Who It&apos;s For
            </Text>
          </div>
          <Heading level={2} className="mb-6 text-gray-900">
            Built for Every Filipino
          </Heading>
          <div className="flex flex-col gap-4 lg:flex-row">
            {data.benefits.map(benefit => {
              const Icon = resolveLucideIcon(benefit.icon);
              return (
                <div
                  key={benefit.audience}
                  className="flex flex-col gap-3 p-6 border border-primary-100 bg-primary-50 rounded-2xl lg:w-1/2"
                >
                  <div className="flex items-center gap-2">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary-600 shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <Text className="font-semibold text-primary-800 max-w-none">
                      {benefit.audience}
                    </Text>
                  </div>
                  <Text className="text-sm leading-relaxed text-gray-600 max-w-none">
                    {benefit.description}
                  </Text>
                </div>
              );
            })}
          </div>
        </div>

        <hr className="mb-12 border-gray-200" />

        {/* Get Involved */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block w-1 h-5 rounded-full bg-primary-500" />
            <Text className="text-xs font-bold tracking-widest uppercase text-primary-500 max-w-none">
              Get Involved
            </Text>
          </div>
          <Heading level={2} className="mb-3 text-gray-900">
            Help Us Build It
          </Heading>
          <Text className="mb-5 leading-relaxed text-gray-600 max-w-none">
            BetterGov is open to anyone who believes Filipinos deserve better
            from their government&apos;s digital services. Reach out and join
            the effort.
          </Text>
          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href="mailto:volunteers@bettergov.ph"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-500 transition-colors"
            >
              Email Us
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-primary-700 border border-primary-200 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors"
            >
              Open an Issue on GitHub
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutBetterGov;
