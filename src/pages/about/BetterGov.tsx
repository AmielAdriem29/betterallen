import SEO from '../../components/SEO';
import Section from '../../components/ui/Section';
import { Heading } from '../../components/ui/Heading';
import { Text } from '../../components/ui/Text';
import Breadcrumbs from '../../components/ui/Breadcrumbs';

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/bettergov' },
  { label: 'BetterGov', href: '/about/bettergov' },
];

const AboutBetterGov: React.FC = () => {
  return (
    <>
      <SEO
        title="About BetterGov"
        description="Learn about the BetterGov initiative and the BetterLGU project."
        keywords="BetterGov, BetterLGU, local government, civic technology, Philippines"
      />
      <Section className="py-12">
        <Breadcrumbs className="mb-8" items={breadcrumbs} />

        {/* Hero / Introduction */}
        <div className="mb-12">
          <Heading level={1}>About BetterGov</Heading>
          <Text className="max-w-2xl mt-4 text-gray-600">
            TODO: What BetterGov is and the BetterLGU initiative.
          </Text>
        </div>

        {/* Mission and Goals */}
        <div className="mb-12">
          <Heading level={2}>Mission and Goals</Heading>
          <Text className="mt-4 text-gray-600">
            TODO: Mission and goals of BetterGov.
          </Text>
        </div>

        {/* Why It Was Created */}
        <div className="mb-12">
          <Heading level={2}>Why It Was Created</Heading>
          <Text className="mt-4 text-gray-600">
            TODO: Why BetterGov was created.
          </Text>
        </div>

        {/* How LGUs and Citizens Benefit */}
        <div className="mb-12">
          <Heading level={2}>How It Helps</Heading>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div className="p-6 border rounded-lg">
              <Heading level={3}>For Local Governments</Heading>
              <Text className="mt-2 text-gray-600">
                TODO: How LGUs benefit.
              </Text>
            </div>
            <div className="p-6 border rounded-lg">
              <Heading level={3}>For Citizens</Heading>
              <Text className="mt-2 text-gray-600">
                TODO: How citizens benefit.
              </Text>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutBetterGov;
