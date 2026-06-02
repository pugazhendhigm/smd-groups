"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Building2,
  FileText,
  Calculator,
  BookOpen,
  MessageSquare,
  Upload,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, title: "Personal Info", icon: User },
  { id: 2, title: "Business Info", icon: Building2 },
  { id: 3, title: "Services", icon: FileText },
  { id: 4, title: "Tax Info", icon: Calculator },
  { id: 5, title: "Accounting", icon: BookOpen },
  { id: 6, title: "Additional", icon: MessageSquare },
  { id: 7, title: "Documents", icon: Upload },
  { id: 8, title: "Review", icon: CheckCircle2 },
];

interface FormData {
  // Personal
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  // Business
  businessName: string;
  businessType: string;
  industry: string;
  yearsInBusiness: string;
  annualRevenue: string;
  employeeCount: string;
  ein: string;
  // Services
  servicesNeeded: string[];
  urgency: string;
  budget: string;
  // Tax
  filingStatus: string;
  lastYearFiled: string;
  hasBackTaxes: string;
  estimatedTaxDebt: string;
  // Accounting
  currentSoftware: string;
  bookkeepingMethod: string;
  needsPayroll: string;
  // Additional
  referralSource: string;
  additionalNotes: string;
  // Files
  files: File[];
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  businessName: "",
  businessType: "",
  industry: "",
  yearsInBusiness: "",
  annualRevenue: "",
  employeeCount: "",
  ein: "",
  servicesNeeded: [],
  urgency: "",
  budget: "",
  filingStatus: "",
  lastYearFiled: "",
  hasBackTaxes: "",
  estimatedTaxDebt: "",
  currentSoftware: "",
  bookkeepingMethod: "",
  needsPayroll: "",
  referralSource: "",
  additionalNotes: "",
  files: [],
};

export function ClientIntakeForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: string | string[] | File[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (serviceId: string) => {
    const current = formData.servicesNeeded;
    if (current.includes(serviceId)) {
      updateField(
        "servicesNeeded",
        current.filter((s) => s !== serviceId)
      );
    } else {
      updateField("servicesNeeded", [...current, serviceId]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    updateField("files", [...formData.files, ...files]);
  };

  const removeFile = (index: number) => {
    updateField(
      "files",
      formData.files.filter((_, i) => i !== index)
    );
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email;
      case 3:
        return formData.servicesNeeded.length > 0;
      default:
        return true;
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-12 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
          <CheckCircle2 className="h-10 w-10 text-accent" />
        </div>
        <h2 className="mt-8 font-serif text-2xl font-bold text-foreground">
          Thank You for Your Submission!
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          We have received your information and a member of our team will contact
          you within 1-2 business days to discuss your needs.
        </p>
        <Button
          className="mt-8"
          onClick={() => {
            setIsSubmitted(false);
            setCurrentStep(1);
            setFormData(initialFormData);
          }}
        >
          Start a New Submission
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card">
      {/* Progress Steps */}
      <div className="border-b border-border p-6">
        <div className="flex items-center justify-between overflow-x-auto">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center"
            >
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                  currentStep === step.id
                    ? "bg-primary text-primary-foreground"
                    : currentStep > step.id
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-muted-foreground"
                )}
              >
                {currentStep > step.id ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <step.icon className="h-5 w-5" />
                )}
              </div>
              <span
                className={cn(
                  "mt-2 text-xs font-medium",
                  currentStep === step.id
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 w-full h-px bg-border -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 1 && (
              <StepPersonalInfo formData={formData} updateField={updateField} />
            )}
            {currentStep === 2 && (
              <StepBusinessInfo formData={formData} updateField={updateField} />
            )}
            {currentStep === 3 && (
              <StepServices
                formData={formData}
                updateField={updateField}
                handleServiceToggle={handleServiceToggle}
              />
            )}
            {currentStep === 4 && (
              <StepTaxInfo formData={formData} updateField={updateField} />
            )}
            {currentStep === 5 && (
              <StepAccountingInfo formData={formData} updateField={updateField} />
            )}
            {currentStep === 6 && (
              <StepAdditional formData={formData} updateField={updateField} />
            )}
            {currentStep === 7 && (
              <StepDocuments
                formData={formData}
                handleFileChange={handleFileChange}
                removeFile={removeFile}
              />
            )}
            {currentStep === 8 && <StepReview formData={formData} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between border-t border-border p-6">
        <Button
          variant="outline"
          onClick={() => setCurrentStep((prev) => prev - 1)}
          disabled={currentStep === 1}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>

        {currentStep === steps.length ? (
          <Button onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        ) : (
          <Button
            onClick={() => setCurrentStep((prev) => prev + 1)}
            disabled={!canProceed()}
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}

// Step Components
function StepPersonalInfo({
  formData,
  updateField,
}: {
  formData: FormData;
  updateField: (field: keyof FormData, value: string) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-serif text-xl font-semibold text-foreground">
          Personal Information
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Please provide your contact details.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-foreground">
            First Name *
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="John"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground">
            Last Name *
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-foreground">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground">
            Phone Number
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground">
          Street Address
        </label>
        <input
          type="text"
          value={formData.address}
          onChange={(e) => updateField("address", e.target.value)}
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="123 Main Street"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div>
          <label className="block text-sm font-medium text-foreground">City</label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => updateField("city", e.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="New York"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground">State</label>
          <input
            type="text"
            value={formData.state}
            onChange={(e) => updateField("state", e.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="NY"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground">
            ZIP Code
          </label>
          <input
            type="text"
            value={formData.zip}
            onChange={(e) => updateField("zip", e.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="10001"
          />
        </div>
      </div>
    </div>
  );
}

function StepBusinessInfo({
  formData,
  updateField,
}: {
  formData: FormData;
  updateField: (field: keyof FormData, value: string) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-serif text-xl font-semibold text-foreground">
          Business Information
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Tell us about your business (skip if individual client).
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-foreground">
            Business Name
          </label>
          <input
            type="text"
            value={formData.businessName}
            onChange={(e) => updateField("businessName", e.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="ABC Company LLC"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground">
            Business Type
          </label>
          <select
            value={formData.businessType}
            onChange={(e) => updateField("businessType", e.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select type</option>
            <option value="sole-proprietor">Sole Proprietorship</option>
            <option value="llc">LLC</option>
            <option value="s-corp">S Corporation</option>
            <option value="c-corp">C Corporation</option>
            <option value="partnership">Partnership</option>
            <option value="nonprofit">Nonprofit</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-foreground">
            Industry
          </label>
          <input
            type="text"
            value={formData.industry}
            onChange={(e) => updateField("industry", e.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Technology, Healthcare, etc."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground">
            Years in Business
          </label>
          <select
            value={formData.yearsInBusiness}
            onChange={(e) => updateField("yearsInBusiness", e.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select</option>
            <option value="startup">Startup (0-1 year)</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5-10">5-10 years</option>
            <option value="10+">10+ years</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-foreground">
            Annual Revenue
          </label>
          <select
            value={formData.annualRevenue}
            onChange={(e) => updateField("annualRevenue", e.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select range</option>
            <option value="0-100k">Under $100,000</option>
            <option value="100k-500k">$100,000 - $500,000</option>
            <option value="500k-1m">$500,000 - $1 million</option>
            <option value="1m-5m">$1 million - $5 million</option>
            <option value="5m+">Over $5 million</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground">
            Number of Employees
          </label>
          <select
            value={formData.employeeCount}
            onChange={(e) => updateField("employeeCount", e.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select</option>
            <option value="1">Just me</option>
            <option value="2-10">2-10</option>
            <option value="11-50">11-50</option>
            <option value="51-100">51-100</option>
            <option value="100+">100+</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground">
          EIN (Employer Identification Number)
        </label>
        <input
          type="text"
          value={formData.ein}
          onChange={(e) => updateField("ein", e.target.value)}
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="XX-XXXXXXX"
        />
      </div>
    </div>
  );
}

function StepServices({
  formData,
  updateField,
  handleServiceToggle,
}: {
  formData: FormData;
  updateField: (field: keyof FormData, value: string) => void;
  handleServiceToggle: (serviceId: string) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-serif text-xl font-semibold text-foreground">
          Services Required
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Select the services you are interested in (at least one required).
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <button
            key={service.id}
            type="button"
            onClick={() => handleServiceToggle(service.id)}
            className={cn(
              "flex items-start gap-4 rounded-xl border p-4 text-left transition-colors",
              formData.servicesNeeded.includes(service.id)
                ? "border-accent bg-accent/10"
                : "border-border bg-background hover:border-accent/50"
            )}
          >
            <div
              className={cn(
                "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border",
                formData.servicesNeeded.includes(service.id)
                  ? "border-accent bg-accent"
                  : "border-border"
              )}
            >
              {formData.servicesNeeded.includes(service.id) && (
                <CheckCircle2 className="h-3 w-3 text-accent-foreground" />
              )}
            </div>
            <div>
              <p className="font-medium text-foreground">{service.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {service.shortDescription}
              </p>
            </div>
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-foreground">
            Urgency Level
          </label>
          <select
            value={formData.urgency}
            onChange={(e) => updateField("urgency", e.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select urgency</option>
            <option value="low">Low - No rush</option>
            <option value="medium">Medium - Within a month</option>
            <option value="high">High - ASAP</option>
            <option value="critical">Critical - Emergency</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground">
            Budget Range
          </label>
          <select
            value={formData.budget}
            onChange={(e) => updateField("budget", e.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select budget</option>
            <option value="under-1k">Under $1,000</option>
            <option value="1k-5k">$1,000 - $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k+">$25,000+</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function StepTaxInfo({
  formData,
  updateField,
}: {
  formData: FormData;
  updateField: (field: keyof FormData, value: string) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-serif text-xl font-semibold text-foreground">
          Tax Information
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Help us understand your current tax situation.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-foreground">
            Filing Status
          </label>
          <select
            value={formData.filingStatus}
            onChange={(e) => updateField("filingStatus", e.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select status</option>
            <option value="single">Single</option>
            <option value="married-joint">Married Filing Jointly</option>
            <option value="married-separate">Married Filing Separately</option>
            <option value="head-household">Head of Household</option>
            <option value="business">Business Entity</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground">
            Last Year You Filed Taxes
          </label>
          <select
            value={formData.lastYearFiled}
            onChange={(e) => updateField("lastYearFiled", e.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select year</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020 or earlier</option>
            <option value="never">Never filed</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-foreground">
            Do you have back taxes or IRS issues?
          </label>
          <select
            value={formData.hasBackTaxes}
            onChange={(e) => updateField("hasBackTaxes", e.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select</option>
            <option value="no">No</option>
            <option value="yes-small">Yes, minor issues</option>
            <option value="yes-significant">Yes, significant issues</option>
            <option value="not-sure">Not sure</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground">
            Estimated Tax Debt (if any)
          </label>
          <select
            value={formData.estimatedTaxDebt}
            onChange={(e) => updateField("estimatedTaxDebt", e.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select range</option>
            <option value="none">None</option>
            <option value="under-10k">Under $10,000</option>
            <option value="10k-50k">$10,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="100k+">Over $100,000</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function StepAccountingInfo({
  formData,
  updateField,
}: {
  formData: FormData;
  updateField: (field: keyof FormData, value: string) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-serif text-xl font-semibold text-foreground">
          Accounting Information
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Tell us about your current accounting setup.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-foreground">
            Current Accounting Software
          </label>
          <select
            value={formData.currentSoftware}
            onChange={(e) => updateField("currentSoftware", e.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select software</option>
            <option value="quickbooks">QuickBooks</option>
            <option value="xero">Xero</option>
            <option value="sage">Sage</option>
            <option value="freshbooks">FreshBooks</option>
            <option value="wave">Wave</option>
            <option value="spreadsheets">Spreadsheets</option>
            <option value="none">None</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground">
            Bookkeeping Method
          </label>
          <select
            value={formData.bookkeepingMethod}
            onChange={(e) => updateField("bookkeepingMethod", e.target.value)}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select method</option>
            <option value="cash">Cash basis</option>
            <option value="accrual">Accrual basis</option>
            <option value="not-sure">Not sure</option>
            <option value="none">Not currently tracking</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground">
          Do you need payroll services?
        </label>
        <select
          value={formData.needsPayroll}
          onChange={(e) => updateField("needsPayroll", e.target.value)}
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="already-have">Already have a provider</option>
          <option value="maybe">Maybe in the future</option>
        </select>
      </div>
    </div>
  );
}

function StepAdditional({
  formData,
  updateField,
}: {
  formData: FormData;
  updateField: (field: keyof FormData, value: string) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-serif text-xl font-semibold text-foreground">
          Additional Information
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Help us serve you better with any additional details.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground">
          How did you hear about us?
        </label>
        <select
          value={formData.referralSource}
          onChange={(e) => updateField("referralSource", e.target.value)}
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">Select</option>
          <option value="google">Google Search</option>
          <option value="referral">Client Referral</option>
          <option value="linkedin">LinkedIn</option>
          <option value="social">Social Media</option>
          <option value="advertisement">Advertisement</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground">
          Additional Notes or Questions
        </label>
        <textarea
          value={formData.additionalNotes}
          onChange={(e) => updateField("additionalNotes", e.target.value)}
          rows={5}
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Is there anything else you would like us to know? Any specific questions or concerns?"
        />
      </div>
    </div>
  );
}

function StepDocuments({
  formData,
  handleFileChange,
  removeFile,
}: {
  formData: FormData;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeFile: (index: number) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-serif text-xl font-semibold text-foreground">
          Document Upload
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Upload any relevant documents (optional). You can also send documents later.
        </p>
      </div>

      <div className="rounded-xl border-2 border-dashed border-border p-8 text-center">
        <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
        <p className="mt-4 text-sm text-muted-foreground">
          Drag and drop files here, or click to browse
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          PDF, DOC, XLS, PNG, JPG up to 10MB each
        </p>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="mt-4"
          accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
        />
      </div>

      {formData.files.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">Uploaded Files:</p>
          {formData.files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg bg-secondary p-3"
            >
              <span className="text-sm text-foreground">{file.name}</span>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="text-sm text-destructive hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function StepReview({ formData }: { formData: FormData }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-serif text-xl font-semibold text-foreground">
          Review Your Information
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Please review your submission before submitting.
        </p>
      </div>

      <div className="space-y-6">
        {/* Personal Info */}
        <div className="rounded-xl border border-border p-6">
          <h4 className="font-medium text-foreground">Personal Information</h4>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-muted-foreground">Name</dt>
              <dd className="text-foreground">
                {formData.firstName} {formData.lastName}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Email</dt>
              <dd className="text-foreground">{formData.email}</dd>
            </div>
            {formData.phone && (
              <div>
                <dt className="text-sm text-muted-foreground">Phone</dt>
                <dd className="text-foreground">{formData.phone}</dd>
              </div>
            )}
            {formData.city && (
              <div>
                <dt className="text-sm text-muted-foreground">Location</dt>
                <dd className="text-foreground">
                  {formData.city}, {formData.state} {formData.zip}
                </dd>
              </div>
            )}
          </dl>
        </div>

        {/* Business Info */}
        {formData.businessName && (
          <div className="rounded-xl border border-border p-6">
            <h4 className="font-medium text-foreground">Business Information</h4>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-muted-foreground">Business Name</dt>
                <dd className="text-foreground">{formData.businessName}</dd>
              </div>
              {formData.businessType && (
                <div>
                  <dt className="text-sm text-muted-foreground">Type</dt>
                  <dd className="text-foreground capitalize">
                    {formData.businessType.replace("-", " ")}
                  </dd>
                </div>
              )}
              {formData.annualRevenue && (
                <div>
                  <dt className="text-sm text-muted-foreground">Annual Revenue</dt>
                  <dd className="text-foreground">{formData.annualRevenue}</dd>
                </div>
              )}
            </dl>
          </div>
        )}

        {/* Services */}
        <div className="rounded-xl border border-border p-6">
          <h4 className="font-medium text-foreground">Services Requested</h4>
          <ul className="mt-4 space-y-2">
            {formData.servicesNeeded.map((serviceId) => {
              const service = services.find((s) => s.id === serviceId);
              return (
                <li key={serviceId} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span className="text-foreground">{service?.title}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Files */}
        {formData.files.length > 0 && (
          <div className="rounded-xl border border-border p-6">
            <h4 className="font-medium text-foreground">
              Documents ({formData.files.length})
            </h4>
            <ul className="mt-4 space-y-2">
              {formData.files.map((file, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {file.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="rounded-xl bg-accent/10 p-4 text-sm text-muted-foreground">
        By submitting this form, you agree to our privacy policy and terms of
        service. A member of our team will contact you within 1-2 business days.
      </div>
    </div>
  );
}
