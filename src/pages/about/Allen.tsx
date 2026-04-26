import SEO from '../../components/SEO';
import Section from '../../components/ui/Section';
import { Heading } from '../../components/ui/Heading';
import { Text } from '../../components/ui/Text';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/allen' },
  { label: 'Allen', href: '/about/allen' },
];

const AboutAllen: React.FC = () => {
  return (
    <>
      <SEO
        title="About Allen"
        description="Learn about Allen, a municipality in Northern Samar, Philippines."
        keywords="Allen, Northern Samar, municipality, history, Philippines"
      />
      <Section className="py-12">
        <Breadcrumbs className="mb-8" items={breadcrumbs} />

        {/* Hero / Introduction */}
        <div className="mb-12">
          <Heading level={1}>Allen, Northern Samar</Heading>
          <Text className="max-w-2xl mt-4 text-gray-600">
            TODO: Brief description of Allen municipality.
          </Text>
        </div>

        {/* Short History */}
        <div className="mb-12">
          <Heading level={2}>History</Heading>
          <Text className="mt-4 text-gray-600">
            TODO: Short history of Allen.
          </Text>
        </div>

        {/* Key Statistics */}
        <div className="mb-12">
          <Heading level={2}>Key Statistics</Heading>
          <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-4">
            {/* TODO: Replace with real stats */}
            {[
              { label: 'Population', value: 'TODO' },
              { label: 'Land Area', value: 'TODO' },
              { label: 'Barangays', value: 'TODO' },
              { label: 'Founded', value: 'TODO' },
            ].map(stat => (
              <div
                key={stat.label}
                className="p-4 text-center border rounded-lg"
              >
                <Text className="text-2xl font-bold text-primary-600">
                  {stat.value}
                </Text>
                <Text className="text-sm text-gray-500">{stat.label}</Text>
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Geography */}
        <div className="mb-12">
          <Heading level={2}>Geography</Heading>
          <Text className="mt-4 text-gray-600">TODO: Geography section.</Text>
        </div>

        {/* Optional: Economy */}
        <div className="mb-12">
          <Heading level={2}>Economy</Heading>
          <Text className="mt-4 text-gray-600">TODO: Economy section.</Text>
        </div>
      </Section>
    </>
  );
};

export default AboutAllen;
