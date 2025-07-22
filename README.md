# JobSift - React Native Job Board App

A modern, cross-platform job search application built with React Native and Expo. JobSift helps users discover job opportunities with an intuitive interface featuring popular jobs, nearby positions, and detailed job information.

## Features

- **Job Search**: Search for jobs by keywords and location
- **Popular Jobs**: Browse trending job opportunities
- **Nearby Jobs**: Find local job openings
- **Job Details**: View comprehensive job information including company details, requirements, and responsibilities
- **Responsive Design**: Optimized for both iOS and Android devices
- **Real-time Data**: Powered by JSearch API for up-to-date job listings

## Tech Stack

- **Framework**: React Native 0.71.3
- **Navigation**: Expo Router v1.0.0
- **UI**: React Native with custom styling
- **API Integration**: Axios for HTTP requests
- **Development**: Expo SDK 48
- **Fonts**: DM Sans font family
- **State Management**: React Hooks

## Project Structure

```
├── app/                    # App screens and routing
│   ├── home.js            # Main home screen
│   ├── index.js           # App entry point
│   ├── _layout.js         # Root layout configuration
│   ├── job-details/       # Job details screens
│   └── search/            # Search functionality
├── components/            # Reusable UI components
│   ├── common/           # Shared components (cards, headers)
│   ├── home/             # Home screen components
│   └── jobdetails/       # Job details components
├── constants/            # App constants (colors, icons, themes)
├── hook/                 # Custom React hooks
│   └── useFetch.js       # API data fetching hook
├── assets/               # Images, icons, and fonts
├── styles/               # Styling configurations
└── utils/                # Utility functions
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (optional)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd jobsift
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

### Running the App

- **iOS**: `npm run ios`
- **Android**: `npm run android`
- **Web**: `npm run web`

You can also scan the QR code with the Expo Go app on your mobile device to run the app directly.

## API Integration

The app uses the JSearch API (RapidAPI) to fetch job data. The API integration is handled through a custom `useFetch` hook that provides:

- Loading states
- Error handling
- Data refetching capabilities

## Key Components

- **Welcome**: Search interface and user greeting
- **PopularJobs**: Displays trending job opportunities
- **NearbyJobs**: Shows local job listings
- **JobDetails**: Comprehensive job information view
- **ScreenHeaderBtn**: Reusable header button component

## Styling

The app uses a consistent design system with:
- Custom color palette defined in constants
- DM Sans font family for typography
- Responsive sizing and spacing
- Platform-specific optimizations

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Screenshots

![Screenshot_2023-05-23-12-59-45-249-edit_host exp](https://github.com/MunDo12138/Job_Board_React_Native_APP/assets/66548936/4b831c73-12b3-490c-8d8c-bcfcf8e06173)

![Screenshot_2023-05-23-13-00-25-789-edit_host exp](https://github.com/MunDo12138/Job_Board_React_Native_APP/assets/66548936/b3e53d38-1b07-4d66-945e-a9c4dd3d93fa)

![Screenshot_2023-05-23-12-59-55-500-edit_host exp](https://github.com/MunDo12138/Job_Board_React_Native_APP/assets/66548936/b575e17d-5414-451d-a781-3f245f762547)
