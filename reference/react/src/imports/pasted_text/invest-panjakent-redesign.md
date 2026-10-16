Improve and extend the existing “Invest Panjakent” website design by adding all missing investor action flows, especially the “Submit Interest” feature.

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
Add all missing features that help an investor clearly understand:
1. What investment opportunities are available
2. How to submit interest
3. What happens after submitting interest
4. Who will help them
5. How the government team manages and reviews applications

Create or improve the following screens and components:

---

1. GLOBAL HEADER CTA

Add a visible “Submit Interest” button in the main header.

Header should include:
- Logo / Invest Panjakent identity
- Navigation menu
- Search icon or search input
- Language selector: TJ / RU / EN
- Investor Portal button
- Primary CTA button: “Submit Interest”

On mobile:
- Add hamburger menu
- Keep “Submit Interest” visible as a sticky bottom CTA on important pages
- Make language switcher easy to access

---

2. SUBMIT INVESTMENT INTEREST FORM

Create a dedicated “Submit Investment Interest” page or modal.

Use a clean multi-step form layout.

Step 1: Investor Information
Fields:
- Full name
- Company name
- Country
- Email
- Phone / WhatsApp
- Investor type dropdown:
  - Individual investor
  - Company
  - Investment fund
  - Development organization
  - Local entrepreneur

Step 2: Investment Interest
Fields:
- Interested sector dropdown:
  - Tourism
  - Agriculture
  - Food Processing
  - Logistics
  - Renewable Energy
  - Light Manufacturing
  - Handicrafts
  - Other
- Selected project dropdown
- Estimated investment amount
- Preferred location
- Expected investment timeline:
  - Immediately
  - 3–6 months
  - 6–12 months
  - More than 1 year

Step 3: Message and Documents
Fields:
- Short message / description of interest
- Questions or support needed
- Optional upload: business proposal
- Optional upload: company profile
- Optional upload: financial information

Step 4: Confirmation
Fields:
- Checkbox: “I agree to be contacted by the Panjakent investment support team.”
- Checkbox: “I confirm that the provided information is accurate.”
- Submit button: “Submit Interest”

UX requirements:
- Show progress stepper
- Show required fields clearly
- Add validation messages
- Add file upload cards
- Add help text for complex fields
- Make the form simple and investor-friendly
- Add side information card explaining what happens after submission

---

3. SUBMIT INTEREST SUCCESS PAGE

Create a success confirmation screen after form submission.

Content:
- Success icon
- Title: “Thank you for your interest”
- Message: “Your investment interest has been submitted successfully. Our investor support team will review your request and contact you.”
- Application reference number example: INV-PNJ-2026-00024

Add next steps timeline:
1. Interest submitted
2. Initial review
3. Case manager assigned
4. Consultation scheduled
5. Documents requested
6. Decision / next action

Buttons:
- Go to Investor Portal
- View Opportunities
- Contact Investor Support

Add contact support card:
- Hotline
- WhatsApp
- Telegram
- Email

---

4. PROJECT DETAIL PAGE CTA IMPROVEMENTS

Improve the investment project detail page.

Add a sticky right-side action card on desktop and sticky bottom action bar on mobile.

Action card should include:
- Required investment
- Location
- Sector
- Project stage
- Status
- Responsible department
- Main button: “Submit Interest in This Project”
- Secondary button: “Download Investment Brief”
- Secondary button: “Book Consultation”
- Secondary button: “Ask a Question”
- Save opportunity icon/button

When clicking “Submit Interest in This Project”, the Submit Interest form should open with the selected project automatically filled.

Add trust information:
- Verified by government
- Last updated date
- Responsible department
- Official contact person

---

5. INVESTMENT OPPORTUNITIES CATALOG IMPROVEMENTS

Improve the project catalog page.

Each project card should include:
- Project image
- Sector badge
- Status badge
- Project title
- Location
- Required investment
- Estimated ROI
- Land size
- Infrastructure availability icons
- Short description
- Buttons:
  - View Project
  - Download Brief
  - Submit Interest

Add filters:
- Sector
- Required investment amount
- Location
- Land size
- Project stage
- Status
- ROI estimate
- Infrastructure availability

Add sorting:
- Newest
- Lowest investment amount
- Highest ROI
- Most ready for investment
- Featured projects

Add search:
- Search by project name, sector, or location

Add states:
- Loading cards
- No projects found
- Filters applied
- Clear filters button

---

6. INVESTOR PORTAL DASHBOARD

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

7. INVESTOR APPLICATION DETAIL PAGE

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

8. DOCUMENT UPLOAD CHECKLIST

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

9. BOOK CONSULTATION FEATURE

Create a “Book Consultation” page or modal.

Form fields:
- Full name
- Email
- Phone / WhatsApp
- Preferred language: Tajik / Russian / English
- Preferred date
- Preferred time
- Consultation type:
  - Online meeting
  - Phone call
  - Office visit
- Topic:
  - Investment opportunity
  - Land allocation
  - Legal / tax questions
  - Project documents
  - Government support
- Message

Add confirmation state:
- Meeting request submitted
- Expected response time
- Contact support options

---

10. CONTACT / INVESTOR SUPPORT PAGE IMPROVEMENTS

Make the contact page action-focused.

Add:
- Investor hotline card
- WhatsApp button
- Telegram button
- Email contact
- Book consultation button
- Submit interest button
- Department contact cards
- Office address
- Working hours
- Office location map
- FAQ preview

Add trust notices:
- Official verified contact notice
- Anti-corruption notice
- “All investor requests are registered and reviewed officially.”

---

11. GOVERNMENT ADMIN DASHBOARD

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

12. ADMIN APPLICATION REVIEW PAGE

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

13. INVESTOR CRM PAGE

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

14. NOTIFICATIONS AND MESSAGES

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

15. GLOBAL SEARCH

Create global search UI.

Public website search should search:
- Investment projects
- Sectors
- Documents
- Investor guide
- News
- FAQs

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
- Related sector/location
- Open button

---

16. EMPTY, LOADING, AND ERROR STATES

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
- Map loading
- Form submitting
- File uploading

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

---

17. MULTILINGUAL REQUIREMENTS

Add language support UI.

Languages:
- Tajik
- Russian
- English

Requirements:
- Language selector in top bar
- Language selector in mobile menu
- Document cards show available languages
- Forms should preserve entered data when switching language
- Long Tajik/Russian text should not break card layout
- Use flexible button widths
- Avoid text overflow

---

18. MOBILE RESPONSIVE REQUIREMENTS

Create mobile versions for key flows.

Mobile requirements:
- Sticky bottom “Submit Interest” CTA on project pages
- Collapsible catalog filters
- Mobile filter drawer
- Multi-step form optimized for mobile
- Large tap-friendly buttons
- WhatsApp and Telegram buttons easy to access
- Project cards stacked vertically
- Admin tables converted into mobile cards
- Map filters shown as bottom drawer

---

19. DESIGN COMPONENTS TO CREATE

Create a consistent component library:

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

Cards:
- Project card
- Investor application card
- Contact card
- Statistic card
- Document card
- Admin dashboard card

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

---

Final instruction:
Update the existing Invest Panjakent Figma design with these missing features. Keep the same visual style and make the design feel like a serious, active investment platform, not just a government information website. Every major page must clearly guide the investor toward a next action: view opportunity, submit interest, download brief, book consultation, or contact investor support.