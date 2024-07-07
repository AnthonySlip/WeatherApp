

export interface IFetchWeatherDto {
    latitude: string
    longitude: string
}


export interface ICityResponse {
    results: Result[]
    generationtime_ms: number
}

interface Result {
    id: number
    name: string
    latitude: number
    longitude: number
    elevation: number
    feature_code: string
    country_code: string
    admin1_id: number
    timezone: string
    population?: number
    country_id: number
    country: string
    admin1: string
    admin2_id?: number
    postcodes?: string[]
    admin2?: string
    admin3_id?: number
    admin3?: string
}


export interface IWeatherResponse {
    latitude: number
    longitude: number
    generationtime_ms: number
    utc_offset_seconds: number
    timezone: string
    timezone_abbreviation: string
    elevation: number
    current_weather_units: CurrentWeatherUnits
    current_weather: CurrentWeather
    hourly_units: HourlyUnits
    hourly: Hourly
    daily_units: DailyUnits
    daily: Daily
}

interface CurrentWeatherUnits {
    time: string
    interval: string
    temperature: string
    windspeed: string
    winddirection: string
    is_day: string
    weathercode: string
}

interface CurrentWeather {
    time: string
    interval: number
    temperature: number
    windspeed: number
    winddirection: number
    is_day: number
    weathercode: number
}

interface HourlyUnits {
    time: string
    temperature_2m: string
    relativehumidity_2m: string
    windspeed_10m: string
    winddirection_10m: string
    snowfall: string
    weathercode: string
}

interface Hourly {
    time: string[]
    temperature_2m: number[]
    relativehumidity_2m: number[]
    windspeed_10m: number[]
    winddirection_10m: number[]
    snowfall: number[]
    weathercode: number[]
}

export interface DailyUnits {
    time: string
    temperature_2m_max: string
    temperature_2m_min: string
    precipitation_sum: string
    sunrise: string
    sunset: string
    weathercode: string
}

export interface Daily {
    time: string[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
    precipitation_sum: number[]
    sunrise: string[]
    sunset: string[]
    weathercode: number[]
}


