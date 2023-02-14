import React from 'react';
import { NextPage } from 'next';

interface SidebarProps {
  cosmetics: string[];
}

const Sidebar: NextPage<SidebarProps> = ({ cosmetics }) => {
  return (
    <div
      style={{
        position: 'absolute',
        right: '0',
        top: '0',
        width: '40vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <ul>
        {cosmetics.map((cosmetic) => (
          <li key={cosmetic}>{cosmetic}</li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
