import React from 'react';
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

const TextContent = styled.div`
  font-size: 14px;
  color: #333;
  line-height: 1.5;
`;

const DescriptionPopup = ({ isOpen, onClose, title, text }) => {
  if (!isOpen) return null;

  return (
    <PopupOverlay onClick={onClose}>
      <PopupContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Title>{title}</Title>
        <TextContent>{text}</TextContent>
      </PopupContent>
    </PopupOverlay>
  );
};

export default DescriptionPopup; 