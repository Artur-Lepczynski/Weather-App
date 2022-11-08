let tempForecast = `
{
	"cod": "200",
	"message": 0,
	"cnt": 40,
	"list": [
		{
			"dt": 1667930400,
			"main": {
				"temp": 11.02,
				"feels_like": 10.21,
				"temp_min": 10.03,
				"temp_max": 11.02,
				"pressure": 1014,
				"sea_level": 1014,
				"grnd_level": 1003,
				"humidity": 78,
				"temp_kf": 0.99
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
				"speed": 2.89,
				"deg": 195,
				"gust": 7.9
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-08 18:00:00"
		},
		{
			"dt": 1667941200,
			"main": {
				"temp": 10.13,
				"feels_like": 9.21,
				"temp_min": 9.44,
				"temp_max": 10.13,
				"pressure": 1016,
				"sea_level": 1016,
				"grnd_level": 1003,
				"humidity": 77,
				"temp_kf": 0.69
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
				"all": 54
			},
			"wind": {
				"speed": 3.29,
				"deg": 194,
				"gust": 10.37
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-08 21:00:00"
		},
		{
			"dt": 1667952000,
			"main": {
				"temp": 8.85,
				"feels_like": 6.69,
				"temp_min": 8.85,
				"temp_max": 8.85,
				"pressure": 1017,
				"sea_level": 1017,
				"grnd_level": 1003,
				"humidity": 78,
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
				"all": 80
			},
			"wind": {
				"speed": 3.79,
				"deg": 192,
				"gust": 10.71
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-09 00:00:00"
		},
		{
			"dt": 1667962800,
			"main": {
				"temp": 8.33,
				"feels_like": 6.02,
				"temp_min": 8.33,
				"temp_max": 8.33,
				"pressure": 1016,
				"sea_level": 1016,
				"grnd_level": 1002,
				"humidity": 80,
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
				"all": 78
			},
			"wind": {
				"speed": 3.87,
				"deg": 197,
				"gust": 11.7
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-09 03:00:00"
		},
		{
			"dt": 1667973600,
			"main": {
				"temp": 8.41,
				"feels_like": 6.08,
				"temp_min": 8.41,
				"temp_max": 8.41,
				"pressure": 1016,
				"sea_level": 1016,
				"grnd_level": 1002,
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
				"all": 89
			},
			"wind": {
				"speed": 3.94,
				"deg": 194,
				"gust": 12.71
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-09 06:00:00"
		},
		{
			"dt": 1667984400,
			"main": {
				"temp": 10.99,
				"feels_like": 9.87,
				"temp_min": 10.99,
				"temp_max": 10.99,
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
				"speed": 4.26,
				"deg": 204,
				"gust": 10.32
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-09 09:00:00"
		},
		{
			"dt": 1667995200,
			"main": {
				"temp": 12.84,
				"feels_like": 11.77,
				"temp_min": 12.84,
				"temp_max": 12.84,
				"pressure": 1016,
				"sea_level": 1016,
				"grnd_level": 1002,
				"humidity": 61,
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
				"speed": 3.76,
				"deg": 209,
				"gust": 8.38
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-09 12:00:00"
		},
		{
			"dt": 1668006000,
			"main": {
				"temp": 11.86,
				"feels_like": 10.85,
				"temp_min": 11.86,
				"temp_max": 11.86,
				"pressure": 1016,
				"sea_level": 1016,
				"grnd_level": 1002,
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
				"speed": 3.48,
				"deg": 193,
				"gust": 9.02
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-09 15:00:00"
		},
		{
			"dt": 1668016800,
			"main": {
				"temp": 10.23,
				"feels_like": 9.24,
				"temp_min": 10.23,
				"temp_max": 10.23,
				"pressure": 1017,
				"sea_level": 1017,
				"grnd_level": 1002,
				"humidity": 74,
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
				"speed": 3.23,
				"deg": 205,
				"gust": 9.22
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-09 18:00:00"
		},
		{
			"dt": 1668027600,
			"main": {
				"temp": 9.24,
				"feels_like": 7.58,
				"temp_min": 9.24,
				"temp_max": 9.24,
				"pressure": 1017,
				"sea_level": 1017,
				"grnd_level": 1003,
				"humidity": 79,
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
				"speed": 3.03,
				"deg": 215,
				"gust": 8.22
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-09 21:00:00"
		},
		{
			"dt": 1668038400,
			"main": {
				"temp": 8.37,
				"feels_like": 7.09,
				"temp_min": 8.37,
				"temp_max": 8.37,
				"pressure": 1017,
				"sea_level": 1017,
				"grnd_level": 1003,
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
				"speed": 2.24,
				"deg": 210,
				"gust": 4.55
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-10 00:00:00"
		},
		{
			"dt": 1668049200,
			"main": {
				"temp": 8.47,
				"feels_like": 7.2,
				"temp_min": 8.47,
				"temp_max": 8.47,
				"pressure": 1017,
				"sea_level": 1017,
				"grnd_level": 1003,
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
				"all": 100
			},
			"wind": {
				"speed": 2.25,
				"deg": 232,
				"gust": 5.45
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-10 03:00:00"
		},
		{
			"dt": 1668060000,
			"main": {
				"temp": 9.03,
				"feels_like": 7.99,
				"temp_min": 9.03,
				"temp_max": 9.03,
				"pressure": 1018,
				"sea_level": 1018,
				"grnd_level": 1004,
				"humidity": 90,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 500,
					"main": "Rain",
					"description": "light rain",
					"icon": "10d"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 2.09,
				"deg": 224,
				"gust": 6.14
			},
			"visibility": 10000,
			"pop": 0.47,
			"rain": {
				"3h": 0.8
			},
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-10 06:00:00"
		},
		{
			"dt": 1668070800,
			"main": {
				"temp": 10.71,
				"feels_like": 9.93,
				"temp_min": 10.71,
				"temp_max": 10.71,
				"pressure": 1020,
				"sea_level": 1020,
				"grnd_level": 1006,
				"humidity": 80,
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
				"speed": 3.28,
				"deg": 253,
				"gust": 8.15
			},
			"visibility": 10000,
			"pop": 0.18,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-10 09:00:00"
		},
		{
			"dt": 1668081600,
			"main": {
				"temp": 12.26,
				"feels_like": 11.5,
				"temp_min": 12.26,
				"temp_max": 12.26,
				"pressure": 1021,
				"sea_level": 1021,
				"grnd_level": 1007,
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
				"speed": 4.11,
				"deg": 273,
				"gust": 7.61
			},
			"visibility": 10000,
			"pop": 0.13,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-10 12:00:00"
		},
		{
			"dt": 1668092400,
			"main": {
				"temp": 11.5,
				"feels_like": 10.51,
				"temp_min": 11.5,
				"temp_max": 11.5,
				"pressure": 1023,
				"sea_level": 1023,
				"grnd_level": 1009,
				"humidity": 69,
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
				"speed": 5.73,
				"deg": 288,
				"gust": 9.06
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-10 15:00:00"
		},
		{
			"dt": 1668103200,
			"main": {
				"temp": 10.75,
				"feels_like": 9.68,
				"temp_min": 10.75,
				"temp_max": 10.75,
				"pressure": 1025,
				"sea_level": 1025,
				"grnd_level": 1011,
				"humidity": 69,
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
				"speed": 4.51,
				"deg": 277,
				"gust": 9.95
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
				"temp": 10.47,
				"feels_like": 9.53,
				"temp_min": 10.47,
				"temp_max": 10.47,
				"pressure": 1026,
				"sea_level": 1026,
				"grnd_level": 1012,
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
				"speed": 4.39,
				"deg": 290,
				"gust": 9.63
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
				"temp": 8.45,
				"feels_like": 6.41,
				"temp_min": 8.45,
				"temp_max": 8.45,
				"pressure": 1028,
				"sea_level": 1028,
				"grnd_level": 1013,
				"humidity": 86,
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
				"speed": 3.41,
				"deg": 277,
				"gust": 9.29
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
				"temp": 7.44,
				"feels_like": 5.52,
				"temp_min": 7.44,
				"temp_max": 7.44,
				"pressure": 1029,
				"sea_level": 1029,
				"grnd_level": 1014,
				"humidity": 91,
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
				"all": 88
			},
			"wind": {
				"speed": 2.87,
				"deg": 274,
				"gust": 7.63
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
				"temp": 7.64,
				"feels_like": 5.92,
				"temp_min": 7.64,
				"temp_max": 7.64,
				"pressure": 1030,
				"sea_level": 1030,
				"grnd_level": 1015,
				"humidity": 92,
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
				"speed": 2.64,
				"deg": 264,
				"gust": 6.79
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
				"temp": 9.48,
				"feels_like": 7.7,
				"temp_min": 9.48,
				"temp_max": 9.48,
				"pressure": 1031,
				"sea_level": 1031,
				"grnd_level": 1016,
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
				"all": 100
			},
			"wind": {
				"speed": 3.33,
				"deg": 268,
				"gust": 7.05
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
				"temp": 11.69,
				"feels_like": 10.74,
				"temp_min": 11.69,
				"temp_max": 11.69,
				"pressure": 1031,
				"sea_level": 1031,
				"grnd_level": 1016,
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
				"all": 98
			},
			"wind": {
				"speed": 3.73,
				"deg": 272,
				"gust": 6.13
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
				"temp": 10.51,
				"feels_like": 9.65,
				"temp_min": 10.51,
				"temp_max": 10.51,
				"pressure": 1031,
				"sea_level": 1031,
				"grnd_level": 1016,
				"humidity": 78,
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
				"all": 75
			},
			"wind": {
				"speed": 3.23,
				"deg": 260,
				"gust": 7.57
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
				"temp": 9.86,
				"feels_like": 8.39,
				"temp_min": 9.86,
				"temp_max": 9.86,
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
					"icon": "04n"
				}
			],
			"clouds": {
				"all": 88
			},
			"wind": {
				"speed": 2.92,
				"deg": 263,
				"gust": 8.02
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
				"temp": 9.23,
				"feels_like": 7.74,
				"temp_min": 9.23,
				"temp_max": 9.23,
				"pressure": 1032,
				"sea_level": 1032,
				"grnd_level": 1018,
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
				"all": 100
			},
			"wind": {
				"speed": 2.76,
				"deg": 257,
				"gust": 7.34
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
				"temp": 8.78,
				"feels_like": 7.15,
				"temp_min": 8.78,
				"temp_max": 8.78,
				"pressure": 1032,
				"sea_level": 1032,
				"grnd_level": 1017,
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
				"all": 100
			},
			"wind": {
				"speed": 2.83,
				"deg": 266,
				"gust": 7.48
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
				"temp": 8.83,
				"feels_like": 7.31,
				"temp_min": 8.83,
				"temp_max": 8.83,
				"pressure": 1032,
				"sea_level": 1032,
				"grnd_level": 1017,
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
				"all": 100
			},
			"wind": {
				"speed": 2.68,
				"deg": 273,
				"gust": 7.47
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
				"temp": 8.06,
				"feels_like": 6.58,
				"temp_min": 8.06,
				"temp_max": 8.06,
				"pressure": 1032,
				"sea_level": 1032,
				"grnd_level": 1018,
				"humidity": 85,
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
				"speed": 2.43,
				"deg": 274,
				"gust": 6.14
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
				"temp": 10.25,
				"feels_like": 9.24,
				"temp_min": 10.25,
				"temp_max": 10.25,
				"pressure": 1033,
				"sea_level": 1033,
				"grnd_level": 1018,
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
				"all": 100
			},
			"wind": {
				"speed": 2.85,
				"deg": 284,
				"gust": 4.72
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
				"temp": 12.84,
				"feels_like": 11.88,
				"temp_min": 12.84,
				"temp_max": 12.84,
				"pressure": 1032,
				"sea_level": 1032,
				"grnd_level": 1018,
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
				"all": 93
			},
			"wind": {
				"speed": 2.77,
				"deg": 284,
				"gust": 4.04
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
				"temp": 11.49,
				"feels_like": 10.55,
				"temp_min": 11.49,
				"temp_max": 11.49,
				"pressure": 1033,
				"sea_level": 1033,
				"grnd_level": 1018,
				"humidity": 71,
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
				"speed": 2.15,
				"deg": 277,
				"gust": 4.22
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
				"temp": 9.86,
				"feels_like": 8.86,
				"temp_min": 9.86,
				"temp_max": 9.86,
				"pressure": 1033,
				"sea_level": 1033,
				"grnd_level": 1019,
				"humidity": 79,
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
				"all": 22
			},
			"wind": {
				"speed": 2.22,
				"deg": 305,
				"gust": 4.81
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
				"temp": 8.71,
				"feels_like": 7.84,
				"temp_min": 8.71,
				"temp_max": 8.71,
				"pressure": 1034,
				"sea_level": 1034,
				"grnd_level": 1019,
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
				"all": 11
			},
			"wind": {
				"speed": 1.83,
				"deg": 318,
				"gust": 2.74
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
				"temp": 7.79,
				"feels_like": 6.99,
				"temp_min": 7.79,
				"temp_max": 7.79,
				"pressure": 1034,
				"sea_level": 1034,
				"grnd_level": 1019,
				"humidity": 92,
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
				"all": 21
			},
			"wind": {
				"speed": 1.62,
				"deg": 356,
				"gust": 2.27
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
				"temp": 7,
				"feels_like": 6.09,
				"temp_min": 7,
				"temp_max": 7,
				"pressure": 1034,
				"sea_level": 1034,
				"grnd_level": 1019,
				"humidity": 96,
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
				"all": 67
			},
			"wind": {
				"speed": 1.62,
				"deg": 29,
				"gust": 2.74
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
				"temp": 7.17,
				"feels_like": 6.36,
				"temp_min": 7.17,
				"temp_max": 7.17,
				"pressure": 1034,
				"sea_level": 1034,
				"grnd_level": 1019,
				"humidity": 94,
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
				"all": 70
			},
			"wind": {
				"speed": 1.55,
				"deg": 78,
				"gust": 2.88
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
				"temp": 9.26,
				"feels_like": 8.47,
				"temp_min": 9.26,
				"temp_max": 9.26,
				"pressure": 1034,
				"sea_level": 1034,
				"grnd_level": 1020,
				"humidity": 82,
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
				"all": 95
			},
			"wind": {
				"speed": 1.84,
				"deg": 96,
				"gust": 4.23
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
				"temp": 10.75,
				"feels_like": 9.76,
				"temp_min": 10.75,
				"temp_max": 10.75,
				"pressure": 1033,
				"sea_level": 1033,
				"grnd_level": 1019,
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
				"all": 97
			},
			"wind": {
				"speed": 2.64,
				"deg": 106,
				"gust": 3.55
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
				"temp": 9.4,
				"feels_like": 8.79,
				"temp_min": 9.4,
				"temp_max": 9.4,
				"pressure": 1032,
				"sea_level": 1032,
				"grnd_level": 1018,
				"humidity": 79,
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
				"all": 82
			},
			"wind": {
				"speed": 1.67,
				"deg": 132,
				"gust": 2.59
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-13 15:00:00"
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
		"sunrise": 1667886222,
		"sunset": 1667919343
	}
}
`;

let tempCurrent = `{
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
		"temp": 10.91,
		"feels_like": 10.38,
		"temp_min": 8.87,
		"temp_max": 12.65,
		"pressure": 1015,
		"humidity": 89
	},
	"visibility": 7000,
	"wind": {
		"speed": 1.03,
		"deg": 220
	},
	"clouds": {
		"all": 6
	},
	"dt": 1667406069,
	"sys": {
		"type": 2,
		"id": 2032856,
		"country": "PL",
		"sunrise": 1667367164,
		"sunset": 1667401573
	},
	"timezone": 3600,
	"id": 756135,
	"name": "Warsaw",
	"cod": 200
}`;

export {tempCurrent, tempForecast}; 
