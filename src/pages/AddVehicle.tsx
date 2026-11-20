import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Car, Check, Plus, ShieldCheck, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Select } from '@/components/ui/Select'

export interface Vehicle {
  id: string
  make: string
  model: string
  year: string
  bodyType: string
  color: string
  licensePlate?: string
  isDefault: boolean
}

interface AddVehicleProps {
  onVehicleAdded?: (vehicle: Vehicle) => void
}

export const AddVehicle: React.FC<AddVehicleProps> = ({ onVehicleAdded }) => {
  const navigate = useNavigate()

  const [make, setMake] = useState('Porsche')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('2024')
  const [bodyType, setBodyType] = useState('sedan')
  const [color, setColor] = useState('')
  const [plate, setPlate] = useState('')
  const [isDefault, setIsDefault] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const bodyTypes = [
    { value: 'sedan', label: 'Sedan / Coupe' },
    { value: 'suv', label: 'SUV / Crossover' },
    { value: 'truck', label: 'Truck / Pickup' },
    { value: 'van', label: 'Van / 3-Row Wagon' },
    { value: 'sports', label: 'Sports / Convertible' },
  ]

  const popularMakes = [
    'Porsche',
    'BMW',
    'Mercedes-Benz',
    'Audi',
    'Land Rover',
    'Tesla',
    'Lexus',
    'Toyota',
    'Ford',
    'Chevrolet',
  ]

  const years = Array.from({ length: 25 }, (_, i) => String(2025 - i))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!model.trim()) return

    const newVeh: Vehicle = {
      id: Date.now().toString(),
      make,
      model: model.trim(),
      year,
      bodyType,
      color: color.trim() || 'Not specified',
      licensePlate: plate.trim() || undefined,
      isDefault,
    }

    // Save to localStorage for mock persistence
    try {
      const existing = JSON.parse(localStorage.getItem('jax_saved_vehicles') || '[]')
      const updated = isDefault
        ? existing.map((v: Vehicle) => ({ ...v, isDefault: false })).concat([newVeh])
        : existing.concat([newVeh])
      localStorage.setItem('jax_saved_vehicles', JSON.stringify(updated))
    } catch {
      // fallback
    }

    if (onVehicleAdded) {
      onVehicleAdded(newVeh)
    }

    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      navigate('/profile')
    }, 1400)
  }

  return (
    <div className="flex flex-col gap-5 pb-10 animate-in fade-in duration-200 text-left">
      {/* Top Header Bar */}
      <div className="relative flex items-center justify-center py-2 px-1">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 w-10 h-10 rounded-full border border-border bg-card hover:bg-muted flex items-center justify-center text-foreground transition-colors shadow-2xs cursor-pointer"
          aria-label="Back"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h2 className="text-lg font-bold text-foreground">Add Vehicle</h2>
      </div>

      {/* Intro Banner */}
      <div className="px-1">
        <h3 className="text-xl font-bold text-foreground tracking-tight">
          Register Your Vehicle
        </h3>
      </div>

      {/* Main Form Card */}
      <Card className="p-4 sm:p-5 border border-border shadow-xs">
        {isSubmitted ? (
          <div className="py-8 text-center flex flex-col items-center justify-center gap-3">
            <div className="w-14 h-14 rounded-full bg-success-bg text-success flex items-center justify-center">
              <Check className="w-7 h-7 stroke-[3]" />
            </div>
            <h4 className="text-base font-bold text-foreground">Vehicle Registered!</h4>
            <p className="text-xs text-muted-foreground max-w-xs">
              {year} {make} {model} has been saved to your profile garage.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Quick Make Selection Chips */}
            <div>
              <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1.5">
                Popular Makes
              </label>
              <div className="flex flex-wrap gap-1.5">
                {popularMakes.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMake(m)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      make === m
                        ? 'bg-primary text-primary-foreground shadow-2xs'
                        : 'bg-muted hover:bg-border text-foreground border border-border-subtle'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Make & Year row */}
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1">
                  Manufacturer Make
                </label>
                <input
                  type="text"
                  required
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  placeholder="e.g. Porsche, BMW"
                  className="w-full bg-muted border border-outline rounded-xl px-3 py-2 text-xs text-foreground outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <Select
                  label="MODEL YEAR"
                  value={year}
                  onChange={setYear}
                  options={years}
                />
              </div>
            </div>

            {/* Model Name */}
            <div>
              <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1">
                Model & Trim
              </label>
              <input
                type="text"
                required
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="e.g. 911 GT3, M4 Competition, Range Rover SV"
                className="w-full bg-muted border border-outline rounded-xl px-3 py-2 text-xs text-foreground outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Body Type Selector */}
            <div>
              <Select
                label="VEHICLE BODY TYPE"
                value={bodyType}
                onChange={setBodyType}
                options={bodyTypes}
              />
            </div>

            {/* Color & License Plate */}
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1">
                  Exterior Color
                </label>
                <input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  placeholder="e.g. Chalk, Gentian Blue"
                  className="w-full bg-muted border border-outline rounded-xl px-3 py-2 text-xs text-foreground outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1">
                  License Plate (Optional)
                </label>
                <input
                  type="text"
                  value={plate}
                  onChange={(e) => setPlate(e.target.value)}
                  placeholder="e.g. FL 748-JAX"
                  className="w-full bg-muted border border-outline rounded-xl px-3 py-2 text-xs text-foreground outline-none focus:ring-1 focus:ring-primary uppercase"
                />
              </div>
            </div>

            {/* Default Vehicle Toggle */}
            <div
              onClick={() => setIsDefault(!isDefault)}
              className="flex items-center justify-between p-3 bg-muted rounded-xl border border-border-subtle cursor-pointer select-none"
            >
              <div className="flex items-center gap-2.5">
                <Car className="w-4 h-4 text-primary" />
                <div>
                  <span className="text-xs font-semibold text-foreground block">
                    Set as Primary Vehicle
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    Pre-selects this vehicle for instant bookings
                  </span>
                </div>
              </div>

              <div
                className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                  isDefault
                    ? 'bg-primary border-primary text-primary-foreground'
                    : 'border-outline bg-card'
                }`}
              >
                {isDefault && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col gap-2.5">
              <Button type="submit" variant="primary" fullWidth size="lg">
                <Plus className="w-4 h-4 mr-1 stroke-[2.5]" />
                <span>Save Vehicle to Profile</span>
              </Button>

              <Button
                type="button"
                variant="outline"
                fullWidth
                size="md"
                onClick={() => navigate(-1)}
                className="border-outline hover:bg-muted text-foreground transition-all"
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </Card>
    </div>
  )
}

export default AddVehicle
