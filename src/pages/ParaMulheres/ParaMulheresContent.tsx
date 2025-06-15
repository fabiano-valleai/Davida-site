import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

export interface ParaMulheresContent {
  hero: {
    title: string;
    subtitle: string;
  };
  sections: {
    icon: string;
    title: string;
    description: string;
    features: string[];
    url: string;
  }[];
}

const defaultContent: ParaMulheresContent = {
  hero: {
    title: "Para Mulheres que Buscam Apoio com Propósito",
    subtitle: "Acolhimento personalizado para cada momento da sua jornada, com fé e cuidado em todas as etapas"
  },
  sections: [
    {
      icon: "💜",
      title: "Não Tentantes",
      description: "Apoio e acolhimento para mulheres que não estão buscando gravidez no momento",
      features: [
        "Grupos de apoio e escuta",
        "Conteúdo sobre autoconhecimento",
        "Meditações e reflexões",
        "Conexão com outras mulheres"
      ],
      url: "/nao-tentantes"
    },
    {
      icon: "🙏",
      title: "Tentantes",
      description: "Suporte emocional e espiritual para mulheres em busca da realização da maternidade",
      features: [
        "Grupos de apoio específicos",
        "Devocionais diários",
        "Meditações guiadas",
        "Compartilhamento de experiências",
        "Acompanhamento personalizado"
      ],
      url: "/tentantes"
    },
    {
      icon: "🤰",
      title: "Gestantes",
      description: "Acompanhamento completo durante toda a gestação, com foco no bem-estar físico e espiritual",
      features: [
        "Conteúdo semanal personalizado",
        "Grupos por trimestre",
        "Orações específicas",
        "Dicas de saúde e bem-estar",
        "Preparação para o parto"
      ],
      url: "/gestantes"
    },
    {
      icon: "💝",
      title: "Pós-parto",
      description: "Suporte integral para o período pós-parto, focando no vínculo mãe-bebê e na recuperação materna",
      features: [
        "Apoio emocional 24/7",
        "Orientações de especialistas",
        "Grupos de mães recentes",
        "Conteúdo sobre amamentação",
        "Dicas de cuidados com o bebê"
      ],
      url: "/pos-parto"
    }
  ]
};

const EditorContainer = styled.div`
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 40px auto;
`;

const Section = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  background: #FFF5F5;
  border-radius: 8px;
`;

const SectionTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
  border-bottom: 2px solid #FF6B6B;
  padding-bottom: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #666;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #845EC2;
    box-shadow: 0 0 0 2px rgba(132, 94, 194, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  min-height: 120px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #845EC2;
    box-shadow: 0 0 0 2px rgba(132, 94, 194, 0.1);
  }
`;

const FeatureList = styled.div`
  margin-top: 10px;
`;

const FeatureItem = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  align-items: center;
`;

const Button = styled.button`
  background-color: #845EC2;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #6B4C9F;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ParaMulheresContentEditor: React.FC = () => {
  const [content, setContent] = useState<ParaMulheresContent>(defaultContent);

  useEffect(() => {
    const savedContent = localStorage.getItem('paraMulheresContent');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('paraMulheresContent', JSON.stringify(content));
    alert('Conteúdo salvo com sucesso!');
  };

  const updateHero = (field: keyof typeof content.hero, value: string) => {
    setContent(prev => ({
      ...prev,
      hero: { ...prev.hero, [field]: value }
    }));
  };

  const updateSection = (index: number, field: keyof typeof content.sections[0], value: string | string[]) => {
    setContent(prev => ({
      ...prev,
      sections: prev.sections.map((section, i) => 
        i === index ? { ...section, [field]: value } : section
      )
    }));
  };

  const updateFeature = (sectionIndex: number, featureIndex: number, value: string) => {
    setContent(prev => ({
      ...prev,
      sections: prev.sections.map((section, i) => 
        i === sectionIndex 
          ? {
              ...section,
              features: section.features.map((feature, j) => 
                j === featureIndex ? value : feature
              )
            }
          : section
      )
    }));
  };

  return (
    <EditorContainer>
      <Section>
        <SectionTitle>Seção Hero</SectionTitle>
        <FormGroup>
          <Label>Título Principal</Label>
          <Input
            value={content.hero.title}
            onChange={(e) => updateHero('title', e.target.value)}
            placeholder="Digite o título principal"
          />
        </FormGroup>
        <FormGroup>
          <Label>Subtítulo</Label>
          <TextArea
            value={content.hero.subtitle}
            onChange={(e) => updateHero('subtitle', e.target.value)}
            placeholder="Digite o subtítulo"
          />
        </FormGroup>
      </Section>

      {content.sections.map((section, sectionIndex) => (
        <Section key={sectionIndex}>
          <SectionTitle>{section.title}</SectionTitle>
          <FormGroup>
            <Label>Ícone</Label>
            <Input
              value={section.icon}
              onChange={(e) => updateSection(sectionIndex, 'icon', e.target.value)}
              placeholder="Digite o ícone (emoji)"
            />
          </FormGroup>
          <FormGroup>
            <Label>Título da Seção</Label>
            <Input
              value={section.title}
              onChange={(e) => updateSection(sectionIndex, 'title', e.target.value)}
              placeholder="Digite o título da seção"
            />
          </FormGroup>
          <FormGroup>
            <Label>Descrição</Label>
            <TextArea
              value={section.description}
              onChange={(e) => updateSection(sectionIndex, 'description', e.target.value)}
              placeholder="Digite a descrição da seção"
            />
          </FormGroup>
          <FormGroup>
            <Label>Recursos</Label>
            <FeatureList>
              {section.features.map((feature, featureIndex) => (
                <FeatureItem key={featureIndex}>
                  <Input
                    value={feature}
                    onChange={(e) => updateFeature(sectionIndex, featureIndex, e.target.value)}
                    placeholder="Digite o recurso"
                  />
                </FeatureItem>
              ))}
            </FeatureList>
          </FormGroup>
          <FormGroup>
            <Label>URL</Label>
            <Input
              value={section.url}
              onChange={(e) => updateSection(sectionIndex, 'url', e.target.value)}
              placeholder="Digite a URL da seção"
            />
          </FormGroup>
        </Section>
      ))}

      <Button onClick={handleSave}>Salvar Alterações</Button>
    </EditorContainer>
  );
};

export default ParaMulheresContentEditor; 