import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const ContentContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  color: #845EC2;
  margin-bottom: 20px;
  font-size: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  
  label {
    display: block;
    margin-bottom: 8px;
    color: #333;
    font-weight: 500;
  }
  
  input, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    
    &:focus {
      outline: none;
      border-color: #FF6B6B;
      box-shadow: 0 0 0 2px rgba(255, 107, 107, 0.1);
    }
  }
  
  textarea {
    min-height: 100px;
    resize: vertical;
  }
`;

const FeaturesList = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
`;

const FeatureItem = styled.div`
  margin-bottom: 15px;
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const SaveButton = styled.button`
  background: #FF6B6B;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #ff5252;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const SuccessMessage = styled.div`
  background: #4CAF50;
  color: white;
  padding: 12px;
  border-radius: 8px;
  margin-top: 20px;
  text-align: center;
`;

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface DownloadContent {
  title: string;
  subtitle: string;
  appPreviewImage: string;
  features: Feature[];
  appStoreLink: string;
  playStoreLink: string;
}

const defaultContent: DownloadContent = {
  title: "Baixe o Davida",
  subtitle: "Comece sua jornada de autoconhecimento e bem-estar. Baixe agora e experimente gratuitamente por 7 dias.",
  appPreviewImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbOvco62nm5eAxdMdtSan9iSYogMvNmB6xyQ&s",
  features: [
    {
      icon: "🎯",
      title: "Conteúdo Personalizado",
      description: "Receba recomendações e conteúdos adaptados à sua fase atual."
    },
    {
      icon: "👥",
      title: "Comunidade Ativa",
      description: "Conecte-se com outras mulheres e compartilhe experiências."
    },
    {
      icon: "🧘‍♀️",
      title: "Bem-estar Integral",
      description: "Acesse meditações, exercícios e práticas para seu autocuidado."
    },
    {
      icon: "👩‍⚕️",
      title: "Suporte Profissional",
      description: "Consulte especialistas certificados em nossa rede."
    }
  ],
  appStoreLink: "https://apps.apple.com/app/davida",
  playStoreLink: "https://play.google.com/store/apps/davida"
};

const DownloadContentEditor: React.FC = () => {
  const [content, setContent] = useState<DownloadContent>(defaultContent);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem('downloadContent');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContent(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFeatureChange = (index: number, field: keyof Feature, value: string) => {
    setContent(prev => ({
      ...prev,
      features: prev.features.map((feature, i) => 
        i === index ? { ...feature, [field]: value } : feature
      )
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('downloadContent', JSON.stringify(content));
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <ContentContainer>
      <form onSubmit={handleSubmit}>
        <Section>
          <SectionTitle>Conteúdo Principal</SectionTitle>
          
          <FormGroup>
            <label htmlFor="title">Título da Página</label>
            <input
              type="text"
              id="title"
              name="title"
              value={content.title}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="subtitle">Subtítulo</label>
            <textarea
              id="subtitle"
              name="subtitle"
              value={content.subtitle}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="appPreviewImage">URL da Imagem de Preview do App</label>
            <input
              type="text"
              id="appPreviewImage"
              name="appPreviewImage"
              value={content.appPreviewImage}
              onChange={handleChange}
              placeholder="https://exemplo.com/imagem.jpg"
            />
          </FormGroup>
        </Section>

        <Section>
          <SectionTitle>Funcionalidades</SectionTitle>
          {content.features.map((feature, index) => (
            <FeatureItem key={index}>
              <FormGroup>
                <label>Ícone</label>
                <input
                  type="text"
                  value={feature.icon}
                  onChange={(e) => handleFeatureChange(index, 'icon', e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <label>Título</label>
                <input
                  type="text"
                  value={feature.title}
                  onChange={(e) => handleFeatureChange(index, 'title', e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <label>Descrição</label>
                <textarea
                  value={feature.description}
                  onChange={(e) => handleFeatureChange(index, 'description', e.target.value)}
                />
              </FormGroup>
            </FeatureItem>
          ))}
        </Section>

        <Section>
          <SectionTitle>Links das Lojas</SectionTitle>
          
          <FormGroup>
            <label htmlFor="appStoreLink">Link da App Store</label>
            <input
              type="text"
              id="appStoreLink"
              name="appStoreLink"
              value={content.appStoreLink}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="playStoreLink">Link da Play Store</label>
            <input
              type="text"
              id="playStoreLink"
              name="playStoreLink"
              value={content.playStoreLink}
              onChange={handleChange}
            />
          </FormGroup>
        </Section>

        <SaveButton type="submit">Salvar Alterações</SaveButton>

        {showSuccess && (
          <SuccessMessage>
            Conteúdo salvo com sucesso!
          </SuccessMessage>
        )}
      </form>
    </ContentContainer>
  );
};

export default DownloadContentEditor; 