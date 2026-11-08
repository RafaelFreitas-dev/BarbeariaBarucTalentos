/**
 * Dados comerciais da BARUC TALENTOS.
 * Edite SOMENTE este arquivo para atualizar telefones, preços, endereço, fotos etc.
 * Fotos: coloque os arquivos em /public/images e informe o caminho (ex.: '/images/fade.jpg').
 */

export interface WhatsAppContact {
  id: 1 | 2
  label: string
  phone: string // somente dígitos, sem DDI
  display: string
  message: string
}

export interface Service {
  id: string
  name: string
  description: string
  price?: string // ex.: 'R$ 50' — vazio = "Consulte nossos valores"
  image?: string
  icon: 'scissors' | 'sparkles' | 'crown' | 'droplets' | 'eye' | 'palette'
}

export interface GalleryItem {
  id: string
  title: string
  image?: string
}

export const business = {
  name: 'BARUC TALENTOS',
  tagline: 'Seu estilo, sua identidade, nossa paixão.',
  countryCode: '55',
  whatsapps: [
    {
      id: 1,
      label: 'Lucas Fabricio',
      phone: '11952416828',
      display: '(11) 95241-6828',
      message:
        'Olá! Conheci a BARUC TALENTOS pelo site e gostaria de consultar os horários disponíveis para agendar meu atendimento.',
    },
    {
      id: 2,
      label: 'Igor Dias',
      phone: '11989862314',
      display: '(11) 98986-2314',
      message:
        'Olá! Gostaria de conhecer os serviços da BARUC TALENTOS e consultar os horários disponíveis para agendamento.',
    },
  ] as WhatsAppContact[],
  // Preencha quando disponível (vazio = exibe "Em breve"):
  instagram: 'https://www.instagram.com/baructalentosbarbearia/', // ex.: 'https://instagram.com/seuperfil'
  address: 'Rua Dinalva Oliveira Teixeira 91 - Próximo ao Sesc Interlagos',
  hours: 'Seg a Sáb, 9h às 20h', // ex.: 'Seg a Sáb, 9h às 20h'
  mapsUrl: 'https://www.google.com/maps/dir/-23.7290084,-46.6807872/-23.728916,-46.683617/@-23.7291296,-46.6847303,17z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D', // link de "compartilhar" do Google Maps
  heroImage: undefined as string | undefined,
  ctaImage: undefined as string | undefined,
}

export const services: Service[] = [
  { id: 'corte', name: 'Corte masculino', icon: 'scissors', description: 'Corte alinhado ao seu rosto e à sua rotina, com acabamento impecável.' },
  { id: 'fade', name: 'Degradê / Fade', icon: 'sparkles', description: 'Transições limpas e precisas para um visual moderno e marcante.' },
  { id: 'social', name: 'Corte social', icon: 'crown', description: 'Elegância clássica para o trabalho, eventos e todos os dias.' },
  { id: 'barba', name: 'Barba e acabamento', icon: 'droplets', description: 'Barba desenhada, alinhada e hidratada, com finalização refinada.' },
  { id: 'combo', name: 'Corte + barba', icon: 'crown', description: 'O pacote completo para sair renovado da cabeça ao queixo.' },
  { id: 'sobrancelha', name: 'Sobrancelha', icon: 'eye', description: 'Design discreto que valoriza o olhar sem perder a naturalidade.' },
  { id: 'pigmentacao', name: 'Pigmentação', icon: 'palette', description: 'Realce de contornos e cobertura de falhas com efeito natural.' },
  { id: 'tratamento', name: 'Tratamento capilar', icon: 'droplets', description: 'Cuidado profissional para fios fortes, saudáveis e com brilho.' },
]

export const gallery: GalleryItem[] = [
  { id: 'low', title: 'Low Fade' },
  { id: 'mid', title: 'Mid Fade' },
  { id: 'high', title: 'High Fade' },
  { id: 'social', title: 'Corte social' },
  { id: 'tesoura', title: 'Corte na tesoura' },
  { id: 'barba', title: 'Barba desenhada' },
]

export const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
]
