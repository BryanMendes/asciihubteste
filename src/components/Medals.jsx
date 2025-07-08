import styled from 'styled-components';

// Medal components using icons for the top three positions

// Base medal component with shared styles
const BaseMedal = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
`;

// Icon-based medal component
const MedalIcon = ({ rank }) => {
  // SVG icons for medals
  const goldMedalSvg = `
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="15" fill="#FFC107" stroke="#E8A900" stroke-width="2"/>
      <text x="16" y="22" font-size="16" font-weight="bold" text-anchor="middle" fill="#333">1</text>
      <path d="M11 25 L8 32 M21 25 L24 32" stroke="#E84C3D" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `;

  const silverMedalSvg = `
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="15" fill="#B9B9B9" stroke="#8E8E8E" stroke-width="2"/>
      <text x="16" y="22" font-size="16" font-weight="bold" text-anchor="middle" fill="#333">2</text>
      <path d="M11 25 L8 32 M21 25 L24 32" stroke="#4CAF50" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `;

  const bronzeMedalSvg = `
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="15" fill="#CD7F32" stroke="#A55D28" stroke-width="2"/>
      <text x="16" y="22" font-size="16" font-weight="bold" text-anchor="middle" fill="#333">3</text>
      <path d="M11 25 L8 32 M21 25 L24 32" stroke="#2196F3" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `;

  // Determine which SVG to use based on rank
  const medalSvg = rank === 1 
    ? goldMedalSvg 
    : rank === 2 
      ? silverMedalSvg 
      : bronzeMedalSvg;

  // Create a data URL for the SVG
  const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(medalSvg)}`;

  return (
    <img 
      src={dataUrl} 
      alt={`Medal ${rank}`} 
      style={{ 
        width: '40px', 
        height: '40px',
      }}
    />
  );
};

// FontAwesome-style icon medal component
const FontAwesomeMedal = ({ rank }) => {
  // Using Unicode characters for medals that display like icons
  // These are fallbacks in case SVG doesn't work well
  
  // Define styles for each rank
  const medalStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  
  const circleStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    color: '#333',
    fontWeight: 'bold',
    fontSize: '18px',
    backgroundColor: rank === 1 ? '#FFD700' : rank === 2 ? '#C0C0C0' : '#CD7F32',
    border: `2px solid ${rank === 1 ? '#E8A900' : rank === 2 ? '#8E8E8E' : '#A55D28'}`,
    boxShadow: `0 0 5px ${rank === 1 ? '#FFEE9C' : rank === 2 ? '#EFEFEF' : '#FFD699'}`
  };
  
  const ribbonStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '6px',
    marginTop: '-2px'
  };
  
  const ribbonPieceStyle = {
    width: '5px',
    height: '18px',
    backgroundColor: rank === 1 ? '#E84C3D' : rank === 2 ? '#4CAF50' : '#2196F3'
  };
  
  const leftRibbonStyle = {
    ...ribbonPieceStyle,
    transform: 'rotate(25deg)'
  };
  
  const rightRibbonStyle = {
    ...ribbonPieceStyle,
    transform: 'rotate(-25deg)'
  };

  return (
    <div style={medalStyle}>
      <div style={circleStyle}>{rank}</div>
      <div style={ribbonStyle}>
        <div style={leftRibbonStyle}></div>
        <div style={rightRibbonStyle}></div>
      </div>
    </div>
  );
};

// Medal component that can use different medal representations
const MedalWithImage = ({ rank, imageSrc, useIcons = true }) => {
  return (
    <BaseMedal>
      {imageSrc ? (
        // Use provided image if available
        <img 
          src={imageSrc} 
          alt={`Medal ${rank}`} 
          style={{ 
            width: '40px', 
            height: '56px', 
            position: 'absolute',
            top: '-5px',
            left: '-5px'
          }} 
        />
      ) : useIcons ? (
        // Use SVG icon medals if useIcons is true
        <MedalIcon rank={rank} />
      ) : (
        // Use FontAwesome-style medals as fallback
        <FontAwesomeMedal rank={rank} />
      )}
    </BaseMedal>
  );
};

export { MedalWithImage, MedalIcon, FontAwesomeMedal }; 