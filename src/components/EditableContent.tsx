import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useContent } from '../contexts/ContentContext';

const EditableContainer = styled.div`
  position: relative;
  padding: 5px;
  margin: 5px 0;
  border: 1px dashed transparent;
  
  &:hover {
    border-color: #007bff;
  }
`;

const EditButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  opacity: 0;
  
  ${EditableContainer}:hover & {
    opacity: 1;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SaveButton = styled.button`
  background: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 15px;
  cursor: pointer;
  margin-top: 10px;
`;

interface EditableContentProps {
  contentKey: string;
  defaultValue: string;
  type?: 'text' | 'image';
}

const EditableContent: React.FC<EditableContentProps> = ({
  contentKey,
  defaultValue,
  type = 'text'
}) => {
  const { content, updateContent } = useContent();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(content[contentKey] || defaultValue);

  const handleSave = () => {
    updateContent(contentKey, editValue);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  if (isEditing) {
    return (
      <div>
        {type === 'text' ? (
          <TextArea
            value={editValue}
            onChange={handleChange}
          />
        ) : (
          <input
            type="text"
            value={editValue}
            onChange={handleChange}
            placeholder="URL da imagem"
          />
        )}
        <SaveButton onClick={handleSave}>Salvar</SaveButton>
      </div>
    );
  }

  return (
    <EditableContainer>
      {type === 'text' ? (
        <div>{content[contentKey] || defaultValue}</div>
      ) : (
        <img src={content[contentKey] || defaultValue} alt="" style={{ maxWidth: '100%' }} />
      )}
      <EditButton onClick={() => setIsEditing(true)}>Editar</EditButton>
    </EditableContainer>
  );
};

export default EditableContent; 