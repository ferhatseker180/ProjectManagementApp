import React from 'react';
import NewProject from '../../components/NewProject';

export default function AddProjectPage({ handleAddProject, handleCancelAddProject }) {
  return (
    <main className="h-screen my-8 flex justify-center">
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    </main>
  );
}
