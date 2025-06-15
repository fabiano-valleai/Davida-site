import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

const Section = styled.section`
  padding: ${theme.spacing['2xl']} ${theme.spacing.xl};
  padding-top: calc(${theme.spacing['2xl']} + 80px);
  background: linear-gradient(135deg, ${theme.colors.primary.peach} 0%, ${theme.colors.primary.rose} 100%);
  min-height: 100vh;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const CommunitySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['2xl']};
  align-items: center;
  margin-bottom: ${theme.spacing['2xl']};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`;

const ContentColumn = styled.div`
  color: white;
`;

const Title = styled.h2`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize['4xl']};
  margin-bottom: ${theme.spacing.xl};
  color: white;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: ${theme.typography.fontSize.xl};
  margin-bottom: ${theme.spacing['2xl']};
  opacity: 0.9;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const TestimonialText = styled.p`
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.lg};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.md};
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
`;

const AuthorAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${theme.colors.primary.coral};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${theme.typography.fontSize.lg};
`;

const AuthorInfo = styled.div`
  color: ${theme.colors.text.primary};
`;

const AuthorName = styled.p`
  font-weight: bold;
  margin-bottom: 4px;
`;

const AuthorRole = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  opacity: 0.8;
`;

const AppPreviewColumn = styled.div`
  position: relative;
`;

const AppScreenshot = styled(motion.div)`
  background: white;
  border-radius: 55px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  aspect-ratio: 9/19.5;
  max-width: 380px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #FF8C7F 0%, #FF6B6B 100%);

  &::before {
    content: '';
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 35%;
    height: 28px;
    background: #000;
    border-radius: 0 0 12px 12px;
    z-index: 2;
  }
`;

const PhoneHeader = styled.div`
  padding: 48px 20px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const HeaderAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeaderTitle = styled.div`
  flex: 1;
  h3 {
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin: 0;
  }
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 12px;
    margin: 0;
  }
`;

const HeaderIcons = styled.div`
  display: flex;
  gap: 8px;
  
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;

const GroupCard = styled.div`
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 16px;
  margin: 12px 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: transform 0.2s, background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
`;

const GroupImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const GroupInfo = styled.div`
  flex: 1;
  color: white;
  
  h4 {
    font-size: 16px;
    margin: 0 0 4px 0;
  }
  
  p {
    font-size: 14px;
    margin: 0;
    opacity: 0.9;
  }
  
  span {
    font-size: 12px;
    opacity: 0.8;
  }
`;

const PhoneNavBar = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  margin-top: auto;
`;

const NavItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${props => props.active ? '#FF6B6B' : 'rgba(255, 255, 255, 0.2)'};
  color: white;
  font-size: 20px;
`;

const PostCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const PostAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${theme.colors.primary.coral};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  margin-right: 8px;
`;

const PostAuthor = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.colors.text.primary};
`;

const PostContent = styled.div`
  font-size: 14px;
  color: ${theme.colors.text.secondary};
  line-height: 1.4;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing['2xl']};
  margin-bottom: ${theme.spacing['2xl']};
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  text-align: center;
  color: white;
`;

const StatNumber = styled.div`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: bold;
  margin-bottom: ${theme.spacing.sm};
`;

const StatLabel = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  opacity: 0.9;
`;

// Blog Section Styles
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
  font-size: ${theme.typography.fontSize.md};
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

const BlogGrid = styled.div`
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
  font-size: ${theme.typography.fontSize.md};
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
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.typography.fontSize.md};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.coral};
  }
`;

const Button = styled.button`
  background: ${theme.colors.primary.coral};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.full};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  font-size: ${theme.typography.fontSize.md};
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: ${theme.colors.primary.peach};
  }
`;

const ScrollableContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 4px;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
  }
`;

const testimonials = [
  {
    text: "O Davida mudou minha experiência na maternidade. O apoio e a comunidade que encontrei aqui são incríveis!",
    author: "Maria Silva",
    role: "Mãe de primeira viagem",
    avatar: "MS"
  },
  {
    text: "Encontrei força e acolhimento quando mais precisei. As orações e meditações me ajudaram muito.",
    author: "Ana Santos",
    role: "Gestante",
    avatar: "AS"
  },
  {
    text: "O suporte emocional e espiritual que recebi durante minha jornada foi fundamental.",
    author: "Júlia Lima",
    role: "Mãe de 2 filhos",
    avatar: "JL"
  },
  {
    text: "As conexões que fiz com outras mães e o conhecimento compartilhado são preciosos.",
    author: "Carla Oliveira",
    role: "Tentante há 1 ano",
    avatar: "CO"
  }
];

const stats = [
  {
    number: "50k+",
    label: "Usuárias Ativas"
  },
  {
    number: "200+",
    label: "Profissionais"
  },
  {
    number: "4.9★",
    label: "Avaliação"
  }
];

const categories = [
  "Todos",
  "Maternidade",
  "Espiritualidade",
  "Bem-estar",
  "Relacionamentos",
  "Autoestima",
  "Saúde Mental"
];

const articles = [
  {
    image: "/blog/article1.jpg",
    category: "Maternidade",
    title: "Como lidar com as mudanças emocionais na gravidez",
    excerpt: "Dicas práticas e espirituais para enfrentar as transformações da gestação com mais serenidade.",
    author: "Dra. Ana Santos",
    date: "12 Mar 2024"
  },
  {
    image: "/blog/article2.jpg",
    category: "Espiritualidade",
    title: "Meditações diárias para mulheres em busca de propósito",
    excerpt: "Um guia para fortalecer sua conexão espiritual durante a jornada materna.",
    author: "Irmã Maria Clara",
    date: "10 Mar 2024"
  },
  {
    image: "/blog/article3.jpg",
    category: "Bem-estar",
    title: "Autocuidado no pós-parto: corpo, mente e espírito",
    excerpt: "Como cuidar de si mesma de forma integral nesse momento tão especial.",
    author: "Paula Oliveira",
    date: "8 Mar 2024"
  }
];

export const Community: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de inscrição na newsletter
  };

  return (
    <Section>
      <Container>
        <Title>Nossa Comunidade de Apoio</Title>
        <Subtitle>
          Um espaço seguro e acolhedor para mulheres compartilharem experiências,
          encontrarem suporte emocional e crescerem juntas em sua jornada.
        </Subtitle>

        <CommunitySection>
          <ContentColumn>
            <TestimonialGrid>
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <TestimonialText>{testimonial.text}</TestimonialText>
                  <TestimonialAuthor>
                    <AuthorAvatar>{testimonial.avatar}</AuthorAvatar>
                    <AuthorInfo>
                      <AuthorName>{testimonial.author}</AuthorName>
                      <AuthorRole>{testimonial.role}</AuthorRole>
                    </AuthorInfo>
                  </TestimonialAuthor>
                </TestimonialCard>
              ))}
            </TestimonialGrid>
          </ContentColumn>

          <AppPreviewColumn>
            <AppScreenshot
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <PhoneHeader>
                <HeaderAvatar>
                  <span>👥</span>
                </HeaderAvatar>
                <HeaderTitle>
                  <h3>Women's support</h3>
                  <p>Share in groups your needs</p>
                </HeaderTitle>
                <HeaderIcons>
                  <span style={{ color: 'white', fontSize: '20px' }}>✕</span>
                </HeaderIcons>
              </PhoneHeader>

              <ScrollableContent>
                <GroupCard>
                  <GroupImage>
                    <span style={{ fontSize: '32px' }}>👶</span>
                  </GroupImage>
                  <GroupInfo>
                    <h4>Tentantes</h4>
                    <p>Grávidas</p>
                    <span>100 membros</span>
                  </GroupInfo>
                  <span style={{ color: 'white', fontSize: '20px' }}>✕</span>
                </GroupCard>

                <GroupCard>
                  <GroupImage>
                    <span style={{ fontSize: '32px' }}>🤰</span>
                  </GroupImage>
                  <GroupInfo>
                    <h4>Grávidas</h4>
                    <p>Pós-parto</p>
                    <span>120 membros</span>
                  </GroupInfo>
                  <span style={{ color: 'white', fontSize: '20px' }}>✕</span>
                </GroupCard>

                <GroupCard>
                  <GroupImage>
                    <span style={{ fontSize: '32px' }}>🫂</span>
                  </GroupImage>
                  <GroupInfo>
                    <h4>THEU</h4>
                    <p>Terapia em grupo</p>
                    <span>85 membros</span>
                  </GroupInfo>
                  <span style={{ color: 'white', fontSize: '20px' }}>✕</span>
                </GroupCard>

                <GroupCard>
                  <GroupImage>
                    <span style={{ fontSize: '32px' }}>💝</span>
                  </GroupImage>
                  <GroupInfo>
                    <h4>Rede de apoio</h4>
                    <p>Suporte emocional</p>
                    <span>150 membros</span>
                  </GroupInfo>
                  <span style={{ color: 'white', fontSize: '20px' }}>✕</span>
                </GroupCard>

                <GroupCard>
                  <GroupImage>
                    <span style={{ fontSize: '32px' }}>👩‍👦</span>
                  </GroupImage>
                  <GroupInfo>
                    <h4>Dicas Pós-parto</h4>
                    <p>Cuidados e experiências</p>
                    <span>95 membros</span>
                  </GroupInfo>
                  <span style={{ color: 'white', fontSize: '20px' }}>✕</span>
                </GroupCard>
              </ScrollableContent>

              <PhoneNavBar>
                <NavItem>🏠</NavItem>
                <NavItem>👤</NavItem>
                <NavItem active>🔍</NavItem>
                <NavItem>❤️</NavItem>
                <NavItem>👥</NavItem>
              </PhoneNavBar>
            </AppScreenshot>
          </AppPreviewColumn>
        </CommunitySection>

        <StatsContainer>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsContainer>

        {/* Blog Section */}
        <Title>Comunidade Davida</Title>
        <Subtitle>
          Conteúdo exclusivo sobre maternidade, espiritualidade e bem-estar feminino.
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

        <BlogGrid>
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ArticleImage>
                <img src={article.image} alt={article.title} />
              </ArticleImage>
              <ArticleContent>
                <ArticleCategory>{article.category}</ArticleCategory>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
                <ArticleMeta>
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </ArticleMeta>
              </ArticleContent>
            </ArticleCard>
          ))}
        </BlogGrid>

        <NewsletterSection>
          <NewsletterTitle>Receba Nosso Conteúdo</NewsletterTitle>
          <NewsletterText>
            Inscreva-se para receber artigos, meditações e conteúdo exclusivo
            diretamente no seu e-mail.
          </NewsletterText>
          <NewsletterForm onSubmit={handleNewsletterSubmit}>
            <NewsletterInput
              type="email"
              placeholder="Seu melhor e-mail"
              required
            />
            <Button type="submit">Inscrever-se</Button>
          </NewsletterForm>
        </NewsletterSection>
      </Container>
    </Section>
  );
}; 