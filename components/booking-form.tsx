"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

interface FormData {
  // Step 1: Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string

  // Step 2: Appointment Details
  appointmentType: string
  preferredDate: string
  preferredTime: string
  reasonForVisit: string

  // Step 3: Insurance/Payment
  paymentMethod: string
  insuranceProvider?: string
  policyNumber?: string
  groupNumber?: string

  // Step 4: Review & Confirmation
  termsAccepted: boolean
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  appointmentType: "",
  preferredDate: "",
  preferredTime: "",
  reasonForVisit: "",
  paymentMethod: "",
  insuranceProvider: "",
  policyNumber: "",
  groupNumber: "",
  termsAccepted: false,
}

export default function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch (step) {
      case 1:
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
        if (!formData.email.trim()) {
          newErrors.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Please enter a valid email address"
        }
        if (!formData.phone.trim()) {
          newErrors.phone = "Phone number is required"
        } else if (!/^\d{10,11}$/.test(formData.phone.replace(/\D/g, ""))) {
          newErrors.phone = "Please enter a valid 10-11 digit phone number"
        }
        if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
        break

      case 2:
        if (!formData.appointmentType) newErrors.appointmentType = "Please select an appointment type"
        if (!formData.preferredDate) newErrors.preferredDate = "Please select a preferred date"
        if (!formData.preferredTime) newErrors.preferredTime = "Please select a preferred time"
        if (!formData.reasonForVisit.trim()) newErrors.reasonForVisit = "Please describe the reason for your visit"

        // Validate date is not in the past
        if (formData.preferredDate) {
          const selectedDate = new Date(formData.preferredDate)
          const today = new Date()
          today.setHours(0, 0, 0, 0)
          if (selectedDate < today) {
            newErrors.preferredDate = "Please select a future date"
          }
        }
        break

      case 3:
        if (!formData.paymentMethod) newErrors.paymentMethod = "Please select a payment method"
        if (formData.paymentMethod === "insurance") {
          if (!formData.insuranceProvider?.trim()) newErrors.insuranceProvider = "Insurance provider is required"
          if (!formData.policyNumber?.trim()) newErrors.policyNumber = "Policy number is required"
        }
        break

      case 4:
        if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept the terms and conditions"
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const goToStep = (step: number) => {
    setCurrentStep(step)
  }

  const handleSubmit = async () => {
    if (!validateStep(4)) return

    setIsSubmitting(true)

    try {
      // Prepare form data for FormSubmit
      const submitData = new FormData()

      // Add all form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== "" && value !== false) {
          submitData.append(key, value.toString())
        }
      })

      submitData.append("_subject", "New Appointment Booking - Serene Minds Wellness")
      submitData.append("_template", "table")

      // Submit to FormSubmit with Serene Minds email
      const response = await fetch("https://formsubmit.co/patience@serenemindswellness.us", {
        method: "POST",
        body: submitData,
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error("Failed to submit form")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setErrors({ submit: "Failed to submit form. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-primary text-2xl">✓</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">Appointment Request Submitted!</h3>
          <p className="text-muted-foreground mb-4">
            Thank you for choosing Serene Minds Wellness. We'll contact you within 24 hours to confirm your appointment
            details and discuss next steps.
          </p>
          <p className="text-sm text-muted-foreground">A confirmation email has been sent to {formData.email}</p>
        </CardContent>
      </Card>
    )
  }

  const stepTitles = ["Personal Information", "Appointment Details", "Insurance & Payment", "Review & Confirmation"]

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Book Your Appointment</CardTitle>
        <p className="text-center text-muted-foreground">
          Schedule your mental health consultation with Serene Minds Wellness
        </p>

        {/* Progress Steps */}
        <div className="flex justify-between items-center mt-6">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium cursor-pointer transition-colors ${
                  step <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
                onClick={() => step < currentStep && goToStep(step)}
              >
                {step}
              </div>
              <span className="text-xs mt-1 text-center max-w-20">{stepTitles[step - 1]}</span>
            </div>
          ))}
        </div>
      </CardHeader>

      <CardContent className="p-6">
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  className={errors.firstName ? "border-destructive" : ""}
                />
                {errors.firstName && <p className="text-destructive text-sm mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  className={errors.lastName ? "border-destructive" : ""}
                />
                {errors.lastName && <p className="text-destructive text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                placeholder="(555) 123-4567"
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <Label htmlFor="dateOfBirth">Date of Birth *</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                className={errors.dateOfBirth ? "border-destructive" : ""}
              />
              {errors.dateOfBirth && <p className="text-destructive text-sm mt-1">{errors.dateOfBirth}</p>}
            </div>
          </div>
        )}

        {/* Step 2: Appointment Details */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Appointment Details</h3>

            <div>
              <Label htmlFor="appointmentType">Appointment Type *</Label>
              <Select
                value={formData.appointmentType}
                onValueChange={(value) => updateFormData("appointmentType", value)}
              >
                <SelectTrigger className={errors.appointmentType ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select appointment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="initial-consultation">Initial Psychiatric Evaluation (60 min)</SelectItem>
                  <SelectItem value="follow-up">Follow-up Appointment (30-45 min)</SelectItem>
                  <SelectItem value="therapy-session">Therapy Session (50 min)</SelectItem>
                  <SelectItem value="medication-management">Medication Management (30 min)</SelectItem>
                  <SelectItem value="crisis-consultation">Crisis Consultation (60 min)</SelectItem>
                </SelectContent>
              </Select>
              {errors.appointmentType && <p className="text-destructive text-sm mt-1">{errors.appointmentType}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="preferredDate">Preferred Date *</Label>
                <Input
                  id="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => updateFormData("preferredDate", e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className={errors.preferredDate ? "border-destructive" : ""}
                />
                {errors.preferredDate && <p className="text-destructive text-sm mt-1">{errors.preferredDate}</p>}
              </div>

              <div>
                <Label htmlFor="preferredTime">Preferred Time *</Label>
                <Select
                  value={formData.preferredTime}
                  onValueChange={(value) => updateFormData("preferredTime", value)}
                >
                  <SelectTrigger className={errors.preferredTime ? "border-destructive" : ""}>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">9:00 AM</SelectItem>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="12:00">12:00 PM</SelectItem>
                    <SelectItem value="13:00">1:00 PM</SelectItem>
                    <SelectItem value="14:00">2:00 PM</SelectItem>
                    <SelectItem value="15:00">3:00 PM</SelectItem>
                    <SelectItem value="16:00">4:00 PM</SelectItem>
                    <SelectItem value="17:00">5:00 PM</SelectItem>
                  </SelectContent>
                </Select>
                {errors.preferredTime && <p className="text-destructive text-sm mt-1">{errors.preferredTime}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="reasonForVisit">Reason for Visit *</Label>
              <Textarea
                id="reasonForVisit"
                value={formData.reasonForVisit}
                onChange={(e) => updateFormData("reasonForVisit", e.target.value)}
                placeholder="Please briefly describe your mental health concerns or what you'd like to address in your appointment..."
                rows={4}
                className={errors.reasonForVisit ? "border-destructive" : ""}
              />
              {errors.reasonForVisit && <p className="text-destructive text-sm mt-1">{errors.reasonForVisit}</p>}
            </div>
          </div>
        )}

        {/* Step 3: Insurance & Payment */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Insurance & Payment</h3>

            <div>
              <Label>Payment Method *</Label>
              <RadioGroup
                value={formData.paymentMethod}
                onValueChange={(value) => updateFormData("paymentMethod", value)}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="insurance" id="insurance" />
                  <Label htmlFor="insurance">Insurance</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="self-pay" id="self-pay" />
                  <Label htmlFor="self-pay">Self-Pay</Label>
                </div>
              </RadioGroup>
              {errors.paymentMethod && <p className="text-destructive text-sm mt-1">{errors.paymentMethod}</p>}
            </div>

            {formData.paymentMethod === "insurance" && (
              <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium">Insurance Information</h4>

                <div>
                  <Label htmlFor="insuranceProvider">Insurance Provider *</Label>
                  <Input
                    id="insuranceProvider"
                    value={formData.insuranceProvider || ""}
                    onChange={(e) => updateFormData("insuranceProvider", e.target.value)}
                    placeholder="e.g., Blue Cross Blue Shield"
                    className={errors.insuranceProvider ? "border-destructive" : ""}
                  />
                  {errors.insuranceProvider && (
                    <p className="text-destructive text-sm mt-1">{errors.insuranceProvider}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="policyNumber">Policy Number *</Label>
                    <Input
                      id="policyNumber"
                      value={formData.policyNumber || ""}
                      onChange={(e) => updateFormData("policyNumber", e.target.value)}
                      className={errors.policyNumber ? "border-destructive" : ""}
                    />
                    {errors.policyNumber && <p className="text-destructive text-sm mt-1">{errors.policyNumber}</p>}
                  </div>

                  <div>
                    <Label htmlFor="groupNumber">Group Number</Label>
                    <Input
                      id="groupNumber"
                      value={formData.groupNumber || ""}
                      onChange={(e) => updateFormData("groupNumber", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {formData.paymentMethod === "self-pay" && (
              <div className="p-4 bg-accent/50 rounded-lg">
                <h4 className="font-medium mb-2">Self-Pay Information</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Payment will be collected at the time of service. We accept major credit cards and HSA/FSA cards.
                </p>
                <div className="text-sm">
                  <p className="font-medium mb-2">Session Rates:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Initial Psychiatric Evaluation (60 min): $250</li>
                    <li>Follow-up Appointment (30-45 min): $150-200</li>
                    <li>Therapy Session (50 min): $180</li>
                    <li>Medication Management (30 min): $120</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 4: Review & Confirmation */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Review & Confirmation</h3>

            {/* Personal Information Review */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">Personal Information</h4>
                <Button variant="outline" size="sm" onClick={() => goToStep(1)}>
                  Edit
                </Button>
              </div>
              <div className="text-sm space-y-1">
                <p>
                  <strong>Name:</strong> {formData.firstName} {formData.lastName}
                </p>
                <p>
                  <strong>Email:</strong> {formData.email}
                </p>
                <p>
                  <strong>Phone:</strong> {formData.phone}
                </p>
                <p>
                  <strong>Date of Birth:</strong> {formData.dateOfBirth}
                </p>
              </div>
            </div>

            {/* Appointment Details Review */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">Appointment Details</h4>
                <Button variant="outline" size="sm" onClick={() => goToStep(2)}>
                  Edit
                </Button>
              </div>
              <div className="text-sm space-y-1">
                <p>
                  <strong>Type:</strong> {formData.appointmentType}
                </p>
                <p>
                  <strong>Date:</strong> {formData.preferredDate}
                </p>
                <p>
                  <strong>Time:</strong> {formData.preferredTime}
                </p>
                <p>
                  <strong>Reason:</strong> {formData.reasonForVisit}
                </p>
              </div>
            </div>

            {/* Payment Information Review */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">Payment Information</h4>
                <Button variant="outline" size="sm" onClick={() => goToStep(3)}>
                  Edit
                </Button>
              </div>
              <div className="text-sm space-y-1">
                <p>
                  <strong>Payment Method:</strong> {formData.paymentMethod === "insurance" ? "Insurance" : "Self-Pay"}
                </p>
                {formData.paymentMethod === "insurance" && (
                  <>
                    <p>
                      <strong>Provider:</strong> {formData.insuranceProvider}
                    </p>
                    <p>
                      <strong>Policy #:</strong> {formData.policyNumber}
                    </p>
                    {formData.groupNumber && (
                      <p>
                        <strong>Group #:</strong> {formData.groupNumber}
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => updateFormData("termsAccepted", checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm leading-relaxed">
                  I acknowledge that I have read and agree to the terms and conditions, privacy policy, and consent to
                  treatment. I understand that Serene Minds Wellness is a telehealth-only practice serving Florida
                  residents, and all sessions will be conducted via secure video conferencing. I confirm that I am
                  currently located in Florida.
                </Label>
              </div>
              {errors.termsAccepted && <p className="text-destructive text-sm">{errors.termsAccepted}</p>}
            </div>

            {errors.submit && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                <p className="text-destructive text-sm">{errors.submit}</p>
              </div>
            )}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
            Previous
          </Button>

          {currentStep < 4 ? (
            <Button onClick={nextStep}>Next</Button>
          ) : (
            <Button onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Booking Request"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
