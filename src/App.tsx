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
  RotateCcw
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
  Legend
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
const StatCard = ({ title, value, subValue, icon: Icon, trend, subTrend, trendColor }: any) => (
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
            <div className={cn("text-[9px] font-bold flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-50 border border-gray-100 whitespace-nowrap", trendColor)}>
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

const BenchmarkBadge = ({ value, label, isHigher }: any) => (
  <div className={cn(
    "flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider",
    isHigher ? "bg-red-50 text-red-600 border border-red-100" : "bg-green-50 text-green-600 border border-green-100"
  )}>
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
            Painel Executivo 1º Trimestre de 2026: Transformando indicadores operacionais em valor estratégico para a Santa Casa BH.
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

  // SLIDE 1: MÉTODO DE ANÁLISE
  () => (
    <SlideWrapper title="MÉTODO DE ANÁLISE" subtitle="As 3 Gerências com Maior Impacto no Absenteísmo no Último Trimestre">
      <div className="space-y-12">
        {/* Top Panel: Gerências */}
        <div className="bg-gray-50/50 p-8 rounded-[2.5rem] border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] rotate-12">
            <BarChart3 size={200} />
          </div>
          
          <div className="relative z-10">
            <p className="text-dark/70 font-medium max-w-3xl mb-8 leading-relaxed">
              A análise foi direcionada para as gerências que apresentaram maior impacto nos indicadores de absenteísmo no período, sendo elas:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Gerência de Hotelaria', icon: Building, color: 'text-blue-600', bg: 'bg-blue-50' },
                { name: 'Gerência de Cuidados Clínicos', icon: Stethoscope, color: 'text-red-600', bg: 'bg-red-50' },
                { name: 'Gerência de Nutrição e Dietética', icon: Utensils, color: 'text-orange-600', bg: 'bg-orange-50' },
              ].map((g, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow cursor-default"
                >
                  <div className={cn("p-4 rounded-xl", g.bg)}>
                    <g.icon size={28} className={g.color} />
                  </div>
                  <span className="font-bold text-dark text-lg leading-tight">{g.name}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#ff0032] shrink-0" />
              <p className="text-xs font-black text-[#ff0032] uppercase tracking-[0.2em]">“Toda a análise foi baseada nestas três gerências”</p>
            </div>
          </div>
        </div>

        {/* Bottom Panel: Timeline */}
        <div className="relative pt-6">
          <div className="absolute top-[40%] left-0 right-0 h-1 bg-gray-100 -translate-y-1/2 z-0 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[
              { 
                label: 'O Gatilho', 
                context: '(Absenteísmo)', 
                icon: Zap, 
                color: 'text-red-600', 
                bg: 'bg-red-50',
                border: 'border-red-100',
                items: ['desgaste', 'adoecimento', 'desmotivação', 'sobrecarga']
              },
              { 
                label: 'O Agravante', 
                context: '(Acidente de Trabalho)', 
                icon: Flame, 
                color: 'text-orange-600', 
                bg: 'bg-orange-50',
                border: 'border-orange-100',
                items: ['queda de atenção', 'falha operacional', 'fadiga', 'risco ocupacional']
              },
              { 
                label: 'O Ponto de Ruptura', 
                context: '(Turnover + Permanência)', 
                icon: XCircle, 
                color: 'text-amber-600', 
                bg: 'bg-amber-50',
                border: 'border-amber-100',
                items: ['perda de retenção', 'desligamento', 'evasão de talentos', 'baixa permanência']
              },
              { 
                label: 'A Resposta Final', 
                context: '(Pesquisa de Clima)', 
                icon: CheckCircle2, 
                color: 'text-green-600', 
                bg: 'bg-green-50',
                border: 'border-green-100',
                items: ['causa percebida', 'ambiente / liderança', 'reconhecimento', 'plano de carreira']
              }
            ].map((step, idx) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                key={idx}
                className="group"
              >
                <div className={cn(
                  "bg-white p-6 rounded-[2rem] border-2 shadow-xl shadow-gray-100/50 relative mb-6 transition-all group-hover:translate-y-[-8px]",
                  step.border
                )}>
                  {/* Step Connector Label */}
                  <div className={cn("absolute -top-3 left-8 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white shadow-lg", step.color.replace('text-', 'bg-'))}>
                    Etapa {idx + 1}
                  </div>
                  
                  <div className="flex flex-col items-center text-center pt-2">
                    <div className={cn("w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-6 shadow-inner", step.bg)}>
                       <step.icon size={36} className={step.color} />
                    </div>
                    <h3 className={cn("text-xl font-black uppercase tracking-tight leading-none mb-1", step.color)}>{step.label}</h3>
                    <p className="text-xs font-bold text-medium mb-6">{step.context}</p>
                    
                    <div className="w-full h-[1px] bg-gray-100 mb-6" />
                    
                    <div className="w-full text-left">
                       <span className="text-[10px] font-black text-light uppercase tracking-widest block mb-4">Mostra:</span>
                       <ul className="space-y-3">
                         {step.items.map((item, i) => (
                           <li key={i} className="flex items-start gap-2 text-xs font-bold text-dark leading-tight group/item">
                             <div className={cn("w-1.5 h-1.5 rounded-full mt-1 shrink-0 transition-transform group-hover/item:scale-125", step.color.replace('text-', 'bg-'))} />
                             {item}
                           </li>
                         ))}
                       </ul>
                    </div>
                  </div>
                </div>
                
                {/* Arrow for large screens */}
                {idx < 3 && (
                  <div className="hidden lg:flex absolute top-[10%] -right-4 translate-x-1/2 z-20 w-8 h-8 items-center justify-center bg-white border-2 border-gray-100 rounded-full text-gray-300 shadow-sm transition-transform group-hover:scale-110">
                    <ChevronRight size={16} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  ),

  // SLIDE 2: ABSENTEÍSMO + BENCHMARK
  () => (
    <SlideWrapper title="Absenteísmo & Longevidade" subtitle="A Anatomia do Afastamento no 1º Tri">
      <div className="relative">
        {/* Projeção de Custo - Top Right Floating */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-20 right-0 hidden xl:flex items-center gap-4 z-20"
        >
          <div className="text-right">
            <span className="text-[10px] font-black text-[#ff0032] uppercase tracking-[0.2em] block">Projeção de Custo</span>
            <span className="text-[9px] font-bold text-light uppercase tracking-widest">Período Analisado</span>
          </div>
          <div className="flex gap-1">
            <div className="bg-white text-dark p-4 rounded-2xl shadow-lg border border-gray-100 flex flex-col min-w-[160px]">
              <span className="text-[8px] font-black uppercase tracking-widest text-[#ff0032] mb-1">Custo Total</span>
              <span className="text-xl font-black tabular-nums">R$ 227.389,08</span>
            </div>
            <div className="bg-white text-dark p-4 rounded-2xl shadow-lg border border-gray-100 flex flex-col min-w-[160px]">
              <span className="text-[8px] font-black uppercase tracking-widest text-light mb-1">Custo Médio / Colaborador</span>
              <span className="text-lg font-black tabular-nums">R$ 61,42</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
        <div>
          <div className="flex justify-between items-end mb-6">
            <h5 className="font-bold text-dark">Tendência Mensal (%)</h5>
            <BenchmarkBadge value="+15%" label="Média Hospitalar Nac." isHigher={true} />
          </div>
          <div className="h-[250px] mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ABSENTEEISM_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#b4b4b4', fontSize: 12}} />
                <YAxis domain={[0, 5]} axisLine={false} tickLine={false} tick={{fill: '#b4b4b4', fontSize: 12}} />
                <Tooltip cursor={{fill: '#f8f9fa'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                <Bar dataKey="rate" name="Taxa Real" radius={[8, 8, 0, 0]} barSize={40}>
                  {ABSENTEEISM_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.rate > 3 ? '#ff0032' : '#323232'} />
                  ))}
                </Bar>
                <Line type="monotone" dataKey="benchmark" name="Benchmark Mercado" stroke="#b4b4b4" strokeWidth={2} strokeDasharray="5 5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
           <h5 className="font-bold text-dark mb-6">Top 5 CIDs: Causas e Riscos</h5>
           <div className="space-y-6">
             {TOP_CIDS.map((cid, i) => (
               <motion.div 
                 key={i} 
                 className="group relative"
                 whileHover={{ x: 4 }}
               >
                 <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] md:text-xs font-black text-dark uppercase truncate max-w-[70%]">{cid.name}</span>
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-mono font-bold text-medium">{cid.value}% dos dias</span>
                      <motion.span 
                        initial={{ opacity: 0, x: 10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="text-[9px] font-black text-[#ff0032] uppercase absolute -top-4 right-0 bg-white px-2 py-0.5 rounded shadow-sm border border-gray-100 z-10 pointer-events-none opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        {cid.days} Dias Perdidos
                      </motion.span>
                    </div>
                 </div>
                 <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden cursor-help" title={`${cid.days} Dias Perdidos`}>
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: `${(cid.value / 25) * 100}%` }}
                     transition={{ duration: 1, delay: i * 0.1 }}
                     className="h-full rounded-full"
                     style={{ backgroundColor: cid.color }}
                   />
                 </div>
               </motion.div>
             ))}
           </div>
           
           <div className="mt-12 bg-gray-50 border border-gray-100 p-6 rounded-2xl">
              <h6 className="text-[10px] font-black text-[#ff0032] uppercase mb-3 px-2">Insight de Mercado (ISMA-BR)</h6>
              <p className="text-sm text-dark font-semibold leading-relaxed">
                As "Doenças Mentais" representam o risco mais volátil. Embora sejam o 5º CID, elas possuem os maiores tempos de afastamento e maior custo de subistituição. <span className="text-[#ff0032]">Média Brasil: 30% de Burnout em saúde.</span>
              </p>
           </div>
        </div>
      </div>
    </div>
    </SlideWrapper>
  ),

  // SLIDE 3: RESUMO EXECUTIVO
  () => (
    <SlideWrapper title="Snapshot Estratégico" subtitle="Principais Alavancas do 1º Trimestre">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Absenteísmo" value="3,2%" subValue="Média no trimestre" icon={Activity} trend="2,5 MÉDIA MERCADO" trendColor="text-medium" />
        <StatCard title="Turnover" value="3,0%" subValue="Média no trimestre" icon={Users} trend="2,5 MÉDIA MERCADO" trendColor="text-medium" />
        <StatCard title="Acidentes" value="42,3" subValue="Taxa média trimestral" icon={AlertTriangle} trend="17,48 MÉDIA MERCADO" subTrend="Hospital Global" trendColor="text-medium" />
        <StatCard title="Impacto Financeiro" value="R$ 227k" subValue="Custo Absenteísmo" icon={DollarSign} trend="R$ 61/colab" trendColor="text-gray-500" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
               <BarChart3 size={120} />
            </div>
            <h4 className="text-lg font-bold text-dark mb-6 flex items-center gap-2">
              <TrendingUp size={20} className="text-[#ff0032]" />
              Correlação: Absenteísmo vs Acidentes
            </h4>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={ACCIDENT_DATA}>
                  <defs>
                    <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ff0032" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ff0032" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#b4b4b4', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#b4b4b4', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                    itemStyle={{fontWeight: 'bold', color: '#323232'}}
                  />
                  <Area type="monotone" dataKey="rate" name="Taxa de Acidente" stroke="#ff0032" strokeWidth={3} fillOpacity={1} fill="url(#colorRate)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded-xl flex items-center gap-3">
              <Info className="text-light shrink-0" size={18} />
              <p className="text-sm text-dark font-medium italic">
                "Observamos uma correlação direta de 0.85 entre o aumento de absenteísmo e a taxa de acidentes em Março. Sobrecarga e fadiga são os gatilhos."
              </p>
            </div>
          </div>

          {/* Perfil Epidemiológico - Duplo Vínculo */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={DUPLO_VINCULO_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={65}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {DUPLO_VINCULO_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="middle" align="right" layout="vertical" />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h5 className="text-sm font-black text-dark uppercase mb-2">Perfil Epidemiológico</h5>
              <p className="text-2xl font-black text-[#ff0032] mb-1">17,35%</p>
              <p className="text-xs font-bold text-medium uppercase mb-4">Possuem Duplo Vínculo</p>
              <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl">
                 <p className="text-[10px] font-bold text-blue-900 leading-relaxed italic">
                   "Dados do perfil epidemiológico: 17% dos colaboradores possuem duplo vínculo, o que intensifica o risco de fadiga e adoecimento."
                 </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-6">
          <ExecutiveInsight content="O aumento exponencial de acidentes em março (55,42) reflete um sistema em exaustão operacional, não apenas falhas técnicas individuais." />
          <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
            <h5 className="font-bold text-[#ff0032] mb-3 flex items-center gap-2">
              <ShieldCheck size={18} /> Alerta de Risco
            </h5>
            <ul className="space-y-3 mb-4">
              <li className="flex gap-2 text-sm text-red-800 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                Déficit assistencial por afastamento de longo prazo.
              </li>
              <li className="flex gap-2 text-sm text-red-800 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                Risco de multas previdenciárias (FAP).
              </li>
              <li className="flex gap-2 text-sm text-red-800 font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                Impacto na imagem institucional de segurança.
              </li>
            </ul>
            <div className="pt-4 border-t border-red-200">
               <p className="text-xs text-red-900 font-bold leading-relaxed">
                 Parte relevante do absenteísmo está associada a ocorrências evitáveis relacionadas à segurança do trabalho, especialmente em atividades operacionais e assistenciais.
               </p>
            </div>
            <div className="mt-4 pt-4 border-t border-red-200">
               <p className="text-xs text-red-900 font-bold leading-relaxed">
                 A predominância de acidentes no período diurno pode indicar relação com fatores de fadiga, desgaste ocupacional e dupla jornada ocasionando maior vulnerabilidade operacional afetando a saúde mental.
               </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benchmark & Methodology Footer */}
      <div className="mt-8 pt-6 border-t border-gray-100/60 flex flex-wrap items-center gap-x-12 gap-y-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-3 bg-[#ff0032] rounded-full" />
            <span className="text-[10px] font-black text-dark uppercase tracking-[0.15em]">Referências de Mercado Utilizadas</span>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
              <span className="text-sm">📊</span>
              <span className="text-[9px] font-bold text-medium uppercase tracking-tight">AEAT – Anuário Estatístico de Acidentes do Trabalho (Governo Federal)</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
              <span className="text-sm">🏥</span>
              <span className="text-[9px] font-bold text-medium uppercase tracking-tight">ANAHP – Associação Nacional de Hospitais Privados</span>
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  ),

  // SLIDE 4: A TRÍADE DA INSTABILIDADE
  () => (
    <SlideWrapper title="A TRÍADE DA INSTABILIDADE" subtitle="Visão Sistêmica de Indicadores">
      <div className="flex flex-col h-full">
        {/* Descritivo Superior */}
        <div className="mb-8">
          <p className="text-lg text-dark font-medium leading-relaxed max-w-4xl">
            O primeiro trimestre de 2026 revela uma <span className="text-[#ff0032] font-black underline decoration-2 underline-offset-4">reação em cadeia crítica</span> entre a saúde do trabalhador, a segurança assistencial e a retenção de colaboradores.
          </p>
          <ul className="mt-4 space-y-1">
            <li className="flex items-center gap-2 text-sm font-bold text-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff0032]" />
              <span className="font-black text-dark">Insegurança:</span> Média de 42,3 de taxa no último trimestre.
            </li>
            <li className="flex items-center gap-2 text-sm font-bold text-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff0032]" />
              <span className="font-black text-dark">Absenteísmo:</span> Alta progressiva atingindo 3,5% em março.
            </li>
            <li className="flex items-center gap-2 text-sm font-bold text-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff0032]" />
              <span className="font-black text-dark">Ruptura:</span> 62% do turnover concentrado em colaboradores com pouco tempo de casa.
            </li>
          </ul>
        </div>

        {/* Área Central: Infográfico e KPIs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 mb-8">
          {/* Triângulo de Correlação */}
          <div className="lg:col-span-8 relative h-[350px] flex items-center justify-center bg-gray-50/50 rounded-[3rem] border border-gray-100 overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center">
                <Triangle size={400} fill="currentColor" className="text-dark" />
             </div>

             <div className="relative w-full h-full flex items-center justify-center">
                {/* O Triângulo Visual */}
                <svg width="400" height="350" viewBox="0 0 400 350" className="relative z-10 overflow-visible">
                  {/* Linhas de Conexão */}
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                    d="M 200,60 L 320,260 L 80,260 Z" 
                    fill="none" 
                    stroke="#ff0032" 
                    strokeWidth="2" 
                    strokeDasharray="5,5"
                  />
                  
                  {/* Vértice Superior: Segurança */}
                  <g transform="translate(200,60)">
                    <circle r="45" fill="white" stroke="#ff0032" strokeWidth="3" className="shadow-xl" />
                    <foreignObject x="-30" y="-30" width="60" height="60">
                      <div className="w-full h-full flex items-center justify-center text-[#ff0032]">
                        <ShieldAlert size={32} />
                      </div>
                    </foreignObject>
                    <text y="65" textAnchor="middle" className="text-xs font-black fill-dark uppercase tracking-widest">Segurança</text>
                  </g>

                  {/* Vértice Inferior Direito: Absenteísmo */}
                  <g transform="translate(320,260)">
                    <circle r="45" fill="white" stroke="#ff0032" strokeWidth="3" className="shadow-xl" />
                    <foreignObject x="-30" y="-30" width="60" height="60">
                      <div className="w-full h-full flex items-center justify-center text-[#ff0032]">
                        <Activity size={32} />
                      </div>
                    </foreignObject>
                    <text y="65" textAnchor="middle" className="text-xs font-black fill-dark uppercase tracking-widest">Absenteísmo</text>
                  </g>

                  {/* Vértice Inferior Esquerdo: Turnover */}
                  <g transform="translate(80,260)">
                    <circle r="45" fill="white" stroke="#ff0032" strokeWidth="3" className="shadow-xl" />
                    <foreignObject x="-30" y="-30" width="60" height="60">
                      <div className="w-full h-full flex items-center justify-center text-[#ff0032]">
                        <UserMinus size={32} />
                      </div>
                    </foreignObject>
                    <text y="65" textAnchor="middle" className="text-xs font-black fill-dark uppercase tracking-widest">Turnover</text>
                  </g>

                  {/* Insight Central */}
                  <foreignObject x="150" y="140" width="100" height="80">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-[#ff0032]/20 text-center">
                          <span className="text-[10px] font-black text-[#ff0032] uppercase tracking-[0.2em] block mb-1">Causalidade</span>
                          <span className="text-sm font-bold text-dark block leading-tight">Ciclo de<br/>Exaustão</span>
                      </div>
                    </div>
                  </foreignObject>
                </svg>
             </div>
          </div>

          {/* KPIs Grandes à Direita */}
          <div className="lg:col-span-4 flex flex-col gap-4 h-full">
            <div className="flex-1 bg-white p-6 rounded-3xl border-2 border-gray-100 shadow-sm flex flex-col justify-center">
              <span className="text-[10px] font-black text-light uppercase tracking-widest mb-1 block">Risco Geral</span>
              <span className="text-4xl font-black text-[#ff0032] tabular-nums">42,3%</span>
              <span className="text-xs font-bold text-dark uppercase tracking-tighter">Insegurança Assistencial</span>
            </div>
            <div className="flex-1 bg-white p-6 rounded-3xl border-2 border-gray-100 shadow-sm flex flex-col justify-center">
              <span className="text-[10px] font-black text-light uppercase tracking-widest mb-1 block">Afastamentos</span>
              <span className="text-4xl font-black text-dark tabular-nums">3,5%</span>
              <span className="text-xs font-bold text-dark uppercase tracking-tighter">Taxa de Absenteísmo</span>
            </div>
            <div className="flex-1 bg-white p-6 rounded-3xl border-2 border-[#ff0032] shadow-sm flex flex-col justify-center">
              <span className="text-[10px] font-black text-[#ff0032] uppercase tracking-widest mb-1 block">Criticalidade</span>
              <span className="text-4xl font-black text-dark tabular-nums">62%</span>
              <span className="text-xs font-bold text-dark uppercase tracking-tighter">Turnover Concentrado</span>
            </div>
          </div>
        </div>

        {/* Faixa de Impactos Inferior */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-[#ff0032] p-5 rounded-2xl shadow-sm border border-white/5 text-white">
              <h6 className="text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                <Zap size={14} className="text-white/80" /> Insegurança gera Afastamentos
              </h6>
              <p className="text-[11px] leading-relaxed font-medium">
                 O alto índice de acidentes com perfurocortantes (plantão diurno assistencial) e a falta de uso de EPIs contribuem diretamente para o <span className="font-black text-white decoration-white/30 underline">Absenteísmo</span>.
              </p>
           </div>
           <div className="bg-gray-100 p-5 rounded-2xl border border-gray-200 text-dark">
              <h6 className="text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                <Activity size={14} className="text-[#ff0032]" /> Sobrecarga e Saúde
              </h6>
              <p className="text-[11px] leading-relaxed font-bold text-medium">
                 Absenteísmo concentra-se em doenças osteomusculares e mentais, sugerindo que colaboradores estão sobrecarregados por <span className="text-[#ff0032]">fadiga e desgaste</span>.
              </p>
           </div>
           <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm text-dark">
              <h6 className="text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                <RotateCcw size={14} className="text-[#ff0032]" /> Instabilidade Gera Fuga
              </h6>
              <p className="text-[11px] leading-relaxed font-bold text-medium">
                 Insegurança e sobrecarga culminam no <span className="text-[#ff0032] font-black">Turnover</span>. O cenário encurta o ciclo de vida dos colaboradores, afetando principalmente os jovens.
              </p>
           </div>
        </div>
      </div>
    </SlideWrapper>
  ),

  // SLIDE 5: ENTREVISTA DE DESLIGAMENTO
  () => (
    <SlideWrapper title="ENTREVISTA DE DESLIGAMENTO" subtitle="O Fator Humano como Eixo de Retenção">
      <div className="flex flex-col h-full gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Dados Gerais & Quotes */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black text-light uppercase tracking-widest block mb-1">Demitidos</span>
                <span className="text-3xl font-black text-dark">97</span>
              </div>
              <div className="h-10 w-[1px] bg-gray-100" />
              <div className="relative">
                <span className="text-[10px] font-black text-[#ff0032] uppercase tracking-widest block mb-1">Respondentes</span>
                <span className="text-3xl font-black text-dark">17</span>
                <motion.div 
                   className="absolute -right-4 -top-2"
                   initial={{ scale: 0 }} animate={{ scale: 1 }}
                >
                  <ArrowRight size={14} className="text-[#ff0032] rotate-45" />
                </motion.div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100 italic space-y-4">
              <h6 className="text-[10px] font-black text-[#ff0032] uppercase tracking-[0.2em] mb-2">O QUE ESTÃO DIZENDO?</h6>
              <div className="space-y-4">
                <div className="flex gap-3">
                   <MessageSquare size={16} className="text-[#ff0032] shrink-0 mt-1" />
                   <p className="text-xs font-bold text-dark leading-relaxed">
                    "Não me senti que era valorizada, reconhecida."
                   </p>
                </div>
                <div className="flex gap-3">
                   <MessageSquare size={16} className="text-[#ff0032] shrink-0 mt-1" />
                   <p className="text-xs font-bold text-dark leading-relaxed">
                    "No meu ponto de vista a empatia e o reconhecimento não existe."
                   </p>
                </div>
                <div className="flex gap-3">
                   <AlertTriangle size={16} className="text-[#ff0032] shrink-0 mt-1" />
                   <p className="text-xs font-bold text-dark leading-relaxed text-[#ff0032]">
                    "Infelizmente não fui valorizada... adquiri depressão e ansiedade e fui obrigada a escutar coisas humilhantes."
                   </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fatores de Demissão */}
          <div className="lg:col-span-8 bg-white p-8 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-center border border-gray-100 shadow-sm">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-dark">
               <UserMinus size={150} />
            </div>
            <div className="relative z-10">
              <h6 className="text-xs font-black text-[#ff0032] uppercase tracking-[0.3em] mb-6">Principal fator para pedir demissão</h6>
              <div className="space-y-4">
                {TURNOVER_REASONS.map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between text-xs font-bold text-dark mb-2 uppercase">
                      <span>{item.reason}</span>
                      <span className="text-[#ff0032]">{item.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.value}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-[#ff0032]"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                 <p className="text-[11px] text-medium font-medium leading-relaxed">
                   <span className="text-dark font-bold">Insight Executivo:</span> O ambiente tóxico e a falta de reconhecimento superam em <span className="text-dark font-black italic">3x as causas salariais</span> (implícito na categoria "Outras" e benchmark).
                 </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reconhecimento & Liderança */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
          <div className="lg:col-span-12 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl">
            <h6 className="text-[10px] font-black text-dark uppercase tracking-[0.4em] mb-8 text-center">Métricas de Reconhecimento & Liderança</h6>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                { label: 'Valorização', val: '50', color: '#ff0032' },
                { label: 'Crescimento', val: '64.7', color: '#323232' },
                { label: 'Respeito', val: '58.8', color: '#ff0032' },
                { label: 'Colegas', val: '76.5', color: '#323232' },
                { label: 'Gerente', val: '76.5', color: '#323232' },
                { label: 'Ética', val: '70.6', color: '#323232' },
              ].map((m, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="relative w-20 h-20 mb-4">
                    <svg className="w-full h-full -rotate-90">
                      <circle cx="40" cy="40" r="35" fill="none" stroke="#f3f4f6" strokeWidth="6" />
                      <motion.circle 
                        cx="40" cy="40" r="35" fill="none" stroke={m.color} strokeWidth="6" strokeDasharray="219.9"
                        initial={{ strokeDashoffset: 219.9 }}
                        animate={{ strokeDashoffset: 219.9 - (219.9 * Number(m.val)) / 100 }}
                        transition={{ duration: 1.5, delay: i * 0.1 }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                       <span className="text-xs font-black text-dark">{m.val}%</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-black text-light uppercase tracking-widest text-center">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Strategic Footer */}
        <div className="bg-red-50 p-6 rounded-3xl border border-red-100">
           <p className="text-xs text-red-900 font-bold text-center leading-relaxed">
             "A retenção exige mais que processos: requer a <span className="text-[#ff0032] font-black underline underline-offset-4">humanização da gestão intermediária</span>. Os dados confirmam que o colaborador não deixa a instituição, mas sim a liderança."
           </p>
        </div>
      </div>
    </SlideWrapper>
  ),


  // SLIDE 6: O FENÔMENO DA MELANCIA
  () => (
    <SlideWrapper title="Cultura & Segurança Psicológica" subtitle="O 'Fenômeno da Melancia' e a Dissonância Cognitiva">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
        <div>
           <div className="relative p-12 bg-white rounded-[3rem] border border-gray-100 shadow-2xl flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-50 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-50 rounded-full blur-3xl opacity-50" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-48 h-48 rounded-full border-[10px] border-green-500 border-t-red-500 animate-spin-slow flex items-center justify-center bg-white shadow-inner">
                   <div className="text-center">
                     <span className="text-4xl font-black text-dark block">78,4%</span>
                     <span className="text-[10px] font-bold text-light uppercase">Satisfação</span>
                   </div>
                </div>
                <div className="mt-8 text-center">
                  <h6 className="text-lg font-black text-dark uppercase tracking-tight mb-2">Verde por fora, Vermelho por dentro</h6>
                  <p className="text-xs text-medium max-w-xs font-medium">
                    A alta satisfação declarada esconde um ambiente de medo e insegurança onde falhas não são reportadas preventivamente.
                  </p>
                </div>
              </div>
           </div>
        </div>

        <div>
          <h5 className="font-bold text-dark mb-6">Quebra por Requisitos (Satisfação %)</h5>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CLIMATE_BARS} layout="vertical">
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#323232', fontWeight: 'bold', fontSize: 13}} width={120} />
                <Tooltip cursor={{fill: '#f8f9fa'}} />
                <Bar dataKey="score" radius={[0, 8, 8, 0]} barSize={25}>
                  {CLIMATE_BARS.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.type === 'Green' ? '#10b981' : entry.type === 'Amber' ? '#f59e0b' : '#ff0032'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 p-6 bg-white border border-gray-100 shadow-sm text-dark rounded-3xl">
             <div className="flex gap-4">
                <ShieldAlert className="text-[#ff0032] shrink-0" />
                <div>
                   <h6 className="text-sm font-bold mb-2">Dissonância Crítica</h6>
                   <p className="text-xs text-medium leading-relaxed font-bold">
                     Embora a Pesquisa de Clima aponte 78% de satisfação, os indicadores operacionais revelam uma realidade oposta. O alto absenteísmo e turnover sugerem que o engajamento declarado não se traduz em bem-estar real, indicando um possível viés de resposta por insegurança psicológica no ambiente de trabalho.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  ),

  // SLIDE 7: SÍNTESE ANALÍTICA
  () => (
    <SlideWrapper title="Síntese de Recomendações" subtitle="Principais evidências observadas nas gerências de maior impacto">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {[
            { 
              title: 'Saúde e Absenteísmo', 
              icon: Activity, 
              actions: [
                'Concentração em CIDs osteomusculares e transtornos mentais;',
                'Impacto predominante nas gerências críticas;',
                'Indícios de recorrência e permanência reduzida.'
              ],
              impact: 'PRESSÃO SOBRE SAÚDE E CUSTOS'
            },
            { 
              title: 'Segurança Assistencial', 
              icon: ShieldCheck, 
              actions: [
                'Maior concentração de acidentes nas áreas analisadas;',
                'Exposição ocupacional elevada;',
                'Necessidade de monitoramento contínuo dos indicadores.'
              ],
              impact: 'PRESSÃO SOBRE SEGURANÇA OPERACIONAL'
            },
            { 
              title: 'Retenção e Permanência', 
              icon: Users, 
              actions: [
                'Concentração da rotatividade nas áreas críticas;',
                'Permanência reduzida;',
                'Faixas críticas de desligamento identificadas.'
              ],
              impact: 'PRESSÃO SOBRE RETENÇÃO'
            }
          ].map((card, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-dark mb-6">
                <card.icon size={24} />
              </div>
              <h5 className="text-xl font-black text-dark mb-6 tracking-tight">{card.title}</h5>
              <ul className="space-y-4 mb-8 flex-1">
                {card.actions.map((act, j) => (
                  <li key={j} className="flex gap-3 text-sm text-medium font-bold">
                    <ChevronRight size={16} className="text-[#ff0032] shrink-0 mt-0.5" />
                    {act}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-gray-50 mt-auto">
                 <span className="text-[10px] font-black text-[#ff0032] uppercase tracking-widest">{card.impact}</span>
              </div>
            </motion.div>
          ))}
       </div>
       
       <div className="mt-12 bg-[#ff0032] p-10 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <Target size={180} />
          </div>
          <div className="relative z-10 max-w-xl">
             <h6 className="text-sm font-black uppercase tracking-[0.4em] mb-4 text-white/80">Considerações Estratégicas</h6>
             <h2 className="text-3xl font-black mb-4 leading-tight uppercase">As evidências identificadas indicam concentração de impacto nas gerências de Hotelaria, Cuidados Clínicos e Nutrição e Dietética</h2>
             <p className="text-white/70 font-medium">Os achados reforçam a necessidade de acompanhamento direcionado e monitoramento contínuo das gerências críticas.</p>
          </div>
          <div className="relative z-10">
            <button className="bg-white text-[#ff0032] px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-dark hover:text-white transition-all shadow-xl flex items-center gap-3">
              Apoio à Tomada de Decisão <ArrowRight size={18} />
            </button>
          </div>
       </div>
    </SlideWrapper>
  ),

  // SLIDE 8: ENCERRAMENTO
  () => (
    <div className="h-full bg-dark flex flex-col items-center justify-center text-center p-12 relative overflow-hidden">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-white/5 skew-y-12" />
       
       <motion.div
         initial={{ scale: 0.9, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         transition={{ duration: 0.8 }}
         className="relative z-10"
       >
         <div className="w-24 h-1 bg-[#ff0032] mx-auto mb-12" />
         <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">OBRIGADO</h1>
         <p className="text-xl text-medium max-w-xl mx-auto font-medium mb-12">
           People Analytics é sobre pessoas. Os dados apenas nos mostram onde cuidar primeiro.
         </p>
         
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: 'Efetivo Protegido', val: '1.236' },
              { label: 'Gerências Analisadas', val: '03' },
              { label: 'Confiança Clima', val: '78%' },
              { label: 'ROI Estimado Ação', val: '12,5%' }
            ].map((stat, i) => (
              <div key={i} className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                 <span className="text-[10px] uppercase font-bold text-light block mb-2">{stat.label}</span>
                 <span className="text-2xl font-black text-white">{stat.val}</span>
              </div>
            ))}
         </div>
         
         <div className="mt-16 text-white/30 text-[10px] font-bold uppercase tracking-[0.5em]">
           SANTA CASA BH • GESTÃO DE PESSOAS • 2026
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
            <span className="text-[8px] md:text-[10px] text-light uppercase font-bold">Q1 2026</span>
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
