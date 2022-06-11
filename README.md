## Welcome to Country Flags Serverless Functions!

## Deployed GET URLs

1. **By Country Name**

#### Link :

https://country-flags-topaz.vercel.app/api/getCountryFlagByCountryName?countryName=Portugal

#### Usage :

```
<img src="https://country-flags-topaz.vercel.app/api/getCountryFlagByCountryName?countryName=Portugal" height="150">
```

#### Response :

<img src="https://country-flags-topaz.vercel.app/api/getCountryFlagByCountryName?countryName=Portugal" height="150">

2. **By ISO2Code**

#### Link :

https://country-flags-topaz.vercel.app/api/getCountryFlagByISO2Code?iso2code=AU

#### Usage :

```
<img src="https://country-flags-topaz.vercel.app/api/getCountryFlagByISO2Code?iso2code=AU" height="150">
```

#### Response :

<img src="https://country-flags-topaz.vercel.app/api/getCountryFlagByISO2Code?iso2code=AU" height="150">

3. **By ISO3Code**

#### Link :

https://country-flags-topaz.vercel.app/api/getCountryFlagByISO3Code?iso3code=DEU

#### Usage :

```
<img src="https://country-flags-topaz.vercel.app/api/getCountryFlagByISO3Code?iso3code=DEU" height="150">
```

#### Response :

<img src="https://country-flags-topaz.vercel.app/api/getCountryFlagByISO3Code?iso3code=DEU" height="150">

3. **By Nationality**

#### Link :

https://country-flags-topaz.vercel.app/api/getCountryFlagByNationality?nationality=Indian

#### Usage :

```
<img src="https://country-flags-topaz.vercel.app/api/getCountryFlagByNationality?nationality=Indian" height="150">
```

#### Response :

<img src="https://country-flags-topaz.vercel.app/api/getCountryFlagByNationality?nationality=Indian" height="150">

## Deployed POST URLs

### Usage

1. **_By Nationality_**- https://country-flags-topaz.vercel.app/api/getCountryByNationality
   ![image](https://user-images.githubusercontent.com/35562287/169065800-8e753326-9bfa-45f7-b980-efb8d4e901af.png)

2. **_By Name_**- https://country-flags-topaz.vercel.app/api/getFlagUrlByCountryName
   ![image](https://user-images.githubusercontent.com/35562287/169065834-ffddf645-5d1e-44f7-873c-5cbc4ea96f90.png)

3. **_By ISO2 Code_**- https://country-flags-topaz.vercel.app/api/getFlagUrlByISO2Code
   ![image](https://user-images.githubusercontent.com/35562287/169065896-76f1ed85-0476-425f-af57-2411e1aced5c.png)

4. **_By ISO3 Code_**- https://country-flags-topaz.vercel.app/api/getFlagUrlByISO3Code
   ![image](https://user-images.githubusercontent.com/35562287/169065926-6321c266-ee7d-46df-a502-4546eda081cd.png)

5. **_All Countries_**- https://country-flags-topaz.vercel.app/api/getAllCountries
   ![image](https://user-images.githubusercontent.com/35562287/169065953-f4f60c25-78d6-4ac8-b4d3-80085e7660d7.png)

## APIs Available When Trying Locally

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
