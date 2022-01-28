import React from 'react';
import AddChauffeur from '../components/AddChauffeur';
import { Dashbord } from '../components/Dashbord';
import TableChauffeur from '../components/TableChauffeur';

export const Chauffeurs = () => {
  return (
    <div>
    <Dashbord/>
      <div className="h-full md:ml-64">
        <AddChauffeur/>
        <TableChauffeur/>
      </div>
      </div>
  );
};
