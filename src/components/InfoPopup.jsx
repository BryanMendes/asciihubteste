import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
  animation: ${fadeIn} 0.3s ease;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  position: relative;
  animation: ${slideIn} 0.3s ease;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #666;
  padding: 4px;
  
  &:hover {
    color: #333;
  }
`;

const Title = styled.h2`
  color: #061380;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #061380;
  }
`;

const SaveButton = styled.button`
  background-color: #061380;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.9;
  }
`;

const InfoPopup = ({ isOpen, onClose, title, initialText, onSave }) => {
  const [text, setText] = useState(initialText || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(text);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <PopupOverlay onClick={onClose}>
      <PopupContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Title>{title}</Title>
        <Form onSubmit={handleSubmit}>
          <TextArea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Digite as informações aqui..."
          />
          <SaveButton type="submit">Salvar</SaveButton>
        </Form>
      </PopupContent>
    </PopupOverlay>
  );
};

export default InfoPopup; 