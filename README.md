## Welcome to Country Flags Serverless Functions!

## APIs Available

1. `api/getAllCountries`

### Usage
```
      const res = await axios({
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        url: `api/getAllCountries`,
      });
```

2. `api/getCountryByNationality`

### Usage
```
      const res = await axios({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        url: `api/getCountryByNationality`,
        data: JSON.stringify({ nationality: "Australian" }),
      });
```

3. `api/getFlagUrlByCountryName`

### Usage
```
      const res = await axios({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        url: `api/getFlagUrlByCountryName`,
        data: JSON.stringify({ countryName: "Australia" }),
      });
```

4. `api/getFlagUrlByISO2Code`

### Usage
```
      const res = await axios({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        url: `api/getFlagUrlByISO2Code`,
        data: JSON.stringify({ iso2Code: "AU" }),
      });
```

5. `api/getFlagUrlByISO3Code`

### Usage
```
      const res = await axios({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        url: `api/getFlagUrlByISO3Code`,
        data: JSON.stringify({ iso3Code: "AU" }),
      });
```

## Deploy It Yourself 🎉

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/timelessco/country-flags) 


Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
