import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTelegram } from 'react-icons/fa';
import { getProfileById, updateProfileById } from '../fakeApi';

import PointsHistoryChart from '../components/PointsHistoryChart';
import InfoPopup from '../components/InfoPopup';
import DescriptionPopup from '../components/DescriptionPopup';

// --- STYLED COMPONENTS ---

const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #FFF;
  color: #000;
  width: 100%;
  overflow-x: hidden;
`;

const HeaderBanner = styled.div`
  width: 100%;
  height: 250px;
  background-color: #E6F4F7;
  background-image: url(${props => props.coverImage});
  background-size: cover;
  background-position: center;
`;

const ProfileSection = styled.div`
  padding: 0 40px;
  margin-top: -75px;
  position: relative;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2rem;
  position: relative;
`;

const ProfileLeft = styled.div`
  display: flex;
  align-items: flex-end;
`;

const ProfileImage = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-color: #9BB7C2;
  margin-right: 24px;
  border: 2px solid #061380;
  position: relative;
  top: -20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ProfileName = styled.h1`
  font-size: 32px;
  margin: 0;
  color: #000;
`;

const UniversityTag = styled.span`
  background-color: #061380;
  color: white;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 16px;
  display: inline-block;
  width: fit-content;
  margin-top: 8px;
`;

const EditButton = styled.button`
  background-color: #061380;
  color: #fff;
  padding: 6px 18px;
  border-radius: 8px;
  border: none;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;

const ProfileRight = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 24px;
  padding: 0 40px 40px;
  max-width: 100%;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const CardLeftLine = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 24px 24px 24px 40px;
  margin-bottom: 16px;
  position: relative;
  box-shadow: 0 4px 16px rgba(0,0,0,0.13);
  transition: box-shadow 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    left: 16px;
    top: 18px;
    bottom: 18px;
    width: 5px;
    border-radius: 4px;
    background: #061380;
  }

  &:hover {
    box-shadow: 0 6px 20px rgba(0,0,0,0.18);
  }
`;

const CardTitle = styled.h2`
  font-size: 20px;
  color: #00008B;
  margin: 0 0 16px 0;
`;

const CardText = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const CardLeftLineProjetos = styled(CardLeftLine)`
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const SocialIcon = styled.a`
  color: #00008B;
  font-size: 24px;
  transition: color 0.2s;
  
  &:hover {
    color: #061380;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CardGrafico = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.13);
  border-right: 5px solid #061380;
  min-height: 400px;
`;

const GraphTitle = styled(CardTitle)`
  margin-bottom: 16px;
`;

const Perfil = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const [isInfoPopupOpen, setInfoPopupOpen] = useState(false);
    const [isProjectsPopupOpen, setProjectsPopupOpen] = useState(false);

    useEffect(() => {
        const foundProfile = getProfileById(id);
        setProfile(foundProfile ? { ...foundProfile } : null); 
    }, [id]);

    const handleSaveDescription = (newText) => {
        updateProfileById(id, { description: newText });
        setProfile(prev => ({ ...prev, description: newText }));
    };
    
    const handleSaveProjects = (newText) => {
        updateProfileById(id, { projects: newText });
        setProfile(prev => ({ ...prev, projects: newText }));
    };

    if (!profile) {
        return <PerfilContainer>Carregando perfil ou perfil não encontrado...</PerfilContainer>;
    }

    return (
        <>
            <PerfilContainer>
                <HeaderBanner coverImage={profile.coverPic} />
                <ProfileSection>
                    <ProfileHeader>
                        <ProfileLeft>
                            <ProfileImage>
                                {profile.profilePic && <img src={profile.profilePic} alt={`${profile.name} profile`} />}
                            </ProfileImage>
                            <ProfileInfo>
                                <ProfileName>{profile.name}</ProfileName>
                                <UniversityTag>{profile.university}</UniversityTag>
                            </ProfileInfo>
                        </ProfileLeft>
                        <ProfileRight>
                            <EditButton onClick={() => navigate(`/perfil/editar/${id}`)}>Editar perfil</EditButton>
                        </ProfileRight>
                    </ProfileHeader>
                </ProfileSection>

                <ContentGrid>
                    {/* Coluna da Esquerda */}
                    <div>
                        <CardLeftLine>
                            <CardTitle>Conecte-se conosco</CardTitle>
                            <SocialLinks>
                                {profile.social.whatsapp && <SocialIcon href={profile.social.whatsapp} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></SocialIcon>}
                                {profile.social.facebook && <SocialIcon href={profile.social.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></SocialIcon>}
                                {profile.social.instagram && <SocialIcon href={profile.social.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></SocialIcon>}
                                {profile.social.linkedin && <SocialIcon href={profile.social.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialIcon>}
                                {profile.social.youtube && <SocialIcon href={profile.social.youtube} target="_blank" rel="noopener noreferrer"><FaYoutube /></SocialIcon>}
                                {profile.social.telegram && <SocialIcon href={profile.social.telegram} target="_blank" rel="noopener noreferrer"><FaTelegram /></SocialIcon>}
                            </SocialLinks>
                        </CardLeftLine>

                        <CardLeftLine onClick={() => setInfoPopupOpen(true)} style={{ cursor: 'pointer' }}>
                            <CardTitle>Informações</CardTitle>
                            <CardText>{profile.description}</CardText>
                        </CardLeftLine>

                        <CardLeftLineProjetos onClick={() => setProjectsPopupOpen(true)} style={{ cursor: 'pointer' }}>
                            <CardTitle>Projetos</CardTitle>
                            <CardText>{profile.projects}</CardText>
                        </CardLeftLineProjetos>
                    </div>

                    {/* Coluna da Direita */}
                    <div>
                        <StatsContainer>
                            {/* Os cards de pontos e tarefas podem ser adicionados aqui se necessário */}
                        </StatsContainer>
                        <CardGrafico>
                            <GraphTitle>Histórico de pontos</GraphTitle>
                            <PointsHistoryChart />
                        </CardGrafico>
                    </div>
                </ContentGrid>
            </PerfilContainer>

            {/* Renderização Condicional dos Popups */}
            <InfoPopup
                isOpen={isInfoPopupOpen}
                onClose={() => setInfoPopupOpen(false)}
                title="Editar Informações"
                initialText={profile.description}
                onSave={handleSaveDescription}
            />
            
            <InfoPopup
                isOpen={isProjectsPopupOpen}
                onClose={() => setProjectsPopupOpen(false)}
                title="Editar Projetos"
                initialText={profile.projects}
                onSave={handleSaveProjects}
            />
        </>
    );
};

export default Perfil;