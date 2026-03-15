'use client'
import dynamic from 'next/dynamic'
import { SplineScene } from '@/components/ui/splite'
import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'

const LiquidChrome = dynamic(() => import('@/components/ui/LiquidChrome'), { ssr: false })

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Full-screen LiquidChrome background */}
      <div className="absolute inset-0 z-0">
        <LiquidChrome
          baseColor={[0.05, 0.05, 0.12]}
          speed={1}
          amplitude={0.6}
          interactive={true}
        />
      </div>

      {/* Page content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-6">

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 tracking-tight">
            3D Model Viewer
          </h1>
          <p className="mt-4 text-lg text-white/50 max-w-xl mx-auto">
            Interactive 3D scene with LiquidChrome background and Spline integration
          </p>
        </div>

        {/* Spline Card */}
        <Card className="w-full max-w-5xl h-[500px] bg-black/60 border-white/10 backdrop-blur-md relative overflow-hidden">
          <Spotlight size={400} />

          <div className="flex h-full">
            {/* Left text panel */}
            <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-widest text-white/40 mb-4">
                Interactive 3D
              </span>
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
                Bring your UI<br />to life
              </h2>
              <p className="mt-4 text-neutral-400 max-w-xs text-sm leading-relaxed">
                Beautiful 3D scenes powered by Spline. Move your mouse to interact with the model and the liquid chrome background.
              </p>
              <div className="mt-8 flex gap-3">
                <span className="px-3 py-1 rounded-full text-xs border border-white/10 text-white/50">WebGL</span>
                <span className="px-3 py-1 rounded-full text-xs border border-white/10 text-white/50">Three.js</span>
                <span className="px-3 py-1 rounded-full text-xs border border-white/10 text-white/50">Spline</span>
              </div>
            </div>

            {/* Right 3D panel */}
            <div className="flex-1 relative">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>

        {/* Bottom info row */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
          {[
            { title: 'LiquidChrome', desc: 'WebGL shader background with mouse interaction', tag: 'OGL' },
            { title: 'Spline 3D', desc: 'Real-time 3D model embedded directly in the page', tag: 'Spline' },
            { title: 'Spotlight', desc: 'Framer Motion spotlight that follows your cursor', tag: 'Framer' },
          ].map((item) => (
            <Card
              key={item.title}
              className="bg-black/40 border-white/10 backdrop-blur-sm p-5 relative overflow-hidden group"
            >
              <Spotlight size={150} />
              <span className="text-xs text-white/30 font-mono">{item.tag}</span>
              <h3 className="mt-2 text-white font-semibold">{item.title}</h3>
              <p className="mt-1 text-white/40 text-sm">{item.desc}</p>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-12 text-white/20 text-xs">
          Move your mouse over the background to interact with the liquid chrome effect
        </p>
      </div>
    </main>
  )
}
