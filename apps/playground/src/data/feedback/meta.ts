import type { ComponentMeta } from '../types';

export const feedbackMeta: ComponentMeta[] = [
  { id: 'alert', name: 'Alert', category: 'feedback', icon: 'alert-triangle', description: 'Mensagens contextuais para destaque de estados e informacoes.' },
  { id: 'loader', name: 'Loader', category: 'feedback', icon: 'loader2', description: 'Indicador visual de carregamento.' },
  { id: 'progress', name: 'Progress', category: 'feedback', icon: 'activity', description: 'Indicador de progresso linear.' },
  { id: 'skeleton', name: 'Skeleton', category: 'feedback', icon: 'component', description: 'Placeholder visual para carregamento de conteudo.' },
  { id: 'toast', name: 'Toast', category: 'feedback', icon: 'message-square', description: 'Sistema de feedback efemero consumido via useToast e disponibilizado pelo ThemeProvider.' },
];
