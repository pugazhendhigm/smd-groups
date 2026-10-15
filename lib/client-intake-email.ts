import { services } from "@/lib/data";

export interface ClientIntakeEmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  businessName: string;
  businessType: string;
  industry: string;
  yearsInBusiness: string;
  annualRevenue: string;
  employeeCount: string;
  ein: string;
  servicesNeeded: string[];
  urgency: string;
  budget: string;
  filingStatus: string;
  lastYearFiled: string;
  hasBackTaxes: string;
  estimatedTaxDebt: string;
  currentSoftware: string;
  bookkeepingMethod: string;
  needsPayroll: string;
  referralSource: string;
  additionalNotes: string;
  files: File[];
}

const valueOrNotProvided = (value: string) => value.trim() || "Not provided";

export function createClientIntakeEmail(data: ClientIntakeEmailData) {
  const serviceNames = data.servicesNeeded.map(
    (id) => services.find((service) => service.id === id)?.title ?? id
  );
  const lines = [
    "NEW CLIENT INTAKE SUBMISSION",
    "",
    "PERSONAL INFORMATION",
    `Name: ${data.firstName} ${data.lastName}`,
    `Email: ${valueOrNotProvided(data.email)}`,
    `Phone: ${valueOrNotProvided(data.phone)}`,
    `Address: ${[data.address, data.city, data.state, data.zip].filter(Boolean).join(", ") || "Not provided"}`,
    "",
    "BUSINESS INFORMATION",
    `Business name: ${valueOrNotProvided(data.businessName)}`,
    `Business type: ${valueOrNotProvided(data.businessType)}`,
    `Industry: ${valueOrNotProvided(data.industry)}`,
    `Years in business: ${valueOrNotProvided(data.yearsInBusiness)}`,
    `Annual revenue: ${valueOrNotProvided(data.annualRevenue)}`,
    `Employee count: ${valueOrNotProvided(data.employeeCount)}`,
    `EIN: ${valueOrNotProvided(data.ein)}`,
    "",
    "SERVICES REQUESTED",
    serviceNames.length ? serviceNames.map((name) => `- ${name}`).join("\n") : "Not provided",
    `Urgency: ${valueOrNotProvided(data.urgency)}`,
    `Budget: ${valueOrNotProvided(data.budget)}`,
    "",
    "TAX INFORMATION",
    `Filing status: ${valueOrNotProvided(data.filingStatus)}`,
    `Last year filed: ${valueOrNotProvided(data.lastYearFiled)}`,
    `Has back taxes: ${valueOrNotProvided(data.hasBackTaxes)}`,
    `Estimated tax debt: ${valueOrNotProvided(data.estimatedTaxDebt)}`,
    "",
    "ACCOUNTING INFORMATION",
    `Current software: ${valueOrNotProvided(data.currentSoftware)}`,
    `Bookkeeping method: ${valueOrNotProvided(data.bookkeepingMethod)}`,
    `Needs payroll: ${valueOrNotProvided(data.needsPayroll)}`,
    "",
    "ADDITIONAL INFORMATION",
    `Referral source: ${valueOrNotProvided(data.referralSource)}`,
    `Notes: ${valueOrNotProvided(data.additionalNotes)}`,
    "",
    "DOCUMENTS SELECTED (attach these files manually)",
    data.files.length ? data.files.map((file) => `- ${file.name}`).join("\n") : "No files selected",
  ];

  return {
    subject: `Client intake: ${data.firstName} ${data.lastName}`.trim(),
    body: lines.join("\n"),
  };
}
