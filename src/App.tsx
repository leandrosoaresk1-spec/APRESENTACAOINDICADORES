/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  TrendingDown, 
  TrendingUp, 
  Users, 
  Activity, 
  AlertTriangle, 
  DollarSign, 
  ChevronRight, 
  ChevronLeft,
  Target,
  ShieldCheck,
  Brain,
  MessageSquare,
  BarChart3,
  ExternalLink,
  Info,
  Clock,
  ArrowRight,
  Building,
  Stethoscope,
  Utensils,
  Zap,
  Flame,
  XCircle,
  CheckCircle2,
  Triangle,
  ShieldAlert,
  UserMinus,
  RotateCcw,
  Globe,
  Smartphone,
  Laptop,
  Settings,
  Layers,
  LayoutDashboard,
  Compass,
  Search,
  Rocket,
  Briefcase,
  GraduationCap,
  Calendar,
  CheckSquare,
  Filter,
  FileText,
  UserCheck,
  Share2,
  Sparkles
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Legend,
  LabelList
} from 'recharts';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// COLORS
const COLORS = {
  primary: '#ff0032', // Santa Casa Red
  dark: '#323232',
  medium: '#b4b4b4',
  light: '#a3a3a3',
  bg: '#f8f9fa',
  accent: '#E63946',
  white: '#ffffff',
  success: '#10b981',
  warning: '#f59e0b',
  info: '#3b82f6'
};

// DATA
const ABSENTEEISM_DATA = [
  { month: 'Janeiro', rate: 2.7, benchmark: 2.5 },
  { month: 'Fevereiro', rate: 3.4, benchmark: 2.5 },
  { month: 'Março', rate: 3.5, benchmark: 2.5 },
];

const ACCIDENT_CAUSES = [
  { cause: 'Descarte Inadequado', qty: 7 },
  { cause: 'Manuseio sem Dispositivo', qty: 7 },
  { cause: 'Condição Insegura', qty: 4 },
  { cause: 'Exposição Química', qty: 4 },
  { cause: 'Evento Via Pública', qty: 3 },
];

const TURNOVER_REASONS = [
  { reason: 'Ambiente Tóxico', value: 35.29 },
  { reason: 'Falta de Reconhecimento', value: 29.41 },
  { reason: 'Plano de Carreira', value: 23.53 },
  { reason: 'Presencial Obrigatório', value: 11.76 },
];

const TOP_CIDS = [
  { name: 'Osteomuscular e Tecido conjuntivo', value: 24.39, days: 865, color: '#ff0032' },
  { name: 'Doenças do Aparelho Respiratório', value: 11.70, days: 415, color: '#323232' },
  { name: 'Doenças Infecciosas e parasitárias', value: 9.59, days: 340, color: '#323232' },
  { name: 'Contato com serviço de saúde', value: 8.37, days: 297, color: '#b4b4b4' },
  { name: 'Doenças mentais', value: 8.15, days: 289, color: '#ff0032' },
];

const TURNOVER_GENERATION = [
  { gen: '17-23 (Gen Z)', rate: 7.6, benchmark: 5.2 },
  { gen: '24-28 (Millennial)', rate: 4.9, benchmark: 4.0 },
  { gen: '29-33', rate: 3.1, benchmark: 3.5 },
  { gen: '34-38', rate: 3.7, benchmark: 3.5 },
  { gen: '39-43', rate: 3.7, benchmark: 3.2 },
];

const DUPLO_VINCULO_DATA = [
  { name: 'SIM', value: 17.35, color: '#1a237e' },
  { name: 'NAO', value: 82.65, color: '#2196f3' },
];

const ACCIDENT_DATA = [
  { month: 'Jan', rate: 33.58 },
  { month: 'Fev', rate: 37.11 },
  { month: 'Mar', rate: 55.42 },
];

const CLIMATE_BARS = [
  { name: 'Orgulho', score: 89.56, type: 'Green' },
  { name: 'Imparcialidade', score: 89.34, type: 'Green' },
  { name: 'Colaboração', score: 81.3, type: 'Green' },
  { name: 'Liderança', score: 73.67, type: 'Amber' },
  { name: 'Crescimento', score: 73.1, type: 'Amber' },
  { name: 'Remuneração', score: 68.99, type: 'Red' },
];

// DOCUMENT DATA: ATRAÇÃO E SELEÇÃO (30-07-2026)
const HIRING_PERIOD_DATA = [
  { month: 'Abr/26', contratacoes: 263, candidaturas: 28536 },
  { month: 'Mai/26', contratacoes: 230, candidaturas: 22463 },
  { month: 'Jun/26', contratacoes: 270, candidaturas: 24594 },
];

const SLA_FUNNEL_DATA = [
  { stage: 'Cadastro', days: 28, isBottleneck: false },
  { stage: 'Pré-entrevista', days: 8, isBottleneck: false },
  { stage: 'Avaliação', days: 60, isBottleneck: true },
  { stage: 'Triagem', days: 23, isBottleneck: false },
  { stage: 'Entrevista', days: 10, isBottleneck: false },
  { stage: 'Contratação', days: 2, isBottleneck: false },
];

const ATTRACTION_CHANNELS_DATA = [
  { name: 'Indeed', candidaturas: 21698, percent: 28.7, color: '#003A9B' },
  { name: 'LinkedIn', candidaturas: 18929, percent: 25.0, color: '#0A66C2' },
  { name: 'Pág. Carreiras', candidaturas: 17043, percent: 22.5, color: '#ff0032' },
  { name: 'Portal Gupy', candidaturas: 15100, percent: 20.0, color: '#00C896' },
  { name: 'Outros Canais', candidaturas: 2823, percent: 3.8, color: '#6B7280' },
];

const AGE_DISTRIBUTION_DATA = [
  { range: '31 - 40 anos', contratacoes: 192, candidaturas: 20341 },
  { range: '25 - 30 anos', contratacoes: 191, candidaturas: 20173 },
  { range: '18 - 24 anos', contratacoes: 171, candidaturas: 16327 },
  { range: '41 - 50 anos', contratacoes: 163, candidaturas: 14082 },
  { range: '> 50 anos', contratacoes: 45, candidaturas: 4360 },
];

const CANDIDACY_AGE_DATA = [
  { range: '31 - 40 anos', generation: 'Millennials', candidaturas: 20341, formatted: '20.341' },
  { range: '25 - 30 anos', generation: 'Geração Z', candidaturas: 20173, formatted: '20.173' },
  { range: '18 - 24 anos', generation: 'Geração Z', candidaturas: 16327, formatted: '16.327' },
  { range: '41 - 50 anos', generation: 'Geração X', candidaturas: 14082, formatted: '14.082' },
  { range: 'Mais que 50', generation: 'Geração X', candidaturas: 4360, formatted: '4.360' },
  { range: 'Outros', generation: 'Outros', candidaturas: 310, formatted: '310' },
];

const EDUCATION_DATA = [
  { level: 'Graduação', count: 20785 },
  { level: 'Técnico', count: 17873 },
  { level: 'Pós-graduação', count: 13609 },
  { level: 'Ensino Médio', count: 11142 },
  { level: 'Outros/Não inf.', count: 12194 },
];

const TOP_ROLES_CANDIDACY = [
  { role: 'Técnico de Enfermagem', count: 18090 },
  { role: 'Assistente Administrativo', count: 10608 },
  { role: 'Auxiliar Administrativo', count: 6817 },
  { role: 'Enfermeiro', count: 6153 },
];

const REFERRAL_GERENCIAS_DATA = [
  { rank: "01", name: "MSDT", fullName: "MSDT – GERÊNCIA DE SERVIÇOS DE DIAGNÓSTICO E TRATAMENTO", count: 359, percentStr: "14,1%", isTop5: true },
  { rank: "02", name: "TEEC", fullName: "TEEC – GERÊNCIA DE CUIDADOS CLÍNICOS", count: 344, percentStr: "13,5%", isTop5: true },
  { rank: "03", name: "TECT", fullName: "TECT – GERÊNCIA DE UNIDADE DE ALTA COMPLEXIDADE", count: 200, percentStr: "7,9%", isTop5: true },
  { rank: "04", name: "GCMI", fullName: "GCMI – GERÊNCIA DE CUIDADOS MATERNO INFANTIS", count: 145, percentStr: "5,7%", isTop5: true },
  { rank: "05", name: "GEAS", fullName: "GEAS – GERÊNCIA ASSISTENCIAL DO SÃO LUCAS HOSPITAL PARTICULAR E CONVÊNIOS", count: 133, percentStr: "5,2%", isTop5: true },
  { rank: "06", name: "GEAM", fullName: "GEAM – GERENCIA AMBULATORIAL - CEM", count: 128, percentStr: "5,0%", isTop5: false },
  { rank: "07", name: "GEON", fullName: "GEON – GERÊNCIA DE CUIDADOS ONCOLÓGICOS", count: 121, percentStr: "4,8%", isTop5: false },
  { rank: "08", name: "GESU", fullName: "GESU – GERÊNCIA DE SUPRIMENTOS", count: 116, percentStr: "4,6%", isTop5: false },
  { rank: "09", name: "GUCC", fullName: "GUCC – GERENCIA DE CUIDADOS CIRÚRGICOS", count: 108, percentStr: "4,2%", isTop5: false },
  { rank: "10", name: "GTRA", fullName: "GTRA – GERÊNCIA DO INSTITUTO DE TRANSPLANTE", count: 95, percentStr: "3,7%", isTop5: false },
  { rank: "11", name: "GESC", fullName: "GESC – GERÊNCIA DE SUPORTE CLÍNICO", count: 70, percentStr: "2,7%", isTop5: false },
  { rank: "12", name: "GEGG", fullName: "GEGG – GERÊNCIA DE HOTELARIA E FACILITIES", count: 62, percentStr: "2,4%", isTop5: false },
  { rank: "13", name: "GANF", fullName: "GANF – GERÊNCIA AMBULATORIAL DE NEFROLOGIA", count: 58, percentStr: "2,3%", isTop5: false },
  { rank: "14", name: "GEPE", fullName: "GEPE – GERÊNCIA DE GESTÃO DE PESSOAS", count: 55, percentStr: "2,2%", isTop5: false },
  { rank: "15", name: "GMRS", fullName: "GMRS – GERÊNCIA DE RESPONSABILIDADE SOCIAL E MOBILIZAÇÃO DE RECURSOS", count: 51, percentStr: "2,0%", isTop5: false },
  { rank: "16", name: "GPPO", fullName: "GPPO – GERÊNCIA DE PLANEJAMENTO, PROJETOS E ORÇAMENTO", count: 50, percentStr: "2,0%", isTop5: false },
  { rank: "17", name: "GAOF", fullName: "GAOF – GERÊNCIA AMBULATORIAL OFTALMOLÓGICA", count: 49, percentStr: "1,9%", isTop5: false },
  { rank: "18", name: "GEAD", fullName: "GEAD – GERENCIA ADMINISTRATIVA", count: 43, percentStr: "1,7%", isTop5: false },
  { rank: "19", name: "GEGCQ", fullName: "GEGCQ – GERÊNCIA DE GOVERNANÇA CORPORATIVA E QUALIDADE", count: 38, percentStr: "1,5%", isTop5: false },
  { rank: "20", name: "SAEF", fullName: "SAEF – SUPERINTENDÊNCIA DE ADMINISTRAÇÃO EDUCACIONAL DA FACULDADE DE SAÚDE SANTA CASA BH", count: 38, percentStr: "1,5%", isTop5: false },
  { rank: "21", name: "GFCA", fullName: "GFCA – GERÊNCIA DE FARMACOTÉCNICA, FARMÁCIA CLÍNICA E AGENCIA TRANSFUSIONAL AGT", count: 29, percentStr: "1,1%", isTop5: false },
  { rank: "22", name: "GGCL", fullName: "GGCL – GERÊNCIA DE GOVERNANÇA CLÍNICA", count: 28, percentStr: "1,1%", isTop5: false },
  { rank: "23", name: "GSAC", fullName: "GSAC – GERÊNCIA DE SERVIÇO DE ATENDIMENTO A CLIENTE", count: 28, percentStr: "1,1%", isTop5: false },
  { rank: "24", name: "GJSC", fullName: "GJSC – GERÊNCIA JURÍDICA E DE GESTÃO DE DOCUMENTOS", count: 27, percentStr: "1,1%", isTop5: false },
  { rank: "25", name: "GCRA", fullName: "GCRA – GERÊNCIA CENTRO DE REFERÊNCIA DO AUTISMO", count: 21, percentStr: "0,8%", isTop5: false },
  { rank: "26", name: "GEMA", fullName: "GEMA – GERÊNCIA DE ENGENHARIA, MANUTENÇÃO E OBRAS", count: 21, percentStr: "0,8%", isTop5: false },
  { rank: "27", name: "GAFA", fullName: "GAFA – GERENCIA ASSISTÊNCIA FAMILIAR SANTA CASA BH", count: 19, percentStr: "0,7%", isTop5: false },
  { rank: "28", name: "GSGP", fullName: "GSGP – GERÊNCIA DE SEGURANÇA E GESTÃO PATRIMONIAL", count: 19, percentStr: "0,7%", isTop5: false },
  { rank: "29", name: "GRFA", fullName: "GRFA – GERÊNCIA DE REGULAÇÃO DE ACESSO E FLUXO ASSISTENCIAL", count: 17, percentStr: "0,7%", isTop5: false },
  { rank: "30", name: "GAIC", fullName: "GAIC – GERÊNCIA DE AUDITORIA INTERNA E COMPLIANCE", count: 16, percentStr: "0,6%", isTop5: false },
  { rank: "31", name: "GEOP", fullName: "GEOP – GERÊNCIA OPERACIONAL - HSL", count: 15, percentStr: "0,6%", isTop5: false },
  { rank: "32", name: "GPCL", fullName: "GPCL – GERÊNCIA DE PESQUISA CLÍNICA SANTA CASA BH", count: 14, percentStr: "0,5%", isTop5: false },
  { rank: "33", name: "AFGI", fullName: "AFGI – GERÊNCIA DE TECNOLOGIA DA INFORMAÇÃO", count: 8, percentStr: "0,3%", isTop5: false },
  { rank: "34", name: "AFFC", fullName: "AFFC – GERÊNCIA DE FATURAMENTO SUS", count: 6, percentStr: "0,2%", isTop5: false },
  { rank: "35", name: "GEND", fullName: "GEND – GERÊNCIA DE NUTRIÇÃO E DIETÉTICA", count: 6, percentStr: "0,2%", isTop5: false },
  { rank: "36", name: "IGSC", fullName: "IGSC – INSTITUTO GERIÁTRICO SANTA CASA BH", count: 4, percentStr: "0,2%", isTop5: false },
  { rank: "37", name: "AFFI", fullName: "AFFI – GERÊNCIA FINANCEIRA", count: 2, percentStr: "0,1%", isTop5: false },
  { rank: "38", name: "GCMK", fullName: "GCMK – GERÊNCIA DE COMUNICAÇÃO E MARKETING", count: 1, percentStr: "0,04%", isTop5: false },
  { rank: "39", name: "GCNE", fullName: "GCNE – GERÊNCIA DE GESTÃO DE CONTRATOS E NEGOCIAÇÕES ESTRATÉGICAS", count: 1, percentStr: "0,04%", isTop5: false },
  { rank: "40", name: "GECL", fullName: "GECL – GERÊNCIA DE ENGENHARIA CLÍNICA", count: 1, percentStr: "0,04%", isTop5: false },
];

const REFERRAL_TOP_CARGOS_DATA = [
  { rank: "1º", name: "TÉCNICO DE ENFERMAGEM", count: 745, isTop3: true },
  { rank: "2º", name: "ENFERMEIRO", count: 401, isTop3: true },
  { rank: "3º", name: "AUXILIAR ADMINISTRATIVO", count: 202, isTop3: true },
  { rank: "4º", name: "ASSISTENTE ADMINISTRATIVO I", count: 188, isTop3: false },
  { rank: "5º", name: "ASSISTENTE ADMINISTRATIVO II", count: 152, isTop3: false },
  { rank: "6º", name: "ANALISTA ADMINISTRATIVO PL", count: 93, isTop3: false },
  { rank: "7º", name: "PSICÓLOGO", count: 66, isTop3: false },
  { rank: "8º", name: "TÉCNICO DE RADIOLOGIA", count: 64, isTop3: false },
  { rank: "9º", name: "ESTAGIÁRIO NÍVEL SUPERIOR", count: 60, isTop3: false },
  { rank: "10º", name: "ANALISTA DE INFORMAÇÃO EM SAÚDE", count: 55, isTop3: false },
];

const REFERRAL_TOP_INDICANTES_DATA = [
  { rank: "1º", email: "anapaulamoreira@santacasabh.org.br", count: 75, isTop2: true },
  { rank: "2º", email: "cleitonsantos@santacasabh.org.br", count: 75, isTop2: true },
  { rank: "3º", email: "cristianemoraes@faculdadesantacasabh.edu.br", count: 51, isTop2: false },
  { rank: "4º", email: "gleicesouza@santacasabh.org.br", count: 43, isTop2: false },
  { rank: "5º", email: "sandrobarbosa@santacasabh.org.br", count: 40, isTop2: false },
  { rank: "6º", email: "Siomirapereira@santacasabh.org.br", count: 35, isTop2: false },
  { rank: "7º", email: "fabiosantos@santacasabh.org.br", count: 29, isTop2: false },
  { rank: "8º", email: "Daniellemariano@santacasabh.org.br", count: 28, isTop2: false },
  { rank: "9º", email: "evaneidealmeida@santacasabh.org.br", count: 27, isTop2: false },
  { rank: "10º", email: "Patriciasilva@faculdadesantacasabh.edu.br", count: 27, isTop2: false },
];

const REFERRAL_FUNNEL_STEPS = [
  { stage: 'Indicações Realizadas', count: 2547, percent: '100%', color: '#323232', width: '100%' },
  { stage: 'Indicações Confirmadas', count: 1091, percent: '42,8%', color: '#ea580c', width: '75%' },
  { stage: 'Em Processo Seletivo', count: 2313, percent: '84%', color: '#3b82f6', width: '55%' },
  { stage: 'Contratações Efetivadas', count: 52, percent: '1,9%', color: '#ff0032', width: '30%' },
];

const PUBLICATION_TYPES_DATA = [
  { type: "Externa", count: 2404, percent: "94,4%", vacancies: 492, vacPercent: "86,9%", color: "#3b82f6", width: "94.4%" },
  { type: "Interna", count: 72, percent: "2,8%", vacancies: 32, vacPercent: "5,7%", color: "#ea580c", width: "15%" },
  { type: "Não Listada", count: 70, percent: "2,8%", vacancies: 42, vacPercent: "7,4%", color: "#64748b", width: "15%" },
];

const VACANCY_TYPES_DATA = [
  { type: "Substituição - Permanente", count: 1914, percent: "75,1%", color: "#ff0032", width: "75.1%", isMain: true },
  { type: "Substituição - Temporária", count: 507, percent: "19,9%", color: "#f59e0b", width: "25%", isMain: false },
  { type: "Aumento de Quadro", count: 103, percent: "4,0%", color: "#10b981", width: "12%", isMain: false },
  { type: "Substituição - Com Transformação de Vaga", count: 20, percent: "0,8%", color: "#8b5cf6", width: "8%", isMain: false },
];

// Logo Component - New official logo
const SantaCasaLogo = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center", className)}>
    <img 
      src="https://santacasabh.org.br/wp-content/uploads/2023/05/logo-gscbh.png" 
      alt="Santa Casa BH Logo" 
      className="h-full w-auto object-contain"
      referrerPolicy="no-referrer"
    />
  </div>
);

// COMPONENTS
const StatCard = ({ title, value, subValue, icon: Icon, trend, subTrend, trendColor, statusIndicator, extraInfo }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-2 bg-gray-50 rounded-lg">
        <Icon size={24} className="text-dark" />
      </div>
      {(trend || subTrend) && (
        <div className="flex flex-col items-end">
          {trend && (
            <div className={cn("text-[9px] font-bold flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-gray-50 border border-gray-100 whitespace-nowrap", trendColor)}>
              {statusIndicator && <span className="text-[10px] leading-none shrink-0">{statusIndicator}</span>}
              {trend}
              {trend.includes('+') ? <TrendingUp size={10} /> : (trend.includes('-') ? <TrendingDown size={10} /> : null)}
            </div>
          )}
          {subTrend && (
            <span className="text-[7.5px] font-black text-light uppercase tracking-tighter mt-1 pr-1">{subTrend}</span>
          )}
        </div>
      )}
    </div>
    <div>
      <p className="text-[10px] text-light font-black uppercase tracking-widest mb-1">{title}</p>
      <h3 className="text-3xl font-black text-dark tabular-nums leading-none mb-2">{value}</h3>
      <p className="text-[10px] text-medium font-bold uppercase tracking-tight">{subValue}</p>
      {extraInfo && (
        <div className="mt-3 pt-2.5 border-t border-gray-100/85">
          {extraInfo}
        </div>
      )}
    </div>
  </motion.div>
);

const SlideWrapper = ({ children, title, subtitle }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    className="min-h-full flex flex-col p-4 md:p-12"
  >
    <header className="mb-6 md:mb-8 border-l-4 border-[#ff0032] pl-4 md:pl-6">
      <h2 className="text-2xl md:text-3xl font-bold text-dark tracking-tight leading-tight">{title}</h2>
      {subtitle && <p className="text-sm md:text-lg text-light font-medium">{subtitle}</p>}
    </header>
    <div className="flex-1 pb-12">
      {children}
    </div>
  </motion.div>
);

const ExecutiveInsight = ({ content }: { content: string }) => (
  <div className="bg-white text-dark p-6 rounded-2xl flex items-start gap-4 shadow-xl border border-gray-100">
    <div className="bg-[#ff0032] p-2 rounded-lg shrink-0">
      <Brain size={20} className="text-white" />
    </div>
    <div>
      <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#ff0032] block mb-1">Impacto Estratégico</span>
      <p className="text-sm leading-relaxed font-bold">{content}</p>
    </div>
  </div>
);

const BenchmarkBadge = ({ value, label, isHigher, statusIndicator }: any) => (
  <div className={cn(
    "flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider",
    isHigher ? "bg-red-50 text-red-600 border border-red-100" : "bg-green-50 text-green-600 border border-green-100"
  )}>
    {statusIndicator && <span className="text-[11px] leading-none shrink-0">{statusIndicator}</span>}
    {isHigher ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
    {value} vs Mercado ({label})
  </div>
);

// SLIDE 6 TRIPLE MATRIX COMPARATIVE VIEW (ESTÁTICA LADO A LADO)
const Slide6InteractiveView = () => {
  const MATRIX_CATEGORIES = [
    {
      id: 'EXTERNA',
      title: 'VAGAS EXTERNAS (492)',
      subtitle: 'Divulgação Aberta ao Mercado',
      badge: '94,4% das indicações',
      icon: Globe,
      theme: {
        bg: 'bg-blue-50/50',
        border: 'border-blue-200',
        headerText: 'text-blue-900',
        headerBg: 'bg-blue-600',
        badgeBg: 'bg-blue-600 text-white',
        accentText: 'text-blue-700',
        barColor: '#2563eb'
      },
      metrics: {
        vacancies: 492,
        vacanciesShare: '86,9% das vagas',
        referrals: 2404,
        referralsShare: '94,4% das ind.',
        ratio: '4,9 ind./vaga'
      },
      details: {
        indexacao: 'Canais Externos & Portal de Vagas',
        acesso: 'Aberto ao Mercado Publicamente',
        publico: 'Candidatos Externos & Geral',
        casoUso: 'Atração ampla para substituições e demandas gerais'
      },
      solicitations: [
        { type: 'Substituição – Permanente', vacancies: 377, vacPct: '76,6%', referrals: 1810, refPct: '75,3%', color: '#ff0032' },
        { type: 'Substituição – Temporária', vacancies: 92, vacPct: '18,7%', referrals: 473, refPct: '19,7%', color: '#f59e0b' },
        { type: 'Aumento de quadro', vacancies: 20, vacPct: '4,1%', referrals: 101, refPct: '4,2%', color: '#10b981' },
        { type: 'Substituição – Com Transformação', vacancies: 3, vacPct: '0,6%', referrals: 20, refPct: '0,8%', color: '#8b5cf6' },
      ],
      insight: '76,6% (377 vagas) são substituição permanente e 18,7% (92) temporária. Apenas 4,1% (20 vagas) para aumento de quadro.'
    },
    {
      id: 'INTERNA',
      title: 'VAGAS INTERNAS (32)',
      subtitle: 'Recrutamento Interno & Mobilidade',
      badge: '2,8% das indicações',
      icon: Users,
      theme: {
        bg: 'bg-orange-50/50',
        border: 'border-orange-200',
        headerText: 'text-orange-900',
        headerBg: 'bg-orange-600',
        badgeBg: 'bg-orange-600 text-white',
        accentText: 'text-orange-700',
        barColor: '#ea580c'
      },
      metrics: {
        vacancies: 32,
        vacanciesShare: '5,7% das vagas',
        referrals: 72,
        referralsShare: '2,8% das ind.',
        ratio: '2,3 ind./vaga'
      },
      details: {
        indexacao: 'Mural Interno & Intranet SCBH',
        acesso: 'Restrito a Colaboradores Internos',
        publico: 'Funcionários da Instituição',
        casoUso: 'Mobilidade funcional, carreira e indicações internas'
      },
      solicitations: [
        { type: 'Substituição – Permanente', vacancies: 20, vacPct: '62,5%', referrals: 52, refPct: '72,2%', color: '#ff0032' },
        { type: 'Substituição – Temporária', vacancies: 6, vacPct: '18,8%', referrals: 16, refPct: '22,2%', color: '#f59e0b' },
        { type: 'Aumento de quadro', vacancies: 5, vacPct: '15,6%', referrals: 3, refPct: '4,2%', color: '#10b981' },
        { type: 'Substituição – Com Transformação', vacancies: 1, vacPct: '3,1%', referrals: 1, refPct: '1,4%', color: '#8b5cf6' },
      ],
      insight: '62,5% (20 vagas) são substituição permanente. Destaca-se maior participação de aumento de quadro (15,6%, 5 vagas).'
    },
    {
      id: 'NAO_LISTADA',
      title: 'NÃO LISTADAS (42)',
      subtitle: 'Alocação Direta e Estratégica',
      badge: '2,7% das indicações',
      icon: Layers,
      theme: {
        bg: 'bg-slate-100/60',
        border: 'border-slate-300',
        headerText: 'text-slate-900',
        headerBg: 'bg-slate-800',
        badgeBg: 'bg-slate-800 text-white',
        accentText: 'text-slate-800',
        barColor: '#334155'
      },
      metrics: {
        vacancies: 42,
        vacanciesShare: '7,4% das vagas',
        referrals: 70,
        referralsShare: '2,7% das ind.',
        ratio: '1,7 ind./vaga'
      },
      details: {
        indexacao: 'Fluxo Direto de Alocação Específica',
        acesso: 'Reservado / Sem Divulgação Aberta',
        publico: 'Indicações de Perfis Específicos',
        casoUso: 'Alocação direta rápida e contratações pontuais'
      },
      solicitations: [
        { type: 'Substituição – Permanente', vacancies: 33, vacPct: '78,6%', referrals: 54, refPct: '77,1%', color: '#ff0032' },
        { type: 'Substituição – Temporária', vacancies: 5, vacPct: '11,9%', referrals: 14, refPct: '20,0%', color: '#f59e0b' },
        { type: 'Aumento de quadro', vacancies: 4, vacPct: '9,5%', referrals: 2, refPct: '2,9%', color: '#10b981' },
        { type: 'Substituição – Com Transformação', vacancies: 0, vacPct: '0,0%', referrals: 0, refPct: '0,0%', color: '#8b5cf6' },
      ],
      insight: '78,6% (33 vagas) substituição permanente, 11,9% (5) temporária e 9,5% (4) aumento de quadro.'
    }
  ];

  return (
    <SlideWrapper 
      title="PANORAMA DAS INDICAÇÕES" 
      subtitle="MATRIZ TRIPLA COMPARATIVA POR TIPO DE PUBLICAÇÃO (EXTERNA, INTERNA E NÃO LISTADA)"
    >
      <div className="flex flex-col h-full justify-between gap-2">
        
        {/* TOP SUMMARY BAR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-white p-3 md:p-3.5 rounded-2xl border border-gray-100 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-1">
                Vagas Analisadas
              </span>
              <div className="text-2xl md:text-3xl font-black text-dark font-mono leading-none">566</div>
            </div>
            <div className="p-2 bg-gray-50 text-gray-600 rounded-xl font-bold shrink-0">
              <Briefcase size={22} />
            </div>
          </div>

          <div className="bg-white p-3 md:p-3.5 rounded-2xl border border-gray-100 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-1">
                Indicações Recebidas
              </span>
              <div className="text-2xl md:text-3xl font-black text-dark font-mono leading-none">2.547</div>
            </div>
            <div className="p-2 bg-red-50 text-[#ff0032] rounded-xl font-bold shrink-0">
              <Share2 size={22} />
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-rose-50/60 p-3 md:p-3.5 rounded-2xl border border-red-100 shadow-xs flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-xs font-black text-[#ff0032] uppercase tracking-widest">
                  MÉDIA DE INDICAÇÕES POR VAGA
                </span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl md:text-3xl font-black text-[#ff0032] font-mono leading-none">4,5</span>
              </div>
            </div>
            <div className="p-2 bg-white/80 text-[#ff0032] rounded-xl font-bold shadow-xs shrink-0">
              <TrendingUp size={22} />
            </div>
          </div>
        </div>

        {/* THREE COMPARATIVE COLUMNS (MATRIZ TRIPLA LADO A LADO) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1">
          {MATRIX_CATEGORIES.map((cat) => {
            const IconComp = cat.icon;
            return (
              <div 
                key={cat.id} 
                className={cn(
                  "bg-white rounded-2xl border p-4 shadow-xs flex flex-col justify-between transition-all",
                  cat.theme.border
                )}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex justify-between items-start mb-3 pb-2.5 border-b border-gray-100">
                    <div className="flex items-center gap-2.5">
                      <div className={cn("p-2.5 rounded-xl font-bold text-white shrink-0", cat.theme.headerBg)}>
                        <IconComp size={22} />
                      </div>
                      <div>
                        <h4 className={cn("text-base md:text-lg font-black uppercase tracking-tight", cat.theme.headerText)}>
                          {cat.title}
                        </h4>
                        <p className="text-xs font-bold text-gray-500">
                          {cat.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className={cn("text-xs font-black px-2.5 py-1 rounded-lg uppercase font-mono shrink-0 ml-1 shadow-2xs", cat.theme.badgeBg)}>
                      {cat.badge}
                    </span>
                  </div>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100 text-center">
                      <span className="text-xs font-black text-gray-400 uppercase block">Vagas</span>
                      <div className="text-xl md:text-2xl font-black text-dark font-mono my-1">{cat.metrics.vacancies}</div>
                      <span className="text-xs font-bold text-gray-600">{cat.metrics.vacanciesShare}</span>
                    </div>
                    <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100 text-center">
                      <span className="text-xs font-black text-gray-400 uppercase block">Indicações</span>
                      <div className="text-xl md:text-2xl font-black text-[#ff0032] font-mono my-1">{cat.metrics.referrals}</div>
                      <span className="text-xs font-bold text-gray-600">{cat.metrics.referralsShare}</span>
                    </div>
                    <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100 text-center">
                      <span className="text-xs font-black text-gray-400 uppercase block">Média</span>
                      <div className="text-xl md:text-2xl font-black text-gray-800 font-mono my-1">{cat.metrics.ratio}</div>
                      <span className="text-xs font-bold text-gray-600">por vaga</span>
                    </div>
                  </div>

                  {/* Solicitation Type Breakdown */}
                  <div className="space-y-2 mb-3">
                    <span className="text-xs font-black uppercase tracking-wider text-gray-500 block mb-1">
                      Por Tipo de Solicitação:
                    </span>
                    {cat.solicitations.map((sol, idx) => (
                      <div key={idx} className="p-2 rounded-xl bg-gray-50/90 border border-gray-200/60 flex items-center justify-between text-xs md:text-sm">
                        <div className="flex items-center gap-2 min-w-0 flex-1">
                          <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: sol.color }} />
                          <span className="font-bold text-gray-800 truncate" title={sol.type}>
                            {sol.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 font-mono shrink-0 ml-1">
                          <span className="font-black text-dark">{sol.vacancies} v.</span>
                          <span className="text-gray-500 font-semibold">({sol.vacPct})</span>
                          <span className="font-extrabold text-[#ff0032] bg-red-50 px-2 py-0.5 rounded-md border border-red-100 ml-1">
                            {sol.referrals} ind.
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Insight Footer */}
                <div className="pt-2.5 border-t border-gray-100">
                  <p className="text-xs md:text-sm font-semibold text-gray-700 leading-snug">
                    <strong className={cn("font-black text-sm", cat.theme.accentText)}>Insight: </strong>
                    {cat.insight}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </SlideWrapper>
  );
};

// SLIDES
const Slides = [
  // SLIDE 0: CAPA
  () => (
    <div className="h-full bg-dark relative flex items-center justify-center p-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ff0032] opacity-10 skew-x-12 translate-x-1/2" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#ff0032] rounded-full blur-[120px] opacity-20" />
      
      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold tracking-[0.3em] uppercase mb-8">
            Executive Summary • People Analytics
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-[0.95]">
            ESTRATÉGIA & <span className="text-[#ff0032]">RESULTADOS</span>
          </h1>
          <p className="text-xl text-medium max-w-2xl mx-auto mb-12 leading-relaxed">
            Painel Executivo 2º Trimestre de 2026: Transformando indicadores operacionais em valor estratégico para a Santa Casa BH.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-white/10">
            <div className="text-left">
              <span className="text-[10px] text-light uppercase tracking-widest block mb-2">Relatório</span>
              <span className="text-white font-bold block">Conselho Diretor</span>
            </div>
            <div className="text-left">
              <span className="text-[10px] text-light uppercase tracking-widest block mb-2">Data</span>
              <span className="text-white font-bold block">Maio, 2026</span>
            </div>
            <div className="text-left">
              <span className="text-[10px] text-light uppercase tracking-widest block mb-2">Acesso</span>
              <span className="text-white font-bold block">Privilegiado</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-12 right-12 flex items-center gap-4 text-white/50 text-sm font-medium">
        <span>SAÚDE DE PONTA PARA TODOS</span>
        <div className="w-12 h-[1px] bg-white/20" />
        <span className="text-white font-bold italic">SANTA CASA BH</span>
      </div>
    </div>
  ),

  // SLIDE 2: ENTREGAS REALIZADAS
  () => (
    <SlideWrapper title="Entregas Realizadas – 2º Trimestre de 2026">
      <div className="flex flex-col h-full justify-between gap-6">
        {/* Timeline/Execution Progress Bar */}
        <div className="bg-gray-50/50 border border-gray-100/80 px-6 py-4 rounded-2xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-xs font-black uppercase text-dark tracking-wider">Cronograma Q2/2026: 100% Concluído</span>
            
            <div className="h-4 w-[1px] bg-gray-200 hidden md:block" />
            
            <span className="text-xs font-black text-medium uppercase tracking-wider flex items-center gap-2">
              <span className="text-gray-400">Total no Trimestre:</span>
              <span className="px-2 py-0.5 bg-red-50 text-[#ff0032] border border-red-100 rounded-md font-mono text-xs">
                8 Entregas
              </span>
            </span>
          </div>
          <div className="flex items-center gap-6 text-[10px] font-bold text-light uppercase tracking-widest md:flex">
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✔</span> Alta Produtividade
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✔</span> Transformação Digital
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✔</span> Evolução de Processos
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✔</span> RH 4.0 & Inovação
            </div>
          </div>
        </div>

        {/* Bento/Dashboard Grid of 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-2">
          {[
            {
              title: "Dashboards",
              icon: LayoutDashboard,
              color: "text-[#ff0032] bg-red-50/60 border-red-100",
              accentColor: "#ff0032",
              items: [
                "Adesão Circuito RH",
                "9 box(comum e cruzada)"
              ]
            },
            {
              title: "Processos",
              icon: Settings,
              color: "text-orange-600 bg-orange-50/60 border-orange-100",
              accentColor: "#ea580c",
              items: [
                "Matriz de risco psicossocial",
                "Reformulação da metodologia da entrevista de desligamento",
                "1ª fase da metodologia DISC",
                "Eneagrama"
              ]
            },
            {
              title: "Aplicativos",
              icon: Smartphone,
              color: "text-violet-600 bg-violet-50/60 border-violet-100",
              accentColor: "#7c3aed",
              items: [
                "Mapa de Ambientação fase 1",
                "Controle de Substituição Temporária"
              ]
            }
          ].map((card, i) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden group min-h-[340px]"
              >
                {/* Accent top bar */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5" 
                  style={{ backgroundColor: card.accentColor }}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={cn("p-3 rounded-2xl flex items-center justify-center shadow-inner", card.color)}>
                      <IconComponent size={24} />
                    </div>
                    {/* Discreto e estratégico indicador quantitativo do card */}
                    <span className="text-sm font-black text-gray-400 font-mono bg-gray-50 border border-gray-100/60 px-2.5 py-1 rounded-full">
                      {card.items.length}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-dark tracking-tight leading-none mb-4 group-hover:text-[#ff0032] transition-colors">
                    {card.title}
                  </h3>

                  <div className="w-full h-[1px] bg-gray-100/80 mb-4" />

                  <ul className="space-y-3">
                    {card.items.map((item, idx) => (
                      <li key={idx} className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2.5 min-w-0">
                          <div className="mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full" style={{ backgroundColor: card.accentColor }} />
                          <span className="text-xs font-bold text-dark leading-snug tracking-tight">
                            {item.replace('Em processo: ', '').replace(' (Em processo)', '')}
                          </span>
                        </div>
                        {item.includes('Em processo') && (
                          <span className="text-[8.5px] font-black text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 uppercase tracking-wider shrink-0 font-mono">
                            Em processo
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Micro decorator */}
                <div className="mt-6 pt-4 border-t border-gray-50/50 flex justify-between items-center text-[9px] font-extrabold text-[#ff0032] uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Concluído • Q2</span>
                  <span>→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideWrapper>
  ),

  // SLIDE 3: VISÃO DO TRIMESTRE
  () => (
    <SlideWrapper 
      title="VISÃO DO TRIMESTRE" 
      subtitle="Visão geral dos temas estratégicos apresentados no Relatório de Atração & Seleção – 2º Trimestre de 2026."
    >
      <div className="flex flex-col h-full justify-between gap-6 py-2">
        {/* Discrete Agenda Indicator Bar */}
        <div className="flex items-center justify-between bg-gray-50/80 border border-gray-100 px-6 py-3 rounded-2xl">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#ff0032] animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-widest text-[#ff0032] font-mono">
                Estrutura de Apresentação • Visão do Trimestre
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest hidden md:flex">
            <span className="text-dark font-black">01. Visão do Trimestre</span>
            <span>→</span>
            <span>02. Panorama de Candidaturas</span>
            <span>→</span>
            <span>03. Indicações</span>
          </div>
        </div>

        {/* Horizontal Module Cards */}
        <div className="flex flex-col gap-4 flex-1 justify-center">
          {[
            {
              module: "Módulo 01",
              title: "Panorama de Candidaturas",
              subtitle: "Perfil dos candidatos, comportamento das inscrições e evolução das candidaturas.",
              icon: Users,
              accentColor: "#ff0032"
            },
            {
              module: "Módulo 02",
              title: "Indicações",
              subtitle: "Indicadores de indicações internas, participação e efetividade como fonte de atração.",
              icon: Share2,
              accentColor: "#ea580c"
            }
          ].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.12, duration: 0.4 }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all flex items-center justify-between gap-6 relative overflow-hidden group"
              >
                {/* Left vertical accent line */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1.5 transition-all group-hover:w-2"
                  style={{ backgroundColor: item.accentColor }}
                />

                <div className="flex items-center gap-6 flex-1 pl-2">
                  {/* Icon Container */}
                  <div 
                    className="p-4 rounded-2xl shrink-0 transition-transform group-hover:scale-105"
                    style={{ backgroundColor: `${item.accentColor}0D`, color: item.accentColor }}
                  >
                    <IconComponent size={28} />
                  </div>

                  {/* Text Details */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span 
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border font-mono"
                        style={{ 
                          backgroundColor: `${item.accentColor}10`, 
                          borderColor: `${item.accentColor}30`,
                          color: item.accentColor 
                        }}
                      >
                        {item.module}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-dark tracking-tight leading-snug mb-1 group-hover:text-[#ff0032] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-gray-500 leading-relaxed max-w-3xl">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Arrow Indicator */}
                <div className="shrink-0 p-2 text-gray-300 group-hover:text-[#ff0032] transition-colors">
                  <ChevronRight size={22} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SlideWrapper>
  ),

  // SLIDE 4: PANORAMA DAS CANDIDATURAS (Dados do Documento)
  () => (
    <SlideWrapper 
      title="PANORAMA DAS CANDIDATURAS" 
      subtitle="Perfil dos candidatos, origem das inscrições, período de candidatura e desempenho dos canais de atração (Abr–Jun/2026)."
    >
      <div className="flex flex-col h-full justify-between gap-3">
        {/* Top KPIs Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
            <div className="p-2.5 bg-red-50 text-[#ff0032] rounded-xl font-bold">
              <Users size={18} />
            </div>
            <div>
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block">Total Candidaturas</span>
              <div className="text-xl font-black text-dark font-mono">75.593</div>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl font-bold">
              <UserCheck size={18} />
            </div>
            <div>
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block">Candidaturas Por Dia</span>
              <div className="text-xl font-black text-dark font-mono">831</div>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
            <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl font-bold">
              <Rocket size={18} />
            </div>
            <div>
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block">Novas pessoas candidatas</span>
              <div className="text-xl font-black text-dark font-mono">12.493</div>
              <span className="text-[9px] font-bold text-emerald-600">17% do total de inscritos</span>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
            <div className="p-2.5 bg-violet-50 text-violet-600 rounded-xl font-bold">
              <Share2 size={18} />
            </div>
            <div>
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block">Candidaturas Por Vaga</span>
              <div className="text-xl font-black text-dark font-mono">1.243</div>
              <span className="text-[9px] font-bold text-violet-600">Média por vaga</span>
            </div>
          </div>
        </div>

        {/* Visual Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Chart 1: Demanda por Cargo & Escolaridade */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xs font-black text-dark uppercase tracking-tight">Demanda por Cargo & Escolaridade</h4>
                <span className="text-[9px] font-bold text-gray-400">Inscrições</span>
              </div>

              <div className="space-y-1.5 mb-2">
                <span className="text-[9px] font-black uppercase text-gray-400 block">Principais Cargos Procurados</span>
                {TOP_ROLES_CANDIDACY.map((role, i) => (
                  <div key={i} className="flex justify-between items-center p-1.5 bg-gray-50 rounded-xl text-xs font-bold">
                    <span className="text-dark truncate max-w-[150px]">{role.role}</span>
                    <span className="font-mono text-[#ff0032]">{role.count.toLocaleString('pt-BR')}</span>
                  </div>
                ))}
              </div>

              <div className="p-2 bg-red-50/60 rounded-xl border border-red-100 text-[10px] font-bold text-red-900 leading-tight">
                <span className="font-black uppercase block text-[#ff0032] mb-0.5">Perfil de Escolaridade</span>
                51% dos inscritos possuem Graduação (20,7k) ou Técnico (17,8k).
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100 text-[10px] font-bold text-gray-400 flex justify-between mt-2">
              <span>Dados Gupy • 30/07/2026</span>
              <span className="text-emerald-600 font-bold">Base Qualificada</span>
            </div>
          </div>

          {/* Chart 2: Candidaturas por Faixa Etária */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-xs font-black text-dark uppercase tracking-tight">Candidaturas por Faixa Etária</h4>
                <span className="text-[9px] font-bold font-mono text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">Gerações ▾</span>
              </div>

              <div className="h-[95px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={CANDIDACY_AGE_DATA} margin={{ top: 14, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="range" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 7.5, fontWeight: 'bold' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#b4b4b4', fontSize: 7.5 }} />
                    <Tooltip 
                      formatter={(val: any, _name: any, item: any) => [`${Number(val).toLocaleString('pt-BR')} candidaturas (${item.payload.generation})`, 'Candidaturas recebidas']}
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} 
                    />
                    <Bar dataKey="candidaturas" name="Candidaturas recebidas" fill="#38bdf8" radius={[6, 6, 0, 0]} barSize={16}>
                      <LabelList dataKey="formatted" position="top" fill="#0284c7" fontSize={7.5} fontWeight="bold" />
                      {CANDIDACY_AGE_DATA.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={index < 2 ? '#0284c7' : '#38bdf8'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Tabela de Gerações por Faixa Etária */}
              <div className="mt-1 space-y-0.5 text-[8.5px] border-t border-gray-100 pt-1">
                {CANDIDACY_AGE_DATA.filter(d => d.generation !== 'Outros').map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center px-1.5 py-0.5 bg-gray-50/90 rounded border border-gray-100">
                    <span className="font-bold text-gray-700 font-sans text-[8.5px]">{item.range}</span>
                    <span className="text-[7.5px] font-black uppercase text-[#0284c7] bg-cyan-50 px-1.5 py-0.2 rounded border border-cyan-100 font-mono">
                      {item.generation}
                    </span>
                    <span className="font-mono font-bold text-gray-500 text-[8.5px]">{item.formatted}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-1.5 border-t border-gray-100 text-[9.5px] font-bold text-gray-500 flex justify-between mt-1">
              <span>Gen Z (36,5k) • Mill. (20,3k) • Gen X (18,4k)</span>
              <span className="text-cyan-700 font-black">75.593 Total</span>
            </div>
          </div>

          {/* Chart 3: Canais de Atração (Top Fontes) */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xs font-black text-dark uppercase tracking-tight">Canais de Atração (Top Fontes)</h4>
                <span className="text-[9px] font-bold text-gray-400 uppercase">Gupy / Web</span>
              </div>

              <div className="space-y-2 mt-1">
                {ATTRACTION_CHANNELS_DATA.map((channel, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="flex justify-between text-[10px] font-bold">
                      <span className="text-dark">{channel.name}</span>
                      <span className="font-mono text-gray-500">{channel.candidaturas.toLocaleString('pt-BR')} ({channel.percent}%)</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-500" 
                        style={{ width: `${(channel.candidaturas / 22000) * 100}%`, backgroundColor: channel.color }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100 text-[10px] font-bold text-gray-400 flex justify-between mt-2">
              <span>Indeed + LinkedIn = 53.7%</span>
              <span className="text-[#ff0032]">Fontes de Maior Volume</span>
            </div>
          </div>
        </div>

        {/* Chart 4 (Bottom): Candidaturas por Período */}
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-1">
            <div className="flex items-center gap-1.5">
              <h4 className="text-xs font-black text-dark uppercase tracking-tight">Candidaturas por Período</h4>
              <span className="text-gray-400 text-[10px]">ⓘ</span>
            </div>
            <span className="text-[9px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-100 font-mono">
              Evolução Mensal (Abr–Jun/2026)
            </span>
          </div>

          <div className="h-[105px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={HIRING_PERIOD_DATA} margin={{ top: 16, right: 35, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="periodGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.25}/>
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 9, fontWeight: 'bold' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#b4b4b4', fontSize: 8 }} domain={[0, 32000]} tickFormatter={(v) => `${v/1000}k`} />
                <Tooltip 
                  formatter={(val: any) => [`${Number(val).toLocaleString('pt-BR')} candidaturas`, 'Candidaturas recebidas']}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="candidaturas" 
                  name="Candidaturas recebidas" 
                  stroke="#f97316" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#periodGrad)" 
                >
                  <LabelList 
                    dataKey="candidaturas" 
                    position="top" 
                    formatter={(val: number) => `Candidaturas recebidas: ${val.toLocaleString('pt-BR')}`} 
                    fill="#ea580c" 
                    fontSize={9} 
                    fontWeight="bold" 
                  />
                </Area>
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="pt-1.5 border-t border-gray-100 text-[10px] font-bold text-gray-500 flex justify-between items-center mt-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded bg-orange-500 inline-block" />
              <span>Candidaturas recebidas</span>
            </div>
            <span className="text-orange-600 font-black">Total no Trimestre: 75.593</span>
          </div>
        </div>
      </div>
    </SlideWrapper>
  ),

  // SLIDE 5: PANORAMA DAS INDICAÇÕES (Top 10 Indicantes + Gerências Indicantes + Top 5 Vagas)
  () => (
    <SlideWrapper 
      title="PANORAMA DAS INDICAÇÕES" 
      subtitle="Volume total de indicações, ranking dos 10 maiores indicantes, gerências indicantes e vagas mais procuradas."
    >
      <div className="flex flex-col h-full justify-between gap-3">
        {/* Top 4 KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-2.5">
            <div className="p-2 bg-red-50 text-[#ff0032] rounded-xl font-bold shrink-0 mt-0.5">
              <Share2 size={16} />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block truncate">KPI 01 • Total Indicações</span>
              <div className="text-lg font-black text-dark font-mono flex items-baseline gap-1.5">
                2.547
                <span className="text-xs font-bold text-red-600 font-sans">(3,36% das candidaturas)</span>
              </div>
              <span className="text-[8px] font-bold text-red-700 bg-red-50 px-1.5 py-0.5 rounded border border-red-100 inline-block mt-0.5">
                das quais 1.045 são de pessoas distintas
              </span>
            </div>
          </div>

          <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-2.5">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl font-bold shrink-0 mt-0.5">
              <CheckSquare size={16} />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block truncate">KPI 02 • Indicações Confirmadas</span>
              <div className="text-lg font-black text-emerald-600 font-mono">1.091 <span className="text-xs font-bold text-emerald-700">(42,8%)</span></div>
              <span className="text-[8px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 inline-block mt-0.5">
                Validadas no sistema
              </span>
            </div>
          </div>

          <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-2.5">
            <div className="p-2 bg-amber-50 text-amber-600 rounded-xl font-bold shrink-0 mt-0.5">
              <Clock size={16} />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block truncate">KPI 03 • Indicações Pendentes</span>
              <div className="text-lg font-black text-amber-600 font-mono">1.456 <span className="text-xs font-bold text-amber-700">(57,2%)</span></div>
              <span className="text-[8px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-100 inline-block mt-0.5">
                Aguardando validação
              </span>
            </div>
          </div>

          <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-2.5">
            <div className="p-2 bg-violet-50 text-violet-600 rounded-xl font-bold shrink-0 mt-0.5">
              <Briefcase size={16} />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block truncate">KPI 04 • Total de Vagas</span>
              <div className="text-lg font-black text-dark font-mono">566</div>
              <span className="text-[10px] font-black text-violet-800 bg-violet-100 px-2.5 py-0.5 rounded-md border border-violet-200 inline-block mt-0.5 uppercase tracking-tight shadow-xs">
                Média 4.5 Indicações por vaga
              </span>
            </div>
          </div>
        </div>

        {/* 3-Column Integrated Dashboard: Top 10 Indicantes (5 cols) + Ranking Gerências (4 cols) + Top 5 Vagas (3 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 flex-1">
          {/* Chart 1: TOP 10 — QUEM MAIS INDICOU (5 columns) */}
          <div className="lg:col-span-5 bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2 pb-1.5 border-b border-gray-100">
                <div>
                  <h4 className="text-xs font-black text-dark uppercase tracking-tight">TOP 10 — QUEM MAIS INDICOU</h4>
                  <p className="text-[9.5px] font-bold text-gray-400">Indicantes com maior número de indicações no período.</p>
                </div>
                <span className="text-[8.5px] font-bold font-mono text-[#ff0032] bg-red-50 px-1.5 py-0.5 rounded border border-red-100 shrink-0 ml-1">
                  1º e 2º = 75 ind.
                </span>
              </div>

              {/* Horizontal bar ranking list */}
              <div className="flex flex-col space-y-1 overflow-y-auto max-h-[380px] pr-1">
                {REFERRAL_TOP_INDICANTES_DATA.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={cn(
                      "p-1 px-2 rounded-lg border flex items-center justify-between gap-1.5 transition-all",
                      item.isTop2 
                        ? "bg-red-50/50 border-red-200/90 shadow-2xs" 
                        : "bg-gray-50/60 border-gray-100"
                    )}
                  >
                    <div className="flex items-center gap-1.5 min-w-0 max-w-[58%] shrink-0">
                      <span className={cn(
                        "w-4 h-3.5 rounded text-[8.5px] font-black font-mono flex items-center justify-center shrink-0",
                        item.isTop2 ? "bg-[#ff0032] text-white" : "bg-gray-200 text-gray-600"
                      )}>
                        {item.rank}
                      </span>
                      <span className={cn("text-[10px] font-bold font-mono truncate", item.isTop2 ? "text-[#ff0032]" : "text-dark")} title={item.email}>
                        {item.email}
                      </span>
                      {item.isTop2 && (
                        <span className="hidden xl:inline-block text-[7.5px] font-black uppercase tracking-wider text-[#ff0032] bg-red-100 px-1 py-0.2 rounded border border-red-200 shrink-0">
                          1º LUGAR
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 flex-1 shrink-0 justify-end">
                      <div className="flex-1 max-w-[80px] sm:max-w-[110px] h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all"
                          style={{ 
                            width: `${(item.count / 75) * 100}%`,
                            backgroundColor: item.isTop2 ? '#ff0032' : '#64748b'
                          }}
                        />
                      </div>
                      <div className="text-right min-w-[42px] font-mono shrink-0">
                        <span className={cn("text-[11px] font-black block leading-none", item.isTop2 ? "text-[#ff0032]" : "text-dark")}>
                          {item.count} <span className="text-[7.5px] font-bold text-gray-400">ind.</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-1.5 border-t border-gray-100 text-[8.5px] text-gray-400 font-mono flex justify-between items-center mt-1">
              <span className="truncate max-w-[65%]">E-mails padronizados sem duplicidade.</span>
              <span className="text-[#ff0032] font-black shrink-0">Total Top 10: 430 ind.</span>
            </div>
          </div>

          {/* Chart 2: Ranking das Gerências Indicantes (4 columns) */}
          <div className="lg:col-span-4 bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2 pb-1.5 border-b border-gray-100">
                <div>
                  <h4 className="text-xs font-black text-dark uppercase tracking-tight">Ranking das Gerências Indicantes</h4>
                  <p className="text-[9.5px] font-bold text-gray-400">40 gerências mapeadas (2.547 ind.)</p>
                </div>
                <span className="text-[8.5px] font-bold font-mono text-[#ff0032] bg-red-50 px-1.5 py-0.5 rounded border border-red-100 shrink-0 ml-1">
                  Top 5 = 46,4%
                </span>
              </div>

              {/* Single Column Vertical Ranking List */}
              <div className="flex flex-col space-y-1 overflow-y-auto max-h-[380px] pr-1">
                {REFERRAL_GERENCIAS_DATA.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={cn(
                      "p-1 px-2 rounded-lg border flex items-center justify-between gap-1.5 transition-all",
                      item.isTop5 
                        ? "bg-red-50/40 border-red-100/80" 
                        : "bg-gray-50/60 border-gray-100"
                    )}
                  >
                    <div className="flex items-center gap-1.5 min-w-0 flex-1">
                      <span className={cn(
                        "w-3.5 h-3.5 rounded text-[8.5px] font-black font-mono flex items-center justify-center shrink-0",
                        item.isTop5 ? "bg-[#ff0032] text-white" : "bg-gray-200 text-gray-600"
                      )}>
                        {item.rank}
                      </span>
                      <span className="text-[10px] font-bold text-dark truncate" title={item.fullName}>
                        {item.fullName}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 w-32 shrink-0 justify-end">
                      <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full"
                          style={{ 
                            width: `${(item.count / 359) * 100}%`,
                            backgroundColor: item.isTop5 ? '#ff0032' : '#64748b'
                          }}
                        />
                      </div>
                      <div className="text-right min-w-[42px] font-mono shrink-0">
                        <span className={cn("text-[10px] font-black block leading-none", item.isTop5 ? "text-[#ff0032]" : "text-dark")}>
                          {item.count}
                        </span>
                        <span className="text-[7.5px] font-bold text-gray-400">
                          {item.percentStr}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-1.5 border-t border-gray-100 text-[8.5px] font-bold text-gray-400 flex justify-between items-center mt-1">
              <span className="truncate">MSDT (359), TEEC (344), TECT (200)</span>
              <span className="text-[#ff0032] font-black shrink-0">Total: 2.547 ind.</span>
            </div>
          </div>

          {/* Chart 3: Top 10 Cargos com Mais Indicações (3 columns) */}
          <div className="lg:col-span-3 bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-1.5 border-b border-gray-100 mb-2">
                <div className="p-1.5 bg-red-50 text-[#ff0032] rounded-lg font-bold">
                  <Briefcase size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-black text-dark uppercase tracking-tight">Top 10 Cargos Mais Indicados</h4>
                  <span className="text-[9px] font-bold text-gray-400 uppercase">Ranking por Volume</span>
                </div>
              </div>

              <div className="flex flex-col space-y-1 overflow-y-auto max-h-[380px] pr-1">
                {REFERRAL_TOP_CARGOS_DATA.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={cn(
                      "p-1 px-1.5 rounded-lg border flex items-center justify-between gap-1 transition-all",
                      item.isTop3 
                        ? "bg-red-50/50 border-red-200/80" 
                        : "bg-gray-50/60 border-gray-100"
                    )}
                  >
                    <div className="flex items-center gap-1 min-w-0 flex-1">
                      <span className={cn(
                        "w-4 h-3.5 rounded text-[8px] font-black font-mono flex items-center justify-center shrink-0",
                        item.isTop3 ? "bg-[#ff0032] text-white" : "bg-gray-200 text-gray-600"
                      )}>
                        {item.rank}
                      </span>
                      <span className={cn("text-[9.5px] font-bold truncate leading-tight", item.isTop3 ? "text-[#ff0032]" : "text-dark")} title={item.name}>
                        {item.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <div className="w-10 h-1 bg-gray-200 rounded-full overflow-hidden hidden sm:block">
                        <div 
                          className="h-full rounded-full"
                          style={{ 
                            width: `${(item.count / 745) * 100}%`,
                            backgroundColor: item.isTop3 ? '#ff0032' : '#64748b'
                          }}
                        />
                      </div>
                      <span className={cn("text-[10px] font-mono font-black shrink-0 min-w-[28px] text-right", item.isTop3 ? "text-[#ff0032]" : "text-dark")}>
                        {item.count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-1.5 border-t border-gray-100 text-[8.5px] text-gray-400 font-mono flex justify-between items-center mt-1">
              <span>Total Top 10: 2.026 ind.</span>
              <span className="text-[#ff0032] font-bold">Santa Casa BH</span>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  ),

  // SLIDE 6: PANORAMA DAS INDICAÇÕES • DETALHAMENTO POR TIPO DE VAGA (INTERATIVO)
  () => <Slide6InteractiveView />,

  // SLIDE 7: DAS INDICAÇÕES À CONTRATAÇÃO
  () => (
    <SlideWrapper 
      title="DAS INDICAÇÕES À CONTRATAÇÃO" 
      subtitle="52 contratações originadas a partir de 566 vagas"
    >
      <div className="flex flex-col h-full justify-between gap-3">
        {/* PARTE 1: NARRATIVA VISUAL CENTRAL (FLUXO + STATUS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          
          {/* FLUXO CENTRAL DE CONVERSÃO (8 cols) */}
          <div className="lg:col-span-8 bg-white p-3.5 rounded-2xl border border-gray-100 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-2 flex-1 justify-around">
              {/* Card 1: Vagas */}
              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-gray-50 border border-gray-200/80 min-w-[120px]">
                <span className="text-[9px] font-black uppercase text-gray-400 tracking-wider">
                  Vagas
                </span>
                <span className="text-xl font-black text-dark font-mono">566</span>
                <span className="text-[8.5px] font-bold text-gray-500">Base Analisada</span>
              </div>

              {/* Seta 1 */}
              <div className="flex flex-col items-center text-gray-300">
                <ArrowRight size={20} className="text-[#ff0032]" />
              </div>

              {/* Card 2: Contratações */}
              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-emerald-50/80 border border-emerald-200 min-w-[130px]">
                <span className="text-[9px] font-black uppercase text-emerald-800 tracking-wider">
                  Contratações
                </span>
                <span className="text-xl font-black text-emerald-700 font-mono">52</span>
                <span className="text-[8.5px] font-bold text-emerald-600">Identificadas</span>
              </div>

              {/* Seta 2 */}
              <div className="flex flex-col items-center text-gray-300">
                <ArrowRight size={20} className="text-[#ff0032]" />
              </div>

              {/* Card 3: Taxa de Conversão */}
              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-red-50/80 border border-red-200 min-w-[140px]">
                <span className="text-[9px] font-black uppercase text-[#ff0032] tracking-wider">
                  Taxa de Conversão
                </span>
                <span className="text-xl font-black text-[#ff0032] font-mono">9,18%</span>
                <span className="text-[8.5px] font-bold text-red-600">Eficiência Geral</span>
              </div>
            </div>
          </div>

          {/* STATUS ATUAL DOS CONTRATADOS (4 cols) */}
          <div className="lg:col-span-4 bg-white p-3.5 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-gray-100">
              <span className="text-[9.5px] font-black uppercase text-gray-400 tracking-wider flex items-center gap-1">
                <UserCheck size={12} className="text-emerald-600" />
                Status Atual dos Contratados
              </span>
              <span className="text-[9px] font-mono font-bold text-gray-500">52 Total</span>
            </div>

            <div className="grid grid-cols-2 gap-2 my-0.5">
              {/* Card ATIVOS */}
              <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200/80 flex flex-col items-center text-center">
                <div className="flex items-center gap-1 mb-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[9px] font-black text-emerald-800 uppercase">Ativos</span>
                </div>
                <div className="flex items-baseline gap-1 font-mono">
                  <span className="text-base font-black text-emerald-700">49</span>
                  <span className="text-[9.5px] font-bold text-emerald-800">(94,2%)</span>
                </div>
              </div>

              {/* Card DEMITIDOS */}
              <div className="p-2 rounded-xl bg-red-50 border border-red-200/80 flex flex-col items-center text-center">
                <div className="flex items-center gap-1 mb-0.5">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-[9px] font-black text-red-800 uppercase">Demitidos</span>
                </div>
                <div className="flex items-baseline gap-1 font-mono">
                  <span className="text-base font-black text-red-700">3</span>
                  <span className="text-[9.5px] font-bold text-red-800">(5,8%)</span>
                </div>
              </div>
            </div>
            <p className="text-[8.5px] text-gray-400 font-bold text-center mt-0.5">
              Elevada retenção na instituição (94,2% ativos)
            </p>
          </div>

        </div>

        {/* PARTE 2: PERFIL DAS CONTRATAÇÕES (ESQUERDA) + ONDE ESTÃO AS CONTRATAÇÕES (DIREITA) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 flex-1">
          
          {/* ESQUERDA: PERFIL DAS CONTRATAÇÕES (5 cols) */}
          <div className="lg:col-span-5 bg-white p-3.5 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-gray-100">
                <Filter size={14} className="text-[#ff0032]" />
                <h4 className="text-xs font-black text-dark uppercase tracking-tight">
                  Perfil das Contratações
                </h4>
              </div>

              <div className="space-y-2.5">
                {/* 1. TIPO DE VAGA */}
                <div>
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-wider block mb-1">
                    Tipo de Vaga
                  </span>
                  <div className="space-y-1 font-mono">
                    <div className="flex justify-between items-center text-[10.5px] p-1.5 rounded-lg bg-gray-50 border border-gray-100">
                      <span className="font-bold text-gray-800 font-sans">Efetivos</span>
                      <span className="font-black text-dark">51 <span className="text-[9px] text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded border border-emerald-100 font-bold ml-1">98,1%</span></span>
                    </div>
                    <div className="flex justify-between items-center text-[10.5px] p-1.5 rounded-lg bg-gray-50 border border-gray-100">
                      <span className="font-bold text-gray-800 font-sans">Estágio</span>
                      <span className="font-black text-dark">1 <span className="text-[9px] text-gray-500 bg-gray-100 px-1 py-0.2 rounded font-bold ml-1">1,9%</span></span>
                    </div>
                  </div>
                </div>

                {/* 2. TIPO DE PUBLICAÇÃO */}
                <div>
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-wider block mb-1">
                    Tipo de Publicação
                  </span>
                  <div className="space-y-1 font-mono">
                    <div className="flex justify-between items-center text-[10.5px] p-1.5 rounded-lg bg-gray-50 border border-gray-100">
                      <span className="font-bold text-gray-800 font-sans">Externa</span>
                      <span className="font-black text-dark">37 <span className="text-[9px] text-blue-600 bg-blue-50 px-1 py-0.2 rounded border border-blue-100 font-bold ml-1">71,2%</span></span>
                    </div>
                    <div className="flex justify-between items-center text-[10.5px] p-1.5 rounded-lg bg-gray-50 border border-gray-100">
                      <span className="font-bold text-gray-800 font-sans">Não listada</span>
                      <span className="font-black text-dark">15 <span className="text-[9px] text-slate-700 bg-slate-100 px-1 py-0.2 rounded font-bold ml-1">28,8%</span></span>
                    </div>
                    <div className="flex justify-between items-center text-[10.5px] p-1.5 rounded-lg bg-gray-50 border border-gray-100 opacity-60">
                      <span className="font-bold text-gray-500 font-sans">Interna</span>
                      <span className="font-black text-gray-500">0 <span className="text-[9px] text-gray-400 bg-gray-100 px-1 py-0.2 rounded font-bold ml-1">0,0%</span></span>
                    </div>
                  </div>
                </div>

                {/* 3. TIPO DE SOLICITAÇÃO */}
                <div>
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-wider block mb-1">
                    Tipo de Solicitação
                  </span>
                  <div className="space-y-1 font-mono">
                    <div className="flex justify-between items-center text-[10.5px] p-1.5 rounded-lg bg-gray-50 border border-gray-100">
                      <span className="font-bold text-gray-800 font-sans truncate">Substituição – Permanente</span>
                      <span className="font-black text-dark shrink-0 ml-1">35 <span className="text-[9px] text-red-600 bg-red-50 px-1 py-0.2 rounded border border-red-100 font-bold ml-1">67,3%</span></span>
                    </div>
                    <div className="flex justify-between items-center text-[10.5px] p-1.5 rounded-lg bg-gray-50 border border-gray-100">
                      <span className="font-bold text-gray-800 font-sans truncate">Substituição – Temporária</span>
                      <span className="font-black text-dark shrink-0 ml-1">16 <span className="text-[9px] text-amber-600 bg-amber-50 px-1 py-0.2 rounded border border-amber-100 font-bold ml-1">30,8%</span></span>
                    </div>
                    <div className="flex justify-between items-center text-[10.5px] p-1.5 rounded-lg bg-gray-50 border border-gray-100">
                      <span className="font-bold text-gray-800 font-sans truncate">Aumento de quadro</span>
                      <span className="font-black text-dark shrink-0 ml-1">1 <span className="text-[9px] text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded border border-emerald-100 font-bold ml-1">1,9%</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DIREITA: ONDE ESTÃO AS CONTRATAÇÕES? (7 cols) */}
          <div className="lg:col-span-7 bg-white p-3.5 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center pb-1.5 mb-2 border-b border-gray-100">
                <div className="flex items-center gap-1.5">
                  <Building size={16} className="text-[#ff0032]" />
                  <h4 className="text-xs font-black text-dark uppercase tracking-tight">
                    ONDE ESTÃO AS CONTRATAÇÕES?
                  </h4>
                </div>
                <span className="text-[9px] font-black text-[#ff0032] bg-red-50 px-2 py-0.5 rounded border border-red-100 uppercase">
                  Top 5 Cargos
                </span>
              </div>

              {/* TOP 5 CARGOS DESTAQUE */}
              <div className="mb-2.5">
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-wider block mb-1">
                  Principais Cargos Absorvidos
                </span>
                
                <div className="space-y-1 font-mono">
                  {/* 1. Técnico de Enfermagem */}
                  <div className="p-1.5 px-2.5 rounded-xl bg-red-50/80 border border-red-200/90 flex justify-between items-center">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="text-xs">🥇</span>
                      <span className="text-[11px] font-black text-dark font-sans truncate">TÉCNICO DE ENFERMAGEM</span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-xs font-black text-[#ff0032]">18</span>
                      <span className="text-[8.5px] font-bold text-red-600 bg-white px-1.5 py-0.2 rounded border border-red-100">34,6%</span>
                    </div>
                  </div>

                  {/* 2. Auxiliar Administrativo */}
                  <div className="p-1.5 px-2.5 rounded-xl bg-gray-50 border border-gray-100 flex justify-between items-center">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="text-xs">🥈</span>
                      <span className="text-[10.5px] font-bold text-gray-800 font-sans truncate">AUXILIAR ADMINISTRATIVO</span>
                    </div>
                    <span className="text-xs font-black text-dark bg-white px-2 py-0.2 rounded border border-gray-200">9</span>
                  </div>

                  {/* 3. Enfermeiro */}
                  <div className="p-1.5 px-2.5 rounded-xl bg-gray-50 border border-gray-100 flex justify-between items-center">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="text-xs">🥉</span>
                      <span className="text-[10.5px] font-bold text-gray-800 font-sans truncate">ENFERMEIRO</span>
                    </div>
                    <span className="text-xs font-black text-dark bg-white px-2 py-0.2 rounded border border-gray-200">4</span>
                  </div>

                  {/* 4 e 5: Assistente Administrativo I & Médico */}
                  <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                    <div className="p-1.5 px-2 rounded-lg bg-gray-50 border border-gray-100 flex justify-between items-center">
                      <span className="text-[10px] font-bold text-gray-700 font-sans truncate">Assistente Adm. I</span>
                      <span className="text-xs font-black text-dark bg-white px-1.5 py-0.2 rounded border border-gray-200">3</span>
                    </div>
                    <div className="p-1.5 px-2 rounded-lg bg-gray-50 border border-gray-100 flex justify-between items-center">
                      <span className="text-[10px] font-bold text-gray-700 font-sans truncate">Médico</span>
                      <span className="text-xs font-black text-dark bg-white px-1.5 py-0.2 rounded border border-gray-200">2</span>
                    </div>
                  </div>
                </div>

                <div className="mt-1.5 text-[9.5px] font-bold text-gray-600 bg-gray-100/80 px-2 py-1 rounded-lg text-center font-mono">
                  💡 Os 3 primeiros concentram <strong>31 das 52 contratações (59,6%)</strong>.
                </div>
              </div>

              {/* TOP 5 GERÊNCIAS COM MAIS CONTRATAÇÕES */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-wider block">
                    TOP 5 GERÊNCIAS COM MAIS CONTRATAÇÕES
                  </span>
                  <span className="text-[8.5px] font-bold text-gray-400 font-mono">
                    52 Contratações Totais
                  </span>
                </div>

                <div className="space-y-1 font-mono">
                  {/* TECT */}
                  <div className="p-1.5 px-2 rounded-lg bg-gray-50 border border-gray-100 flex flex-col gap-1">
                    <div className="flex justify-between items-center text-[10px]">
                      <div className="flex items-center gap-1 font-sans truncate pr-1">
                        <span className="text-[10px]">🥇</span>
                        <strong className="text-dark font-black">TECT</strong>
                        <span className="text-gray-500 truncate text-[9.5px]">– Gerência de Unidade de Alta Complexidade</span>
                      </div>
                      <div className="shrink-0 flex items-center gap-1">
                        <span className="font-black text-dark text-xs">9</span>
                        <span className="text-[8.5px] font-bold text-slate-700 bg-slate-200/80 px-1.5 py-0.2 rounded">17,3%</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200/70 h-1 rounded-full overflow-hidden">
                      <div className="bg-slate-800 h-full rounded-full" style={{ width: '17.3%' }} />
                    </div>
                  </div>

                  {/* TEEC */}
                  <div className="p-1.5 px-2 rounded-lg bg-gray-50 border border-gray-100 flex flex-col gap-1">
                    <div className="flex justify-between items-center text-[10px]">
                      <div className="flex items-center gap-1 font-sans truncate pr-1">
                        <span className="text-[10px]">🥇</span>
                        <strong className="text-dark font-black">TEEC</strong>
                        <span className="text-gray-500 truncate text-[9.5px]">– Gerência de Cuidados Clínicos</span>
                      </div>
                      <div className="shrink-0 flex items-center gap-1">
                        <span className="font-black text-dark text-xs">9</span>
                        <span className="text-[8.5px] font-bold text-slate-700 bg-slate-200/80 px-1.5 py-0.2 rounded">17,3%</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200/70 h-1 rounded-full overflow-hidden">
                      <div className="bg-slate-800 h-full rounded-full" style={{ width: '17.3%' }} />
                    </div>
                  </div>

                  {/* MSDT */}
                  <div className="p-1.5 px-2 rounded-lg bg-gray-50 border border-gray-100 flex flex-col gap-1">
                    <div className="flex justify-between items-center text-[10px]">
                      <div className="flex items-center gap-1 font-sans truncate pr-1">
                        <span className="text-[10px]">🥉</span>
                        <strong className="text-dark font-black">MSDT</strong>
                        <span className="text-gray-500 truncate text-[9.5px]">– Gerência de Serviços de Diagnóstico e Tratamento</span>
                      </div>
                      <div className="shrink-0 flex items-center gap-1">
                        <span className="font-black text-dark text-xs">5</span>
                        <span className="text-[8.5px] font-bold text-slate-700 bg-slate-200/80 px-1.5 py-0.2 rounded">9,6%</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200/70 h-1 rounded-full overflow-hidden">
                      <div className="bg-slate-700 h-full rounded-full" style={{ width: '9.6%' }} />
                    </div>
                  </div>

                  {/* GEAS */}
                  <div className="p-1.5 px-2 rounded-lg bg-gray-50 border border-gray-100 flex flex-col gap-1">
                    <div className="flex justify-between items-center text-[10px]">
                      <div className="flex items-center gap-1 font-sans truncate pr-1">
                        <strong className="text-dark font-black pl-4">GEAS</strong>
                        <span className="text-gray-500 truncate text-[9.5px]">– Gerência Assistencial do São Lucas</span>
                      </div>
                      <div className="shrink-0 flex items-center gap-1">
                        <span className="font-black text-dark text-xs">3</span>
                        <span className="text-[8.5px] font-bold text-slate-700 bg-slate-200/80 px-1.5 py-0.2 rounded">5,8%</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200/70 h-1 rounded-full overflow-hidden">
                      <div className="bg-slate-600 h-full rounded-full" style={{ width: '5.8%' }} />
                    </div>
                  </div>

                  {/* GEON */}
                  <div className="p-1.5 px-2 rounded-lg bg-gray-50 border border-gray-100 flex flex-col gap-1">
                    <div className="flex justify-between items-center text-[10px]">
                      <div className="flex items-center gap-1 font-sans truncate pr-1">
                        <strong className="text-dark font-black pl-4">GEON</strong>
                        <span className="text-gray-500 truncate text-[9.5px]">– Gerência de Cuidados Oncológicos</span>
                      </div>
                      <div className="shrink-0 flex items-center gap-1">
                        <span className="font-black text-dark text-xs">3</span>
                        <span className="text-[8.5px] font-bold text-slate-700 bg-slate-200/80 px-1.5 py-0.2 rounded">5,8%</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200/70 h-1 rounded-full overflow-hidden">
                      <div className="bg-slate-600 h-full rounded-full" style={{ width: '5.8%' }} />
                    </div>
                  </div>

                  {/* OUTRAS GERÊNCIAS */}
                  <div className="p-1.5 px-2 rounded-lg bg-slate-100/80 border border-slate-200 flex flex-col gap-1 mt-1">
                    <div className="flex justify-between items-center text-[10px]">
                      <div className="flex items-center gap-1 font-sans truncate pr-1">
                        <strong className="text-slate-800 font-black">OUTRAS GERÊNCIAS</strong>
                        <span className="text-slate-500 truncate text-[9px]">(Demais gerências agrupadas)</span>
                      </div>
                      <div className="shrink-0 flex items-center gap-1">
                        <span className="font-black text-slate-900 text-xs">23</span>
                        <span className="text-[8.5px] font-bold text-slate-700 bg-slate-200 px-1.5 py-0.2 rounded">44,2%</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden">
                      <div className="bg-slate-500 h-full rounded-full" style={{ width: '44.2%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </SlideWrapper>
  ),

  // SLIDE 8: ENCERRAMENTO & AGRADECIMENTO
  () => (
    <div className="h-full bg-white flex flex-col items-center justify-center text-center p-8 md:p-12 relative overflow-hidden rounded-2xl shadow-sm border border-gray-100">
      {/* Background Decorative Accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
      
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
      >
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 shadow-2xs">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff0032] animate-pulse" />
          <span className="text-xs font-black text-[#ff0032] uppercase tracking-[0.25em] font-mono">
            PEOPLE ANALYTICS • SANTA CASA BH
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-dark mb-6 tracking-tighter uppercase leading-none">
          OBRIGADO!
        </h1>

        <div className="w-20 h-1.5 bg-[#ff0032] mb-8 rounded-full" />

        <p className="text-lg md:text-2xl text-gray-700 font-medium mb-10 leading-relaxed max-w-3xl italic">
          "Dados não tomam decisões, pessoas tomam. O <span className="font-black text-[#ff0032] not-italic">People Analytics</span> é a bússola que transforma indicadores em empatia, estratégia e cuidado contínuo com quem cuida da nossa gente."
        </p>

        <div className="pt-8 border-t border-gray-100 w-full flex flex-col items-center justify-center gap-3">
          <SantaCasaLogo className="h-10 w-auto text-dark" />
          <div className="text-gray-400 text-xs md:text-sm font-black uppercase tracking-[0.35em] font-mono">
            GESTÃO DE PESSOAS • 2026
          </div>
        </div>
      </motion.div>
    </div>
  )
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < Slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-[#f4f7f6] flex flex-col font-sans selection:bg-[#ff0032] selection:text-white">
      {/* Navigation Top Bar */}
      <nav className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-8 sticky top-0 z-50 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-[#ff0032] flex items-center justify-center rounded-lg shadow-lg">
             <BarChart3 className="text-white" size={18} />
          </div>
          <div className="hidden sm:block">
            <span className="text-xs md:text-sm font-black text-dark uppercase tracking-tighter block">People Analytics</span>
            <span className="text-[8px] md:text-[10px] text-light uppercase font-bold">Q2 2026</span>
          </div>
        </div>

        <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-full border border-gray-100">
          {Slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={cn(
                "h-1.5 w-1.5 md:h-2 md:w-2 rounded-full transition-all duration-300",
                currentSlide === idx ? "w-4 md:w-8 bg-[#ff0032]" : "bg-gray-300 hover:bg-gray-400"
              )}
            />
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          <div className="text-right hidden xs:block">
             <span className="text-[8px] md:text-[10px] font-bold text-light block uppercase tracking-widest leading-none mb-1">Status</span>
             <span className="text-[10px] md:text-xs font-black text-[#ff0032] italic">CONFIDENTIAL</span>
          </div>
          <SantaCasaLogo className="h-8 md:h-10 w-auto" />
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 relative bg-white">
        <AnimatePresence mode="wait">
          <div key={currentSlide} className="min-h-full">
            {Slides[currentSlide]()}
          </div>
        </AnimatePresence>

        {/* Floating Controls */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-4 bg-white/90 backdrop-blur-xl border border-gray-200 p-1.5 rounded-2xl shadow-2xl z-50">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 md:p-3 text-dark hover:bg-gray-100 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={20} md:size={24} />
          </button>
          <div className="px-2 md:px-4 font-mono font-bold text-xs md:text-sm text-dark min-w-[50px] md:min-w-[60px] text-center border-x border-gray-100">
            {currentSlide + 1} / {Slides.length}
          </div>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === Slides.length - 1}
            className="p-2 md:p-3 text-dark hover:bg-gray-100 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={20} md:size={24} />
          </button>
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="h-4 bg-dark flex items-center justify-center shrink-0">
        <div className="w-full flex">
          <div className="flex-1 h-full bg-[#ff0032]" />
          <div className="flex-1 h-full bg-[#323232]" />
          <div className="flex-1 h-full bg-[#b4b4b4]" />
          <div className="flex-1 h-full bg-[#a3a3a3]" />
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=JetBrains+Mono:wght@500;700&display=swap');
        
        :root {
          --font-sans: 'Inter', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
        }

        body {
          font-family: var(--font-sans);
          -webkit-font-smoothing: antialiased;
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
