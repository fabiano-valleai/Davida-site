import React, { createContext, useContext, useState, useEffect } from 'react';

interface ContentContextData {
  content: Record<string, string>;
  updateContent: (key: string, value: string) => void;
}

const ContentContext = createContext<ContentContextData>({} as ContentContextData);

export const useContent = () => {
  return useContext(ContentContext);
};

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<Record<string, string>>(() => {
    const savedContent = localStorage.getItem('davida-content');
    return savedContent ? JSON.parse(savedContent) : {
      heroTitle: 'Empoderamento Feminino',
      heroSubtitle: 'Conectando mulheres, fortalecendo sonhos',
      aboutTitle: 'Sobre a Davida',
      aboutText: 'Uma plataforma dedicada ao empoderamento feminino, oferecendo recursos, suporte e conexões para mulheres alcançarem seu potencial máximo.',
      missionTitle: 'Nossa Missão',
      missionText: 'Capacitar mulheres através de tecnologia, educação e comunidade.',
      contactTitle: 'Entre em Contato',
      contactText: 'Estamos aqui para ajudar você em sua jornada.',
    };
  });

  useEffect(() => {
    localStorage.setItem('davida-content', JSON.stringify(content));
  }, [content]);

  const updateContent = (key: string, value: string) => {
    setContent(prev => ({ ...prev, [key]: value }));
  };

  return (
    <ContentContext.Provider value={{ content, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
}; 