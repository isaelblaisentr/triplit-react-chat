import React from 'react';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from '@material-tailwind/react';
import { MENU_LIST } from '../../constants';
import { Link } from 'react-router-dom';

export function SideBar() {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Triplit Chat App
        </Typography>
      </div>
      <List>
        {MENU_LIST.map(({ literal, route, Icon }, index) => (
          <React.Fragment key={index}>
            {route ? (
              <Link to={route}>
                <ListItem>
                  <ListItemPrefix>
                    <Icon className="h-5 w-5" />
                  </ListItemPrefix>
                  {literal}
                </ListItem>
              </Link>
            ) : (
              <ListItem>
                <ListItemPrefix>
                  <Icon className="h-5 w-5" />
                </ListItemPrefix>
                {literal}
              </ListItem>
            )}
          </React.Fragment>
        ))}
      </List>
    </Card>
  );
}
