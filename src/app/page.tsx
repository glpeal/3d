'use client'
import dynamic from 'next/dynamic'
import { SplineScene } from '@/components/ui/splite'
import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'

const LiquidChrome = dynamic(() => import('@/components/ui/LiquidChrome'), { ssr: false })

const cards = [
  {
    title: 'LiquidChrome',
    desc: 'WebGL-шейдер на базе OGL с реакцией на движение мыши в реальном времени',
    tag: 'OGL',
  },
  {
    title: 'Spline 3D',
    desc: 'Интерактивная 3D-модель, встроенная напрямую в страницу без iframe',
    tag: 'Spline',
  },
  {
    title: 'Spotlight',
    desc: 'Spotlight-подсветка на Framer Motion, следящая за курсором мыши',
    tag: 'Framer',
  },
]

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* LiquidChrome background */}
      <div className="absolute inset-0 z-0">
        <LiquidChrome
          baseColor={[0.05, 0.05, 0.12]}
          speed={1}
          amplitude={0.6}
          interactive={true}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16">

        {/* Header */}
        <div className="mb-10 text-center">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/30"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            интерактивная визуализация
          </p>
          <h1
            className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/30 tracking-tight leading-none"
            style={{ fontFamily: 'Onest, sans-serif' }}
          >
            3D Модель
          </h1>
          <p
            className="mt-5 text-base text-white/40 max-w-md mx-auto leading-relaxed font-medium"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Интерактивная 3D-сцена с анимированным WebGL-фоном и встроенной Spline-моделью
          </p>
        </div>

        {/* Spline Card */}
        <Card className="w-full max-w-5xl h-[500px] bg-black/60 border-white/10 backdrop-blur-md relative overflow-hidden">
          <Spotlight size={400} />

          <div className="flex h-full">
            {/* Left */}
            <div className="flex-1 p-10 relative z-10 flex flex-col justify-center">
              <span
                className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-5"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Интерактивная 3D
              </span>

              <h2
                className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight"
                style={{ fontFamily: 'Onest, sans-serif' }}
              >
                Оживите<br />ваш интерфейс
              </h2>

              <p
                className="mt-5 text-neutral-400 max-w-xs text-sm leading-relaxed"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Красивые 3D-сцены на базе Spline. Двигайте мышью для взаимодействия с моделью и жидкохромовым фоном.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {['WebGL', 'Three.js', 'Spline', 'OGL'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[11px] font-medium border border-white/10 text-white/40"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — 3D */}
            <div className="flex-1 relative">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>

        {/* Bottom cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
          {cards.map((item) => (
            <Card
              key={item.title}
              className="bg-black/40 border-white/10 backdrop-blur-sm p-6 relative overflow-hidden"
            >
              <Spotlight size={160} />
              <span
                className="text-[10px] font-semibold uppercase tracking-widest text-white/25"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {item.tag}
              </span>
              <h3
                className="mt-2 text-white font-bold text-base"
                style={{ fontFamily: 'Onest, sans-serif' }}
              >
                {item.title}
              </h3>
              <p
                className="mt-1.5 text-white/35 text-sm leading-relaxed"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {item.desc}
              </p>
            </Card>
          ))}
        </div>

        {/* Footer hint */}
        <p
          className="mt-10 text-white/20 text-xs tracking-wide"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Двигайте мышью по фону — жидкий хром реагирует на каждое движение
        </p>
      </div>
    </main>
  )
}
