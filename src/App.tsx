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
  Share2
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
  { range: '31 - 40 anos', candidaturas: 20341, formatted: '20.341' },
  { range: '25 - 30 anos', candidaturas: 20173, formatted: '20.173' },
  { range: '18 - 24 anos', candidaturas: 16327, formatted: '16.327' },
  { range: '41 - 50 anos', candidaturas: 14082, formatted: '14.082' },
  { range: 'Mais que 50', candidaturas: 4360, formatted: '4.360' },
  { range: 'Outros', candidaturas: 310, formatted: '310' },
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
  { role: 'Auxiliar Administrativo', count: 6817 },
  { role: 'Enfermeiro', count: 6153 },
  { role: 'Assistente Administrativo', count: 10608 },
];

const REFERRAL_GERENCIAS_DATA = [
  { rank: "01", name: "SAEF", fullName: "SAEF – Superintendência Educacional", count: 122, percent: 13.0, isTop5: true },
  { rank: "02", name: "GTRA", fullName: "GTRA – Inst. de Transplantes", count: 93, percent: 9.9, isTop5: true },
  { rank: "03", name: "GEPE", fullName: "GEPE – Gestão de Pessoas", count: 73, percent: 7.8, isTop5: true },
  { rank: "04", name: "AFFC", fullName: "AFFC – Faturamento SUS", count: 54, percent: 5.7, isTop5: true },
  { rank: "05", name: "TEEC", fullName: "TEEC – Cuidados Clínicos", count: 51, percent: 5.4, isTop5: true },
  { rank: "06", name: "GEAM", fullName: "GEAM – Gerência Ambulatorial", count: 46, percent: 4.9, isTop5: false },
  { rank: "07", name: "GUCC", fullName: "GUCC – Cuidados Cirúrgicos", count: 38, percent: 4.0, isTop5: false },
  { rank: "08", name: "GEOP", fullName: "GEOP – Operacional HSL", count: 37, percent: 3.9, isTop5: false },
  { rank: "09", name: "GPPO", fullName: "GPPO – Planejamento e Projetos", count: 29, percent: 3.1, isTop5: false },
  { rank: "10", name: "GEMA", fullName: "GEMA – Eng. e Manutenção", count: 28, percent: 3.0, isTop5: false },
  { rank: "11", name: "GSGP", fullName: "GSGP – Segurança e Patrimônio", count: 27, percent: 2.9, isTop5: false },
  { rank: "12", name: "GJSC", fullName: "GJSC – Jurídica e Documentos", count: 24, percent: 2.6, isTop5: false },
  { rank: "13", name: "GESC", fullName: "GESC – Suporte Clínico", count: 23, percent: 2.4, isTop5: false },
  { rank: "14", name: "GGCL", fullName: "GGCL – Governança Clínica", count: 23, percent: 2.4, isTop5: false },
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
            <span>→</span>
            <span>04. Funil & Vagas</span>
          </div>
        </div>

        {/* 3 Equal Horizontal Cards */}
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
            },
            {
              module: "Módulo 03",
              title: "Gestão de Vagas, Posições & Funil de Seleção",
              subtitle: "Volume de vagas, posições, etapas do funil e acompanhamento dos prazos do processo seletivo.",
              icon: Target,
              accentColor: "#7c3aed"
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
      title="Panorama das Candidaturas" 
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
              <span className="text-[9px] font-bold text-gray-500">831/dia • 1.243/vaga</span>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl font-bold">
              <UserCheck size={18} />
            </div>
            <div>
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block">Candidaturas Por Dia</span>
              <div className="text-xl font-black text-dark font-mono">831</div>
              <span className="text-[9px] font-bold text-blue-600">831 candidaturas por dia</span>
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
              <span className="text-[9px] font-bold text-violet-600">média de 1243 por vaga</span>
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
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-xs font-black text-dark uppercase tracking-tight">Candidaturas por Faixa Etária</h4>
                <span className="text-[9px] font-bold font-mono text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">Top 5 ▾</span>
              </div>

              <div className="h-[145px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={CANDIDACY_AGE_DATA} margin={{ top: 16, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="range" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 8, fontWeight: 'bold' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#b4b4b4', fontSize: 8 }} />
                    <Tooltip 
                      formatter={(val: any) => [`${Number(val).toLocaleString('pt-BR')} candidaturas`, 'Candidaturas recebidas']}
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} 
                    />
                    <Bar dataKey="candidaturas" name="Candidaturas recebidas" fill="#38bdf8" radius={[6, 6, 0, 0]} barSize={18}>
                      <LabelList dataKey="formatted" position="top" fill="#0284c7" fontSize={8} fontWeight="bold" />
                      {CANDIDACY_AGE_DATA.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={index < 2 ? '#0284c7' : '#38bdf8'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100 text-[10px] font-bold text-gray-500 flex justify-between mt-2">
              <span>25–40 anos (53,6%)</span>
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
      title="Panorama das Indicações" 
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
              <div className="text-lg font-black text-dark font-mono">2.547</div>
              <span className="text-[8.5px] font-black text-[#ff0032] bg-red-100/90 px-2 py-0.5 rounded-md border border-red-200 inline-block mt-0.5 uppercase tracking-tight shadow-xs">
                592 DAS INDICAÇÕES TRABALHAM NA SANTA CASA BH
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
              <UserCheck size={16} />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block truncate">KPI 04 • Contratações</span>
              <div className="text-lg font-black text-dark font-mono">52</div>
              <span className="text-[8px] font-bold text-violet-600 bg-violet-50 px-1.5 py-0.5 rounded border border-violet-100 inline-block mt-0.5">
                Candidatos admitidos via programa
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
                  <p className="text-[9.5px] font-bold text-gray-400">Base com correspondência (940 ind.)</p>
                </div>
                <span className="text-[8.5px] font-bold font-mono text-[#ff0032] bg-red-50 px-1.5 py-0.5 rounded border border-red-100 shrink-0 ml-1">
                  Top 5 = 41,8%
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
                      <span className="text-[10.5px] font-bold text-dark truncate" title={item.fullName}>
                        {item.fullName}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 w-28 shrink-0">
                      <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full"
                          style={{ 
                            width: `${(item.count / 122) * 100}%`,
                            backgroundColor: item.isTop5 ? '#ff0032' : '#64748b'
                          }}
                        />
                      </div>
                      <div className="text-right min-w-[36px] font-mono">
                        <span className={cn("text-[10.5px] font-black block leading-none", item.isTop5 ? "text-[#ff0032]" : "text-dark")}>
                          {item.count}
                        </span>
                        <span className="text-[7.5px] font-bold text-gray-400">
                          {item.percent}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-1.5 border-t border-gray-100 text-[8.5px] font-bold text-gray-400 flex justify-between items-center mt-1">
              <span className="truncate">SAEF (122), GTRA (93), GEPE (73)</span>
              <span className="text-[#ff0032] font-black shrink-0">Mapeado: 940</span>
            </div>
          </div>

          {/* Chart 3: Top Cargos com Mais Indicações (3 columns) */}
          <div className="lg:col-span-3 bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-1.5 border-b border-gray-100 mb-2">
                <div className="p-1.5 bg-red-50 text-[#ff0032] rounded-lg font-bold">
                  <Briefcase size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-black text-dark uppercase tracking-tight">Top Cargos Mais Indicados</h4>
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
              <span>Total: 1.971 ind.</span>
              <span className="text-[#ff0032] font-bold">Santa Casa BH</span>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  ),

  // SLIDE 5: GESTÃO DE VAGAS, POSIÇÕES & SLA DO FUNIL (Dados do Documento)
  () => (
    <SlideWrapper 
      title="Gestão de Vagas, Posições & Funil de Seleção" 
      subtitle="Relatório de Resultados de Vagas (30/07/2026): Performance de Encerramento e Análise de SLA por Etapa"
    >
      <div className="flex flex-col h-full justify-between gap-6">
        {/* Top KPI Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-1">Vagas Publicadas</span>
            <div className="text-3xl font-black text-dark font-mono">802</div>
            <span className="text-[9px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-100 mt-2 inline-block">60 no prazo (7%)</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-1">Vagas Encerradas</span>
            <div className="text-3xl font-black text-emerald-600 font-mono">724</div>
            <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 mt-2 inline-block">716 no prazo (99%)</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-1">Posições Encerradas</span>
            <div className="text-3xl font-black text-dark font-mono">743</div>
            <span className="text-[9px] font-bold text-gray-500 bg-gray-50 px-2 py-0.5 rounded border border-gray-100 mt-2 inline-block">de 802 posições</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-1">Vagas Substituição</span>
            <div className="text-3xl font-black text-[#ff0032] font-mono">762</div>
            <span className="text-[9px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-100 mt-2 inline-block">95% do volume</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm col-span-2 md:col-span-1">
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-1">Vagas Congeladas / Ext.</span>
            <div className="text-3xl font-black text-dark font-mono">34 <span className="text-xs text-gray-400 font-normal">/ 617</span></div>
            <span className="text-[9px] font-bold text-gray-600 bg-gray-50 px-2 py-0.5 rounded border border-gray-100 mt-2 inline-block">34 Cong. | 617 Ext.</span>
          </div>
        </div>

        {/* Funil de Seleção - SLA por Etapa (Gráfico de Barras / Timeline) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
          {/* Chart SLA Funnel */}
          <div className="lg:col-span-8 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h4 className="text-base font-black text-dark uppercase tracking-tight">Tempo Médio da Candidatura por Etapa (SLA em Dias)</h4>
                <p className="text-xs font-bold text-gray-400">Identificação de gargalos no funil de seleção</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-red-50 text-[#ff0032] border border-red-100 rounded-full text-[10px] font-black uppercase">
                <AlertTriangle size={12} /> Gargalo: Avaliação (60d)
              </div>
            </div>

            <div className="h-[220px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SLA_FUNNEL_DATA} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
                  <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#b4b4b4', fontSize: 11 }} />
                  <YAxis dataKey="stage" type="category" axisLine={false} tickLine={false} tick={{ fill: '#323232', fontSize: 11, fontWeight: 'bold' }} width={100} />
                  <Tooltip 
                    cursor={{ fill: '#f8f9fa' }}
                    formatter={(value: any) => [`${value} dias`, 'Tempo na Etapa']}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="days" radius={[0, 8, 8, 0]} barSize={24}>
                    {SLA_FUNNEL_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.isBottleneck ? '#ff0032' : '#323232'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-6 gap-2 pt-3 border-t border-gray-100 text-center font-mono">
              {SLA_FUNNEL_DATA.map((item, idx) => (
                <div key={idx} className={cn("p-1.5 rounded-xl border text-[10px]", item.isBottleneck ? "bg-red-50 border-red-200 text-[#ff0032] font-black" : "bg-gray-50 border-gray-100 text-dark font-bold")}>
                  <div className="text-[8px] uppercase font-sans text-gray-400 truncate">{item.stage}</div>
                  <div className="text-xs">{item.days}d</div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights & Diagnostic Side Card */}
          <div className="lg:col-span-4 bg-gray-900 text-white p-6 rounded-3xl border border-gray-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Brain size={18} className="text-[#ff0032]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#ff0032]">Diagnóstico Estratégico</span>
              </div>

              <h4 className="text-lg font-black text-white mb-4 leading-tight">
                99% de Eficiência em Encerramento x Desafio de SLA na Avaliação
              </h4>

              <div className="space-y-4 text-xs font-medium text-gray-300">
                <div className="p-3 bg-gray-800/80 rounded-xl border border-gray-700/60">
                  <span className="text-[9px] font-black uppercase text-emerald-400 block mb-1">✔ Excelente Cumprimento de Prazo</span>
                  <p className="leading-relaxed">
                    99% das vagas encerradas (716 de 724) foram finalizadas estritamente dentro do prazo regulamentar.
                  </p>
                </div>

                <div className="p-3 bg-gray-800/80 rounded-xl border border-gray-700/60">
                  <span className="text-[9px] font-black uppercase text-[#ff0032] block mb-1">⚠️ Pressão por Substituição</span>
                  <p className="leading-relaxed">
                    762 das 802 vagas (95%) são de substituição, reforçando a urgência de retenção e controle de turnover.
                  </p>
                </div>

                <div className="p-3 bg-gray-800/80 rounded-xl border border-gray-700/60">
                  <span className="text-[9px] font-black uppercase text-amber-400 block mb-1">⏱️ Otimização da Etapa de Avaliação</span>
                  <p className="leading-relaxed">
                    A etapa de Avaliação consome 60 dias (46% do tempo total), representando a maior oportunidade de automação e agilidade.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between text-[10px] font-mono text-gray-400">
              <span>Relatório: 30/07/2026</span>
              <span className="text-white font-bold">Atração & Seleção</span>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  ),

  // SLIDE: ENCERRAMENTO
  () => (
    <div className="h-full bg-white flex flex-col items-center justify-center text-center p-12 relative overflow-hidden">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gray-100 skew-y-12" />
       
       <motion.div
         initial={{ scale: 0.9, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         transition={{ duration: 0.8 }}
         className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
       >
         <div className="w-24 h-1.5 bg-[#ff0032] mb-10 rounded-full" />
         
         <h1 className="text-6xl md:text-8xl font-black text-dark mb-6 tracking-tighter">
           OBRIGADO!
         </h1>
         
         <p className="text-lg md:text-xl text-gray-600 font-medium mb-12 leading-relaxed max-w-2xl">
           Por trás de cada indicador existe uma pessoa. O People Analytics nos mostra onde devemos agir primeiro.
         </p>
         
         <div className="pt-8 border-t border-gray-200 w-full flex justify-center">
           <div className="text-black text-xs md:text-sm font-black uppercase tracking-[0.4em]">
             SANTA CASA BH • GESTÃO DE PESSOAS • 2026
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
