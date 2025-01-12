# Cryptocurrency Dashboard

A responsive cryptocurrency dashboard that displays real-time crypto prices, trends, and charts using CoinGecko API and TradingView widgets.

## 🚀 Live Demo

[View Live Project](https://konix-task.vercel.app/)

## ✨ Features

### Implemented Components
- Real-time Bitcoin price tracking in USD and INR
- 24-hour price change indicators
- TradingView advanced chart integration
- Top 3 trending cryptocurrencies display
- Horizontally scrollable "You May Also Like" carousel
- Responsive design matching Figma specifications

### API Integrations
1. **CoinGecko Price API** (`/simple/price`)
   - Fetches Bitcoin prices in USD and INR
   - Includes 24-hour price changes
   ```json
   {
     "bitcoin": {
       "inr": 5697177,
       "inr_24h_change": 3.6596920153414336,
       "usd": 68726,
       "usd_24h_change": 3.6767559459431545
     }
   }
   ```

2. **CoinGecko Trending API** (`/search/trending`)
   - Displays top 3 trending coins
   - Utilizes coin logos, symbols, and sparkline graphs

3. **TradingView Chart Widget**
   - Embedded advanced chart functionality
   - Customized to match Figma design specifications

## 🛠️ Technologies Used

- Next.js
- React
- TradingView Widgets
- CoinGecko API

## 🚀 Getting Started

1. Clone the repository
```bash
git clone https://github.com/Rishabh2503/konix-task
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

The application is fully responsive and adapts to:
- Desktop views
- Tablet views
- Mobile views

## 🔄 API Integration Details

### CoinGecko APIs Used:
1. Price Data: `/simple/price`
   - Parameters:
     - `ids`: bitcoin
     - `vs_currencies`: inr,usd
     - `include_24hr_change`: true

2. Trending Coins: `/search/trending`
   - Used for trending coins section
   - Implements carousel functionality

### TradingView Integration:
- Advanced Chart Widget implementation using Chart.js
- Customized parameters to match design specifications


## 🔧 Best Practices Implemented

1. Clean Code Architecture
2. Proper Component Structure
3. Efficient State Management
4. Version Control Best Practices

## 📚 Future Improvements

- Dynamic token display via URL routing
- Integration with `/coins/{id}` API for additional coin data

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Your Name
- GitHub: [@Rishabh2503](https://github.com/Rishabh2503)