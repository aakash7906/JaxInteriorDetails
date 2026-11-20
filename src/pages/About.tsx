import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Sparkles, Award, MapPin, Check, Phone, MessageSquare, Star } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { BUSINESS_INFO, SITE_IMAGES } from '@/data/siteData'

export const About: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 pb-8 animate-in fade-in duration-200 text-left">
      {/* Header Banner */}
      <div className="px-0.5">
        <Badge variant="subtle" size="sm" className="mb-1.5">
          Our Story
        </Badge>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
          About Jax Interior Detail
        </h2>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
          Bespoke automotive detailing and high-temp extraction brought directly to your garage.
        </p>
      </div>

      {/* Image Banner */}
      <Card className="overflow-hidden border border-border">
        <div className="relative h-48 sm:h-56 w-full">
          <img
            src={SITE_IMAGES.heroInterior}
            alt="Craftsmanship in Jacksonville"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-inverted/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 text-inverted-foreground">
            <span className="text-[10px] text-inverted-muted block font-semibold uppercase tracking-wider">
              Jacksonville Mobile Atelier
            </span>
            <p className="text-xs font-bold leading-tight">
              &ldquo;Treating each cabin with the surgical care of fine upholstery artisans.&rdquo;
            </p>
          </div>
        </div>
      </Card>

      {/* Mission Statement */}
      <Card className="p-4 bg-muted border-none">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold text-foreground">Our Philosophy</span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {BUSINESS_INFO.mission}
        </p>
      </Card>

      {/* Why Choose Jax Detail */}
      <div>
        <span className="text-[10px] uppercase tracking-wider font-semibold text-primary block mb-2 px-0.5">
          Standards of Excellence
        </span>

        <div className="grid grid-cols-2 gap-2.5">
          <Card className="p-3">
            <div className="w-7 h-7 rounded-lg bg-primary-subtle text-primary flex items-center justify-center mb-2">
              <Shield className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-foreground">Fully Licensed & Insured</h4>
            <p className="text-[10px] text-muted-foreground mt-0.5">
              Comprehensive garage-keepers coverage protecting your vehicle at all times.
            </p>
          </Card>

          <Card className="p-3">
            <div className="w-7 h-7 rounded-lg bg-primary-subtle text-primary flex items-center justify-center mb-2">
              <Award className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-foreground">Hospital-Grade Steam</h4>
            <p className="text-[10px] text-muted-foreground mt-0.5">
              210°F extraction lifts embedded allergens and organic spills with zero grease.
            </p>
          </Card>

          <Card className="p-3">
            <div className="w-7 h-7 rounded-lg bg-primary-subtle text-primary flex items-center justify-center mb-2">
              <MapPin className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-foreground">Self-Contained Rig</h4>
            <p className="text-[10px] text-muted-foreground mt-0.5">
              We supply pure deionized water and quiet power — no hookup needed.
            </p>
          </Card>

          <Card className="p-3">
            <div className="w-7 h-7 rounded-lg bg-primary-subtle text-primary flex items-center justify-center mb-2">
              <Star className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-foreground">100% 5-Star Reputation</h4>
            <p className="text-[10px] text-muted-foreground mt-0.5">
              Trusted by luxury car drivers and daily commuters across Duval & St. Johns.
            </p>
          </Card>
        </div>
      </div>

      {/* Direct Contact Links */}
      <Card className="p-4 text-center">
        <h3 className="text-sm font-bold text-foreground">Ready to Experience the Difference?</h3>
        <p className="text-xs text-muted-foreground mt-1 mb-3">
          Book online in under 2 minutes or chat directly with our lead specialist.
        </p>

        <div className="grid grid-cols-2 gap-2">
          <Link
            to="/booking"
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary-hover transition-colors shadow-xs"
          >
            Book Appointment
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-semibold bg-card text-foreground hover:bg-muted transition-colors border border-outline"
          >
            Contact Details
          </Link>
        </div>
      </Card>
    </div>
  )
}

export default About
