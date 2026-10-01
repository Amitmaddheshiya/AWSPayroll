# AWSPayroll Customer User Guide

## Table of Contents
1. [Introduction](#1-introduction)
2. [Key Features](#2-key-features)
3. [System Requirements](#3-system-requirements)
4. [Installation Guide](#4-installation-guide)
5. [First-Time Setup](#5-first-time-setup)
6. [How to Use the Software](#6-how-to-use-the-software)
7. [Settings Guide](#7-settings-guide)
8. [Daily Usage](#8-daily-usage)
9. [Troubleshooting](#9-troubleshooting)
10. [Frequently Asked Questions](#10-frequently-asked-questions)
11. [Best Practices](#11-best-practices)
12. [Presentation Version](#12-presentation-version)

---

## 1. Introduction

### What is AWSPayroll?

AWSPayroll is a comprehensive mobile payroll management application designed for businesses to manage employee attendance, leave, salary, and expenses. The app serves two types of users:

- **Employees and Leaders**: Regular workforce members who check in/out, apply for leave, view salary details, and submit expenses
- **Admins**: HR and management personnel who oversee the entire payroll system, manage employees, approve requests, and configure payroll policies

### Problems It Solves

AWSPayroll eliminates the need for manual attendance tracking, paper-based leave applications, and complex salary calculations. It provides:

- Real-time attendance tracking with GPS verification
- Automated leave management and approval workflow
- Transparent salary structure and monthly payroll records
- Expense submission and reimbursement tracking
- Centralized employee database and team management
- Policy-driven payroll calculations with statutory compliance

### Who Should Use It

- **Small to Medium Businesses**: Companies with 10-500 employees seeking digital payroll management
- **HR Managers**: Administrators responsible for workforce management and payroll processing
- **Team Leaders**: Supervisors who need to track team attendance and coordinate with HR
- **Employees**: All workforce members who need to mark attendance, apply for leave, and access salary information

### Main Benefits

- **Time-Saving**: Automates attendance tracking, leave approvals, and salary calculations
- **Accuracy**: GPS-verified check-in/check-out eliminates buddy punching
- **Transparency**: Employees can view their attendance, leave balance, and salary details anytime
- **Compliance**: Built-in support for PF, ESI, Professional Tax, and TDS calculations
- **Mobility**: Access payroll data from anywhere with internet connectivity
- **Security**: Role-based access ensures sensitive data is protected

---

## 2. Key Features

### For Employees and Leaders

#### GPS-Based Attendance Tracking
- **What it does**: Allows employees to check in and check out using their mobile device with GPS location verification
- **Why it's useful**: Ensures accurate attendance records by verifying employee location during check-in/check-out. Prevents fraudulent attendance marking
- **Example**: An onsite employee arrives at the office, opens the app, and taps "Check In". The app verifies they are within the office GPS radius and records the time and location

#### Leave Application Management
- **What it does**: Enables employees to submit leave requests with type, dates, and reason. Admins can approve or reject these requests
- **Why it's useful**: Streamlines the leave approval process, maintains leave history, and provides transparency to employees about their leave status
- **Example**: An employee needs to take sick leave for 3 days. They open the Leave screen, select "Sick Leave", choose dates from the calendar, provide a reason, and submit. The admin receives notification and can approve or reject

#### Salary Structure View
- **What it does**: Displays the complete salary structure including earnings (basic, HRA, allowances) and deductions (PF, ESI, tax)
- **Why it's useful**: Employees can understand their compensation breakdown and verify salary calculations
- **Example**: An employee views their Salary screen to see their basic salary, HRA, special allowance, PF deduction, and net pay for the current month

#### Expense Submission
- **What it does**: Allows employees to submit work-related expenses for reimbursement approval
- **Why it's useful**: Simplifies expense reporting and ensures timely reimbursement for business expenses
- **Example**: An employee travels for work and incurs taxi fare. They submit the expense with type "Travel", amount, and description. The admin reviews and approves for reimbursement

#### Profile Management
- **What it does**: Displays employee personal information, job details, bank information, and compliance documents
- **Why it's useful**: Employees can verify their recorded information and ensure accuracy for payroll processing
- **Example**: An employee checks their Profile screen to confirm their bank account details and PAN number are correctly recorded

#### Team Information
- **What it does**: Shows team members and team structure
- **Why it's useful**: Helps employees understand their team composition and reporting structure
- **Example**: A new employee views the Team screen to see their team leader and fellow team members

#### Company Policies Access
- **What it does**: Provides access to company policies including leave rules, attendance policies, and payroll guidelines
- **Why it's useful**: Employees can stay informed about company rules and regulations
- **Example**: An employee reviews Company Policies to understand the weekly off days and leave application process

### For Admins

#### Dashboard Overview
- **What it does**: Displays real-time statistics including total employees, present today, absent today, on leave, pending leave requests, and payroll summary
- **Why it's useful**: Provides instant visibility into workforce status and payroll metrics for informed decision-making
- **Example**: An HR manager opens the Dashboard to see that 45 employees are present today, 3 are absent, and 2 leave requests are pending approval

#### Employee Management
- **What it does**: Allows admins to add, edit, and manage employee records with comprehensive details including personal info, job details, bank information, and compliance documents
- **Why it's useful**: Maintains an up-to-date employee database essential for accurate payroll processing
- **Example**: An HR admin adds a new employee by entering their name, contact details, designation, bank account, PAN, and other required information

#### Team Management
- **What it does**: Enables creation and management of teams with team leaders and team members
- **Why it's useful**: Organizes workforce into logical groups for better management and reporting
- **Example**: An admin creates a "Development Team" with a team leader and assigns 5 developers to the team

#### Attendance Oversight
- **What it does**: Provides comprehensive attendance view including present/absent today, monthly attendance records, and ability to edit or correct attendance
- **Why it's useful**: Allows HR to monitor attendance patterns, address issues, and make corrections when needed
- **Example**: An admin notices an employee is marked absent but has a valid reason. The admin edits the attendance to mark them present with a note

#### Leave Approval Workflow
- **What it does**: Enables admins to view all leave requests, approve or reject them, and provide rejection reasons
- **Why it's useful**: Streamlines leave management and ensures proper documentation
- **Example**: An admin reviews a leave request, sees it's for a valid reason, and approves it. The employee receives notification of approval

#### Expense Approval
- **What it does**: Allows admins to review and approve or reject expense submissions
- **Why it's useful**: Controls expense reimbursements and ensures policy compliance
- **Example**: An admin reviews a travel expense, verifies it's within policy limits, and approves it for payment

#### Salary Structure Assignment
- **What it does**: Enables admins to assign and manage salary structures for each employee with automatic calculation of deductions and net pay
- **Why it's useful**: Ensures accurate and consistent salary processing with statutory compliance
- **Example**: An admin assigns a salary structure to an employee with basic salary, HRA, and allowances. The system automatically calculates PF, ESI, and TDS deductions

#### Monthly Payroll Processing
- **What it does**: Displays monthly salary records showing calculated pay based on attendance, leave, and approved expenses
- **Why it's useful**: Provides visibility into monthly payroll calculations and facilitates payment processing
- **Example**: An admin views Monthly Salaries to see the calculated net pay for each employee for the current month based on their attendance and approved leave

#### Payroll Policies Configuration
- **What it does**: Allows admins to configure the Master Salary Rule that controls salary cycle, weekly off days, paid holidays, leave pay rules, and other payroll parameters
- **Why it's useful**: Ensures payroll calculations follow company policies and statutory requirements
- **Example**: An admin configures the Master Salary Rule to set Sunday as weekly off, 26 fixed paid days, and specify paid holiday dates

#### Office Location Settings
- **What it does**: Enables admins to set GPS coordinates and check-in radius for office location verification
- **Why it's useful**: Ensures onsite employees can only check in when physically at the office location
- **Example**: An admin sets the office GPS coordinates and a 100-meter radius. Employees can only check in when within this radius

#### TDS Rules Configuration
- **What it does**: Allows admins to configure tax deduction slabs and rates for TDS calculation
- **Why it's useful**: Ensures TDS deductions follow current tax laws and company policies
- **Example**: An admin configures TDS slabs based on the latest tax regulations for accurate tax deduction

#### Manual Delete Function
- **What it does**: Provides ability to delete attendance, expense, or leave records when necessary
- **Why it's useful**: Allows correction of errors and removal of incorrect records
- **Example**: An admin accidentally created a duplicate attendance record and uses Manual Delete to remove it

#### Settings Management
- **What it does**: Allows admins to configure app settings including theme, company information, help contact, and notification preferences
- **Why it's useful**: Customizes the app to match company branding and support requirements
- **Example**: An admin updates the company name and support email in Settings so employees see correct contact information

---

## 3. System Requirements

### Supported Devices
- Android smartphones and tablets
- Recommended screen size: 5 inches or larger
- Touchscreen device required

### Android Version
- Minimum: Android 5.0 (Lollipop) or higher
- Recommended: Android 8.0 (Oreo) or higher for optimal performance

### Storage Requirement
- App installation: Approximately 50-100 MB
- Additional storage for app data and cache: 20-50 MB
- Total recommended free space: 150 MB

### Internet Requirement
- **Required**: Active internet connection (Wi-Fi or mobile data)
- **Purpose**: All features require internet connectivity to communicate with the backend server
- **Offline Support**: Limited - app requires internet for most operations. Some data may be cached temporarily

### Hardware Requirements
- **GPS**: Required for onsite employees to use attendance check-in/check-out feature
- **Location Services**: Must be enabled for GPS-based attendance verification
- **Camera**: Not required but may be used for future features
- **Storage**: As specified above

### Network Recommendations
- Stable internet connection for reliable operation
- Minimum 3G connection speed
- 4G or Wi-Fi recommended for best experience

---

## 4. Installation Guide

### Method 1: Install from APK File

#### Step 1: Obtain the APK File
- Contact your HR department or IT administrator to receive the AWSPayroll APK file
- The file will typically be named `AWSPayroll.apk` or similar
- Ensure you download it from a trusted source (your company's official distribution channel)

#### Step 2: Enable Unknown Sources
- Open your Android device Settings
- Navigate to Security or Biometrics & Security
- Find "Install Unknown Apps" or "Unknown Sources"
- Select your file manager app or browser and enable "Allow from this source"
- **Note**: This step may vary slightly depending on your Android version and device manufacturer

#### Step 3: Install the APK
- Open your file manager app
- Navigate to the folder where you saved the APK file
- Tap on the APK file to begin installation
- Review the permissions requested by the app
- Tap "Install" to proceed
- Wait for the installation to complete
- Tap "Open" or "Done" when installation finishes

#### Step 4: Verify Installation
- Look for the AWSPayroll app icon on your home screen or app drawer
- The app icon should display the company logo or AWSPayroll branding
- Tap the icon to launch the app and verify it opens correctly

### Method 2: Install via Company Distribution

#### Step 1: Receive Installation Link
- Your company may provide a download link via email, SMS, or internal communication
- Click on the provided link from your mobile device

#### Step 2: Download and Install
- The link will direct you to download the APK file
- Follow the on-screen prompts to download and install
- You may need to enable unknown sources as described in Method 1

#### Step 3: Launch the App
- After installation, tap "Open" or find the app in your app drawer
- Launch the app to begin setup

### Installation Permissions

During installation, the app will request the following permissions:

- **Internet**: Required for all app functions to communicate with the server
- **Access Coarse Location**: Required for approximate location during check-in
- **Access Fine Location**: Required for precise GPS location during check-in
- **Write External Storage**: Required to store app data (Android 9 and below only)

**Important**: You must accept these permissions to use the app. The location permissions are essential for the attendance check-in feature.

### Troubleshooting Installation

#### Problem: Installation Blocked
- **Solution**: Enable "Unknown Sources" in your device security settings as described in Step 2 of Method 1

#### Problem: Parse Error
- **Solution**: The APK file may be corrupted. Download a fresh copy from your company's distribution source

#### Problem: Insufficient Storage
- **Solution**: Free up space on your device by deleting unnecessary files or apps. Ensure at least 150 MB of free space

#### Problem: App Won't Open After Installation
- **Solution**: Restart your device and try again. If the problem persists, contact your IT support

---

## 5. First-Time Setup

### For All Users

#### Step 1: Launch the App
- Tap the AWSPayroll app icon on your device
- The app will load and display the login screen

#### Step 2: Theme Selection
- On the login screen, you'll see a theme toggle button in the top-right corner
- Tap it to switch between Light and Dark theme
- Choose your preferred theme for better visibility

#### Step 3: Login
- Enter your email address or username in the "Email or username" field
- Enter your password in the "Password" field
- Tap the "Login" button
- **Note**: Your login credentials are provided by your company administrator

#### Step 4: Grant Location Permissions
- If you're an onsite employee, the app will request location permissions
- Tap "Allow" when prompted to grant location access
- This is required for GPS-based attendance check-in
- **Note**: Remote and hybrid workers may not need precise location verification

#### Step 5: Complete Initial Setup
- After successful login, you'll be directed to your home screen
- The app will automatically load your profile information
- Take a moment to review your profile details for accuracy

### For Employees and Leaders

#### Step 6: Review Your Dashboard
- Your Dashboard shows:
  - Today's attendance status
  - Leave count
  - Salary till date
  - Expense count
  - Your profile information

#### Step 7: Explore Bottom Navigation
- You'll see 4 tabs at the bottom:
  - **Home/Dashboard**: Main overview screen
  - **Attendance**: Check-in/check-out and attendance history
  - **Menu**: Quick access to all features
  - **Profile**: Your profile and settings

#### Step 8: Verify Your Information
- Navigate to the Profile tab
- Review your personal information, job details, and bank information
- Report any discrepancies to your HR department

### For Admins

#### Step 6: Review Admin Dashboard
- Your Dashboard shows:
  - Total employees count
  - Present today count
  - Absent today count
  - On leave today count
  - Total teams count
  - Total leaders count
  - Pending leave requests
  - Payroll net amount

#### Step 7: Explore Admin Menu
- Tap the Menu tab to access all admin functions:
  - Dashboard
  - Attendance
  - Add Employee
  - Employees
  - Add Team
  - Teams
  - Assign Salary
  - Salaries
  - Monthly Salaries
  - Leaves
  - Expenses
  - Office Location
  - Payroll Policies
  - Manual Delete
  - Settings
  - Contact Us

#### Step 8: Configure Initial Settings
- Navigate to Settings from the Menu
- Update company name and support contact information
- Configure notification preferences
- Set your preferred theme

#### Step 9: Set Up Master Salary Rule
- Navigate to Payroll Policies from the Menu
- Create or edit the Master Salary Rule
- Configure:
  - Fixed paid days (typically 26 for Sunday off, 22 for Saturday-Sunday off)
  - Salary cycle start and end dates
  - Weekly off days
  - Paid holiday dates
  - Leave pay rules
  - Half day rules

#### Step 10: Configure Office Location
- Navigate to Office Location from the Menu
- Set GPS coordinates for your office
- Configure the check-in radius (recommended: 50-200 meters)
- This ensures onsite employees can only check in when at the office

---

## 6. How to Use the Software

### For Employees and Leaders

#### Login

**Where to find it**: Opening screen when you launch the app

**What to do**:
1. Enter your email or username
2. Enter your password
3. Tap "Login"

**What happens next**: 
- If credentials are correct, you'll be directed to your Dashboard
- If credentials are incorrect, you'll see an error message

**Expected result**: Successful login takes you to your role-appropriate home screen

**Helpful tips**:
- Keep your password secure
- Use the "Forgot password?" link if you forget your password
- Contact HR if you don't have login credentials

---

#### Dashboard (Home Screen)

**Where to find it**: First tab (Home) at bottom navigation

**What to do**: View your summary information

**What happens next**: Dashboard displays your attendance, leave, salary, and expense summaries

**Expected result**: See your current status at a glance

**Helpful tips**:
- Check this screen daily for quick updates
- Tap on quick action buttons to navigate to detailed screens
- Your profile information is displayed for verification

---

#### Attendance Check-In/Check-Out

**Where to find it**: Attendance tab at bottom navigation

**What to do**:
1. Open Attendance screen
2. Ensure you're at the office location (for onsite workers)
3. Tap "Refresh Location" to verify GPS
4. Tap "Check In" when you arrive at work
5. Tap "Check Out" when you leave work

**What happens next**:
- The app verifies your GPS location
- Records the time and location
- Updates your attendance status

**Expected result**: 
- Check In records your arrival time
- Check Out records your departure time
- Attendance status updates to "Checked in" or "Completed"

**Helpful tips**:
- Enable location services on your device
- For onsite workers, you must be within office GPS radius
- Check In is disabled on weekly off days
- You cannot check out without checking in first
- Refresh location if GPS verification fails

---

#### View Attendance History

**Where to find it**: Attendance tab

**What to do**:
1. Scroll down to see attendance records
2. Use filters to view specific months or dates
3. Tap on individual records to see details

**What happens next**: Attendance history displays with check-in/out times, location, and status

**Expected result**: See your complete attendance record for the selected period

**Helpful tips**:
- Filter by month to view specific periods
- Weekly off days are automatically marked
- Approved leave days show as "Present" or "Leave" based on policy
- Location details show where you checked in/out

---

#### Apply for Leave

**Where to find it**: Menu tab → Leave

**What to do**:
1. Open Leave screen
2. Ensure "Apply" mode is selected
3. Enter a title for your leave request
4. Select leave type (Sick Leave, Casual Leave, Earned Leave, etc.)
5. Enter number of days
6. Tap on start date field to select from calendar
7. Tap on end date field to select from calendar
8. Enter reason for leave
9. Tap "Apply Leave"

**What happens next**:
- Your leave request is submitted to the admin
- You'll see a success confirmation
- The request appears in your leave applications list

**Expected result**: Leave request submitted and visible in applications list with "Pending" status

**Helpful tips**:
- Select appropriate leave type based on company policy
- Provide clear reason for better approval chances
- Check your leave balance before applying
- You can view all your leave applications in "Applications" mode

---

#### View Leave Applications

**Where to find it**: Leave screen → Select "Applications" mode

**What to do**:
1. Switch to "Applications" mode
2. View all your leave requests
3. Use search to find specific applications
4. Check status of each request

**What happens next**: List of all your leave applications with status, dates, and admin response

**Expected result**: See complete leave history with approval status

**Helpful tips**:
- Status can be Pending, Approved, or Rejected
- Rejected requests show rejection reason
- Search by date, type, or status to find specific requests

---

#### View Salary Details

**Where to find it**: Menu tab → Salary

**What to do**:
1. Open Salary screen
2. View your salary structure
3. Scroll to see all earnings and deductions
4. Note the net pay amount

**What happens next**: Displays your complete salary structure with earnings, deductions, and net pay

**Expected result**: See detailed breakdown of your monthly compensation

**Helpful tips**:
- Earnings include Basic, HRA, Conveyance, Medical, Special Allowance, Bonus
- Deductions include PF, ESI, Professional Tax, Loan Recovery, TDS
- Net pay is what you receive after all deductions
- Contact HR if you see any discrepancies

---

#### View Monthly Salaries

**Where to find it**: Menu tab → My Monthly Salaries

**What to do**:
1. Open My Monthly Salaries screen
2. View calculated salary for different months
3. Check attendance-based calculations
4. See approved expense reimbursements

**What happens next**: Displays monthly payroll calculations based on attendance, leave, and expenses

**Expected result**: See your actual monthly pay with breakdown

**Helpful tips**:
- Monthly salary varies based on attendance
- Approved expenses are included in total pay
- Weekly off days are handled per company policy
- Approved leave may be paid depending on policy

---

#### Submit Expenses

**Where to find it**: Menu tab → Submit Expense

**What to do**:
1. Open Expense screen
2. Enter expense type (e.g., Travel, Food, Supplies)
3. Enter amount
4. Enter description
5. Tap "Submit expense"

**What happens next**:
- Expense is submitted for admin approval
- Appears in your expense list with "Pending" status
- Admin will review and approve or reject

**Expected result**: Expense submitted and visible in list

**Helpful tips**:
- Provide clear description for faster approval
- Keep receipts for verification if needed
- You can delete pending expenses if submitted by mistake
- Approved expenses are reimbursed in monthly payroll

---

#### View Team Information

**Where to find it**: Menu tab → Team

**What to do**:
1. Open Team screen
2. View your team members
3. See team leader information
4. Check team structure

**What happens next**: Displays your team composition and member details

**Expected result**: See who is in your team and their roles

**Helpful tips**:
- Useful for knowing your team structure
- Contact information may be available
- Helps coordinate with team members

---

#### View Company Policies

**Where to find it**: Menu tab → Company Policies

**What to do**:
1. Open Company Policies screen
2. Read through available policies
3. Understand leave rules, attendance policies, etc.

**What happens next**: Displays company policies and rules

**Expected result**: Stay informed about company regulations

**Helpful tips**:
- Review policies periodically for updates
- Understand leave application process
- Know weekly off days and holiday schedule
- Check attendance requirements

---

#### Profile Management

**Where to find it**: Profile tab at bottom navigation

**What to do**:
1. Open Profile screen
2. Review your personal information
3. Check job details, bank信息, compliance documents
4. Report any errors to HR

**What happens next**: Displays your complete profile information

**Expected result**: Verify all your recorded information is accurate

**Helpful tips**:
- Ensure bank details are correct for salary payment
- Verify PAN and Aadhaar numbers for compliance
- Check emergency contact information
- Update HR if any information changes

---

#### Theme Toggle

**Where to find it**: Profile screen or Login screen

**What to do**:
1. Tap "Switch to Light Theme" or "Switch to Dark Theme" button
2. Theme changes immediately

**What happens next**: App interface switches between light and dark mode

**Expected result**: Improved visibility based on your preference

**Helpful tips**:
- Use dark theme in low-light conditions
- Use light theme in bright environments
- Theme preference is saved for future sessions

---

#### Logout

**Where to find it**: Profile screen

**What to do**:
1. Tap "Logout" button
2. Confirm logout if prompted

**What happens next**: You are logged out and returned to login screen

**Expected result**: Secure logout from your account

**Helpful tips**:
- Logout when not using the app for security
- You'll need to login again to access the app
- Your data remains safe on the server

---

### For Admins

#### Admin Dashboard

**Where to find it**: First tab (Dashboard) at bottom navigation

**What to do**: Review workforce and payroll statistics

**What happens next**: Dashboard displays comprehensive overview of workforce status

**Expected result**: See key metrics at a glance

**Helpful tips**:
- Check dashboard daily for workforce status
- Review pending leave requests
- Monitor attendance patterns
- Track payroll summary

---

#### Add Employee

**Where to find it**: Menu tab → Add Employee

**What to do**:
1. Open Add Employee screen
2. Fill in Account information:
   - Full Name
   - Employee ID
   - Employee Code
   - Email
   - Phone
   - Password
   - Role (Employee/Leader/Admin)
3. Fill in Job Details:
   - Department
   - Designation
   - Joining Date
   - Work Type (Onsite/Remote/Hybrid)
   - Address
4. Fill in Bank and Compliance:
   - PAN
   - Aadhaar
   - Bank Name
   - Account Number
   - IFSC Code
   - UAN
   - ESI
5. Fill in Emergency Contact:
   - Contact Name
   - Contact Phone
   - Relation
6. Tap "Create Employee"

**What happens next**:
- Employee account is created
- Employee can login with provided credentials
- Employee appears in employee list

**Expected result**: New employee added to system successfully

**Helpful tips**:
- All fields marked with error indicators are required
- Email must be valid format
- Phone must be 10-13 digits
- PAN must follow format: 5 letters + 4 digits + 1 letter
- Aadhaar must be 12 digits
- Provide temporary password which employee can change later

---

#### Edit Employee

**Where to find it**: Employees screen → Select employee → Edit

**What to do**:
1. Open Employees screen
2. Find the employee you want to edit
3. Tap on employee to view details
4. Tap "Edit" button
5. Modify required fields
6. Tap "Update Employee"

**What happens next**: Employee information is updated in the system

**Expected result**: Employee record reflects changes

**Helpful tips**:
- Password field is optional when editing
- Leave password blank to keep existing password
- Update bank information carefully for salary processing

---

#### View All Employees

**Where to find it**: Menu tab → Employees

**What to do**:
1. Open Employees screen
2. View list of all employees and leaders
3. Use search to find specific employees
4. Tap on employee to view details

**What happens next**: Displays complete employee list with search functionality

**Expected result**: Find and view any employee's information

**Helpful tips**:
- Search by name, email, employee ID, or code
- View includes role, department, and status
- Tap employee for detailed view
- Use this screen to navigate to edit or assign salary

---

#### Add Team

**Where to find it**: Menu tab → Add Team

**What to do**:
1. Open Add Team screen
2. Enter team name
3. Select team leader from employee list
4. Add team members
5. Tap "Create Team"

**What happens next**: Team is created with assigned leader and members

**Expected result**: New team appears in Teams screen

**Helpful tips**:
- Select an appropriate team leader
- Team leader should have leadership role
- You can add multiple members to a team
- Teams help organize workforce structure

---

#### View Teams

**Where to find it**: Menu tab → Teams

**What to do**:
1. Open Teams screen
2. View all teams
3. See team leader and members for each team
4. Tap team for details

**What happens next**: Displays all teams with their composition

**Expected result**: Understand team structure and membership

**Helpful tips**:
- Teams help in reporting and management
- View team leader contact information
- Check team member count
- Useful for departmental organization

---

#### View Today's Attendance

**Where to find it**: Menu tab → Attendance → "Present Today" tab

**What to do**:
1. Open Attendance screen
2. Select "Present Today" tab
3. View all employees present today
4. Check check-in times and locations

**What happens next**: Shows list of employees who have checked in today

**Expected result**: See real-time attendance status

**Helpful tips**:
- Check-in time and location are displayed
- Tap "Edit" to modify any record if needed
- Useful for monitoring daily attendance
- Weekly off days are excluded

---

#### View Absent Today

**Where to find it**: Menu tab → Attendance → "Absent Today" tab

**What to do**:
1. Open Attendance screen
2. Select "Absent Today" tab
3. View employees who haven't checked in
4. See reason for absence
5. Edit attendance if needed

**What happens next**: Shows list of absent employees with ability to edit

**Expected result**: Identify and address attendance issues

**Helpful tips**:
- Employees on approved leave won't appear here
- You can edit attendance to mark present if needed
- Check if absence is legitimate
- Useful for follow-up with absent employees

---

#### View All Attendance

**Where to find it**: Menu tab → Attendance → "All Attendance" tab

**What to do**:
1. Open Attendance screen
2. Select "All Attendance" tab
3. Search for specific employee
4. Select employee from list
5. View their attendance records
6. Filter by month, year, or specific date

**What happens next**: Displays detailed attendance records for selected employee

**Expected result**: Comprehensive view of employee attendance history

**Helpful tips**:
- Filter by month to view specific periods
- See check-in/out times and locations
- Weekly off days are marked automatically
- Approved leave shows based on policy
- Edit or delete records if corrections needed

---

#### Edit Attendance Record

**Where to find it**: Attendance screen → Select record → Edit

**What to do**:
1. Find the attendance record you want to edit
2. Tap "Edit" button
3. Change status (Present/Half Day/Absent/Leave)
4. Update check-in/out times if needed
5. Set late status (Yes/No)
6. Set time status (Full Time/Half Time/Holiday)
7. Tap "Update"

**What happens next**: Attendance record is updated with new information

**Expected result**: Corrected attendance reflects actual situation

**Helpful tips**:
- Use this for corrections only
- Document reason for edits
- Weekly off records cannot be edited
- Time format should be HH:MM AM/PM

---

#### Delete Attendance Record

**Where to find it**: Attendance screen → Select record → Delete

**What to do**:
1. Find the attendance record
2. Tap "Delete" button
3. Confirm deletion

**What happens next**: Attendance record is permanently removed

**Expected result**: Incorrect record is removed from system

**Helpful tips**:
- Use Manual Delete screen for bulk deletions
- Cannot delete weekly off records
- Deletion is permanent
- Use with caution

---

#### Approve Leave

**Where to find it**: Menu tab → Leaves

**What to do**:
1. Open Leaves screen
2. View pending leave requests
3. Review leave details (type, dates, reason)
4. Tap "Approve" button

**What happens next**:
- Leave is marked as Approved
- Employee receives notification
- Attendance is updated based on policy

**Expected result**: Leave request approved and processed

**Helpful tips**:
- Check leave balance before approving
- Verify dates don't conflict with important projects
- Approved leave may be paid depending on policy
- Employee can view approval status

---

#### Reject Leave

**Where to find it**: Menu tab → Leaves

**What to do**:
1. Open Leaves screen
2. Find the leave request to reject
3. Tap "Reject" button
4. Enter rejection reason
5. Tap "Confirm Reject"

**What happens next**:
- Leave is marked as Rejected
- Employee receives notification with reason
- Employee can submit new request if needed

**Expected result**: Leave rejected with documented reason

**Helpful tips**:
- Provide clear rejection reason
- Be professional in rejection messages
- Employee may need to resubmit with different dates
- Rejected leave doesn't affect attendance

---

#### Filter Leave Requests

**Where to find it**: Leaves screen → Filter buttons at top

**What to do**:
1. Tap "All" to see all leave requests
2. Tap "Pending" to see only pending requests
3. Tap "Approved" to see only approved requests
4. Tap "Rejected" to see only rejected requests

**What happens next**: List filters based on selected status

**Expected result**: Quickly find specific types of leave requests

**Helpful tips**:
- Use "Pending" to prioritize approvals
- Use "Approved" to review approved leave history
- Use "Rejected" to see rejection patterns

---

#### Approve Expense

**Where to find it**: Menu tab → Expenses

**What to do**:
1. Open Expenses screen
2. View pending expense requests
3. Review expense details (type, amount, description)
4. Tap "Approve" button

**What happens next**:
- Expense is marked as Approved
- Amount will be reimbursed in monthly payroll
- Employee receives notification

**Expected result**: Expense approved for reimbursement

**Helpful tips**:
- Verify expense is within company policy
- Check amount is reasonable
- Request receipts if needed
- Approved expenses add to monthly pay

---

#### Reject Expense

**Where to find it**: Menu tab → Expenses

**What to do**:
1. Open Expenses screen
2. Find expense to reject
3. Tap "Reject" button
4. Enter rejection reason if prompted

**What happens next**:
- Expense is marked as Rejected
- Employee receives notification
- Employee can resubmit with corrections

**Expected result**: Expense rejected with documented reason

**Helpful tips**:
- Provide clear rejection reason
- Specify what corrections are needed
- Employee may need to provide additional documentation

---

#### Assign Salary Structure

**Where to find it**: Menu tab → Assign Salary

**What to do**:
1. Open Assign Salary screen
2. Search for employee
3. Select employee from list
4. Fill in Earnings:
   - Basic Salary (required)
   - HRA
   - Conveyance
   - Medical
   - Special Allowance
   - Bonus
   - Overtime Hours
   - Overtime Rate
   - Other Benefits
5. Fill in Deductions:
   - PF Employee %
   - PF Employer %
   - ESI Employee %
   - ESI Employer %
   - Professional Tax
   - Loan Recovery
   - TDS Monthly (optional - auto-calculated)
6. Review calculated totals
7. Tap "Assign Salary"

**What happens next**:
- Salary structure is assigned to employee
- System calculates all deductions automatically
- Net pay is computed and saved
- Employee can view their salary structure

**Expected result**: Employee salary structure assigned and visible

**Helpful tips**:
- Basic salary is required field
- PF is capped at ₹1800 (12% of basic)
- TDS is calculated based on tax slabs
- Review all calculations before assigning
- You can edit salary structure later if needed

---

#### View Salary Structures

**Where to find it**: Menu tab → Salaries

**What to do**:
1. Open Salaries screen
2. View all assigned salary structures
3. Filter by Assigned/Unassigned/All
4. Search for specific employee
5. Tap employee to view detailed structure

**What happens next**: Displays salary structures with earnings and deductions breakdown

**Expected result**: See who has assigned salary and view details

**Helpful tips**:
- Filter to find employees without assigned salary
- Use search to find specific employees
- View complete breakdown of each salary
- Edit or delete salary structures as needed

---

#### Edit Salary Structure

**Where to find it**: Salaries screen → Select employee → Edit

**What to do**:
1. Open Salaries screen
2. Find employee with assigned salary
3. Tap "Edit" button
4. Modify salary components
5. Review updated calculations
6. Tap "Update Salary"

**What happens next**: Salary structure is updated with new values

**Expected result**: Employee salary reflects changes

**Helpful tips**:
- Changes affect future salary calculations
- Document reason for salary changes
- Inform employee of changes
- Keep salary updates consistent with company policy

---

#### Delete Salary Structure

**Where to find it**: Salaries screen → Select employee → Delete

**What to do**:
1. Open Salaries screen
2. Find employee with assigned salary
3. Tap "Delete" button
4. Confirm deletion

**What happens next**: Salary structure is removed from employee

**Expected result**: Employee no longer has assigned salary structure

**Helpful tips**:
- Employee won't receive salary until new structure is assigned
- Use when employee leaves company
- Confirm before deletion
- Cannot be undone

---

#### View Monthly Salaries

**Where to find it**: Menu tab → Monthly Salaries

**What to do**:
1. Open Monthly Salaries screen
2. View calculated monthly salaries
3. Filter by month and year
4. See breakdown of calculations
5. Check attendance-based pay

**What happens next**: Displays monthly payroll calculations for all employees

**Expected result**: See actual monthly pay based on attendance and policy

**Helpful tips**:
- Monthly salary varies based on attendance
- Approved expenses are included
- Weekly off handling per policy
- Approved leave may be paid
- Use this for payroll processing

---

#### Configure Payroll Policies

**Where to find it**: Menu tab → Payroll Policies

**What to do**:
1. Open Payroll Policies screen
2. Tap "Edit" or "Create" for Master Salary Rule
3. Add or modify rules:
   - Fixed Paid Days (26 for Sunday off, 22 for Sat-Sun off)
   - Salary Cycle Start Day (usually 1)
   - Salary Cycle End Day (usually 30)
   - Annual Start Date (DD-MM format)
   - Weekly Off Days (Sunday or Saturday, Sunday)
   - Approved Leave Paid (Yes/No)
   - Paid Holiday Dates (YYYY-MM-DD comma separated)
   - Paid Holiday Names
   - Minimum Full Day Hours
   - Half Day Pay Value (usually 0.5)
   - Absent Pay Value (usually 0)
   - Expense Reimbursement Paid (Yes/No)
4. Add custom rules if needed
5. Tap "Save Policy"

**What happens next**: Master Salary Rule is saved and used for all payroll calculations

**Expected result**: Payroll calculations follow configured policies

**Helpful tips**:
- Only one Master Salary Rule should exist
- This rule controls all salary calculations
- Update when policies change
- Test with small changes first
- Consult with management before major changes

---

#### Configure Office Location

**Where to find it**: Menu tab → Office Location

**What to do**:
1. Open Office Location screen
2. Enter office GPS coordinates
3. Set check-in radius (meters)
4. Tap "Save"

**What happens next**: Office location is saved and used for attendance verification

**Expected result**: Onsite employees can only check in within configured radius

**Helpful tips**:
- Use GPS coordinates from actual office location
- Recommended radius: 50-200 meters
- Too small radius may cause check-in failures
- Too large radius reduces security
- Update if office location changes

---

#### Configure TDS Rules

**Where to find it**: Assign Salary screen → TDS Rules button

**What to do**:
1. Open Assign Salary screen
2. Tap "TDS Rules" button
3. View current tax slabs
4. Modify tax slabs if needed
5. Add new slabs if required
6. Save changes

**What happens next**: TDS rules are updated and used for tax calculations

**Expected result**: TDS deductions follow configured tax slabs

**Helpful tips**:
- Configure based on current tax laws
- Include cess calculations
- Update annually with tax changes
- Consult with tax professional
- Default rules are based on standard tax structure

---

#### Manual Delete

**Where to find it**: Menu tab → Manual Delete

**What to do**:
1. Open Manual Delete screen
2. Select record type (Attendance/Expense/Leave)
3. Search for specific records
4. Select records to delete
5. Confirm deletion

**What happens next**: Selected records are permanently deleted

**Expected result**: Remove incorrect or duplicate records

**Helpful tips**:
- Use for corrections only
- Cannot be undone
- Use with caution
- Document reason for deletions
- Consider editing instead of deleting when possible

---

#### Settings

**Where to find it**: Menu tab → Settings

**What to do**:
1. Open Settings screen
2. Configure Theme (Light/Dark)
3. Update Company Settings:
   - Company Name
   - Support Email
4. Update Help Card:
   - Help Email
   - Help Number
5. Configure Notification Settings:
   - Email alerts
   - SMS alerts
   - Automatic backup
6. Tap "Save Settings"

**What happens next**: Settings are saved and applied

**Expected result**: App behavior reflects configured settings

**Helpful tips**:
- Help card information is visible to employees
- Update support contact when it changes
- Theme preference applies to your account only
- Notification settings may require backend configuration

---

#### Contact Support

**Where to find it**: Menu tab → Contact Us

**What to do**:
1. Open Contact Us screen
2. View support information
3. Note contact details for future reference

**What happens next**: Displays company support contact information

**Expected result**: Know how to get help when needed

**Helpful tips**:
- Save support contact in your phone
- Include employee ID when reporting issues
- Provide screenshots when reporting problems
- Contact for payroll, attendance, leave, or login issues

---

## 7. Settings Guide

### Theme Settings

#### Light Theme
- **Description**: Light background with dark text
- **When to use**: Bright environments, daytime use
- **How to enable**: Tap "Switch to Light Theme" button in Profile or Login screen
- **Recommended**: For users who prefer traditional appearance

#### Dark Theme
- **Description**: Dark background with light text
- **When to use**: Low-light conditions, nighttime use, to reduce eye strain
- **How to enable**: Tap "Switch to Dark Theme" button in Profile or Login screen
- **Recommended**: For users who work in dim environments or prefer dark mode

### Company Settings (Admin Only)

#### Company Name
- **Description**: Your organization's official name
- **Recommended**: Use full legal company name
- **Impact**: Appears in app header and communications
- **When to update**: When company name changes

#### Support Email
- **Description**: Primary email for employee support
- **Recommended**: Use dedicated HR or IT support email
- **Impact**: Employees see this when they need help
- **When to update**: When support email changes

### Help Card Settings (Admin Only)

#### Help Email
- **Description**: Email address employees can contact for assistance
- **Recommended**: Same as support email or dedicated help email
- **Impact**: Visible to all employees in Settings/Contact
- **When to update**: When help contact changes

#### Help Number
- **Description**: Phone number for immediate support
- **Recommended**: Company HR or IT support phone
- **Impact**: Employees can call for urgent issues
- **When to update**: When support phone changes

### Notification Settings (Admin Only)

#### Email Alerts
- **Description**: Enable/disable email notifications
- **Recommended**: Enable for important alerts
- **Impact**: You receive email notifications for key events
- **When to disable**: If email notifications are overwhelming

#### SMS Alerts
- **Description**: Enable/disable SMS notifications
- **Recommended**: Enable for urgent alerts only
- **Impact**: You receive text messages for critical events
- **When to disable**: To reduce SMS costs or interruptions

#### Automatic Backup
- **Description**: Enable/disable automatic data backup
- **Recommended**: Enable for data safety
- **Impact**: App data is backed up regularly
- **When to disable**: If backup is handled by other means

### Security Settings

#### Password Rotation
- **Recommendation**: Change password every 90 days
- **How to change**: Contact IT administrator to reset password
- **Impact**: Improves account security

#### Login Attempt Limit
- **Description**: Account locks after 5 failed login attempts
- **How to unlock**: Contact IT administrator
- **Impact**: Prevents unauthorized access attempts

### GPS/Location Settings (Admin Only)

#### Office Location
- **Description**: GPS coordinates of office
- **Recommended**: Use precise office coordinates
- **Impact**: Determines where employees can check in
- **When to update**: When office location changes

#### Check-in Radius
- **Description**: Distance from office where check-in is allowed
- **Recommended**: 50-200 meters
- **Impact**: Too small = check-in failures; too large = reduced security
- **When to adjust**: Based on office size and layout

---

## 8. Daily Usage

### For Employees and Leaders

#### Morning Routine

**Step 1: Arrive at Work**
- Arrive at office (for onsite workers)

**Step 2: Open AWSPayroll App**
- Launch the app on your device

**Step 3: Check Location**
- Tap "Refresh Location" to verify GPS
- Ensure you're within office radius

**Step 4: Check In**
- Tap "Check In" button
- Wait for confirmation
- Status changes to "Checked in"

**Step 5: Review Dashboard**
- Check your attendance status
- Review any notifications
- Check leave balance if needed

#### During the Day

**Step 1: Apply for Leave (if needed)**
- Open Leave screen
- Submit leave request with details
- Wait for admin approval

**Step 2: Submit Expenses (if needed)**
- Open Expense screen
- Enter expense details
- Submit for approval

**Step 3: View Salary Information**
- Open Salary screen to view structure
- Check Monthly Salaries for actual pay

#### Evening Routine

**Step 1: Prepare to Leave**
- Complete work tasks

**Step 2: Open AWSPayroll App**
- Launch the app

**Step 3: Check Location**
- Tap "Refresh Location" to verify GPS

**Step 4: Check Out**
- Tap "Check Out" button
- Wait for confirmation
- Status changes to "Completed"

**Step 5: Review Day's Summary**
- Check total hours worked
- Verify check-in/out times

### For Admins

#### Morning Routine

**Step 1: Open AWSPayroll App**
- Launch the app and login

**Step 2: Review Dashboard**
- Check total employees
- Note present today count
- Note absent today count
- Check pending leave requests

**Step 3: Address Absences**
- Open Attendance screen
- View "Absent Today" tab
- Follow up with absent employees
- Edit attendance if legitimate reasons

**Step 4: Approve Leaves**
- Open Leaves screen
- Review pending requests
- Approve legitimate requests
- Reject inappropriate requests with reason

#### During the Day

**Step 1: Approve Expenses**
- Open Expenses screen
- Review pending expenses
- Approve valid expenses
- Reject invalid expenses with reason

**Step 2: Add New Employees (if needed)**
- Open Add Employee screen
- Enter new employee details
- Assign salary structure
- Add to appropriate team

**Step 3: Manage Attendance Issues**
- Open Attendance screen
- Review attendance records
- Make corrections if needed
- Address patterns of absence

**Step 4: Update Policies (if needed)**
- Open Payroll Policies
- Update Master Salary Rule if policies change
- Update office location if needed

#### Evening Routine

**Step 1: Review Daily Summary**
- Check dashboard for final counts
- Note any unresolved issues

**Step 2: Approve Remaining Requests**
- Approve any pending leave requests
- Approve pending expenses

**Step 3: Prepare for Next Day**
- Note employees on leave for next day
- Plan for any staffing issues

---

## 9. Troubleshooting

### Login Issues

#### Problem: Cannot Login
**Possible Reason**: Incorrect username or password
**Solution**: 
- Verify your credentials with HR
- Check for typos in username/password
- Use "Forgot password?" if available
- Contact HR if credentials don't work

#### Problem: Account Locked
**Possible Reason**: Too many failed login attempts
**Solution**: 
- Wait 30 minutes and try again
- Contact IT administrator to unlock account
- Reset password if needed

#### Problem: Login Screen Not Loading
**Possible Reason**: No internet connection
**Solution**: 
- Check your internet connection
- Switch between Wi-Fi and mobile data
- Ensure server is accessible (contact IT if widespread issue)

### Attendance Issues

#### Problem: Cannot Check In
**Possible Reason**: Location services disabled or not in office radius
**Solution**: 
- Enable location services in device settings
- Ensure GPS is enabled
- Verify you're within office GPS radius
- Tap "Refresh Location" to verify
- Contact admin if office location is incorrect

#### Problem: Check In Button Disabled
**Possible Reason**: Already checked in or it's a weekly off
**Solution**: 
- Check if you've already checked in today
- Verify today is not a weekly off day
- Contact admin if you believe this is an error

#### Problem: Cannot Check Out
**Possible Reason**: Haven't checked in or already checked out
**Solution**: 
- Ensure you've checked in first
- Check if you've already checked out today
- Contact admin if you believe this is an error

#### Problem: Location Verification Fails
**Possible Reason**: GPS signal weak or office location incorrect
**Solution**: 
- Move to area with better GPS signal
- Try refreshing location multiple times
- Contact admin to verify office location settings
- For remote workers, verify work type is set correctly

### Leave Issues

#### Problem: Cannot Submit Leave
**Possible Reason**: Missing required fields
**Solution**: 
- Ensure all fields are filled (title, type, period, dates, reason)
- Select valid dates from calendar
- Provide clear reason for leave

#### Problem: Leave Not Approved
**Possible Reason**: Leave conflicts with policy or schedule
**Solution**: 
- Check leave balance before applying
- Choose different dates if possible
- Contact admin to discuss approval
- Provide additional information if needed

#### Problem: Leave Status Not Updating
**Possible Reason**: Network issue or app cache
**Solution**: 
- Refresh the screen
- Close and reopen the app
- Check internet connection
- Contact admin if status doesn't update

### Salary Issues

#### Problem: Salary Not Showing
**Possible Reason**: Salary structure not assigned
**Solution**: 
- Contact HR or admin
- Request salary structure assignment
- Verify your employee profile is complete

#### Problem: Salary Amount Incorrect
**Possible Reason**: Calculation error or wrong structure
**Solution**: 
- Review salary structure with HR
- Check if deductions are correct
- Verify attendance records are correct
- Contact admin for correction

#### Problem: Monthly Salary Not Calculated
**Possible Reason**: Attendance not processed or policy not configured
**Solution**: 
- Ensure attendance is marked for the month
- Contact admin to verify Master Salary Rule is configured
- Check if salary cycle dates are correct

### Expense Issues

#### Problem: Cannot Submit Expense
**Possible Reason**: Missing required fields
**Solution**: 
- Ensure expense type and amount are filled
- Provide clear description
- Check internet connection

#### Problem: Expense Not Approved
**Possible Reason**: Expense doesn't meet policy
**Solution**: 
- Review company expense policy
- Provide additional documentation
- Contact admin for clarification
- Resubmit with corrections

#### Problem: Expense Amount Wrong
**Possible Reason**: Typo or calculation error
**Solution**: 
- Delete and resubmit with correct amount
- Contact admin to edit if already approved

### App Performance Issues

#### Problem: App Running Slow
**Possible Reason**: Poor internet connection or app cache
**Solution**: 
- Check internet connection speed
- Close other apps running in background
- Clear app cache (if option available)
- Restart your device

#### Problem: App Crashing
**Possible Reason**: Software bug or device compatibility
**Solution**: 
- Restart your device
- Update app if new version available
- Clear app data (note: this will logout)
- Contact IT support if problem persists

#### Problem: Screen Not Loading
**Possible Reason**: Network issue or server down
**Solution**: 
- Check internet connection
- Try refreshing the screen
- Wait a few minutes and try again
- Contact IT if server appears down

### GPS/Location Issues

#### Problem: GPS Not Working
**Possible Reason**: Location services disabled or GPS hardware issue
**Solution**: 
- Enable location services in device settings
- Ensure app has location permissions
- Try restarting device
- Test GPS with other apps
- Contact IT if GPS hardware is faulty

#### Problem: Location Inaccurate
**Possible Reason**: GPS signal interference
**Solution**: 
- Move to area with clear sky view
- Move away from tall buildings
- Refresh location multiple times
- Wait for GPS to acquire signal

### Notification Issues

#### Problem: Not Receiving Notifications
**Possible Reason**: Notifications disabled in device settings
**Solution**: 
- Enable app notifications in device settings
- Check do-not-disturb mode
- Ensure notification permissions are granted
- Contact IT if server notifications are down

### Data Sync Issues

#### Problem: Data Not Updating
**Possible Reason**: Cache issue or network problem
**Solution**: 
- Refresh the screen by pulling down
- Close and reopen the app
- Check internet connection
- Logout and login again

#### Problem: Old Data Showing
**Possible Reason**: App displaying cached data
**Solution**: 
- Refresh the screen
- Force close app and reopen
- Clear app cache if possible
- Check if server has updated data

### Admin-Specific Issues

#### Problem: Cannot Add Employee
**Possible Reason**: Missing required fields or validation error
**Solution**: 
- Ensure all required fields are filled
- Check email format is valid
- Verify phone number has 10-13 digits
- Check PAN and Aadhaar formats
- Review error messages for specific issues

#### Problem: Cannot Assign Salary
**Possible Reason**: Employee not selected or basic salary missing
**Solution**: 
- Ensure employee is selected from dropdown
- Enter basic salary (required field)
- Check internet connection
- Verify employee exists in system

#### Problem: Payroll Calculation Wrong
**Possible Reason**: Master Salary Rule not configured correctly
**Solution**: 
- Review Master Salary Rule settings
- Verify fixed paid days is correct
- Check weekly off days configuration
- Ensure salary cycle dates are correct
- Test with one employee first

#### Problem: Cannot Edit Attendance
**Possible Reason**: Record is weekly off or already locked
**Solution**: 
- Weekly off records cannot be edited
- Check if record is from previous closed cycle
- Contact IT if record should be editable

---

## 10. Frequently Asked Questions

### General Questions

**Q: What is AWSPayroll?**
A: AWSPayroll is a mobile payroll management application that helps companies track employee attendance, manage leave requests, process salaries, and handle expense reimbursements.

**Q: Who can use AWSPayroll?**
A: The app is designed for employees, team leaders, and HR administrators. Each role has different features and permissions.

**Q: Is internet required to use the app?**
A: Yes, internet connection is required for all features. The app communicates with a backend server to store and retrieve data.

**Q: Can I use the app on iPhone?**
A: Currently, AWSPayroll is available for Android devices only. An iOS version may be developed in the future.

**Q: Is my data secure?**
A: Yes, the app uses role-based access control and secure communication. Your data is stored on a secure server and only accessible to authorized users.

### Account and Login

**Q: How do I get login credentials?**
A: Your HR department or IT administrator will provide your username and password when your account is created.

**Q: What if I forget my password?**
A: Tap the "Forgot password?" link on the login screen or contact your HR department to reset your password.

**Q: Can I change my password?**
A: Contact your IT administrator to change your password. For security reasons, password changes are typically managed by administrators.

**Q: What if my account is locked?**
A: Wait 30 minutes and try again, or contact your IT administrator to unlock your account.

**Q: Can I have multiple accounts?**
A: No, each user should have only one account. If you need access with a different role, contact your administrator.

### Attendance

**Q: How do I check in?**
A: Open the Attendance screen, ensure you're within office GPS radius (for onsite workers), and tap "Check In".

**Q: What if I forget to check in?**
A: Contact your administrator to manually add your attendance record. Explain the reason for missing check-in.

**Q: Can I check in from home?**
A: Only if your work type is set to "Remote" or "Hybrid". Onsite employees must be within office GPS radius to check in.

**Q: What if GPS is not accurate?**
A: Try refreshing location multiple times, move to an area with better GPS signal, or contact your administrator if the issue persists.

**Q: Can I edit my attendance?**
A: Employees cannot edit their own attendance. Contact your administrator if you believe there's an error.

**Q: What happens on weekly off days?**
A: Weekly off days are automatically marked based on company policy. You cannot check in on weekly off days.

**Q: How is half-day calculated?**
A: Half-day is calculated based on the minimum full day hours configured in the Master Salary Rule. If you work less than the minimum hours, it may be marked as half-day.

### Leave

**Q: How do I apply for leave?**
A: Open the Leave screen, select "Apply" mode, fill in the leave details (type, dates, reason), and tap "Apply Leave".

**Q: How long does leave approval take?**
A: Approval time depends on your company's process. Check with your HR department for specific timelines.

**Q: Can I cancel a leave request?**
A: Currently, you cannot cancel a submitted leave request. Contact your administrator if you need to withdraw a request.

**Q: What leave types are available?**
A: Common types include Sick Leave, Casual Leave, Earned Leave, Privilege Leave, Compensatory Off, Maternity Leave, Paternity Leave, and Bereavement Leave.

**Q: How do I check my leave balance?**
A: Your leave balance is displayed on the Dashboard. Contact HR for detailed balance information.

**Q: Can I apply for leave for past dates?**
A: This depends on company policy. Contact your administrator if you need to apply for retroactive leave.

**Q: What if my leave is rejected?**
A: You'll receive a rejection reason. You can submit a new leave request with different dates or additional information.

### Salary

**Q: How do I view my salary structure?**
A: Open the Menu, tap "Salary", and view your complete salary structure with earnings and deductions.

**Q: When is salary paid?**
A: Salary payment dates depend on your company's payroll schedule. Contact HR for specific payment dates.

**Q: Why is my net pay different from gross salary?**
A: Net pay is gross salary minus deductions like PF, ESI, Professional Tax, and TDS. View the Salary screen for detailed breakdown.

**Q: How is TDS calculated?**
A: TDS is calculated based on annual income using tax slabs configured by your administrator. The app automatically calculates monthly TDS deduction.

**Q: What if my salary is incorrect?**
A: Contact your HR department immediately. Provide details about what you believe is incorrect.

**Q: Can I see my monthly salary history?**
A: Yes, open "My Monthly Salaries" from the Menu to view your salary history for different months.

**Q: How are overtime hours calculated?**
A: Overtime is calculated based on hours and rate configured in your salary structure. Contact HR for overtime policy details.

### Expenses

**Q: How do I submit an expense?**
A: Open the Expense screen, enter expense type, amount, and description, then tap "Submit expense".

**Q: What expenses can I claim?**
A: This depends on company policy. Common expenses include travel, food, supplies, and other work-related costs.

**Q: Do I need to submit receipts?**
A: This depends on company policy. Keep receipts for verification even if not required at submission time.

**Q: How long does expense approval take?**
A: Approval time varies by company. Check with your HR department for specific timelines.

**Q: When will I be reimbursed?**
A: Approved expenses are typically included in your monthly salary payment. Check with HR for specific reimbursement schedules.

**Q: Can I delete a submitted expense?**
A: Yes, you can delete pending expenses. Once approved, contact your administrator to make changes.

### For Administrators

**Q: How do I add a new employee?**
A: Open the Menu, tap "Add Employee", fill in all required fields, and tap "Create Employee".

**Q: What information is required for new employees?**
A: Required fields include name, employee ID, email, phone, department, designation, and bank information. Compliance documents like PAN and Aadhaar are also recommended.

**Q: How do I assign salary to an employee?**
A: Open "Assign Salary", search for the employee, fill in salary components, and tap "Assign Salary".

**Q: What is the Master Salary Rule?**
A: The Master Salary Rule is a policy that controls all payroll calculations including salary cycle, weekly off days, leave pay rules, and holiday handling.

**Q: How do I configure office location for GPS check-in?**
A: Open "Office Location", enter GPS coordinates, set check-in radius, and save. This ensures onsite employees can only check in at the office.

**Q: Can I edit attendance records?**
A: Yes, administrators can edit attendance records except for weekly off days. Use this feature for corrections only.

**Q: How do I approve leave requests?**
A: Open "Leaves", view pending requests, review details, and tap "Approve" or "Reject" with reason.

**Q: What if an employee forgets to check in?**
A: You can manually add or edit their attendance record in the Attendance screen.

**Q: How do I handle salary advances or loans?**
A: Use the "Loan Recovery" field in the salary structure to deduct loan repayments from monthly salary.

**Q: Can I export payroll data?**
A: Currently, the app doesn't have an export feature. Contact IT if you need data export functionality.

### Technical Support

**Q: Who do I contact for technical issues?**
A: Contact your company's IT support or the email/phone listed in the Contact Us section of the app.

**Q: What information should I provide when reporting issues?**
A: Provide your employee ID, a description of the problem, screenshots if possible, and steps to reproduce the issue.

**Q: How often is the app updated?**
A: App updates are released periodically. You'll be notified when updates are available through your company's distribution channel.

**Q: Will I lose my data if I uninstall the app?**
A: No, your data is stored on the server. Reinstalling the app will not delete your data.

**Q: Can I use the app on multiple devices?**
A: This depends on company policy. Contact your administrator if you need to use the app on multiple devices.

---

## 11. Best Practices

### For Employees and Leaders

#### Attendance Best Practices

- **Check in promptly**: Check in as soon as you arrive at work to ensure accurate attendance records
- **Check out before leaving**: Always check out before leaving the workplace to complete your attendance record
- **Enable location services**: Keep GPS enabled on your device for smooth check-in/check-out
- **Verify location**: Use "Refresh Location" to confirm you're within office radius before checking in
- **Report issues immediately**: Contact admin if you experience check-in/check-out problems
- **Plan for weekly offs**: Know your weekly off days and plan accordingly
- **Review attendance regularly**: Check your attendance history weekly to ensure accuracy

#### Leave Management Best Practices

- **Apply in advance**: Submit leave requests as early as possible, especially for planned leave
- **Provide clear reasons**: Give specific and honest reasons for leave requests
- **Check leave balance**: Verify your leave balance before applying to avoid rejection
- **Choose appropriate type**: Select the correct leave type based on your situation
- **Follow company policy**: Adhere to company leave policies and procedures
- **Communicate with manager**: Inform your manager verbally when submitting important leave requests
- **Track approval status**: Monitor your leave application status and follow up if needed

#### Expense Management Best Practices

- **Submit promptly**: Submit expenses soon after incurring them for timely processing
- **Be specific**: Provide clear descriptions of what the expense was for
- **Keep receipts**: Maintain receipts for all expenses, even if not immediately required
- **Follow policy**: Ensure expenses comply with company expense policies
- **Group similar expenses**: Combine related expenses into single submissions when possible
- **Check approval status**: Monitor expense approval status and respond to rejections quickly

#### Security Best Practices

- **Protect credentials**: Keep your login credentials secure and don't share them
- **Logout when done**: Log out of the app when not in use, especially on shared devices
- **Update password**: Change your password periodically as per company policy
- **Report suspicious activity**: Immediately report any suspicious account activity to IT
- **Use secure networks**: Avoid using public Wi-Fi for sensitive app operations
- **Keep app updated**: Install app updates when available for security improvements

#### General Usage Best Practices

- **Check dashboard daily**: Review your dashboard each day for updates and notifications
- **Verify profile information**: Regularly check your profile for accuracy and report changes
- **Understand policies**: Familiarize yourself with company policies accessible in the app
- **Use appropriate theme**: Switch between light and dark theme based on your environment
- **Maintain internet connection**: Ensure reliable internet for smooth app operation
- **Provide feedback**: Report bugs or suggest improvements to your IT department

### For Administrators

#### Employee Management Best Practices

- **Verify information**: Double-check all employee information before adding to system
- **Keep records updated**: Regularly review and update employee records
- **Assign appropriate roles**: Give employees correct role (Employee/Leader/Admin) based on responsibilities
- **Set correct work type**: Properly classify employees as Onsite, Remote, or Hybrid
- **Document changes**: Keep records of employee information changes for audit purposes
- **Review compliance**: Ensure PAN, Aadhaar, and bank details are accurate for payroll
- **Communicate credentials**: Securely distribute login credentials to new employees

#### Attendance Management Best Practices

- **Monitor daily**: Check attendance dashboard daily to identify issues early
- **Address absences**: Follow up on unexplained absences promptly
- **Verify corrections**: Only make attendance corrections when absolutely necessary
- **Document reasons**: Add notes when editing attendance for audit trail
- **Review patterns**: Analyze attendance patterns to identify chronic issues
- **Be consistent**: Apply attendance policies consistently across all employees
- **Train employees**: Educate employees on proper check-in/check-out procedures

#### Leave Management Best Practices

- **Review promptly**: Process leave requests quickly to avoid delays
- **Apply policy consistently**: Apply leave policies uniformly to all employees
- **Provide clear feedback**: Give specific reasons when rejecting leave requests
- **Track balances**: Monitor leave balances to prevent policy violations
- **Plan coverage**: Ensure adequate staffing when approving leave requests
- **Communicate decisions**: Inform employees promptly of leave approval decisions
- **Maintain records**: Keep records of leave decisions for reference

#### Salary Management Best Practices

- **Verify calculations**: Double-check salary calculations before assigning
- **Apply policy fairly**: Ensure salary structures are consistent across similar roles
- **Update promptly**: Update salary structures when policies or compensation changes
- **Document changes**: Keep records of salary changes with reasons
- **Review monthly**: Verify monthly salary calculations before processing payments
- **Communicate changes**: Inform employees of salary changes in advance
- **Stay compliant**: Ensure salary calculations comply with statutory requirements

#### Policy Configuration Best Practices

- **Test changes**: Test policy changes with a small group before company-wide implementation
- **Document policies**: Maintain documentation of all policy configurations
- **Review periodically**: Regularly review and update policies as needed
- **Consult stakeholders**: Get input from HR, finance, and legal before policy changes
- **Communicate clearly**: Inform employees of policy changes with clear explanations
- **Backup configurations**: Keep records of working policy configurations
- **Stay compliant**: Ensure policies comply with labor laws and regulations

#### Security Best Practices

- **Control access**: Only give admin access to authorized personnel
- **Monitor activity**: Regularly review system activity for unusual patterns
- **Update passwords**: Enforce regular password changes for admins
- **Secure settings**: Keep office location and other sensitive settings secure
- **Backup data**: Ensure regular data backups are performed
- **Review permissions**: Periodically review and revoke unnecessary access
- **Stay updated**: Keep app and server components updated for security

#### General Administration Best Practices

- **Be responsive**: Respond to employee issues and questions promptly
- **Provide training**: Train employees and new admins on app usage
- **Monitor performance**: Regularly review app performance and user feedback
- **Plan for growth**: Consider scalability when configuring policies and settings
- **Maintain documentation**: Keep user guides and procedures updated
- **Communicate changes**: Inform users of app updates and feature changes
- **Get feedback**: Collect user feedback to improve app usage and processes

---

## 12. Presentation Version

### Slide 1: Introduction to AWSPayroll

**Title**: AWSPayroll - Modern Payroll Management

**Content**:
- Complete mobile payroll solution for businesses
- Manages attendance, leave, salary, and expenses
- Two user roles: Employees/Leaders and Admins
- GPS-based attendance verification
- Automated leave and expense workflows
- Transparent salary calculations

**Visual**: Screenshot of app login screen with company branding

**Icon**: 📱 (Mobile phone)

**Speaker Notes**: AWSPayroll is a comprehensive mobile application designed to streamline payroll management for businesses. It serves both employees who need to track their work activities and administrators who manage the entire payroll process. The app eliminates manual paperwork and provides real-time visibility into workforce data.

---

### Slide 2: Key Features for Employees

**Title**: Employee Features

**Content**:
- GPS check-in/check-out with location verification
- Leave application with calendar picker
- Salary structure and monthly pay viewing
- Expense submission for reimbursement
- Profile information access
- Team and company policies viewing
- Light/dark theme support

**Visual**: Screenshot of employee dashboard showing attendance, leave, and salary cards

**Icon**: 👤 (User icon)

**Speaker Notes**: Employees can easily check in and out using GPS verification, apply for leave through an intuitive calendar interface, view their complete salary breakdown, submit work-related expenses, and access their profile information. The app supports both light and dark themes for user comfort.

---

### Slide 3: Key Features for Admins

**Title**: Admin Features

**Content**:
- Real-time dashboard with workforce metrics
- Employee and team management
- Attendance oversight and editing
- Leave approval workflow
- Expense approval workflow
- Salary structure assignment
- Monthly payroll processing
- Policy configuration
- Office location settings

**Visual**: Screenshot of admin dashboard with metrics cards

**Icon**: 👔 (Tie icon)

**Speaker Notes**: Administrators have comprehensive tools to manage the entire workforce. The dashboard provides real-time metrics, while dedicated screens allow for employee management, attendance oversight, leave and expense approvals, salary assignments, and policy configuration. All payroll calculations are automated based on configured rules.

---

### Slide 4: Attendance Management

**Title**: Smart Attendance Tracking

**Content**:
- GPS-based check-in/check-out
- Office location radius verification
- Automatic weekly off marking
- Attendance history and filtering
- Late marking and hours calculation
- Location capture for each check-in/out
- Admin editing capabilities

**Visual**: Screenshot of attendance screen with check-in/out buttons and location display

**Icon**: 📍 (Location pin)

**Speaker Notes**: The attendance system uses GPS to verify employees are at the office when checking in. Admins can configure office location radius, and the system automatically handles weekly off days. Complete attendance history is available with filtering by date, and admins can make corrections when needed.

---

### Slide 5: Leave and Expense Management

**Title**: Streamlined Request Workflows

**Content**:
- Leave application with multiple types
- Calendar-based date selection
- Admin approval/rejection with reasons
- Expense submission and approval
- Search and filter capabilities
- Status tracking (Pending/Approved/Rejected)
- Integration with monthly payroll

**Visual**: Screenshot of leave application form with calendar picker

**Icon**: 📝 (Document icon)

**Speaker Notes**: Employees can submit leave requests using an intuitive calendar interface and choose from various leave types. Admins can approve or reject requests with documented reasons. Similar workflow applies to expense submissions, with approved amounts automatically included in monthly payroll calculations.

---

### Slide 6: Salary and Payroll

**Title**: Automated Payroll Processing

**Content**:
- Salary structure assignment
- Earnings: Basic, HRA, Allowances, Bonus
- Deductions: PF, ESI, Professional Tax, TDS
- Automatic tax calculation with slabs
- Monthly payroll based on attendance
- Approved expense inclusion
- Net pay computation
- Salary history tracking

**Visual**: Screenshot of salary structure screen with earnings and deductions breakdown

**Icon**: 💰 (Money icon)

**Speaker Notes**: The system handles complete salary management including earnings components and statutory deductions. TDS is automatically calculated based on configurable tax slabs. Monthly payroll is computed based on actual attendance, approved leave, and approved expenses, providing accurate net pay for each employee.

---

### Slide 7: System Requirements

**Title**: Getting Started

**Content**:
- Android 5.0 or higher
- Internet connection required
- GPS for attendance (onsite employees)
- 150 MB storage space
- Location permissions required
- Install from company-provided APK
- Login credentials from HR

**Visual**: Smartphone with app installation screen

**Icon**: ⚙️ (Gear icon)

**Speaker Notes**: To use AWSPayroll, employees need an Android device running version 5.0 or higher with internet connectivity. Onsite employees require GPS for attendance verification. The app is installed via APK provided by the company, and login credentials are distributed by HR. Location permissions must be granted for attendance features.

---

### Slide 8: Daily Usage Workflow

**Title**: Typical User Journey

**Content**:
- Morning: Check in with GPS verification
- During day: Apply leave, submit expenses
- Evening: Check out to complete attendance
- Admin: Review dashboard, approve requests
- Anytime: View salary, check policies
- Regular: Update profile, monitor attendance

**Visual**: Flowchart showing daily check-in, work activities, and check-out process

**Icon**: 🔄 (Refresh/cycle icon)

**Speaker Notes**: The daily workflow is simple: employees check in when they arrive, perform their work activities including leave applications or expense submissions if needed, and check out when leaving. Administrators monitor the dashboard, process approvals, and ensure accurate records. All data is accessible anytime for review.

---

### Slide 9: Benefits and Advantages

**Title**: Why Choose AWSPayroll?

**Content**:
- **Time Saving**: Automates manual processes
- **Accuracy**: GPS verification prevents fraud
- **Transparency**: Employees see their data anytime
- **Compliance**: Built-in statutory deductions
- **Mobility**: Access from anywhere
- **Security**: Role-based access control
- **Scalability**: Grows with your business

**Visual**: Icon grid showing benefits (time, accuracy, transparency, compliance, mobility, security)

**Icon**: ✨ (Sparkles icon)

**Speaker Notes**: AWSPayroll delivers significant time savings by automating manual payroll tasks. GPS verification ensures attendance accuracy, while transparency gives employees visibility into their data. Built-in compliance features handle statutory deductions automatically. The mobile-first design provides accessibility from anywhere, with robust security through role-based access control.

---

### Slide 10: Support and Contact

**Title**: Getting Help

**Content**:
- In-app Contact Us section
- Company support email and phone
- HR department for account issues
- IT support for technical problems
- Employee ID required for support
- Screenshots helpful for issue reporting
- Regular app updates for improvements

**Visual**: Customer support representative with contact information

**Icon**: 📞 (Phone icon)

**Speaker Notes**: Support is readily available through the in-app Contact Us section, which provides company-specific support email and phone numbers. HR handles account-related issues while IT addresses technical problems. When reporting issues, provide your employee ID and screenshots when possible. The app receives regular updates to improve functionality and user experience.

---

## Appendix

### Glossary

- **GPS**: Global Positioning System - used for location verification
- **PF**: Provident Fund - statutory deduction for employee savings
- **ESI**: Employee State Insurance - health insurance contribution
- **TDS**: Tax Deducted at Source - income tax deduction
- **HRA**: House Rent Allowance - salary component for housing
- **UAN**: Universal Account Number - for PF account tracking
- **PAN**: Permanent Account Number - tax identification number
- **Onsite**: Work type requiring presence at office location
- **Remote**: Work type allowing work from any location
- **Hybrid**: Work type combining onsite and remote work
- **Weekly Off**: Scheduled day off each week (typically Sunday)
- **Fixed Paid Days**: Number of paid working days in a salary cycle
- **Salary Cycle**: Period for which salary is calculated (typically monthly)

### Contact Information

**Company Support**:
- Email: amitwebsolutioncompany@gmail.com
- Phone: 8574700615

**For Issues Related To**:
- Payroll calculations: Contact HR
- Attendance problems: Contact immediate supervisor
- Login issues: Contact IT administrator
- App bugs: Contact IT support with screenshots

**When Reporting Issues, Include**:
- Your employee ID
- Description of the problem
- Steps to reproduce the issue
- Screenshots if applicable
- Date and time of occurrence

### Version Information

**App Version**: 1.0.0
**Document Version**: 1.0
**Last Updated**: July 2026

---

*This user guide is intended for customers of AWSPayroll. For the most up-to-date information, always refer to the in-app help and contact your company's support team.*
