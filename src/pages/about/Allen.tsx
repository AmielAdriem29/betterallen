import SEO from '../../components/SEO';
import Section from '../../components/ui/Section';
import { Heading } from '../../components/ui/Heading';
import { Text } from '../../components/ui/Text';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { resolveLucideIcon } from '../../lib/utils';
import yaml from 'js-yaml';
import allenYaml from '../../data/about_allen.yaml?raw';

interface Stat {
  label: string;
  value: string;
  sublabel?: string;
  asOf?: string;
  icon?: string;
}

interface TimelineEntry {
  year: string;
  event: string;
}

interface AllenData {
  name: string;
  province: string;
  description: string;
  history: string;
  geography: string;
  economy: string;
  stats: Stat[];
  timeline: TimelineEntry[];
}

const data = yaml.load(allenYaml) as AllenData;

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Allen', href: '/about/allen' },
];

const AboutAllen: React.FC = () => {
  return (
    <>
      <SEO
        title={`About ${data.name}`}
        description={data.description}
        keywords={`${data.name}, ${data.province}, municipality, history, Philippines`}
      />

      {/* Blue hero banner */}
      <div className="py-12 text-white bg-linear-to-r from-primary-600 to-primary-700">
        <div className="container px-40 mx-auto text-center">
          <Breadcrumbs
            className="justify-center mb-6 text-white"
            items={breadcrumbs}
          />
          <Heading level={1} className="text-white">
            {data.name}, {data.province}
          </Heading>
          <Text className="px-32 mt-4 text-primary-100 max-w-none">
            {data.description}
          </Text>
        </div>
      </div>

      {/* Page content */}
      <Section className="p-3 mb-12">
        {/* History */}
        <div className="mb-12">
          <Heading level={2}>History</Heading>
          <Text className="mt-4 text-gray-600 max-w-none">{data.history}</Text>
        </div>

        {/* Timeline */}
        <div className="mb-12">
          <Heading level={2}>Timeline</Heading>
          <div className="relative pl-6 mt-6 space-y-8 border-l-2 border-primary-200">
            {data.timeline.map(entry => (
              <div key={entry.year} className="relative">
                <div className="absolute -left-[1.65rem] top-1 w-3 h-3 rounded-full bg-primary-500 border-2 border-white" />
                <Text className="mb-1 text-sm font-semibold text-primary-600 max-w-none">
                  {entry.year}
                </Text>
                <Text className="text-gray-600 max-w-none">{entry.event}</Text>
              </div>
            ))}
          </div>
        </div>

        {/* Key Statistics */}
        <div className="px-8 mb-12">
          <div className="mb-8 text-center">
            <Heading level={2}>Allen at a Glance</Heading>
            <Text className="mt-2 text-gray-500 max-w-none">
              Key statistics about our municipality
            </Text>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {data.stats.map(stat => {
              const Icon = resolveLucideIcon(stat.icon);
              return (
                <div
                  key={stat.label}
                  className="p-6 text-center bg-white border shadow-sm rounded-xl"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-lg bg-primary-50">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <Text className="text-2xl font-bold text-gray-900 max-w-none">
                    {stat.value}
                  </Text>
                  <Text className="mt-1 text-sm font-medium text-gray-700 max-w-none">
                    {stat.label}
                  </Text>
                </div>
              );
            })}
          </div>
        </div>

        {/* Geography */}
        <div className="mb-12">
          <Heading level={2}>Geography</Heading>
          <Text className="mt-4 text-gray-600 max-w-none">
            {data.geography}
          </Text>
        </div>

        {/* Economy */}
        <div className="mb-12">
          <Heading level={2}>Economy</Heading>
          <Text className="mt-4 text-gray-600 max-w-none">{data.economy}</Text>
        </div>
      </Section>
    </>
  );
};

export default AboutAllen;
