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

      {/* Key Statistics */}
      <div className="px-8 mb-12">
        <div className="flex justify-center gap-5 p-5 lg:grid-cols-4">
          {data.stats.map(stat => {
            const Icon = resolveLucideIcon(stat.icon);
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center bg-white border shadow-sm ext-center p w-70 h-60 rounded-xl"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-lg bg-primary-50">
                  <Icon className="w-10 h-10 text-primary-600" />
                </div>
                <Text className="text-2xl font-bold text-blue-900 max-w-none">
                  {stat.value}
                </Text>
                <Text className="mt-1 text-sm font-medium text-gray-600 max-w-none">
                  {stat.label}
                </Text>
              </div>
            );
          })}
        </div>
      </div>

      {/* Page content */}
      <Section className="p-3 mb-12">
        {/* History */}
        <div className="mb-12">
          <Heading level={2}>History</Heading>
          <Text className="mt-2 mb-8 text-gray-500 max-w-none">
            {data.history}
          </Text>

          <div className="relative pl-8 space-y-6 border-l-2 border-primary-200">
            {data.timeline.map(entry => (
              <div key={entry.year} className="relative">
                <div className="absolute -left-[2.35rem] top-1.5 w-4 h-4 rounded-full bg-primary-500 border-4 border-white ring-2 ring-primary-300" />
                <div className="p-4 transition-all duration-200 bg-white border border-gray-200 shadow-sm rounded-xl hover:border-primary-400 hover:shadow-md">
                  <Text className="mb-1 text-sm font-bold text-primary-600 max-w-none">
                    {entry.year}
                  </Text>
                  <Text className="text-sm text-gray-600 max-w-none">
                    {entry.event}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Geography */}
        <div className="mb-12">
          <Heading level={2}>Geography</Heading>
          <Text className="mt-4 text-gray-600 max-w-none">
            {data.geography}
          </Text>
        </div>
      </Section>
    </>
  );
};

export default AboutAllen;
