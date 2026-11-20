import React, { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Check,
  Send,
  Phone,
  MessageSquare,
  ShieldCheck,
  Car
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Select } from '@/components/ui/Select'
import { Sheet } from '@/components/ui/Sheet'
import { SERVICES_DATA, BUSINESS_INFO } from '@/data/siteData'

export const Booking: React.FC = () => {
  const [searchParams] = useSearchParams()
  const initialTreatment = searchParams.get('treatment') || 'interior-detailing'

  // Booking Form Fields
  const [treatment, setTreatment] = useState(initialTreatment)
  const [leadDetailer, setLeadDetailer] = useState('paul-lead')
  const [vehiclePlatform, setVehiclePlatform] = useState('suv')
  const [preferredTime, setPreferredTime] = useState<'morning' | 'afternoon'>('morning')
  const [notes, setNotes] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Calendar State
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [selectedDay, setSelectedDay] = useState(25)
  const [selectedMonth] = useState('November')
  const [selectedYear] = useState(2026)

  // Sync treatment param if changed
  useEffect(() => {
    const t = searchParams.get('treatment')
    if (t) setTreatment(t)
  }, [searchParams])

  // Treatment dropdown options
  const treatmentOptions = [
    { value: 'interior-detailing', label: 'Interior Detailing (Specialty) — $180' },
    { value: 'exterior-detailing', label: 'Exterior Hand Wash & Seal — $140' },
    { value: 'the-full-works', label: 'The Full Works (Complete Package) — $310' },
    { value: 'custom-consultation', label: 'Free Mobile Consultation' },
  ]

  // Lead specialist options
  const detailerOptions = [
    { value: 'paul-lead', label: 'Paul Ceki (Master Lead Detailer)' },
    { value: 'crew-alpha', label: 'Mobile Studio Rig Alpha (Jacksonville East)' },
    { value: 'crew-beta', label: 'Mobile Studio Rig Beta (Ponte Vedra / St. Johns)' },
  ]

  // Vehicle platform options
  const platformOptions = [
    { value: 'sedan', label: 'Sedan / Coupe' },
    { value: 'suv', label: 'SUV / Crossover' },
    { value: 'truck', label: 'Truck / Pickup' },
    { value: 'van', label: 'Van / 3-Row Wagon' },
  ]

  // Calendar days generation (November 2026 starts on Sunday)
  const daysOfWeek = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']
  const daysInNov = Array.from({ length: 30 }, (_, i) => i + 1)

  // Formatted date string
  const formattedDate = `Wed, Nov ${selectedDay}, ${selectedYear}`
  const selectedTimeLabel =
    preferredTime === 'morning'
      ? 'Morning (8:30 AM – 12:00 PM)'
      : 'Afternoon (1:00 PM – 4:30 PM)'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
    }, 4500)
  }

  const selectedTier = SERVICES_DATA.find((s) => s.id === treatment)

  return (
    <div className="flex flex-col gap-5 pb-10 animate-in fade-in duration-200 text-left">
      {/* Top Mobile Studio Banner */}
      <div className="flex items-center justify-between bg-card border border-border px-3.5 py-2.5 rounded-2xl shadow-2xs">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <div>
            <span className="text-[10px] font-bold text-foreground block">
              MOBILE CAR WASH
            </span>
            <span className="text-[9px] text-muted-foreground font-medium">
              Jacksonville & within 30 miles • Driveway Service
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href={`tel:${BUSINESS_INFO.rawPhone}`}
            className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-border transition-colors"
            title="Call"
          >
            <Phone className="w-3.5 h-3.5 text-primary" />
          </a>
          <a
            href={`sms:${BUSINESS_INFO.rawPhone}`}
            className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-border transition-colors"
            title="Text"
          >
            <MessageSquare className="w-3.5 h-3.5 text-primary" />
          </a>
        </div>
      </div>

      {/* Main Booking Card (Exact UI Layout from reference image) */}
      <Card className="p-5 sm:p-6 border border-border shadow-xs">
        <div className="mb-4">
          <h2 className="text-base sm:text-lg font-bold text-foreground tracking-tight">
            Request New Appointment
          </h2>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            Choose your vehicle service, specialist & arrival window.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center justify-center gap-3">
            <div className="w-14 h-14 rounded-full bg-success-bg text-success flex items-center justify-center">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="text-base font-bold text-foreground">
              Appointment Request Sent!
            </h3>
            <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
              We received your request for <strong>{selectedTier?.title || 'Detaiing Service'}</strong> on{' '}
              <strong>{formattedDate}</strong> ({selectedTimeLabel}). Our Jacksonville dispatch will confirm via text.
            </p>

            <div className="mt-3 p-3 bg-muted rounded-xl border border-border-subtle text-left text-xs w-full">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-1">
                Booking Reference
              </span>
              <p className="text-[11px] text-muted-foreground">
                Zero prep needed. Our rig arrives fully equipped with filtered water & silent electricity.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* 1. Treatment Selector */}
            <div>
              <Select
                label="Treatment:"
                value={treatment}
                onChange={setTreatment}
                options={treatmentOptions}
              />
            </div>

            {/* 2. Lead Specialist / Rig Selector */}
            <div>
              <Select
                label="Lead Specialist / Dispatch Rig:"
                value={leadDetailer}
                onChange={setLeadDetailer}
                options={detailerOptions}
              />
            </div>

            {/* 3. Vehicle Platform */}
            <div>
              <Select
                label="Vehicle Platform:"
                value={vehiclePlatform}
                onChange={setVehiclePlatform}
                options={platformOptions}
              />
            </div>

            {/* 4. Preferred Date Trigger (Opens Sheet) */}
            <div>
              <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1">
                Preferred Date:
              </label>

              <button
                type="button"
                onClick={() => setIsCalendarOpen(true)}
                className="w-full bg-card hover:bg-muted border border-outline rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-foreground transition-all flex items-center justify-between shadow-2xs cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <CalendarIcon className="w-4 h-4 text-primary" />
                  <span className="font-semibold">{formattedDate}</span>
                </div>
                <span className="text-xs font-semibold text-primary group-hover:underline">
                  Pick Date
                </span>
              </button>
            </div>

            {/* 5. Preferred Time (Morning / Afternoon Pills) */}
            <div>
              <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1.5">
                Preferred Time
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {/* Morning Pill */}
                <button
                  type="button"
                  onClick={() => setPreferredTime('morning')}
                  className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                    preferredTime === 'morning'
                      ? 'bg-primary-subtle border-primary text-primary font-bold shadow-2xs'
                      : 'bg-card border-outline text-foreground hover:bg-muted'
                  }`}
                >
                  <span className="text-xs block font-bold leading-tight">
                    Morning
                  </span>
                  <span className="text-[10px] opacity-80 block mt-0.5">
                    (8:30 AM – 12:00 PM)
                  </span>
                </button>

                {/* Afternoon Pill */}
                <button
                  type="button"
                  onClick={() => setPreferredTime('afternoon')}
                  className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                    preferredTime === 'afternoon'
                      ? 'bg-primary-subtle border-primary text-primary font-bold shadow-2xs'
                      : 'bg-card border-outline text-foreground hover:bg-muted'
                  }`}
                >
                  <span className="text-xs block font-bold leading-tight">
                    Afternoon
                  </span>
                  <span className="text-[10px] opacity-80 block mt-0.5">
                    (1:00 PM – 4:30 PM)
                  </span>
                </button>
              </div>
            </div>

            {/* 6. Symptoms or Specific Notes */}
            <div>
              <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1">
                Vehicle Condition or Specific Notes:
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Stubborn coffee stain on driver seat, beach sand extraction in trunk, or gate access code..."
                className="w-full bg-card border border-outline rounded-2xl p-3 text-xs text-foreground placeholder-text-placeholder outline-none focus:ring-1 focus:ring-primary resize-none shadow-2xs"
              />
            </div>

            {/* 7. Submit Button */}
            <div className="pt-1">
              <Button type="submit" variant="primary" fullWidth size="lg">
                <span>Submit Booking Request</span>
                <Send className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </form>
        )}
      </Card>


      {/* Appointment Calendar Sheet Component (exact layout from 2nd reference image) */}
      <Sheet
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        title="Appointment Calendar"
        subtitle="Select date"
        maxWidth="sm"
      >
        <div className="flex flex-col gap-3.5 text-left pt-1">
          {/* Calendar Card Container */}
          <div className="p-3.5 rounded-2xl border border-border bg-card shadow-2xs">
            {/* Calendar Header Month & Year */}
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-border-subtle">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-primary" />
                <span className="text-xs sm:text-sm font-bold text-foreground">
                  {selectedMonth} {selectedYear}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className="w-7 h-7 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                  aria-label="Previous month"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  className="w-7 h-7 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                  aria-label="Next month"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Days of week header */}
            <div className="grid grid-cols-7 text-center mb-1.5">
              {daysOfWeek.map((day) => (
                <span
                  key={day}
                  className="text-[10px] font-bold text-muted-foreground uppercase"
                >
                  {day}
                </span>
              ))}
            </div>

            {/* Calendar Grid Numbers */}
            <div className="grid grid-cols-7 gap-1 text-center">
              {daysInNov.map((day) => {
                const isSelected = selectedDay === day

                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={`h-8 w-8 mx-auto rounded-full text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-primary text-primary-foreground shadow-xs font-bold'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {day}
                  </button>
                )
              })}
            </div>

            {/* Active Legend */}
            <div className="flex items-center justify-between pt-3 mt-2 border-t border-border-subtle text-[11px]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">Scheduled Visit</span>
              </div>
              <span className="font-bold text-foreground">
                Nov {selectedDay}, {selectedYear}
              </span>
            </div>
          </div>

          {/* Selected Date & Window Summary Card */}
          <div className="p-3 bg-muted rounded-2xl border border-border-subtle flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                Selected Date:
              </span>
              <span className="text-xs font-bold text-foreground">
                {formattedDate}
              </span>
            </div>

           

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="truncate">Client Address: Jacksonville & within 30 miles</span>
            </div>
          </div>

          {/* Sheet Confirmation Actions */}
          <div className="flex flex-col gap-2 pt-1">
            <Button
              type="button"
              variant="primary"
              fullWidth
              size="md"
              onClick={() => setIsCalendarOpen(false)}
            >
              <Check className="w-4 h-4 mr-1 stroke-[3]" />
              <span>Confirm & Set Date</span>
            </Button>

            <Button
              type="button"
              variant="outline"
              fullWidth
              size="sm"
              onClick={() => setIsCalendarOpen(false)}
            >
              Close Calendar
            </Button>
          </div>
        </div>
      </Sheet>
    </div>
  )
}

export default Booking
