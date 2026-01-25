/**
 * Exemplo de uso do Design System - Componente Button
 * 
 * Este arquivo demonstra como criar componentes seguindo o Design System
 */

import React from 'react'
import tokens from '../tokens'

export function ButtonExample() {
  return (
    <div style={{ padding: tokens.spacing[8] }}>
      <h2 style={{ 
        fontSize: tokens.typography.fontSize['4xl'],
        fontWeight: tokens.typography.fontWeight.bold,
        marginBottom: tokens.spacing[8],
        color: tokens.colors.text.primary,
      }}>
        Exemplos de Botões - Design System
      </h2>

      {/* Usando Tailwind (Recomendado) */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900">
          Usando Tailwind Classes
        </h3>
        
        <div className="flex flex-wrap gap-4">
          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold shadow-primary hover:bg-primary-700 transition-all duration-base">
            Primary Button
          </button>

          <button className="bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-base">
            Secondary Button
          </button>

          <button className="bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold shadow-accent hover:bg-accent-700 transition-all duration-base">
            Accent Button
          </button>

          <button className="bg-transparent text-gray-700 border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-base">
            Outline Button
          </button>
        </div>
      </section>

      {/* Usando Tokens Diretamente */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900">
          Usando Tokens Diretamente (Inline Styles)
        </h3>
        
        <div style={{ display: 'flex', gap: tokens.spacing[4], flexWrap: 'wrap' }}>
          <button style={{
            backgroundColor: tokens.colors.primary[600],
            color: tokens.colors.text.inverse,
            padding: `${tokens.spacing[3]} ${tokens.spacing[6]}`,
            borderRadius: tokens.borderRadius.lg,
            fontWeight: tokens.typography.fontWeight.semibold,
            border: 'none',
            cursor: 'pointer',
            boxShadow: tokens.shadows.primary,
            transition: `all ${tokens.transitions.duration.base} ${tokens.transitions.timing.easeInOut}`,
          }}>
            Primary Token
          </button>

          <button style={{
            backgroundColor: tokens.colors.secondary[600],
            color: tokens.colors.text.inverse,
            padding: `${tokens.spacing[3]} ${tokens.spacing[6]}`,
            borderRadius: tokens.borderRadius.lg,
            fontWeight: tokens.typography.fontWeight.semibold,
            border: 'none',
            cursor: 'pointer',
            boxShadow: tokens.shadows.secondary,
            transition: `all ${tokens.transitions.duration.base} ${tokens.transitions.timing.easeInOut}`,
          }}>
            Secondary Token
          </button>
        </div>
      </section>

      {/* Tamanhos */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900">
          Diferentes Tamanhos
        </h3>
        
        <div className="flex items-center gap-4 flex-wrap">
          <button className="bg-primary-600 text-white px-4 py-2 text-sm rounded-lg font-semibold hover:bg-primary-700 transition-all">
            Small
          </button>

          <button className="bg-primary-600 text-white px-6 py-3 text-base rounded-lg font-semibold hover:bg-primary-700 transition-all">
            Medium
          </button>

          <button className="bg-primary-600 text-white px-8 py-4 text-lg rounded-lg font-semibold hover:bg-primary-700 transition-all">
            Large
          </button>
        </div>
      </section>

      {/* Estados */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900">
          Estados do Botão
        </h3>
        
        <div className="flex gap-4 flex-wrap">
          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-base">
            Hover Me
          </button>

          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all">
            Focus Me
          </button>

          <button 
            disabled 
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold opacity-50 cursor-not-allowed"
          >
            Disabled
          </button>

          <button className="bg-success-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-success-700 transition-all">
            Success
          </button>

          <button className="bg-error-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-error-700 transition-all">
            Error
          </button>
        </div>
      </section>

      {/* Com Ícones */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900">
          Botões com Ícones
        </h3>
        
        <div className="flex gap-4 flex-wrap">
          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all flex items-center gap-2">
            <span>→</span>
            Com Ícone
          </button>

          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all flex items-center gap-2 group">
            Hover Effect
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </section>

      {/* Animações */}
      <section>
        <h3 className="text-2xl font-semibold mb-6 text-gray-900">
          Com Animações
        </h3>
        
        <div className="flex gap-4 flex-wrap">
          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold animate-fade-in hover:bg-primary-700 transition-all">
            Fade In
          </button>

          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold animate-slide-up hover:bg-primary-700 transition-all">
            Slide Up
          </button>

          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold animate-scale-in hover:bg-primary-700 transition-all">
            Scale In
          </button>
        </div>
      </section>
    </div>
  )
}

export default ButtonExample
