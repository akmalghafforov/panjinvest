Improve and extend the existing “Invest Panjakent” website design by adding the private Investor Portal, Government Admin Dashboard, CRM, application review flow, document management, notifications, and reusable system states.

The website is a professional government investment portal for attracting local and foreign investors to Panjakent, Tajikistan. The design should remain official, modern, trustworthy, clean, premium, and investment-focused.

Keep the existing brand style:
- Primary color: #123A63
- Secondary color: #0F8A5F
- Accent color: #D6A536
- Background: #F6F8FA
- Text: #1F2933
- Muted text: #667085
- Use clean cards, badges, tables, timelines, soft shadows, rounded corners, and clear spacing
- Typography should support Tajik, Russian, and English
- Design must be responsive for desktop and mobile

Main goal:
Create the missing back-office and investor portal features that allow investors and government staff to manage investment applications from submission to decision.

---

1. INVESTOR PORTAL DASHBOARD

Create a private investor dashboard after login.

Dashboard sections:
- Welcome block with investor name
- Profile completion card
- My submitted interests / applications
- Saved opportunities
- Document requests
- Upcoming meetings
- Messages from government
- Application status timeline

Application status timeline:
Submitted → Under Review → Case Manager Assigned → Documents Requested → Meeting Scheduled → Decision

Application cards should show:
- Project name
- Sector
- Submitted date
- Current status
- Assigned officer
- Next action
- View details button

Add empty states:
- No applications yet
- No saved opportunities yet
- No messages yet

---

2. INVESTOR APPLICATION DETAIL PAGE

Create a page where the investor can track one application.

Sections:
- Application summary
- Selected project
- Current status
- Status timeline
- Assigned case manager
- Uploaded documents
- Requested documents
- Meeting schedule
- Message history
- Next required action

Actions:
- Upload document
- Send message
- Book meeting
- Download submitted application
- Withdraw application

---

3. DOCUMENT UPLOAD CHECKLIST

Create a document upload component for the investor portal.

Required document rows:
- Passport / ID
- Company registration document
- Business proposal
- Financial information
- Power of attorney, if applicable
- Additional documents

Each row should include:
- Document title
- Short description
- Required / optional badge
- Upload status:
  - Not uploaded
  - Uploaded
  - Under review
  - Approved
  - Rejected / needs correction
- Upload button
- Replace document button
- Download file button
- Admin comment / correction reason

---

4. GOVERNMENT ADMIN DASHBOARD

Create an admin dashboard for government staff.

Dashboard cards:
- New interests
- Applications under review
- Meetings this week
- Pending documents
- Projects needing updates

Add lead pipeline:
New → Contacted → Meeting Scheduled → Negotiation → Documents Pending → Approved → Active → Closed / Rejected

Recent applications table columns:
- Investor name
- Country
- Investor type
- Sector interest
- Selected project
- Investment amount
- Current status
- Responsible officer
- Last contact
- Next follow-up
- Action

Admin sidebar:
- Dashboard
- Investment Projects
- Investors / CRM
- Applications
- Map Objects / Land Plots
- Documents
- Statistics
- News and Events
- Pages / CMS
- Languages
- Users and Roles
- Activity Log
- Settings

---

5. ADMIN APPLICATION REVIEW PAGE

Create a detailed admin review page for one investment application.

Sections:
- Investor profile
- Selected opportunity
- Submitted form data
- Uploaded documents
- Internal notes
- Message history
- Status update control
- Assign case manager
- Schedule meeting
- Decision record

Admin actions:
- Approve
- Reject
- Request more documents
- Assign officer
- Schedule meeting
- Send message
- Add internal note

Add document review actions:
- View document
- Approve document
- Reject document
- Request correction
- Add comment

---

6. INVESTOR CRM PAGE

Create a CRM page for managing investors.

CRM stages:
- New
- Contacted
- Meeting Scheduled
- Negotiation
- Documents Pending
- Approved
- Active
- Closed / Rejected

CRM table columns:
- Investor name
- Country
- Investor type
- Sector interest
- Investment amount
- Stage
- Responsible officer
- Last contact
- Next follow-up
- Action

Add filters:
- Country
- Sector
- Stage
- Responsible officer
- Investment amount
- Date submitted

Add quick actions:
- Assign officer
- Schedule meeting
- Send message
- Change stage
- Add note

---

7. NOTIFICATIONS AND MESSAGES

Create notification components for both investor and admin.

Investor notifications:
- Application submitted
- Application under review
- Documents requested
- Meeting scheduled
- Decision made
- New message from government

Admin notifications:
- New interest submitted
- Investor uploaded document
- Meeting request submitted
- Follow-up overdue
- Application waiting for decision

Create a message center:
- Inbox layout
- Conversation thread
- Message input
- Attachment upload
- Read/unread states

---

8. ADMIN SEARCH

Create admin search UI.

Admin search should search:
- Investors
- Applications
- Projects
- Documents
- Officers
- Messages

Search result card should show:
- Result title
- Type badge
- Short description
- Related status / officer / project
- Open button

---

9. EMPTY, LOADING, ERROR, AND SUCCESS STATES

Create reusable UI states.

Empty states:
- No projects found
- No saved opportunities
- No applications yet
- No documents uploaded
- No messages yet
- No meetings scheduled

Loading states:
- Project card skeleton
- Dashboard skeleton
- Admin table loading
- Form submitting
- File uploading
- Message sending

Error states:
- Required field missing
- Invalid email
- Invalid phone number
- File too large
- Unsupported file type
- Failed upload
- Form submission failed
- Server error
- No internet connection

Success states:
- Form submitted
- Document uploaded
- Meeting booked
- Message sent
- Application updated
- Status changed successfully
- Officer assigned successfully

---

10. MOBILE RESPONSIVE REQUIREMENTS

Create mobile versions for key portal and admin flows.

Mobile requirements:
- Investor dashboard cards stacked vertically
- Application timeline readable on mobile
- Document upload rows converted into mobile cards
- Admin tables converted into mobile cards
- CRM filters shown in collapsible drawer
- Large tap-friendly buttons
- Message center optimized for mobile
- Sticky action buttons for application review

---

11. DESIGN COMPONENTS TO CREATE

Create a consistent component library.

Buttons:
- Primary CTA
- Secondary button
- Outline button
- Danger button
- Icon button

Badges:
- Sector badge
- Status badge
- Required / optional badge
- Document status badge
- Application status badge
- CRM stage badge

Cards:
- Project card
- Investor application card
- Contact card
- Statistic card
- Document card
- Admin dashboard card
- CRM investor card

Forms:
- Text input
- Select dropdown
- Phone input
- File upload
- Date picker
- Textarea
- Checkbox
- Stepper

Tables:
- Applications table
- CRM table
- Documents table
- Admin users table

Other:
- Timeline
- Notification dropdown
- Message thread
- Empty state
- Loading skeleton
- Error alert
- Success alert
- Sticky CTA card
- Admin sidebar
- User profile dropdown

Final instruction:
Update the existing Invest Panjakent Figma design with the missing investor portal, admin dashboard, CRM, application review, messaging, document management, and system state features. The platform should feel like a serious working investment management system, not just a static government website.