import { Languages, Plus, Search, Edit, Globe, Check, X } from "lucide-react";
import { AdminPageLayout } from "../admin/AdminPageLayout";
import { Button } from "../ui/button";

export default function AdminLanguagesPage() {
  const languages = [
    {
      id: 1,
      name: "English",
      code: "en",
      flag: "🇬🇧",
      isDefault: true,
      isActive: true,
      translationProgress: 100,
      lastUpdated: "2024-05-20"
    },
    {
      id: 2,
      name: "Tajik",
      code: "tj",
      flag: "🇹🇯",
      isDefault: false,
      isActive: true,
      translationProgress: 95,
      lastUpdated: "2024-05-19"
    },
    {
      id: 3,
      name: "Russian",
      code: "ru",
      flag: "🇷🇺",
      isDefault: false,
      isActive: true,
      translationProgress: 88,
      lastUpdated: "2024-05-18"
    },
    {
      id: 4,
      name: "French",
      code: "fr",
      flag: "🇫🇷",
      isDefault: false,
      isActive: false,
      translationProgress: 45,
      lastUpdated: "2024-05-10"
    },
    {
      id: 5,
      name: "Chinese",
      code: "zh",
      flag: "🇨🇳",
      isDefault: false,
      isActive: false,
      translationProgress: 30,
      lastUpdated: "2024-04-28"
    }
  ];

  const translationKeys = [
    {
      key: "common.welcome",
      en: "Welcome to Invest Panjakent",
      tj: "Хуш омадед ба Invest Panjakent",
      ru: "Добро пожаловать в Invest Panjakent",
      category: "Common"
    },
    {
      key: "nav.opportunities",
      en: "Investment Opportunities",
      tj: "Имконоти сармоягузорӣ",
      ru: "Инвестиционные возможности",
      category: "Navigation"
    },
    {
      key: "nav.guide",
      en: "Investor Guide",
      tj: "Дастури сармоягузор",
      ru: "Руководство инвестора",
      category: "Navigation"
    },
    {
      key: "button.submit",
      en: "Submit",
      tj: "Пешниҳод кардан",
      ru: "Отправить",
      category: "Buttons"
    }
  ];

  return (
    <AdminPageLayout>

      <div className="flex-1">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#1F2933]">Languages</h1>
              <p className="text-[#667085] mt-1">Manage translations and language settings</p>
            </div>
            <Button className="bg-[#0F8A5F] hover:bg-[#0F8A5F]/90 text-white gap-2">
              <Plus className="h-5 w-5" />
              Add Language
            </Button>
          </div>
        </div>

        <div className="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
          <div className="bg-white rounded-lg border border-gray-200 mb-8">
            <div className="p-4 md:p-5 lg:p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-[#1F2933]">Available Languages</h2>
            </div>

            <div className="p-4 md:p-5 lg:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:p-5 lg:p-6">
                {languages.map((lang) => (
                  <div
                    key={lang.id}
                    className={`p-4 md:p-5 lg:p-6 rounded-lg border-2 transition-all ${
                      lang.isActive
                        ? "border-[#0F8A5F] bg-[#0F8A5F]/5"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{lang.flag}</span>
                        <div>
                          <h3 className="font-semibold text-[#1F2933]">{lang.name}</h3>
                          <p className="text-sm text-[#667085]">{lang.code.toUpperCase()}</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        {lang.isDefault && (
                          <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                            Default
                          </span>
                        )}
                        {lang.isActive ? (
                          <Check className="h-5 w-5 text-green-600" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-[#667085]">Translation Progress</span>
                        <span className="font-medium text-[#1F2933]">{lang.translationProgress}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#0F8A5F]"
                          style={{ width: `${lang.translationProgress}%` }}
                        />
                      </div>
                    </div>

                    <p className="text-sm text-[#667085] mb-4">
                      Last updated: {lang.lastUpdated}
                    </p>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className={lang.isActive ? "text-red-600" : "text-green-600"}
                      >
                        {lang.isActive ? "Disable" : "Enable"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-4 md:p-5 lg:p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-[#1F2933]">Translation Keys</h2>
                <Button variant="outline" className="gap-2">
                  <Plus className="h-5 w-5" />
                  Add Translation Key
                </Button>
              </div>
            </div>

            <div className="p-4 md:p-5 lg:p-6 border-b border-gray-200">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#667085]" />
                  <input
                    type="text"
                    placeholder="Search translation keys..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F] focus:border-transparent"
                  />
                </div>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F]">
                  <option>All Categories</option>
                  <option>Common</option>
                  <option>Navigation</option>
                  <option>Buttons</option>
                  <option>Forms</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Key
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      English
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Tajik
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Russian
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {translationKeys.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <code className="text-sm text-[#1F2933] bg-gray-100 px-2 py-1 rounded">
                          {item.key}
                        </code>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                          {item.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[#667085]">{item.en}</td>
                      <td className="px-6 py-4 text-[#667085]">{item.tj}</td>
                      <td className="px-6 py-4 text-[#667085]">{item.ru}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminPageLayout>
  );
}
