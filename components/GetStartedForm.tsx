'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';

interface FormData {
  // Step 1
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  propertyType: string;
  // Step 2
  roofType: string;
  roofAge: string;
  squareFootage: string;
  // Step 3
  monthlyBill: string;
  sustainabilityGoals: string[];
  preferredContactMethod: string;
}

const steps = [
  { id: 1, title: 'Basic Information', description: 'Tell us about yourself' },
  { id: 2, title: 'Property Details', description: 'Help us understand your setup' },
  { id: 3, title: 'Goals & Preferences', description: 'What are your priorities?' },
];

export default function GetStartedForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyType: '',
    roofType: '',
    roofAge: '',
    squareFootage: '',
    monthlyBill: '',
    sustainabilityGoals: [],
    preferredContactMethod: 'email',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      sustainabilityGoals: checked
        ? [...prev.sustainabilityGoals, value]
        : prev.sustainabilityGoals.filter((goal) => goal !== value),
    }));
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (formData.email && !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = 'Please enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.propertyType) newErrors.propertyType = 'Property type is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.roofType) newErrors.roofType = 'Roof type is required';
    if (!formData.roofAge) newErrors.roofAge = 'Roof age is required';
    if (!formData.squareFootage.trim()) newErrors.squareFootage = 'Property size is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.monthlyBill.trim()) newErrors.monthlyBill = 'Monthly bill estimate is required';
    if (formData.sustainabilityGoals.length === 0)
      newErrors.sustainabilityGoals = 'Please select at least one goal';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && !validateStep1()) return;
    if (currentStep === 2 && !validateStep2()) return;
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  };

  const handleSubmit = () => {
    if (currentStep === 3 && !validateStep3()) return;
    setSubmitted(true);
    console.log('Form submitted:', formData);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <div className="mx-auto mb-6 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Thank You!</h1>
            <p className="text-lg text-foreground/70 mb-8">
              We've received your information and will contact you soon to discuss your solar energy solution.
            </p>
            <div className="bg-card p-8 rounded-lg border border-border mb-8">
              <h2 className="text-xl font-bold text-foreground mb-4">What's Next?</h2>
              <ul className="space-y-3 text-left max-w-md mx-auto">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">1</span>
                  <span className="text-foreground/70">Our team will review your information</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">2</span>
                  <span className="text-foreground/70">We'll contact you within 24 hours</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">3</span>
                  <span className="text-foreground/70">Schedule a free consultation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">4</span>
                  <span className="text-foreground/70">Get a custom solar solution quote</span>
                </li>
              </ul>
            </div>
            <Button
              onClick={() => (window.location.href = '/')}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted pt-32 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Get Started with Solar</h1>
          <p className="text-lg text-foreground/70">
            Begin your journey to clean, sustainable energy
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center flex-1">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all mb-3 ${
                    currentStep >= step.id
                      ? 'bg-primary text-white'
                      : 'bg-muted text-foreground/50'
                  }`}
                >
                  {step.id}
                </div>
                <h3 className={`text-sm font-semibold text-center ${
                  currentStep === step.id ? 'text-primary' : 'text-foreground/60'
                }`}>
                  {step.title}
                </h3>
                <p className="text-xs text-foreground/50 text-center mt-1">{step.description}</p>
                {index < steps.length - 1 && (
                  <div
                    className={`absolute w-24 h-1 -right-12 top-6 transition-all ${
                      currentStep > step.id ? 'bg-primary' : 'bg-muted'
                    }`}
                    style={{ marginTop: 0 }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    className={errors.firstName ? 'border-red-500' : ''}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    className={errors.lastName ? 'border-red-500' : ''}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 000-0000"
                  className={errors.phone ? 'border-red-500' : ''}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Property Type
                </label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.propertyType ? 'border-red-500' : 'border-border'
                  } bg-white text-foreground`}
                >
                  <option value="">Select property type...</option>
                  <option value="residential">Residential Home</option>
                  <option value="apartment">Apartment/Condo</option>
                  <option value="commercial">Commercial Building</option>
                  <option value="industrial">Industrial Facility</option>
                  <option value="farm">Agricultural Property</option>
                </select>
                {errors.propertyType && (
                  <p className="text-red-500 text-sm mt-1">{errors.propertyType}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Property Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Roof Type
                </label>
                <select
                  name="roofType"
                  value={formData.roofType}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.roofType ? 'border-red-500' : 'border-border'
                  } bg-white text-foreground`}
                >
                  <option value="">Select roof type...</option>
                  <option value="asphalt">Asphalt Shingles</option>
                  <option value="metal">Metal Roof</option>
                  <option value="tile">Tile</option>
                  <option value="flat">Flat Roof</option>
                  <option value="concrete">Concrete</option>
                  <option value="other">Other</option>
                </select>
                {errors.roofType && <p className="text-red-500 text-sm mt-1">{errors.roofType}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Roof Age
                </label>
                <select
                  name="roofAge"
                  value={formData.roofAge}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.roofAge ? 'border-red-500' : 'border-border'
                  } bg-white text-foreground`}
                >
                  <option value="">Select roof age...</option>
                  <option value="0-5">0-5 years (excellent)</option>
                  <option value="5-10">5-10 years (good)</option>
                  <option value="10-15">10-15 years (fair)</option>
                  <option value="15+">15+ years (may need replacement)</option>
                  <option value="unknown">Unknown</option>
                </select>
                {errors.roofAge && <p className="text-red-500 text-sm mt-1">{errors.roofAge}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Property Size (sq ft)
                </label>
                <Input
                  name="squareFootage"
                  type="number"
                  value={formData.squareFootage}
                  onChange={handleInputChange}
                  placeholder="e.g., 2500"
                  className={errors.squareFootage ? 'border-red-500' : ''}
                />
                {errors.squareFootage && (
                  <p className="text-red-500 text-sm mt-1">{errors.squareFootage}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Goals & Preferences */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Estimated Monthly Energy Bill ($)
                </label>
                <Input
                  name="monthlyBill"
                  type="number"
                  value={formData.monthlyBill}
                  onChange={handleInputChange}
                  placeholder="e.g., 150"
                  className={errors.monthlyBill ? 'border-red-500' : ''}
                />
                {errors.monthlyBill && (
                  <p className="text-red-500 text-sm mt-1">{errors.monthlyBill}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Sustainability Goals
                </label>
                <div className="space-y-3">
                  {[
                    { value: 'reduce-bills', label: 'Reduce energy bills' },
                    { value: 'carbon-neutral', label: 'Become carbon neutral' },
                    { value: 'increase-savings', label: 'Increase property value' },
                    { value: 'energy-independence', label: 'Achieve energy independence' },
                    { value: 'backup-power', label: 'Backup power during outages' },
                  ].map((goal) => (
                    <label key={goal.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        value={goal.value}
                        checked={formData.sustainabilityGoals.includes(goal.value)}
                        onChange={handleCheckboxChange}
                        className="w-5 h-5 rounded border-border accent-primary"
                      />
                      <span className="text-foreground">{goal.label}</span>
                    </label>
                  ))}
                </div>
                {errors.sustainabilityGoals && (
                  <p className="text-red-500 text-sm mt-2">{errors.sustainabilityGoals}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Preferred Contact Method
                </label>
                <select
                  name="preferredContactMethod"
                  value={formData.preferredContactMethod}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-white text-foreground"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="text">Text Message</option>
                  <option value="any">Any of the above</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-between">
          <Button
            onClick={handlePrev}
            variant="outline"
            className={`flex items-center gap-2 ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentStep === 1}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          {currentStep < steps.length ? (
            <Button onClick={handleNext} className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
              <Check className="w-4 h-4" />
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
