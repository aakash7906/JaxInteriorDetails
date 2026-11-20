import React, { useState } from 'react'
import { Sparkles, MessageSquare, Phone, ArrowRight, Eye, ShieldCheck } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider'
import { SITE_IMAGES, BUSINESS_INFO } from '@/data/siteData'

export const Gallery: React.FC = () => {
  const [activeView, setActiveView] = useState<'split' | 'full'>('split')
  const [selectedCase, setSelectedCase] = useState<'minivan' | 'suv'>('minivan')

  const detailCases = [
    {
      id: 'steam',
      badge: 'HOT WATER EXTRACTION',
      title: 'Upholstery Deep Steam Extraction',
      desc: '210°F pressurized steam breaks chemical bonds of deep coffee spills, sunblock, and ground-in roadway soil while sanitizing seat padding.',
      image: SITE_IMAGES.steamExtraction,
    },
    {
      id: 'leather',
      badge: 'PIANO FINISH & HIDE RESTORATION',
      title: 'Perforated Leather Conditioning',
      desc: 'Infusion of matte conditioners that replenish natural oils without clogging perforation holes or leaving artificial greasy sheen.',
      image: SITE_IMAGES.leatherCare,
    },
    {
      id: 'exterior',
      badge: 'SURFACE SHIELD',
      title: 'Exterior Foam & Ceramic Glow',
      desc: 'Dense foam pre-soak encapsulates abrasive grit prior to touch, finished with ceramic sealant providing intense gloss & water beading.',
      image: SITE_IMAGES.exteriorWash,
    },
    {
      id: 'crevice',
      badge: 'MICRON-LEVEL FINESSE',
      title: 'Crevice & Air Vent Vacuuming',
      desc: 'Horsehair agitation coupled with precision pneumatic blast needles to purge dust, pet dander, and crumbs from seat tracks and vents.',
      image: SITE_IMAGES.creviceWork,
    },
    {
      id: 'waterfront',
      badge: 'JACKSONVILLE RESIDENCE SERVICE',
      title: 'Luxury SUV Waterfront Reset',
      desc: 'Showroom finish delivered right to residential driveways across Duval and St. Johns county with completely self-contained deionized water rigs.',
      image: SITE_IMAGES.luxurySuvSunset,
    },
    {
      id: 'mobile-rig',
      badge: 'MOBILE ATELIER CARE',
      title: 'Five-Year Dealership Craftsmanship',
      desc: 'Professional grade spot-treatment and surgical seam brushing performed directly at your home or workplace.',
      image: SITE_IMAGES.mobileWork1,
    },
  ]

  const stats = [
    { label: 'Pet Hair & Fiber Entanglement', rate: '98% Removed' },
    { label: 'Beverage Stains (Coffee, Soda, Milk)', rate: '95% Lifted' },
    { label: 'Florida Fine Sand Extraction', rate: '99% Cleared' },
  ]

  return (
    <div className="flex flex-col gap-5 pb-8 animate-in fade-in duration-200 text-left">
      {/* Intro Header */}
      <div className="px-0.5">
       
        <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
          The Detailing Difference
        </h2>
      </div>

      {/* Featured Deep Extraction Chamber (Before & After - Out of Card) */}
      <div className="text-left flex flex-col gap-2.5">
        <div className="flex items-center justify-between px-0.5">
          <div className="flex items-center gap-1.5">
            <h3 className="text-base font-bold text-foreground leading-tight">
              {selectedCase === 'minivan' ? 'Minivan Interior Recovery' : 'Graphite SUV Exterior Wash'}
            </h3>
          </div>

          <div className="flex items-center bg-muted p-0.5 rounded-lg border border-border-subtle">
            <button
              onClick={() => setSelectedCase('minivan')}
              className={`px-2 py-0.5 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
                selectedCase === 'minivan'
                  ? 'bg-primary text-primary-foreground shadow-2xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Interior
            </button>
            <button
              onClick={() => setSelectedCase('suv')}
              className={`px-2 py-0.5 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
                selectedCase === 'suv'
                  ? 'bg-primary text-primary-foreground shadow-2xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Exterior
            </button>
          </div>
        </div>

        {/* Comparison Slider (Full width, out of the card) */}
        {selectedCase === 'minivan' ? (
          <BeforeAfterSlider
            beforeImage={SITE_IMAGES.minivanBefore}
            afterImage={SITE_IMAGES.minivanAfter}
            beforeLabel="BEFORE"
            afterLabel="RESTORED"
            initialPosition={49}
            aspectRatio="aspect-[16/11]"
          />
        ) : (
          <BeforeAfterSlider
            beforeImage={SITE_IMAGES.suvDirty}
            afterImage={SITE_IMAGES.suvSpotless}
            beforeLabel="BEFORE"
            afterLabel="AFTER WASH"
            initialPosition={50}
            aspectRatio="aspect-[16/11]"
          />
        )}

        {/* Text details below image */}
        <div className="px-0.5">
          <span className="text-[10px] font-bold text-foreground block">
            {selectedCase === 'minivan' ? 'DRIVER CABIN RECOVERY' : 'DUAL-BUCKET CONTACT WASH'}
          </span>
          <p className="text-[10px] text-muted-foreground mt-0.5 leading-snug">
            {selectedCase === 'minivan'
              ? 'Carpet fibers penetrated 2.4 inches to lift Florida sand, muddy stains, and organic soils without sticky residue.'
              : 'Multi-stage decontaminating foam wash safely lifting road grime, bug splatter, and wheel brake dust without swirl marks.'}
          </p>

          <div className="flex items-center gap-3 mt-2.5 pt-2 border-t border-border-subtle text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {selectedCase === 'minivan' ? 'High-temp steam' : 'Foam pre-soak'}
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {selectedCase === 'minivan' ? 'Enzymatic lift' : 'Grit-guard wash'}
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {selectedCase === 'minivan' ? '2-hr door dry' : 'SiO2 gloss seal'}
            </span>
          </div>
        </div>
      </div>

      {/* Detail Close-Ups Feed */}
      <div>
        <div className="flex items-center justify-between mb-2.5 px-0.5">
          <div>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-primary">
              Detail Close-Ups
            </span>
            <h3 className="text-base font-bold text-foreground leading-tight">
              The Anatomy of Precision
            </h3>
          </div>
          <span className="text-[10px] text-muted-foreground">4 Focus Areas</span>
        </div>

        <div className="flex flex-col gap-3.5">
          {detailCases.map((item) => (
            <Card key={item.id} className="overflow-hidden border border-border">
              <div className="relative h-44 sm:h-52 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-stone-900 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-xs">
                  {item.badge}
                </span>
              </div>
              <div className="p-3.5 text-left">
                <h4 className="text-xs sm:text-sm font-bold text-foreground">
                  {item.title}
                </h4>
                <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Extraction Performance Metrics */}
      <Card className="p-4 border-none bg-muted text-left">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-foreground">
            Extraction Performance
          </span>
          <span className="text-[9px] text-muted-foreground font-semibold uppercase tracking-wider">
            Average Lift Rate
          </span>
        </div>

        <div className="flex flex-col gap-2.5">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-card p-2.5 rounded-xl border border-border-subtle">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[11px] font-medium text-foreground">{s.label}</span>
                <span className="font-bold text-primary">{s.rate}</span>
              </div>
              <div className="w-full bg-muted h-1.5 rounded-full mt-1.5 overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full"
                  style={{ width: s.rate.includes('98') ? '98%' : s.rate.includes('95') ? '95%' : '99%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Stubborn Stain Action Card */}
      <Card className="p-4 text-center bg-gradient-to-b from-card to-primary-subtle/40 border border-primary-border">
        <div className="w-10 h-10 rounded-2xl bg-primary-subtle text-primary mx-auto flex items-center justify-center mb-2">
          <Sparkles className="w-5 h-5" />
        </div>
        <h3 className="text-sm font-bold text-foreground">
          Have stubborn stains or pet hair?
        </h3>
        <p className="text-xs text-muted-foreground mt-1 max-w-xs mx-auto">
          Text Us a Photo for a Quick Quote. We evaluate fiber condition, reply quickly, and bring the atelier directly to your driveway.
        </p>

        <div className="mt-4 flex flex-col gap-2">
          <a
            href={`sms:${BUSINESS_INFO.rawPhone}?&body=Hi%20Jax%20Detail,%20I'm%20sending%20a%20photo%20of%20stains%20on%20my%20seats%20for%20evaluation.`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary-hover transition-colors shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Text Photo for Instant Quote</span>
          </a>
          <a
            href={`tel:${BUSINESS_INFO.rawPhone}`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-card text-foreground hover:bg-muted transition-colors border border-outline"
          >
            <Phone className="w-3.5 h-3.5 text-muted-foreground" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        <p className="text-[10px] text-muted-foreground mt-2">
          Jacksonville & within 30 miles • Mon–Fri 9am–6pm ET
        </p>
      </Card>
    </div>
  )
}

export default Gallery
