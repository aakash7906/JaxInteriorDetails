import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, MessageSquare, Star, ArrowUpRight, MapPin, Clock, Sparkles, Send } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Select } from '@/components/ui/Select'
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider'
import { SITE_IMAGES, BUSINESS_INFO } from '@/data/siteData'

export const Home: React.FC = () => {
  const [transformationTab, setTransformationTab] = useState<'interior' | 'exterior'>('interior')
  const [serviceType, setServiceType] = useState('interior-detailing')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [carModel, setCarModel] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleQuickQuote = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="flex flex-col gap-5 pb-8 animate-in fade-in duration-200">
      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden shadow-sm border border-border">
        <div className="relative h-64 sm:h-72 w-full">
          <img
            src={SITE_IMAGES.heroInterior}
            alt="Mobile Interior Detailing Jacksonville"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 text-left">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-inverted-foreground leading-tight">
              Mobile Interior Detailing in Jacksonville, FL
            </h2>

            <div className="grid grid-cols-2 gap-2 mt-3.5">
              <a
                href={`tel:${BUSINESS_INFO.rawPhone}`}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-card text-foreground hover:bg-muted transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <a
                href={`sms:${BUSINESS_INFO.rawPhone}`}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-secondary text-secondary-foreground hover:bg-secondary-hover transition-colors shadow-xs border border-stone-700"
              >
                <MessageSquare className="w-3.5 h-3.5 text-primary" />
                <span>Text Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Star Social Proof Banner */}
      <Link to="/services">
        <Card className="p-3.5 flex items-center justify-between" interactive>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-foreground">5.0</span>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-[11px] text-muted-foreground font-medium">
                {BUSINESS_INFO.reviewsCount} from Jax Drivers
              </p>
            </div>
          </div>
          <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </Card>
      </Link>

      {/* Info Pills: Service Radius & Hours */}
      <div className="grid grid-cols-2 gap-2.5">
        <Card className="p-3 text-left">
          <div className="flex items-center justify-between text-muted-foreground mb-1">
            <span className="text-[10px] font-medium uppercase tracking-wider">Service Radius</span>
            <MapPin className="w-3.5 h-3.5 text-primary" />
          </div>
          <p className="text-sm font-bold text-foreground">30 Miles</p>
          <p className="text-[10px] text-muted-foreground truncate mt-0.5">
            Jacksonville, Beaches & St. Johns
          </p>
        </Card>

        <Card className="p-3 text-left">
          <div className="flex items-center justify-between text-muted-foreground mb-1">
            <span className="text-[10px] font-medium uppercase tracking-wider">Concierge Hours</span>
            <Clock className="w-3.5 h-3.5 text-primary" />
          </div>
          <p className="text-sm font-bold text-foreground">Mon – Fri</p>
          <p className="text-[10px] text-muted-foreground truncate mt-0.5">
            9:00 AM – 6:00 PM ET
          </p>
        </Card>
      </div>

      {/* Tailored Treatments Section */}
      <div className="text-left">
        <div className="flex items-center justify-between mb-2.5 px-0.5">
          <div>
            
            <h3 className="text-base font-bold text-foreground leading-tight">
              Tailored Treatments
            </h3>
          </div>
          <Link
            to="/services"
            className="text-xs font-semibold text-primary hover:underline flex items-center gap-0.5 cursor-pointer"
          >
            Explore Services
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <Link to="/services/interior-detailing" className="group flex flex-col">
            {/* Image outside card */}
            <div className="relative h-32 rounded-2xl overflow-hidden mb-2 shadow-xs border border-border">
              <img
                src={SITE_IMAGES.heroInterior}
                alt="Interior Detailing"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
             
            </div>

            {/* Text details below image */}
            <div className="p-1 flex flex-col flex-1 justify-between">
              <div>
                <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                  Interior Detailing
                </h4>
              
              </div>
              <div className="mt-2 pt-1.5 flex items-center justify-between">
                <span className="text-[10px] font-bold text-primary">DEEP RESTORATION</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </Link>

          <Link to="/services/exterior-detailing" className="group flex flex-col">
            {/* Image outside card */}
            <div className="relative h-32 rounded-2xl overflow-hidden mb-2 shadow-xs border border-border">
              <img
                src={SITE_IMAGES.exteriorWash}
                alt="Exterior Detailing"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
             
            </div>

            {/* Text details below image */}
            <div className="p-1 flex flex-col flex-1 justify-between">
              <div>
                <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                  Exterior Hand Wash
                </h4>
                
              </div>
              <div className="mt-2 pt-1.5 flex items-center justify-between">
                <span className="text-[10px] font-bold text-primary">MIRROR FINISH</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Interactive Before & After Transformation Slider */}
      <div className="text-left">
        <div className="flex items-center justify-between mb-2 px-0.5">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
              Real Work In Jax
            </span>
            <h3 className="text-base font-bold text-foreground leading-tight">
              The Transformation
            </h3>
          </div>

          <div className="flex items-center bg-muted p-0.5 rounded-lg border border-border">
            <button
              type="button"
              onClick={() => setTransformationTab('interior')}
              className={`px-2 py-0.5 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
                transformationTab === 'interior'
                  ? 'bg-primary text-primary-foreground shadow-2xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Interior Minivan
            </button>
            <button
              type="button"
              onClick={() => setTransformationTab('exterior')}
              className={`px-2 py-0.5 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
                transformationTab === 'exterior'
                  ? 'bg-primary text-primary-foreground shadow-2xs'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              SUV Exterior
            </button>
          </div>
        </div>

        {/* Comparison Slider */}
        {transformationTab === 'interior' ? (
          <BeforeAfterSlider
            beforeImage={SITE_IMAGES.minivanBefore}
            afterImage={SITE_IMAGES.minivanAfter}
            beforeLabel="BEFORE"
            afterLabel="AFTER DETAIL"
            initialPosition={49}
            aspectRatio="aspect-[16/11]"
          />
        ) : (
          <BeforeAfterSlider
            beforeImage={SITE_IMAGES.suvDirty}
            afterImage={SITE_IMAGES.suvSpotless}
            beforeLabel="BEFORE WASH"
            afterLabel="SPOTLESS GLOSS"
            initialPosition={50}
            aspectRatio="aspect-[16/11]"
          />
        )}

        <p className="text-[10px] text-muted-foreground mt-1.5 px-0.5 leading-snug">
          {transformationTab === 'interior'
            ? 'Deep fiber extraction on family minivan: coffee stains, heavy Florida sand, and ground-in roadway soil completely restored.'
            : 'Multi-stage contact wash on graphite SUV: road salt, grime, and brake dust removed without swirl marks.'}
        </p>
      </div>

      {/* The Jax Precision Touch Grid */}
      <div className="text-left">
        <Card className="p-4 bg-muted border-none">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-primary-subtle text-primary flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-foreground">The Jax Precision Touch</h4>
              <p className="text-[10px] text-muted-foreground">Why collector vehicle owners trust us</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-card p-2.5 rounded-xl border border-border-subtle">
              <span className="text-[10px] font-bold text-foreground block">Fiber Extraction</span>
              <p className="text-[9px] text-muted-foreground mt-0.5 leading-relaxed">
                Deep extractive flow that lifts embedded grit without soaking pads.
              </p>
            </div>
            <div className="bg-card p-2.5 rounded-xl border border-border-subtle">
              <span className="text-[10px] font-bold text-foreground block">pH-Neutral Care</span>
              <p className="text-[9px] text-muted-foreground mt-0.5 leading-relaxed">
                Zero harsh chemicals, safe for supple leather and Alcantara.
              </p>
            </div>
            <div className="bg-card p-2.5 rounded-xl border border-border-subtle">
              <span className="text-[10px] font-bold text-foreground block">Crevice Detailing</span>
              <p className="text-[9px] text-muted-foreground mt-0.5 leading-relaxed">
                Between seat seams, rails, and tactile dashboard air vents.
              </p>
            </div>
            <div className="bg-card p-2.5 rounded-xl border border-border-subtle">
              <span className="text-[10px] font-bold text-foreground block">Door Jamb Finish</span>
              <p className="text-[9px] text-muted-foreground mt-0.5 leading-relaxed">
                Steamed and wiped down for clean ingress and egress.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Driver Feedback Quote Card */}
      <Card className="p-4 text-left">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] uppercase tracking-wider font-bold text-primary">
            Driver Feedback
          </span>
          <span className="text-[10px] text-muted-foreground">Verified Google Review</span>
        </div>
        <div className="flex text-amber-500 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-current" />
          ))}
        </div>
        <p className="text-xs text-foreground italic leading-relaxed">
          &ldquo;Jax Detail came straight to my office in downtown Jacksonville. My Porsche&apos;s interior looks and smells like the day it left the showroom. Incredible attention to seat seams and carpets.&rdquo;
        </p>
        <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-border-subtle">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary-subtle text-primary font-bold text-[10px] flex items-center justify-center">
              M
            </div>
            <span className="text-[11px] font-bold text-foreground">Marcus T. • Jacksonville</span>
          </div>
          <span className="text-[9px] font-medium text-success bg-success-bg px-2 py-0.5 rounded-full">
            Verified Client
          </span>
        </div>
      </Card>

      {/* Quick Enquiry / Booking Module */}
      <Card className="p-4 text-left">
        <span className="text-[10px] uppercase tracking-wider font-semibold text-primary">
          Quick Enquiry
        </span>
        <h3 className="text-base font-bold text-foreground">Request a Detail</h3>
        <p className="text-xs text-muted-foreground mt-0.5 mb-3.5">
          Text us your car model or send a note below for swift response within hours.
        </p>

        {submitted ? (
          <div className="bg-success-bg border border-success/30 text-success p-3 rounded-xl text-center text-xs font-semibold">
            Thank you! Your quote request has been dispatched. We will reply shortly.
          </div>
        ) : (
          <form onSubmit={handleQuickQuote} className="flex flex-col gap-2.5">
            <div>
              <Select
                label="SERVICE TYPE"
                value={serviceType}
                onChange={setServiceType}
                options={[
                  { value: 'interior-detailing', label: 'Interior Detailing (Specialty)' },
                  { value: 'exterior-detailing', label: 'Exterior Hand Wash & Seal' },
                  { value: 'the-full-works', label: 'The Full Works (Complete Package)' },
                ]}
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Driver name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-muted border border-outline rounded-xl px-3 py-2 text-xs text-foreground placeholder-text-placeholder outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(904) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-muted border border-outline rounded-xl px-3 py-2 text-xs text-foreground placeholder-text-placeholder outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1">
                Vehicle Make & Model
              </label>
              <input
                type="text"
                placeholder="e.g. 2023 Range Rover / BMW M4"
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
                className="w-full bg-muted border border-outline rounded-xl px-3 py-2 text-xs text-foreground placeholder-text-placeholder outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <Button type="submit" variant="secondary" fullWidth className="mt-1">
              <span>Send Quote Request</span>
              <Send className="w-3.5 h-3.5 ml-1" />
            </Button>
          </form>
        )}
      </Card>
    </div>
  )
}

export default Home
