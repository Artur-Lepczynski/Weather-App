let tempForecast = `{
	"cod": "200",
	"message": 0,
	"cnt": 40,
	"list": [
		{
			"dt": 1667412000,
			"main": {
				"temp": 10.45,
				"feels_like": 9.95,
				"temp_min": 10.45,
				"temp_max": 11.73,
				"pressure": 1016,
				"sea_level": 1016,
				"grnd_level": 1005,
				"humidity": 92,
				"temp_kf": -1.28
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
				"speed": 3.38,
				"deg": 259,
				"gust": 10
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-02 18:00:00"
		},
		{
			"dt": 1667422800,
			"main": {
				"temp": 10.94,
				"feels_like": 10.28,
				"temp_min": 10.94,
				"temp_max": 11.93,
				"pressure": 1017,
				"sea_level": 1017,
				"grnd_level": 1006,
				"humidity": 84,
				"temp_kf": -0.99
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
				"all": 22
			},
			"wind": {
				"speed": 3.89,
				"deg": 270,
				"gust": 9.8
			},
			"visibility": 10000,
			"pop": 0.31,
			"rain": {
				"3h": 0.13
			},
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-02 21:00:00"
		},
		{
			"dt": 1667433600,
			"main": {
				"temp": 10.16,
				"feels_like": 9.37,
				"temp_min": 10.02,
				"temp_max": 10.16,
				"pressure": 1019,
				"sea_level": 1019,
				"grnd_level": 1006,
				"humidity": 82,
				"temp_kf": 0.14
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
				"speed": 4.06,
				"deg": 273,
				"gust": 10.16
			},
			"visibility": 10000,
			"pop": 0.08,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-03 00:00:00"
		},
		{
			"dt": 1667444400,
			"main": {
				"temp": 8.66,
				"feels_like": 6.59,
				"temp_min": 8.66,
				"temp_max": 8.66,
				"pressure": 1021,
				"sea_level": 1021,
				"grnd_level": 1007,
				"humidity": 78,
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
				"all": 1
			},
			"wind": {
				"speed": 3.55,
				"deg": 276,
				"gust": 9.94
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-03 03:00:00"
		},
		{
			"dt": 1667455200,
			"main": {
				"temp": 7.75,
				"feels_like": 5.71,
				"temp_min": 7.75,
				"temp_max": 7.75,
				"pressure": 1022,
				"sea_level": 1022,
				"grnd_level": 1007,
				"humidity": 79,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01d"
				}
			],
			"clouds": {
				"all": 2
			},
			"wind": {
				"speed": 3.15,
				"deg": 270,
				"gust": 8.02
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-03 06:00:00"
		},
		{
			"dt": 1667466000,
			"main": {
				"temp": 10.45,
				"feels_like": 9.22,
				"temp_min": 10.45,
				"temp_max": 10.45,
				"pressure": 1022,
				"sea_level": 1022,
				"grnd_level": 1008,
				"humidity": 64,
				"temp_kf": 0
			},
			"weather": [
				{
					"id": 800,
					"main": "Clear",
					"description": "clear sky",
					"icon": "01d"
				}
			],
			"clouds": {
				"all": 4
			},
			"wind": {
				"speed": 3.26,
				"deg": 279,
				"gust": 5.26
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-03 09:00:00"
		},
		{
			"dt": 1667476800,
			"main": {
				"temp": 11.85,
				"feels_like": 10.53,
				"temp_min": 11.85,
				"temp_max": 11.85,
				"pressure": 1021,
				"sea_level": 1021,
				"grnd_level": 1006,
				"humidity": 55,
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
				"all": 50
			},
			"wind": {
				"speed": 2.51,
				"deg": 276,
				"gust": 3.44
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-03 12:00:00"
		},
		{
			"dt": 1667487600,
			"main": {
				"temp": 10.65,
				"feels_like": 9.26,
				"temp_min": 10.65,
				"temp_max": 10.65,
				"pressure": 1019,
				"sea_level": 1019,
				"grnd_level": 1005,
				"humidity": 57,
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
				"speed": 0.72,
				"deg": 173,
				"gust": 0.75
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-03 15:00:00"
		},
		{
			"dt": 1667498400,
			"main": {
				"temp": 8.95,
				"feels_like": 7.8,
				"temp_min": 8.95,
				"temp_max": 8.95,
				"pressure": 1019,
				"sea_level": 1019,
				"grnd_level": 1004,
				"humidity": 64,
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
				"speed": 2.21,
				"deg": 130,
				"gust": 4
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-03 18:00:00"
		},
		{
			"dt": 1667509200,
			"main": {
				"temp": 7.58,
				"feels_like": 5.75,
				"temp_min": 7.58,
				"temp_max": 7.58,
				"pressure": 1017,
				"sea_level": 1017,
				"grnd_level": 1003,
				"humidity": 71,
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
				"speed": 2.78,
				"deg": 127,
				"gust": 6.79
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-03 21:00:00"
		},
		{
			"dt": 1667520000,
			"main": {
				"temp": 6.75,
				"feels_like": 4.28,
				"temp_min": 6.75,
				"temp_max": 6.75,
				"pressure": 1016,
				"sea_level": 1016,
				"grnd_level": 1002,
				"humidity": 74,
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
				"speed": 3.51,
				"deg": 120,
				"gust": 9.64
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-04 00:00:00"
		},
		{
			"dt": 1667530800,
			"main": {
				"temp": 6.51,
				"feels_like": 3.51,
				"temp_min": 6.51,
				"temp_max": 6.51,
				"pressure": 1014,
				"sea_level": 1014,
				"grnd_level": 1000,
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
				"all": 89
			},
			"wind": {
				"speed": 4.39,
				"deg": 118,
				"gust": 11.82
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-04 03:00:00"
		},
		{
			"dt": 1667541600,
			"main": {
				"temp": 6.55,
				"feels_like": 3.23,
				"temp_min": 6.55,
				"temp_max": 6.55,
				"pressure": 1013,
				"sea_level": 1013,
				"grnd_level": 999,
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
				"all": 94
			},
			"wind": {
				"speed": 5.1,
				"deg": 115,
				"gust": 13.56
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-04 06:00:00"
		},
		{
			"dt": 1667552400,
			"main": {
				"temp": 9.53,
				"feels_like": 6.7,
				"temp_min": 9.53,
				"temp_max": 9.53,
				"pressure": 1012,
				"sea_level": 1012,
				"grnd_level": 998,
				"humidity": 58,
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
				"speed": 5.84,
				"deg": 115,
				"gust": 13.76
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-04 09:00:00"
		},
		{
			"dt": 1667563200,
			"main": {
				"temp": 11.73,
				"feels_like": 10.32,
				"temp_min": 11.73,
				"temp_max": 11.73,
				"pressure": 1011,
				"sea_level": 1011,
				"grnd_level": 997,
				"humidity": 52,
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
				"speed": 6.25,
				"deg": 112,
				"gust": 12.48
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-04 12:00:00"
		},
		{
			"dt": 1667574000,
			"main": {
				"temp": 10.61,
				"feels_like": 9.21,
				"temp_min": 10.61,
				"temp_max": 10.61,
				"pressure": 1011,
				"sea_level": 1011,
				"grnd_level": 996,
				"humidity": 57,
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
				"speed": 5.95,
				"deg": 115,
				"gust": 12.72
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-04 15:00:00"
		},
		{
			"dt": 1667584800,
			"main": {
				"temp": 9.55,
				"feels_like": 6.94,
				"temp_min": 9.55,
				"temp_max": 9.55,
				"pressure": 1011,
				"sea_level": 1011,
				"grnd_level": 997,
				"humidity": 62,
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
				"all": 96
			},
			"wind": {
				"speed": 5.22,
				"deg": 121,
				"gust": 12.51
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-04 18:00:00"
		},
		{
			"dt": 1667595600,
			"main": {
				"temp": 9.5,
				"feels_like": 6.98,
				"temp_min": 9.5,
				"temp_max": 9.5,
				"pressure": 1011,
				"sea_level": 1011,
				"grnd_level": 997,
				"humidity": 65,
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
				"speed": 4.97,
				"deg": 116,
				"gust": 11.93
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-04 21:00:00"
		},
		{
			"dt": 1667606400,
			"main": {
				"temp": 8.94,
				"feels_like": 6.23,
				"temp_min": 8.94,
				"temp_max": 8.94,
				"pressure": 1011,
				"sea_level": 1011,
				"grnd_level": 997,
				"humidity": 68,
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
				"speed": 5.08,
				"deg": 112,
				"gust": 11.63
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-05 00:00:00"
		},
		{
			"dt": 1667617200,
			"main": {
				"temp": 9.12,
				"feels_like": 6.65,
				"temp_min": 9.12,
				"temp_max": 9.12,
				"pressure": 1011,
				"sea_level": 1011,
				"grnd_level": 997,
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
				"speed": 4.61,
				"deg": 122,
				"gust": 10.42
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-05 03:00:00"
		},
		{
			"dt": 1667628000,
			"main": {
				"temp": 8.81,
				"feels_like": 6.51,
				"temp_min": 8.81,
				"temp_max": 8.81,
				"pressure": 1013,
				"sea_level": 1013,
				"grnd_level": 998,
				"humidity": 73,
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
				"speed": 4.07,
				"deg": 126,
				"gust": 9.25
			},
			"visibility": 10000,
			"pop": 0.2,
			"rain": {
				"3h": 0.11
			},
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-05 06:00:00"
		},
		{
			"dt": 1667638800,
			"main": {
				"temp": 9.16,
				"feels_like": 7.43,
				"temp_min": 9.16,
				"temp_max": 9.16,
				"pressure": 1014,
				"sea_level": 1014,
				"grnd_level": 1000,
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
				"speed": 3.12,
				"deg": 133,
				"gust": 6.93
			},
			"visibility": 10000,
			"pop": 0.09,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-05 09:00:00"
		},
		{
			"dt": 1667649600,
			"main": {
				"temp": 9.53,
				"feels_like": 8.46,
				"temp_min": 9.53,
				"temp_max": 9.53,
				"pressure": 1015,
				"sea_level": 1015,
				"grnd_level": 1001,
				"humidity": 75,
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
				"speed": 2.23,
				"deg": 144,
				"gust": 5.08
			},
			"visibility": 10000,
			"pop": 0.4,
			"rain": {
				"3h": 0.37
			},
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-05 12:00:00"
		},
		{
			"dt": 1667660400,
			"main": {
				"temp": 9.42,
				"feels_like": 8.19,
				"temp_min": 9.42,
				"temp_max": 9.42,
				"pressure": 1016,
				"sea_level": 1016,
				"grnd_level": 1002,
				"humidity": 78,
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
				"speed": 2.43,
				"deg": 131,
				"gust": 5.97
			},
			"visibility": 10000,
			"pop": 0.2,
			"rain": {
				"3h": 0.24
			},
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-05 15:00:00"
		},
		{
			"dt": 1667671200,
			"main": {
				"temp": 9.47,
				"feels_like": 8.69,
				"temp_min": 9.47,
				"temp_max": 9.47,
				"pressure": 1017,
				"sea_level": 1017,
				"grnd_level": 1003,
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
				"speed": 1.87,
				"deg": 158,
				"gust": 5.23
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-05 18:00:00"
		},
		{
			"dt": 1667682000,
			"main": {
				"temp": 9.65,
				"feels_like": 9.32,
				"temp_min": 9.65,
				"temp_max": 9.65,
				"pressure": 1018,
				"sea_level": 1018,
				"grnd_level": 1004,
				"humidity": 83,
				"temp_kf": 0
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
				"all": 100
			},
			"wind": {
				"speed": 1.43,
				"deg": 135,
				"gust": 3.23
			},
			"visibility": 10000,
			"pop": 0.32,
			"rain": {
				"3h": 0.4
			},
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-05 21:00:00"
		},
		{
			"dt": 1667692800,
			"main": {
				"temp": 9.25,
				"feels_like": 9.25,
				"temp_min": 9.25,
				"temp_max": 9.25,
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
					"icon": "10n"
				}
			],
			"clouds": {
				"all": 100
			},
			"wind": {
				"speed": 1.06,
				"deg": 172,
				"gust": 1.64
			},
			"visibility": 9663,
			"pop": 0.81,
			"rain": {
				"3h": 1.31
			},
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-06 00:00:00"
		},
		{
			"dt": 1667703600,
			"main": {
				"temp": 9.23,
				"feels_like": 9.23,
				"temp_min": 9.23,
				"temp_max": 9.23,
				"pressure": 1018,
				"sea_level": 1018,
				"grnd_level": 1004,
				"humidity": 94,
				"temp_kf": 0
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
				"all": 100
			},
			"wind": {
				"speed": 0.83,
				"deg": 276,
				"gust": 1.5
			},
			"visibility": 10000,
			"pop": 0.95,
			"rain": {
				"3h": 2.7
			},
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-06 03:00:00"
		},
		{
			"dt": 1667714400,
			"main": {
				"temp": 9.4,
				"feels_like": 9.4,
				"temp_min": 9.4,
				"temp_max": 9.4,
				"pressure": 1019,
				"sea_level": 1019,
				"grnd_level": 1004,
				"humidity": 93,
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
				"speed": 0.69,
				"deg": 333,
				"gust": 1.24
			},
			"visibility": 10000,
			"pop": 0.89,
			"rain": {
				"3h": 0.73
			},
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-06 06:00:00"
		},
		{
			"dt": 1667725200,
			"main": {
				"temp": 10.13,
				"feels_like": 9.44,
				"temp_min": 10.13,
				"temp_max": 10.13,
				"pressure": 1020,
				"sea_level": 1020,
				"grnd_level": 1005,
				"humidity": 86,
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
				"speed": 0.86,
				"deg": 239,
				"gust": 1.42
			},
			"visibility": 10000,
			"pop": 0.04,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-06 09:00:00"
		},
		{
			"dt": 1667736000,
			"main": {
				"temp": 11.69,
				"feels_like": 10.82,
				"temp_min": 11.69,
				"temp_max": 11.69,
				"pressure": 1019,
				"sea_level": 1019,
				"grnd_level": 1005,
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
				"speed": 1.7,
				"deg": 229,
				"gust": 2.56
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-06 12:00:00"
		},
		{
			"dt": 1667746800,
			"main": {
				"temp": 10.95,
				"feels_like": 9.93,
				"temp_min": 10.95,
				"temp_max": 10.95,
				"pressure": 1019,
				"sea_level": 1019,
				"grnd_level": 1005,
				"humidity": 70,
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
				"speed": 1.53,
				"deg": 198,
				"gust": 2.36
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-06 15:00:00"
		},
		{
			"dt": 1667757600,
			"main": {
				"temp": 10.38,
				"feels_like": 9.38,
				"temp_min": 10.38,
				"temp_max": 10.38,
				"pressure": 1020,
				"sea_level": 1020,
				"grnd_level": 1006,
				"humidity": 73,
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
				"speed": 1.62,
				"deg": 196,
				"gust": 2.6
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-06 18:00:00"
		},
		{
			"dt": 1667768400,
			"main": {
				"temp": 9.94,
				"feels_like": 9.53,
				"temp_min": 9.94,
				"temp_max": 9.94,
				"pressure": 1020,
				"sea_level": 1020,
				"grnd_level": 1006,
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
				"all": 100
			},
			"wind": {
				"speed": 1.55,
				"deg": 209,
				"gust": 1.93
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-06 21:00:00"
		},
		{
			"dt": 1667779200,
			"main": {
				"temp": 9,
				"feels_like": 8.4,
				"temp_min": 9,
				"temp_max": 9,
				"pressure": 1021,
				"sea_level": 1021,
				"grnd_level": 1006,
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
				"speed": 1.6,
				"deg": 215,
				"gust": 1.89
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-07 00:00:00"
		},
		{
			"dt": 1667790000,
			"main": {
				"temp": 8.33,
				"feels_like": 7.23,
				"temp_min": 8.33,
				"temp_max": 8.33,
				"pressure": 1021,
				"sea_level": 1021,
				"grnd_level": 1007,
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
				"speed": 2.02,
				"deg": 237,
				"gust": 4.16
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-07 03:00:00"
		},
		{
			"dt": 1667800800,
			"main": {
				"temp": 7.64,
				"feels_like": 6.91,
				"temp_min": 7.64,
				"temp_max": 7.64,
				"pressure": 1022,
				"sea_level": 1022,
				"grnd_level": 1007,
				"humidity": 87,
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
				"speed": 1.54,
				"deg": 264,
				"gust": 2.26
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-07 06:00:00"
		},
		{
			"dt": 1667811600,
			"main": {
				"temp": 10.09,
				"feels_like": 9.03,
				"temp_min": 10.09,
				"temp_max": 10.09,
				"pressure": 1022,
				"sea_level": 1022,
				"grnd_level": 1008,
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
				"speed": 2.2,
				"deg": 234,
				"gust": 3.88
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-07 09:00:00"
		},
		{
			"dt": 1667822400,
			"main": {
				"temp": 12.06,
				"feels_like": 10.94,
				"temp_min": 12.06,
				"temp_max": 12.06,
				"pressure": 1022,
				"sea_level": 1022,
				"grnd_level": 1007,
				"humidity": 62,
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
				"speed": 2.74,
				"deg": 242,
				"gust": 4.11
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "d"
			},
			"dt_txt": "2022-11-07 12:00:00"
		},
		{
			"dt": 1667833200,
			"main": {
				"temp": 10.67,
				"feels_like": 9.59,
				"temp_min": 10.67,
				"temp_max": 10.67,
				"pressure": 1022,
				"sea_level": 1022,
				"grnd_level": 1007,
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
				"speed": 1.88,
				"deg": 219,
				"gust": 2.82
			},
			"visibility": 10000,
			"pop": 0,
			"sys": {
				"pod": "n"
			},
			"dt_txt": "2022-11-07 15:00:00"
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
		"sunrise": 1667367164,
		"sunset": 1667401573
	}
}`;

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
