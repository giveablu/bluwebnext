# Blu Charity - Next.js Web Application

A modern, responsive web application for the Blu Charity donation platform, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **Authentication**: Complete login/registration flow with OTP verification
- **Donation Interface**: Tinder-like swipe interface for discovering recipients
- **Profile Management**: User profile editing and donation history
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Type Safety**: Full TypeScript integration with strict type checking
- **Testing**: Comprehensive Jest test suite with 82.75% coverage
- **Performance**: Optimized builds with SWC compiler

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Jest + React Testing Library
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bluweb-next
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000/api
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧪 Testing

### Run Tests
```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### Test Coverage
- **Statements**: 84.93%
- **Branches**: 51.51%
- **Functions**: 75.75%
- **Lines**: 87.42%

## 🏗️ Build & Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Production Start
```bash
npm start
```

### Linting
```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── login.tsx          # Login page
│   ├── register.tsx       # Registration page
│   ├── donate.tsx         # Donation interface
│   ├── donations.tsx      # Donation history
│   ├── profile.tsx        # User profile
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   └── SwipeCard.jsx      # Swipe interface component
├── services/              # API services
│   └── apiService.js      # API client
├── types/                 # TypeScript type definitions
│   └── index.ts           # API and component types
├── __tests__/             # Test files
│   ├── app.test.tsx       # Main app flow tests
│   ├── login.test.tsx     # Login tests
│   ├── register.test.tsx  # Registration tests
│   ├── donate.test.tsx    # Donation tests
│   ├── donations.test.tsx # Donation history tests
│   └── profile.test.tsx   # Profile tests
└── config/                # Configuration files
    └── api.js             # API configuration
```

## 🔧 Configuration

### Jest Configuration
The project uses Next.js Jest configuration for optimal testing:
```js
// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
}

module.exports = createJestConfig(customJestConfig)
```

### Jest Configuration
Jest is configured to work with Next.js and TypeScript:
- Uses Next.js Jest transformer for optimal compatibility
- Mocks Next.js router and static assets
- Provides comprehensive test coverage
- No Babel configuration required

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm start
```

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | Yes |

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is part of the Blu Charity platform. See the main project license for details.

## 🆘 Support

For support and questions, please refer to the main project documentation or contact the development team.
