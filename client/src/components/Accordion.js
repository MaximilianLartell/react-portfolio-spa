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
    margin: '0 15px',
    boxShadow: 'none',
    borderRadius: 16,
    backgroundColor: 'white',
    border: 'solid 1px rgb(0, 0, 0, 0.2)',

    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:hover': {
      boxShadow: '0px 0px 2px',
    },
    '&:active': {
      boxShadow: '0px 0px 0px',
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: '0 15px',
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
    '&$expanded': {
      minHeight: 56,
      borderBottom: 'none',
      backgroundColor: 'rgb(0, 0, 0, 0.04)',
      borderRadius: '16px 16px 0 0',
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
    padding: '0 15px',
    marginTop: 0,
  },
}))(MuiAccordionDetails);

export default function CustomAccordion({ text }) {
  const [title, setTitle] = useState('Read more');

  const changeTitle = () => {
    title === 'Close' ? setTitle('Read more') : setTitle('Close');
  };

  return (
    <div>
      <Accordion square>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
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
