import { FolderOpen, Plus, Search, Filter, FileText, Download, Eye, Trash2, Upload } from "lucide-react";
import { AdminPageLayout } from "../admin/AdminPageLayout";
import { Button } from "../ui/button";

export default function AdminDocumentsPage() {
  const documents = [
    {
      id: 1,
      name: "Investment Policy Framework 2024",
      type: "Policy Document",
      category: "Policies",
      size: "2.4 MB",
      uploadedBy: "Admin",
      uploadedDate: "2024-05-15",
      downloads: 145
    },
    {
      id: 2,
      name: "Tax Incentives Guide",
      type: "PDF",
      category: "Guidelines",
      size: "1.8 MB",
      uploadedBy: "Sarah Johnson",
      uploadedDate: "2024-05-10",
      downloads: 89
    },
    {
      id: 3,
      name: "Application Form Template",
      type: "Word Document",
      category: "Forms",
      size: "456 KB",
      uploadedBy: "Michael Chen",
      uploadedDate: "2024-05-08",
      downloads: 234
    },
    {
      id: 4,
      name: "Investment Opportunities Catalog",
      type: "PDF",
      category: "Catalogs",
      size: "5.2 MB",
      uploadedBy: "Admin",
      uploadedDate: "2024-05-01",
      downloads: 312
    },
    {
      id: 5,
      name: "Legal Requirements Checklist",
      type: "Excel",
      category: "Guidelines",
      size: "128 KB",
      uploadedBy: "David Park",
      uploadedDate: "2024-04-28",
      downloads: 67
    }
  ];

  const categories = [
    { name: "All Documents", count: 48, color: "bg-blue-50 text-blue-600" },
    { name: "Policies", count: 12, color: "bg-purple-50 text-purple-600" },
    { name: "Guidelines", count: 18, color: "bg-green-50 text-green-600" },
    { name: "Forms", count: 10, color: "bg-orange-50 text-orange-600" },
    { name: "Catalogs", count: 8, color: "bg-pink-50 text-pink-600" }
  ];

  return (
    <AdminPageLayout>

      <div className="flex-1">
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#1F2933]">Documents</h1>
              <p className="text-[#667085] mt-1">Manage investment-related documents and resources</p>
            </div>
            <Button className="bg-[#0F8A5F] hover:bg-[#0F8A5F]/90 text-white gap-2">
              <Upload className="h-5 w-5" />
              Upload Document
            </Button>
          </div>
        </div>

        <div className="p-4 md:p-4 md:p-5 lg:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:p-5 lg:p-6 mb-8">
            {categories.map((category) => (
              <div key={category.name} className="bg-white rounded-lg border border-gray-200 p-4 md:p-5 lg:p-6">
                <p className="text-sm text-[#667085] mb-2">{category.name}</p>
                <p className={`text-xl md:text-2xl font-bold ${category.color}`}>{category.count}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-4 md:p-5 lg:p-6 border-b border-gray-200">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#667085]" />
                  <input
                    type="text"
                    placeholder="Search documents..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F8A5F] focus:border-transparent"
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Document Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Size
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Uploaded By
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Upload Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Downloads
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#667085] uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {documents.map((doc) => (
                    <tr key={doc.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-50 rounded-lg">
                            <FileText className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-[#1F2933]">{doc.name}</p>
                            <p className="text-sm text-[#667085]">{doc.type}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                          {doc.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-[#667085]">
                        {doc.size}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-[#667085]">
                        {doc.uploadedBy}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-[#667085]">
                        {doc.uploadedDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-[#667085]">
                        {doc.downloads}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
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
