import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, MessageSquare, ChevronDown, ChevronUp, Clock, Check, ArrowRight, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { SERVICES_DATA, BUSINESS_INFO } from '@/data/siteData'

export const Services: React.FC = () => {
    const [expandedTier, setExpandedTier] = useState<number | null>(0)

    const toggleExpand = (index: number) => {
        setExpandedTier(expandedTier === index ? null : index)
    }

    return (
        <div className="flex flex-col gap-5 pb-8 animate-in fade-in duration-200">
            {/* Header status bar */}
            <div className="flex items-center justify-between bg-card border border-border px-3 py-2 rounded-2xl shadow-2xs">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <div className="text-left">
                        <span className="text-[10px] font-bold text-foreground block">
                            MOBILE STUDIO • JAX & 30 MILES
                        </span>
                        <span className="text-[9px] text-muted-foreground font-medium">
                            {BUSINESS_INFO.hours}
                        </span>
                    </div>
                </div>
                <a
                    href={`tel:${BUSINESS_INFO.rawPhone}`}
                    className="text-[10px] font-bold bg-muted hover:bg-primary-subtle text-primary px-2.5 py-1.5 rounded-xl border border-primary-border transition-colors flex items-center gap-1"
                >
                    <Phone className="w-3 h-3" />
                    <span>QUICK CALL</span>
                </a>
            </div>

            {/* Intro Header */}
            <div className="text-left px-0.5">

                <h2 className="text-xl font-bold text-foreground tracking-tight">
                    Precision Care Menu
                </h2>

            </div>

            {/* Service Tiers Cards */}
            <div className="flex flex-col gap-4">
                {SERVICES_DATA.map((tier, idx) => {
                    const isExpanded = expandedTier === idx

                    return (
                        <Card
                            key={tier.id}
                            className="overflow-hidden border border-border shadow-sm text-left transition-all duration-200"
                        >
                            {/* Card Banner Image */}
                            <div className="relative h-44 sm:h-52 w-full overflow-hidden">
                                <img
                                    src={tier.image}
                                    alt={tier.title}
                                    className="w-full h-full object-cover brightness-[0.8]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-inverted via-inverted/30 to-transparent" />

                                {/* Top Badges */}
                                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                                    <span className="inline-flex items-center right-4 gap-1 text-[10px] bg-black/60 backdrop-blur-xs text-white px-2.5 py-0.5 rounded-full font-medium">
                                        <Clock className="w-3 h-3" />
                                        {tier.duration}
                                    </span>
                                </div>

                                {/* Title & Price overlay */}
                                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                                    <div>
                                        <span className="text-[9px] uppercase tracking-wider font-bold text-inverted-muted">

                                        </span>
                                        <h3 className="text-base sm:text-lg font-bold text-inverted-foreground leading-tight">
                                            {tier.title}
                                        </h3>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[9px] uppercase tracking-wider font-semibold text-inverted-muted block">
                                            STARTS AT
                                        </span>
                                        <span className="text-lg font-bold text-inverted-foreground leading-none">
                                            {tier.price}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-4 flex flex-col gap-3.5">
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    {tier.desc}
                                </p>

                                {/* Highlights Icons */}
                                <div className="grid grid-cols-3 gap-1.5 py-2 px-1 bg-muted rounded-xl border border-border-subtle text-center">
                                    {tier.highlights.map((h, i) => (
                                        <div key={i} className="flex flex-col items-center justify-center p-1">
                                            <span className="text-[10px] font-bold text-foreground leading-tight">
                                                {h.label}
                                            </span>
                                            <span className="text-[8px] text-muted-foreground mt-0.5 leading-tight">
                                                {h.desc}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* What's Included Accordion Trigger */}
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => toggleExpand(idx)}
                                        className="w-full flex items-center justify-between py-1.5 text-xs font-bold text-foreground hover:text-primary transition-colors cursor-pointer select-none"
                                    >
                                        <span>
                                            What&apos;s Included ({tier.pointsCount} Points)
                                        </span>
                                        {isExpanded ? (
                                            <ChevronUp className="w-4 h-4 text-primary" />
                                        ) : (
                                            <ChevronDown className="w-4 h-4 text-muted-foreground" />
                                        )}
                                    </button>

                                    {/* Accordion Body */}
                                    {isExpanded && (
                                        <div className="mt-2 pt-2 border-t border-border-subtle flex flex-col gap-1.5 animate-in fade-in duration-150">
                                            {tier.points.map((pt, pIdx) => (
                                                <div key={pIdx} className="flex items-start gap-2 text-left">
                                                    <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                                    <span className="text-xs text-muted-foreground leading-tight">
                                                        {pt}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Direct Action Buttons with Service Detail & Booking Links */}
                                <div className="grid grid-cols-2 gap-2 pt-1">
                                    <Link
                                        to={`/services/${tier.id}`}
                                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold bg-muted hover:bg-border-subtle text-foreground border border-outline transition-colors"
                                    >
                                        <span>View Details</span>
                                        <ArrowRight className="w-3 h-3 text-muted-foreground" />
                                    </Link>
                                    <Link
                                        to={`/booking?treatment=${tier.id}`}
                                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold bg-primary hover:bg-primary-hover text-primary-foreground transition-colors shadow-xs"
                                    >
                                        <span>Book Tier</span>
                                        <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>

                                <div className="pt-1 flex flex-col gap-1.5 border-t border-border-subtle">
                                    <a
                                        href={`sms:${BUSINESS_INFO.rawPhone}?&body=Hi%20Jax%20Detail,%20I%20would%20like%20a%20quote%20for%20the%20${encodeURIComponent(tier.title)}`}
                                        className="w-full inline-flex items-center justify-center gap-2 py-2 text-xs font-semibold text-primary hover:underline"
                                    >
                                        <MessageSquare className="w-3.5 h-3.5" />
                                        <span>Text Photo for Instant Quote</span>
                                    </a>
                                </div>
                            </div>
                        </Card>
                    )
                })}
            </div>

            {/* Need Advice Banner Card */}
            <Card className="p-4 bg-muted border-none text-left">
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-primary-subtle text-primary flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-foreground">Need advice on fit?</h4>
                        <p className="text-[11px] text-muted-foreground mt-0.5">
                            We reply within 15 minutes during operating hours.
                        </p>
                    </div>
                </div>

                <div className="mt-3 p-3 bg-card rounded-xl border border-border-subtle">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-primary block">
                        Fastest Way to Book
                    </span>
                    <p className="text-[11px] text-muted-foreground mt-1">
                        Snap a quick photo of your interior seats, floor carpets, or paint condition. Text it straight to our lead detailer for an immediate component quote.
                    </p>

                    <a
                        href={`sms:${BUSINESS_INFO.rawPhone}?&body=Hi,%20I'm%20sharing%20photos%20of%20my%20vehicle%20for%20an%20instant%20quote.`}
                        className="mt-2.5 inline-flex items-center justify-between w-full px-3 py-2 bg-muted hover:bg-border-subtle rounded-lg text-xs font-semibold text-foreground transition-colors"
                    >
                        <span className="flex items-center gap-2">
                            <MessageSquare className="w-3.5 h-3.5 text-primary" />
                            <span>Launch SMS with Photo</span>
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
                    </a>
                </div>
            </Card>
        </div>
    )
}

export default Services
