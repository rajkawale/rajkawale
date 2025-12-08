# Testimonials Scraper Script (Future)

This script will be created to scrape LinkedIn recommendations and update `src/data/testimonials.json`.

## Planned Features

- Scrape LinkedIn recommendations from your profile
- Extract: author, role, company, quote, photo, date, sourceUrl
- Update testimonials.json automatically
- Run monthly via cron or GitHub Actions

## Implementation Notes

- Will use LinkedIn API or web scraping (depending on availability)
- Respects rate limits
- Validates data before writing
- Creates backup before updating

## Usage (When Implemented)

```bash
npm run sync:testimonials
```

This will be added to the monthly GitHub Actions workflow.

