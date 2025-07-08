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
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  color: #000;
  width: 100%;
  overflow-x: hidden;
`;

const HeaderBanner = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #06B6D4 0%, #0891B2 100%);
  background-image: url(${props => props.coverImage});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(6, 182, 212, 0.3) 0%, rgba(8, 145, 178, 0.3) 100%);
  }
`;

const ProfileSection = styled.div`
  padding: 0 40px;
  margin-top: -75px;
  position: relative;
  z-index: 10;
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
  background: linear-gradient(135deg, #06B6D4 0%, #0891B2 100%);
  margin-right: 24px;
  border: 4px solid white;
  position: relative;
  top: -20px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
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
  background: linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const UniversityTag = styled.span`
  background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%);
  color: white;
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 16px;
  display: inline-block;
  width: fit-content;
  margin-top: 8px;
  box-shadow: 0 4px 15px rgba(30, 64, 175, 0.3);
`;

const EditButton = styled.button`
  background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%);
  color: #fff;
  padding: 6px 18px;
  border-radius: 50px;
  border: none;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(30, 64, 175, 0.4);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(30, 64, 175, 0.6);
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
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 24px 24px 24px 40px;
  margin-bottom: 16px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &::before {
    content: '';
    position: absolute;
    left: 16px;
    top: 18px;
    bottom: 18px;
    width: 5px;
    border-radius: 8px;
    background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }
`;

const CardTitle = styled.h2`
  font-size: 20px;
  background: linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 16px 0;
`;

const CardText = styled.p`
  color: #6B7280;
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
  color: #1E40AF;
  font-size: 24px;
  transition: all 0.3s ease;
  
  &:hover {
    color: #7C3AED;
    transform: translateY(-2px);
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
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border-right: 5px solid #1E40AF;
  min-height: 400px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }
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