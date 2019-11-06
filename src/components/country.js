import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  List,
  Avatar,
  ListItem,
  ListItemText
} from "@material-ui/core";

const Country = ({ data }) => {
  const { code, name, native, phone, currency, languages, emoji } = data;
  return (
    <Card className="continent-details-card" key={code}>
      <CardHeader
        avatar={<Avatar className="blue-avatar">{code}</Avatar>}
        aria-label="Country Code"
        title={name}
        subheader={`Native: ${native}`}
      />
      <CardContent>
        <Typography component="div" color="textSecondary">
          Phone: {phone}
        </Typography>
        <Typography component="div" color="textSecondary">
          Currency: {currency}
        </Typography>
        <Typography component="div" color="textSecondary">
          Emoji: {emoji}
        </Typography>
        <br />
        <Typography variant="subheading" gutterBottom>
          Languages:
        </Typography>
        <List component="nav">
          {languages.map(lang => {
            return (
              <ListItem key={lang.code}>
                <Avatar>{lang.code}</Avatar>
                <ListItemText
                  inset
                  primary={lang.name}
                  secondary={`Native: ${lang.native}`}
                />
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

export default Country;
