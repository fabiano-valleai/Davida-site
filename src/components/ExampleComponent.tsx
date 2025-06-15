import React from 'react';
import EditableContent from './EditableContent';

const ExampleComponent: React.FC = () => {
  return (
    <div>
      <h1>
        <EditableContent
          contentKey="example-title"
          defaultValue="Título Exemplo"
        />
      </h1>
      
      <EditableContent
        contentKey="example-image"
        defaultValue="/default-image.jpg"
        type="image"
      />
      
      <EditableContent
        contentKey="example-description"
        defaultValue="Este é um texto de exemplo que pode ser editado através do painel administrativo."
      />
    </div>
  );
};

export default ExampleComponent; 