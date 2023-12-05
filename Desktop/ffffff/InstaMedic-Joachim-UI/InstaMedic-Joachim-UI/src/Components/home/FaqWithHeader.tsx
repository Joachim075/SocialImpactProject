import { Title, Container, Text, UnstyledButton, Overlay, SimpleGrid } from '@mantine/core';
import classes from './FaqWithHeader.module.css';
import { ArticleCardImage } from './ArticleCardImage';


const categories = [
  {
    label: 'Customer Support',
    image:
      'https://i.pinimg.com/564x/98/5a/99/985a997ecc23c9e3fe5bc4169afbcbcf.jpg',
  },
  {
    label: 'Pharmacy',
    image:
      'https://images.unsplash.com/photo-1573883430060-1678c9cd4221?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    label: 'Surgery Bookings',
    image:
      'https://i.pinimg.com/564x/ad/8c/c7/ad8cc72f24ca4e8d7e4cc6a470ccd935.jpg',
  },
];

export function FaqWithHeader() {
  const items = categories.map((category) => (
    <UnstyledButton
      style={{ backgroundImage: `url(${category.image})` }}
      className={classes.categoryCard}
      key={category.label}
    >
      <Overlay color="#000" opacity={0.6} zIndex={1} />
      <Text size="xl" ta="center" fw={700} className={classes.categoryLabel}>
        {category.label}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Container className={classes.wrapper} size="lg">
      <div className={classes.header}>
        <div>
          <Title className={classes.title}>Get the best experince.</Title>
          <Title className={classes.titleOverlay} role="presentation">
            INSTAMEDIC
          </Title>
        </div>

        <div className={classes.contact}>
          <Text size="xl" fw={500} className={classes.contactTitle}>
            Contact us
          </Text>

          <ArticleCardImage />
        </div>
      </div>

      <SimpleGrid cols={{ base: 1, sm: 3 }}>{items}</SimpleGrid>
    </Container>
  );
}