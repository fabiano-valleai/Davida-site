import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

const Section = styled.section`
  padding: ${theme.spacing['2xl']} ${theme.spacing.xl};
  background: linear-gradient(135deg, ${theme.colors.primary.peach} 0%, ${theme.colors.primary.rose} 100%);
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: ${theme.spacing['2xl']};
`;

const Title = styled.h2`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize['4xl']};
  color: white;
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
`;

const Subtitle = styled.p`
  font-size: ${theme.typography.fontSize.xl};
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${theme.spacing['2xl']};
  line-height: 1.6;
`;

const SearchBar = styled.div`
  max-width: 600px;
  margin: 0 auto ${theme.spacing.xl};
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border: none;
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.typography.fontSize.lg};
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    background: white;
  }
`;

const Categories = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};
  overflow-x: auto;
  padding-bottom: ${theme.spacing.sm};
  justify-content: center;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${theme.borderRadius.full};
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: ${theme.borderRadius.full};
  }
`;

const CategoryButton = styled.button<{ active: boolean }>`
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border: none;
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.typography.fontSize.base};
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.active ? theme.colors.primary.coral : 'rgba(255, 255, 255, 0.95)'};
  color: ${props => props.active ? 'white' : theme.colors.text.primary};
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ArticleCard = styled(motion.article)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ArticleImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${theme.colors.primary.pink};
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ArticleContent = styled.div`
  padding: ${theme.spacing.lg};
`;

const ArticleCategory = styled.span`
  display: inline-block;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  background: ${theme.colors.primary.pink};
  color: ${theme.colors.primary.coral};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.typography.fontSize.sm};
  margin-bottom: ${theme.spacing.sm};
`;

const ArticleTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.xl};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
  line-height: 1.4;
`;

const ArticleExcerpt = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.md};
`;

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.light};
`;

const NewsletterSection = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  margin-top: ${theme.spacing['2xl']};
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const NewsletterTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const NewsletterText = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.xl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: ${theme.spacing.md};
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: ${theme.spacing.md};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.typography.fontSize.base};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.coral};
  }
`;

const NewsletterButton = styled(motion.button)`
  background: ${theme.colors.primary.coral};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.full};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  font-size: ${theme.typography.fontSize.base};
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: ${theme.colors.primary.peach};
  }
`;

const categories = [
  "Todos",
  "Maternidade",
  "Saúde Mental",
  "Espiritualidade",
  "Bem-estar",
  "Relacionamentos",
  "Carreira",
  "Autoconhecimento"
];

const articles = [
  {
    id: 1,
    title: "Como encontrar equilíbrio entre maternidade e autocuidado",
    excerpt: "Dicas práticas para mães que buscam cuidar de si mesmas sem culpa...",
    category: "Maternidade",
    image: "/article1.jpg",
    date: "14 Mar 2024",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Meditação e espiritualidade na jornada materna",
    excerpt: "Descubra como a prática da meditação pode fortalecer sua conexão espiritual...",
    category: "Espiritualidade",
    image: "/article2.jpg",
    date: "12 Mar 2024",
    readTime: "4 min"
  },
  {
    id: 3,
    title: "Ansiedade na gravidez: como lidar de forma saudável",
    excerpt: "Estratégias e técnicas para gerenciar a ansiedade durante a gestação...",
    category: "Saúde Mental",
    image: "/article3.jpg",
    date: "10 Mar 2024",
    readTime: "6 min"
  },
  {
    id: 4,
    title: "Carreira e maternidade: construindo seu próprio caminho",
    excerpt: "Histórias inspiradoras de mães que reinventaram sua vida profissional...",
    category: "Carreira",
    image: "/article4.jpg",
    date: "8 Mar 2024",
    readTime: "7 min"
  },
  {
    id: 5,
    title: "O poder da rede de apoio na jornada materna",
    excerpt: "Como construir e fortalecer suas conexões durante a maternidade...",
    category: "Relacionamentos",
    image: "/article5.jpg",
    date: "6 Mar 2024",
    readTime: "5 min"
  },
  {
    id: 6,
    title: "Práticas de autocuidado para mulheres modernas",
    excerpt: "Rotinas simples e efetivas para cuidar do corpo, mente e espírito...",
    category: "Bem-estar",
    image: "/article6.jpg",
    date: "4 Mar 2024",
    readTime: "4 min"
  }
];

export const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === "Todos" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de inscrição na newsletter
  };

  return (
    <Section id="blog">
      <Container>
        <Title>Comunidade Davida</Title>
        <Subtitle>
          Conteúdo relevante e inspirador para todas as fases da sua jornada
        </Subtitle>

        <SearchBar>
          <SearchInput
            type="text"
            placeholder="Buscar artigos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBar>

        <Categories>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </Categories>

        <Grid>
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ArticleImage>
                <img src={article.image} alt={article.title} />
              </ArticleImage>
              <ArticleContent>
                <ArticleCategory>{article.category}</ArticleCategory>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
                <ArticleMeta>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime} de leitura</span>
                </ArticleMeta>
              </ArticleContent>
            </ArticleCard>
          ))}
        </Grid>

        <NewsletterSection>
          <NewsletterTitle>Receba nosso conteúdo</NewsletterTitle>
          <NewsletterText>
            Inscreva-se para receber artigos exclusivos, dicas e novidades
            diretamente no seu e-mail.
          </NewsletterText>
          <NewsletterForm onSubmit={handleNewsletterSubmit}>
            <NewsletterInput
              type="email"
              placeholder="Seu melhor e-mail"
              required
            />
            <NewsletterButton
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Inscrever-se
            </NewsletterButton>
          </NewsletterForm>
        </NewsletterSection>
      </Container>
    </Section>
  );
}; 