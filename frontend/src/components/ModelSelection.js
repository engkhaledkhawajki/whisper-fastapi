import * as React from 'react';
import Option, { optionClasses } from '@mui/joy/Option';
import Chip from '@mui/joy/Chip';
import List from '@mui/joy/List';
import ListItemDecorator, {
  listItemDecoratorClasses,
} from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import '../index.css';
import styled from 'styled-components';
import { ModelSelection, selectionStyles, purple } from '../styles'


export default function SelectGroupedOptions({ setModel }) {
  const group = {
    Whisper: ['Small', 'Meduim', 'Large'],
    SomeOtherModelName1: ['Model1', 'Model2'],
    SomeOtherModelName2: ['Model1', 'Model2'],
  };
  const colors = {
    Whisper: 'primary',
    SomeOtherModelName1: 'primary',
    SomeOtherModelName2: 'primary',
  };
  return (
    <ModelSelection
      placeholder="Choose a model"
      onChange={(event) => {
        setModel(event.target.value);
      }}
      slotProps={{
        listbox: {
          component: 'div',
          sx: {
            maxHeight: 240,
            overflow: 'auto',
            '--List-padding': '0px',
            '--ListItem-radius': '0px',
          },
        },
      }}
      sx={selectionStyles(purple).root}
    >
      {Object.entries(group).map(([name, models], index) => (
        <React.Fragment key={name}>
          {index !== 0 && <ListDivider role="none" />}
          <List
            aria-labelledby={`select-group-${name}`}
            sx={{ '--ListItemDecorator-size': '28px; font-family: Poppins;'}}
          >
            <ListItem id={`select-group-${name}`} sticky>
              <Typography level="body-xs" textTransform="uppercase">
                {name} ({models.length})
              </Typography>
            </ListItem>
            {models.map((model) => (
              <Option
                key={model}
                value={model}
                label={
                  <React.Fragment>
                    <Chip
                      size="sm"
                      color={colors[name]}
                      sx={{ borderRadius: 'xs', mr: 1, fontFamily: 'Poppins' }}
                    >
                      {name}
                    </Chip>{' '}
                    {model}
                  </React.Fragment>
                }
                sx={{
                  [`&.${optionClasses.selected} .${listItemDecoratorClasses.root}`]:
                    {
                      opacity: 1,
                    },
                }}
              >
                <ListItemDecorator sx={{ opacity: 0 }}>
                  <Check />
                </ListItemDecorator>
                {model}
              </Option>
            ))}
          </List>
        </React.Fragment>
      ))}
    </ModelSelection>
  );
}
