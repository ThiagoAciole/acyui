import { Box, Code, PageHeader } from '@aciole/acyon';
import { InstallStep } from '../../../components/InstallStep';
import { homeContent } from '../content';

export function InstallationSection() {
  const { installation } = homeContent;

  return (
    <>
      <PageHeader
        title={installation.header.title}
        description={installation.header.description}
        width="84%"
      />

      <Box className="home-installation-section__steps">
        {installation.steps.map((step) => (
          <InstallStep
            key={step.step}
            step={step.step}
            title={step.title}
            description={(
              <>
                {step.description.split('<Code>')[0]}
                {step.description.includes('<Code>')
                  ? (
                    <>
                      <Code>{step.description.split('<Code>')[1].split('</Code>')[0]}</Code>
                      {step.description.split('</Code>')[1]}
                    </>
                  )
                  : null}
              </>
            )}
            code={step.code}
          />
        ))}
      </Box>
    </>
  );
}
