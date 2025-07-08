import styled from 'styled-components';



// Modern styled card based on the provided example

const ModernCardWrapper = styled.div`

  width: 100%;

  max-width: 340px;

`;



const ModernCard = styled.div`

  position: relative;

  width: 100%;

  height: 410px;

  border-radius: 12px;

  border: 1px solid #cac4d0;

  overflow: hidden;

  background: ${({ rank }) =>

    rank === 1 ? 'linear-gradient(to bottom, #FFF3AA 0%, #FFDE4D 100%)' :

    rank === 2 ? 'linear-gradient(to bottom, #F5F5F5 0%, #E0E0E0 100%)' :

    rank === 3 ? 'linear-gradient(to bottom, #FFBF7A 0%, #FFA645 100%)' :

    '#ffffff'}; // Default background color (assuming white)

`;



const ModernCardContent = styled.div`

  position: relative;

  z-index: 10;

  display: flex;

  flex-direction: column;

  align-items: center;

  height: 100%;

  padding: 16px;

`;



const Avatar = styled.img`

  width: 96px;

  height: 96px;

  margin-top: 24px;

  background-color: #71C9CE;

  border-radius: 50%;

`;



const PointsSection = styled.div`

  width: 100%;

  text-align: center;

  margin-top: 16px;

`;



const PointsValue = styled.h2`

  font-weight: bold;

  font-size: 24px;

  color: #1e1e1e;

`;



const PointsLabel = styled.p`

  font-size: 14px;

  color: #3c3c43;

`;



const Separator = styled.div`

  width: 100%;

  height: 4px;

  margin-top: 10px;

  margin-bottom: 16px;

  background-color: #05445e;

  border-radius: 2px;

`;



const EJName = styled.h1`

  font-weight: bold;

  font-size: 20px;

  color: #1e1e1e;

  margin-top: 10px;

`;



const UniversityBadge = styled.div`

  margin-top: 12px;

  padding: 4px 14px;

  border-radius: 24px;

  background-color: transparent;

  border: 1px solid #333;

  display: inline-block;

  font-family: monospace;

  margin-bottom: 24px;

`;



const UniversityText = styled.span`

  font-size: 14px;

  color: #3c3c43;

`;



const ProfileButton = styled.button`

  position: absolute;

  bottom: 16px;

  width: calc(100% - 32px);

  height: 44px;

  background: #061380;

  border-radius: 24px;

  border: none;

  color: white;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

  cursor: pointer;

  font-size: 16px;

 

  &:hover {

    opacity: 0.9;

  }

`;



const ButtonText = styled.span`

  font-weight: bold;

  font-size: 14px;

`;



// Modern EJ Card component

const ModernEJCard = ({

  rank,

  points,

  name,

  university,

  avatarSrc = "/generic-avatar-4.svg",

  onProfileClick

}) => {

  return (

    <ModernCardWrapper>

      <ModernCard rank={rank}>

        <ModernCardContent>

          <Avatar src={avatarSrc} alt="EJ Avatar" />

          <PointsSection>

            <PointsValue>{points}</PointsValue>

            <PointsLabel>Pontos</PointsLabel>

          </PointsSection>

          <Separator />

          <EJName>{name}</EJName>

          <UniversityBadge>

            <UniversityText>{university}</UniversityText>

          </UniversityBadge>

          <ProfileButton onClick={onProfileClick}>

            <ButtonText>Visualizar perfil</ButtonText>

          </ProfileButton>

        </ModernCardContent>

      </ModernCard>

    </ModernCardWrapper>

  );

};



export default ModernEJCard;