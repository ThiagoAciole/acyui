import { Box, Card, CardBody, Flex, Heading5, Icon, Text } from '@aciole/acyon';
import './styles.css';

interface QuickStartCardProps {
  href: string;
  icon: 'download' | 'book';
  title: string;
  description: string;
}

export function QuickStartCard({
  href,
  icon,
  title,
  description,
}: QuickStartCardProps) {
  return (
    <Card as="a" href={href} className="home-quick-start-card">
      <CardBody>
        <Flex direction="column" gap="4">
          <Box className="home-quick-start-card__icon">
            <Icon name={icon} size={18} />
          </Box>
          <Flex direction="column" gap="2">
            <Heading5>{title}</Heading5>
            <Text size="sm" color="neutral">
              {description}
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}
