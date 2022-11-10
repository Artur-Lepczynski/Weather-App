let tempForecast = `
{
	"cod": "200",
	"message": 0,
	"cnt": 40,
	"list": [
		{
			"dt": 1668114000,
			"main": {
				"temp": 8.5,
				"feels_like": 6.58,
				"temp_min": 8.5,
				"temp_max": 8.58,
				"pressure": 1024,
				"sea_level": 1024,
				"grnd_level": 1013,
				"humidity": 87,
				"temp_kf": -0.08
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
				"speed": 3.21,
				"deg": 265,
				"gust": 9.54
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
				"temp": 7.99,
				"feels_like": 6.04,
				"temp_min": 7.75,
				"temp_max": 7.99,
				"pressure": 1026,
				"sea_level": 1026,
				"grnd_level": 1014,
				"humidity": 90,
				"temp_kf": 0.24
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
				"all": 29
			},
			"wind": {
				"speed": 3.09,
				"deg": 254,
				"gust": 8.36
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
				"temp": 7.97,
				"feels_like": 5.89,
				"temp_min": 7.97,
				"temp_max": 7.97,
				"pressure": 1028,
				"sea_level": 1028,
				"grnd_level": 1014,
				"humidity": 87,
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
				"all": 72
			},
			"wind": {
				"speed": 3.29,
				"deg": 244,
				"gust": 9.15
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
				"temp": 7.57,
				"feels_like": 5.26,
				"temp_min": 7.57,
				"temp_max": 7.57,
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
				"all": 86
			},
			"wind": {
				"speed": 3.55,
				"deg": 242,
				"gust": 9.51
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
				"temp": 9.83,
				"feels_like": 7.67,
				"temp_min": 9.83,
				"temp_max": 9.83,
				"pressure": 1029,
				"sea_level": 1029,
				"grnd_level": 1015,
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
				"all": 98
			},
			"wind": {
				"speed": 4.27,
				"deg": 251,
				"gust": 10.41
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
				"temp": 11.67,
				"feels_like": 10.59,
				"temp_min": 11.67,
				"temp_max": 11.67,
				"pressure": 1028,
				"sea_level": 1028,
				"grnd_level": 1014,
				"humidity": 65,
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
				"speed": 4.89,
				"deg": 257,
				"gust": 10.77
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
				"temp": 11.06,
				"feels_like": 9.94,
				"temp_min": 11.06,
				"temp_max": 11.06,
				"pressure": 1029,
				"sea_level": 1029,
				"grnd_level": 1014,
				"humidity": 66,
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
				"speed": 4.56,
				"deg": 265,
				"gust": 11.19
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
				"temp": 10,
				"feels_like": 7.98,
				"temp_min": 10,
				"temp_max": 10,
				"pressure": 1029,
				"sea_level": 1029,
				"grnd_level": 1015,
				"humidity": 72,
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
				"speed": 4.04,
				"deg": 274,
				"gust": 11.1
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
				"temp": 8.9,
				"feels_like": 6.99,
				"temp_min": 8.9,
				"temp_max": 8.9,
				"pressure": 1030,
				"sea_level": 1030,
				"grnd_level": 1015,
				"humidity": 76,
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
				"speed": 3.34,
				"deg": 276,
				"gust": 9.86
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
				"temp": 7.87,
				"feels_like": 6.16,
				"temp_min": 7.87,
				"temp_max": 7.87,
				"pressure": 1030,
				"sea_level": 1030,
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
				"all": 98
			},
			"wind": {
				"speed": 2.69,
				"deg": 272,
				"gust": 7.24
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
				"temp": 7.19,
				"feels_like": 5.47,
				"temp_min": 7.19,
				"temp_max": 7.19,
				"pressure": 1030,
				"sea_level": 1030,
				"grnd_level": 1016,
				"humidity": 84,
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
				"all": 73
			},
			"wind": {
				"speed": 2.53,
				"deg": 273,
				"gust": 7.1
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
				"temp": 6.66,
				"feels_like": 4.83,
				"temp_min": 6.66,
				"temp_max": 6.66,
				"pressure": 1031,
				"sea_level": 1031,
				"grnd_level": 1016,
				"humidity": 86,
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
				"all": 78
			},
			"wind": {
				"speed": 2.55,
				"deg": 274,
				"gust": 7.31
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
				"temp": 9.28,
				"feels_like": 7.75,
				"temp_min": 9.28,
				"temp_max": 9.28,
				"pressure": 1032,
				"sea_level": 1032,
				"grnd_level": 1017,
				"humidity": 73,
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
				"speed": 2.83,
				"deg": 280,
				"gust": 5.2
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
				"temp": 11.72,
				"feels_like": 10.67,
				"temp_min": 11.72,
				"temp_max": 11.72,
				"pressure": 1031,
				"sea_level": 1031,
				"grnd_level": 1017,
				"humidity": 66,
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
				"speed": 3.31,
				"deg": 294,
				"gust": 5.09
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
				"temp": 9.97,
				"feels_like": 9.1,
				"temp_min": 9.97,
				"temp_max": 9.97,
				"pressure": 1032,
				"sea_level": 1032,
				"grnd_level": 1017,
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
				"all": 29
			},
			"wind": {
				"speed": 2.07,
				"deg": 301,
				"gust": 4.08
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
				"temp": 8.51,
				"feels_like": 7.72,
				"temp_min": 8.51,
				"temp_max": 8.51,
				"pressure": 1032,
				"sea_level": 1032,
				"grnd_level": 1018,
				"humidity": 85,
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
				"all": 24
			},
			"wind": {
				"speed": 1.72,
				"deg": 297,
				"gust": 2.31
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
				"temp": 7.74,
				"feels_like": 7.74,
				"temp_min": 7.74,
				"temp_max": 7.74,
				"pressure": 1033,
				"sea_level": 1033,
				"grnd_level": 1018,
				"humidity": 91,
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
				"all": 73
			},
			"wind": {
				"speed": 1.26,
				"deg": 307,
				"gust": 1.28
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
				"temp": 7.41,
				"feels_like": 7.41,
				"temp_min": 7.41,
				"temp_max": 7.41,
				"pressure": 1033,
				"sea_level": 1033,
				"grnd_level": 1018,
				"humidity": 93,
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
				"all": 59
			},
			"wind": {
				"speed": 0.83,
				"deg": 247,
				"gust": 0.81
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
				"temp": 7.96,
				"feels_like": 7.96,
				"temp_min": 7.96,
				"temp_max": 7.96,
				"pressure": 1032,
				"sea_level": 1032,
				"grnd_level": 1017,
				"humidity": 90,
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
				"all": 76
			},
			"wind": {
				"speed": 1.13,
				"deg": 205,
				"gust": 1.12
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
				"temp": 8.01,
				"feels_like": 7.52,
				"temp_min": 8.01,
				"temp_max": 8.01,
				"pressure": 1031,
				"sea_level": 1031,
				"grnd_level": 1016,
				"humidity": 88,
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
				"all": 83
			},
			"wind": {
				"speed": 1.38,
				"deg": 198,
				"gust": 1.85
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
				"temp": 9.42,
				"feels_like": 9.42,
				"temp_min": 9.42,
				"temp_max": 9.42,
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
					"icon": "04d"
				}
			],
			"clouds": {
				"all": 91
			},
			"wind": {
				"speed": 0.92,
				"deg": 172,
				"gust": 1.04
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
				"temp": 11.26,
				"feels_like": 10.35,
				"temp_min": 11.26,
				"temp_max": 11.26,
				"pressure": 1029,
				"sea_level": 1029,
				"grnd_level": 1015,
				"humidity": 73,
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
				"all": 79
			},
			"wind": {
				"speed": 0.75,
				"deg": 159,
				"gust": 0.77
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
				"temp": 9.79,
				"feels_like": 9.79,
				"temp_min": 9.79,
				"temp_max": 9.79,
				"pressure": 1029,
				"sea_level": 1029,
				"grnd_level": 1014,
				"humidity": 82,
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
				"all": 25
			},
			"wind": {
				"speed": 1,
				"deg": 140,
				"gust": 0.98
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
				"temp": 8.59,
				"feels_like": 8,
				"temp_min": 8.59,
				"temp_max": 8.59,
				"pressure": 1028,
				"sea_level": 1028,
				"grnd_level": 1014,
				"humidity": 88,
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
				"all": 41
			},
			"wind": {
				"speed": 1.54,
				"deg": 127,
				"gust": 1.52
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
				"temp": 7.61,
				"feels_like": 6.52,
				"temp_min": 7.61,
				"temp_max": 7.61,
				"pressure": 1028,
				"sea_level": 1028,
				"grnd_level": 1014,
				"humidity": 90,
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
				"all": 15
			},
			"wind": {
				"speed": 1.88,
				"deg": 118,
				"gust": 2.7
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
				"temp": 6.83,
				"feels_like": 5.47,
				"temp_min": 6.83,
				"temp_max": 6.83,
				"pressure": 1028,
				"sea_level": 1028,
				"grnd_level": 1013,
				"humidity": 91,
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
				"all": 16
			},
			"wind": {
				"speed": 2.03,
				"deg": 117,
				"gust": 3.66
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
				"temp": 6.3,
				"feels_like": 4.63,
				"temp_min": 6.3,
				"temp_max": 6.3,
				"pressure": 1026,
				"sea_level": 1026,
				"grnd_level": 1012,
				"humidity": 91,
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
				"speed": 2.27,
				"deg": 113,
				"gust": 5.35
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
				"temp": 5.86,
				"feels_like": 3.88,
				"temp_min": 5.86,
				"temp_max": 5.86,
				"pressure": 1026,
				"sea_level": 1026,
				"grnd_level": 1012,
				"humidity": 91,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 802,
					"main": "Clouds",
					"description": "scattered clouds",
					"icon": "03d"
				}
			],
			"clouds": {
				"all": 43
			},
			"wind": {
				"speed": 2.55,
				"deg": 119,
				"gust": 7.11
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
				"temp": 8.56,
				"feels_like": 6.44,
				"temp_min": 8.56,
				"temp_max": 8.56,
				"pressure": 1026,
				"sea_level": 1026,
				"grnd_level": 1012,
				"humidity": 78,
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
				"all": 74
			},
			"wind": {
				"speed": 3.6,
				"deg": 122,
				"gust": 7.46
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
				"temp": 11.29,
				"feels_like": 10.17,
				"temp_min": 11.29,
				"temp_max": 11.29,
				"pressure": 1025,
				"sea_level": 1025,
				"grnd_level": 1010,
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
				"all": 51
			},
			"wind": {
				"speed": 3.69,
				"deg": 128,
				"gust": 6.45
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
				"temp": 9.49,
				"feels_like": 7.78,
				"temp_min": 9.49,
				"temp_max": 9.49,
				"pressure": 1024,
				"sea_level": 1024,
				"grnd_level": 1010,
				"humidity": 75,
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
				"all": 9
			},
			"wind": {
				"speed": 3.21,
				"deg": 115,
				"gust": 7.86
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
				"temp": 7.95,
				"feels_like": 5.82,
				"temp_min": 7.95,
				"temp_max": 7.95,
				"pressure": 1024,
				"sea_level": 1024,
				"grnd_level": 1009,
				"humidity": 83,
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
				"all": 8
			},
			"wind": {
				"speed": 3.37,
				"deg": 126,
				"gust": 9.34
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
				"temp": 7.04,
				"feels_like": 4.98,
				"temp_min": 7.04,
				"temp_max": 7.04,
				"pressure": 1023,
				"sea_level": 1023,
				"grnd_level": 1009,
				"humidity": 86,
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
				"all": 4
			},
			"wind": {
				"speed": 2.96,
				"deg": 136,
				"gust": 8.49
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
				"temp": 6.2,
				"feels_like": 4.32,
				"temp_min": 6.2,
				"temp_max": 6.2,
				"pressure": 1022,
				"sea_level": 1022,
				"grnd_level": 1007,
				"humidity": 88,
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
				"all": 4
			},
			"wind": {
				"speed": 2.5,
				"deg": 141,
				"gust": 6.96
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
				"temp": 5.56,
				"feels_like": 3.71,
				"temp_min": 5.56,
				"temp_max": 5.56,
				"pressure": 1021,
				"sea_level": 1021,
				"grnd_level": 1006,
				"humidity": 89,
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
				"all": 13
			},
			"wind": {
				"speed": 2.33,
				"deg": 148,
				"gust": 5.51
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
				"temp": 5.1,
				"feels_like": 3.26,
				"temp_min": 5.1,
				"temp_max": 5.1,
				"pressure": 1020,
				"sea_level": 1020,
				"grnd_level": 1005,
				"humidity": 89,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 802,
					"main": "Clouds",
					"description": "scattered clouds",
					"icon": "03d"
				}
			],
			"clouds": {
				"all": 37
			},
			"wind": {
				"speed": 2.23,
				"deg": 154,
				"gust": 4.88
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
				"temp": 7.83,
				"feels_like": 6.52,
				"temp_min": 7.83,
				"temp_max": 7.83,
				"pressure": 1019,
				"sea_level": 1019,
				"grnd_level": 1005,
				"humidity": 73,
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
				"all": 80
			},
			"wind": {
				"speed": 2.16,
				"deg": 172,
				"gust": 3.27
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
				"temp": 10.43,
				"feels_like": 9.1,
				"temp_min": 10.43,
				"temp_max": 10.43,
				"pressure": 1017,
				"sea_level": 1017,
				"grnd_level": 1002,
				"humidity": 60,
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
				"all": 84
			},
			"wind": {
				"speed": 2.16,
				"deg": 169,
				"gust": 3.09
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-15 12:00:00"
		},
		{
			"dt": 1668524400,
			"main": {
				"temp": 9.17,
				"feels_like": 7.88,
				"temp_min": 9.17,
				"temp_max": 9.17,
				"pressure": 1015,
				"sea_level": 1015,
				"grnd_level": 1001,
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
				"all": 91
			},
			"wind": {
				"speed": 2.44,
				"deg": 162,
				"gust": 4.98
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-15 15:00:00"
		},
		{
			"dt": 1668535200,
			"main": {
				"temp": 8.1,
				"feels_like": 6.69,
				"temp_min": 8.1,
				"temp_max": 8.1,
				"pressure": 1014,
				"sea_level": 1014,
				"grnd_level": 1000,
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
				"all": 90
			},
			"wind": {
				"speed": 2.35,
				"deg": 176,
				"gust": 4.65
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-15 18:00:00"
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
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01n"
		}
	],
	"base": "stations",
	"main": {
		"temp": 8.46,
		"feels_like": 6.32,
		"temp_min": 7.19,
		"temp_max": 9.87,
		"pressure": 1022,
		"humidity": 91
	},
	"visibility": 10000,
	"wind": {
		"speed": 3.6,
		"deg": 260
	},
	"clouds": {
		"all": 0
	},
	"dt": 1668106983,
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
