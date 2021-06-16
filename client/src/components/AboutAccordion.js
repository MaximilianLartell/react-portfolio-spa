import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './accordion.css';

const Accordion = withStyles({
  root: {
    padding: 0,
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
    padding: 0,
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    padding: 0,
    // borderBottom: '1px solid rgb(50, 55, 68)',
    marginBottom: -1,
    height: 20,
    '&$expanded': {
      margin: 0,
      minHeight: 56,
      borderBottom: 'none',
    },
    '&:hover': {
      opacity: '0.3',
    },
  },
  content: {
    '&$expanded': {
      margin: '0px',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: 15,
    borderRadius: 0,
    backgroundColor: 'rgb(0, 0, 0, 0.3)',
    marginTop: 0,
  },
}))(MuiAccordionDetails);

export default function AboutAccordion({ text }) {
  return (
    <div>
      <Accordion square>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <p className='title'>Read more</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className='description'>{text}</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
