# 🏨 Wild Oasis - Hotel Management System

A comprehensive hotel management application built with React and Supabase, designed for hotel staff to manage bookings, cabins, guests, and daily operations efficiently.

![Wild Oasis Dashboard](https://img.shields.io/badge/Status-Active-brightgreen) ![React](https://img.shields.io/badge/React-19.1.0-blue) ![Supabase](https://img.shields.io/badge/Supabase-Backend-green) ![Vite](https://img.shields.io/badge/Vite-7.0.0-yellow)

## 🌟 Features

### 📊 Dashboard & Analytics
- **Real-time Statistics**: Track total bookings, sales, check-ins, and occupancy rates
- **Interactive Charts**: Visualize sales trends and booking duration patterns
- **Today's Activity**: Monitor check-ins and check-outs happening today
- **Revenue Analytics**: View financial performance over different time periods

### 🏠 Cabin Management
- **Cabin Catalog**: Complete CRUD operations for cabin management
- **Image Upload**: Upload and manage cabin photos with automatic storage
- **Pricing & Capacity**: Set regular prices, discounts, and maximum capacity
- **Detailed Descriptions**: Rich cabin descriptions for marketing purposes

### 📅 Booking System
- **Booking Overview**: View all bookings with filtering and sorting capabilities
- **Status Management**: Track booking status (unconfirmed, checked-in, checked-out)
- **Guest Information**: Access complete guest details and booking history
- **Payment Tracking**: Monitor payment status and additional services

### 👥 Guest Management
- **Guest Profiles**: Maintain detailed guest information and preferences
- **Booking History**: View complete booking history for each guest
- **Contact Information**: Store and manage guest contact details
- **Nationality Tracking**: Track guest demographics with country flags

### ✅ Check-in/Check-out System
- **Streamlined Process**: Efficient check-in and check-out workflows
- **Payment Processing**: Handle payments and additional services during check-in
- **Activity Monitoring**: Real-time tracking of daily check-in/out activities
- **Breakfast Services**: Manage optional breakfast add-ons

### 🔐 Authentication & User Management
- **Secure Authentication**: Powered by Supabase Auth
- **User Profiles**: Manage staff accounts and profile information
- **Avatar Upload**: Custom avatar support for user profiles
- **Password Management**: Secure password reset and update functionality

### ⚙️ Settings & Configuration
- **Global Settings**: Configure application-wide settings
- **Pricing Rules**: Set minimum and maximum nights, breakfast prices
- **Business Rules**: Customize operational parameters

### 🎨 User Experience
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Responsive Design**: Optimized for desktop and tablet devices
- **Real-time Updates**: Live data synchronization across the application
- **Error Handling**: Comprehensive error boundaries and user feedback
- **Loading States**: Smooth loading experiences with skeleton screens

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Latest React with concurrent features
- **Vite 7.0.0** - Lightning-fast build tool and development server
- **React Router DOM 7.6.3** - Client-side routing with data loading
- **Styled Components 6.1.19** - CSS-in-JS styling solution
- **React Query 5.81.5** - Powerful data synchronization and caching

### Backend & Database
- **Supabase** - Backend-as-a-Service with PostgreSQL database
- **Supabase Auth** - Authentication and user management
- **Supabase Storage** - File storage for images and avatars
- **Row Level Security (RLS)** - Database security policies

### Form Management & Validation
- **React Hook Form 7.60.0** - Performant forms with easy validation
- **React Hot Toast 2.5.2** - Beautiful toast notifications
- **React Error Boundary 6.0.0** - Error handling and recovery

### Data Visualization & UI
- **Recharts 2.15.4** - Composable charting library
- **React Icons 5.5.0** - Popular icon libraries
- **Date-fns 4.1.0** - Modern JavaScript date utility library

### Development Tools
- **ESLint** - Code linting and formatting
- **React Query Devtools** - Development debugging tools

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/wild-oasis.git
   cd wild-oasis
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_KEY=your_supabase_anon_key
   ```

4. **Supabase Configuration**
   
   **Database Tables:**
   Set up the following tables in your Supabase database:
   - `cabins` - Store cabin information
   - `bookings` - Store booking details
   - `guests` - Store guest information
   - `settings` - Store application settings
   
   **Storage Buckets:**
   Create the following storage buckets:
   - `cabin-images` - For cabin photographs
   - `avatars` - For user profile pictures
   
   **Row Level Security:**
   Enable RLS policies for data protection

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
├── context/             # React context providers
│   └── DarkModeContext.jsx
├── data/                # Sample data and utilities
│   ├── cabins/          # Cabin images
│   └── Uploader.jsx     # Data upload utility
├── features/            # Feature-based modules
│   ├── authentication/ # Login, signup, user management
│   ├── bookings/        # Booking management
│   ├── cabins/          # Cabin management
│   ├── check-in-out/    # Check-in/out workflows
│   ├── dashboard/       # Dashboard and analytics
│   ├── guests/          # Guest management
│   └── settings/        # Application settings
├── hooks/               # Custom React hooks
├── pages/               # Route-level page components
├── services/            # API and external service integrations
│   ├── apiAuth.js       # Authentication services
│   ├── apiBookings.js   # Booking API calls
│   ├── apiCabins.js     # Cabin API calls
│   ├── apiGuests.js     # Guest API calls
│   ├── apiSettings.js   # Settings API calls
│   └── supabase.js      # Supabase client configuration
├── styles/              # Global styles and themes
├── ui/                  # UI component library
├── utils/               # Utility functions and constants
├── App.jsx              # Main application component
└── main.jsx             # Application entry point
```

## 🎯 Key Features Deep Dive

### Dashboard Analytics
- **Statistics Cards**: Display key metrics like total bookings, sales, check-ins, and occupancy
- **Sales Chart**: Interactive line chart showing revenue trends over time
- **Duration Chart**: Pie chart analyzing stay duration patterns
- **Today's Activity**: Real-time list of check-ins and check-outs
- **Filter Options**: View data for last 7, 30, or 90 days

### Cabin Management
- **Complete CRUD Operations**: Create, read, update, and delete cabins
- **Image Management**: Upload cabin photos with automatic resizing and storage
- **Duplicate Functionality**: Quick cabin duplication for similar properties
- **Capacity Management**: Set maximum occupancy and pricing tiers
- **Discount System**: Apply seasonal or promotional discounts

### Booking Workflow
- **Booking States**: Manage unconfirmed, confirmed, checked-in, and checked-out status
- **Payment Integration**: Track payment status and process additional charges
- **Guest Services**: Add breakfast and other services during booking
- **Filtering & Sorting**: Advanced filtering by status, date, and guest information
- **Pagination**: Efficient handling of large booking datasets

### Check-in Process
- **Guest Verification**: Confirm guest identity and booking details
- **Payment Collection**: Process outstanding payments and deposits
- **Service Add-ons**: Add breakfast or other services during check-in
- **Room Assignment**: Confirm cabin assignment and provide access details
- **Documentation**: Generate confirmation receipts and documentation

## 💻 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Connect your repository to your deployment platform
2. Set environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_KEY`
3. Deploy from the `dist` folder after running build

### Environment Variables
Make sure to configure these environment variables in your deployment:
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_KEY`: Your Supabase anonymous key

## 🔧 Configuration

### Supabase Setup
1. Create a new Supabase project
2. Set up the database schema (tables for cabins, bookings, guests, settings)
3. Configure Row Level Security (RLS) policies
4. Set up storage buckets for images
5. Configure authentication settings

### Customization
- **Themes**: Modify colors and styling in `styles/GlobalStyles.js`
- **Business Rules**: Update settings in the Settings page
- **Branding**: Replace logos in the `public` folder
- **Features**: Add new features following the existing pattern in `features/`

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code structure and patterns
- Use feature-based organization for new functionality
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/) and [Supabase](https://supabase.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Charts powered by [Recharts](https://recharts.org/)
- Styled with [Styled Components](https://styled-components.com/)

## 📞 Support

If you have any questions or need help getting started:

- Check the [Issues](https://github.com/yourusername/wild-oasis/issues) page
- Create a new issue for bugs or feature requests
- Reach out to the maintainers

---

**Happy Hotel Management! 🏨✨**
