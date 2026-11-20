import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Check } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { BUSINESS_INFO } from '@/data/siteData'

export const Contact: React.FC = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="flex flex-col gap-5 pb-8 animate-in fade-in duration-200 text-left">
      {/* Intro Header */}
      <div className="px-0.5">
        <Badge variant="subtle" size="sm" className="mb-1.5">
          Get In Touch
        </Badge>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
          Direct Client Concierge
        </h2>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
          Questions about service fit, vehicle condition, or scheduling? Reach our Jacksonville team anytime.
        </p>
      </div>

      {/* Quick Direct Actions */}
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={`tel:${BUSINESS_INFO.rawPhone}`}
          className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-card border border-outline shadow-2xs hover:bg-muted transition-colors text-center"
        >
          <div className="w-8 h-8 rounded-full bg-primary-subtle text-primary flex items-center justify-center mb-1.5">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-foreground">Call Directly</span>
          <span className="text-[10px] text-muted-foreground mt-0.5">{BUSINESS_INFO.phone}</span>
        </a>

        <a
          href={`sms:${BUSINESS_INFO.rawPhone}`}
          className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-card border border-outline shadow-2xs hover:bg-muted transition-colors text-center"
        >
          <div className="w-8 h-8 rounded-full bg-primary-subtle text-primary flex items-center justify-center mb-1.5">
            <MessageSquare className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-foreground">Text Photo</span>
          <span className="text-[10px] text-muted-foreground mt-0.5">Instant Quote</span>
        </a>
      </div>

      {/* Business Details Info Card */}
      <Card className="p-4 flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-foreground block">Mobile Service Zone</span>
            <p className="text-[11px] text-muted-foreground leading-snug">
              {BUSINESS_INFO.address}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 pt-2.5 border-t border-border-subtle">
          <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-foreground block">Operating Hours</span>
            <p className="text-[11px] text-muted-foreground leading-snug">
              {BUSINESS_INFO.hours}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 pt-2.5 border-t border-border-subtle">
          <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div>
            <span className="text-xs font-bold text-foreground block">Email Inquiries</span>
            <p className="text-[11px] text-muted-foreground leading-snug">
              {BUSINESS_INFO.email}
            </p>
          </div>
        </div>
      </Card>

      {/* Contact Form */}
      <Card className="p-4 sm:p-5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-1">
          Send a Note
        </span>
        <h3 className="text-sm font-bold text-foreground mb-3">
          Leave Us a Message
        </h3>

        {submitted ? (
          <div className="py-6 text-center flex flex-col items-center justify-center gap-2 bg-success-bg p-4 rounded-xl border border-success/20">
            <Check className="w-6 h-6 text-success" />
            <span className="text-xs font-bold text-success">
              Message dispatched successfully!
            </span>
            <p className="text-[10px] text-muted-foreground">
              We respond promptly during active hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
            <div>
              <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="w-full bg-muted border border-outline rounded-xl px-3 py-2 text-xs text-foreground outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(904) 000-0000"
                  className="w-full bg-muted border border-outline rounded-xl px-3 py-2 text-xs text-foreground outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="w-full bg-muted border border-outline rounded-xl px-3 py-2 text-xs text-foreground outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1">
                Message / Vehicle Needs
              </label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your vehicle type or specific cleaning requirements..."
                className="w-full bg-muted border border-outline rounded-xl px-3 py-2 text-xs text-foreground outline-none focus:ring-1 focus:ring-primary resize-none"
              />
            </div>

            <Button type="submit" variant="primary" fullWidth className="mt-1">
              <span>Send Message</span>
              <Send className="w-3.5 h-3.5 ml-1" />
            </Button>
          </form>
        )}
      </Card>
    </div>
  )
}

export default Contact
