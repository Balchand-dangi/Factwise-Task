import React, { useState, useMemo } from 'react';
import { Users, TrendingUp, DollarSign, Award, ArrowUpDown, Search } from 'lucide-react';

const EmployeeDashboard = () => {
  const [rowData] = useState([
    { id: 1, firstName: "John", lastName: "Smith", email: "john.smith@company.com", department: "Engineering", position: "Senior Developer", salary: 95000, hireDate: "2021-03-15", age: 32, location: "New York", performanceRating: 4.2, projectsCompleted: 12, isActive: true, skills: ["JavaScript", "React", "Node.js"], manager: "Sarah Johnson" },
    { id: 2, firstName: "Emily", lastName: "Davis", email: "emily.davis@company.com", department: "Marketing", position: "Marketing Manager", salary: 78000, hireDate: "2020-07-22", age: 29, location: "Los Angeles", performanceRating: 4.5, projectsCompleted: 8, isActive: true, skills: ["Digital Marketing", "SEO", "Analytics"], manager: "Michael Brown" },
    { id: 3, firstName: "Michael", lastName: "Brown", email: "michael.brown@company.com", department: "Marketing", position: "VP Marketing", salary: 125000, hireDate: "2019-01-10", age: 38, location: "Los Angeles", performanceRating: 4.7, projectsCompleted: 15, isActive: true, skills: ["Strategy", "Leadership", "Brand Management"], manager: null },
    { id: 4, firstName: "Sarah", lastName: "Johnson", email: "sarah.johnson@company.com", department: "Engineering", position: "Engineering Manager", salary: 115000, hireDate: "2018-11-05", age: 35, location: "New York", performanceRating: 4.6, projectsCompleted: 18, isActive: true, skills: ["Team Leadership", "Architecture", "Python"], manager: "David Wilson" },
    { id: 5, firstName: "David", lastName: "Wilson", email: "david.wilson@company.com", department: "Engineering", position: "CTO", salary: 180000, hireDate: "2017-05-12", age: 42, location: "New York", performanceRating: 4.8, projectsCompleted: 25, isActive: true, skills: ["Technical Strategy", "Leadership", "Cloud Architecture"], manager: null },
    { id: 6, firstName: "Lisa", lastName: "Garcia", email: "lisa.garcia@company.com", department: "Sales", position: "Sales Representative", salary: 65000, hireDate: "2022-02-28", age: 26, location: "Chicago", performanceRating: 3.9, projectsCompleted: 6, isActive: true, skills: ["CRM", "Negotiation", "Customer Relations"], manager: "Robert Martinez" },
    { id: 7, firstName: "Robert", lastName: "Martinez", email: "robert.martinez@company.com", department: "Sales", position: "Sales Manager", salary: 92000, hireDate: "2020-09-14", age: 34, location: "Chicago", performanceRating: 4.3, projectsCompleted: 11, isActive: true, skills: ["Sales Strategy", "Team Management", "B2B Sales"], manager: "Jennifer Lee" },
    { id: 8, firstName: "Jennifer", lastName: "Lee", email: "jennifer.lee@company.com", department: "Sales", position: "VP Sales", salary: 135000, hireDate: "2019-06-18", age: 40, location: "Chicago", performanceRating: 4.6, projectsCompleted: 16, isActive: true, skills: ["Strategic Sales", "Leadership", "Market Analysis"], manager: null },
    { id: 9, firstName: "James", lastName: "Anderson", email: "james.anderson@company.com", department: "HR", position: "HR Specialist", salary: 58000, hireDate: "2021-08-30", age: 28, location: "Austin", performanceRating: 4.0, projectsCompleted: 7, isActive: true, skills: ["Recruitment", "Employee Relations", "HRIS"], manager: "Karen White" },
    { id: 10, firstName: "Karen", lastName: "White", email: "karen.white@company.com", department: "HR", position: "HR Manager", salary: 85000, hireDate: "2019-12-02", age: 36, location: "Austin", performanceRating: 4.4, projectsCompleted: 13, isActive: true, skills: ["HR Strategy", "Policy Development", "Leadership"], manager: null },
    { id: 11, firstName: "Alex", lastName: "Thompson", email: "alex.thompson@company.com", department: "Engineering", position: "Junior Developer", salary: 72000, hireDate: "2023-01-16", age: 24, location: "New York", performanceRating: 3.8, projectsCompleted: 4, isActive: true, skills: ["Java", "Spring Boot", "MySQL"], manager: "Sarah Johnson" },
    { id: 12, firstName: "Maria", lastName: "Rodriguez", email: "maria.rodriguez@company.com", department: "Finance", position: "Financial Analyst", salary: 68000, hireDate: "2021-11-08", age: 30, location: "Miami", performanceRating: 4.1, projectsCompleted: 9, isActive: true, skills: ["Financial Modeling", "Excel", "SAP"], manager: "Thomas Clark" },
    { id: 13, firstName: "Thomas", lastName: "Clark", email: "thomas.clark@company.com", department: "Finance", position: "Finance Manager", salary: 98000, hireDate: "2018-04-25", age: 37, location: "Miami", performanceRating: 4.5, projectsCompleted: 14, isActive: true, skills: ["Financial Planning", "Budget Management", "Leadership"], manager: null },
    { id: 14, firstName: "Amanda", lastName: "Taylor", email: "amanda.taylor@company.com", department: "Marketing", position: "Content Specialist", salary: 55000, hireDate: "2022-06-12", age: 25, location: "Los Angeles", performanceRating: 3.7, projectsCompleted: 5, isActive: true, skills: ["Content Writing", "Social Media", "Adobe Creative"], manager: "Michael Brown" },
    { id: 15, firstName: "Ryan", lastName: "Miller", email: "ryan.miller@company.com", department: "Engineering", position: "DevOps Engineer", salary: 88000, hireDate: "2020-10-19", age: 31, location: "Seattle", performanceRating: 4.3, projectsCompleted: 10, isActive: true, skills: ["AWS", "Docker", "Kubernetes"], manager: "Sarah Johnson" },
    { id: 16, firstName: "Jessica", lastName: "Moore", email: "jessica.moore@company.com", department: "Sales", position: "Account Executive", salary: 75000, hireDate: "2021-04-03", age: 27, location: "Denver", performanceRating: 4.0, projectsCompleted: 8, isActive: false, skills: ["Account Management", "Salesforce", "Presentation"], manager: "Robert Martinez" },
    { id: 17, firstName: "Daniel", lastName: "Harris", email: "daniel.harris@company.com", department: "Finance", position: "Senior Accountant", salary: 73000, hireDate: "2019-08-14", age: 33, location: "Miami", performanceRating: 4.2, projectsCompleted: 12, isActive: true, skills: ["Accounting", "Tax Preparation", "QuickBooks"], manager: "Thomas Clark" },
    { id: 18, firstName: "Nicole", lastName: "Jackson", email: "nicole.jackson@company.com", department: "HR", position: "Recruiter", salary: 62000, hireDate: "2022-09-05", age: 29, location: "Austin", performanceRating: 3.9, projectsCompleted: 6, isActive: true, skills: ["Talent Acquisition", "LinkedIn Recruiter", "Interviewing"], manager: "Karen White" },
    { id: 19, firstName: "Kevin", lastName: "Wright", email: "kevin.wright@company.com", department: "Engineering", position: "QA Engineer", salary: 76000, hireDate: "2020-12-07", age: 30, location: "Seattle", performanceRating: 4.1, projectsCompleted: 11, isActive: true, skills: ["Test Automation", "Selenium", "API Testing"], manager: "Sarah Johnson" },
    { id: 20, firstName: "Stephanie", lastName: "Lopez", email: "stephanie.lopez@company.com", department: "Marketing", position: "Digital Marketing Specialist", salary: 64000, hireDate: "2021-12-20", age: 26, location: "Phoenix", performanceRating: 3.8, projectsCompleted: 7, isActive: true, skills: ["Google Ads", "Facebook Ads", "Email Marketing"], manager: "Michael Brown" }
  ]);

  const stats = useMemo(() => {
    const activeEmployees = rowData.filter(e => e.isActive).length;
    const avgSalary = Math.round(rowData.reduce((sum, e) => sum + e.salary, 0) / rowData.length);
    const avgRating = (rowData.reduce((sum, e) => sum + e.performanceRating, 0) / rowData.length).toFixed(2);
    const totalProjects = rowData.reduce((sum, e) => sum + e.projectsCompleted, 0);
    
    return { activeEmployees, avgSalary, avgRating, totalProjects };
  }, [rowData]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('id');
  const [sortDirection, setSortDirection] = useState('asc');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const departments = useMemo(() => {
    return ['all', ...new Set(rowData.map(e => e.department))];
  }, [rowData]);

  const filteredAndSortedData = useMemo(() => {
    let filtered = rowData.filter(employee => {
      const matchesSearch = searchTerm === '' || 
        Object.values(employee).some(val => 
          String(val).toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesDepartment = filterDepartment === 'all' || employee.department === filterDepartment;
      return matchesSearch && matchesDepartment;
    });

    filtered.sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      const modifier = sortDirection === 'asc' ? 1 : -1;
      
      if (typeof aVal === 'number') return (aVal - bVal) * modifier;
      return String(aVal).localeCompare(String(bVal)) * modifier;
    });

    return filtered;
  }, [rowData, searchTerm, sortField, sortDirection, filterDepartment]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedData.slice(start, start + itemsPerPage);
  }, [filteredAndSortedData, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
    setCurrentPage(1);
  };

  const getDepartmentColor = (dept) => {
    const colors = {
      'Engineering': 'bg-blue-100 text-blue-800',
      'Marketing': 'bg-pink-100 text-pink-800',
      'Sales': 'bg-green-100 text-green-800',
      'HR': 'bg-orange-100 text-orange-800',
      'Finance': 'bg-purple-100 text-purple-800'
    };
    return colors[dept] || 'bg-gray-100 text-gray-800';
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return 'text-green-600';
    if (rating >= 4.0) return 'text-blue-600';
    if (rating >= 3.5) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Employee Dashboard</h1>
          <p className="text-slate-600">Comprehensive overview of company workforce</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-5 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Active Employees</p>
                <p className="text-2xl font-bold text-slate-800 mt-1">{stats.activeEmployees}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="text-blue-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Avg Salary</p>
                <p className="text-2xl font-bold text-slate-800 mt-1">${(stats.avgSalary / 1000).toFixed(0)}K</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <DollarSign className="text-green-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Avg Performance</p>
                <p className="text-2xl font-bold text-slate-800 mt-1">{stats.avgRating}</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Award className="text-yellow-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-5 border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Total Projects</p>
                <p className="text-2xl font-bold text-slate-800 mt-1">{stats.totalProjects}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <TrendingUp className="text-purple-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 mb-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search employees..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <select
              value={filterDepartment}
              onChange={(e) => { setFilterDepartment(e.target.value); setCurrentPage(1); }}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>
                  {dept === 'all' ? 'All Departments' : dept}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th onClick={() => handleSort('id')} className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:bg-slate-100">
                    <div className="flex items-center gap-1">
                      ID <ArrowUpDown size={14} />
                    </div>
                  </th>
                  <th onClick={() => handleSort('firstName')} className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:bg-slate-100">
                    <div className="flex items-center gap-1">
                      Name <ArrowUpDown size={14} />
                    </div>
                  </th>
                  <th onClick={() => handleSort('email')} className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:bg-slate-100">
                    <div className="flex items-center gap-1">
                      Email <ArrowUpDown size={14} />
                    </div>
                  </th>
                  <th onClick={() => handleSort('department')} className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:bg-slate-100">
                    <div className="flex items-center gap-1">
                      Department <ArrowUpDown size={14} />
                    </div>
                  </th>
                  <th onClick={() => handleSort('position')} className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:bg-slate-100">
                    <div className="flex items-center gap-1">
                      Position <ArrowUpDown size={14} />
                    </div>
                  </th>
                  <th onClick={() => handleSort('salary')} className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:bg-slate-100">
                    <div className="flex items-center gap-1">
                      Salary <ArrowUpDown size={14} />
                    </div>
                  </th>
                  <th onClick={() => handleSort('performanceRating')} className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:bg-slate-100">
                    <div className="flex items-center gap-1">
                      Rating <ArrowUpDown size={14} />
                    </div>
                  </th>
                  <th onClick={() => handleSort('location')} className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider cursor-pointer hover:bg-slate-100">
                    <div className="flex items-center gap-1">
                      Location <ArrowUpDown size={14} />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {paginatedData.map((employee) => (
                  <tr key={employee.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 text-sm text-slate-900 font-medium">{employee.id}</td>
                    <td className="px-4 py-3 text-sm text-slate-900">
                      {employee.firstName} {employee.lastName}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600">{employee.email}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDepartmentColor(employee.department)}`}>
                        {employee.department}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-700">{employee.position}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-green-600">
                      ${employee.salary.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`font-semibold ${getRatingColor(employee.performanceRating)}`}>
                        ★ {employee.performanceRating}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-700">{employee.location}</td>
                    <td className="px-4 py-3 text-sm">
                      {employee.isActive ? (
                        <span className="text-green-600 font-semibold">● Active</span>
                      ) : (
                        <span className="text-red-600 font-semibold">● Inactive</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="bg-slate-50 px-4 py-3 border-t border-slate-200 flex items-center justify-between">
            <div className="text-sm text-slate-600">
              Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredAndSortedData.length)} of {filteredAndSortedData.length} employees
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border border-slate-300 rounded-md text-sm font-medium text-slate-700 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded-md text-sm font-medium ${
                    currentPage === i + 1
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'border-slate-300 text-slate-700 hover:bg-white'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border border-slate-300 rounded-md text-sm font-medium text-slate-700 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;