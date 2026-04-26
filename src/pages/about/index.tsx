import { Outlet, NavLink } from 'react-router-dom';
import SEO from '../../components/SEO';
import Section from '../../components/ui/Section';

const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About"
        description="Learn about Allen municipality and the BetterGov initiative."
        keywords="Allen, municipality, BetterGov, BetterLGU, local government"
      />
      <main className="grow">
        {/* Sub-navigation */}
        <div className="bg-white border-b border-gray-200">
          <Section>
            <nav className="flex gap-6">
              <NavLink
                to="/about/allen"
                className={({ isActive }) =>
                  `py-3 text-sm font-medium border-b-2 transition-colors ${
                    isActive
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-gray-600 hover:text-primary-600'
                  }`
                }
              >
                About Allen
              </NavLink>
              <NavLink
                to="/about/bettergov"
                className={({ isActive }) =>
                  `py-3 text-sm font-medium border-b-2 transition-colors ${
                    isActive
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-gray-600 hover:text-primary-600'
                  }`
                }
              >
                About BetterGov
              </NavLink>
            </nav>
          </Section>
        </div>

        {/* Child route renders here */}
        <Outlet />
      </main>
    </>
  );
};

export default About;
