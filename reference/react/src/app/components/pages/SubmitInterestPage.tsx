import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { FormStepper } from "../invest/FormStepper";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Upload, Info } from "lucide-react";

const steps = [
  { number: 1, title: "Investor Info" },
  { number: 2, title: "Investment Interest" },
  { number: 3, title: "Documents" },
  { number: 4, title: "Confirmation" },
];

const sectors = [
  "Tourism",
  "Agriculture",
  "Food Processing",
  "Logistics",
  "Renewable Energy",
  "Light Manufacturing",
  "Handicrafts",
  "Other"
];

const investorTypes = [
  "Individual investor",
  "Company",
  "Investment fund",
  "Development organization",
  "Local entrepreneur"
];

const timelines = [
  "Immediately",
  "3–6 months",
  "6–12 months",
  "More than 1 year"
];

export default function SubmitInterestPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("project");

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    fullName: "",
    companyName: "",
    country: "",
    email: "",
    phone: "",
    investorType: "",

    // Step 2
    sector: "",
    selectedProject: projectId || "",
    investmentAmount: "",
    location: "",
    timeline: "",

    // Step 3
    message: "",
    questions: "",
    businessProposal: null as File | null,
    companyProfile: null as File | null,
    financialInfo: null as File | null,

    // Step 4
    agreeContact: false,
    confirmAccurate: false,
  });

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = () => {
    // In a real app, submit to backend
    navigate("/submit-interest/success");
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName && formData.email && formData.phone && formData.investorType;
      case 2:
        return formData.sector && formData.investmentAmount && formData.timeline;
      case 3:
        return true; // Step 3 is optional
      case 4:
        return formData.agreeContact && formData.confirmAccurate;
      default:
        return false;
    }
  };

  return (
    <div className="bg-[#F6F8FA] min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#1F2933] mb-4">Submit Investment Interest</h1>
          <p className="text-lg text-[#667085]">
            Complete this form to express your interest in investing in Panjakent
          </p>
        </div>

        {/* Progress Stepper */}
        <div className="mb-8">
          <FormStepper steps={steps} currentStep={currentStep} />
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          {/* Step 1: Investor Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-[#1F2933] mb-6">Investor Information</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => updateField("companyName", e.target.value)}
                    placeholder="Company Ltd."
                  />
                </div>

                <div>
                  <Label htmlFor="country">Country *</Label>
                  <Input
                    id="country"
                    value={formData.country}
                    onChange={(e) => updateField("country", e.target.value)}
                    placeholder="e.g., Turkey, Iran, Russia"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="investor@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone / WhatsApp *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="+992 xxx xxx xxx"
                  />
                </div>

                <div>
                  <Label htmlFor="investorType">Investor Type *</Label>
                  <Select value={formData.investorType} onValueChange={(val) => updateField("investorType", val)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {investorTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Investment Interest */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-[#1F2933] mb-6">Investment Interest</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="sector">Interested Sector *</Label>
                  <Select value={formData.sector} onValueChange={(val) => updateField("sector", val)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select sector" />
                    </SelectTrigger>
                    <SelectContent>
                      {sectors.map((sector) => (
                        <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="selectedProject">Selected Project (Optional)</Label>
                  <Input
                    id="selectedProject"
                    value={formData.selectedProject}
                    onChange={(e) => updateField("selectedProject", e.target.value)}
                    placeholder="Leave blank if exploring options"
                  />
                </div>

                <div>
                  <Label htmlFor="investmentAmount">Estimated Investment Amount *</Label>
                  <Input
                    id="investmentAmount"
                    value={formData.investmentAmount}
                    onChange={(e) => updateField("investmentAmount", e.target.value)}
                    placeholder="e.g., $100,000 - $250,000"
                  />
                </div>

                <div>
                  <Label htmlFor="location">Preferred Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => updateField("location", e.target.value)}
                    placeholder="e.g., Seven Lakes, City Center"
                  />
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="timeline">Expected Investment Timeline *</Label>
                  <Select value={formData.timeline} onValueChange={(val) => updateField("timeline", val)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelines.map((timeline) => (
                        <SelectItem key={timeline} value={timeline}>{timeline}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Message and Documents */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-[#1F2933] mb-6">Message and Documents</h2>
                <p className="text-[#667085]">All fields in this step are optional</p>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="message">Short Message / Description of Interest</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Tell us about your investment plans and goals..."
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="questions">Questions or Support Needed</Label>
                  <Textarea
                    id="questions"
                    value={formData.questions}
                    onChange={(e) => updateField("questions", e.target.value)}
                    placeholder="What questions do you have? What support would be helpful?"
                    rows={4}
                  />
                </div>

                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                    <Label className="flex items-center gap-2 mb-2">
                      <Upload className="h-4 w-4" />
                      Business Proposal (Optional)
                    </Label>
                    <input
                      type="file"
                      onChange={(e) => updateField("businessProposal", e.target.files?.[0] || null)}
                      accept=".pdf,.doc,.docx"
                      className="text-sm"
                    />
                    <p className="text-xs text-[#667085] mt-2">PDF, DOC, DOCX (Max 10MB)</p>
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                    <Label className="flex items-center gap-2 mb-2">
                      <Upload className="h-4 w-4" />
                      Company Profile (Optional)
                    </Label>
                    <input
                      type="file"
                      onChange={(e) => updateField("companyProfile", e.target.files?.[0] || null)}
                      accept=".pdf,.doc,.docx"
                      className="text-sm"
                    />
                    <p className="text-xs text-[#667085] mt-2">PDF, DOC, DOCX (Max 10MB)</p>
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                    <Label className="flex items-center gap-2 mb-2">
                      <Upload className="h-4 w-4" />
                      Financial Information (Optional)
                    </Label>
                    <input
                      type="file"
                      onChange={(e) => updateField("financialInfo", e.target.files?.[0] || null)}
                      accept=".pdf,.doc,.docx"
                      className="text-sm"
                    />
                    <p className="text-xs text-[#667085] mt-2">PDF, DOC, DOCX (Max 10MB)</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-[#1F2933] mb-6">Confirmation</h2>
              </div>

              <div className="bg-[#123A63]/5 rounded-lg p-6 mb-6">
                <div className="flex gap-3">
                  <Info className="h-5 w-5 text-[#123A63] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-[#123A63] mb-2">What happens after submission?</h3>
                    <ul className="space-y-2 text-sm text-[#667085]">
                      <li>• You will receive a confirmation email with your application reference number</li>
                      <li>• Our team will review your interest within 2-3 business days</li>
                      <li>• A case manager will be assigned to your application</li>
                      <li>• You will be contacted to schedule an initial consultation</li>
                      <li>• You can track your application status in the Investor Portal</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="agreeContact"
                    checked={formData.agreeContact}
                    onCheckedChange={(checked) => updateField("agreeContact", checked)}
                  />
                  <Label htmlFor="agreeContact" className="cursor-pointer">
                    I agree to be contacted by the Panjakent investment support team regarding my investment interest.
                  </Label>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="confirmAccurate"
                    checked={formData.confirmAccurate}
                    onCheckedChange={(checked) => updateField("confirmAccurate", checked)}
                  />
                  <Label htmlFor="confirmAccurate" className="cursor-pointer">
                    I confirm that the provided information is accurate and complete to the best of my knowledge.
                  </Label>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              Back
            </Button>

            {currentStep < 4 ? (
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="bg-[#0F8A5F] hover:bg-[#0F8A5F]/90"
              >
                Continue
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!canProceed()}
                className="bg-[#0F8A5F] hover:bg-[#0F8A5F]/90"
              >
                Submit Interest
              </Button>
            )}
          </div>
        </div>

        {/* Side info - desktop only */}
        <div className="hidden lg:block fixed right-8 top-1/4 w-64">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-[#1F2933] mb-4">Need Help?</h3>
            <div className="space-y-3 text-sm text-[#667085]">
              <p>Contact our investor support team:</p>
              <div>
                <p className="font-medium text-[#1F2933]">Hotline:</p>
                <p>+992 xxx xxx xxx</p>
              </div>
              <div>
                <p className="font-medium text-[#1F2933]">Email:</p>
                <p>invest@panjakent.tj</p>
              </div>
              <div>
                <p className="font-medium text-[#1F2933]">WhatsApp:</p>
                <p>+992 xxx xxx xxx</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
