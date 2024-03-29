import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { PeopleCollection } from '../api/PeopleCollection';
import { LinksCollection } from '../api/links';

export const Info = () => {
  const links = useTracker(() => {
    return LinksCollection.find().fetch();
  });

  const people = useTracker(() => {
    return PeopleCollection.find().fetch();
  });

  return (
    <div>
      <h2>Learn Meteor!</h2>
      <ul>{links.map(
        link => <li key={link._id}>
          <a href={link.url} target="_blank">{link.title}</a>
        </li>
      )}</ul>
    </div>
  );
};
