# 🛒 Amazon Scraper API - Back-end

This project is a **simple API with Express running on Bun** that allows you to scrape Amazon products based on a keyword. It uses `axios` to make HTTP requests and `jsdom` to simulate the DOM and scrape the data from the Amazon HTML page.

## 🚀 Technologies Used

- Bun – Ultra-fast JavaScript runtime
- Express – Minimalist web framework
- Axios – HTTP client for making requests
- JSDOM – Simulates the DOM in Node/Bun environments
- RandomUseragent - Prevent the same User-Agent from being used repeatedly
- CORS - Browser security mechanism that allows front-end to communicate with the back-end

## 📁 Project Structure

```
amazon-scraper-backend/
├── src/
│   └── index.js
├── .gitignore
├── bun.lockb
├── package.json
└── README.md
```

## ⚙️ How to Run

### 1. Install Bun (if you don't have it)

```bash
curl -fsSL https://bun.sh/install | bash
```

### 2. Clone the repository

```bash
git clone https://github.com/matheusfdosan/amazon-scraper-app.git
cd amazon-scraper-app/back-end
```

### 3. Install dependencies

```bash
bun install
```

### 4. Run the server

```bash
bun run start
```

## 🧪 How to Use

After starting the server, access:

```
http://localhost:3000/api/scrape?keyword=laptop
```

Replace `laptop` with any other keyword you want to search for.

The API will return a JSON array with the following fields:

```json
[
  {
    "title": "Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6\" Full HD IP...",
    "rating": "4.2 out of 5 stars",
    "reviewCount": "4,190",
    "image": "https://m.media-amazon.com/images/I/61gKkYQn6lL._AC_UY218_.jpg"
  }
]
```

## ☝🤓 Technical Observations

I noticed that most of the time when I started the search, the server's response was a 503 error. I did some more research on this, and I saw that Amazon blocked searches that were made by robots. And that was the problem that was occurring in my code, so I looked for ways to bypass this block.

Amazon checks request headers to identify bots. So I could use different User-Agents to change the browser type for each request to appear more human and bypass the CAPTCHA. But that wasn't enough, because I still got a 503 error.

In the request URL, I added dynamic parameters to make the requests more human-like, making them less detectable by Amazon's anti-scraping systems: 
  - When a user performs a search, the URL displays a parameter called _qid_, which is a **vulnerability ID** that comes with a timestamp indicating when the vulnerability was detected. To generate one of these, simply get the current timestamp in milliseconds from `Date.now()` and divide it by 1000 to get the timestamp in seconds.
  - In addition to *qid*, there is also *xpid*, which Amazon puts in search URLs to track A/B testing and personalize the user experience. For this parameter, I made a list of 8 xpids, and in each search, 1 xpid is randomly chosen to be part of the URL.

I also started simulating human navigation when entering Amazon, I made a request to the site's homepage, added a random delay and finally, I did the search I wanted.

Another thing I noticed was that when I repeated searches with the same keyword, the scraper accessed Amazon every time, which slowed down the process and increased the risk of blocking. With caching, the responses are instantaneous, reducing the number of accesses to Amazon and saving server resources.

## 👨‍💻 Autor

Developed by [Matheus Faustino](https://github.com/matheusfdosan)
