import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function BasicAccordion() {
  return (
    <div>
        <h4 style={{backgroundColor:'#004b9c',height:'40px',padding:'5px',color:'white', border:'1px', borderStyle:'dashed'}}>WHAT WE OFFER</h4>
      <Accordion >
        <AccordionSummary
            style={{backgroundColor:'#c1daf5'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Logo & Branding</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We design logos that last for a lifetime! Our creative approach to branding has made us an industry leader. The logo design services we offer will elevate your brand equity.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
            <Typography>Web Design</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our websites are functional inside out; with a secured back-end and attractive front-end, your website will be the lead generating machine that you always wanted it to be!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
            style={{backgroundColor:'#c1daf5'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
            <Typography>Video Animation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          There are some emotions that only an animated video can express! Then what are you waiting for? Hire us because we are the most affordable 2d and 3d animation service out there.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Digital Marketing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Marketing wasn't this effective before the rise of digital media. Our digital marketing campaigns will spread like wildfire!
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}