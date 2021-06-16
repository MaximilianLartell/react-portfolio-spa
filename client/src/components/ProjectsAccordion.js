import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './accordion.css';
import { SortOutlined } from '@material-ui/icons';

const Accordion = withStyles({
  root: {
    color: '#286360',
    margin: '0 15px',
    boxShadow: 'none',
    borderRadius: 18,
    backgroundColor: 'rgb(246,214, 143)',

    border: 'solid 2px #286360',
    '&:not(:last-child)': {
      borderBottom: 0,
    },

    // '&:active': {
    //   backgroundColor: 'rgb(246,214, 143)',

    //   opacity: 0.9,
    // },
    // '&:before': {
    //   display: 'none',
    // },
    '&$expanded': {
      margin: '0 15px',
      backgroundColor: 'rgb(246,214, 143)',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    padding: '0 15px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 16,
    minHeight: 15,
    backgroundColor: 'rgb(246,214, 143)',
    '&$expanded': {
      minHeight: 56,
      borderBottom: 'none',
      backgroundColor: 'rgb(246,214, 143)',
      borderRadius: '16px 16px 0 0',
    },
  },
  content: {
    '&$expanded': {
      margin: '0px',
      backgroundColor: 'rgb(246,214, 143)',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: '0 15px',
    marginTop: 0,
    backgroundColor: '#f4bf3c',
    borderRadius: '0 0 16px 16px',
    '&$expanded': {
      margin: '0 15px',
      backgroundColor: 'rgb(246,214, 143)',
    },
  },
}))(MuiAccordionDetails);

export default function ProjectsAccordion({ text }) {
  const [title, setTitle] = useState('Read more');

  const changeTitle = () => {
    title === 'Close' ? setTitle('Read more') : setTitle('Close');
  };

  return (
    <div>
      <Accordion square>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: '#286360' }} />}
          onClick={() => changeTitle()}
        >
          <p className='title'>{title}</p>
        </AccordionSummary>
        <AccordionDetails>
          <p className='description'>{text}</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
