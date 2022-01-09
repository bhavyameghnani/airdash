import * as React from 'react';
import Box from '@material-ui/core/Box';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const steps = [
  {
    label: 'Digital Face ID',
    description: `Generate your face id if not done already.`,
    url: '#/vault'
  },
  {
    label: 'Digi Vault',
    description:
      'Upload your vital documents',
      url: '#/vault'
  },
  {
    label: 'Travel check-list',
    description: `View all instructions for your travel`,
    url: '#/news'
  },
  {
    label: 'Travel to airport',
    description: `View all public transport options or book a cab / parking lot`,
    url: '#/bialInfo'
  },
  {
    label: 'Contactless self check-in',
    description: `Validate your Digital Face ID`,
    url: '#/vault'
    
  },
  {
    label: 'Auto-generate of Boarding Pass',
    description: `Boarding pass will be auto-generated and available on Digi Vault`,
    url: '#/vault'
  },
  
  {
    label: 'Counter no. 3 for Security check-in',
    description: `Air Dash mobile apps users have a dedicated security counter`,
    url: '#/news'
  },
  {
    label: 'Shop Marketplace',
    description: `Exclusive discount offers on food & gift options`,
    url: '#/rewards'
  },
 
  {
    label: 'Augmented Reality Maps',
    description: `Use Augmented Reality Maps to vist any shops or counter`,
    url: '#/shop'
  },
  {
    label: 'Have a safe journey',
    description: `You are all set! Sit back and enjoy the flight`,
    url: '#/podcast'
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 600 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 9 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <br/>
             
              <Link color="inherit"
                 noWrap
                variant="body2"
                href={step.url}
                >
              Click here</Link>
              <Box sx={{ mb: 2 }}>
                <div>
                <br/>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}