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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: ${theme.spacing['2xl']};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const InfoTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.text.secondary};

  svg {
    width: 24px;
    height: 24px;
    margin-right: ${theme.spacing.md};
    color: ${theme.colors.primary.coral};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.xl};
`;

const SocialLink = styled(motion.a)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${theme.colors.primary.coral};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background: ${theme.colors.primary.peach};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Form = styled.form`
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
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
  padding: ${theme.spacing.md};
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
  padding: ${theme.spacing.md};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  min-height: 150px;
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
  width: 100%;
  transition: background-color 0.2s;

  &:hover {
    background: ${theme.colors.primary.peach};
  }
`;

const FAQSection = styled.div`
  margin-top: ${theme.spacing['2xl']};
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FAQItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const FAQQuestion = styled.h4`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const FAQAnswer = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  line-height: 1.6;
`;

const faqs = [
  {
    question: "Como posso começar a usar o Davida?",
    answer: "Baixe o app na App Store ou Google Play, crie sua conta e comece sua jornada. Oferecemos um período gratuito para você conhecer todas as funcionalidades."
  },
  {
    question: "Quais profissionais fazem parte da rede?",
    answer: "Nossa rede inclui psicólogos, obstetras, doulas, nutricionistas e outros especialistas em saúde feminina, todos devidamente certificados."
  },
  {
    question: "Como funciona o suporte espiritual?",
    answer: "Oferecemos conteúdos, meditações e orações personalizadas, respeitando todas as crenças e denominações religiosas."
  },
  {
    question: "Posso cancelar minha assinatura?",
    answer: "Sim, você pode cancelar sua assinatura a qualquer momento, sem multas ou taxas adicionais."
  }
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de envio do formulário
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Section id="contato">
      <Container>
        <Title>Entre em Contato</Title>
        <Subtitle>
          Estamos aqui para ajudar. Entre em contato conosco para tirar suas dúvidas
          ou compartilhar suas sugestões.
        </Subtitle>

        <Grid>
          <ContactInfo>
            <InfoTitle>Informações de Contato</InfoTitle>
            <InfoList>
              <InfoItem>
                <span>📧</span>
                <span>contato@davida.com</span>
              </InfoItem>
              <InfoItem>
                <span>📱</span>
                <span>+55 (11) 99999-9999</span>
              </InfoItem>
              <InfoItem>
                <span>⏰</span>
                <span>Segunda a Sexta, 9h às 18h</span>
              </InfoItem>
            </InfoList>

            <InfoTitle>Redes Sociais</InfoTitle>
            <SocialLinks>
              <SocialLink
                href="https://instagram.com/davida"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                📸
              </SocialLink>
              <SocialLink
                href="https://facebook.com/davida"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                📘
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/company/davida"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                💼
              </SocialLink>
            </SocialLinks>
          </ContactInfo>

          <Form onSubmit={handleSubmit}>
            <FormTitle>Envie sua Mensagem</FormTitle>
            
            <FormGroup>
              <Label htmlFor="name">Nome</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">E-mail</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">Assunto</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Mensagem</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar Mensagem
            </SubmitButton>
          </Form>
        </Grid>

        <FAQSection>
          <Title>Perguntas Frequentes</Title>
          <FAQGrid>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <FAQQuestion>{faq.question}</FAQQuestion>
                <FAQAnswer>{faq.answer}</FAQAnswer>
              </FAQItem>
            ))}
          </FAQGrid>
        </FAQSection>
      </Container>
    </Section>
  );
}; 