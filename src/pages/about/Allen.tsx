import SEO from '../../components/SEO';
import Section from '../../components/ui/Section';
import { Heading } from '../../components/ui/Heading';
import { Text } from '../../components/ui/Text';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { Users, MapPin, Map, Award } from 'lucide-react';

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/allen' },
  { label: 'Allen', href: '/about/allen' },
];

const stats = [
  {
    icon: Users,
    value: '26,527',
    label: 'Population',
    sublabel: 'Estimated residents',
    asOf: 'As of 2020 census',
  },
  {
    icon: MapPin,
    value: '20',
    label: 'Barangays',
    sublabel: 'Administrative divisions',
    asOf: 'As of 2025',
  },
  {
    icon: Map,
    value: '47.60 km²',
    label: 'Land Area',
    sublabel: 'Total municipal coverage',
    asOf: 'As of 2025',
  },
  {
    icon: Award,
    value: 'December 1, 1863',
    label: 'Founded',
    sublabel: 'Date of establishment',
    asOf: '',
  },
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
            Allen is a coastal municipality in Northern Samar and the southern
            gateway between Luzon and the Visayas. Sitting along the San
            Bernardino Strait, it is where the ferry from Matnog, Sorsogon
            arrives — making it one of the most-travelled entry points into the
            Eastern Visayas region. Behind the busy port is a close-knit
            community of fisherfolk, farmers, and families who have called this
            stretch of coastline home for generations.
          </Text>
        </div>

        {/* Short History */}
        <div className="mb-12">
          <Heading level={2}>History</Heading>
          <Text className="mt-4 text-gray-600">
            Allen was formally established on December 1, 1863, during the
            Spanish colonial period, though the area had long been settled by
            coastal communities who depended on fishing and trade along the
            strait. Over the centuries, Allen grew from a quiet seaside town
            into a significant transit point — shaped by colonial
            administration, war, and the steady movement of people between
            islands.
          </Text>
        </div>

        {/* Key Statistics */}
        <div className="mb-12 text-center">
          <Heading level={2}>Allen at a Glance</Heading>
          <Text className="mt-2 text-gray-500">
            Key statistics about our municipality
          </Text>

          <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(stat => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="p-6 text-left bg-white border shadow-sm rounded-xl"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 mb-4 rounded-lg bg-primary-50">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <Text className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </Text>
                  <Text className="mt-1 text-sm font-medium text-gray-700">
                    {stat.label}
                  </Text>
                  <Text className="text-xs text-gray-400">{stat.sublabel}</Text>
                  {stat.asOf && (
                    <Text className="mt-1 text-xs text-gray-400">
                      {stat.asOf}
                    </Text>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Optional: Geography */}
        <div className="mb-12">
          <Heading level={2}>Geography</Heading>
          <Text className="mt-4 text-gray-600">
            Allen occupies a narrow coastal strip along the northern tip of
            Samar, facing the San Bernardino Strait to the north. The
            municipality covers 47.60 km² of land, with terrain that transitions
            from a flat coastal shoreline into rolling hills inland. The strait
            separates Samar from the Bicol Peninsula of Luzon, making Allen's
            position geographically significant — it sits at the natural
            crossing point between two major island groups. The town proper hugs
            the coast, while its 20 barangays spread inland and along adjacent
            shorelines. .
          </Text>
        </div>

        {/* Optional: Economy */}
        <div className="mb-12">
          <Heading level={2}>Economy</Heading>
          <Text className="mt-4 text-gray-600">
            Allen's economy is anchored by fishing and the movement of goods and
            people through its port. The San Bernardino Strait provides rich
            fishing grounds, and many residents make their living from the sea —
            supplying local markets and nearby towns with fresh catch. The RoRo
            (Roll-on/Roll-off) ferry terminal connecting Allen to Matnog,
            Sorsogon drives consistent commercial activity: transport services,
            small trading, eateries, and informal vendors all cluster around the
            port area. Agriculture — primarily coconut farming and rice —
            supplements livelihoods further inland.
          </Text>
        </div>
      </Section>
    </>
  );
};

export default AboutAllen;
