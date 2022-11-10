let tempForecast = `
{
	"cod": "200",
	"message": 0,
	"cnt": 40,
	"list": [
		{
			"dt": 1668092400,
			"main": {
				"temp": 11.51,
				"feels_like": 10.88,
				"temp_min": 11.51,
				"temp_max": 11.62,
				"pressure": 1019,
				"sea_level": 1019,
				"grnd_level": 1009,
				"humidity": 83,
				"temp_kf": -0.11
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10n"
				}
			],
			"clouds": {
				"all": 77
			},
			"wind": {
				"speed": 4.66,
				"deg": 277,
				"gust": 9.59
			},
			"visibility": 10000,
			"pop": 0.37,
			"rain": {
				"3h": 0.14
			},
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-10 15:00:00"
		},
		{
			"dt": 1668103200,
			"main": {
				"temp": 10.36,
				"feels_like": 9.46,
				"temp_min": 9.81,
				"temp_max": 10.36,
				"pressure": 1022,
				"sea_level": 1022,
				"grnd_level": 1011,
				"humidity": 77,
				"temp_kf": 0.55
			},
			"weather": [
				{
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 70
			},
			"wind": {
				"speed": 4.26,
				"deg": 271,
				"gust": 10.42
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-10 18:00:00"
		},
		{
			"dt": 1668114000,
			"main": {
				"temp": 8.63,
				"feels_like": 6.64,
				"temp_min": 8.63,
				"temp_max": 8.63,
				"pressure": 1027,
				"sea_level": 1027,
				"grnd_level": 1013,
				"humidity": 81,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01n"
				}
			],
			"clouds": {
				"all": 5
			},
			"wind": {
				"speed": 3.38,
				"deg": 267,
				"gust": 9.73
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-10 21:00:00"
		},
		{
			"dt": 1668124800,
			"main": {
				"temp": 7.8,
				"feels_like": 5.87,
				"temp_min": 7.8,
				"temp_max": 7.8,
				"pressure": 1028,
				"sea_level": 1028,
				"grnd_level": 1014,
				"humidity": 89,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 802,
					"main": "Clouds",
					"description": "scattered clouds",
					"icon": "03n"
				}
			],
			"clouds": {
				"all": 31
			},
			"wind": {
				"speed": 3,
				"deg": 254,
				"gust": 8.3
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-11 00:00:00"
		},
		{
			"dt": 1668135600,
			"main": {
				"temp": 8.07,
				"feels_like": 6.21,
				"temp_min": 8.07,
				"temp_max": 8.07,
				"pressure": 1028,
				"sea_level": 1028,
				"grnd_level": 1014,
				"humidity": 86,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 71
			},
			"wind": {
				"speed": 2.97,
				"deg": 240,
				"gust": 8.81
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-11 03:00:00"
		},
		{
			"dt": 1668146400,
			"main": {
				"temp": 7.83,
				"feels_like": 5.67,
				"temp_min": 7.83,
				"temp_max": 7.83,
				"pressure": 1029,
				"sea_level": 1029,
				"grnd_level": 1014,
				"humidity": 88,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 85
			},
			"wind": {
				"speed": 3.39,
				"deg": 249,
				"gust": 9.49
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-11 06:00:00"
		},
		{
			"dt": 1668157200,
			"main": {
				"temp": 9.95,
				"feels_like": 7.75,
				"temp_min": 9.95,
				"temp_max": 9.95,
				"pressure": 1029,
				"sea_level": 1029,
				"grnd_level": 1015,
				"humidity": 77,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 4.43,
				"deg": 252,
				"gust": 9.99
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-11 09:00:00"
		},
		{
			"dt": 1668168000,
			"main": {
				"temp": 11.71,
				"feels_like": 10.69,
				"temp_min": 11.71,
				"temp_max": 11.71,
				"pressure": 1029,
				"sea_level": 1029,
				"grnd_level": 1014,
				"humidity": 67,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 4.55,
				"deg": 255,
				"gust": 10.17
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-11 12:00:00"
		},
		{
			"dt": 1668178800,
			"main": {
				"temp": 11.02,
				"feels_like": 9.93,
				"temp_min": 11.02,
				"temp_max": 11.02,
				"pressure": 1029,
				"sea_level": 1029,
				"grnd_level": 1015,
				"humidity": 67,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 4.12,
				"deg": 257,
				"gust": 10.32
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-11 15:00:00"
		},
		{
			"dt": 1668189600,
			"main": {
				"temp": 10.06,
				"feels_like": 8.98,
				"temp_min": 10.06,
				"temp_max": 10.06,
				"pressure": 1030,
				"sea_level": 1030,
				"grnd_level": 1015,
				"humidity": 71,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 3.72,
				"deg": 262,
				"gust": 10.17
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-11 18:00:00"
		},
		{
			"dt": 1668200400,
			"main": {
				"temp": 9.2,
				"feels_like": 7.24,
				"temp_min": 9.2,
				"temp_max": 9.2,
				"pressure": 1030,
				"sea_level": 1030,
				"grnd_level": 1016,
				"humidity": 75,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 3.55,
				"deg": 266,
				"gust": 9.92
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-11 21:00:00"
		},
		{
			"dt": 1668211200,
			"main": {
				"temp": 8.38,
				"feels_like": 6.69,
				"temp_min": 8.38,
				"temp_max": 8.38,
				"pressure": 1030,
				"sea_level": 1030,
				"grnd_level": 1016,
				"humidity": 78,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 98
			},
			"wind": {
				"speed": 2.81,
				"deg": 270,
				"gust": 8.55
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-12 00:00:00"
		},
		{
			"dt": 1668222000,
			"main": {
				"temp": 7.55,
				"feels_like": 5.83,
				"temp_min": 7.55,
				"temp_max": 7.55,
				"pressure": 1031,
				"sea_level": 1031,
				"grnd_level": 1016,
				"humidity": 81,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 99
			},
			"wind": {
				"speed": 2.62,
				"deg": 264,
				"gust": 6.75
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-12 03:00:00"
		},
		{
			"dt": 1668232800,
			"main": {
				"temp": 7.1,
				"feels_like": 5.08,
				"temp_min": 7.1,
				"temp_max": 7.1,
				"pressure": 1031,
				"sea_level": 1031,
				"grnd_level": 1017,
				"humidity": 83,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 94
			},
			"wind": {
				"speed": 2.93,
				"deg": 275,
				"gust": 8.23
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-12 06:00:00"
		},
		{
			"dt": 1668243600,
			"main": {
				"temp": 9.8,
				"feels_like": 8,
				"temp_min": 9.8,
				"temp_max": 9.8,
				"pressure": 1032,
				"sea_level": 1032,
				"grnd_level": 1018,
				"humidity": 71,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 62
			},
			"wind": {
				"speed": 3.5,
				"deg": 282,
				"gust": 6.69
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-12 09:00:00"
		},
		{
			"dt": 1668254400,
			"main": {
				"temp": 12.18,
				"feels_like": 11.15,
				"temp_min": 12.18,
				"temp_max": 12.18,
				"pressure": 1032,
				"sea_level": 1032,
				"grnd_level": 1017,
				"humidity": 65,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 52
			},
			"wind": {
				"speed": 3.57,
				"deg": 294,
				"gust": 5.89
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-12 12:00:00"
		},
		{
			"dt": 1668265200,
			"main": {
				"temp": 10.3,
				"feels_like": 9.37,
				"temp_min": 10.3,
				"temp_max": 10.3,
				"pressure": 1032,
				"sea_level": 1032,
				"grnd_level": 1018,
				"humidity": 76,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 802,
					"main": "Clouds",
					"description": "scattered clouds",
					"icon": "03n"
				}
			],
			"clouds": {
				"all": 35
			},
			"wind": {
				"speed": 2.36,
				"deg": 309,
				"gust": 5.01
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-12 15:00:00"
		},
		{
			"dt": 1668276000,
			"main": {
				"temp": 8.56,
				"feels_like": 7.77,
				"temp_min": 8.56,
				"temp_max": 8.56,
				"pressure": 1033,
				"sea_level": 1033,
				"grnd_level": 1019,
				"humidity": 88,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 51
			},
			"wind": {
				"speed": 1.73,
				"deg": 345,
				"gust": 3.73
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-12 18:00:00"
		},
		{
			"dt": 1668286800,
			"main": {
				"temp": 9.62,
				"feels_like": 9.62,
				"temp_min": 9.62,
				"temp_max": 9.62,
				"pressure": 1033,
				"sea_level": 1033,
				"grnd_level": 1019,
				"humidity": 84,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 95
			},
			"wind": {
				"speed": 0.84,
				"deg": 236,
				"gust": 0.89
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-12 21:00:00"
		},
		{
			"dt": 1668297600,
			"main": {
				"temp": 10.01,
				"feels_like": 9.21,
				"temp_min": 10.01,
				"temp_max": 10.01,
				"pressure": 1033,
				"sea_level": 1033,
				"grnd_level": 1018,
				"humidity": 82,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 97
			},
			"wind": {
				"speed": 1.54,
				"deg": 215,
				"gust": 1.52
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-13 00:00:00"
		},
		{
			"dt": 1668308400,
			"main": {
				"temp": 10.08,
				"feels_like": 9.26,
				"temp_min": 10.08,
				"temp_max": 10.08,
				"pressure": 1032,
				"sea_level": 1032,
				"grnd_level": 1018,
				"humidity": 81,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 1.42,
				"deg": 201,
				"gust": 1.44
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-13 03:00:00"
		},
		{
			"dt": 1668319200,
			"main": {
				"temp": 10.53,
				"feels_like": 9.6,
				"temp_min": 10.53,
				"temp_max": 10.53,
				"pressure": 1032,
				"sea_level": 1032,
				"grnd_level": 1017,
				"humidity": 75,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 1.39,
				"deg": 190,
				"gust": 1.31
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-13 06:00:00"
		},
		{
			"dt": 1668330000,
			"main": {
				"temp": 11.16,
				"feels_like": 10.21,
				"temp_min": 11.16,
				"temp_max": 11.16,
				"pressure": 1032,
				"sea_level": 1032,
				"grnd_level": 1017,
				"humidity": 72,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 1.52,
				"deg": 191,
				"gust": 1.98
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-13 09:00:00"
		},
		{
			"dt": 1668340800,
			"main": {
				"temp": 12.43,
				"feels_like": 11.43,
				"temp_min": 12.43,
				"temp_max": 12.43,
				"pressure": 1030,
				"sea_level": 1030,
				"grnd_level": 1016,
				"humidity": 65,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 82
			},
			"wind": {
				"speed": 1.43,
				"deg": 165,
				"gust": 1.88
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-13 12:00:00"
		},
		{
			"dt": 1668351600,
			"main": {
				"temp": 10.86,
				"feels_like": 9.91,
				"temp_min": 10.86,
				"temp_max": 10.86,
				"pressure": 1030,
				"sea_level": 1030,
				"grnd_level": 1015,
				"humidity": 73,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 801,
					"main": "Clouds",
					"description": "few clouds",
					"icon": "02n"
				}
			],
			"clouds": {
				"all": 17
			},
			"wind": {
				"speed": 1.43,
				"deg": 135,
				"gust": 1.4
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-13 15:00:00"
		},
		{
			"dt": 1668362400,
			"main": {
				"temp": 9.34,
				"feels_like": 8.69,
				"temp_min": 9.34,
				"temp_max": 9.34,
				"pressure": 1029,
				"sea_level": 1029,
				"grnd_level": 1015,
				"humidity": 81,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 55
			},
			"wind": {
				"speed": 1.7,
				"deg": 141,
				"gust": 2.28
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-13 18:00:00"
		},
		{
			"dt": 1668373200,
			"main": {
				"temp": 8.4,
				"feels_like": 7.65,
				"temp_min": 8.4,
				"temp_max": 8.4,
				"pressure": 1029,
				"sea_level": 1029,
				"grnd_level": 1015,
				"humidity": 85,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 98
			},
			"wind": {
				"speed": 1.66,
				"deg": 128,
				"gust": 2.6
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-13 21:00:00"
		},
		{
			"dt": 1668384000,
			"main": {
				"temp": 7.67,
				"feels_like": 6.46,
				"temp_min": 7.67,
				"temp_max": 7.67,
				"pressure": 1029,
				"sea_level": 1029,
				"grnd_level": 1014,
				"humidity": 88,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 99
			},
			"wind": {
				"speed": 2.02,
				"deg": 113,
				"gust": 3.99
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-14 00:00:00"
		},
		{
			"dt": 1668394800,
			"main": {
				"temp": 7,
				"feels_like": 5.61,
				"temp_min": 7,
				"temp_max": 7,
				"pressure": 1028,
				"sea_level": 1028,
				"grnd_level": 1013,
				"humidity": 89,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 97
			},
			"wind": {
				"speed": 2.1,
				"deg": 123,
				"gust": 4.87
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-14 03:00:00"
		},
		{
			"dt": 1668405600,
			"main": {
				"temp": 6.52,
				"feels_like": 4.79,
				"temp_min": 6.52,
				"temp_max": 6.52,
				"pressure": 1027,
				"sea_level": 1027,
				"grnd_level": 1013,
				"humidity": 89,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 92
			},
			"wind": {
				"speed": 2.39,
				"deg": 113,
				"gust": 5.88
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-14 06:00:00"
		},
		{
			"dt": 1668416400,
			"main": {
				"temp": 8.62,
				"feels_like": 6.69,
				"temp_min": 8.62,
				"temp_max": 8.62,
				"pressure": 1027,
				"sea_level": 1027,
				"grnd_level": 1013,
				"humidity": 78,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 99
			},
			"wind": {
				"speed": 3.28,
				"deg": 125,
				"gust": 6.34
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-14 09:00:00"
		},
		{
			"dt": 1668427200,
			"main": {
				"temp": 10.37,
				"feels_like": 9.29,
				"temp_min": 10.37,
				"temp_max": 10.37,
				"pressure": 1026,
				"sea_level": 1026,
				"grnd_level": 1011,
				"humidity": 70,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 3.4,
				"deg": 123,
				"gust": 5.57
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-14 12:00:00"
		},
		{
			"dt": 1668438000,
			"main": {
				"temp": 9.08,
				"feels_like": 7.35,
				"temp_min": 9.08,
				"temp_max": 9.08,
				"pressure": 1025,
				"sea_level": 1025,
				"grnd_level": 1010,
				"humidity": 77,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 3.1,
				"deg": 118,
				"gust": 7.24
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-14 15:00:00"
		},
		{
			"dt": 1668448800,
			"main": {
				"temp": 7.91,
				"feels_like": 5.99,
				"temp_min": 7.91,
				"temp_max": 7.91,
				"pressure": 1024,
				"sea_level": 1024,
				"grnd_level": 1009,
				"humidity": 83,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 3.02,
				"deg": 125,
				"gust": 8.06
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-14 18:00:00"
		},
		{
			"dt": 1668459600,
			"main": {
				"temp": 7.22,
				"feels_like": 5.42,
				"temp_min": 7.22,
				"temp_max": 7.22,
				"pressure": 1023,
				"sea_level": 1023,
				"grnd_level": 1008,
				"humidity": 87,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 2.64,
				"deg": 135,
				"gust": 7.21
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-14 21:00:00"
		},
		{
			"dt": 1668470400,
			"main": {
				"temp": 6.3,
				"feels_like": 4.79,
				"temp_min": 6.3,
				"temp_max": 6.3,
				"pressure": 1021,
				"sea_level": 1021,
				"grnd_level": 1006,
				"humidity": 88,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 95
			},
			"wind": {
				"speed": 2.1,
				"deg": 154,
				"gust": 5.19
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-15 00:00:00"
		},
		{
			"dt": 1668481200,
			"main": {
				"temp": 5.73,
				"feels_like": 4.53,
				"temp_min": 5.73,
				"temp_max": 5.73,
				"pressure": 1019,
				"sea_level": 1019,
				"grnd_level": 1004,
				"humidity": 88,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 58
			},
			"wind": {
				"speed": 1.71,
				"deg": 173,
				"gust": 2.81
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-15 03:00:00"
		},
		{
			"dt": 1668492000,
			"main": {
				"temp": 5.88,
				"feels_like": 5.88,
				"temp_min": 5.88,
				"temp_max": 5.88,
				"pressure": 1018,
				"sea_level": 1018,
				"grnd_level": 1003,
				"humidity": 83,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 803,
					"main": "Clouds",
					"description": "broken clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 75
			},
			"wind": {
				"speed": 1.32,
				"deg": 217,
				"gust": 1.34
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-15 06:00:00"
		},
		{
			"dt": 1668502800,
			"main": {
				"temp": 8.76,
				"feels_like": 8.27,
				"temp_min": 8.76,
				"temp_max": 8.76,
				"pressure": 1017,
				"sea_level": 1017,
				"grnd_level": 1002,
				"humidity": 66,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 1.47,
				"deg": 240,
				"gust": 2.86
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-15 09:00:00"
		},
		{
			"dt": 1668513600,
			"main": {
				"temp": 11.82,
				"feels_like": 10.49,
				"temp_min": 11.82,
				"temp_max": 11.82,
				"pressure": 1014,
				"sea_level": 1014,
				"grnd_level": 1000,
				"humidity": 55,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 804,
					"main": "Clouds",
					"description": "overcast clouds",
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 87
			},
			"wind": {
				"speed": 3.05,
				"deg": 247,
				"gust": 7.85
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-15 12:00:00"
		}
	],
	"city": {
		"id": 756135,
		"name": "Warsaw",
		"coord": {
			"lat": 52.22,
			"lon": 21.01
		},
		"country": "PL",
		"population": 1000000,
		"timezone": 3600,
		"sunrise": 1668059240,
		"sunset": 1668091948
	}
}
`;

let tempCurrent = `
{
	"coord": {
	  "lon": 21.01,
	  "lat": 52.22
	},
	"weather": [
	  {
		"id": 803,
		"main": "Clouds",
		"description": "broken clouds",
		"icon": "04d"
	  }
	],
	"base": "stations",
	"main": {
	  "temp": 11.46,
	  "feels_like": 11.04,
	  "temp_min": 10.87,
	  "temp_max": 12.52,
	  "pressure": 1017,
	  "humidity": 91
	},
	"visibility": 10000,
	"wind": {
	  "speed": 5.14,
	  "deg": 260
	},
	"clouds": {
	  "all": 75
	},
	"dt": 1668082019,
	"sys": {
	  "type": 2,
	  "id": 2035775,
	  "country": "PL",
	  "sunrise": 1668059240,
	  "sunset": 1668091948
	},
	"timezone": 3600,
	"id": 756135,
	"name": "Warsaw",
	"cod": 200
  }
`;

export {tempCurrent, tempForecast}; 
