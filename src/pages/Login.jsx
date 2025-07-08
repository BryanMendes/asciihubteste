import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Importe Link se for usar para navegação real

// Estilos Reutilizados (do seu código original)
const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  color: white;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  box-sizing: border-box;
  overflow-x: hidden;
  background: url('public/background.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Adicionado para fixar o fundo */
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #061380;
    opacity: 0.8;
    z-index: 0;
  }
`;

const Container = styled.div`
  background: white;
  border-radius: 16px;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  @media (max-width: 480px) {
    margin: 20px;
    padding: 30px 25px;
  }
`;

const WelcomeText = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #061380;
  text-align: center;
  margin-bottom: 30px;
`;

const SmallWelcomeText = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #061380;
  text-align: center;
  margin-bottom: 30px;
`;

const LoginForm = styled.div`
  width: 100%;
`;

const ToggleContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  background: #040a3d;
  border-radius: 20px;
  padding: 2px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

const ToggleOption = styled.div`
  padding: 8px 16px;
  border-radius: 18px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #666;

  &.active {
    background: #061380;
    color: white;
  }

  &:not(.active):hover {
    background: #061380;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  color: #333;
  font-weight: 500;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  height: auto;
  border-radius: 10px;
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: #1e3c72;
    box-shadow: 0 0 0 3px rgba(30, 60, 114, 0.1);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

const PasswordContainer = styled.div`
  position: relative;
`;

const EyeIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  user-select: none;
  font-size: 16px;
  opacity: 0.6;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const RememberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 8px;
  width: 16px;
  height: 16px;
  accent-color: #061380;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #666;
  cursor: pointer;
`;

const ForgotPassword = styled.a`
  font-size: 14px;
  color: #061380;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  background: #061380;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;

  &:hover {
    background: #2a5298;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(30, 60, 114, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const RegisterText = styled.p`
  text-align: center;
  color: #666;
  font-size: 14px;
  margin: 0;
`;

const RegisterLink = styled.a`
  color: #061380;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

// Novos estilos para o layout de University/State
const HorizontalFormGroup = styled.div`
  display: flex;
  gap: 15px; /* Espaço entre os campos */
  margin-bottom: 20px;

  & > div {
    flex: 1; /* Faz com que cada FormGroup dentro ocupe o mesmo espaço */
  }
`;

const RegisterButton = styled(LoginButton)``; // Reutiliza os estilos do LoginButton

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loginType, setLoginType] = useState('EJ');
  // NOVO ESTADO: 'login', 'forgotPassword', 'register'
  const [currentView, setCurrentView] = useState('login');
  // Estado para o tipo de registro (EJ ou Pessoal)
  const [registerType, setRegisterType] = useState('EJ');

  return (
    <Page>
      <Container>
        {currentView === 'login' && (
          // Formulário de Login Principal
          <>
            <WelcomeText>Seja bem vindo!</WelcomeText>
            <SmallWelcomeText> Faça seu login </SmallWelcomeText>

            <LoginForm>
              <ToggleContainer>
                <ToggleOption
                  className={loginType === 'EJ' ? 'active' : ''}
                  onClick={() => setLoginType('EJ')}
                >
                  EJ
                </ToggleOption>
                <ToggleOption
                  className={loginType === 'Pessoal' ? 'active' : ''}
                  onClick={() => setLoginType('Pessoal')}
                >
                  Pessoal
                </ToggleOption>
              </ToggleContainer>

              <FormGroup>
                <Label>Usuário</Label>
                <Input type="text" placeholder="Entre com seu usuário" />
              </FormGroup>

              <FormGroup>
                <Label>Senha</Label>
                <PasswordContainer>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Entre com sua senha"
                  />
                  <EyeIcon onClick={() => setShowPassword(!showPassword)}>
                    👁️
                  </EyeIcon>
                </PasswordContainer>
              </FormGroup>

              <RememberContainer>
                <CheckboxContainer>
                  <Checkbox
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <CheckboxLabel>Lembrar de mim</CheckboxLabel>
                </CheckboxContainer>
                <ForgotPassword onClick={() => setCurrentView('forgotPassword')}>Esqueceu sua senha?</ForgotPassword>
              </RememberContainer>

              <LoginButton>Login</LoginButton>

              <RegisterText>
                Não tem uma conta? <RegisterLink onClick={() => setCurrentView('register')}>Registre-se</RegisterLink>
              </RegisterText>
            </LoginForm>
          </>
        )}

        {currentView === 'forgotPassword' && (
          // Formulário de Recuperação de Senha
          <>
            <SmallWelcomeText>Esqueceu sua senha?</SmallWelcomeText>
            <WelcomeText>Enviaremos um email de recuperação para sua conta!</WelcomeText>

            <LoginForm>
              <FormGroup>
                <Label>Email:</Label>
                <Input type="text" placeholder="email@hotmail.com" />
              </FormGroup>

              <LoginButton>Enviar</LoginButton>

              <RegisterText>
                Voltar para o Login <RegisterLink onClick={() => setCurrentView('login')}>Login</RegisterLink>
              </RegisterText>
            </LoginForm>
          </>
        )}

        {currentView === 'register' && (
          // Formulário de Registro
          <>
            <WelcomeText>Seja bem vindo!</WelcomeText>
            <SmallWelcomeText>Registre-se</SmallWelcomeText>

            <LoginForm>
              <ToggleContainer>
                <ToggleOption
                  className={registerType === 'EJ' ? 'active' : ''}
                  onClick={() => setRegisterType('EJ')}
                >
                  EJ
                </ToggleOption>
                <ToggleOption
                  className={registerType === 'Pessoal' ? 'active' : ''}
                  onClick={() => setRegisterType('Pessoal')}
                >
                  Pessoal
                </ToggleOption>
              </ToggleContainer>

              {registerType === 'EJ' ? (
                // Campos para Registro de EJ
                <>
                  <FormGroup>
                    <Label>Nome da empresa</Label>
                    <Input type="text" placeholder="Nome da empresa" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" placeholder="Entre com seu email" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Nome do responsável</Label>
                    <Input type="text" placeholder="Nome do responsável da empresa" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Senha</Label>
                    <PasswordContainer>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Entre com a senha"
                      />
                      <EyeIcon onClick={() => setShowPassword(!showPassword)}>
                        👁️
                      </EyeIcon>
                    </PasswordContainer>
                  </FormGroup>
                  <HorizontalFormGroup>
                    <FormGroup>
                      <Label>Universidade</Label>
                      <Input type="text" placeholder="Entre com a universidade" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Estado</Label>
                      <Input type="text" placeholder="Seu estado" />
                    </FormGroup>
                  </HorizontalFormGroup>
                  <FormGroup>
                    <Label>Área de atuação</Label>
                    <Input type="text" placeholder="Área de atuação da empresa" />
                  </FormGroup>
                </>
              ) : (
                // Campos para Registro Pessoal
                <>
                  <FormGroup>
                    <Label>Nome</Label>
                    <Input type="text" placeholder="Entre com seu nome" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" placeholder="Entre com seu email" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Data de nascimento</Label>
                    <Input type="text" placeholder="dd/mm/aa" /> {/* Considere usar um input type="date" para melhor UX */}
                  </FormGroup>
                  <FormGroup>
                    <Label>Senha</Label>
                    <PasswordContainer>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Entre com a senha"
                      />
                      <EyeIcon onClick={() => setShowPassword(!showPassword)}>
                        👁️
                      </EyeIcon>
                    </PasswordContainer>
                  </FormGroup>
                  <HorizontalFormGroup>
                    <FormGroup>
                      <Label>Universidade</Label>
                      <Input type="text" placeholder="Entre com a universidade" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Estado</Label>
                      <Input type="text" placeholder="Seu estado" />
                    </FormGroup>
                  </HorizontalFormGroup>
                </>
              )}

              <RegisterButton>Registrar</RegisterButton>

              <RegisterText>
                Já tem uma conta? <RegisterLink onClick={() => setCurrentView('login')}>Login</RegisterLink>
              </RegisterText>
            </LoginForm>
          </>
        )}
      </Container>
    </Page>
  );
};

export default LoginPage;