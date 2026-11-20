import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  ArrowLeft,
  User,
  Pencil,
  Car,
  MapPin,
  Truck,
  Bell,
  Headphones,
  Info,
  ChevronRight,
  LogOut,
  Check,
  Plus,
  Trash2
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { AlertDialog } from '@/components/ui/Dialog'

export const Profile: React.FC = () => {
  const navigate = useNavigate()

  // User profile state
  const [userName, setUserName] = useState('Sterling Archer')
  const [userEmail, setUserEmail] = useState('sterling@curator.com')
  const [userCity, setUserCity] = useState('Jacksonville, FL')
  const [savedVehicles, setSavedVehicles] = useState<string[]>([
    '2023 Porsche 911 GT3',
  ])

  // Sync with localStorage if available
  useEffect(() => {
    try {
      const stored = localStorage.getItem('jax_saved_vehicles')
      if (stored) {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed) && parsed.length > 0) {
          setSavedVehicles(parsed.map((v: any) => `${v.year} ${v.make} ${v.model}`))
        }
      }
    } catch {
      // fallback
    }
  }, [])

  // Dialog states for editing profile / adding vehicle
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [editName, setEditName] = useState(userName)
  const [editEmail, setEditEmail] = useState(userEmail)
  const [editCity, setEditCity] = useState(userCity)

  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false)
  const [newVehicle, setNewVehicle] = useState('')

  const [isOrdersModalOpen, setIsOrdersModalOpen] = useState(false)
  const [isNotifModalOpen, setIsNotifModalOpen] = useState(false)
  const [isLoggedOut, setIsLoggedOut] = useState(false)

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault()
    setUserName(editName)
    setUserEmail(editEmail)
    setUserCity(editCity)
    setIsEditOpen(false)
  }

  const handleQuickAddVehicle = (e: React.FormEvent) => {
    e.preventDefault()
    if (newVehicle.trim()) {
      const updated = [...savedVehicles, newVehicle.trim()]
      setSavedVehicles(updated)
      setNewVehicle('')
    }
  }

  const handleRemoveVehicle = (index: number) => {
    const updated = savedVehicles.filter((_, i) => i !== index)
    setSavedVehicles(updated)
  }

  const handleLogout = () => {
    setIsLoggedOut(true)
    setTimeout(() => {
      setIsLoggedOut(false)
      navigate('/')
    }, 1500)
  }

  return (
    <div className="flex flex-col gap-5 pb-10 animate-in fade-in duration-200 text-left">
      {/* Top Header Bar with circular back button and centered Title */}
      <div className="relative flex items-center justify-center py-2 px-1">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 w-10 h-10 rounded-full border border-border bg-card hover:bg-muted flex items-center justify-center text-foreground transition-colors shadow-2xs cursor-pointer"
          aria-label="Back"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h2 className="text-lg font-bold text-foreground">Profile</h2>
      </div>

      {/* User Info Card */}
      <Card className="p-4 sm:p-5 border border-border shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            {/* Avatar Circle with soft border */}
            <div className="w-14 h-14 rounded-full border-2 border-primary-border bg-primary-subtle text-primary flex items-center justify-center shrink-0">
              <User className="w-7 h-7 stroke-[1.8]" />
            </div>

            {/* Name and Email */}
            <div className="min-w-0">
              <h3 className="text-base font-bold text-foreground truncate">
                {userName}
              </h3>
              <p className="text-xs text-muted-foreground truncate">
                {userEmail}
              </p>
            </div>
          </div>

          {/* Edit Profile Button */}
          <button
            onClick={() => {
              setEditName(userName)
              setEditEmail(userEmail)
              setEditCity(userCity)
              setIsEditOpen(true)
            }}
            className="w-9 h-9 rounded-full bg-muted hover:bg-border-subtle flex items-center justify-center text-foreground transition-colors cursor-pointer shrink-0"
            aria-label="Edit Profile"
          >
            <Pencil className="w-4 h-4 text-foreground" />
          </button>
        </div>

        {/* Divider */}
        <div className="mt-4 pt-3.5 border-t border-border-subtle flex items-center justify-between text-xs">
          <Link
            to="/add-vehicle"
            className="flex items-center gap-2 text-primary hover:underline font-medium cursor-pointer"
          >
            <Car className="w-4 h-4 text-primary" />
            <span>
              {savedVehicles.length > 0 ? savedVehicles[0] : 'Add your vehicle'}
            </span>
          </Link>

          <div className="flex items-center gap-1 text-foreground font-medium">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="truncate max-w-[130px]">{userCity}</span>
          </div>
        </div>
      </Card>

      {/* Menu Navigation Card (List of Options) */}
      <Card className="p-2 sm:p-3 border border-border shadow-xs divide-y divide-border-subtle">
        {/* 1. Saved Vehicles */}
        <div
          onClick={() => setIsVehicleModalOpen(true)}
          className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/70 transition-colors cursor-pointer group"
        >
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-muted text-muted-foreground group-hover:text-primary flex items-center justify-center shrink-0 transition-colors">
              <Car className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-foreground">
                Saved Vehicles
              </h4>
              <p className="text-[11px] text-muted-foreground truncate">
                {savedVehicles.length > 0
                  ? `${savedVehicles.length} vehicle(s) registered`
                  : 'Add your vehicle'}
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-transform group-hover:translate-x-0.5" />
        </div>

        {/* 2. My Shop Orders */}
        <div
          onClick={() => setIsOrdersModalOpen(true)}
          className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/70 transition-colors cursor-pointer group"
        >
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-muted text-muted-foreground group-hover:text-primary flex items-center justify-center shrink-0 transition-colors">
              <Truck className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-foreground">
                My Shop Orders
              </h4>
              <p className="text-[11px] text-muted-foreground truncate">
                Track your product deliveries
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-transform group-hover:translate-x-0.5" />
        </div>

        {/* 3. Notifications */}
        <div
          onClick={() => setIsNotifModalOpen(true)}
          className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/70 transition-colors cursor-pointer group"
        >
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-muted text-muted-foreground group-hover:text-primary flex items-center justify-center shrink-0 transition-colors">
              <Bell className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-foreground">
                Notifications
              </h4>
              <p className="text-[11px] text-muted-foreground truncate">
                View service alerts & updates
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-transform group-hover:translate-x-0.5" />
        </div>

        {/* 4. Contact Us */}
        <Link
          to="/contact"
          className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/70 transition-colors cursor-pointer group"
        >
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-muted text-muted-foreground group-hover:text-primary flex items-center justify-center shrink-0 transition-colors">
              <Headphones className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-foreground">
                Contact Us
              </h4>
              <p className="text-[11px] text-muted-foreground truncate">
                Call, email or visit us in Jacksonville
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-transform group-hover:translate-x-0.5" />
        </Link>

        {/* 5. About Us */}
        <Link
          to="/about"
          className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/70 transition-colors cursor-pointer group"
        >
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-muted text-muted-foreground group-hover:text-primary flex items-center justify-center shrink-0 transition-colors">
              <Info className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-foreground">
                About Us
              </h4>
              <p className="text-[11px] text-muted-foreground truncate">
                Our story, mission & why choose us
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-transform group-hover:translate-x-0.5" />
        </Link>
      </Card>

      {/* Logout Button */}
      <div className="pt-2">
        <Button
          onClick={handleLogout}
          variant="outline"
          fullWidth
          size="lg"
          className="border-outline hover:bg-muted text-foreground flex items-center justify-center gap-2"
        >
          <LogOut className="w-4 h-4" />
          <span>{isLoggedOut ? 'Signing out...' : 'Logout'}</span>
        </Button>
      </div>

      {/* Edit Profile Modal Dialog */}
      <AlertDialog
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        title="Edit Profile"
        description="Update your driver details for Jacksonville mobile concierge."
        maxWidth="sm"
      >
        <form onSubmit={handleSaveProfile} className="flex flex-col gap-3 mt-3 text-left">
          <div>
            <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
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
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
              className="w-full bg-muted border border-outline rounded-xl px-3 py-2 text-xs text-foreground outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label className="text-[10px] font-semibold text-muted-foreground uppercase block mb-1">
              Service City / Area
            </label>
            <input
              type="text"
              required
              value={editCity}
              onChange={(e) => setEditCity(e.target.value)}
              className="w-full bg-muted border border-outline rounded-xl px-3 py-2 text-xs text-foreground outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 mt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsEditOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </div>
        </form>
      </AlertDialog>

      {/* Saved Vehicles Quick Dialog with Full Add Vehicle Link */}
      <AlertDialog
        isOpen={isVehicleModalOpen}
        onClose={() => setIsVehicleModalOpen(false)}
        title="Saved Vehicles"
        description="Vehicles configured for express mobile booking dispatch."
        maxWidth="sm"
      >
        <div className="flex flex-col gap-3 mt-2 text-left">
          {/* Active Vehicles list */}
          <div className="flex flex-col gap-2 max-h-48 overflow-y-auto">
            {savedVehicles.length === 0 ? (
              <p className="text-xs text-muted-foreground text-center py-2">
                No saved vehicles. Add one below.
              </p>
            ) : (
              savedVehicles.map((v, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2.5 bg-muted rounded-xl border border-border-subtle"
                >
                  <div className="flex items-center gap-2 min-w-0 pr-2">
                    <Car className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-xs font-semibold text-foreground truncate">
                      {v}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <Badge variant="subtle" size="sm">
                      ACTIVE
                    </Badge>
                    <button
                      type="button"
                      onClick={() => handleRemoveVehicle(i)}
                      className="p-1 rounded text-muted-foreground hover:text-destructive transition-colors cursor-pointer"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Quick inline add or navigate to full page */}
          <form onSubmit={handleQuickAddVehicle} className="flex gap-2 mt-1">
            <input
              type="text"
              placeholder="e.g. 2024 BMW M3 or Range Rover"
              value={newVehicle}
              onChange={(e) => setNewVehicle(e.target.value)}
              className="flex-1 bg-muted border border-outline rounded-xl px-3 py-2 text-xs text-foreground outline-none focus:ring-1 focus:ring-primary"
            />
            <Button type="submit" variant="primary" size="sm">
              <Plus className="w-3.5 h-3.5 mr-1" />
              Add
            </Button>
          </form>

          <div className="flex items-center justify-between pt-1 border-t border-border-subtle">
            <Link
              to="/add-vehicle"
              onClick={() => setIsVehicleModalOpen(false)}
              className="text-xs text-primary font-semibold hover:underline flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Full Add Vehicle Form</span>
            </Link>
            <button
              type="button"
              onClick={() => setIsVehicleModalOpen(false)}
              className="text-xs text-muted-foreground hover:text-foreground py-1 px-2"
            >
              Close
            </button>
          </div>
        </div>
      </AlertDialog>

      {/* Shop Orders Modal */}
      <AlertDialog
        isOpen={isOrdersModalOpen}
        onClose={() => setIsOrdersModalOpen(false)}
        title="My Shop Orders"
        description="Care package products, microfiber maintenance towels & ceramic booster kits."
        maxWidth="sm"
      >
        <div className="py-4 text-center">
          <div className="w-10 h-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center mx-auto mb-2">
            <Truck className="w-5 h-5" />
          </div>
          <p className="text-xs text-foreground font-semibold">No active shipments</p>
          <p className="text-[11px] text-muted-foreground mt-0.5">
            Aftercare detailing packages purchased with your service will appear here.
          </p>
          <Button
            type="button"
            variant="primary"
            onClick={() => setIsOrdersModalOpen(false)}
            className="mt-4"
            fullWidth
          >
            Done
          </Button>
        </div>
      </AlertDialog>

      {/* Notifications Modal */}
      <AlertDialog
        isOpen={isNotifModalOpen}
        onClose={() => setIsNotifModalOpen(false)}
        title="Notifications"
        description="Mobile service arrival alerts & care reminders."
        maxWidth="sm"
      >
        <div className="flex flex-col gap-2 mt-2 text-left">
          <div className="p-3 bg-muted rounded-xl border border-border-subtle">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-foreground">Welcome to Jax Detail</span>
              <span className="text-[9px] text-muted-foreground">Just now</span>
            </div>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              Your mobile studio profile is activated. Enjoy zero waiting room delays.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsNotifModalOpen(false)}
            className="mt-2"
            fullWidth
          >
            Dismiss
          </Button>
        </div>
      </AlertDialog>
    </div>
  )
}

export default Profile
