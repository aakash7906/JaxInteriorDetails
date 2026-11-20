import React, { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Camera, Check, ShieldCheck, MapPin, Sparkles, Send, Phone, MessageSquare, Car, ArrowLeft, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { SITE_IMAGES, BUSINESS_INFO, SERVICES_DATA } from '@/data/siteData'

export const Booking: React.FC = () => {
  const [searchParams] = useSearchParams()
  const initialTreatment = searchParams.get('treatment') || 'interior-detailing'

  // Booking form step state: 1: Selection, 2: Details & Review, 3: Confirmation
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1)

  const [selectedTreatment, setSelectedTreatment] = useState<string>(initialTreatment)
  const [vehiclePlatform, setVehiclePlatform] = useState<'sedan' | 'suv' | 'truck' | 'van'>('suv')
  const [fullName, setFullName] = useState('Sterling Archer')
  const [phoneNumber, setPhoneNumber] = useState('(904) 555-0199')
  const [email, setEmail] = useState('sterling@curator.com')
  const [address, setAddress] = useState('32256 or Ponte Vedra Beach')
  const [preferredDate, setPreferredDate] = useState('Tomorrow Afternoon')
  const [photoAttached, setPhotoAttached] = useState(false)

  // Update selected treatment if URL param changes
  useEffect(() => {
    const t = searchParams.get('treatment')
    if (t) setSelectedTreatment(t)
  }, [searchParams])

  const treatments = [
    { id: 'interior-detailing', title: 'Interior Detailing', desc: 'Deep extraction ($180)' },
    { id: 'exterior-detailing', title: 'Exterior Detailing', desc: 'Paint & gloss care ($140)' },
    { id: 'the-full-works', title: 'Full Works', desc: 'Master restoration ($310)' },
    { id: 'consultation', title: 'Not Sure', desc: 'In-person consultation' },
  ]

  const platforms = [
    { id: 'sedan', label: 'Sedan / Coupe' },
    { id: 'suv', label: 'SUV / Crossover' },
    { id: 'truck', label: 'Truck' },
    { id: 'van', label: 'Van / 3-Row' },
  ]

  const selectedTierObj = SERVICES_DATA.find((s) => s.id === selectedTreatment)

  const handleNextToReview = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep(2)
  }

  const handleConfirmBooking = () => {
    setCurrentStep(3)
  }

  return (
    <div className="flex flex-col gap-5 pb-8 animate-in fade-in duration-200 text-left">
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-primary-subtle/70 to-transparent p-4 rounded-3xl border border-border-subtle">
        <Badge variant="subtle" size="sm" className="mb-2">
          Mobile Atelier
        </Badge>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
          Mobile Detailing That Comes To You
        </h2>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
          No waiting in shop lines. We bring the studio to your driveway in Jacksonville.
        </p>

        {/* Quick Contact Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <a
            href={`tel:${BUSINESS_INFO.rawPhone}`}
            className="flex flex-col items-center justify-center p-3 rounded-2xl bg-card border border-outline shadow-2xs hover:bg-muted transition-colors text-center"
          >
            <Phone className="w-4 h-4 text-primary mb-1" />
            <span className="text-[11px] font-bold text-foreground">Call Direct</span>
            <span className="text-[9px] text-muted-foreground">{BUSINESS_INFO.phone}</span>
          </a>

          <a
            href={`sms:${BUSINESS_INFO.rawPhone}`}
            className="flex flex-col items-center justify-center p-3 rounded-2xl bg-card border border-outline shadow-2xs hover:bg-muted transition-colors text-center"
          >
            <MessageSquare className="w-4 h-4 text-primary mb-1" />
            <span className="text-[11px] font-bold text-foreground">Text Us</span>
            <span className="text-[9px] text-muted-foreground">{BUSINESS_INFO.phone}</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-1.5 mt-3 text-[10px] text-muted-foreground font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-success" />
          <span>Replies Mon–Fri, 9:00 AM–6:00 PM ET</span>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              currentStep === 1
                ? 'bg-primary text-primary-foreground'
                : 'bg-primary-subtle text-primary'
            }`}
          >
            1
          </div>
          <span className="text-xs font-semibold text-foreground">Selection</span>
        </div>
        <div className="w-8 h-0.5 bg-border-subtle" />
        <div className="flex items-center gap-2">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              currentStep === 2
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            }`}
          >
            2
          </div>
          <span className="text-xs font-semibold text-foreground">Review</span>
        </div>
        <div className="w-8 h-0.5 bg-border-subtle" />
        <div className="flex items-center gap-2">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              currentStep === 3
                ? 'bg-success text-white'
                : 'bg-muted text-muted-foreground'
            }`}
          >
            3
          </div>
          <span className="text-xs font-semibold text-foreground">Confirmed</span>
        </div>
      </div>

      {/* Step 1: Selection Form */}
      {currentStep === 1 && (
        <Card className="p-4 sm:p-5">
          <form onSubmit={handleNextToReview} className="flex flex-col gap-4">
            {/* Step 1.1: Treatment Selection */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-primary-subtle text-primary text-[10px] font-bold flex items-center justify-center">
                    1
                  </span>
                  <span className="text-xs font-bold text-foreground">
                    Select Treatment
                  </span>
                </div>
                <span className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Required
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {treatments.map((t) => {
                  const isSelected = selectedTreatment === t.id

                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTreatment(t.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-primary text-primary-foreground border-primary shadow-xs'
                          : 'bg-card text-foreground border-outline hover:bg-muted'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold">{t.title}</span>
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <span
                        className={`text-[10px] block mt-0.5 ${
                          isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'
                        }`}
                      >
                        {t.desc}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 1.2: Vehicle Platform */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-primary-subtle text-primary text-[10px] font-bold flex items-center justify-center">
                    2
                  </span>
                  <span className="text-xs font-bold text-foreground">
                    Vehicle Platform
                  </span>
                </div>
                <span className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Required
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {platforms.map((p) => {
                  const isSelected = vehiclePlatform === p.id

                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setVehiclePlatform(p.id as any)}
                      className={`px-3 py-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-primary text-primary-foreground border-primary shadow-xs'
                          : 'bg-card text-foreground border-outline hover:bg-muted'
                      }`}
                    >
                      <span className="text-xs font-semibold">{p.label}</span>
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 1.3: Contact & Location */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-primary-subtle text-primary text-[10px] font-bold flex items-center justify-center">
                    3
                  </span>
                  <span className="text-xs font-bold text-foreground">
                    Contact & Location
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <div>
                  <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-muted border border-outline rounded-xl px-3 py-2 text-xs text-foreground outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-muted border border-outline rounded-xl px-3 py-2 text-xs text-foreground outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-muted border border-outline rounded-xl px-3 py-2 text-xs text-foreground outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1">
                    Jacksonville Address or Zip Code
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 32256 or Ponte Vedra Beach"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-muted border border-outline rounded-xl px-3 py-2 text-xs text-foreground outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            {/* Optional Photo Attachment */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-primary" />
                  Instant Assessment Photo
                </span>
                <span className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Optional
                </span>
              </div>

              <div
                onClick={() => setPhotoAttached(!photoAttached)}
                className={`p-4 border-2 border-dashed rounded-2xl text-center cursor-pointer transition-colors ${
                  photoAttached
                    ? 'border-success bg-success-bg text-success'
                    : 'border-outline bg-muted/50 hover:bg-muted text-muted-foreground'
                }`}
              >
                {photoAttached ? (
                  <div className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-success" />
                    <span className="text-xs font-semibold">1 Cabin Photo Attached</span>
                  </div>
                ) : (
                  <div>
                    <Camera className="w-5 h-5 mx-auto text-muted-foreground mb-1" />
                    <p className="text-xs font-semibold text-foreground">Tap to attach stain or cabin photo</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      Allows precise quote calibration in minutes
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Next Button */}
            <div className="pt-2">
              <Button type="submit" variant="primary" fullWidth size="lg">
                <span>Review Appointment Summary</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <p className="text-[10px] text-center text-muted-foreground mt-2">
                Your information is kept strictly confidential and only used for your booking dispatch.
              </p>
            </div>
          </form>
        </Card>
      )}

      {/* Step 2: Review Screen */}
      {currentStep === 2 && (
        <Card className="p-4 sm:p-5">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-border-subtle">
            <button
              onClick={() => setCurrentStep(1)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Edit Details
            </button>
            <Badge variant="subtle" size="sm">
              Review Before Dispatch
            </Badge>
          </div>

          <h3 className="text-sm font-bold text-foreground mb-3">
            Appointment Summary
          </h3>

          <div className="flex flex-col gap-2.5 bg-muted p-3.5 rounded-xl border border-border-subtle">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Selected Service:</span>
              <span className="font-bold text-foreground">
                {selectedTierObj ? selectedTierObj.title : 'Custom Consultation'}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Vehicle Platform:</span>
              <span className="font-bold text-foreground uppercase">{vehiclePlatform}</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Base Starting Rate:</span>
              <span className="font-bold text-primary">
                {selectedTierObj ? selectedTierObj.price : 'Custom Quote'}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Client Name:</span>
              <span className="font-medium text-foreground">{fullName}</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Phone:</span>
              <span className="font-medium text-foreground">{phoneNumber}</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Dispatch Location:</span>
              <span className="font-medium text-foreground">{address}</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Photo Attached:</span>
              <span className="font-medium text-foreground">
                {photoAttached ? 'Yes (1 photo)' : 'None (standard inspection)'}
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <Button
              onClick={handleConfirmBooking}
              variant="primary"
              fullWidth
              size="lg"
            >
              <Check className="w-4 h-4 mr-1 stroke-[3]" />
              <span>Confirm & Dispatch Mobile Booking</span>
            </Button>
            <button
              onClick={() => setCurrentStep(1)}
              className="text-xs text-muted-foreground hover:text-foreground py-1 text-center"
            >
              Make Changes
            </button>
          </div>
        </Card>
      )}

      {/* Step 3: Success Confirmation Screen */}
      {currentStep === 3 && (
        <Card className="p-6 text-center">
          <div className="w-14 h-14 rounded-full bg-success-bg text-success mx-auto flex items-center justify-center mb-3">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>
          <h3 className="text-base font-bold text-foreground">
            Mobile Booking Dispatched!
          </h3>
          <p className="text-xs text-muted-foreground mt-1 max-w-xs mx-auto leading-relaxed">
            Thank you, <strong className="text-foreground">{fullName}</strong>. Our Jacksonville lead detailer has received your request for <strong>{selectedTierObj?.title}</strong> and will text your confirmation shortly.
          </p>

          <div className="mt-4 p-3 bg-muted rounded-xl border border-border-subtle text-left text-xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-1">
              Next Steps
            </span>
            <ul className="text-muted-foreground space-y-1 text-[11px]">
              <li>• We reply to your phone number: {phoneNumber}</li>
              <li>• Zero prep needed from you; our rig brings pure water & electricity.</li>
              <li>• Guaranteed on-time arrival within Jacksonville & 30-mile radius.</li>
            </ul>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <Button
              onClick={() => setCurrentStep(1)}
              variant="outline"
              fullWidth
            >
              Book Another Service
            </Button>
            <Link
              to="/gallery"
              className="text-xs text-primary font-semibold hover:underline mt-1"
            >
              View Client Transformations &gt;
            </Link>
          </div>
        </Card>
      )}

      {/* Precision Craftsmanship Preview */}
      <div>
        <div className="flex items-center justify-between mb-2 px-0.5">
          <h3 className="text-sm font-bold text-foreground">
            Precision Craftsmanship
          </h3>
          <a
            href={`sms:${BUSINESS_INFO.rawPhone}`}
            className="text-[10px] font-semibold text-primary hover:underline"
          >
            TEXT PHOTO &gt;
          </a>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <Card className="overflow-hidden p-2 text-left">
            <div className="h-24 rounded-lg overflow-hidden mb-1.5">
              <img
                src={SITE_IMAGES.heroInterior}
                alt="Full Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[11px] font-bold text-foreground block">
              Full Interior
            </span>
            <span className="text-[9px] text-muted-foreground">Matte leather finish</span>
          </Card>

          <Card className="overflow-hidden p-2 text-left">
            <div className="h-24 rounded-lg overflow-hidden mb-1.5">
              <img
                src={SITE_IMAGES.leatherCare}
                alt="Crevice Detailing"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[11px] font-bold text-foreground block">
              Crevice Detailing
            </span>
            <span className="text-[9px] text-muted-foreground">Microfiber extraction</span>
          </Card>
        </div>
      </div>

      {/* Map / Coverage Card */}
      <Card className="p-4 text-left">
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-[9px] uppercase tracking-wider font-bold text-primary">
              Service Coverage
            </span>
            <h4 className="text-xs font-bold text-foreground">
              Greater Jacksonville Region
            </h4>
          </div>
          <div className="w-6 h-6 rounded-lg bg-primary-subtle text-primary flex items-center justify-center">
            <MapPin className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Jacksonville stylised map visual */}
        <div className="h-32 rounded-xl bg-sky-50 border border-sky-100 overflow-hidden relative flex items-center justify-center">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:12px_12px]" />
          <div className="relative text-center z-10">
            <div className="w-7 h-7 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md animate-bounce">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-stone-800 bg-white/80 backdrop-blur-xs px-2 py-0.5 rounded-full mt-1 inline-block border border-stone-200">
              Jacksonville Mobile HQ
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-border-subtle text-center">
          <div>
            <span className="text-xs font-bold text-foreground block">30 mi</span>
            <span className="text-[9px] text-muted-foreground">Radius</span>
          </div>
          <div>
            <span className="text-xs font-bold text-foreground block">Zero</span>
            <span className="text-[9px] text-muted-foreground">Shop Wait</span>
          </div>
          <div>
            <span className="text-xs font-bold text-foreground block">100%</span>
            <span className="text-[9px] text-muted-foreground">Mobile Unit</span>
          </div>
        </div>
      </Card>

      {/* Rating Footer Strip */}
      <div className="p-3 bg-card rounded-2xl border border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-primary" />
          </div>
          <div>
            <span className="text-xs font-bold text-foreground block leading-tight">
              5.0 ★ Google Rated
            </span>
            <span className="text-[9px] text-muted-foreground">
              Jacksonville & 30 mi radius • Pure Driveway Care
            </span>
          </div>
        </div>
        <span className="text-[9px] font-bold text-success bg-success-bg px-2 py-1 rounded-lg">
          Licensed & Insured
        </span>
      </div>
    </div>
  )
}

export default Booking
