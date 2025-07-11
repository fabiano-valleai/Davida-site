import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
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

const Title = styled.h1`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize['4xl']};
  color: white;
  text-align: center;
  margin-bottom: ${theme.spacing.md};
`;

const Subtitle = styled.h2`
  font-size: ${theme.typography.fontSize.xl};
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${theme.spacing.xl};
  line-height: 1.6;
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.xl};
  margin: ${theme.spacing['2xl']} 0;
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const StatNumber = styled.div`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize['3xl']};
  color: ${theme.colors.primary.coral};
  margin-bottom: ${theme.spacing.sm};
`;

const StatLabel = styled.div`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.text.secondary};
`;

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};
  margin: ${theme.spacing['2xl']} 0;
`;

interface PlanCardProps {
  featured?: boolean;
}

const PlanCard = styled(motion.div)<PlanCardProps>`
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  position: relative;
  overflow: hidden;

  ${props => props.featured && `
    border: 2px solid ${theme.colors.primary.coral};
    transform: scale(1.02);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  `}
`;

const PlanBadge = styled.div`
  position: absolute;
  top: ${theme.spacing.md};
  right: -${theme.spacing['2xl']};
  background: ${theme.colors.primary.coral};
  color: white;
  padding: ${theme.spacing.xs} ${theme.spacing['2xl']};
  transform: rotate(45deg);
  font-size: ${theme.typography.fontSize.sm};
`;

const PlanTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const PlanDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.lg};
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
`;

const FeatureItem = styled.li`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};

  &:before {
    content: "✓";
    color: ${theme.colors.primary.coral};
    font-weight: bold;
  }
`;

const IndicatedFor = styled.div`
  margin-top: ${theme.spacing.lg};
  padding-top: ${theme.spacing.lg};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const IndicatedTitle = styled.h4`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const IndicatedText = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
`;

const Form = styled.form`
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  margin-top: ${theme.spacing['2xl']};
`;

const FormTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
  text-align: center;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

const Label = styled.label`
  display: block;
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xs};
`;

const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.sm};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.coral};
  }
`;

const Select = styled.select`
  width: 100%;
  padding: ${theme.spacing.sm};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.coral};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${theme.spacing.sm};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.coral};
  }
`;

const SubmitButton = styled(motion.button)`
  background: ${theme.colors.primary.coral};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.full};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  font-size: ${theme.typography.fontSize.lg};
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;
  max-width: 400px;
  margin: ${theme.spacing.xl} auto 0;
  display: block;

  &:hover {
    background: ${theme.colors.primary.peach};
  }
`;

const BenefitDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
`;

const BenefitsSection = styled.div`
  margin: ${theme.spacing['2xl']} 0;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.xl};
`;

const BenefitCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const BenefitIcon = styled.div`
  font-size: ${theme.typography.fontSize['3xl']};
  margin-bottom: ${theme.spacing.md};
`;

const BenefitTitle = styled.h4`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.xl};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
`;

export const Partners: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const plans = [
    {
      title: "Premium",
      featured: true,
      description: "Visibilidade máxima e recursos exclusivos para grandes marcas",
      features: [
        "Página exclusiva com foto ou vídeo institucional",
        "Texto completo de apresentação",
        "Publicação de artigos nos grupos",
        "Link de contato monitorado",
        "Maior destaque nas buscas",
        "Prioridade nos feeds dos grupos",
        "Conteúdo diferenciado e exclusivo"
      ],
      indicatedFor: "Clínicas, médicos, centros de imagem, consultórios multiprofissionais, redes de farmácia, centros de bem-estar e empresas com foco nacional."
    },
    {
      title: "Destaques",
      description: "Visibilidade intermediária ideal para profissionais e pequenas empresas",
      features: [
        "Card com foto e briefing objetivo",
        "Link de contato monitorado",
        "Destaque intermediário na navegação",
        "Visualização ampliada em sessões relacionadas",
        "Participação em campanhas temáticas"
      ],
      indicatedFor: "Pequenas clínicas, profissionais autônomos, consultórios de bairro, lojas especializadas e fornecedores de produtos para mães."
    },
    {
      title: "Regional",
      description: "Presença local otimizada para negócios de bairro",
      features: [
        "Card com imagem e nome comercial",
        "Link com geolocalização",
        "Dados essenciais de contato",
        "Aparecimento em filtros por região",
        "Feed personalizado para usuários locais"
      ],
      indicatedFor: "Negócios locais com atendimento físico ou delivery, como farmácias, laboratórios, doulas e serviços de bairro."
    }
  ];

  const benefits = [
    {
      icon: "🎯",
      title: "Alcance Segmentado",
      description: "Conecte-se com mulheres entre 22-45 anos, em MG, PB e em todo Brasil"
    },
    {
      icon: "💝",
      title: "Ambiente Positivo",
      description: "Sua marca presente em um contexto de acolhimento e propósito"
    },
    {
      icon: "✨",
      title: "Conteúdo Co-branded",
      description: "Desenvolva conteúdo exclusivo e fortaleça sua autoridade"
    },
    {
      icon: "🙏",
      title: "Série de Devocionais",
      description: "Patrocine conteúdo espiritual e conecte-se emocionalmente"
    }
  ];

  return (
    <Section>
      <Helmet>
        <title>Seja Parceiro | Davida - Alie sua marca a um propósito que acolhe vidas</title>
        <meta name="description" content="Conecte sua marca com mulheres que buscam apoio em sua jornada. Alcance segmentado, ambiente positivo e oportunidades únicas de engajamento." />
        <meta name="keywords" content="parceria davida, anúncio premium, visibilidade segmentada, marketing para mulheres, publicidade consciente" />
        <meta property="og:title" content="Seja Parceiro do Davida - Propósito que Transforma" />
        <meta property="og:description" content="Alie sua marca a um propósito que acolhe vidas. Alcance segmentado e ambiente positivo para sua marca." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://davida.app/seja-parceiro" />
      </Helmet>

      <Container>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 96, marginBottom: 32 }}>
          <img src="/davidalogo.png" alt="Davida Logo" style={{ height: 85 }} />
        </div>
        <Title>Alie sua marca a um propósito que acolhe vidas</Title>
        <Subtitle>
          Conecte-se com mulheres que buscam apoio em sua jornada de vida, fé e maternidade
        </Subtitle>

        <BenefitsSection>
          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={benefit.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BenefitIcon>{benefit.icon}</BenefitIcon>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitDescription>{benefit.description}</BenefitDescription>
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </BenefitsSection>

        <PlansGrid>
          {plans.map((plan, index) => (
            <PlanCard
              key={plan.title}
              featured={plan.featured}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {plan.featured && <PlanBadge>Mais Popular</PlanBadge>}
              <PlanTitle>{plan.title}</PlanTitle>
              <PlanDescription>{plan.description}</PlanDescription>
              <FeaturesList>
                {plan.features.map((feature, i) => (
                  <FeatureItem key={i}>{feature}</FeatureItem>
                ))}
              </FeaturesList>
              <IndicatedFor>
                <IndicatedTitle>Indicado para:</IndicatedTitle>
                <IndicatedText>{plan.indicatedFor}</IndicatedText>
              </IndicatedFor>
            </PlanCard>
          ))}
        </PlansGrid>

        <Form onSubmit={handleSubmit}>
          <FormTitle>Quero ser parceiro</FormTitle>
          <FormGrid>
            <FormGroup>
              <Label>Nome da Empresa</Label>
              <Input type="text" required />
            </FormGroup>
            <FormGroup>
              <Label>Segmento</Label>
              <Select required>
                <option value="">Selecione...</option>
                <option value="clinica">Clínica</option>
                <option value="consultorio">Consultório</option>
                <option value="farmacia">Farmácia</option>
                <option value="bem-estar">Centro de Bem-estar</option>
                <option value="loja">Loja Especializada</option>
                <option value="servico">Serviço Local</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>E-mail</Label>
              <Input type="email" required />
            </FormGroup>
            <FormGroup>
              <Label>Telefone</Label>
              <Input type="tel" required />
            </FormGroup>
            <FormGroup style={{ gridColumn: '1 / -1' }}>
              <Label>Mensagem</Label>
              <TextArea required placeholder="Conte-nos um pouco sobre sua empresa e como podemos trabalhar juntos..." />
            </FormGroup>
          </FormGrid>
          <SubmitButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
          >
            Quero fazer parte
          </SubmitButton>
        </Form>
      </Container>
    </Section>
  );
}; 