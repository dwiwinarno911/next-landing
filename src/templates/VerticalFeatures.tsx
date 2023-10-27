import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Dwi Winarno"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <VerticalFeatureRow
      title="Dwi Winarno Latest Single"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="https://dwiwinarno.com/wp-content/uploads/2023/06/DW-2.jpg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="My Band In Office"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="https://dwiwinarno.com/wp-content/uploads/2023/06/maxresdefault-e1686743257145.jpeg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="My Accoustiq Single"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="https://dwiwinarno.com/wp-content/uploads/2023/06/Screenshot-from-2023-06-12-21-32-12-e1686580762994-400x391.png"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
