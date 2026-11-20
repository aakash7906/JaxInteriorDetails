import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Clock, Check, Phone, MessageSquare, Shield, Sparkles, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { SERVICES_DATA, BUSINESS_INFO } from '@/data/siteData'

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const service = SERVICES_DATA.find((s) => s.id === id) || SERVICES_DATA[0]

  return (
    <div className="flex flex-col gap-5 pb-8 animate-in fade-in duration-200 text-left">
      {/* Back navigation & header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate('/services')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Menu</span>
        </button>
        <Badge variant="subtle" size="sm">
          {service.tierNumber}
        </Badge>
      </div>

      {/* Hero Media Banner */}
      <div className="relative rounded-3xl overflow-hidden shadow-sm border border-border">
        <div className="relative h-56 sm:h-64 w-full">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        

          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <div>
              <span className="text-[10px] text-inverted-muted block font-medium">
                Approx. {service.duration}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-inverted-foreground leading-tight">
                {service.title}
              </h2>
            </div>
            <div className="text-right">
              <span className="text-[9px] uppercase tracking-wider text-inverted-muted block">
                Starting At
              </span>
              <span className="text-2xl font-bold text-inverted-foreground leading-none">
                {service.price}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Overview & Description */}
      <Card className="p-4">
        <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-1">
          Detailed Overview
        </span>
        <p className="text-xs text-foreground leading-relaxed">
          {service.detailedOverview}
        </p>

        <div className="mt-3 p-3 bg-muted rounded-xl border border-border-subtle">
          <span className="text-[10px] font-semibold uppercase text-muted-foreground block mb-0.5">
            Recommended For
          </span>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {service.recommendedFor}
          </p>
        </div>
      </Card>

      {/* Step by Step Breakdown Points */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-foreground">
            Complete Execution Protocol ({service.pointsCount} Points)
          </span>
          <Sparkles className="w-4 h-4 text-primary" />
        </div>

        <div className="flex flex-col gap-2.5">
          {service.points.map((pt, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-primary-subtle text-primary text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {pt}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* Package Inclusion Comparison */}
      <Card className="p-4 bg-muted border-none">
        <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-2">
          Service Inclusions
        </span>

        <div className="flex flex-col gap-2">
          {service.featuresList.map((f, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-card p-2.5 rounded-xl border border-border-subtle"
            >
              <span className="text-xs font-medium text-foreground">{f.name}</span>
              {f.included ? (
                <span className="text-[10px] font-bold text-success bg-success-bg px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Check className="w-3 h-3" /> Included
                </span>
              ) : (
                <span className="text-[10px] text-muted-foreground font-medium">
                  Add-on only
                </span>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Action / Book this Service */}
      <div className="flex flex-col gap-2 pt-1">
        <Link
          to={`/booking?treatment=${service.id}`}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary-hover transition-colors shadow-xs"
        >
          <span>Book This Service</span>
          <ChevronRight className="w-4 h-4" />
        </Link>

        <a
          href={`sms:${BUSINESS_INFO.rawPhone}?&body=Hi%20Jax%20Detail,%20I'm%20interested%20in%20booking%20the%20${encodeURIComponent(service.title)}.`}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-card text-foreground hover:bg-muted transition-colors border border-outline"
        >
          <MessageSquare className="w-3.5 h-3.5 text-primary" />
          <span>Text Us a Photo for Accurate Quote</span>
        </a>
      </div>
    </div>
  )
}

export default ServiceDetail
