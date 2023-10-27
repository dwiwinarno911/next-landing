import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/dwiwinarno911">
            Dwi Winarno GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Our Social Media</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Learn Next-js React With Landing Page\n'}
            <span className="text-primary-500">Developer</span>
          </>
        }
        description="The easiest way to build a React landing page in seconds."
        button={
          <Link href="https://dwiwinarno.com/">
            <Button xl>My Personal Site Here</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
