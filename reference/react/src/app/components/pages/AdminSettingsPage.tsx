import { Settings, Save, Globe, Mail, Bell, Shield, Database, Palette } from "lucide-react";
import { AdminPageLayout } from "../admin/AdminPageLayout";
import { Button } from "../ui/button";
import { useState } from "react";

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General", icon: Settings },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "email", label: "Email", icon: Mail },
    { id: "advanced", label: "Advanced", icon: Database }
  ];

  return (
    <AdminPageLayout>

      <div className="flex-1">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#1F2933]">Settings</h1>
              <p className="text-[#667085] mt-1">Configure system preferences and options</p>
            </div>
            <Button className="bg-[#0F8A5F] hover:bg-[#0F8A5F]/90 text-white gap-2">
              <Save className="h-5 w-5" />
              Save Changes
            </Button>
          </div>
        </div>

        <div className="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
            <div className="bg-white rounded-lg border border-gray-200 p-4 h-fit">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? "bg-[#0F8A5F] text-white"
                          : "text-[#667085] hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="lg:col-span-3 bg-white rounded-lg border border-gray-200">
              {activeTab === "general" && (
                <div className="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
                  <h2 className="text-lg font-semibold text-[#1F2933] mb-6">General Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-[#667085] mb-2">
                        Site Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Invest Panjakent"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#667085] mb-2">
                        Site Description
                      </label>
                      <textarea
                        rows={3}
                        defaultValue="Investment opportunities in Panjakent, Tajikistan"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#667085] mb-2">
                        Default Language
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]">
                        <option>English</option>
                        <option>Tajik</option>
                        <option>Russian</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#667085] mb-2">
                        Timezone
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]">
                        <option>Asia/Dushanbe (UTC+5)</option>
                        <option>UTC</option>
                        <option>Europe/London (UTC+0)</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="maintenance"
                        className="w-4 h-4 text-[#0F8A5F] rounded focus:ring-[#0F8A5F]"
                      />
                      <label htmlFor="maintenance" className="text-sm text-[#667085]">
                        Enable maintenance mode
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "appearance" && (
                <div className="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
                  <h2 className="text-lg font-semibold text-[#1F2933] mb-6">Appearance Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-[#667085] mb-2">
                        Primary Color
                      </label>
                      <div className="flex items-center gap-4">
                        <input
                          type="color"
                          defaultValue="#0F8A5F"
                          className="h-10 w-20 rounded border border-gray-300"
                        />
                        <input
                          type="text"
                          defaultValue="#0F8A5F"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#667085] mb-2">
                        Secondary Color
                      </label>
                      <div className="flex items-center gap-4">
                        <input
                          type="color"
                          defaultValue="#123A63"
                          className="h-10 w-20 rounded border border-gray-300"
                        />
                        <input
                          type="text"
                          defaultValue="#123A63"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#667085] mb-2">
                        Logo Upload
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-4 md:p-5 lg:p-6 lg:p-8 text-center">
                        <p className="text-sm text-[#667085]">Click to upload or drag and drop</p>
                        <p className="text-xs text-[#667085] mt-1">SVG, PNG, JPG (max. 2MB)</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "notifications" && (
                <div className="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
                  <h2 className="text-lg font-semibold text-[#1F2933] mb-6">Notification Settings</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-[#1F2933]">New Applications</p>
                        <p className="text-sm text-[#667085]">Receive notifications for new investment applications</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-[#0F8A5F] rounded" />
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-[#1F2933]">Application Status Changes</p>
                        <p className="text-sm text-[#667085]">Get notified when application status is updated</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-[#0F8A5F] rounded" />
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-[#1F2933]">New Messages</p>
                        <p className="text-sm text-[#667085]">Notifications for new investor messages</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-[#0F8A5F] rounded" />
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-[#1F2933]">System Updates</p>
                        <p className="text-sm text-[#667085]">Important system notifications and updates</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-[#0F8A5F] rounded" />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "security" && (
                <div className="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
                  <h2 className="text-lg font-semibold text-[#1F2933] mb-6">Security Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-[#667085] mb-2">
                        Session Timeout (minutes)
                      </label>
                      <input
                        type="number"
                        defaultValue="30"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="2fa"
                        defaultChecked
                        className="w-4 h-4 text-[#0F8A5F] rounded"
                      />
                      <label htmlFor="2fa" className="text-sm text-[#667085]">
                        Require two-factor authentication for all users
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="password-policy"
                        defaultChecked
                        className="w-4 h-4 text-[#0F8A5F] rounded"
                      />
                      <label htmlFor="password-policy" className="text-sm text-[#667085]">
                        Enforce strong password policy
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#667085] mb-2">
                        Password Expiry (days)
                      </label>
                      <input
                        type="number"
                        defaultValue="90"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "email" && (
                <div className="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
                  <h2 className="text-lg font-semibold text-[#1F2933] mb-6">Email Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-[#667085] mb-2">
                        SMTP Host
                      </label>
                      <input
                        type="text"
                        placeholder="smtp.example.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#667085] mb-2">
                        SMTP Port
                      </label>
                      <input
                        type="number"
                        defaultValue="587"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#667085] mb-2">
                        From Email
                      </label>
                      <input
                        type="email"
                        defaultValue="noreply@panjakent.tj"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#667085] mb-2">
                        From Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Invest Panjakent"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"
                      />
                    </div>
                    <Button variant="outline">Test Email Configuration</Button>
                  </div>
                </div>
              )}

              {activeTab === "advanced" && (
                <div className="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
                  <h2 className="text-lg font-semibold text-[#1F2933] mb-6">Advanced Settings</h2>
                  <div className="space-y-6">
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Warning:</strong> These settings are for advanced users only. Incorrect configuration may affect system performance.
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#667085] mb-2">
                        Cache Duration (seconds)
                      </label>
                      <input
                        type="number"
                        defaultValue="3600"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#667085] mb-2">
                        API Rate Limit (requests/minute)
                      </label>
                      <input
                        type="number"
                        defaultValue="100"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="debug"
                        className="w-4 h-4 text-[#0F8A5F] rounded"
                      />
                      <label htmlFor="debug" className="text-sm text-[#667085]">
                        Enable debug mode
                      </label>
                    </div>
                    <Button variant="outline" className="text-red-600 border-red-600">
                      Clear All Cache
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminPageLayout>
  );
}
