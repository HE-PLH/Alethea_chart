/*const data = [
    { time: '2018-12-19', open: 141.77, high: 170.39, low: 120.25, close: 145.72 },
    { time: '2018-12-20', open: 145.72, high: 147.99, low: 100.11, close: 108.19 },
    { time: '2018-12-21', open: 108.19, high: 118.43, low: 74.22, close: 75.16 },
    { time: '2018-12-22', open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
    { time: '2018-12-23', open: 45.12, high: 53.90, low: 45.12, close: 48.09 },
    { time: '2018-12-24', open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
    { time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.50 },
    { time: '2018-12-26', open: 67.71, high: 105.85, low: 66.67, close: 91.04 },
    { time: '2018-12-27', open: 91.04, high: 121.40, low: 82.70, close: 111.40 },
    { time: '2018-12-28', open: 111.51, high: 142.83, low: 103.34, close: 131.25 },
    { time: '2018-12-29', open: 131.33, high: 151.17, low: 77.68, close: 96.43 },
    { time: '2018-12-30', open: 106.33, high: 110.20, low: 90.39, close: 98.10 },
    { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },
];*/

export let data = [
    {
        "date": "2018-01-01",
        "open": 227.17,
        "high": 232.29,
        "low": 217.66,
        "close": 225.22,
        "volume_ltc": 246251.23,
        "volume_usd": 55290393.45
    },
    {
        "date": "2018-01-02",
        "open": 225.22,
        "high": 262,
        "low": 225.21,
        "close": 253.31,
        "volume_ltc": 661461.06,
        "volume_usd": 163478445.36
    },
    {
        "date": "2018-01-03",
        "open": 253.31,
        "high": 258.54,
        "low": 240.72,
        "close": 244.99,
        "volume_ltc": 433466.83,
        "volume_usd": 107994282.87
    },
    {
        "date": "2018-01-04",
        "open": 244.99,
        "high": 245,
        "low": 226.79,
        "close": 238.91,
        "volume_ltc": 500544.11,
        "volume_usd": 118310542.08
    },
    {
        "date": "2018-01-05",
        "open": 238.91,
        "high": 251.97,
        "low": 236.24,
        "close": 246.23,
        "volume_ltc": 472803.23,
        "volume_usd": 115912325.08
    },
    {
        "date": "2018-01-06",
        "open": 246.23,
        "high": 304,
        "low": 245,
        "close": 279.42,
        "volume_ltc": 797572.82,
        "volume_usd": 223407657.42
    },
    {
        "date": "2018-01-07",
        "open": 279.42,
        "high": 286.95,
        "low": 265.24,
        "close": 272.06,
        "volume_ltc": 355270.98,
        "volume_usd": 98900360.61
    },
    {
        "date": "2018-01-08",
        "open": 272.06,
        "high": 273.77,
        "low": 231.42,
        "close": 255.21,
        "volume_ltc": 554721.79,
        "volume_usd": 142102062.6
    },
    {
        "date": "2018-01-09",
        "open": 255.21,
        "high": 258.75,
        "low": 238.75,
        "close": 246.89,
        "volume_ltc": 391655.72,
        "volume_usd": 98394133.65
    },
    {
        "date": "2018-01-10",
        "open": 246.89,
        "high": 249.67,
        "low": 232.51,
        "close": 248.8,
        "volume_ltc": 428753.3,
        "volume_usd": 103914498.72
    },
    {
        "date": "2018-01-11",
        "open": 248.8,
        "high": 253,
        "low": 219.07,
        "close": 226.91,
        "volume_ltc": 566145,
        "volume_usd": 131824248.95
    },
    {
        "date": "2018-01-12",
        "open": 226.91,
        "high": 241.99,
        "low": 220.2,
        "close": 235.52,
        "volume_ltc": 321677.56,
        "volume_usd": 74989189.68
    },
    {
        "date": "2018-01-13",
        "open": 235.52,
        "high": 263,
        "low": 235.51,
        "close": 258,
        "volume_ltc": 360949.3,
        "volume_usd": 89409593.55
    },
    {
        "date": "2018-01-14",
        "open": 258,
        "high": 268,
        "low": 233.82,
        "close": 237.89,
        "volume_ltc": 352485.69,
        "volume_usd": 87773772.81
    },
    {
        "date": "2018-01-15",
        "open": 237.89,
        "high": 244.2,
        "low": 231.11,
        "close": 232.51,
        "volume_ltc": 208693.2,
        "volume_usd": 49681868.74
    },
    {
        "date": "2018-01-16",
        "open": 232.51,
        "high": 233.21,
        "low": 146.6,
        "close": 193.26,
        "volume_ltc": 1283937.7,
        "volume_usd": 249770265.63
    },
    {
        "date": "2018-01-17",
        "open": 193.26,
        "high": 216,
        "low": 135,
        "close": 189,
        "volume_ltc": 1605416.79,
        "volume_usd": 277465147.23
    },
    {
        "date": "2018-01-18",
        "open": 189,
        "high": 211,
        "low": 176.31,
        "close": 192.6,
        "volume_ltc": 799394.42,
        "volume_usd": 156062431.15
    },
    {
        "date": "2018-01-19",
        "open": 192.6,
        "high": 203,
        "low": 187.1,
        "close": 192.5,
        "volume_ltc": 390573.96,
        "volume_usd": 75645651.27
    },
    {
        "date": "2018-01-20",
        "open": 192.5,
        "high": 214.88,
        "low": 192.5,
        "close": 210.91,
        "volume_ltc": 353597.87,
        "volume_usd": 72401085.39
    },
    {
        "date": "2018-01-21",
        "open": 210.91,
        "high": 211.09,
        "low": 183.12,
        "close": 191.25,
        "volume_ltc": 335920.69,
        "volume_usd": 65430274.79
    },
    {
        "date": "2018-01-22",
        "open": 191.25,
        "high": 194.7,
        "low": 165.5,
        "close": 179.42,
        "volume_ltc": 440729.94,
        "volume_usd": 78563452.42
    },
    {
        "date": "2018-01-23",
        "open": 179.42,
        "high": 186.03,
        "low": 165.01,
        "close": 178.27,
        "volume_ltc": 352078.73,
        "volume_usd": 62072144.01
    },
    {
        "date": "2018-01-24",
        "open": 178.27,
        "high": 184.69,
        "low": 172.23,
        "close": 180.6,
        "volume_ltc": 255362.73,
        "volume_usd": 45577119.38
    },
    {
        "date": "2018-01-25",
        "open": 180.6,
        "high": 184.8,
        "low": 175,
        "close": 178.86,
        "volume_ltc": 221870.89,
        "volume_usd": 39980503.18
    },
    {
        "date": "2018-01-26",
        "open": 178.86,
        "high": 181.71,
        "low": 166.15,
        "close": 175.71,
        "volume_ltc": 264755.45,
        "volume_usd": 46193883.44
    },
    {
        "date": "2018-01-27",
        "open": 175.71,
        "high": 182,
        "low": 173.96,
        "close": 179.65,
        "volume_ltc": 168926.78,
        "volume_usd": 30130784.35
    },
    {
        "date": "2018-01-28",
        "open": 179.65,
        "high": 192.47,
        "low": 178.65,
        "close": 191.12,
        "volume_ltc": 219997.31,
        "volume_usd": 40610728.76
    },
    {
        "date": "2018-01-29",
        "open": 191.12,
        "high": 191.12,
        "low": 175.56,
        "close": 179.57,
        "volume_ltc": 196646.32,
        "volume_usd": 35648369.32
    },
    {
        "date": "2018-01-30",
        "open": 179.57,
        "high": 179.9,
        "low": 158.2,
        "close": 164.25,
        "volume_ltc": 379801.99,
        "volume_usd": 64059921.52
    },
    {
        "date": "2018-01-31",
        "open": 164.25,
        "high": 166.5,
        "low": 155,
        "close": 161.9,
        "volume_ltc": 308082.43,
        "volume_usd": 49439807.95
    },
    {
        "date": "2018-02-01",
        "open": 161.9,
        "high": 164.9,
        "low": 125,
        "close": 140.6,
        "volume_ltc": 745202.67,
        "volume_usd": 107062002.66
    },
    {
        "date": "2018-02-02",
        "open": 140.6,
        "high": 141.34,
        "low": 100.2,
        "close": 130.69,
        "volume_ltc": 1192336.87,
        "volume_usd": 148138984.66
    },
    {
        "date": "2018-02-03",
        "open": 130.69,
        "high": 166.6,
        "low": 120.12,
        "close": 160.97,
        "volume_ltc": 892909.36,
        "volume_usd": 130500748.03
    },
    {
        "date": "2018-02-04",
        "open": 160.97,
        "high": 175,
        "low": 137,
        "close": 147.5,
        "volume_ltc": 1095767.35,
        "volume_usd": 170853578.5
    },
    {
        "date": "2018-02-05",
        "open": 147.5,
        "high": 153.87,
        "low": 112,
        "close": 124.98,
        "volume_ltc": 1261455.6,
        "volume_usd": 166640565
    },
    {
        "date": "2018-02-06",
        "open": 124.98,
        "high": 147.98,
        "low": 103.65,
        "close": 141.5,
        "volume_ltc": 1735100.58,
        "volume_usd": 216160464.54
    },
    {
        "date": "2018-02-07",
        "open": 141.5,
        "high": 160,
        "low": 130.6,
        "close": 137.8,
        "volume_ltc": 950404.56,
        "volume_usd": 138616008.82
    },
    {
        "date": "2018-02-08",
        "open": 137.8,
        "high": 151,
        "low": 136.65,
        "close": 149.1,
        "volume_ltc": 483516.27,
        "volume_usd": 70044546.96
    },
    {
        "date": "2018-02-09",
        "open": 149.1,
        "high": 164.29,
        "low": 142.09,
        "close": 164.1,
        "volume_ltc": 510707.03,
        "volume_usd": 78073701.49
    },
    {
        "date": "2018-02-10",
        "open": 164.1,
        "high": 169.49,
        "low": 148.02,
        "close": 155.08,
        "volume_ltc": 614048.68,
        "volume_usd": 98533237.96
    },
    {
        "date": "2018-02-11",
        "open": 155.08,
        "high": 155.78,
        "low": 142.26,
        "close": 149.26,
        "volume_ltc": 317060.34,
        "volume_usd": 47459528.8
    },
    {
        "date": "2018-02-12",
        "open": 149.26,
        "high": 163.28,
        "low": 149.18,
        "close": 161.5,
        "volume_ltc": 338906.31,
        "volume_usd": 53478122.15
    },
    {
        "date": "2018-02-13",
        "open": 161.5,
        "high": 162,
        "low": 153.4,
        "close": 158.91,
        "volume_ltc": 212235.45,
        "volume_usd": 33492356.64
    },
    {
        "date": "2018-02-14",
        "open": 158.91,
        "high": 219,
        "low": 158.91,
        "close": 211.86,
        "volume_ltc": 1571663.87,
        "volume_usd": 302882839
    },
    {
        "date": "2018-02-15",
        "open": 211.86,
        "high": 237.72,
        "low": 206.25,
        "close": 221.18,
        "volume_ltc": 1142993.99,
        "volume_usd": 255010922.25
    },
    {
        "date": "2018-02-16",
        "open": 221.18,
        "high": 234.75,
        "low": 210.55,
        "close": 228.24,
        "volume_ltc": 607870.32,
        "volume_usd": 135615233.22
    },
    {
        "date": "2018-02-17",
        "open": 228.24,
        "high": 233,
        "low": 225.03,
        "close": 229.9,
        "volume_ltc": 284652.86,
        "volume_usd": 65236998.45
    },
    {
        "date": "2018-02-18",
        "open": 229.9,
        "high": 232.75,
        "low": 212.45,
        "close": 214.5,
        "volume_ltc": 480492.42,
        "volume_usd": 106751481.15
    },
    {
        "date": "2018-02-19",
        "open": 214.5,
        "high": 225.96,
        "low": 213.5,
        "close": 222.1,
        "volume_ltc": 243418.21,
        "volume_usd": 53856833.71
    },
    {
        "date": "2018-02-20",
        "open": 222.1,
        "high": 251.9,
        "low": 221.5,
        "close": 229.5,
        "volume_ltc": 933095.82,
        "volume_usd": 223173332.27
    },
    {
        "date": "2018-02-21",
        "open": 229.5,
        "high": 231.88,
        "low": 204.71,
        "close": 210.23,
        "volume_ltc": 749037.26,
        "volume_usd": 162405686.33
    },
    {
        "date": "2018-02-22",
        "open": 210.23,
        "high": 221.49,
        "low": 188.56,
        "close": 192.99,
        "volume_ltc": 657400.32,
        "volume_usd": 132887071.29
    },
    {
        "date": "2018-02-23",
        "open": 192.99,
        "high": 215.8,
        "low": 182.55,
        "close": 206.52,
        "volume_ltc": 671170.22,
        "volume_usd": 133564983.21
    },
    {
        "date": "2018-02-24",
        "open": 206.52,
        "high": 218.65,
        "low": 194.85,
        "close": 206.15,
        "volume_ltc": 520443.06,
        "volume_usd": 107475961.28
    },
    {
        "date": "2018-02-25",
        "open": 206.15,
        "high": 223.53,
        "low": 200.35,
        "close": 218.77,
        "volume_ltc": 453198.89,
        "volume_usd": 95986352.47
    },
    {
        "date": "2018-02-26",
        "open": 218.77,
        "high": 231.5,
        "low": 214.43,
        "close": 218.74,
        "volume_ltc": 603212.41,
        "volume_usd": 134767376.93
    },
    {
        "date": "2018-02-27",
        "open": 218.74,
        "high": 222.85,
        "low": 212.1,
        "close": 215.15,
        "volume_ltc": 323337.74,
        "volume_usd": 70237096.24
    },
    {
        "date": "2018-02-28",
        "open": 215.15,
        "high": 223.7,
        "low": 201.4,
        "close": 202.12,
        "volume_ltc": 359114.51,
        "volume_usd": 76358785.38
    },
    {
        "date": "2018-03-01",
        "open": 202.12,
        "high": 214.88,
        "low": 200.48,
        "close": 209.2,
        "volume_ltc": 282140.39,
        "volume_usd": 58779519.78
    },
    {
        "date": "2018-03-02",
        "open": 209.2,
        "high": 213.3,
        "low": 204.58,
        "close": 212,
        "volume_ltc": 214579.97,
        "volume_usd": 44711095.52
    },
    {
        "date": "2018-03-03",
        "open": 212,
        "high": 217.5,
        "low": 209.16,
        "close": 210.4,
        "volume_ltc": 265163.07,
        "volume_usd": 56746943.37
    },
    {
        "date": "2018-03-04",
        "open": 210.4,
        "high": 214,
        "low": 205.2,
        "close": 212.97,
        "volume_ltc": 151531.56,
        "volume_usd": 31725632.75
    },
    {
        "date": "2018-03-05",
        "open": 212.97,
        "high": 214.92,
        "low": 209.2,
        "close": 210.71,
        "volume_ltc": 142219.48,
        "volume_usd": 30165126.18
    },
    {
        "date": "2018-03-06",
        "open": 210.71,
        "high": 210.71,
        "low": 191.34,
        "close": 196.63,
        "volume_ltc": 376989.01,
        "volume_usd": 75867023.31
    },
    {
        "date": "2018-03-07",
        "open": 196.63,
        "high": 199.35,
        "low": 173.82,
        "close": 186.42,
        "volume_ltc": 562662.81,
        "volume_usd": 104881700.16
    },
    {
        "date": "2018-03-08",
        "open": 186.42,
        "high": 188.5,
        "low": 174.2,
        "close": 175.79,
        "volume_ltc": 358219.42,
        "volume_usd": 64787817.26
    },
    {
        "date": "2018-03-09",
        "open": 175.79,
        "high": 190,
        "low": 157.27,
        "close": 186.33,
        "volume_ltc": 699458.18,
        "volume_usd": 121168108.71
    },
    {
        "date": "2018-03-10",
        "open": 186.33,
        "high": 194.47,
        "low": 176.1,
        "close": 177.67,
        "volume_ltc": 303334.6,
        "volume_usd": 56369486.38
    },
    {
        "date": "2018-03-11",
        "open": 177.67,
        "high": 192.84,
        "low": 172.3,
        "close": 188.33,
        "volume_ltc": 313318.19,
        "volume_usd": 57660906.94
    },
    {
        "date": "2018-03-12",
        "open": 188.33,
        "high": 192.89,
        "low": 175,
        "close": 177.89,
        "volume_ltc": 313292.12,
        "volume_usd": 57445532.83
    },
    {
        "date": "2018-03-13",
        "open": 177.89,
        "high": 182,
        "low": 171.31,
        "close": 175.5,
        "volume_ltc": 247589.47,
        "volume_usd": 43648299.51
    },
    {
        "date": "2018-03-14",
        "open": 175.5,
        "high": 177.9,
        "low": 157.5,
        "close": 160.69,
        "volume_ltc": 386277.41,
        "volume_usd": 64134271.29
    },
    {
        "date": "2018-03-15",
        "open": 160.69,
        "high": 167.77,
        "low": 150,
        "close": 164.21,
        "volume_ltc": 487488.49,
        "volume_usd": 77967778.27
    },
    {
        "date": "2018-03-16",
        "open": 164.21,
        "high": 172,
        "low": 158.56,
        "close": 165.32,
        "volume_ltc": 299857.78,
        "volume_usd": 49646107.57
    },
    {
        "date": "2018-03-17",
        "open": 165.32,
        "high": 165.48,
        "low": 151.18,
        "close": 152.66,
        "volume_ltc": 306054.81,
        "volume_usd": 48263993.37
    },
    {
        "date": "2018-03-18",
        "open": 152.66,
        "high": 157.5,
        "low": 137.12,
        "close": 154,
        "volume_ltc": 604100.79,
        "volume_usd": 88340471.24
    },
    {
        "date": "2018-03-19",
        "open": 154,
        "high": 164,
        "low": 150.47,
        "close": 161.33,
        "volume_ltc": 419998.88,
        "volume_usd": 65892799.18
    },
    {
        "date": "2018-03-20",
        "open": 161.33,
        "high": 174,
        "low": 155.56,
        "close": 169.17,
        "volume_ltc": 380506.67,
        "volume_usd": 62882845.68
    },
    {
        "date": "2018-03-21",
        "open": 169.17,
        "high": 175.5,
        "low": 165.14,
        "close": 168.69,
        "volume_ltc": 329488.93,
        "volume_usd": 56338509.61
    },
    {
        "date": "2018-03-22",
        "open": 168.69,
        "high": 172.5,
        "low": 160.11,
        "close": 163.83,
        "volume_ltc": 252435.88,
        "volume_usd": 41765481
    },
    {
        "date": "2018-03-23",
        "open": 163.83,
        "high": 168.97,
        "low": 157.06,
        "close": 168.64,
        "volume_ltc": 229238.69,
        "volume_usd": 36957783.29
    },
    {
        "date": "2018-03-24",
        "open": 168.64,
        "high": 169.5,
        "low": 158.41,
        "close": 159,
        "volume_ltc": 186835.81,
        "volume_usd": 30778989.77
    },
    {
        "date": "2018-03-25",
        "open": 159,
        "high": 163.08,
        "low": 157.69,
        "close": 160.18,
        "volume_ltc": 135648.87,
        "volume_usd": 21733911.65
    },
    {
        "date": "2018-03-26",
        "open": 160.18,
        "high": 160.62,
        "low": 142,
        "close": 148.24,
        "volume_ltc": 348049.84,
        "volume_usd": 51915131.35
    },
    {
        "date": "2018-03-27",
        "open": 148.24,
        "high": 149.48,
        "low": 134.46,
        "close": 134.64,
        "volume_ltc": 349421.31,
        "volume_usd": 49313467.36
    },
    {
        "date": "2018-03-28",
        "open": 134.64,
        "high": 139.75,
        "low": 130.11,
        "close": 131.7,
        "volume_ltc": 285865.16,
        "volume_usd": 38319337.32
    },
    {
        "date": "2018-03-29",
        "open": 131.7,
        "high": 132.54,
        "low": 112.11,
        "close": 114.53,
        "volume_ltc": 697468.02,
        "volume_usd": 83612973.79
    },
    {
        "date": "2018-03-30",
        "open": 114.53,
        "high": 126.91,
        "low": 109.27,
        "close": 118.45,
        "volume_ltc": 652450.94,
        "volume_usd": 76159198.13
    },
    {
        "date": "2018-03-31",
        "open": 118.45,
        "high": 125.78,
        "low": 115.54,
        "close": 116.28,
        "volume_ltc": 308160.49,
        "volume_usd": 37204383.92
    },
    {
        "date": "2018-04-01",
        "open": 116.28,
        "high": 118.59,
        "low": 110.01,
        "close": 114.96,
        "volume_ltc": 248966.61,
        "volume_usd": 28412269.3
    },
    {
        "date": "2018-04-02",
        "open": 114.96,
        "high": 121.62,
        "low": 114.04,
        "close": 119.1,
        "volume_ltc": 230191.94,
        "volume_usd": 27277187.27
    },
    {
        "date": "2018-04-03",
        "open": 119.1,
        "high": 137.89,
        "low": 118.3,
        "close": 134.12,
        "volume_ltc": 408212.97,
        "volume_usd": 52630413.08
    },
    {
        "date": "2018-04-04",
        "open": 134.12,
        "high": 135.1,
        "low": 115.5,
        "close": 118.24,
        "volume_ltc": 429872.44,
        "volume_usd": 52739285.65
    },
    {
        "date": "2018-04-05",
        "open": 118.24,
        "high": 122.87,
        "low": 113.75,
        "close": 118.78,
        "volume_ltc": 344253.14,
        "volume_usd": 40748603.61
    },
    {
        "date": "2018-04-06",
        "open": 118.78,
        "high": 120.49,
        "low": 112.1,
        "close": 112.93,
        "volume_ltc": 219048.93,
        "volume_usd": 25167538.05
    },
    {
        "date": "2018-04-07",
        "open": 112.93,
        "high": 119.59,
        "low": 112.68,
        "close": 116.06,
        "volume_ltc": 189396.1,
        "volume_usd": 22209425.72
    },
    {
        "date": "2018-04-08",
        "open": 116.06,
        "high": 118.39,
        "low": 115.18,
        "close": 117.67,
        "volume_ltc": 111412.5,
        "volume_usd": 13025154.47
    },
    {
        "date": "2018-04-09",
        "open": 117.67,
        "high": 122.97,
        "low": 113.01,
        "close": 114.91,
        "volume_ltc": 309201.1,
        "volume_usd": 36265988.17
    },
    {
        "date": "2018-04-10",
        "open": 114.91,
        "high": 115.39,
        "low": 112,
        "close": 114.16,
        "volume_ltc": 164500.96,
        "volume_usd": 18745181.08
    },
    {
        "date": "2018-04-11",
        "open": 114.16,
        "high": 119.72,
        "low": 113.21,
        "close": 117.95,
        "volume_ltc": 172583.5,
        "volume_usd": 19886736.96
    },
    {
        "date": "2018-04-12",
        "open": 117.95,
        "high": 131,
        "low": 113.3,
        "close": 129.53,
        "volume_ltc": 613586.57,
        "volume_usd": 74764347.47
    },
    {
        "date": "2018-04-13",
        "open": 129.53,
        "high": 133.5,
        "low": 124,
        "close": 125.46,
        "volume_ltc": 486506.74,
        "volume_usd": 62741778.64
    },
    {
        "date": "2018-04-14",
        "open": 125.46,
        "high": 129.8,
        "low": 124.3,
        "close": 126.42,
        "volume_ltc": 195877.9,
        "volume_usd": 24836038.27
    },
    {
        "date": "2018-04-15",
        "open": 126.42,
        "high": 132.77,
        "low": 126.42,
        "close": 132.52,
        "volume_ltc": 225123.25,
        "volume_usd": 29347571.47
    },
    {
        "date": "2018-04-16",
        "open": 132.52,
        "high": 133.36,
        "low": 125.11,
        "close": 128.63,
        "volume_ltc": 261540.78,
        "volume_usd": 33541452.32
    },
    {
        "date": "2018-04-17",
        "open": 128.63,
        "high": 140.55,
        "low": 128.62,
        "close": 132.21,
        "volume_ltc": 409927.77,
        "volume_usd": 55365666.19
    },
    {
        "date": "2018-04-18",
        "open": 132.21,
        "high": 141.64,
        "low": 132.11,
        "close": 140.49,
        "volume_ltc": 266123.3,
        "volume_usd": 36574504.3
    },
    {
        "date": "2018-04-19",
        "open": 140.49,
        "high": 147.74,
        "low": 138.88,
        "close": 146.34,
        "volume_ltc": 287301.15,
        "volume_usd": 41079412.57
    },
    {
        "date": "2018-04-20",
        "open": 146.34,
        "high": 156.46,
        "low": 143.31,
        "close": 155.71,
        "volume_ltc": 406638.56,
        "volume_usd": 60992096.67
    },
    {
        "date": "2018-04-21",
        "open": 155.71,
        "high": 157.1,
        "low": 141.02,
        "close": 148.3,
        "volume_ltc": 360706.78,
        "volume_usd": 53851736.48
    },
    {
        "date": "2018-04-22",
        "open": 148.3,
        "high": 153,
        "low": 145.01,
        "close": 146.59,
        "volume_ltc": 201136.34,
        "volume_usd": 30004825.36
    },
    {
        "date": "2018-04-23",
        "open": 146.59,
        "high": 153.24,
        "low": 146.35,
        "close": 152.59,
        "volume_ltc": 203735.48,
        "volume_usd": 30709808.99
    },
    {
        "date": "2018-04-24",
        "open": 152.59,
        "high": 165.87,
        "low": 152.59,
        "close": 164.72,
        "volume_ltc": 516695.48,
        "volume_usd": 83400578.6
    },
    {
        "date": "2018-04-25",
        "open": 164.72,
        "high": 164.84,
        "low": 138.8,
        "close": 145,
        "volume_ltc": 623575.97,
        "volume_usd": 94027542.62
    },
    {
        "date": "2018-04-26",
        "open": 145,
        "high": 154.65,
        "low": 142.2,
        "close": 153.1,
        "volume_ltc": 260424.35,
        "volume_usd": 38334151.47
    },
    {
        "date": "2018-04-27",
        "open": 153.1,
        "high": 153.75,
        "low": 145.29,
        "close": 145.9,
        "volume_ltc": 236590.77,
        "volume_usd": 35559221.74
    },
    {
        "date": "2018-04-28",
        "open": 145.9,
        "high": 152.94,
        "low": 145,
        "close": 151.82,
        "volume_ltc": 150693.07,
        "volume_usd": 22652453.45
    },
    {
        "date": "2018-04-29",
        "open": 151.82,
        "high": 156.39,
        "low": 148.22,
        "close": 153.24,
        "volume_ltc": 165668.75,
        "volume_usd": 25261651.1
    },
    {
        "date": "2018-04-30",
        "open": 153.24,
        "high": 153.79,
        "low": 147.06,
        "close": 148.32,
        "volume_ltc": 149706.56,
        "volume_usd": 22553363.94
    },
    {
        "date": "2018-05-01",
        "open": 148.32,
        "high": 148.75,
        "low": 142.73,
        "close": 147.99,
        "volume_ltc": 194431.84,
        "volume_usd": 28244569.5
    },
    {
        "date": "2018-05-02",
        "open": 147.99,
        "high": 152.88,
        "low": 146.53,
        "close": 150.8,
        "volume_ltc": 138839.04,
        "volume_usd": 20710810.62
    },
    {
        "date": "2018-05-03",
        "open": 150.8,
        "high": 163.35,
        "low": 150.69,
        "close": 161,
        "volume_ltc": 332902.72,
        "volume_usd": 52560431.57
    },
    {
        "date": "2018-05-04",
        "open": 161,
        "high": 171.28,
        "low": 157.19,
        "close": 168.2,
        "volume_ltc": 301807.45,
        "volume_usd": 49355523.28
    },
    {
        "date": "2018-05-05",
        "open": 168.2,
        "high": 182.35,
        "low": 167.03,
        "close": 177.73,
        "volume_ltc": 339751.38,
        "volume_usd": 59515540.83
    },
    {
        "date": "2018-05-06",
        "open": 177.73,
        "high": 181.95,
        "low": 165.1,
        "close": 171.07,
        "volume_ltc": 284016.17,
        "volume_usd": 48940449.89
    },
    {
        "date": "2018-05-07",
        "open": 171.07,
        "high": 171.62,
        "low": 157.25,
        "close": 164.09,
        "volume_ltc": 292957.68,
        "volume_usd": 48004502.02
    },
    {
        "date": "2018-05-08",
        "open": 164.09,
        "high": 168.1,
        "low": 157.01,
        "close": 158.98,
        "volume_ltc": 250704.11,
        "volume_usd": 40523123.25
    },
    {
        "date": "2018-05-09",
        "open": 158.98,
        "high": 160.24,
        "low": 151.05,
        "close": 156.83,
        "volume_ltc": 206075.83,
        "volume_usd": 32165101.8
    },
    {
        "date": "2018-05-10",
        "open": 156.83,
        "high": 160.45,
        "low": 148.02,
        "close": 148.18,
        "volume_ltc": 185257.89,
        "volume_usd": 28624795.2
    },
    {
        "date": "2018-05-11",
        "open": 148.18,
        "high": 148.61,
        "low": 133.52,
        "close": 136.51,
        "volume_ltc": 427428.3,
        "volume_usd": 60481101.3
    },
    {
        "date": "2018-05-12",
        "open": 136.51,
        "high": 145,
        "low": 131.88,
        "close": 142,
        "volume_ltc": 218253.86,
        "volume_usd": 30278811.61
    },
    {
        "date": "2018-05-13",
        "open": 142,
        "high": 146.73,
        "low": 137.2,
        "close": 144.43,
        "volume_ltc": 154787.63,
        "volume_usd": 22063811.92
    },
    {
        "date": "2018-05-14",
        "open": 144.43,
        "high": 152.88,
        "low": 134.5,
        "close": 147.32,
        "volume_ltc": 379578.25,
        "volume_usd": 54539250.31
    },
    {
        "date": "2018-05-15",
        "open": 147.32,
        "high": 149.71,
        "low": 138.1,
        "close": 139.78,
        "volume_ltc": 228011.98,
        "volume_usd": 32696412.44
    },
    {
        "date": "2018-05-16",
        "open": 139.78,
        "high": 140.99,
        "low": 135,
        "close": 139.36,
        "volume_ltc": 176798.14,
        "volume_usd": 24299021.89
    },
    {
        "date": "2018-05-17",
        "open": 139.36,
        "high": 141.75,
        "low": 131.37,
        "close": 132.65,
        "volume_ltc": 166516.42,
        "volume_usd": 22766473.2
    },
    {
        "date": "2018-05-18",
        "open": 132.65,
        "high": 137.6,
        "low": 129.1,
        "close": 136.3,
        "volume_ltc": 198197.55,
        "volume_usd": 26330667.32
    },
    {
        "date": "2018-05-19",
        "open": 136.3,
        "high": 138.01,
        "low": 133.25,
        "close": 135,
        "volume_ltc": 87531.06,
        "volume_usd": 11868864.35
    },
    {
        "date": "2018-05-20",
        "open": 135,
        "high": 140.7,
        "low": 132.2,
        "close": 139.38,
        "volume_ltc": 99079.12,
        "volume_usd": 13632023.21
    },
    {
        "date": "2018-05-21",
        "open": 139.38,
        "high": 139.98,
        "low": 133.53,
        "close": 134.26,
        "volume_ltc": 94096.82,
        "volume_usd": 12822339.23
    },
    {
        "date": "2018-05-22",
        "open": 134.26,
        "high": 135.75,
        "low": 127.6,
        "close": 128.11,
        "volume_ltc": 124256.58,
        "volume_usd": 16350860.01
    },
    {
        "date": "2018-05-23",
        "open": 128.11,
        "high": 129.35,
        "low": 116.27,
        "close": 118.85,
        "volume_ltc": 295309.11,
        "volume_usd": 36108103.18
    },
    {
        "date": "2018-05-24",
        "open": 118.85,
        "high": 125.25,
        "low": 115.11,
        "close": 122.99,
        "volume_ltc": 209793.9,
        "volume_usd": 25315887.2
    },
    {
        "date": "2018-05-25",
        "open": 122.99,
        "high": 124.44,
        "low": 117.28,
        "close": 119.05,
        "volume_ltc": 132908.99,
        "volume_usd": 15978098.97
    },
    {
        "date": "2018-05-26",
        "open": 119.05,
        "high": 122.63,
        "low": 117.5,
        "close": 118.33,
        "volume_ltc": 76424.12,
        "volume_usd": 9182551.15
    },
    {
        "date": "2018-05-27",
        "open": 118.33,
        "high": 118.98,
        "low": 116.51,
        "close": 117.83,
        "volume_ltc": 76249.99,
        "volume_usd": 8963121.29
    },
    {
        "date": "2018-05-28",
        "open": 117.83,
        "high": 118.95,
        "low": 110.51,
        "close": 111.24,
        "volume_ltc": 177641.23,
        "volume_usd": 20256381.54
    },
    {
        "date": "2018-05-29",
        "open": 111.24,
        "high": 122.7,
        "low": 110,
        "close": 119.52,
        "volume_ltc": 185221.83,
        "volume_usd": 21670111.66
    },
    {
        "date": "2018-05-30",
        "open": 119.52,
        "high": 122.86,
        "low": 115,
        "close": 117.18,
        "volume_ltc": 128200.86,
        "volume_usd": 15236208.38
    },
    {
        "date": "2018-05-31",
        "open": 117.18,
        "high": 120.99,
        "low": 116.49,
        "close": 118.36,
        "volume_ltc": 111379.6,
        "volume_usd": 13237664.82
    },
    {
        "date": "2018-06-01",
        "open": 118.36,
        "high": 120.71,
        "low": 117,
        "close": 119.88,
        "volume_ltc": 88134.71,
        "volume_usd": 10456884.26
    },
    {
        "date": "2018-06-02",
        "open": 119.88,
        "high": 124.46,
        "low": 118.52,
        "close": 123.66,
        "volume_ltc": 95095.09,
        "volume_usd": 11623915.42
    },
    {
        "date": "2018-06-03",
        "open": 123.66,
        "high": 127.95,
        "low": 122.56,
        "close": 125,
        "volume_ltc": 94472.36,
        "volume_usd": 11859886.17
    },
    {
        "date": "2018-06-04",
        "open": 125,
        "high": 126.69,
        "low": 118.22,
        "close": 119.87,
        "volume_ltc": 100888.09,
        "volume_usd": 12225070.09
    },
    {
        "date": "2018-06-05",
        "open": 119.87,
        "high": 122.49,
        "low": 116.17,
        "close": 121.87,
        "volume_ltc": 121243.35,
        "volume_usd": 14459608.68
    },
    {
        "date": "2018-06-06",
        "open": 121.87,
        "high": 122.67,
        "low": 118.48,
        "close": 121.37,
        "volume_ltc": 94214.85,
        "volume_usd": 11365097.25
    },
    {
        "date": "2018-06-07",
        "open": 121.37,
        "high": 123.48,
        "low": 119.47,
        "close": 121.63,
        "volume_ltc": 88176.2,
        "volume_usd": 10726260.8
    },
    {
        "date": "2018-06-08",
        "open": 121.63,
        "high": 121.95,
        "low": 118.59,
        "close": 120.04,
        "volume_ltc": 76616.4,
        "volume_usd": 9169873.48
    },
    {
        "date": "2018-06-09",
        "open": 120.04,
        "high": 120.95,
        "low": 117.15,
        "close": 117.43,
        "volume_ltc": 55200.53,
        "volume_usd": 6581197.97
    },
    {
        "date": "2018-06-10",
        "open": 117.43,
        "high": 117.43,
        "low": 103.35,
        "close": 106.97,
        "volume_ltc": 327703.18,
        "volume_usd": 35878803.85
    },
    {
        "date": "2018-06-11",
        "open": 106.97,
        "high": 109.02,
        "low": 103.2,
        "close": 107.47,
        "volume_ltc": 215525.44,
        "volume_usd": 22895230.08
    },
    {
        "date": "2018-06-12",
        "open": 107.47,
        "high": 107.95,
        "low": 97.5,
        "close": 100.19,
        "volume_ltc": 262545.7,
        "volume_usd": 26843165.51
    },
    {
        "date": "2018-06-13",
        "open": 100.19,
        "high": 100.57,
        "low": 89.25,
        "close": 93.82,
        "volume_ltc": 384682.27,
        "volume_usd": 36275943.66
    },
    {
        "date": "2018-06-14",
        "open": 93.82,
        "high": 103.06,
        "low": 93,
        "close": 101.12,
        "volume_ltc": 347145.58,
        "volume_usd": 33945569.66
    },
    {
        "date": "2018-06-15",
        "open": 101.12,
        "high": 101.12,
        "low": 94.75,
        "close": 95.54,
        "volume_ltc": 151557.1,
        "volume_usd": 14855205.96
    },
    {
        "date": "2018-06-16",
        "open": 95.54,
        "high": 97.64,
        "low": 92.79,
        "close": 96.67,
        "volume_ltc": 89340.44,
        "volume_usd": 8553521.29
    },
    {
        "date": "2018-06-17",
        "open": 96.67,
        "high": 98,
        "low": 94.75,
        "close": 95.01,
        "volume_ltc": 63236.2,
        "volume_usd": 6082701.25
    },
    {
        "date": "2018-06-18",
        "open": 95.01,
        "high": 99.7,
        "low": 93.2,
        "close": 98.63,
        "volume_ltc": 150898.54,
        "volume_usd": 14567348.07
    },
    {
        "date": "2018-06-19",
        "open": 98.63,
        "high": 101.65,
        "low": 97,
        "close": 98.58,
        "volume_ltc": 124366.63,
        "volume_usd": 12298252.74
    },
    {
        "date": "2018-06-20",
        "open": 98.58,
        "high": 99,
        "low": 95.51,
        "close": 97.83,
        "volume_ltc": 95985.85,
        "volume_usd": 9339620.93
    },
    {
        "date": "2018-06-21",
        "open": 97.83,
        "high": 99.17,
        "low": 96.15,
        "close": 96.69,
        "volume_ltc": 81996.24,
        "volume_usd": 7972266.34
    },
    {
        "date": "2018-06-22",
        "open": 96.69,
        "high": 96.79,
        "low": 80.29,
        "close": 85.03,
        "volume_ltc": 392004.45,
        "volume_usd": 34107959.72
    },
    {
        "date": "2018-06-23",
        "open": 85.03,
        "high": 87.11,
        "low": 81.59,
        "close": 83.21,
        "volume_ltc": 148994.64,
        "volume_usd": 12494523.95
    },
    {
        "date": "2018-06-24",
        "open": 83.21,
        "high": 83.75,
        "low": 73.46,
        "close": 80.61,
        "volume_ltc": 381179.84,
        "volume_usd": 30001351.42
    },
    {
        "date": "2018-06-25",
        "open": 80.61,
        "high": 84.49,
        "low": 78.8,
        "close": 81.67,
        "volume_ltc": 224912.21,
        "volume_usd": 18359843.51
    },
    {
        "date": "2018-06-26",
        "open": 81.67,
        "high": 82.53,
        "low": 75.37,
        "close": 75.8,
        "volume_ltc": 167765.33,
        "volume_usd": 13295551.19
    },
    {
        "date": "2018-06-27",
        "open": 75.8,
        "high": 81.97,
        "low": 74.9,
        "close": 80.73,
        "volume_ltc": 194228.74,
        "volume_usd": 15244138.33
    },
    {
        "date": "2018-06-28",
        "open": 80.73,
        "high": 81.2,
        "low": 74.01,
        "close": 74.25,
        "volume_ltc": 178880.7,
        "volume_usd": 13956573.41
    },
    {
        "date": "2018-06-29",
        "open": 74.25,
        "high": 80.48,
        "low": 72.44,
        "close": 78.94,
        "volume_ltc": 240080.02,
        "volume_usd": 18073746.26
    },
    {
        "date": "2018-06-30",
        "open": 78.94,
        "high": 84.5,
        "low": 78.94,
        "close": 81.01,
        "volume_ltc": 171970.96,
        "volume_usd": 14015714.19
    },
    {
        "date": "2018-07-01",
        "open": 81.01,
        "high": 81.39,
        "low": 77.72,
        "close": 79.89,
        "volume_ltc": 89710.2,
        "volume_usd": 7147888.78
    },
    {
        "date": "2018-07-02",
        "open": 79.89,
        "high": 86.84,
        "low": 78.32,
        "close": 85.45,
        "volume_ltc": 188323.18,
        "volume_usd": 15820485.47
    },
    {
        "date": "2018-07-03",
        "open": 85.45,
        "high": 90,
        "low": 84.01,
        "close": 84.96,
        "volume_ltc": 219149.69,
        "volume_usd": 19042849.54
    },
    {
        "date": "2018-07-04",
        "open": 84.96,
        "high": 89,
        "low": 83.51,
        "close": 85.4,
        "volume_ltc": 120101.73,
        "volume_usd": 10332327.55
    },
    {
        "date": "2018-07-05",
        "open": 85.4,
        "high": 86.81,
        "low": 82,
        "close": 83.29,
        "volume_ltc": 137192.74,
        "volume_usd": 11555776.22
    },
    {
        "date": "2018-07-06",
        "open": 83.29,
        "high": 84.01,
        "low": 80.76,
        "close": 82.96,
        "volume_ltc": 91174.21,
        "volume_usd": 7554675.62
    },
    {
        "date": "2018-07-07",
        "open": 82.96,
        "high": 85.2,
        "low": 79.42,
        "close": 84.7,
        "volume_ltc": 102546.6,
        "volume_usd": 8403555.43
    },
    {
        "date": "2018-07-08",
        "open": 84.7,
        "high": 85.72,
        "low": 82,
        "close": 82.2,
        "volume_ltc": 84191.95,
        "volume_usd": 7080584.09
    },
    {
        "date": "2018-07-09",
        "open": 82.2,
        "high": 83.07,
        "low": 80.02,
        "close": 80.49,
        "volume_ltc": 107947.11,
        "volume_usd": 8818468.83
    },
    {
        "date": "2018-07-10",
        "open": 80.49,
        "high": 80.5,
        "low": 74.51,
        "close": 75.95,
        "volume_ltc": 213999.36,
        "volume_usd": 16456944.54
    },
    {
        "date": "2018-07-11",
        "open": 75.95,
        "high": 80.84,
        "low": 75.48,
        "close": 78.35,
        "volume_ltc": 114721.6,
        "volume_usd": 8892246.23
    },
    {
        "date": "2018-07-12",
        "open": 78.35,
        "high": 78.35,
        "low": 74.5,
        "close": 76.97,
        "volume_ltc": 133966.93,
        "volume_usd": 10176700.23
    },
    {
        "date": "2018-07-13",
        "open": 76.97,
        "high": 78.49,
        "low": 75.24,
        "close": 76.68,
        "volume_ltc": 120226.69,
        "volume_usd": 9266808.08
    },
    {
        "date": "2018-07-14",
        "open": 76.68,
        "high": 77.44,
        "low": 75.68,
        "close": 76.2,
        "volume_ltc": 68448.74,
        "volume_usd": 5231890.38
    },
    {
        "date": "2018-07-15",
        "open": 76.2,
        "high": 79.25,
        "low": 75.36,
        "close": 78.51,
        "volume_ltc": 82843.15,
        "volume_usd": 6432213.53
    },
    {
        "date": "2018-07-16",
        "open": 78.51,
        "high": 84,
        "low": 77.8,
        "close": 83.53,
        "volume_ltc": 148221.45,
        "volume_usd": 12126546.86
    },
    {
        "date": "2018-07-17",
        "open": 83.53,
        "high": 90.07,
        "low": 81.55,
        "close": 88.98,
        "volume_ltc": 240477.73,
        "volume_usd": 20813382.88
    },
    {
        "date": "2018-07-18",
        "open": 88.98,
        "high": 94.39,
        "low": 85.11,
        "close": 86.27,
        "volume_ltc": 280065.47,
        "volume_usd": 25231114.76
    },
    {
        "date": "2018-07-19",
        "open": 86.27,
        "high": 88.9,
        "low": 85.01,
        "close": 86.14,
        "volume_ltc": 129490.51,
        "volume_usd": 11210571.13
    },
    {
        "date": "2018-07-20",
        "open": 86.14,
        "high": 86.61,
        "low": 81,
        "close": 81.72,
        "volume_ltc": 176063.2,
        "volume_usd": 14768963.44
    },
    {
        "date": "2018-07-21",
        "open": 81.72,
        "high": 84.69,
        "low": 79.77,
        "close": 83.5,
        "volume_ltc": 87410.54,
        "volume_usd": 7205204.86
    },
    {
        "date": "2018-07-22",
        "open": 83.5,
        "high": 83.98,
        "low": 81.81,
        "close": 82.22,
        "volume_ltc": 71405.13,
        "volume_usd": 5924930.16
    },
    {
        "date": "2018-07-23",
        "open": 82.22,
        "high": 85.8,
        "low": 81.34,
        "close": 81.52,
        "volume_ltc": 139413.53,
        "volume_usd": 11679237.39
    },
    {
        "date": "2018-07-24",
        "open": 81.52,
        "high": 89.5,
        "low": 81,
        "close": 89.06,
        "volume_ltc": 243602.54,
        "volume_usd": 21111680.12
    },
    {
        "date": "2018-07-25",
        "open": 89.06,
        "high": 90.6,
        "low": 84.82,
        "close": 86.35,
        "volume_ltc": 161323.04,
        "volume_usd": 14078929.7
    },
    {
        "date": "2018-07-26",
        "open": 86.35,
        "high": 87.87,
        "low": 82.79,
        "close": 83.46,
        "volume_ltc": 107424.87,
        "volume_usd": 9206351.79
    },
    {
        "date": "2018-07-27",
        "open": 83.46,
        "high": 85.15,
        "low": 81.6,
        "close": 84.52,
        "volume_ltc": 132020.07,
        "volume_usd": 11031450.77
    },
    {
        "date": "2018-07-28",
        "open": 84.52,
        "high": 84.7,
        "low": 82.51,
        "close": 83.99,
        "volume_ltc": 51582.75,
        "volume_usd": 4316430.8
    },
    {
        "date": "2018-07-29",
        "open": 83.99,
        "high": 85.25,
        "low": 83.41,
        "close": 83.93,
        "volume_ltc": 47509.2,
        "volume_usd": 3993395.82
    },
    {
        "date": "2018-07-30",
        "open": 83.93,
        "high": 84.7,
        "low": 79.76,
        "close": 82.22,
        "volume_ltc": 123817.34,
        "volume_usd": 10178434.96
    },
    {
        "date": "2018-07-31",
        "open": 82.22,
        "high": 82.43,
        "low": 76.01,
        "close": 78.86,
        "volume_ltc": 169892.45,
        "volume_usd": 13341990.38
    },
    {
        "date": "2018-08-01",
        "open": 78.86,
        "high": 79.07,
        "low": 75.97,
        "close": 77.64,
        "volume_ltc": 131259.72,
        "volume_usd": 10149354.3
    },
    {
        "date": "2018-08-02",
        "open": 77.64,
        "high": 78.39,
        "low": 75.51,
        "close": 76.23,
        "volume_ltc": 101026.44,
        "volume_usd": 7748435.75
    },
    {
        "date": "2018-08-03",
        "open": 76.23,
        "high": 77.8,
        "low": 75,
        "close": 77.6,
        "volume_ltc": 117975.96,
        "volume_usd": 8975921.38
    },
    {
        "date": "2018-08-04",
        "open": 77.6,
        "high": 78,
        "low": 72.32,
        "close": 73.04,
        "volume_ltc": 114293.39,
        "volume_usd": 8551761.27
    },
    {
        "date": "2018-08-05",
        "open": 73.04,
        "high": 74.71,
        "low": 72.41,
        "close": 74.65,
        "volume_ltc": 70573,
        "volume_usd": 5201606.17
    },
    {
        "date": "2018-08-06",
        "open": 74.65,
        "high": 76.84,
        "low": 72.51,
        "close": 73.58,
        "volume_ltc": 100217.62,
        "volume_usd": 7436281.4
    },
    {
        "date": "2018-08-07",
        "open": 73.58,
        "high": 75.05,
        "low": 66.6,
        "close": 67.36,
        "volume_ltc": 203968.15,
        "volume_usd": 14392252.79
    },
    {
        "date": "2018-08-08",
        "open": 67.36,
        "high": 67.49,
        "low": 61.01,
        "close": 62.27,
        "volume_ltc": 410758.15,
        "volume_usd": 26376108.87
    },
    {
        "date": "2018-08-09",
        "open": 62.27,
        "high": 65.14,
        "low": 60.25,
        "close": 63.08,
        "volume_ltc": 205859.39,
        "volume_usd": 12959885.79
    },
    {
        "date": "2018-08-10",
        "open": 63.08,
        "high": 63.36,
        "low": 58.1,
        "close": 59.14,
        "volume_ltc": 211656.48,
        "volume_usd": 12923401.02
    },
    {
        "date": "2018-08-11",
        "open": 59.14,
        "high": 59.19,
        "low": 55.13,
        "close": 55.75,
        "volume_ltc": 116332.65,
        "volume_usd": 6600948.84
    },
    {
        "date": "2018-08-12",
        "open": 55.75,
        "high": 55.75,
        "low": 55.75,
        "close": 55.75,
        "volume_ltc": 0,
        "volume_usd": 0
    },
    {
        "date": "2018-08-13",
        "open": 59.44,
        "high": 60.6,
        "low": 55.72,
        "close": 56.48,
        "volume_ltc": 172704.56,
        "volume_usd": 9951473.76
    },
    {
        "date": "2018-08-14",
        "open": 56.48,
        "high": 56.49,
        "low": 49.33,
        "close": 54.39,
        "volume_ltc": 431418.42,
        "volume_usd": 22435681.77
    },
    {
        "date": "2018-08-15",
        "open": 54.39,
        "high": 59.44,
        "low": 54,
        "close": 54.44,
        "volume_ltc": 476898.24,
        "volume_usd": 26713168.41
    },
    {
        "date": "2018-08-16",
        "open": 54.44,
        "high": 57.68,
        "low": 54.13,
        "close": 55.47,
        "volume_ltc": 155751.16,
        "volume_usd": 8690581.51
    },
    {
        "date": "2018-08-17",
        "open": 55.47,
        "high": 61.88,
        "low": 55.16,
        "close": 61.82,
        "volume_ltc": 236829.39,
        "volume_usd": 13884443.95
    },
    {
        "date": "2018-08-18",
        "open": 61.82,
        "high": 62.6,
        "low": 55.66,
        "close": 57.38,
        "volume_ltc": 156573.54,
        "volume_usd": 9189553.55
    },
    {
        "date": "2018-08-19",
        "open": 57.38,
        "high": 58.98,
        "low": 56.4,
        "close": 57.85,
        "volume_ltc": 95035.25,
        "volume_usd": 5473582.67
    },
    {
        "date": "2018-08-20",
        "open": 57.85,
        "high": 58.55,
        "low": 53.19,
        "close": 53.39,
        "volume_ltc": 281442.44,
        "volume_usd": 15625693.19
    },
    {
        "date": "2018-08-21",
        "open": 53.39,
        "high": 56.78,
        "low": 53.15,
        "close": 56.39,
        "volume_ltc": 120180.33,
        "volume_usd": 6633591.04
    },
    {
        "date": "2018-08-22",
        "open": 56.39,
        "high": 59.21,
        "low": 54.01,
        "close": 55.2,
        "volume_ltc": 241691.56,
        "volume_usd": 13671137.49
    },
    {
        "date": "2018-08-23",
        "open": 55.2,
        "high": 57.91,
        "low": 55.01,
        "close": 57.31,
        "volume_ltc": 110150.08,
        "volume_usd": 6173435.79
    },
    {
        "date": "2018-08-24",
        "open": 57.31,
        "high": 58.36,
        "low": 55.55,
        "close": 57.94,
        "volume_ltc": 107550.66,
        "volume_usd": 6155679.55
    },
    {
        "date": "2018-08-25",
        "open": 57.94,
        "high": 58.36,
        "low": 57.08,
        "close": 58.01,
        "volume_ltc": 59893.99,
        "volume_usd": 3467307.65
    },
    {
        "date": "2018-08-26",
        "open": 58.01,
        "high": 58.2,
        "low": 56.02,
        "close": 57.11,
        "volume_ltc": 71919.72,
        "volume_usd": 4089626.98
    },
    {
        "date": "2018-08-27",
        "open": 57.11,
        "high": 61.14,
        "low": 56.64,
        "close": 60.7,
        "volume_ltc": 127822.78,
        "volume_usd": 7473068.88
    },
    {
        "date": "2018-08-28",
        "open": 60.7,
        "high": 63.91,
        "low": 59.76,
        "close": 63.18,
        "volume_ltc": 199238.75,
        "volume_usd": 12290483.24
    },
    {
        "date": "2018-08-29",
        "open": 63.18,
        "high": 63.44,
        "low": 60.27,
        "close": 61.54,
        "volume_ltc": 138425.71,
        "volume_usd": 8565803.84
    },
    {
        "date": "2018-08-30",
        "open": 61.54,
        "high": 61.75,
        "low": 58.58,
        "close": 60.25,
        "volume_ltc": 130797.92,
        "volume_usd": 7835350.54
    },
    {
        "date": "2018-08-31",
        "open": 60.25,
        "high": 62.8,
        "low": 59.55,
        "close": 62.13,
        "volume_ltc": 103438.9,
        "volume_usd": 6324359.1
    },
    {
        "date": "2018-09-01",
        "open": 62.13,
        "high": 67.96,
        "low": 62.12,
        "close": 66.47,
        "volume_ltc": 196193.82,
        "volume_usd": 12784799.92
    },
    {
        "date": "2018-09-02",
        "open": 66.47,
        "high": 66.85,
        "low": 64.1,
        "close": 66.23,
        "volume_ltc": 121828.54,
        "volume_usd": 7981651.12
    },
    {
        "date": "2018-09-03",
        "open": 66.23,
        "high": 66.51,
        "low": 64.44,
        "close": 65.37,
        "volume_ltc": 94166.71,
        "volume_usd": 6146155.2
    },
    {
        "date": "2018-09-04",
        "open": 65.37,
        "high": 69.44,
        "low": 65.32,
        "close": 67.75,
        "volume_ltc": 165774.37,
        "volume_usd": 11240472.95
    },
    {
        "date": "2018-09-05",
        "open": 67.75,
        "high": 68.35,
        "low": 57.41,
        "close": 57.68,
        "volume_ltc": 353281.47,
        "volume_usd": 21920710.12
    },
    {
        "date": "2018-09-06",
        "open": 57.68,
        "high": 57.75,
        "low": 53.79,
        "close": 57.48,
        "volume_ltc": 366328.37,
        "volume_usd": 20382126.98
    },
    {
        "date": "2018-09-07",
        "open": 57.48,
        "high": 58.93,
        "low": 55.01,
        "close": 55.5,
        "volume_ltc": 146384.06,
        "volume_usd": 8301902.56
    },
    {
        "date": "2018-09-08",
        "open": 55.5,
        "high": 57.28,
        "low": 51.9,
        "close": 53.2,
        "volume_ltc": 145581.99,
        "volume_usd": 7882121.73
    },
    {
        "date": "2018-09-09",
        "open": 53.2,
        "high": 56.74,
        "low": 52.17,
        "close": 54.71,
        "volume_ltc": 125490.18,
        "volume_usd": 6848424.77
    },
    {
        "date": "2018-09-10",
        "open": 54.71,
        "high": 56.49,
        "low": 53.05,
        "close": 54.3,
        "volume_ltc": 127290.87,
        "volume_usd": 6935616.61
    },
    {
        "date": "2018-09-11",
        "open": 54.3,
        "high": 54.81,
        "low": 50,
        "close": 51.97,
        "volume_ltc": 194823.82,
        "volume_usd": 10177899.62
    },
    {
        "date": "2018-09-12",
        "open": 51.97,
        "high": 52.08,
        "low": 47.19,
        "close": 51.6,
        "volume_ltc": 305066.54,
        "volume_usd": 15222516.24
    },
    {
        "date": "2018-09-13",
        "open": 51.6,
        "high": 55.42,
        "low": 51.6,
        "close": 54.66,
        "volume_ltc": 250286.31,
        "volume_usd": 13494696.35
    },
    {
        "date": "2018-09-14",
        "open": 54.66,
        "high": 58.9,
        "low": 52.92,
        "close": 56.33,
        "volume_ltc": 275176.16,
        "volume_usd": 15305874.54
    },
    {
        "date": "2018-09-15",
        "open": 56.33,
        "high": 58.73,
        "low": 55.55,
        "close": 56.34,
        "volume_ltc": 117131.5,
        "volume_usd": 6717625.06
    },
    {
        "date": "2018-09-16",
        "open": 56.34,
        "high": 57.45,
        "low": 54.45,
        "close": 56.78,
        "volume_ltc": 109936.06,
        "volume_usd": 6179242.71
    },
    {
        "date": "2018-09-17",
        "open": 56.78,
        "high": 57.85,
        "low": 51.44,
        "close": 52.05,
        "volume_ltc": 231736.54,
        "volume_usd": 12528090.97
    },
    {
        "date": "2018-09-18",
        "open": 52.05,
        "high": 55.49,
        "low": 50.55,
        "close": 54,
        "volume_ltc": 167886.39,
        "volume_usd": 8902922.73
    },
    {
        "date": "2018-09-19",
        "open": 54,
        "high": 54.98,
        "low": 51.7,
        "close": 54.28,
        "volume_ltc": 208320.35,
        "volume_usd": 11159610.33
    },
    {
        "date": "2018-09-20",
        "open": 54.28,
        "high": 57.34,
        "low": 53.37,
        "close": 56.56,
        "volume_ltc": 138835.05,
        "volume_usd": 7621884.46
    },
    {
        "date": "2018-09-21",
        "open": 56.56,
        "high": 62.75,
        "low": 56.32,
        "close": 60.83,
        "volume_ltc": 291859.97,
        "volume_usd": 17227186.97
    },
    {
        "date": "2018-09-22",
        "open": 60.83,
        "high": 61.68,
        "low": 58.11,
        "close": 60.53,
        "volume_ltc": 152108.16,
        "volume_usd": 9147292.73
    },
    {
        "date": "2018-09-23",
        "open": 60.53,
        "high": 63.47,
        "low": 59.83,
        "close": 61.31,
        "volume_ltc": 155743.69,
        "volume_usd": 9564327.11
    },
    {
        "date": "2018-09-24",
        "open": 61.31,
        "high": 61.4,
        "low": 57.07,
        "close": 57.94,
        "volume_ltc": 176134.6,
        "volume_usd": 10352482.69
    },
    {
        "date": "2018-09-25",
        "open": 57.94,
        "high": 58.08,
        "low": 54.33,
        "close": 57.57,
        "volume_ltc": 246934.35,
        "volume_usd": 13918199.03
    },
    {
        "date": "2018-09-26",
        "open": 57.57,
        "high": 59.78,
        "low": 56.37,
        "close": 57.21,
        "volume_ltc": 183266.01,
        "volume_usd": 10602570.32
    },
    {
        "date": "2018-09-27",
        "open": 57.21,
        "high": 65.6,
        "low": 56.68,
        "close": 63.11,
        "volume_ltc": 383236.46,
        "volume_usd": 23798594.14
    },
    {
        "date": "2018-09-28",
        "open": 63.11,
        "high": 64.68,
        "low": 60.12,
        "close": 61.75,
        "volume_ltc": 179051.88,
        "volume_usd": 11130512.53
    },
    {
        "date": "2018-09-29",
        "open": 61.75,
        "high": 62.36,
        "low": 59.05,
        "close": 61.45,
        "volume_ltc": 112461.91,
        "volume_usd": 6842964.12
    },
    {
        "date": "2018-09-30",
        "open": 61.45,
        "high": 62.99,
        "low": 59.76,
        "close": 61.05,
        "volume_ltc": 133090.27,
        "volume_usd": 8104877.81
    },
    {
        "date": "2018-10-01",
        "open": 61.05,
        "high": 61.8,
        "low": 59.23,
        "close": 60.22,
        "volume_ltc": 132603.2,
        "volume_usd": 8009840.33
    },
    {
        "date": "2018-10-02",
        "open": 60.22,
        "high": 61.3,
        "low": 58.6,
        "close": 59.2,
        "volume_ltc": 106921.89,
        "volume_usd": 6404652.31
    },
    {
        "date": "2018-10-03",
        "open": 59.2,
        "high": 59.32,
        "low": 56.55,
        "close": 57.25,
        "volume_ltc": 140498.13,
        "volume_usd": 8075197.11
    },
    {
        "date": "2018-10-04",
        "open": 57.25,
        "high": 58.9,
        "low": 57.08,
        "close": 58,
        "volume_ltc": 88523.49,
        "volume_usd": 5161534.05
    },
    {
        "date": "2018-10-05",
        "open": 58,
        "high": 59.45,
        "low": 57.23,
        "close": 58.47,
        "volume_ltc": 84392.18,
        "volume_usd": 4902017.67
    },
    {
        "date": "2018-10-06",
        "open": 58.47,
        "high": 58.67,
        "low": 56.7,
        "close": 57.7,
        "volume_ltc": 61074.98,
        "volume_usd": 3520809.29
    },
    {
        "date": "2018-10-07",
        "open": 57.7,
        "high": 58.22,
        "low": 56.85,
        "close": 57.9,
        "volume_ltc": 53935.11,
        "volume_usd": 3105661.63
    },
    {
        "date": "2018-10-08",
        "open": 57.9,
        "high": 59.79,
        "low": 57.36,
        "close": 59.24,
        "volume_ltc": 102008.01,
        "volume_usd": 5991199.8
    },
    {
        "date": "2018-10-09",
        "open": 59.24,
        "high": 59.4,
        "low": 58.02,
        "close": 58.43,
        "volume_ltc": 60769.49,
        "volume_usd": 3561212.15
    },
    {
        "date": "2018-10-10",
        "open": 58.43,
        "high": 58.46,
        "low": 56.85,
        "close": 57.49,
        "volume_ltc": 90734.4,
        "volume_usd": 5211529.05
    },
    {
        "date": "2018-10-11",
        "open": 57.49,
        "high": 57.49,
        "low": 50.04,
        "close": 50.55,
        "volume_ltc": 356799.37,
        "volume_usd": 18675095.1
    },
    {
        "date": "2018-10-12",
        "open": 50.55,
        "high": 53.43,
        "low": 50.15,
        "close": 53.03,
        "volume_ltc": 139811.97,
        "volume_usd": 7286078.4
    },
    {
        "date": "2018-10-13",
        "open": 53.03,
        "high": 53.85,
        "low": 52.52,
        "close": 53.05,
        "volume_ltc": 74551.19,
        "volume_usd": 3966962.55
    },
    {
        "date": "2018-10-14",
        "open": 53.05,
        "high": 53.35,
        "low": 51.1,
        "close": 51.36,
        "volume_ltc": 69342.8,
        "volume_usd": 3630176.5
    },
    {
        "date": "2018-10-15",
        "open": 51.36,
        "high": 56.77,
        "low": 51.01,
        "close": 53.39,
        "volume_ltc": 295022.87,
        "volume_usd": 15860780.45
    },
    {
        "date": "2018-10-16",
        "open": 53.39,
        "high": 53.44,
        "low": 53.39,
        "close": 53.44,
        "volume_ltc": 0,
        "volume_usd": 0
    },
    {
        "date": "2018-10-17",
        "open": 53.1,
        "high": 53.24,
        "low": 52.25,
        "close": 52.81,
        "volume_ltc": 102032.11,
        "volume_usd": 5374713.5
    },
    {
        "date": "2018-10-18",
        "open": 52.81,
        "high": 53.39,
        "low": 51.01,
        "close": 51.73,
        "volume_ltc": 82174.6,
        "volume_usd": 4286196.91
    },
    {
        "date": "2018-10-19",
        "open": 51.73,
        "high": 53.12,
        "low": 51.47,
        "close": 52.5,
        "volume_ltc": 81075.03,
        "volume_usd": 4244240.37
    },
    {
        "date": "2018-10-20",
        "open": 52.5,
        "high": 53,
        "low": 52.08,
        "close": 52.83,
        "volume_ltc": 53320.38,
        "volume_usd": 2803078.65
    },
    {
        "date": "2018-10-21",
        "open": 52.83,
        "high": 53.11,
        "low": 52.03,
        "close": 52.23,
        "volume_ltc": 50064.64,
        "volume_usd": 2638376.42
    },
    {
        "date": "2018-10-22",
        "open": 52.23,
        "high": 52.49,
        "low": 51.4,
        "close": 51.67,
        "volume_ltc": 68519.49,
        "volume_usd": 3553547.81
    },
    {
        "date": "2018-10-23",
        "open": 51.67,
        "high": 52.49,
        "low": 51.4,
        "close": 52.1,
        "volume_ltc": 63509.19,
        "volume_usd": 3293643.28
    },
    {
        "date": "2018-10-24",
        "open": 52.1,
        "high": 52.59,
        "low": 51.7,
        "close": 51.85,
        "volume_ltc": 61781.25,
        "volume_usd": 3218217.57
    },
    {
        "date": "2018-10-25",
        "open": 51.85,
        "high": 51.96,
        "low": 51.54,
        "close": 51.71,
        "volume_ltc": 40780.03,
        "volume_usd": 2109990.65
    },
    {
        "date": "2018-10-26",
        "open": 51.71,
        "high": 52.38,
        "low": 51.16,
        "close": 51.59,
        "volume_ltc": 61266.43,
        "volume_usd": 3166802.58
    },
    {
        "date": "2018-10-27",
        "open": 51.59,
        "high": 51.82,
        "low": 51.3,
        "close": 51.53,
        "volume_ltc": 34674.63,
        "volume_usd": 1786316.2
    },
    {
        "date": "2018-10-28",
        "open": 51.53,
        "high": 51.66,
        "low": 51.11,
        "close": 51.53,
        "volume_ltc": 37565.28,
        "volume_usd": 1930645.5
    },
    {
        "date": "2018-10-29",
        "open": 51.53,
        "high": 51.63,
        "low": 47.34,
        "close": 48.44,
        "volume_ltc": 155677.43,
        "volume_usd": 7645676.5
    },
    {
        "date": "2018-10-30",
        "open": 48.44,
        "high": 49.15,
        "low": 48.36,
        "close": 48.95,
        "volume_ltc": 75959.68,
        "volume_usd": 3704735.5
    },
    {
        "date": "2018-10-31",
        "open": 48.95,
        "high": 50.32,
        "low": 47.6,
        "close": 49.47,
        "volume_ltc": 87354.81,
        "volume_usd": 4289513.06
    },
    {
        "date": "2018-11-01",
        "open": 49.47,
        "high": 50.45,
        "low": 49.4,
        "close": 50.19,
        "volume_ltc": 64196.39,
        "volume_usd": 3199251.1
    },
    {
        "date": "2018-11-02",
        "open": 50.19,
        "high": 51.66,
        "low": 50.08,
        "close": 51.13,
        "volume_ltc": 68870.11,
        "volume_usd": 3510457.98
    },
    {
        "date": "2018-11-03",
        "open": 51.13,
        "high": 51.25,
        "low": 50.34,
        "close": 50.61,
        "volume_ltc": 41411.14,
        "volume_usd": 2105011.84
    },
    {
        "date": "2018-11-04",
        "open": 50.61,
        "high": 55.94,
        "low": 50.47,
        "close": 53.88,
        "volume_ltc": 140350.55,
        "volume_usd": 7533090.33
    },
    {
        "date": "2018-11-05",
        "open": 53.88,
        "high": 54.7,
        "low": 52.58,
        "close": 53.45,
        "volume_ltc": 98711.96,
        "volume_usd": 5273113.93
    },
    {
        "date": "2018-11-06",
        "open": 53.45,
        "high": 55.98,
        "low": 53.43,
        "close": 55.84,
        "volume_ltc": 135035.44,
        "volume_usd": 7344402.38
    },
    {
        "date": "2018-11-07",
        "open": 55.84,
        "high": 56.4,
        "low": 53.3,
        "close": 53.82,
        "volume_ltc": 115428.72,
        "volume_usd": 6328880.82
    },
    {
        "date": "2018-11-08",
        "open": 53.82,
        "high": 54.45,
        "low": 51.9,
        "close": 52.04,
        "volume_ltc": 84158.76,
        "volume_usd": 4461404.57
    },
    {
        "date": "2018-11-09",
        "open": 52.04,
        "high": 52.53,
        "low": 51.07,
        "close": 51.66,
        "volume_ltc": 69029.83,
        "volume_usd": 3569829.48
    },
    {
        "date": "2018-11-10",
        "open": 51.66,
        "high": 52.23,
        "low": 51.45,
        "close": 51.86,
        "volume_ltc": 26446.5,
        "volume_usd": 1372234.5
    },
    {
        "date": "2018-11-11",
        "open": 51.86,
        "high": 51.99,
        "low": 49.5,
        "close": 50.8,
        "volume_ltc": 61890.97,
        "volume_usd": 3130894.04
    },
    {
        "date": "2018-11-12",
        "open": 50.8,
        "high": 51.34,
        "low": 50,
        "close": 50.33,
        "volume_ltc": 60290.29,
        "volume_usd": 3048015.96
    },
    {
        "date": "2018-11-13",
        "open": 50.33,
        "high": 50.43,
        "low": 48.31,
        "close": 48.84,
        "volume_ltc": 92919.55,
        "volume_usd": 4594608.72
    },
    {
        "date": "2018-11-14",
        "open": 48.84,
        "high": 49.95,
        "low": 40.06,
        "close": 42.69,
        "volume_ltc": 525331.39,
        "volume_usd": 22827075.56
    },
    {
        "date": "2018-11-15",
        "open": 42.69,
        "high": 43.74,
        "low": 39.41,
        "close": 43.36,
        "volume_ltc": 301599,
        "volume_usd": 12702582.57
    },
    {
        "date": "2018-11-16",
        "open": 43.36,
        "high": 43.61,
        "low": 41.25,
        "close": 41.73,
        "volume_ltc": 115269.62,
        "volume_usd": 4893664.92
    },
    {
        "date": "2018-11-17",
        "open": 41.73,
        "high": 41.75,
        "low": 41.15,
        "close": 41.54,
        "volume_ltc": 65666.56,
        "volume_usd": 2720506.51
    },
    {
        "date": "2018-11-18",
        "open": 41.54,
        "high": 42.95,
        "low": 41.5,
        "close": 41.86,
        "volume_ltc": 67593.77,
        "volume_usd": 2841304.77
    },
    {
        "date": "2018-11-19",
        "open": 41.86,
        "high": 41.87,
        "low": 34.73,
        "close": 35.75,
        "volume_ltc": 488783.21,
        "volume_usd": 18238406.92
    },
    {
        "date": "2018-11-20",
        "open": 35.75,
        "high": 37.5,
        "low": 30.25,
        "close": 32.28,
        "volume_ltc": 737208.95,
        "volume_usd": 24541104.14
    },
    {
        "date": "2018-11-21",
        "open": 32.28,
        "high": 34.44,
        "low": 31.06,
        "close": 34.29,
        "volume_ltc": 353847.55,
        "volume_usd": 11621298.66
    },
    {
        "date": "2018-11-22",
        "open": 34.29,
        "high": 34.7,
        "low": 31.13,
        "close": 31.3,
        "volume_ltc": 200443.3,
        "volume_usd": 6662140.89
    },
    {
        "date": "2018-11-23",
        "open": 31.3,
        "high": 32.77,
        "low": 30.33,
        "close": 31.69,
        "volume_ltc": 241295.09,
        "volume_usd": 7557451.08
    },
    {
        "date": "2018-11-24",
        "open": 31.69,
        "high": 32.98,
        "low": 27.67,
        "close": 28.6,
        "volume_ltc": 327796.99,
        "volume_usd": 9755649.36
    },
    {
        "date": "2018-11-25",
        "open": 28.6,
        "high": 31.92,
        "low": 26.37,
        "close": 30.43,
        "volume_ltc": 540573.9,
        "volume_usd": 15430042.66
    },
    {
        "date": "2018-11-26",
        "open": 30.43,
        "high": 31.8,
        "low": 27.56,
        "close": 29.1,
        "volume_ltc": 451762.94,
        "volume_usd": 13387985.1
    },
    {
        "date": "2018-11-27",
        "open": 29.1,
        "high": 31.32,
        "low": 28.23,
        "close": 30.85,
        "volume_ltc": 276649.15,
        "volume_usd": 8196567.04
    },
    {
        "date": "2018-11-28",
        "open": 30.85,
        "high": 36,
        "low": 30.71,
        "close": 34.43,
        "volume_ltc": 459881.44,
        "volume_usd": 15506907.84
    },
    {
        "date": "2018-11-29",
        "open": 34.43,
        "high": 35.4,
        "low": 32.7,
        "close": 33.5,
        "volume_ltc": 281310.58,
        "volume_usd": 9522686.23
    },
    {
        "date": "2018-11-30",
        "open": 33.5,
        "high": 34.15,
        "low": 30.77,
        "close": 31.66,
        "volume_ltc": 232383.52,
        "volume_usd": 7471132.76
    },
    {
        "date": "2018-12-01",
        "open": 31.65,
        "high": 34.8,
        "low": 31.02,
        "close": 33.77,
        "volume_ltc": 182729.46,
        "volume_usd": 6060324.98
    },
    {
        "date": "2018-12-02",
        "open": 33.77,
        "high": 34.6,
        "low": 32.78,
        "close": 33.34,
        "volume_ltc": 165147.07,
        "volume_usd": 5549736.66
    },
    {
        "date": "2018-12-03",
        "open": 33.34,
        "high": 33.45,
        "low": 29.56,
        "close": 30.5,
        "volume_ltc": 253956.81,
        "volume_usd": 7910329.44
    },
    {
        "date": "2018-12-04",
        "open": 30.5,
        "high": 31.86,
        "low": 29.5,
        "close": 30.71,
        "volume_ltc": 175540.82,
        "volume_usd": 5406859.09
    },
    {
        "date": "2018-12-05",
        "open": 30.71,
        "high": 31.06,
        "low": 28.58,
        "close": 28.71,
        "volume_ltc": 208970.1,
        "volume_usd": 6197846.05
    },
    {
        "date": "2018-12-06",
        "open": 28.71,
        "high": 30.2,
        "low": 25.73,
        "close": 26.25,
        "volume_ltc": 322613.92,
        "volume_usd": 9015919
    },
    {
        "date": "2018-12-07",
        "open": 26.25,
        "high": 26.34,
        "low": 22.24,
        "close": 24.77,
        "volume_ltc": 711696.86,
        "volume_usd": 17454260.19
    },
    {
        "date": "2018-12-08",
        "open": 24.77,
        "high": 26.7,
        "low": 22.95,
        "close": 24.19,
        "volume_ltc": 399853.54,
        "volume_usd": 9805793.1
    },
    {
        "date": "2018-12-09",
        "open": 24.19,
        "high": 26.62,
        "low": 24.06,
        "close": 25.3,
        "volume_ltc": 216983.85,
        "volume_usd": 5516359.81
    },
    {
        "date": "2018-12-10",
        "open": 25.3,
        "high": 25.65,
        "low": 23.55,
        "close": 23.97,
        "volume_ltc": 203874.25,
        "volume_usd": 4977740.35
    },
    {
        "date": "2018-12-11",
        "open": 23.97,
        "high": 24.38,
        "low": 22.72,
        "close": 23.28,
        "volume_ltc": 164065.25,
        "volume_usd": 3852646.34
    },
    {
        "date": "2018-12-12",
        "open": 23.22,
        "high": 24.89,
        "low": 23.01,
        "close": 24,
        "volume_ltc": 162500.83,
        "volume_usd": 3923099.43
    },
    {
        "date": "2018-12-13",
        "open": 24,
        "high": 24.17,
        "low": 22.68,
        "close": 22.84,
        "volume_ltc": 172173.12,
        "volume_usd": 4032087.53
    },
    {
        "date": "2018-12-14",
        "open": 22.84,
        "high": 23.46,
        "low": 22.17,
        "close": 23.17,
        "volume_ltc": 213934.62,
        "volume_usd": 4878512.25
    },
    {
        "date": "2018-12-15",
        "open": 23.17,
        "high": 23.83,
        "low": 22.89,
        "close": 23.4,
        "volume_ltc": 152883.92,
        "volume_usd": 3562657.16
    },
    {
        "date": "2018-12-16",
        "open": 23.4,
        "high": 26.67,
        "low": 23.33,
        "close": 25.24,
        "volume_ltc": 411657.61,
        "volume_usd": 10543056.06
    },
    {
        "date": "2018-12-17",
        "open": 25.24,
        "high": 30.48,
        "low": 25.15,
        "close": 28.88,
        "volume_ltc": 484721.53,
        "volume_usd": 13696876.84
    },
    {
        "date": "2018-12-18",
        "open": 28.88,
        "high": 30.2,
        "low": 27.71,
        "close": 30.12,
        "volume_ltc": 285005.48,
        "volume_usd": 8212543.71
    },
    {
        "date": "2018-12-19",
        "open": 30.12,
        "high": 31.59,
        "low": 28.64,
        "close": 29.05,
        "volume_ltc": 446339.18,
        "volume_usd": 13493901.87
    },
    {
        "date": "2018-12-20",
        "open": 29.05,
        "high": 33.2,
        "low": 28.66,
        "close": 32.36,
        "volume_ltc": 482241.62,
        "volume_usd": 15137946.39
    },
    {
        "date": "2018-12-21",
        "open": 32.36,
        "high": 33.06,
        "low": 29.62,
        "close": 30.2,
        "volume_ltc": 444190.39,
        "volume_usd": 13956015.03
    },
    {
        "date": "2018-12-22",
        "open": 30.2,
        "high": 31.6,
        "low": 29.73,
        "close": 31.59,
        "volume_ltc": 136704.59,
        "volume_usd": 4177458.57
    },
    {
        "date": "2018-12-23",
        "open": 31.59,
        "high": 33.84,
        "low": 31.43,
        "close": 33.07,
        "volume_ltc": 258853.22,
        "volume_usd": 8471147.46
    },
    {
        "date": "2018-12-24",
        "open": 33.07,
        "high": 36.78,
        "low": 32.52,
        "close": 33.05,
        "volume_ltc": 504870.25,
        "volume_usd": 17584193.8
    },
    {
        "date": "2018-12-25",
        "open": 33.05,
        "high": 33.05,
        "low": 29.66,
        "close": 30.77,
        "volume_ltc": 297121.66,
        "volume_usd": 9136381.49
    },
    {
        "date": "2018-12-26",
        "open": 30.77,
        "high": 31.89,
        "low": 28.9,
        "close": 30.52,
        "volume_ltc": 248511.84,
        "volume_usd": 7525060.41
    },
    {
        "date": "2018-12-27",
        "open": 30.52,
        "high": 31.09,
        "low": 27.48,
        "close": 27.72,
        "volume_ltc": 223032.66,
        "volume_usd": 6419969.31
    },
    {
        "date": "2018-12-28",
        "open": 27.72,
        "high": 33.53,
        "low": 27.72,
        "close": 32.22,
        "volume_ltc": 312456.67,
        "volume_usd": 9701505.92
    },
    {
        "date": "2018-12-29",
        "open": 32.22,
        "high": 33.24,
        "low": 30.3,
        "close": 30.69,
        "volume_ltc": 208135.59,
        "volume_usd": 6632606.1
    },
    {
        "date": "2018-12-30",
        "open": 30.69,
        "high": 31.95,
        "low": 29.95,
        "close": 31.56,
        "volume_ltc": 149556.15,
        "volume_usd": 4657326.72
    },
    {
        "date": "2018-12-31",
        "open": 31.56,
        "high": 31.62,
        "low": 29.42,
        "close": 29.78,
        "volume_ltc": 170381.65,
        "volume_usd": 5176293.63
    }
];
const data1 = [
    {
        "date": "2018-01-01",
        "open": 741.27,
        "high": 764.97,
        "low": 727.14,
        "close": 759.03,
        "volume_eth": 83751.51,
        "volume_usd": 62482198.79
    },
    {
        "date": "2018-01-02",
        "open": 759.03,
        "high": 878.5,
        "low": 759.02,
        "close": 865,
        "volume_eth": 335080.13,
        "volume_usd": 282663894.66
    },
    {
        "date": "2018-01-03",
        "open": 865,
        "high": 949.98,
        "low": 850.11,
        "close": 938.31,
        "volume_eth": 268708.47,
        "volume_usd": 241097653.15
    },
    {
        "date": "2018-01-04",
        "open": 938.31,
        "high": 994.89,
        "low": 906.01,
        "close": 949,
        "volume_eth": 282568.57,
        "volume_usd": 269232364.82
    },
    {
        "date": "2018-01-05",
        "open": 949,
        "high": 1015,
        "low": 935,
        "close": 969.27,
        "volume_eth": 257910.95,
        "volume_usd": 251956164.03
    },
    {
        "date": "2018-01-06",
        "open": 969.27,
        "high": 1009.11,
        "low": 961.23,
        "close": 1006.68,
        "volume_eth": 119847.93,
        "volume_usd": 118766448.47
    },
    {
        "date": "2018-01-07",
        "open": 1006.68,
        "high": 1118.3,
        "low": 1003.02,
        "close": 1118.3,
        "volume_eth": 165746.64,
        "volume_usd": 176519091.6
    },
    {
        "date": "2018-01-08",
        "open": 1118.3,
        "high": 1228.99,
        "low": 951,
        "close": 1137.01,
        "volume_eth": 349324.21,
        "volume_usd": 395312780.75
    },
    {
        "date": "2018-01-09",
        "open": 1137.01,
        "high": 1297.58,
        "low": 1119,
        "close": 1290.01,
        "volume_eth": 254757.33,
        "volume_usd": 308934115.32
    },
    {
        "date": "2018-01-10",
        "open": 1290.01,
        "high": 1386.99,
        "low": 1207.61,
        "close": 1246.95,
        "volume_eth": 348207.24,
        "volume_usd": 455622468.29
    },
    {
        "date": "2018-01-11",
        "open": 1246.95,
        "high": 1335,
        "low": 1083.97,
        "close": 1137.01,
        "volume_eth": 350252.85,
        "volume_usd": 420030363.98
    },
    {
        "date": "2018-01-12",
        "open": 1137.01,
        "high": 1285,
        "low": 1089.18,
        "close": 1260,
        "volume_eth": 190313.92,
        "volume_usd": 230563476.08
    },
    {
        "date": "2018-01-13",
        "open": 1260,
        "high": 1419.96,
        "low": 1259.99,
        "close": 1386.02,
        "volume_eth": 183918.99,
        "volume_usd": 248668724.98
    },
    {
        "date": "2018-01-14",
        "open": 1386.02,
        "high": 1389.11,
        "low": 1256.01,
        "close": 1365.46,
        "volume_eth": 131600.19,
        "volume_usd": 175703182.18
    },
    {
        "date": "2018-01-15",
        "open": 1365.46,
        "high": 1380.97,
        "low": 1269.01,
        "close": 1278.63,
        "volume_eth": 119057.72,
        "volume_usd": 157026819.85
    },
    {
        "date": "2018-01-16",
        "open": 1278.63,
        "high": 1285.57,
        "low": 852.01,
        "close": 1080,
        "volume_eth": 579557.94,
        "volume_usd": 617688885.39
    },
    {
        "date": "2018-01-17",
        "open": 1080,
        "high": 1164.4,
        "low": 757,
        "close": 1028.06,
        "volume_eth": 791710.8,
        "volume_usd": 736027535.89
    },
    {
        "date": "2018-01-18",
        "open": 1028.06,
        "high": 1100,
        "low": 951,
        "close": 1025.78,
        "volume_eth": 336528.66,
        "volume_usd": 350676894.63
    },
    {
        "date": "2018-01-19",
        "open": 1025.78,
        "high": 1093,
        "low": 994.4,
        "close": 1037.45,
        "volume_eth": 158648.34,
        "volume_usd": 164823297.11
    },
    {
        "date": "2018-01-20",
        "open": 1037.45,
        "high": 1164.97,
        "low": 1036.08,
        "close": 1150.02,
        "volume_eth": 158694.23,
        "volume_usd": 176404493.33
    },
    {
        "date": "2018-01-21",
        "open": 1150.02,
        "high": 1151,
        "low": 1011,
        "close": 1047.13,
        "volume_eth": 147787.86,
        "volume_usd": 158124230.09
    },
    {
        "date": "2018-01-22",
        "open": 1047.13,
        "high": 1080,
        "low": 917,
        "close": 999.68,
        "volume_eth": 204309.19,
        "volume_usd": 202377929.3
    },
    {
        "date": "2018-01-23",
        "open": 999.68,
        "high": 1019,
        "low": 905,
        "close": 984.03,
        "volume_eth": 201639.94,
        "volume_usd": 196387474.02
    },
    {
        "date": "2018-01-24",
        "open": 984.03,
        "high": 1056.99,
        "low": 952.68,
        "close": 1056.99,
        "volume_eth": 149999.5,
        "volume_usd": 151249762.76
    },
    {
        "date": "2018-01-25",
        "open": 1056.99,
        "high": 1098.74,
        "low": 1014.9,
        "close": 1040,
        "volume_eth": 159131.45,
        "volume_usd": 168874122.08
    },
    {
        "date": "2018-01-26",
        "open": 1040,
        "high": 1071.75,
        "low": 987.54,
        "close": 1045.57,
        "volume_eth": 133679.04,
        "volume_usd": 138418187.04
    },
    {
        "date": "2018-01-27",
        "open": 1045.57,
        "high": 1118.98,
        "low": 1030,
        "close": 1100,
        "volume_eth": 111977.09,
        "volume_usd": 120570461.77
    },
    {
        "date": "2018-01-28",
        "open": 1100,
        "high": 1224,
        "low": 1087.94,
        "close": 1215.01,
        "volume_eth": 164654.9,
        "volume_usd": 191902216.48
    },
    {
        "date": "2018-01-29",
        "open": 1215.01,
        "high": 1221.74,
        "low": 1137.2,
        "close": 1162.27,
        "volume_eth": 120882.1,
        "volume_usd": 141102467.69
    },
    {
        "date": "2018-01-30",
        "open": 1162.27,
        "high": 1171,
        "low": 1025,
        "close": 1054.39,
        "volume_eth": 220058.79,
        "volume_usd": 239959019.68
    },
    {
        "date": "2018-01-31",
        "open": 1054.39,
        "high": 1121.03,
        "low": 1013.25,
        "close": 1105,
        "volume_eth": 167767.66,
        "volume_usd": 179717810.57
    },
    {
        "date": "2018-02-01",
        "open": 1105,
        "high": 1143,
        "low": 930,
        "close": 1017.48,
        "volume_eth": 308093.39,
        "volume_usd": 321672225.12
    },
    {
        "date": "2018-02-02",
        "open": 1017.48,
        "high": 1020.48,
        "low": 726.43,
        "close": 911.99,
        "volume_eth": 544474.95,
        "volume_usd": 487774968.42
    },
    {
        "date": "2018-02-03",
        "open": 911.99,
        "high": 998,
        "low": 841.61,
        "close": 969.4,
        "volume_eth": 190127.22,
        "volume_usd": 177128763.25
    },
    {
        "date": "2018-02-04",
        "open": 969.4,
        "high": 970.4,
        "low": 783.27,
        "close": 826,
        "volume_eth": 206467.92,
        "volume_usd": 179475868.51
    },
    {
        "date": "2018-02-05",
        "open": 826,
        "high": 857.5,
        "low": 615,
        "close": 693.54,
        "volume_eth": 556041.26,
        "volume_usd": 400225832.72
    },
    {
        "date": "2018-02-06",
        "open": 693.54,
        "high": 807.5,
        "low": 555.56,
        "close": 783.83,
        "volume_eth": 724904.53,
        "volume_usd": 487312087.6
    },
    {
        "date": "2018-02-07",
        "open": 783.83,
        "high": 864.49,
        "low": 718.03,
        "close": 750.04,
        "volume_eth": 342377.72,
        "volume_usd": 271817279.01
    },
    {
        "date": "2018-02-08",
        "open": 750.04,
        "high": 843,
        "low": 747.82,
        "close": 812,
        "volume_eth": 179532.03,
        "volume_usd": 144121843.56
    },
    {
        "date": "2018-02-09",
        "open": 812,
        "high": 879.2,
        "low": 780,
        "close": 875.99,
        "volume_eth": 163125.96,
        "volume_usd": 136643584.82
    },
    {
        "date": "2018-02-10",
        "open": 875.99,
        "high": 908.76,
        "low": 815,
        "close": 849.47,
        "volume_eth": 153410.82,
        "volume_usd": 132968606.31
    },
    {
        "date": "2018-02-11",
        "open": 849.47,
        "high": 851.77,
        "low": 780,
        "close": 811.35,
        "volume_eth": 99152.51,
        "volume_usd": 81308495.68
    },
    {
        "date": "2018-02-12",
        "open": 811.35,
        "high": 874.03,
        "low": 810.99,
        "close": 864.4,
        "volume_eth": 88046.97,
        "volume_usd": 75144272.41
    },
    {
        "date": "2018-02-13",
        "open": 864.4,
        "high": 867.48,
        "low": 826,
        "close": 840.49,
        "volume_eth": 69322.43,
        "volume_usd": 58507170.74
    },
    {
        "date": "2018-02-14",
        "open": 840.49,
        "high": 924.7,
        "low": 839.45,
        "close": 920.27,
        "volume_eth": 163475.74,
        "volume_usd": 145467815.14
    },
    {
        "date": "2018-02-15",
        "open": 920.27,
        "high": 948.23,
        "low": 905.49,
        "close": 929.3,
        "volume_eth": 131225.07,
        "volume_usd": 121775173.56
    },
    {
        "date": "2018-02-16",
        "open": 929.3,
        "high": 944.92,
        "low": 910.8,
        "close": 936.02,
        "volume_eth": 79102.83,
        "volume_usd": 73649640.03
    },
    {
        "date": "2018-02-17",
        "open": 936.02,
        "high": 976.79,
        "low": 934.2,
        "close": 975,
        "volume_eth": 72522.39,
        "volume_usd": 69779993.19
    },
    {
        "date": "2018-02-18",
        "open": 975,
        "high": 982.99,
        "low": 909.1,
        "close": 912.41,
        "volume_eth": 94527.04,
        "volume_usd": 89097714.86
    },
    {
        "date": "2018-02-19",
        "open": 912.41,
        "high": 956,
        "low": 911,
        "close": 939.01,
        "volume_eth": 51464.5,
        "volume_usd": 48264429.44
    },
    {
        "date": "2018-02-20",
        "open": 939.01,
        "high": 958,
        "low": 875,
        "close": 884.76,
        "volume_eth": 108323.32,
        "volume_usd": 100249666.54
    },
    {
        "date": "2018-02-21",
        "open": 884.76,
        "high": 908.15,
        "low": 817.01,
        "close": 840.34,
        "volume_eth": 128091.08,
        "volume_usd": 110099877.7
    },
    {
        "date": "2018-02-22",
        "open": 840.34,
        "high": 870,
        "low": 790.01,
        "close": 806,
        "volume_eth": 101411.56,
        "volume_usd": 83281536.33
    },
    {
        "date": "2018-02-23",
        "open": 806,
        "high": 883,
        "low": 786.4,
        "close": 854.01,
        "volume_eth": 99595.59,
        "volume_usd": 83650514.41
    },
    {
        "date": "2018-02-24",
        "open": 854.01,
        "high": 874.66,
        "low": 808.37,
        "close": 833.2,
        "volume_eth": 63968.83,
        "volume_usd": 53690578.01
    },
    {
        "date": "2018-02-25",
        "open": 833.2,
        "high": 849.26,
        "low": 816.89,
        "close": 841.96,
        "volume_eth": 38291.2,
        "volume_usd": 31990949.42
    },
    {
        "date": "2018-02-26",
        "open": 841.96,
        "high": 877.5,
        "low": 835,
        "close": 867.09,
        "volume_eth": 63250.59,
        "volume_usd": 54427597.14
    },
    {
        "date": "2018-02-27",
        "open": 867.09,
        "high": 894,
        "low": 860.97,
        "close": 870.98,
        "volume_eth": 60578.72,
        "volume_usd": 53084539.39
    },
    {
        "date": "2018-02-28",
        "open": 870.98,
        "high": 887.5,
        "low": 848.21,
        "close": 849.99,
        "volume_eth": 58133.38,
        "volume_usd": 50595433.19
    },
    {
        "date": "2018-03-01",
        "open": 849.99,
        "high": 878,
        "low": 845.54,
        "close": 868.74,
        "volume_eth": 48899.31,
        "volume_usd": 42275824.21
    },
    {
        "date": "2018-03-02",
        "open": 868.74,
        "high": 873.12,
        "low": 846.97,
        "close": 854.31,
        "volume_eth": 43776.13,
        "volume_usd": 37668051.86
    },
    {
        "date": "2018-03-03",
        "open": 854.31,
        "high": 866.72,
        "low": 851.04,
        "close": 854.34,
        "volume_eth": 33187.93,
        "volume_usd": 28546722.25
    },
    {
        "date": "2018-03-04",
        "open": 854.34,
        "high": 865,
        "low": 836.37,
        "close": 861.74,
        "volume_eth": 32005.49,
        "volume_usd": 27288599.25
    },
    {
        "date": "2018-03-05",
        "open": 861.74,
        "high": 866,
        "low": 848.83,
        "close": 848.83,
        "volume_eth": 38758.29,
        "volume_usd": 33279801.24
    },
    {
        "date": "2018-03-06",
        "open": 848.83,
        "high": 849.97,
        "low": 801.01,
        "close": 815.43,
        "volume_eth": 57328.2,
        "volume_usd": 47392056.25
    },
    {
        "date": "2018-03-07",
        "open": 815.43,
        "high": 825,
        "low": 724,
        "close": 751.38,
        "volume_eth": 127281.5,
        "volume_usd": 96964275.13
    },
    {
        "date": "2018-03-08",
        "open": 751.38,
        "high": 774,
        "low": 686,
        "close": 698.83,
        "volume_eth": 103420.35,
        "volume_usd": 75069227.76
    },
    {
        "date": "2018-03-09",
        "open": 698.83,
        "high": 734,
        "low": 641.6,
        "close": 728.46,
        "volume_eth": 162041.5,
        "volume_usd": 110795291.46
    },
    {
        "date": "2018-03-10",
        "open": 728.46,
        "high": 749,
        "low": 680.2,
        "close": 683.6,
        "volume_eth": 66035.23,
        "volume_usd": 47570441.83
    },
    {
        "date": "2018-03-11",
        "open": 683.6,
        "high": 735,
        "low": 666,
        "close": 719.79,
        "volume_eth": 66887.24,
        "volume_usd": 46895001.95
    },
    {
        "date": "2018-03-12",
        "open": 719.79,
        "high": 739,
        "low": 678,
        "close": 696.51,
        "volume_eth": 71751.41,
        "volume_usd": 50752087.42
    },
    {
        "date": "2018-03-13",
        "open": 696.51,
        "high": 713.45,
        "low": 679.78,
        "close": 690.39,
        "volume_eth": 61445.84,
        "volume_usd": 42528427.11
    },
    {
        "date": "2018-03-14",
        "open": 690.39,
        "high": 702.5,
        "low": 585.52,
        "close": 614.63,
        "volume_eth": 142152.46,
        "volume_usd": 90311315.9
    },
    {
        "date": "2018-03-15",
        "open": 614.63,
        "high": 621.47,
        "low": 571.16,
        "close": 610.99,
        "volume_eth": 143869,
        "volume_usd": 85999396.91
    },
    {
        "date": "2018-03-16",
        "open": 610.99,
        "high": 626.13,
        "low": 585,
        "close": 600.52,
        "volume_eth": 87874.25,
        "volume_usd": 53600255.89
    },
    {
        "date": "2018-03-17",
        "open": 600.52,
        "high": 609.94,
        "low": 541.11,
        "close": 549.79,
        "volume_eth": 97573.38,
        "volume_usd": 55823645.71
    },
    {
        "date": "2018-03-18",
        "open": 549.79,
        "high": 574,
        "low": 450,
        "close": 538,
        "volume_eth": 409384.42,
        "volume_usd": 204673475.08
    },
    {
        "date": "2018-03-19",
        "open": 538,
        "high": 560.9,
        "low": 516.4,
        "close": 555.55,
        "volume_eth": 177641.14,
        "volume_usd": 96077916.73
    },
    {
        "date": "2018-03-20",
        "open": 555.55,
        "high": 567.04,
        "low": 516.53,
        "close": 558,
        "volume_eth": 148891.98,
        "volume_usd": 81288804.8
    },
    {
        "date": "2018-03-21",
        "open": 558,
        "high": 589.75,
        "low": 545.2,
        "close": 559.98,
        "volume_eth": 115161.56,
        "volume_usd": 65506531.66
    },
    {
        "date": "2018-03-22",
        "open": 559.98,
        "high": 578.73,
        "low": 517.6,
        "close": 539.89,
        "volume_eth": 92291.93,
        "volume_usd": 50071268.3
    },
    {
        "date": "2018-03-23",
        "open": 539.89,
        "high": 543.04,
        "low": 507.84,
        "close": 543.04,
        "volume_eth": 84295.53,
        "volume_usd": 43980747.44
    },
    {
        "date": "2018-03-24",
        "open": 543.04,
        "high": 545.94,
        "low": 517.7,
        "close": 519.57,
        "volume_eth": 51693.57,
        "volume_usd": 27673943.67
    },
    {
        "date": "2018-03-25",
        "open": 519.57,
        "high": 536,
        "low": 510.36,
        "close": 522.55,
        "volume_eth": 48861.72,
        "volume_usd": 25498788.29
    },
    {
        "date": "2018-03-26",
        "open": 522.55,
        "high": 525,
        "low": 466.1,
        "close": 486.75,
        "volume_eth": 144436.62,
        "volume_usd": 70502721.21
    },
    {
        "date": "2018-03-27",
        "open": 486.75,
        "high": 493,
        "low": 445,
        "close": 449,
        "volume_eth": 153118.55,
        "volume_usd": 70690800.36
    },
    {
        "date": "2018-03-28",
        "open": 449,
        "high": 464.89,
        "low": 439.18,
        "close": 445.47,
        "volume_eth": 93147.8,
        "volume_usd": 41778706.52
    },
    {
        "date": "2018-03-29",
        "open": 445.47,
        "high": 448,
        "low": 379.1,
        "close": 383.29,
        "volume_eth": 278952.74,
        "volume_usd": 112855998.33
    },
    {
        "date": "2018-03-30",
        "open": 383.29,
        "high": 411,
        "low": 365,
        "close": 394.46,
        "volume_eth": 278420.31,
        "volume_usd": 106543458.14
    },
    {
        "date": "2018-03-31",
        "open": 394.46,
        "high": 435,
        "low": 388.88,
        "close": 394.54,
        "volume_eth": 144527.54,
        "volume_usd": 58599887.94
    },
    {
        "date": "2018-04-01",
        "open": 394.54,
        "high": 400.65,
        "low": 360,
        "close": 378.18,
        "volume_eth": 108554.28,
        "volume_usd": 41008442.11
    },
    {
        "date": "2018-04-02",
        "open": 378.18,
        "high": 393.95,
        "low": 375.36,
        "close": 384,
        "volume_eth": 89596.37,
        "volume_usd": 34497306.85
    },
    {
        "date": "2018-04-03",
        "open": 384,
        "high": 421.59,
        "low": 380.89,
        "close": 416.38,
        "volume_eth": 152807.1,
        "volume_usd": 61428715.59
    },
    {
        "date": "2018-04-04",
        "open": 416.38,
        "high": 418,
        "low": 370.08,
        "close": 378.43,
        "volume_eth": 114689.84,
        "volume_usd": 44603966.69
    },
    {
        "date": "2018-04-05",
        "open": 378.43,
        "high": 387.2,
        "low": 366.54,
        "close": 381.55,
        "volume_eth": 90647.05,
        "volume_usd": 34236417.33
    },
    {
        "date": "2018-04-06",
        "open": 381.55,
        "high": 386.21,
        "low": 363.33,
        "close": 370.32,
        "volume_eth": 89315.98,
        "volume_usd": 33203912.28
    },
    {
        "date": "2018-04-07",
        "open": 370.32,
        "high": 395.9,
        "low": 369.2,
        "close": 384.61,
        "volume_eth": 59741.6,
        "volume_usd": 22970472.55
    },
    {
        "date": "2018-04-08",
        "open": 384.61,
        "high": 404.1,
        "low": 384.61,
        "close": 399.9,
        "volume_eth": 61747.81,
        "volume_usd": 24419086.11
    },
    {
        "date": "2018-04-09",
        "open": 399.9,
        "high": 432,
        "low": 388,
        "close": 398.8,
        "volume_eth": 127435.23,
        "volume_usd": 51553120.82
    },
    {
        "date": "2018-04-10",
        "open": 398.8,
        "high": 418.26,
        "low": 392.25,
        "close": 415.45,
        "volume_eth": 68843.53,
        "volume_usd": 27867928.26
    },
    {
        "date": "2018-04-11",
        "open": 415.45,
        "high": 433.83,
        "low": 410.11,
        "close": 430.81,
        "volume_eth": 88765.33,
        "volume_usd": 37324786.17
    },
    {
        "date": "2018-04-12",
        "open": 430.81,
        "high": 497,
        "low": 413.81,
        "close": 493.41,
        "volume_eth": 238534.71,
        "volume_usd": 109178070.48
    },
    {
        "date": "2018-04-13",
        "open": 493.41,
        "high": 529.36,
        "low": 481.18,
        "close": 495.22,
        "volume_eth": 224849.04,
        "volume_usd": 113460455.58
    },
    {
        "date": "2018-04-14",
        "open": 495.22,
        "high": 513.86,
        "low": 488,
        "close": 502.4,
        "volume_eth": 76110.4,
        "volume_usd": 38140848.54
    },
    {
        "date": "2018-04-15",
        "open": 502.4,
        "high": 534.57,
        "low": 502.4,
        "close": 533.74,
        "volume_eth": 97808.95,
        "volume_usd": 50914422.3
    },
    {
        "date": "2018-04-16",
        "open": 533.74,
        "high": 537.5,
        "low": 498.29,
        "close": 511.28,
        "volume_eth": 127908.24,
        "volume_usd": 65529419.96
    },
    {
        "date": "2018-04-17",
        "open": 511.28,
        "high": 521.94,
        "low": 500.49,
        "close": 502.42,
        "volume_eth": 93836.96,
        "volume_usd": 47877821.66
    },
    {
        "date": "2018-04-18",
        "open": 502.42,
        "high": 526.49,
        "low": 501.2,
        "close": 525.89,
        "volume_eth": 95960.78,
        "volume_usd": 49352794.85
    },
    {
        "date": "2018-04-19",
        "open": 525.89,
        "high": 569.95,
        "low": 521.18,
        "close": 567.29,
        "volume_eth": 127263.97,
        "volume_usd": 69420999.5
    },
    {
        "date": "2018-04-20",
        "open": 567.29,
        "high": 622.22,
        "low": 557.4,
        "close": 617.17,
        "volume_eth": 177316.95,
        "volume_usd": 103958082.68
    },
    {
        "date": "2018-04-21",
        "open": 617.17,
        "high": 624.21,
        "low": 572,
        "close": 605.16,
        "volume_eth": 100181.66,
        "volume_usd": 60376723.18
    },
    {
        "date": "2018-04-22",
        "open": 605.16,
        "high": 643.47,
        "low": 590.7,
        "close": 621,
        "volume_eth": 90613.77,
        "volume_usd": 56641400.73
    },
    {
        "date": "2018-04-23",
        "open": 621,
        "high": 647.47,
        "low": 618.7,
        "close": 642.85,
        "volume_eth": 91745.79,
        "volume_usd": 58590990.78
    },
    {
        "date": "2018-04-24",
        "open": 642.85,
        "high": 711,
        "low": 642.85,
        "close": 703.38,
        "volume_eth": 200066.58,
        "volume_usd": 137803751.2
    },
    {
        "date": "2018-04-25",
        "open": 703.38,
        "high": 704,
        "low": 578.75,
        "close": 617.49,
        "volume_eth": 324125.26,
        "volume_usd": 206525892.91
    },
    {
        "date": "2018-04-26",
        "open": 617.49,
        "high": 666.82,
        "low": 600,
        "close": 661.13,
        "volume_eth": 141137.95,
        "volume_usd": 88742659.25
    },
    {
        "date": "2018-04-27",
        "open": 661.13,
        "high": 685.91,
        "low": 639.25,
        "close": 642.77,
        "volume_eth": 111601.09,
        "volume_usd": 74188522.16
    },
    {
        "date": "2018-04-28",
        "open": 642.77,
        "high": 692.58,
        "low": 638.7,
        "close": 682,
        "volume_eth": 73630.47,
        "volume_usd": 49824657.9
    },
    {
        "date": "2018-04-29",
        "open": 682,
        "high": 696.71,
        "low": 666.04,
        "close": 687.51,
        "volume_eth": 66129.72,
        "volume_usd": 45186766.99
    },
    {
        "date": "2018-04-30",
        "open": 687.51,
        "high": 692.45,
        "low": 662.11,
        "close": 669.81,
        "volume_eth": 88961.29,
        "volume_usd": 60528460.58
    },
    {
        "date": "2018-05-01",
        "open": 669.81,
        "high": 675.01,
        "low": 627.2,
        "close": 670.75,
        "volume_eth": 150245.28,
        "volume_usd": 97704474.51
    },
    {
        "date": "2018-05-02",
        "open": 670.75,
        "high": 689.98,
        "low": 660.63,
        "close": 685.02,
        "volume_eth": 97029.73,
        "volume_usd": 65675595.56
    },
    {
        "date": "2018-05-03",
        "open": 685.02,
        "high": 784.76,
        "low": 684,
        "close": 775.51,
        "volume_eth": 181350.16,
        "volume_usd": 133925587.25
    },
    {
        "date": "2018-05-04",
        "open": 775.51,
        "high": 805.31,
        "low": 757.1,
        "close": 783.01,
        "volume_eth": 142869.13,
        "volume_usd": 111563538.97
    },
    {
        "date": "2018-05-05",
        "open": 783.01,
        "high": 824.67,
        "low": 778.5,
        "close": 812,
        "volume_eth": 93785.39,
        "volume_usd": 75657582.61
    },
    {
        "date": "2018-05-06",
        "open": 812,
        "high": 828.97,
        "low": 750.7,
        "close": 784.28,
        "volume_eth": 99318.87,
        "volume_usd": 78244583.06
    },
    {
        "date": "2018-05-07",
        "open": 784.28,
        "high": 789.98,
        "low": 695.12,
        "close": 752.42,
        "volume_eth": 212962.73,
        "volume_usd": 156762360.11
    },
    {
        "date": "2018-05-08",
        "open": 752.42,
        "high": 776,
        "low": 720,
        "close": 746.99,
        "volume_eth": 122721.47,
        "volume_usd": 91650830.07
    },
    {
        "date": "2018-05-09",
        "open": 746.99,
        "high": 759.5,
        "low": 708.8,
        "close": 750,
        "volume_eth": 96171.49,
        "volume_usd": 70841297.13
    },
    {
        "date": "2018-05-10",
        "open": 750,
        "high": 768,
        "low": 723.01,
        "close": 723.51,
        "volume_eth": 83048.8,
        "volume_usd": 62084388.22
    },
    {
        "date": "2018-05-11",
        "open": 723.51,
        "high": 735.19,
        "low": 662.6,
        "close": 678.05,
        "volume_eth": 175277.2,
        "volume_usd": 121383936.12
    },
    {
        "date": "2018-05-12",
        "open": 678.05,
        "high": 692.39,
        "low": 638.88,
        "close": 684.66,
        "volume_eth": 101042.73,
        "volume_usd": 67654109.5
    },
    {
        "date": "2018-05-13",
        "open": 684.66,
        "high": 740.31,
        "low": 671,
        "close": 729.29,
        "volume_eth": 78546.64,
        "volume_usd": 55933865.29
    },
    {
        "date": "2018-05-14",
        "open": 729.29,
        "high": 745,
        "low": 684.8,
        "close": 726.9,
        "volume_eth": 154997.01,
        "volume_usd": 111296760.99
    },
    {
        "date": "2018-05-15",
        "open": 726.9,
        "high": 738,
        "low": 694.75,
        "close": 706.08,
        "volume_eth": 92613.08,
        "volume_usd": 66727835.57
    },
    {
        "date": "2018-05-16",
        "open": 706.08,
        "high": 710.44,
        "low": 677.55,
        "close": 707.45,
        "volume_eth": 83332.92,
        "volume_usd": 57790727.85
    },
    {
        "date": "2018-05-17",
        "open": 707.45,
        "high": 717.17,
        "low": 661,
        "close": 668.56,
        "volume_eth": 77681.37,
        "volume_usd": 53802364.81
    },
    {
        "date": "2018-05-18",
        "open": 668.56,
        "high": 694.71,
        "low": 656.5,
        "close": 694.5,
        "volume_eth": 80879.45,
        "volume_usd": 54698883.51
    },
    {
        "date": "2018-05-19",
        "open": 694.5,
        "high": 715.76,
        "low": 677.7,
        "close": 695.96,
        "volume_eth": 44895.71,
        "volume_usd": 31311407.72
    },
    {
        "date": "2018-05-20",
        "open": 695.96,
        "high": 723,
        "low": 687.7,
        "close": 714,
        "volume_eth": 48768.95,
        "volume_usd": 34675570.97
    },
    {
        "date": "2018-05-21",
        "open": 714,
        "high": 717,
        "low": 686.52,
        "close": 696.77,
        "volume_eth": 46748.57,
        "volume_usd": 32841915.46
    },
    {
        "date": "2018-05-22",
        "open": 696.77,
        "high": 699,
        "low": 638,
        "close": 640.5,
        "volume_eth": 94466.09,
        "volume_usd": 62992057.21
    },
    {
        "date": "2018-05-23",
        "open": 640.5,
        "high": 648.46,
        "low": 563.27,
        "close": 577.2,
        "volume_eth": 196828.45,
        "volume_usd": 118757430.45
    },
    {
        "date": "2018-05-24",
        "open": 577.2,
        "high": 609.21,
        "low": 545.36,
        "close": 603,
        "volume_eth": 132716.79,
        "volume_usd": 77524898.56
    },
    {
        "date": "2018-05-25",
        "open": 603,
        "high": 616,
        "low": 568.27,
        "close": 584.02,
        "volume_eth": 95334.71,
        "volume_usd": 56644888.27
    },
    {
        "date": "2018-05-26",
        "open": 584.02,
        "high": 606,
        "low": 577.65,
        "close": 584.99,
        "volume_eth": 43858.88,
        "volume_usd": 26036976.23
    },
    {
        "date": "2018-05-27",
        "open": 584.99,
        "high": 589.5,
        "low": 556,
        "close": 570.75,
        "volume_eth": 52997.24,
        "volume_usd": 30324539.02
    },
    {
        "date": "2018-05-28",
        "open": 570.75,
        "high": 575,
        "low": 507,
        "close": 511.33,
        "volume_eth": 110242.59,
        "volume_usd": 58603747.26
    },
    {
        "date": "2018-05-29",
        "open": 511.33,
        "high": 573.53,
        "low": 510.91,
        "close": 566.66,
        "volume_eth": 130626.85,
        "volume_usd": 71471747.75
    },
    {
        "date": "2018-05-30",
        "open": 566.66,
        "high": 585.92,
        "low": 541.23,
        "close": 557.22,
        "volume_eth": 94445.54,
        "volume_usd": 52961594.41
    },
    {
        "date": "2018-05-31",
        "open": 557.22,
        "high": 589,
        "low": 553.6,
        "close": 577.1,
        "volume_eth": 93197.14,
        "volume_usd": 53537536.55
    },
    {
        "date": "2018-06-01",
        "open": 577.1,
        "high": 588,
        "low": 561.49,
        "close": 578.89,
        "volume_eth": 89495.25,
        "volume_usd": 51239474.38
    },
    {
        "date": "2018-06-02",
        "open": 578.89,
        "high": 600,
        "low": 571.75,
        "close": 590.46,
        "volume_eth": 60266.15,
        "volume_usd": 35320118.74
    },
    {
        "date": "2018-06-03",
        "open": 590.46,
        "high": 627.83,
        "low": 590.46,
        "close": 618.63,
        "volume_eth": 48953.48,
        "volume_usd": 30045741.8
    },
    {
        "date": "2018-06-04",
        "open": 618.63,
        "high": 626.55,
        "low": 576.28,
        "close": 591.5,
        "volume_eth": 63602.98,
        "volume_usd": 37958150.51
    },
    {
        "date": "2018-06-05",
        "open": 591.5,
        "high": 612,
        "low": 574.77,
        "close": 607.6,
        "volume_eth": 70392.81,
        "volume_usd": 41915296.42
    },
    {
        "date": "2018-06-06",
        "open": 607.6,
        "high": 611.69,
        "low": 592.76,
        "close": 606.18,
        "volume_eth": 67121.97,
        "volume_usd": 40416713.5
    },
    {
        "date": "2018-06-07",
        "open": 606.18,
        "high": 615.26,
        "low": 594.01,
        "close": 603.56,
        "volume_eth": 79195.76,
        "volume_usd": 47915825.96
    },
    {
        "date": "2018-06-08",
        "open": 603.56,
        "high": 607,
        "low": 591,
        "close": 598.59,
        "volume_eth": 37162.46,
        "volume_usd": 22280071.08
    },
    {
        "date": "2018-06-09",
        "open": 598.59,
        "high": 608,
        "low": 591.81,
        "close": 593.41,
        "volume_eth": 25904.5,
        "volume_usd": 15573870.9
    },
    {
        "date": "2018-06-10",
        "open": 593.41,
        "high": 593.41,
        "low": 505,
        "close": 525.25,
        "volume_eth": 131453.48,
        "volume_usd": 71125138.71
    },
    {
        "date": "2018-06-11",
        "open": 525.25,
        "high": 536.85,
        "low": 509.97,
        "close": 531.68,
        "volume_eth": 109138.53,
        "volume_usd": 57128600.42
    },
    {
        "date": "2018-06-12",
        "open": 531.68,
        "high": 538.99,
        "low": 485,
        "close": 494.14,
        "volume_eth": 115569.97,
        "volume_usd": 58847310.41
    },
    {
        "date": "2018-06-13",
        "open": 494.14,
        "high": 502.4,
        "low": 450.11,
        "close": 476.02,
        "volume_eth": 160593.09,
        "volume_usd": 76212244.03
    },
    {
        "date": "2018-06-14",
        "open": 476.02,
        "high": 529.34,
        "low": 459.46,
        "close": 519.75,
        "volume_eth": 207991.19,
        "volume_usd": 103522954.18
    },
    {
        "date": "2018-06-15",
        "open": 519.75,
        "high": 521,
        "low": 482,
        "close": 487.45,
        "volume_eth": 96893.05,
        "volume_usd": 48506479.26
    },
    {
        "date": "2018-06-16",
        "open": 487.45,
        "high": 502.81,
        "low": 484.12,
        "close": 497.31,
        "volume_eth": 42779.8,
        "volume_usd": 21176859.4
    },
    {
        "date": "2018-06-17",
        "open": 497.31,
        "high": 507.83,
        "low": 493.33,
        "close": 496.5,
        "volume_eth": 34226.38,
        "volume_usd": 17120744.25
    },
    {
        "date": "2018-06-18",
        "open": 496.5,
        "high": 525,
        "low": 488,
        "close": 517.47,
        "volume_eth": 70868.48,
        "volume_usd": 35923728.96
    },
    {
        "date": "2018-06-19",
        "open": 517.47,
        "high": 547.4,
        "low": 514.45,
        "close": 538.5,
        "volume_eth": 69096.18,
        "volume_usd": 36680610.65
    },
    {
        "date": "2018-06-20",
        "open": 538.5,
        "high": 541.8,
        "low": 516.67,
        "close": 536,
        "volume_eth": 58479.66,
        "volume_usd": 30931573.3
    },
    {
        "date": "2018-06-21",
        "open": 536,
        "high": 544.23,
        "low": 521.5,
        "close": 525.49,
        "volume_eth": 48892.68,
        "volume_usd": 26032187.41
    },
    {
        "date": "2018-06-22",
        "open": 525.49,
        "high": 525.65,
        "low": 449.02,
        "close": 462.01,
        "volume_eth": 151090.1,
        "volume_usd": 72216362.11
    },
    {
        "date": "2018-06-23",
        "open": 462.01,
        "high": 481.74,
        "low": 457.87,
        "close": 475.17,
        "volume_eth": 47244.56,
        "volume_usd": 22260871.06
    },
    {
        "date": "2018-06-24",
        "open": 475.17,
        "high": 476.9,
        "low": 421.1,
        "close": 454.79,
        "volume_eth": 142862.65,
        "volume_usd": 63789853.15
    },
    {
        "date": "2018-06-25",
        "open": 454.79,
        "high": 473.27,
        "low": 445,
        "close": 458.41,
        "volume_eth": 80945.37,
        "volume_usd": 37157310.24
    },
    {
        "date": "2018-06-26",
        "open": 458.41,
        "high": 460.72,
        "low": 429,
        "close": 429.08,
        "volume_eth": 74938.63,
        "volume_usd": 33392996.37
    },
    {
        "date": "2018-06-27",
        "open": 429.08,
        "high": 446,
        "low": 420.12,
        "close": 441.41,
        "volume_eth": 69995.83,
        "volume_usd": 30243406.12
    },
    {
        "date": "2018-06-28",
        "open": 441.41,
        "high": 443.78,
        "low": 417,
        "close": 420,
        "volume_eth": 55866.2,
        "volume_usd": 24089323.95
    },
    {
        "date": "2018-06-29",
        "open": 420,
        "high": 442,
        "low": 404.22,
        "close": 434.6,
        "volume_eth": 94907.82,
        "volume_usd": 39610851.79
    },
    {
        "date": "2018-06-30",
        "open": 434.6,
        "high": 462.49,
        "low": 434.5,
        "close": 453.29,
        "volume_eth": 57061.02,
        "volume_usd": 25635348.33
    },
    {
        "date": "2018-07-01",
        "open": 453.29,
        "high": 455.87,
        "low": 444.85,
        "close": 451.43,
        "volume_eth": 33616.5,
        "volume_usd": 15146943.94
    },
    {
        "date": "2018-07-02",
        "open": 451.43,
        "high": 481.98,
        "low": 442.79,
        "close": 476.34,
        "volume_eth": 68661.24,
        "volume_usd": 32025850.13
    },
    {
        "date": "2018-07-03",
        "open": 476.34,
        "high": 486.76,
        "low": 459.31,
        "close": 461.75,
        "volume_eth": 67116.85,
        "volume_usd": 31705086.4
    },
    {
        "date": "2018-07-04",
        "open": 461.75,
        "high": 482.01,
        "low": 451.35,
        "close": 466.9,
        "volume_eth": 56448.95,
        "volume_usd": 26343207.39
    },
    {
        "date": "2018-07-05",
        "open": 466.9,
        "high": 477.99,
        "low": 457.85,
        "close": 467.25,
        "volume_eth": 53857.11,
        "volume_usd": 25244986.39
    },
    {
        "date": "2018-07-06",
        "open": 467.25,
        "high": 474.99,
        "low": 451.68,
        "close": 469.3,
        "volume_eth": 40899.9,
        "volume_usd": 19062799.82
    },
    {
        "date": "2018-07-07",
        "open": 469.3,
        "high": 486.69,
        "low": 462,
        "close": 484.48,
        "volume_eth": 31689.56,
        "volume_usd": 14927137.74
    },
    {
        "date": "2018-07-08",
        "open": 484.48,
        "high": 494.74,
        "low": 479.31,
        "close": 486.08,
        "volume_eth": 38259.09,
        "volume_usd": 18623873.16
    },
    {
        "date": "2018-07-09",
        "open": 486.08,
        "high": 488,
        "low": 469,
        "close": 471.6,
        "volume_eth": 44924.79,
        "volume_usd": 21491496.64
    },
    {
        "date": "2018-07-10",
        "open": 471.6,
        "high": 473,
        "low": 427.88,
        "close": 432.59,
        "volume_eth": 95651.51,
        "volume_usd": 42586650.82
    },
    {
        "date": "2018-07-11",
        "open": 432.59,
        "high": 448.54,
        "low": 425.34,
        "close": 446.25,
        "volume_eth": 66210.14,
        "volume_usd": 29106538.05
    },
    {
        "date": "2018-07-12",
        "open": 446.25,
        "high": 447.17,
        "low": 418.23,
        "close": 431.46,
        "volume_eth": 49757.95,
        "volume_usd": 21457578.16
    },
    {
        "date": "2018-07-13",
        "open": 431.46,
        "high": 442.31,
        "low": 425.1,
        "close": 432.8,
        "volume_eth": 50436.29,
        "volume_usd": 21933016.06
    },
    {
        "date": "2018-07-14",
        "open": 432.8,
        "high": 439.99,
        "low": 428.13,
        "close": 434.13,
        "volume_eth": 23906.65,
        "volume_usd": 10379674.15
    },
    {
        "date": "2018-07-15",
        "open": 434.13,
        "high": 454.21,
        "low": 431.29,
        "close": 449.41,
        "volume_eth": 33325.87,
        "volume_usd": 14852359.05
    },
    {
        "date": "2018-07-16",
        "open": 449.41,
        "high": 479.92,
        "low": 444.05,
        "close": 478.18,
        "volume_eth": 63612.87,
        "volume_usd": 29769353.57
    },
    {
        "date": "2018-07-17",
        "open": 478.18,
        "high": 510.79,
        "low": 466.1,
        "close": 499.01,
        "volume_eth": 92119.31,
        "volume_usd": 45062392.53
    },
    {
        "date": "2018-07-18",
        "open": 499.01,
        "high": 515.88,
        "low": 468.85,
        "close": 478.81,
        "volume_eth": 94827.67,
        "volume_usd": 46779563.77
    },
    {
        "date": "2018-07-19",
        "open": 478.81,
        "high": 483.88,
        "low": 462.16,
        "close": 468.39,
        "volume_eth": 50581.94,
        "volume_usd": 23880537.85
    },
    {
        "date": "2018-07-20",
        "open": 468.39,
        "high": 468.73,
        "low": 441,
        "close": 448.21,
        "volume_eth": 61048.59,
        "volume_usd": 27847066.85
    },
    {
        "date": "2018-07-21",
        "open": 448.21,
        "high": 468.85,
        "low": 442,
        "close": 461.5,
        "volume_eth": 31111.47,
        "volume_usd": 14278165.26
    },
    {
        "date": "2018-07-22",
        "open": 461.5,
        "high": 471.74,
        "low": 455,
        "close": 456.9,
        "volume_eth": 29849.82,
        "volume_usd": 13805523.2
    },
    {
        "date": "2018-07-23",
        "open": 456.9,
        "high": 469.3,
        "low": 445.66,
        "close": 449,
        "volume_eth": 59338.49,
        "volume_usd": 27160116.83
    },
    {
        "date": "2018-07-24",
        "open": 449,
        "high": 483.92,
        "low": 447.99,
        "close": 478.78,
        "volume_eth": 85029.71,
        "volume_usd": 39952757.95
    },
    {
        "date": "2018-07-25",
        "open": 478.78,
        "high": 484.43,
        "low": 463.55,
        "close": 470.81,
        "volume_eth": 61154.04,
        "volume_usd": 29015958.82
    },
    {
        "date": "2018-07-26",
        "open": 470.81,
        "high": 483.88,
        "low": 460,
        "close": 461.42,
        "volume_eth": 46937.07,
        "volume_usd": 22216152.67
    },
    {
        "date": "2018-07-27",
        "open": 461.42,
        "high": 473.33,
        "low": 454.25,
        "close": 469.3,
        "volume_eth": 43232.8,
        "volume_usd": 20073528.1
    },
    {
        "date": "2018-07-28",
        "open": 469.3,
        "high": 471.01,
        "low": 461.25,
        "close": 468.12,
        "volume_eth": 18686.65,
        "volume_usd": 8725695.14
    },
    {
        "date": "2018-07-29",
        "open": 468.12,
        "high": 471.37,
        "low": 462,
        "close": 466.01,
        "volume_eth": 19933.71,
        "volume_usd": 9292223.1
    },
    {
        "date": "2018-07-30",
        "open": 466.01,
        "high": 469,
        "low": 446,
        "close": 456.47,
        "volume_eth": 47834.01,
        "volume_usd": 21847823.23
    },
    {
        "date": "2018-07-31",
        "open": 456.47,
        "high": 457.3,
        "low": 427.33,
        "close": 432.16,
        "volume_eth": 57334.24,
        "volume_usd": 25036791.62
    },
    {
        "date": "2018-08-01",
        "open": 432.16,
        "high": 435.48,
        "low": 407.78,
        "close": 419.6,
        "volume_eth": 73452.8,
        "volume_usd": 30807918.3
    },
    {
        "date": "2018-08-02",
        "open": 419.6,
        "high": 424.61,
        "low": 407.29,
        "close": 410.71,
        "volume_eth": 43251.21,
        "volume_usd": 17900618.41
    },
    {
        "date": "2018-08-03",
        "open": 410.71,
        "high": 420.27,
        "low": 395,
        "close": 417.8,
        "volume_eth": 86027.37,
        "volume_usd": 34983118.55
    },
    {
        "date": "2018-08-04",
        "open": 417.8,
        "high": 419.16,
        "low": 401,
        "close": 407,
        "volume_eth": 36775.06,
        "volume_usd": 15068691.96
    },
    {
        "date": "2018-08-05",
        "open": 407,
        "high": 413.33,
        "low": 400.5,
        "close": 408.83,
        "volume_eth": 30063.52,
        "volume_usd": 12207924.38
    },
    {
        "date": "2018-08-06",
        "open": 408.83,
        "high": 413.17,
        "low": 401,
        "close": 404.99,
        "volume_eth": 35224.07,
        "volume_usd": 14303450.85
    },
    {
        "date": "2018-08-07",
        "open": 404.99,
        "high": 410,
        "low": 369.1,
        "close": 378.08,
        "volume_eth": 74274.76,
        "volume_usd": 29017762.06
    },
    {
        "date": "2018-08-08",
        "open": 378.08,
        "high": 380.77,
        "low": 347.18,
        "close": 355.7,
        "volume_eth": 181154.7,
        "volume_usd": 65617914.46
    },
    {
        "date": "2018-08-09",
        "open": 355.7,
        "high": 371.09,
        "low": 351,
        "close": 363.99,
        "volume_eth": 91569.92,
        "volume_usd": 33146909.84
    },
    {
        "date": "2018-08-10",
        "open": 363.99,
        "high": 366.46,
        "low": 326,
        "close": 330.99,
        "volume_eth": 99696.89,
        "volume_usd": 34476553.11
    },
    {
        "date": "2018-08-11",
        "open": 330.99,
        "high": 332,
        "low": 310.32,
        "close": 312.65,
        "volume_eth": 62531.65,
        "volume_usd": 19964155.61
    },
    {
        "date": "2018-08-12",
        "open": 312.65,
        "high": 312.65,
        "low": 312.65,
        "close": 312.65,
        "volume_eth": 0,
        "volume_usd": 0
    },
    {
        "date": "2018-08-13",
        "open": 318.15,
        "high": 322.27,
        "low": 281.41,
        "close": 284.11,
        "volume_eth": 213719.18,
        "volume_usd": 63518596.52
    },
    {
        "date": "2018-08-14",
        "open": 284.11,
        "high": 285,
        "low": 250.28,
        "close": 278.37,
        "volume_eth": 349128.4,
        "volume_usd": 92206705.77
    },
    {
        "date": "2018-08-15",
        "open": 278.37,
        "high": 305.4,
        "low": 275.93,
        "close": 281.21,
        "volume_eth": 259286.11,
        "volume_usd": 74972492.46
    },
    {
        "date": "2018-08-16",
        "open": 281.21,
        "high": 298.89,
        "low": 277.84,
        "close": 286.67,
        "volume_eth": 117692.3,
        "volume_usd": 33921385.41
    },
    {
        "date": "2018-08-17",
        "open": 286.67,
        "high": 319,
        "low": 285.42,
        "close": 317.54,
        "volume_eth": 164089.67,
        "volume_usd": 49488392.79
    },
    {
        "date": "2018-08-18",
        "open": 317.54,
        "high": 322.16,
        "low": 283.1,
        "close": 296.61,
        "volume_eth": 101805.05,
        "volume_usd": 30594763.49
    },
    {
        "date": "2018-08-19",
        "open": 296.61,
        "high": 307.65,
        "low": 289.33,
        "close": 300.03,
        "volume_eth": 62584.69,
        "volume_usd": 18638319.07
    },
    {
        "date": "2018-08-20",
        "open": 300.03,
        "high": 304,
        "low": 268.02,
        "close": 270.76,
        "volume_eth": 112574.45,
        "volume_usd": 31911077.26
    },
    {
        "date": "2018-08-21",
        "open": 270.76,
        "high": 286.42,
        "low": 269.13,
        "close": 281.49,
        "volume_eth": 70794.12,
        "volume_usd": 19629932.34
    },
    {
        "date": "2018-08-22",
        "open": 281.49,
        "high": 298.99,
        "low": 259.11,
        "close": 270.47,
        "volume_eth": 156249.02,
        "volume_usd": 43487128.1
    },
    {
        "date": "2018-08-23",
        "open": 270.47,
        "high": 280.39,
        "low": 268.6,
        "close": 275.87,
        "volume_eth": 94301.8,
        "volume_usd": 25851264.41
    },
    {
        "date": "2018-08-24",
        "open": 275.87,
        "high": 283.38,
        "low": 270.27,
        "close": 281.35,
        "volume_eth": 73790.02,
        "volume_usd": 20358888.35
    },
    {
        "date": "2018-08-25",
        "open": 281.35,
        "high": 282.95,
        "low": 276.99,
        "close": 277.97,
        "volume_eth": 31675.45,
        "volume_usd": 8861404.76
    },
    {
        "date": "2018-08-26",
        "open": 277.97,
        "high": 277.97,
        "low": 270,
        "close": 274.25,
        "volume_eth": 38510.9,
        "volume_usd": 10541022.16
    },
    {
        "date": "2018-08-27",
        "open": 274.25,
        "high": 288.64,
        "low": 271.32,
        "close": 287.99,
        "volume_eth": 65231.95,
        "volume_usd": 18140309.9
    },
    {
        "date": "2018-08-28",
        "open": 287.99,
        "high": 297.64,
        "low": 282.85,
        "close": 295.39,
        "volume_eth": 81322.64,
        "volume_usd": 23562543.29
    },
    {
        "date": "2018-08-29",
        "open": 295.39,
        "high": 297.32,
        "low": 284.11,
        "close": 289,
        "volume_eth": 57773.47,
        "volume_usd": 16790551.08
    },
    {
        "date": "2018-08-30",
        "open": 289,
        "high": 290.99,
        "low": 272.13,
        "close": 284.52,
        "volume_eth": 79430.8,
        "volume_usd": 22280046.32
    },
    {
        "date": "2018-08-31",
        "open": 284.52,
        "high": 284.7,
        "low": 276.66,
        "close": 281.94,
        "volume_eth": 49979.72,
        "volume_usd": 14024974.73
    },
    {
        "date": "2018-09-01",
        "open": 281.94,
        "high": 302.2,
        "low": 281.94,
        "close": 294.64,
        "volume_eth": 58992.41,
        "volume_usd": 17275372.99
    },
    {
        "date": "2018-09-02",
        "open": 294.64,
        "high": 298.72,
        "low": 288.48,
        "close": 295.06,
        "volume_eth": 44050.38,
        "volume_usd": 12950767.74
    },
    {
        "date": "2018-09-03",
        "open": 295.06,
        "high": 296.38,
        "low": 285.76,
        "close": 288.6,
        "volume_eth": 55677.23,
        "volume_usd": 16127692.96
    },
    {
        "date": "2018-09-04",
        "open": 288.6,
        "high": 292.11,
        "low": 282.1,
        "close": 285.43,
        "volume_eth": 73006.3,
        "volume_usd": 20968444.97
    },
    {
        "date": "2018-09-05",
        "open": 285.43,
        "high": 287.95,
        "low": 225.54,
        "close": 227.56,
        "volume_eth": 220426.19,
        "volume_usd": 55630162.73
    },
    {
        "date": "2018-09-06",
        "open": 227.56,
        "high": 233.6,
        "low": 211,
        "close": 229.66,
        "volume_eth": 277401.36,
        "volume_usd": 62178646.67
    },
    {
        "date": "2018-09-07",
        "open": 229.66,
        "high": 234.23,
        "low": 214,
        "close": 215.21,
        "volume_eth": 129119.05,
        "volume_usd": 28572511.21
    },
    {
        "date": "2018-09-08",
        "open": 215.21,
        "high": 220,
        "low": 190.01,
        "close": 197,
        "volume_eth": 178662.21,
        "volume_usd": 36271876.11
    },
    {
        "date": "2018-09-09",
        "open": 197,
        "high": 208.5,
        "low": 185.39,
        "close": 195.91,
        "volume_eth": 151853.72,
        "volume_usd": 29824528.14
    },
    {
        "date": "2018-09-10",
        "open": 195.91,
        "high": 202.7,
        "low": 186.59,
        "close": 196.94,
        "volume_eth": 133129.95,
        "volume_usd": 25934930.5
    },
    {
        "date": "2018-09-11",
        "open": 196.94,
        "high": 199.25,
        "low": 175.5,
        "close": 185.15,
        "volume_eth": 174425.99,
        "volume_usd": 32523972.66
    },
    {
        "date": "2018-09-12",
        "open": 185.15,
        "high": 185.15,
        "low": 167,
        "close": 182.79,
        "volume_eth": 245925.52,
        "volume_usd": 43013099.84
    },
    {
        "date": "2018-09-13",
        "open": 182.79,
        "high": 215,
        "low": 182.79,
        "close": 211.39,
        "volume_eth": 284936.72,
        "volume_usd": 57216219.27
    },
    {
        "date": "2018-09-14",
        "open": 211.39,
        "high": 224.3,
        "low": 202.51,
        "close": 210,
        "volume_eth": 217479.88,
        "volume_usd": 46513084.25
    },
    {
        "date": "2018-09-15",
        "open": 210,
        "high": 227.5,
        "low": 208.26,
        "close": 221.69,
        "volume_eth": 110587.06,
        "volume_usd": 24347281.2
    },
    {
        "date": "2018-09-16",
        "open": 221.69,
        "high": 223.43,
        "low": 208.01,
        "close": 220.19,
        "volume_eth": 95433.56,
        "volume_usd": 20709679.89
    },
    {
        "date": "2018-09-17",
        "open": 220.19,
        "high": 224.9,
        "low": 192.2,
        "close": 195.97,
        "volume_eth": 217257.83,
        "volume_usd": 45017560.43
    },
    {
        "date": "2018-09-18",
        "open": 195.97,
        "high": 214.87,
        "low": 194.05,
        "close": 208.5,
        "volume_eth": 144897.83,
        "volume_usd": 29794914.11
    },
    {
        "date": "2018-09-19",
        "open": 208.5,
        "high": 214.68,
        "low": 197.34,
        "close": 209.81,
        "volume_eth": 166183.03,
        "volume_usd": 34497371.17
    },
    {
        "date": "2018-09-20",
        "open": 209.81,
        "high": 227.34,
        "low": 206.64,
        "close": 224.41,
        "volume_eth": 168663.66,
        "volume_usd": 36045367.62
    },
    {
        "date": "2018-09-21",
        "open": 224.41,
        "high": 252,
        "low": 221,
        "close": 247.76,
        "volume_eth": 263380.54,
        "volume_usd": 61787654.84
    },
    {
        "date": "2018-09-22",
        "open": 247.76,
        "high": 255,
        "low": 232.67,
        "close": 240.71,
        "volume_eth": 122038.69,
        "volume_usd": 29505230.63
    },
    {
        "date": "2018-09-23",
        "open": 240.71,
        "high": 249.79,
        "low": 237.1,
        "close": 244.35,
        "volume_eth": 74603.46,
        "volume_usd": 18108035.62
    },
    {
        "date": "2018-09-24",
        "open": 244.35,
        "high": 245.79,
        "low": 225.15,
        "close": 228.01,
        "volume_eth": 120526.74,
        "volume_usd": 28261368.63
    },
    {
        "date": "2018-09-25",
        "open": 228.01,
        "high": 228.01,
        "low": 203.38,
        "close": 219.19,
        "volume_eth": 228790.18,
        "volume_usd": 49001690.05
    },
    {
        "date": "2018-09-26",
        "open": 219.19,
        "high": 222.43,
        "low": 207.23,
        "close": 214.15,
        "volume_eth": 151742.77,
        "volume_usd": 32694715.93
    },
    {
        "date": "2018-09-27",
        "open": 214.15,
        "high": 233.5,
        "low": 210.01,
        "close": 229,
        "volume_eth": 169305.4,
        "volume_usd": 37557427.41
    },
    {
        "date": "2018-09-28",
        "open": 229,
        "high": 234.59,
        "low": 215,
        "close": 220.67,
        "volume_eth": 133434.58,
        "volume_usd": 29959187.58
    },
    {
        "date": "2018-09-29",
        "open": 220.67,
        "high": 235.35,
        "low": 214,
        "close": 231.01,
        "volume_eth": 106164.65,
        "volume_usd": 24114839.72
    },
    {
        "date": "2018-09-30",
        "open": 231.01,
        "high": 238.69,
        "low": 225.5,
        "close": 232.27,
        "volume_eth": 87843.6,
        "volume_usd": 20412907.33
    },
    {
        "date": "2018-10-01",
        "open": 232.27,
        "high": 234.92,
        "low": 223.45,
        "close": 230.4,
        "volume_eth": 83254.76,
        "volume_usd": 19074939.5
    },
    {
        "date": "2018-10-02",
        "open": 230.4,
        "high": 231.08,
        "low": 221.45,
        "close": 224.85,
        "volume_eth": 70674.6,
        "volume_usd": 16009401
    },
    {
        "date": "2018-10-03",
        "open": 224.85,
        "high": 224.9,
        "low": 214,
        "close": 219.01,
        "volume_eth": 89974.04,
        "volume_usd": 19659129.8
    },
    {
        "date": "2018-10-04",
        "open": 219.01,
        "high": 225.66,
        "low": 218.31,
        "close": 221,
        "volume_eth": 72065.01,
        "volume_usd": 16043937.75
    },
    {
        "date": "2018-10-05",
        "open": 221,
        "high": 230.34,
        "low": 218,
        "close": 226.89,
        "volume_eth": 69759.84,
        "volume_usd": 15578902.84
    },
    {
        "date": "2018-10-06",
        "open": 226.89,
        "high": 227.06,
        "low": 222.32,
        "close": 223.85,
        "volume_eth": 32081.53,
        "volume_usd": 7206007.32
    },
    {
        "date": "2018-10-07",
        "open": 223.85,
        "high": 225.95,
        "low": 220.24,
        "close": 224.82,
        "volume_eth": 30116.57,
        "volume_usd": 6716882.95
    },
    {
        "date": "2018-10-08",
        "open": 224.82,
        "high": 231.1,
        "low": 222.25,
        "close": 227.68,
        "volume_eth": 51359.77,
        "volume_usd": 11655474
    },
    {
        "date": "2018-10-09",
        "open": 227.68,
        "high": 228.45,
        "low": 225.06,
        "close": 226.15,
        "volume_eth": 41137.31,
        "volume_usd": 9319288.92
    },
    {
        "date": "2018-10-10",
        "open": 226.15,
        "high": 226.25,
        "low": 221.52,
        "close": 223.61,
        "volume_eth": 55185.13,
        "volume_usd": 12330085.76
    },
    {
        "date": "2018-10-11",
        "open": 223.61,
        "high": 223.61,
        "low": 185.06,
        "close": 188.32,
        "volume_eth": 300055.24,
        "volume_usd": 59884204.13
    },
    {
        "date": "2018-10-12",
        "open": 188.32,
        "high": 198.5,
        "low": 187.15,
        "close": 194.1,
        "volume_eth": 93135.58,
        "volume_usd": 18033661.09
    },
    {
        "date": "2018-10-13",
        "open": 194.1,
        "high": 198.37,
        "low": 193.45,
        "close": 196.72,
        "volume_eth": 39111.98,
        "volume_usd": 7699059.96
    },
    {
        "date": "2018-10-14",
        "open": 196.72,
        "high": 199.41,
        "low": 189.13,
        "close": 191.87,
        "volume_eth": 48584.96,
        "volume_usd": 9515504.79
    },
    {
        "date": "2018-10-15",
        "open": 191.87,
        "high": 220.64,
        "low": 189.96,
        "close": 204.12,
        "volume_eth": 210165.25,
        "volume_usd": 43050615.11
    },
    {
        "date": "2018-10-16",
        "open": 204.12,
        "high": 204.12,
        "low": 203.55,
        "close": 203.55,
        "volume_eth": 0,
        "volume_usd": 0
    },
    {
        "date": "2018-10-17",
        "open": 205.43,
        "high": 206.35,
        "low": 201.2,
        "close": 203.21,
        "volume_eth": 63596.33,
        "volume_usd": 12972359.61
    },
    {
        "date": "2018-10-18",
        "open": 203.21,
        "high": 205.56,
        "low": 195.15,
        "close": 199.09,
        "volume_eth": 97771.01,
        "volume_usd": 19629571.19
    },
    {
        "date": "2018-10-19",
        "open": 199.09,
        "high": 201.47,
        "low": 197.8,
        "close": 200,
        "volume_eth": 49001.63,
        "volume_usd": 9796660.3
    },
    {
        "date": "2018-10-20",
        "open": 200,
        "high": 204.66,
        "low": 199.31,
        "close": 202.69,
        "volume_eth": 70174.16,
        "volume_usd": 14204119.04
    },
    {
        "date": "2018-10-21",
        "open": 202.69,
        "high": 205.66,
        "low": 201.19,
        "close": 202.12,
        "volume_eth": 33784.89,
        "volume_usd": 6877904.11
    },
    {
        "date": "2018-10-22",
        "open": 202.12,
        "high": 203,
        "low": 198.89,
        "close": 201.25,
        "volume_eth": 42689.75,
        "volume_usd": 8583551.34
    },
    {
        "date": "2018-10-23",
        "open": 201.25,
        "high": 201.96,
        "low": 197.96,
        "close": 201.12,
        "volume_eth": 41123.28,
        "volume_usd": 8228666.67
    },
    {
        "date": "2018-10-24",
        "open": 201.12,
        "high": 202.47,
        "low": 200.38,
        "close": 200.68,
        "volume_eth": 39488.86,
        "volume_usd": 7951870.28
    },
    {
        "date": "2018-10-25",
        "open": 200.68,
        "high": 200.72,
        "low": 195.83,
        "close": 199.65,
        "volume_eth": 64306.72,
        "volume_usd": 12793549.39
    },
    {
        "date": "2018-10-26",
        "open": 199.65,
        "high": 204.35,
        "low": 198.64,
        "close": 200.7,
        "volume_eth": 47096.94,
        "volume_usd": 9457395.21
    },
    {
        "date": "2018-10-27",
        "open": 200.7,
        "high": 201.7,
        "low": 200.42,
        "close": 201.46,
        "volume_eth": 21069.78,
        "volume_usd": 4236378.08
    },
    {
        "date": "2018-10-28",
        "open": 201.46,
        "high": 202.85,
        "low": 201,
        "close": 202.43,
        "volume_eth": 21227.3,
        "volume_usd": 4282056.28
    },
    {
        "date": "2018-10-29",
        "open": 202.43,
        "high": 202.65,
        "low": 191,
        "close": 194.29,
        "volume_eth": 74935.35,
        "volume_usd": 14688606.78
    },
    {
        "date": "2018-10-30",
        "open": 194.29,
        "high": 196.41,
        "low": 192.6,
        "close": 195.35,
        "volume_eth": 57486.16,
        "volume_usd": 11160217.57
    },
    {
        "date": "2018-10-31",
        "open": 195.35,
        "high": 200,
        "low": 191.4,
        "close": 196.95,
        "volume_eth": 52805.54,
        "volume_usd": 10330143.7
    },
    {
        "date": "2018-11-01",
        "open": 196.95,
        "high": 198.63,
        "low": 196.2,
        "close": 197.96,
        "volume_eth": 34762.19,
        "volume_usd": 6845616.28
    },
    {
        "date": "2018-11-02",
        "open": 197.96,
        "high": 201.75,
        "low": 197.8,
        "close": 199.75,
        "volume_eth": 44834.4,
        "volume_usd": 8942416.64
    },
    {
        "date": "2018-11-03",
        "open": 199.75,
        "high": 200,
        "low": 197.62,
        "close": 198.35,
        "volume_eth": 26789.83,
        "volume_usd": 5326123.01
    },
    {
        "date": "2018-11-04",
        "open": 198.35,
        "high": 217.77,
        "low": 198.1,
        "close": 210.06,
        "volume_eth": 94233.47,
        "volume_usd": 19485097.05
    },
    {
        "date": "2018-11-05",
        "open": 210.06,
        "high": 211.2,
        "low": 205.53,
        "close": 208.53,
        "volume_eth": 54121.86,
        "volume_usd": 11254009.65
    },
    {
        "date": "2018-11-06",
        "open": 208.53,
        "high": 219.08,
        "low": 207.13,
        "close": 218.51,
        "volume_eth": 106033.07,
        "volume_usd": 22656135.62
    },
    {
        "date": "2018-11-07",
        "open": 218.51,
        "high": 222.78,
        "low": 215.56,
        "close": 216.84,
        "volume_eth": 68747.43,
        "volume_usd": 15038961.74
    },
    {
        "date": "2018-11-08",
        "open": 216.84,
        "high": 218.27,
        "low": 209.89,
        "close": 210.34,
        "volume_eth": 56366.05,
        "volume_usd": 12017642.12
    },
    {
        "date": "2018-11-09",
        "open": 210.34,
        "high": 212.2,
        "low": 206.2,
        "close": 208.01,
        "volume_eth": 37149.74,
        "volume_usd": 7773992.77
    },
    {
        "date": "2018-11-10",
        "open": 208.01,
        "high": 212.52,
        "low": 207.69,
        "close": 210.29,
        "volume_eth": 27620.35,
        "volume_usd": 5820169.09
    },
    {
        "date": "2018-11-11",
        "open": 210.29,
        "high": 211.17,
        "low": 206.15,
        "close": 209.88,
        "volume_eth": 21388.44,
        "volume_usd": 4467174
    },
    {
        "date": "2018-11-12",
        "open": 209.88,
        "high": 211.22,
        "low": 207,
        "close": 208.77,
        "volume_eth": 40642.44,
        "volume_usd": 8512400.46
    },
    {
        "date": "2018-11-13",
        "open": 208.77,
        "high": 208.77,
        "low": 202.76,
        "close": 203.2,
        "volume_eth": 60479.88,
        "volume_usd": 12435529.16
    },
    {
        "date": "2018-11-14",
        "open": 203.2,
        "high": 204.9,
        "low": 165.2,
        "close": 177.79,
        "volume_eth": 317936.66,
        "volume_usd": 57463246.06
    },
    {
        "date": "2018-11-15",
        "open": 177.79,
        "high": 181,
        "low": 165.33,
        "close": 178.89,
        "volume_eth": 227631.77,
        "volume_usd": 39661857.78
    },
    {
        "date": "2018-11-16",
        "open": 178.89,
        "high": 179.76,
        "low": 169.22,
        "close": 172.4,
        "volume_eth": 114804.43,
        "volume_usd": 20123632.7
    },
    {
        "date": "2018-11-17",
        "open": 172.4,
        "high": 174.41,
        "low": 170.34,
        "close": 172.48,
        "volume_eth": 53893.26,
        "volume_usd": 9278889.81
    },
    {
        "date": "2018-11-18",
        "open": 172.48,
        "high": 180.2,
        "low": 172.15,
        "close": 175.87,
        "volume_eth": 61977.75,
        "volume_usd": 10840739.26
    },
    {
        "date": "2018-11-19",
        "open": 175.87,
        "high": 175.92,
        "low": 142,
        "close": 145.21,
        "volume_eth": 388441.04,
        "volume_usd": 60045181.12
    },
    {
        "date": "2018-11-20",
        "open": 145.21,
        "high": 149.5,
        "low": 121.5,
        "close": 127.55,
        "volume_eth": 723824.51,
        "volume_usd": 96545174.58
    },
    {
        "date": "2018-11-21",
        "open": 127.55,
        "high": 137.5,
        "low": 122.65,
        "close": 134.73,
        "volume_eth": 336247.27,
        "volume_usd": 44231315.11
    },
    {
        "date": "2018-11-22",
        "open": 134.73,
        "high": 136.71,
        "low": 122.54,
        "close": 123.2,
        "volume_eth": 142401.29,
        "volume_usd": 18503842.12
    },
    {
        "date": "2018-11-23",
        "open": 123.2,
        "high": 125.15,
        "low": 116.24,
        "close": 121.44,
        "volume_eth": 262958.13,
        "volume_usd": 31759820.18
    },
    {
        "date": "2018-11-24",
        "open": 121.44,
        "high": 125.89,
        "low": 106.25,
        "close": 110.08,
        "volume_eth": 198511.79,
        "volume_usd": 22885133.6
    },
    {
        "date": "2018-11-25",
        "open": 110.08,
        "high": 118.83,
        "low": 98.2,
        "close": 114.3,
        "volume_eth": 442893.75,
        "volume_usd": 47773306.52
    },
    {
        "date": "2018-11-26",
        "open": 114.3,
        "high": 116.88,
        "low": 102.26,
        "close": 106.95,
        "volume_eth": 317813.17,
        "volume_usd": 34537059.55
    },
    {
        "date": "2018-11-27",
        "open": 106.95,
        "high": 111.6,
        "low": 99.26,
        "close": 108.58,
        "volume_eth": 248821.17,
        "volume_usd": 26129747.44
    },
    {
        "date": "2018-11-28",
        "open": 108.58,
        "high": 126.45,
        "low": 108.58,
        "close": 121.95,
        "volume_eth": 322073.34,
        "volume_usd": 37766755.93
    },
    {
        "date": "2018-11-29",
        "open": 121.95,
        "high": 123.05,
        "low": 113,
        "close": 116.38,
        "volume_eth": 202022.16,
        "volume_usd": 23856794.41
    },
    {
        "date": "2018-11-30",
        "open": 116.38,
        "high": 119,
        "low": 109.24,
        "close": 111.88,
        "volume_eth": 125121.54,
        "volume_usd": 14224707.51
    },
    {
        "date": "2018-12-01",
        "open": 111.65,
        "high": 119.48,
        "low": 110,
        "close": 116.82,
        "volume_eth": 117391.82,
        "volume_usd": 13590283.29
    },
    {
        "date": "2018-12-02",
        "open": 116.82,
        "high": 119.45,
        "low": 114.06,
        "close": 114.76,
        "volume_eth": 73100.41,
        "volume_usd": 8466635.57
    },
    {
        "date": "2018-12-03",
        "open": 114.76,
        "high": 115.12,
        "low": 104.74,
        "close": 107.21,
        "volume_eth": 135846.71,
        "volume_usd": 14857431.87
    },
    {
        "date": "2018-12-04",
        "open": 107.21,
        "high": 112,
        "low": 104.78,
        "close": 108.61,
        "volume_eth": 109739.36,
        "volume_usd": 11932934.91
    },
    {
        "date": "2018-12-05",
        "open": 108.61,
        "high": 109.37,
        "low": 99.5,
        "close": 100.71,
        "volume_eth": 164822.22,
        "volume_usd": 17146191.6
    },
    {
        "date": "2018-12-06",
        "open": 100.71,
        "high": 102.85,
        "low": 88.92,
        "close": 89.25,
        "volume_eth": 329789.66,
        "volume_usd": 31842802.29
    },
    {
        "date": "2018-12-07",
        "open": 89.25,
        "high": 96.86,
        "low": 81.02,
        "close": 92.45,
        "volume_eth": 527140.88,
        "volume_usd": 45968256.23
    },
    {
        "date": "2018-12-08",
        "open": 92.45,
        "high": 97.52,
        "low": 84,
        "close": 89.99,
        "volume_eth": 242134.08,
        "volume_usd": 21850090.46
    },
    {
        "date": "2018-12-09",
        "open": 89.99,
        "high": 98.3,
        "low": 88.15,
        "close": 92.79,
        "volume_eth": 180006.45,
        "volume_usd": 16912462.25
    },
    {
        "date": "2018-12-10",
        "open": 92.79,
        "high": 94.62,
        "low": 87.42,
        "close": 89.23,
        "volume_eth": 131111.42,
        "volume_usd": 11844457.46
    },
    {
        "date": "2018-12-11",
        "open": 89.23,
        "high": 91.03,
        "low": 85.15,
        "close": 87.23,
        "volume_eth": 118680.85,
        "volume_usd": 10390552.39
    },
    {
        "date": "2018-12-12",
        "open": 86.96,
        "high": 91,
        "low": 86.06,
        "close": 89.09,
        "volume_eth": 113468,
        "volume_usd": 10103816.2
    },
    {
        "date": "2018-12-13",
        "open": 89.09,
        "high": 90.25,
        "low": 83.48,
        "close": 85.35,
        "volume_eth": 141927.72,
        "volume_usd": 12333682.97
    },
    {
        "date": "2018-12-14",
        "open": 85.35,
        "high": 85.98,
        "low": 80.6,
        "close": 83,
        "volume_eth": 150409.09,
        "volume_usd": 12594001.05
    },
    {
        "date": "2018-12-15",
        "open": 83,
        "high": 84.29,
        "low": 81,
        "close": 83.03,
        "volume_eth": 108147.49,
        "volume_usd": 8932391.48
    },
    {
        "date": "2018-12-16",
        "open": 83.03,
        "high": 86.72,
        "low": 82.82,
        "close": 83.74,
        "volume_eth": 93043.85,
        "volume_usd": 7933834.73
    },
    {
        "date": "2018-12-17",
        "open": 83.74,
        "high": 96.74,
        "low": 83.51,
        "close": 93.79,
        "volume_eth": 250785.23,
        "volume_usd": 22906704.11
    },
    {
        "date": "2018-12-18",
        "open": 93.79,
        "high": 101.5,
        "low": 91.55,
        "close": 101,
        "volume_eth": 193888.56,
        "volume_usd": 18366822.86
    },
    {
        "date": "2018-12-19",
        "open": 101,
        "high": 107.88,
        "low": 98.16,
        "close": 99.34,
        "volume_eth": 350590.97,
        "volume_usd": 36140501.3
    },
    {
        "date": "2018-12-20",
        "open": 99.34,
        "high": 119,
        "low": 98.5,
        "close": 114.6,
        "volume_eth": 329214.9,
        "volume_usd": 36343401.07
    },
    {
        "date": "2018-12-21",
        "open": 114.6,
        "high": 120,
        "low": 105.3,
        "close": 107.74,
        "volume_eth": 240327.62,
        "volume_usd": 27081502.1
    },
    {
        "date": "2018-12-22",
        "open": 107.74,
        "high": 116.3,
        "low": 105.5,
        "close": 116.09,
        "volume_eth": 118020.32,
        "volume_usd": 13084739
    },
    {
        "date": "2018-12-23",
        "open": 116.09,
        "high": 133,
        "low": 116.01,
        "close": 129.61,
        "volume_eth": 325889.19,
        "volume_usd": 41373109.44
    },
    {
        "date": "2018-12-24",
        "open": 129.61,
        "high": 159.51,
        "low": 129.53,
        "close": 139.03,
        "volume_eth": 597537.44,
        "volume_usd": 86341703
    },
    {
        "date": "2018-12-25",
        "open": 139.03,
        "high": 140.26,
        "low": 122.15,
        "close": 128.82,
        "volume_eth": 359477.67,
        "volume_usd": 46035575.68
    },
    {
        "date": "2018-12-26",
        "open": 128.82,
        "high": 136.72,
        "low": 123.54,
        "close": 130.47,
        "volume_eth": 203861.96,
        "volume_usd": 26514226.86
    },
    {
        "date": "2018-12-27",
        "open": 130.47,
        "high": 131.78,
        "low": 112.26,
        "close": 114.63,
        "volume_eth": 258639.35,
        "volume_usd": 31008710.67
    },
    {
        "date": "2018-12-28",
        "open": 114.63,
        "high": 138.58,
        "low": 113.31,
        "close": 136.82,
        "volume_eth": 326758.17,
        "volume_usd": 41814965.21
    },
    {
        "date": "2018-12-29",
        "open": 136.82,
        "high": 147.3,
        "low": 131.72,
        "close": 134.15,
        "volume_eth": 254462.14,
        "volume_usd": 35179842.41
    },
    {
        "date": "2018-12-30",
        "open": 134.15,
        "high": 140.64,
        "low": 128.3,
        "close": 138.78,
        "volume_eth": 205485.32,
        "volume_usd": 27888935.27
    },
    {
        "date": "2018-12-31",
        "open": 138.78,
        "high": 138.9,
        "low": 128.5,
        "close": 130.53,
        "volume_eth": 165355.78,
        "volume_usd": 22097680.63
    }
];

data = [{"Date": "2012-12-04", "Open": "346.202362", "High": "346.456390", "Low": "341.569702", "Close": "344.224762", "Adj Close": "344.224762", "Volume": "3998331"}, {"Date": "2012-12-05", "Open": "344.782684", "High": "345.953278", "Low": "339.890991", "Close": "342.625763", "Adj Close": "342.625763", "Volume": "3738761"}, {"Date": "2012-12-06", "Open": "342.511169", "High": "346.506195", "Low": "340.976929", "Close": "344.274567", "Adj Close": "344.274567", "Volume": "2935562"}, {"Date": "2012-12-07", "Open": "346.202362", "High": "347.138824", "Low": "339.935852", "Close": "340.827484", "Adj Close": "340.827484", "Volume": "3852988"}, {"Date": "2012-12-10", "Open": "341.415283", "High": "344.533600", "Low": "340.618286", "Close": "341.430237", "Adj Close": "341.430237", "Volume": "2743645"}, {"Date": "2012-12-11", "Open": "343.711670", "High": "349.649414", "Low": "342.575928", "Close": "347.138824", "Adj Close": "347.138824", "Volume": "5395348"}, {"Date": "2012-12-12", "Open": "348.309448", "High": "350.441467", "Low": "345.445190", "Close": "347.477570", "Adj Close": "347.477570", "Volume": "4870186"}, {"Date": "2012-12-13", "Open": "356.623291", "High": "356.897247", "Low": "348.468842", "Close": "350.037964", "Adj Close": "350.037964", "Volume": "6915625"}, {"Date": "2012-12-14", "Open": "348.279572", "High": "352.588409", "Low": "347.910950", "Close": "349.669342", "Adj Close": "349.669342", "Volume": "4276168"}, {"Date": "2012-12-17", "Open": "351.432739", "High": "359.612091", "Low": "350.695496", "Close": "359.044220", "Adj Close": "359.044220", "Volume": "6093555"}, {"Date": "2012-12-18", "Open": "356.962006", "High": "363.188690", "Low": "356.189911", "Close": "359.188660", "Adj Close": "359.188660", "Volume": "6032326"}, {"Date": "2012-12-19", "Open": "359.009338", "High": "360.150055", "Low": "357.001862", "Close": "358.710480", "Adj Close": "358.710480", "Volume": "3851583"}, {"Date": "2012-12-20", "Open": "360.279572", "High": "360.971985", "Low": "357.146332", "Close": "359.831268", "Adj Close": "359.831268", "Volume": "3326422"}, {"Date": "2012-12-21", "Open": "355.651917", "High": "358.067871", "Low": "353.933380", "Close": "356.478821", "Adj Close": "356.478821", "Volume": "7078433"}, {"Date": "2012-12-24", "Open": "355.920929", "High": "356.254669", "Low": "352.414063", "Close": "353.425262", "Adj Close": "353.425262", "Volume": "1688104"}, {"Date": "2012-12-26", "Open": "352.712952", "High": "355.108978", "Low": "349.893524", "Close": "353.111450", "Adj Close": "353.111450", "Volume": "2373664"}, {"Date": "2012-12-27", "Open": "352.249695", "High": "353.096497", "Low": "348.000610", "Close": "351.826263", "Adj Close": "351.826263", "Volume": "3307150"}, {"Date": "2012-12-28", "Open": "349.534851", "High": "352.135101", "Low": "348.697998", "Close": "348.697998", "Adj Close": "348.697998", "Volume": "2814510"}, {"Date": "2012-12-31", "Open": "348.693024", "High": "353.958282", "Low": "346.700470", "Close": "352.369232", "Adj Close": "352.369232", "Volume": "4009773"}, {"Date": "2013-01-02", "Open": "358.366760", "High": "362.142609", "Low": "356.937103", "Close": "360.274597", "Adj Close": "360.274597", "Volume": "5101651"}, {"Date": "2013-01-03", "Open": "361.111481", "High": "364.598389", "Low": "359.014313", "Close": "360.483826", "Adj Close": "360.483826", "Volume": "4653778"}, {"Date": "2013-01-04", "Open": "363.308228", "High": "369.350586", "Low": "362.481323", "Close": "367.607117", "Adj Close": "367.607117", "Volume": "5547717"}, {"Date": "2013-01-07", "Open": "366.351837", "High": "368.309479", "Low": "363.925903", "Close": "366.003143", "Adj Close": "366.003143", "Volume": "3323812"}, {"Date": "2013-01-08", "Open": "366.396667", "High": "366.775238", "Low": "360.862396", "Close": "365.280823", "Adj Close": "365.280823", "Volume": "3364765"}, {"Date": "2013-01-09", "Open": "364.767761", "High": "367.796417", "Low": "362.939606", "Close": "367.681824", "Adj Close": "367.681824", "Volume": "4064578"}, {"Date": "2013-01-10", "Open": "370.028046", "High": "371.108978", "Low": "365.380463", "Close": "369.355560", "Adj Close": "369.355560", "Volume": "3685161"}, {"Date": "2013-01-11", "Open": "369.614594", "High": "369.828796", "Low": "366.775238", "Close": "368.613342", "Adj Close": "368.613342", "Volume": "2580034"}, {"Date": "2013-01-14", "Open": "367.123932", "High": "369.714233", "Low": "359.826294", "Close": "360.274597", "Adj Close": "360.274597", "Volume": "5749269"}, {"Date": "2013-01-15", "Open": "358.321930", "High": "366.127655", "Low": "354.720428", "Close": "361.111481", "Adj Close": "361.111481", "Volume": "7884844"}, {"Date": "2013-01-16", "Open": "359.851196", "High": "360.817566", "Low": "355.502502", "Close": "356.259644", "Adj Close": "356.259644", "Volume": "4061968"}, {"Date": "2013-01-17", "Open": "357.514954", "High": "358.476349", "Low": "354.182434", "Close": "354.331879", "Adj Close": "354.331879", "Volume": "4439578"}, {"Date": "2013-01-18", "Open": "353.853668", "High": "355.054169", "Low": "349.355530", "Close": "350.939606", "Adj Close": "350.939606", "Volume": "6477790"}, {"Date": "2013-01-22", "Open": "351.014313", "High": "351.353058", "Low": "346.461365", "Close": "350.122650", "Adj Close": "350.122650", "Volume": "7613230"}, {"Date": "2013-01-23", "Open": "366.620819", "High": "373.101532", "Low": "366.521179", "Close": "369.365540", "Adj Close": "369.365540", "Volume": "11862498"}, {"Date": "2013-01-24", "Open": "369.236023", "High": "377.001892", "Low": "368.872375", "Close": "375.696808", "Adj Close": "375.696808", "Volume": "6790758"}, {"Date": "2013-01-25", "Open": "373.983215", "High": "377.823822", "Low": "373.724182", "Close": "375.427795", "Adj Close": "375.427795", "Volume": "4468486"}, {"Date": "2013-01-28", "Open": "374.476379", "High": "376.389191", "Low": "372.548584", "Close": "373.963287", "Adj Close": "373.963287", "Volume": "3266398"}, {"Date": "2013-01-29", "Open": "371.980713", "High": "377.061676", "Low": "371.876129", "Close": "375.432800", "Adj Close": "375.432800", "Volume": "3507297"}, {"Date": "2013-01-30", "Open": "375.462677", "High": "379.054199", "Low": "375.049225", "Close": "375.507507", "Adj Close": "375.507507", "Volume": "3478991"}, {"Date": "2013-01-31", "Open": "373.853699", "High": "377.395416", "Low": "373.724182", "Close": "376.434021", "Adj Close": "376.434021", "Volume": "3280651"}, {"Date": "2013-02-01", "Open": "377.684357", "High": "386.850006", "Low": "377.634521", "Close": "386.351868", "Adj Close": "386.351868", "Volume": "7520283"}, {"Date": "2013-02-04", "Open": "382.411621", "High": "383.796448", "Low": "377.719208", "Close": "378.092804", "Adj Close": "378.092804", "Volume": "6103793"}, {"Date": "2013-02-05", "Open": "379.143890", "High": "384.115234", "Low": "378.316986", "Close": "381.440277", "Adj Close": "381.440277", "Volume": "3755424"}, {"Date": "2013-02-06", "Open": "378.117737", "High": "385.036774", "Low": "377.833771", "Close": "383.647003", "Adj Close": "383.647003", "Volume": "4171778"}, {"Date": "2013-02-07", "Open": "383.412872", "High": "387.950867", "Low": "381.320709", "Close": "385.529938", "Adj Close": "385.529938", "Volume": "5701692"}, {"Date": "2013-02-08", "Open": "388.608398", "High": "391.866180", "Low": "388.324463", "Close": "391.218628", "Adj Close": "391.218628", "Volume": "6062840"}, {"Date": "2013-02-11", "Open": "387.746643", "High": "390.038055", "Low": "385.430298", "Close": "389.749115", "Adj Close": "389.749115", "Volume": "4351851"}, {"Date": "2013-02-12", "Open": "389.415375", "High": "392.478882", "Low": "388.229828", "Close": "388.892334", "Adj Close": "388.892334", "Volume": "3731936"}, {"Date": "2013-02-13", "Open": "388.608398", "High": "391.208649", "Low": "388.528687", "Close": "389.968292", "Adj Close": "389.968292", "Volume": "2405382"}, {"Date": "2013-02-14", "Open": "388.409149", "High": "392.897339", "Low": "387.432800", "Close": "392.439056", "Adj Close": "392.439056", "Volume": "3483609"}, {"Date": "2013-02-15", "Open": "392.229828", "High": "395.148895", "Low": "392.065430", "Close": "394.964569", "Adj Close": "394.964569", "Volume": "5480064"}, {"Date": "2013-02-19", "Open": "396.508789", "High": "401.993225", "Low": "396.155121", "Close": "401.918518", "Adj Close": "401.918518", "Volume": "5885578"}, {"Date": "2013-02-20", "Open": "401.146393", "High": "402.974548", "Low": "394.416626", "Close": "394.750366", "Adj Close": "394.750366", "Volume": "5549122"}, {"Date": "2013-02-21", "Open": "397.510040", "High": "401.221130", "Low": "394.132690", "Close": "396.279633", "Adj Close": "396.279633", "Volume": "7039086"}, {"Date": "2013-02-22", "Open": "398.137695", "High": "399.128967", "Low": "395.417877", "Close": "398.361847", "Adj Close": "398.361847", "Volume": "4123197"}, {"Date": "2013-02-25", "Open": "399.652008", "High": "402.695587", "Low": "393.769043", "Close": "393.908539", "Adj Close": "393.908539", "Volume": "4625071"}, {"Date": "2013-02-26", "Open": "396.015625", "High": "396.488861", "Low": "390.735443", "Close": "393.589722", "Adj Close": "393.589722", "Volume": "4421511"}, {"Date": "2013-02-27", "Open": "395.916016", "High": "400.872437", "Low": "394.077911", "Close": "398.396698", "Adj Close": "398.396698", "Volume": "4067389"}, {"Date": "2013-02-28", "Open": "399.054260", "High": "401.988251", "Low": "399.019379", "Close": "399.104065", "Adj Close": "399.104065", "Volume": "4548586"}, {"Date": "2013-03-01", "Open": "397.410400", "High": "402.062958", "Low": "396.588501", "Close": "401.589752", "Adj Close": "401.589752", "Volume": "4367108"}, {"Date": "2013-03-04", "Open": "401.146393", "High": "409.883667", "Low": "400.996979", "Close": "409.216156", "Adj Close": "409.216156", "Volume": "5572007"}, {"Date": "2013-03-05", "Open": "412.917297", "High": "418.506348", "Low": "412.902344", "Close": "417.734222", "Adj Close": "417.734222", "Volume": "8118517"}, {"Date": "2013-03-06", "Open": "418.944702", "High": "420.424133", "Low": "412.857513", "Close": "414.137695", "Adj Close": "414.137695", "Volume": "5767537"}, {"Date": "2013-03-07", "Open": "415.472717", "High": "416.747925", "Low": "413.241058", "Close": "414.745422", "Adj Close": "414.745422", "Volume": "4120788"}, {"Date": "2013-03-08", "Open": "415.691895", "High": "415.901093", "Low": "410.984528", "Close": "414.207458", "Adj Close": "414.207458", "Volume": "5845629"}, {"Date": "2013-03-11", "Open": "414.292145", "High": "418.282166", "Low": "414.197479", "Close": "415.851288", "Adj Close": "415.851288", "Volume": "3201355"}, {"Date": "2013-03-12", "Open": "413.803955", "High": "414.391754", "Low": "410.297119", "Close": "412.259735", "Adj Close": "412.259735", "Volume": "4031655"}, {"Date": "2013-03-13", "Open": "412.404205", "High": "413.794006", "Low": "409.619659", "Close": "411.114044", "Adj Close": "411.114044", "Volume": "3294904"}, {"Date": "2013-03-14", "Open": "411.950897", "High": "411.950897", "Low": "407.168823", "Close": "409.236084", "Adj Close": "409.236084", "Volume": "3314778"}, {"Date": "2013-03-15", "Open": "407.721771", "High": "408.618408", "Low": "405.151398", "Close": "405.629608", "Adj Close": "405.629608", "Volume": "6222637"}, {"Date": "2013-03-18", "Open": "400.996979", "High": "404.862488", "Low": "399.238556", "Close": "402.386749", "Adj Close": "402.386749", "Volume": "3690381"}, {"Date": "2013-03-19", "Open": "404.105316", "High": "408.095367", "Low": "401.719269", "Close": "404.145172", "Adj Close": "404.145172", "Volume": "4212129"}, {"Date": "2013-03-20", "Open": "406.889862", "High": "407.228607", "Low": "404.204956", "Close": "405.833832", "Adj Close": "405.833832", "Volume": "2938573"}, {"Date": "2013-03-21", "Open": "404.130219", "High": "406.934723", "Low": "403.412903", "Close": "404.115265", "Adj Close": "404.115265", "Volume": "2966277"}, {"Date": "2013-03-22", "Open": "405.848785", "High": "406.097839", "Low": "403.308289", "Close": "403.642059", "Adj Close": "403.642059", "Volume": "2987556"}, {"Date": "2013-03-25", "Open": "404.688141", "High": "408.085388", "Low": "401.903564", "Close": "403.308289", "Adj Close": "403.308289", "Volume": "3436834"}, {"Date": "2013-03-26", "Open": "405.231079", "High": "405.480164", "Low": "402.386749", "Close": "404.693115", "Adj Close": "404.693115", "Volume": "2392735"}, {"Date": "2013-03-27", "Open": "401.833832", "High": "401.993225", "Low": "399.168823", "Close": "399.831329", "Adj Close": "399.831329", "Volume": "4342616"}, {"Date": "2013-03-28", "Open": "400.493866", "High": "401.181274", "Low": "395.168823", "Close": "395.612152", "Adj Close": "395.612152", "Volume": "4592750"}, {"Date": "2013-04-01", "Open": "396.020630", "High": "399.627106", "Low": "395.143890", "Close": "399.099091", "Adj Close": "399.099091", "Volume": "3628148"}, {"Date": "2013-04-02", "Open": "400.767822", "High": "405.893616", "Low": "400.498840", "Close": "405.001953", "Adj Close": "405.001953", "Volume": "4098304"}, {"Date": "2013-04-03", "Open": "405.211182", "High": "405.579773", "Low": "398.840057", "Close": "401.594727", "Adj Close": "401.594727", "Volume": "3490033"}, {"Date": "2013-04-04", "Open": "400.623352", "High": "401.370575", "Low": "394.172546", "Close": "396.050507", "Adj Close": "396.050507", "Volume": "4913548"}, {"Date": "2013-04-05", "Open": "391.562317", "High": "392.025604", "Low": "386.750366", "Close": "390.062958", "Adj Close": "390.062958", "Volume": "6893542"}, {"Date": "2013-04-08", "Open": "387.920990", "High": "388.319489", "Low": "382.765289", "Close": "385.978271", "Adj Close": "385.978271", "Volume": "5685431"}, {"Date": "2013-04-09", "Open": "386.302032", "High": "390.411652", "Low": "385.111511", "Close": "387.373016", "Adj Close": "387.373016", "Volume": "4330772"}, {"Date": "2013-04-10", "Open": "389.998199", "High": "394.695587", "Low": "386.551117", "Close": "393.614624", "Adj Close": "393.614624", "Volume": "3972033"}, {"Date": "2013-04-11", "Open": "394.959595", "High": "395.069183", "Low": "390.566071", "Close": "393.719238", "Adj Close": "393.719238", "Volume": "4072608"}, {"Date": "2013-04-12", "Open": "394.516266", "High": "394.571045", "Low": "390.003174", "Close": "393.549866", "Adj Close": "393.549866", "Volume": "3285670"}, {"Date": "2013-04-15", "Open": "391.507538", "High": "397.011902", "Low": "387.059204", "Close": "389.505035", "Adj Close": "389.505035", "Volume": "4924590"}, {"Date": "2013-04-16", "Open": "391.826324", "High": "396.513763", "Low": "390.496338", "Close": "395.203674", "Adj Close": "395.203674", "Volume": "3497059"}, {"Date": "2013-04-17", "Open": "391.906036", "High": "393.943390", "Low": "387.597198", "Close": "389.818878", "Adj Close": "389.818878", "Volume": "4089270"}, {"Date": "2013-04-18", "Open": "391.208649", "High": "391.432800", "Low": "379.208618", "Close": "381.524963", "Adj Close": "381.524963", "Volume": "6669907"}, {"Date": "2013-04-19", "Open": "383.143890", "High": "400.219879", "Low": "381.699310", "Close": "398.441528", "Adj Close": "398.441528", "Volume": "11649904"}, {"Date": "2013-04-22", "Open": "398.805176", "High": "400.478912", "Low": "386.052979", "Close": "398.561096", "Adj Close": "398.561096", "Volume": "5788415"}, {"Date": "2013-04-23", "Open": "399.004425", "High": "406.227356", "Low": "398.685638", "Close": "402.441559", "Adj Close": "402.441559", "Volume": "4601784"}, {"Date": "2013-04-24", "Open": "402.546173", "High": "407.472687", "Low": "402.491364", "Close": "405.206177", "Adj Close": "405.206177", "Volume": "3671912"}, {"Date": "2013-04-25", "Open": "406.600952", "High": "406.710541", "Low": "402.307068", "Close": "403.039307", "Adj Close": "403.039307", "Volume": "3999335"}, {"Date": "2013-04-26", "Open": "402.292114", "High": "402.361847", "Low": "396.802673", "Close": "399.213654", "Adj Close": "399.213654", "Volume": "4994049"}, {"Date": "2013-04-29", "Open": "400.125244", "High": "409.813904", "Low": "400.000702", "Close": "408.000702", "Adj Close": "408.000702", "Volume": "4618848"}, {"Date": "2013-04-30", "Open": "407.970825", "High": "412.274689", "Low": "407.313293", "Close": "410.745422", "Adj Close": "410.745422", "Volume": "4630692"}, {"Date": "2013-05-01", "Open": "410.092865", "High": "410.820160", "Low": "406.655762", "Close": "408.683167", "Adj Close": "408.683167", "Volume": "2920907"}, {"Date": "2013-05-02", "Open": "408.518768", "High": "415.716797", "Low": "407.995728", "Close": "413.256012", "Adj Close": "413.256012", "Volume": "4051730"}, {"Date": "2013-05-03", "Open": "416.917297", "High": "421.818909", "Low": "416.439087", "Close": "421.280945", "Adj Close": "421.280945", "Volume": "5044036"}, {"Date": "2013-05-06", "Open": "422.546204", "High": "429.315826", "Low": "422.546204", "Close": "429.166382", "Adj Close": "429.166382", "Volume": "4298652"}, {"Date": "2013-05-07", "Open": "429.893646", "High": "430.322052", "Low": "423.746704", "Close": "427.014435", "Adj Close": "427.014435", "Volume": "3932686"}, {"Date": "2013-05-08", "Open": "426.899872", "High": "435.308350", "Low": "424.862518", "Close": "435.183838", "Adj Close": "435.183838", "Volume": "4955104"}, {"Date": "2013-05-09", "Open": "433.794037", "High": "438.187561", "Low": "432.493896", "Close": "434.112854", "Adj Close": "434.112854", "Volume": "4417697"}, {"Date": "2013-05-10", "Open": "436.020691", "High": "438.625916", "Low": "434.451569", "Close": "438.471497", "Adj Close": "438.471497", "Volume": "3809626"}, {"Date": "2013-05-13", "Open": "437.804016", "High": "439.587311", "Low": "435.059296", "Close": "437.126556", "Adj Close": "437.126556", "Volume": "2907859"}, {"Date": "2013-05-14", "Open": "437.111603", "High": "442.685699", "Low": "436.932281", "Close": "441.893677", "Adj Close": "441.893677", "Volume": "3170439"}, {"Date": "2013-05-15", "Open": "446.078003", "High": "456.479004", "Low": "445.340759", "Close": "456.234924", "Adj Close": "456.234924", "Volume": "8001680"}, {"Date": "2013-05-16", "Open": "457.784119", "High": "458.272278", "Low": "449.320831", "Close": "450.247375", "Adj Close": "450.247375", "Volume": "6443261"}, {"Date": "2013-05-17", "Open": "453.310883", "High": "455.039398", "Low": "448.578613", "Close": "452.892456", "Adj Close": "452.892456", "Volume": "5604930"}, {"Date": "2013-05-20", "Open": "450.810242", "High": "458.581116", "Low": "450.810242", "Close": "452.568665", "Adj Close": "452.568665", "Volume": "4562437"}, {"Date": "2013-05-21", "Open": "452.314606", "High": "454.127808", "Low": "447.129059", "Close": "451.791565", "Adj Close": "451.791565", "Volume": "3980866"}, {"Date": "2013-05-22", "Open": "449.594818", "High": "452.957214", "Low": "441.784088", "Close": "443.049347", "Adj Close": "443.049347", "Volume": "5140396"}, {"Date": "2013-05-23", "Open": "436.862518", "High": "443.318329", "Low": "435.368134", "Close": "439.746735", "Adj Close": "439.746735", "Volume": "4567255"}, {"Date": "2013-05-24", "Open": "435.995789", "High": "437.769135", "Low": "433.878723", "Close": "435.029388", "Adj Close": "435.029388", "Volume": "4610818"}, {"Date": "2013-05-28", "Open": "440.100403", "High": "444.404266", "Low": "438.556183", "Close": "438.989563", "Adj Close": "438.989563", "Volume": "4531923"}, {"Date": "2013-05-29", "Open": "436.219940", "High": "437.355682", "Low": "430.531250", "Close": "432.533752", "Adj Close": "432.533752", "Volume": "4041893"}, {"Date": "2013-05-30", "Open": "433.335754", "High": "437.808990", "Low": "431.587311", "Close": "433.754181", "Adj Close": "433.754181", "Volume": "4257298"}, {"Date": "2013-05-31", "Open": "432.439117", "High": "436.862518", "Low": "432.140228", "Close": "433.983337", "Adj Close": "433.983337", "Volume": "3953564"}, {"Date": "2013-06-03", "Open": "434.869995", "High": "435.353180", "Low": "425.913574", "Close": "432.195038", "Adj Close": "432.195038", "Volume": "4969959"}, {"Date": "2013-06-04", "Open": "432.304626", "High": "433.669495", "Low": "425.440338", "Close": "427.945953", "Adj Close": "427.945953", "Volume": "3751208"}, {"Date": "2013-06-05", "Open": "429.644592", "High": "433.101624", "Low": "426.964630", "Close": "428.244843", "Adj Close": "428.244843", "Volume": "4229394"}, {"Date": "2013-06-06", "Open": "430.536255", "High": "431.547455", "Low": "422.028137", "Close": "430.705597", "Adj Close": "430.705597", "Volume": "5177534"}, {"Date": "2013-06-07", "Open": "433.584808", "High": "438.356934", "Low": "431.044342", "Close": "438.222443", "Adj Close": "438.222443", "Volume": "5369250"}, {"Date": "2013-06-10", "Open": "439.403015", "High": "443.836395", "Low": "438.401764", "Close": "443.447845", "Adj Close": "443.447845", "Volume": "4693125"}, {"Date": "2013-06-11", "Open": "440.334503", "High": "441.843872", "Low": "438.117828", "Close": "438.262299", "Adj Close": "438.262299", "Volume": "3528376"}, {"Date": "2013-06-12", "Open": "441.076721", "High": "441.345734", "Low": "433.201263", "Close": "434.361908", "Adj Close": "434.361908", "Volume": "4426128"}, {"Date": "2013-06-13", "Open": "432.867493", "High": "438.187561", "Low": "431.134003", "Close": "436.862518", "Adj Close": "436.862518", "Volume": "4155317"}, {"Date": "2013-06-14", "Open": "438.406738", "High": "440.698151", "Low": "435.432892", "Close": "435.886200", "Adj Close": "435.886200", "Volume": "4506830"}, {"Date": "2013-06-17", "Open": "437.973358", "High": "443.054321", "Low": "437.500153", "Close": "441.470276", "Adj Close": "441.470276", "Volume": "4308690"}, {"Date": "2013-06-18", "Open": "442.665771", "High": "448.817719", "Low": "442.516327", "Close": "448.628418", "Adj Close": "448.628418", "Volume": "4350044"}, {"Date": "2013-06-19", "Open": "449.002045", "High": "453.719360", "Low": "447.074249", "Close": "448.658325", "Adj Close": "448.658325", "Volume": "5853659"}, {"Date": "2013-06-20", "Open": "445.325806", "High": "448.817719", "Low": "440.005737", "Close": "440.718079", "Adj Close": "440.718079", "Volume": "6769278"}, {"Date": "2013-06-21", "Open": "442.511353", "High": "443.278473", "Low": "434.904877", "Close": "438.820190", "Adj Close": "438.820190", "Volume": "7994453"}, {"Date": "2013-06-24", "Open": "434.312103", "High": "436.523804", "Low": "430.013214", "Close": "433.270996", "Adj Close": "433.270996", "Volume": "6056416"}, {"Date": "2013-06-25", "Open": "436.992035", "High": "438.197540", "Low": "430.640839", "Close": "431.482697", "Adj Close": "431.482697", "Volume": "5125540"}, {"Date": "2013-06-26", "Open": "435.243591", "High": "437.360657", "Low": "433.659546", "Close": "435.193787", "Adj Close": "435.193787", "Volume": "3676529"}, {"Date": "2013-06-27", "Open": "437.759186", "High": "440.693176", "Low": "436.688171", "Close": "436.897400", "Adj Close": "436.897400", "Volume": "3867442"}, {"Date": "2013-06-28", "Open": "435.816467", "High": "439.273499", "Low": "435.462769", "Close": "438.541229", "Adj Close": "438.541229", "Volume": "4716212"}, {"Date": "2013-07-01", "Open": "441.569885", "High": "444.374390", "Low": "440.847595", "Close": "442.282227", "Adj Close": "442.282227", "Volume": "3462530"}, {"Date": "2013-07-02", "Open": "443.437897", "High": "443.836395", "Low": "436.997040", "Close": "439.507629", "Adj Close": "439.507629", "Volume": "3797180"}, {"Date": "2013-07-03", "Open": "438.307129", "High": "442.924805", "Low": "437.609741", "Close": "441.559937", "Adj Close": "441.559937", "Volume": "2101849"}, {"Date": "2013-07-05", "Open": "443.343231", "High": "446.033173", "Low": "442.013214", "Close": "445.076752", "Adj Close": "445.076752", "Volume": "3416558"}, {"Date": "2013-07-08", "Open": "447.926056", "High": "451.442871", "Low": "446.865051", "Close": "450.855072", "Adj Close": "450.855072", "Volume": "3953764"}, {"Date": "2013-07-09", "Open": "453.799042", "High": "454.770416", "Low": "447.313354", "Close": "450.929810", "Adj Close": "450.929810", "Volume": "3973639"}, {"Date": "2013-07-10", "Open": "450.038147", "High": "453.868774", "Low": "448.508881", "Close": "451.303406", "Adj Close": "451.303406", "Volume": "3429607"}, {"Date": "2013-07-11", "Open": "454.795319", "High": "458.685730", "Low": "452.563690", "Close": "458.401794", "Adj Close": "458.401794", "Volume": "5187772"}, {"Date": "2013-07-12", "Open": "458.282257", "High": "459.776642", "Low": "455.911133", "Close": "459.776642", "Adj Close": "459.776642", "Volume": "5155652"}, {"Date": "2013-07-15", "Open": "460.424225", "High": "462.267303", "Low": "456.469055", "Close": "460.618500", "Adj Close": "460.618500", "Volume": "3935697"}, {"Date": "2013-07-16", "Open": "461.833923", "High": "462.252350", "Low": "455.243622", "Close": "458.087982", "Adj Close": "458.087982", "Volume": "3980866"}, {"Date": "2013-07-17", "Open": "458.780365", "High": "461.699432", "Low": "456.439148", "Close": "457.559967", "Adj Close": "457.559967", "Volume": "3023490"}, {"Date": "2013-07-18", "Open": "457.779144", "High": "458.282257", "Low": "449.908630", "Close": "453.639648", "Adj Close": "453.639648", "Volume": "7296246"}, {"Date": "2013-07-19", "Open": "441.649597", "High": "449.789093", "Low": "436.170135", "Close": "446.625946", "Adj Close": "446.625946", "Volume": "14773769"}, {"Date": "2013-07-22", "Open": "449.315857", "High": "454.630920", "Low": "446.825195", "Close": "453.649597", "Adj Close": "453.649597", "Volume": "5828164"}, {"Date": "2013-07-23", "Open": "453.649597", "High": "454.795319", "Low": "448.105377", "Close": "450.212494", "Adj Close": "450.212494", "Volume": "4106736"}, {"Date": "2013-07-24", "Open": "451.936035", "High": "453.450348", "Low": "448.668274", "Close": "449.764160", "Adj Close": "449.764160", "Volume": "4172581"}, {"Date": "2013-07-25", "Open": "445.266022", "High": "446.750458", "Low": "441.385590", "Close": "442.192566", "Adj Close": "442.192566", "Volume": "6024698"}, {"Date": "2013-07-26", "Open": "441.838867", "High": "443.333282", "Low": "439.353210", "Close": "441.021942", "Adj Close": "441.021942", "Volume": "3568727"}, {"Date": "2013-07-29", "Open": "440.797791", "High": "445.739258", "Low": "438.800262", "Close": "439.487701", "Adj Close": "439.487701", "Volume": "3797983"}, {"Date": "2013-07-30", "Open": "441.076721", "High": "446.132782", "Low": "438.790314", "Close": "443.796539", "Adj Close": "443.796539", "Volume": "3524361"}, {"Date": "2013-07-31", "Open": "444.827667", "High": "446.581116", "Low": "441.435394", "Close": "442.217468", "Adj Close": "442.217468", "Volume": "4363294"}, {"Date": "2013-08-01", "Open": "445.828918", "High": "450.586090", "Low": "445.828918", "Close": "450.421722", "Adj Close": "450.421722", "Volume": "4292830"}, {"Date": "2013-08-02", "Open": "450.033173", "High": "451.806519", "Low": "448.728058", "Close": "451.592316", "Adj Close": "451.592316", "Volume": "3440648"}, {"Date": "2013-08-05", "Open": "451.004517", "High": "451.069275", "Low": "447.921082", "Close": "450.810242", "Adj Close": "450.810242", "Volume": "2629218"}, {"Date": "2013-08-06", "Open": "450.655823", "High": "453.156464", "Low": "446.192566", "Close": "446.610992", "Adj Close": "446.610992", "Volume": "3023490"}, {"Date": "2013-08-07", "Open": "445.848846", "High": "447.547485", "Low": "442.884949", "Close": "443.662048", "Adj Close": "443.662048", "Volume": "2768739"}, {"Date": "2013-08-08", "Open": "446.072998", "High": "446.247345", "Low": "440.992065", "Close": "444.663300", "Adj Close": "444.663300", "Volume": "2987155"}, {"Date": "2013-08-09", "Open": "443.617218", "High": "446.087952", "Low": "443.338257", "Close": "443.542480", "Adj Close": "443.542480", "Volume": "2657323"}, {"Date": "2013-08-12", "Open": "441.794037", "High": "441.843872", "Low": "439.178864", "Close": "441.101654", "Adj Close": "441.101654", "Volume": "2764323"}, {"Date": "2013-08-13", "Open": "441.759186", "High": "442.591064", "Low": "436.464020", "Close": "438.979584", "Adj Close": "438.979584", "Volume": "2850244"}, {"Date": "2013-08-14", "Open": "437.544983", "High": "438.471497", "Low": "431.960907", "Close": "433.280945", "Adj Close": "433.280945", "Volume": "4180009"}, {"Date": "2013-08-15", "Open": "430.605988", "High": "430.845093", "Low": "427.398010", "Close": "428.224915", "Adj Close": "428.224915", "Volume": "3752412"}, {"Date": "2013-08-16", "Open": "429.031891", "High": "429.609711", "Low": "426.670746", "Close": "426.855042", "Adj Close": "426.855042", "Volume": "3362757"}, {"Date": "2013-08-19", "Open": "427.253540", "High": "434.371857", "Low": "427.124023", "Close": "431.208710", "Adj Close": "431.208710", "Volume": "3635375"}, {"Date": "2013-08-20", "Open": "432.553680", "High": "434.426666", "Low": "430.157654", "Close": "431.094147", "Adj Close": "431.094147", "Volume": "2475243"}, {"Date": "2013-08-21", "Open": "433.699402", "High": "436.817688", "Low": "431.632141", "Close": "433.041840", "Adj Close": "433.041840", "Volume": "3527774"}, {"Date": "2013-08-22", "Open": "434.720551", "High": "435.741730", "Low": "433.500122", "Close": "435.223663", "Adj Close": "435.223663", "Volume": "1746321"}, {"Date": "2013-08-23", "Open": "437.275970", "High": "437.360657", "Low": "433.251068", "Close": "433.480225", "Adj Close": "433.480225", "Volume": "2162274"}, {"Date": "2013-08-26", "Open": "433.375610", "High": "435.816467", "Low": "431.407990", "Close": "431.577332", "Adj Close": "431.577332", "Volume": "2112890"}, {"Date": "2013-08-27", "Open": "428.204987", "High": "430.252319", "Low": "422.366852", "Close": "423.487671", "Adj Close": "423.487671", "Volume": "3481200"}, {"Date": "2013-08-28", "Open": "423.537476", "High": "426.107849", "Low": "422.302094", "Close": "422.690643", "Adj Close": "422.690643", "Volume": "2669770"}, {"Date": "2013-08-29", "Open": "422.949677", "High": "428.583557", "Low": "422.710571", "Close": "426.117798", "Adj Close": "426.117798", "Volume": "2968084"}, {"Date": "2013-08-30", "Open": "426.282196", "High": "427.417938", "Low": "421.201233", "Close": "421.868744", "Adj Close": "421.868744", "Volume": "3737155"}, {"Date": "2013-09-03", "Open": "425.584808", "High": "431.477722", "Low": "425.380554", "Close": "428.583557", "Adj Close": "428.583557", "Volume": "4110550"}, {"Date": "2013-09-04", "Open": "428.568634", "High": "435.119080", "Low": "425.988281", "Close": "434.187561", "Adj Close": "434.187561", "Volume": "4097702"}, {"Date": "2013-09-05", "Open": "435.119080", "High": "438.297150", "Low": "434.177582", "Close": "438.137756", "Adj Close": "438.137756", "Volume": "2592280"}, {"Date": "2013-09-06", "Open": "439.572388", "High": "440.239868", "Low": "435.238617", "Close": "438.147705", "Adj Close": "438.147705", "Volume": "3134907"}, {"Date": "2013-09-09", "Open": "440.214966", "High": "443.213715", "Low": "439.562408", "Close": "442.366913", "Adj Close": "442.366913", "Volume": "2478455"}, {"Date": "2013-09-10", "Open": "443.348236", "High": "444.334534", "Low": "440.349457", "Close": "442.675751", "Adj Close": "442.675751", "Volume": "2584852"}, {"Date": "2013-09-11", "Open": "442.610992", "High": "446.810242", "Low": "441.385590", "Close": "446.421692", "Adj Close": "446.421692", "Volume": "3233274"}, {"Date": "2013-09-12", "Open": "447.024445", "High": "447.273499", "Low": "443.343231", "Close": "444.862549", "Adj Close": "444.862549", "Volume": "2199212"}, {"Date": "2013-09-13", "Open": "445.579865", "High": "446.167664", "Low": "440.767883", "Close": "442.875000", "Adj Close": "442.875000", "Volume": "2660736"}, {"Date": "2013-09-16", "Open": "446.426697", "High": "446.825195", "Low": "440.782837", "Close": "442.222443", "Adj Close": "442.222443", "Volume": "2683019"}, {"Date": "2013-09-17", "Open": "442.048096", "High": "442.536255", "Low": "438.855072", "Close": "441.400513", "Adj Close": "441.400513", "Volume": "2528241"}, {"Date": "2013-09-18", "Open": "441.520081", "High": "450.297180", "Low": "439.886200", "Close": "449.973389", "Adj Close": "449.973389", "Volume": "3883903"}, {"Date": "2013-09-19", "Open": "451.303406", "High": "451.303406", "Low": "446.028168", "Close": "447.517609", "Adj Close": "447.517609", "Volume": "3207779"}, {"Date": "2013-09-20", "Open": "447.517609", "High": "450.376892", "Low": "446.137756", "Close": "449.868774", "Adj Close": "449.868774", "Volume": "8723175"}, {"Date": "2013-09-23", "Open": "446.401764", "High": "449.111633", "Low": "440.947235", "Close": "441.594788", "Adj Close": "441.594788", "Volume": "3568124"}, {"Date": "2013-09-24", "Open": "441.594788", "High": "443.388062", "Low": "439.054321", "Close": "441.764160", "Adj Close": "441.764160", "Volume": "2984746"}, {"Date": "2013-09-25", "Open": "441.619690", "High": "441.619690", "Low": "436.165161", "Close": "436.977112", "Adj Close": "436.977112", "Volume": "3310362"}, {"Date": "2013-09-26", "Open": "437.510101", "High": "439.726807", "Low": "435.866272", "Close": "437.445343", "Adj Close": "437.445343", "Volume": "2529245"}, {"Date": "2013-09-27", "Open": "435.776611", "High": "437.121552", "Low": "434.028168", "Close": "436.558685", "Adj Close": "436.558685", "Volume": "2527037"}, {"Date": "2013-09-30", "Open": "432.917328", "High": "438.775360", "Low": "432.533752", "Close": "436.319580", "Adj Close": "436.319580", "Volume": "3457712"}, {"Date": "2013-10-01", "Open": "438.481476", "High": "442.177612", "Low": "438.381836", "Close": "441.843872", "Adj Close": "441.843872", "Volume": "3382230"}, {"Date": "2013-10-02", "Open": "439.716827", "High": "443.019440", "Low": "437.270996", "Close": "442.337006", "Adj Close": "442.337006", "Volume": "3001810"}, {"Date": "2013-10-03", "Open": "442.341980", "High": "445.380615", "Low": "434.421692", "Close": "436.409241", "Adj Close": "436.409241", "Volume": "4249870"}, {"Date": "2013-10-04", "Open": "435.866272", "High": "437.116577", "Low": "433.375610", "Close": "434.546204", "Adj Close": "434.546204", "Volume": "2726180"}, {"Date": "2013-10-07", "Open": "432.105377", "High": "435.363159", "Low": "430.441589", "Close": "431.253571", "Adj Close": "431.253571", "Volume": "2596897"}, {"Date": "2013-10-08", "Open": "431.044342", "High": "431.373108", "Low": "424.224915", "Close": "425.241089", "Adj Close": "425.241089", "Volume": "3901971"}, {"Date": "2013-10-09", "Open": "426.541229", "High": "429.714325", "Low": "419.916046", "Close": "426.332001", "Adj Close": "426.332001", "Volume": "5322475"}, {"Date": "2013-10-10", "Open": "430.307098", "High": "432.792786", "Low": "428.498871", "Close": "432.498901", "Adj Close": "432.498901", "Volume": "4527507"}, {"Date": "2013-10-11", "Open": "431.398010", "High": "435.109100", "Low": "431.034363", "Close": "434.366882", "Adj Close": "434.366882", "Volume": "2828362"}, {"Date": "2013-10-14", "Open": "431.711853", "High": "436.488922", "Low": "431.079224", "Close": "436.419189", "Adj Close": "436.419189", "Volume": "2496523"}, {"Date": "2013-10-15", "Open": "436.244843", "High": "441.161407", "Low": "435.368134", "Close": "439.358185", "Adj Close": "439.358185", "Volume": "3195734"}, {"Date": "2013-10-16", "Open": "441.280975", "High": "447.487701", "Low": "440.354431", "Close": "447.338257", "Adj Close": "447.338257", "Volume": "4030250"}, {"Date": "2013-10-17", "Open": "444.827667", "High": "446.775391", "Low": "441.211243", "Close": "442.735504", "Adj Close": "442.735504", "Volume": "8545110"}, {"Date": "2013-10-18", "Open": "486.466614", "High": "505.834015", "Low": "485.181427", "Close": "503.816559", "Adj Close": "503.816559", "Volume": "23219507"}, {"Date": "2013-10-21", "Open": "503.841492", "High": "507.597412", "Low": "497.908722", "Close": "499.776703", "Adj Close": "499.776703", "Volume": "7283800"}, {"Date": "2013-10-22", "Open": "500.623535", "High": "504.608612", "Low": "496.035736", "Close": "501.619812", "Adj Close": "501.619812", "Volume": "4433757"}, {"Date": "2013-10-23", "Open": "498.631012", "High": "515.442993", "Low": "498.446686", "Close": "513.779236", "Adj Close": "513.779236", "Volume": "5346365"}, {"Date": "2013-10-24", "Open": "514.008362", "High": "518.342102", "Low": "510.486572", "Close": "510.860168", "Adj Close": "510.860168", "Volume": "4199883"}, {"Date": "2013-10-25", "Open": "512.489075", "High": "512.489075", "Low": "503.482819", "Close": "505.704498", "Adj Close": "505.704498", "Volume": "4076222"}, {"Date": "2013-10-28", "Open": "505.704498", "High": "509.804138", "Low": "504.603607", "Close": "505.604858", "Adj Close": "505.604858", "Volume": "2326086"}, {"Date": "2013-10-29", "Open": "507.647217", "High": "516.533875", "Low": "504.857666", "Close": "516.185181", "Adj Close": "516.185181", "Volume": "3222032"}, {"Date": "2013-10-30", "Open": "516.778015", "High": "516.817810", "Low": "511.084320", "Close": "513.286072", "Adj Close": "513.286072", "Volume": "2658126"}, {"Date": "2013-10-31", "Open": "512.543884", "High": "518.815369", "Low": "510.073120", "Close": "513.365784", "Adj Close": "513.365784", "Volume": "3292294"}, {"Date": "2013-11-01", "Open": "513.968506", "High": "516.065674", "Low": "510.636017", "Close": "511.602386", "Adj Close": "511.602386", "Volume": "2576220"}, {"Date": "2013-11-04", "Open": "513.824036", "High": "514.257446", "Low": "509.106750", "Close": "511.139130", "Adj Close": "511.139130", "Volume": "2286137"}, {"Date": "2013-11-05", "Open": "508.269867", "High": "513.898804", "Low": "506.810364", "Close": "508.852692", "Adj Close": "508.852692", "Volume": "2371656"}, {"Date": "2013-11-06", "Open": "510.885071", "High": "511.582458", "Low": "505.789185", "Close": "509.465393", "Adj Close": "509.465393", "Volume": "1832644"}, {"Date": "2013-11-07", "Open": "509.395660", "High": "510.053192", "Low": "501.938599", "Close": "502.093018", "Adj Close": "502.093018", "Volume": "3371791"}, {"Date": "2013-11-08", "Open": "502.491547", "High": "507.348328", "Low": "502.367004", "Close": "506.117950", "Adj Close": "506.117950", "Volume": "2591276"}, {"Date": "2013-11-11", "Open": "502.870117", "High": "506.068146", "Low": "502.117950", "Close": "503.408112", "Adj Close": "503.408112", "Volume": "2233541"}, {"Date": "2013-11-12", "Open": "501.968506", "High": "506.880096", "Low": "500.623535", "Close": "504.000885", "Adj Close": "504.000885", "Volume": "2445331"}, {"Date": "2013-11-13", "Open": "501.495270", "High": "514.496521", "Low": "501.370728", "Close": "514.307251", "Adj Close": "514.307251", "Volume": "3170640"}, {"Date": "2013-11-14", "Open": "515.029541", "High": "517.933655", "Low": "513.251221", "Close": "515.682068", "Adj Close": "515.682068", "Volume": "2342146"}, {"Date": "2013-11-15", "Open": "515.502747", "High": "517.061951", "Low": "513.231262", "Close": "514.850220", "Adj Close": "514.850220", "Volume": "2562168"}, {"Date": "2013-11-18", "Open": "515.941101", "High": "522.411865", "Low": "512.698303", "Close": "513.848938", "Adj Close": "513.848938", "Volume": "3532592"}, {"Date": "2013-11-19", "Open": "513.933655", "High": "515.442993", "Low": "509.614838", "Close": "510.685822", "Adj Close": "510.685822", "Volume": "2271683"}, {"Date": "2013-11-20", "Open": "513.051941", "High": "514.750610", "Low": "508.274872", "Close": "509.246216", "Adj Close": "509.246216", "Volume": "1934624"}, {"Date": "2013-11-21", "Open": "511.582458", "High": "517.216370", "Low": "511.084320", "Close": "515.104248", "Adj Close": "515.104248", "Volume": "2191785"}, {"Date": "2013-11-22", "Open": "514.780457", "High": "516.150330", "Low": "512.688293", "Close": "514.018311", "Adj Close": "514.018311", "Volume": "2517802"}, {"Date": "2013-11-25", "Open": "516.643494", "High": "524.628540", "Low": "515.577515", "Close": "521.012146", "Adj Close": "521.012146", "Volume": "3238092"}, {"Date": "2013-11-26", "Open": "522.342163", "High": "528.768066", "Low": "519.522705", "Close": "527.228821", "Adj Close": "527.228821", "Volume": "4589739"}, {"Date": "2013-11-27", "Open": "529.032043", "High": "532.005920", "Low": "528.020874", "Close": "529.570068", "Adj Close": "529.570068", "Volume": "2255623"}, {"Date": "2013-11-29", "Open": "529.096802", "High": "531.318481", "Low": "527.746887", "Close": "527.816589", "Adj Close": "527.816589", "Volume": "2394542"}, {"Date": "2013-12-02", "Open": "529.769287", "High": "531.184021", "Low": "523.418091", "Close": "525.271179", "Adj Close": "525.271179", "Volume": "2756694"}, {"Date": "2013-12-03", "Open": "523.512756", "High": "529.734436", "Low": "522.551331", "Close": "524.663452", "Adj Close": "524.663452", "Volume": "3364765"}, {"Date": "2013-12-04", "Open": "523.721985", "High": "530.003418", "Low": "523.039490", "Close": "527.114258", "Adj Close": "527.114258", "Volume": "2392133"}, {"Date": "2013-12-05", "Open": "526.626099", "High": "527.851501", "Low": "523.582458", "Close": "526.695801", "Adj Close": "526.695801", "Volume": "2275899"}, {"Date": "2013-12-06", "Open": "532.897583", "High": "533.002197", "Low": "528.060669", "Close": "532.937439", "Adj Close": "532.937439", "Volume": "2868311"}, {"Date": "2013-12-09", "Open": "533.495300", "High": "539.134216", "Low": "532.015869", "Close": "537.057007", "Adj Close": "537.057007", "Volume": "2976314"}, {"Date": "2013-12-10", "Open": "536.065674", "High": "544.115540", "Low": "535.816650", "Close": "540.304810", "Adj Close": "540.304810", "Volume": "3721698"}, {"Date": "2013-12-11", "Open": "541.669678", "High": "543.622375", "Low": "535.577515", "Close": "536.633545", "Adj Close": "536.633545", "Volume": "3436432"}, {"Date": "2013-12-12", "Open": "537.769287", "High": "539.447998", "Low": "532.504028", "Close": "532.982239", "Adj Close": "532.982239", "Volume": "3204968"}, {"Date": "2013-12-13", "Open": "535.692078", "High": "536.135437", "Low": "526.969788", "Close": "528.414368", "Adj Close": "528.414368", "Volume": "4341010"}, {"Date": "2013-12-16", "Open": "530.013367", "High": "535.338440", "Low": "529.022095", "Close": "534.486633", "Adj Close": "534.486633", "Volume": "3216009"}, {"Date": "2013-12-17", "Open": "534.406921", "High": "538.362061", "Low": "532.195190", "Close": "532.932434", "Adj Close": "532.932434", "Volume": "3082912"}, {"Date": "2013-12-18", "Open": "533.923706", "High": "540.449280", "Low": "527.542664", "Close": "540.349609", "Adj Close": "540.349609", "Volume": "4437169"}, {"Date": "2013-12-19", "Open": "538.367065", "High": "543.956116", "Low": "537.525208", "Close": "541.081909", "Adj Close": "541.081909", "Volume": "3343887"}, {"Date": "2013-12-20", "Open": "542.117981", "High": "548.528992", "Low": "541.968567", "Close": "548.255005", "Adj Close": "548.255005", "Volume": "6547651"}, {"Date": "2013-12-23", "Open": "551.851501", "High": "555.816650", "Low": "550.496582", "Close": "555.467957", "Adj Close": "555.467957", "Volume": "3456106"}, {"Date": "2013-12-24", "Open": "555.403198", "High": "555.537720", "Low": "551.981018", "Close": "553.844055", "Adj Close": "553.844055", "Volume": "1473904"}, {"Date": "2013-12-26", "Open": "554.924988", "High": "557.410706", "Low": "552.274963", "Close": "556.643555", "Adj Close": "556.643555", "Volume": "2685629"}, {"Date": "2013-12-27", "Open": "557.908813", "High": "558.048279", "Low": "554.392029", "Close": "557.111816", "Adj Close": "557.111816", "Volume": "3151167"}, {"Date": "2013-12-30", "Open": "558.078186", "High": "558.157898", "Low": "552.439331", "Close": "552.658508", "Adj Close": "552.658508", "Volume": "2481466"}, {"Date": "2013-12-31", "Open": "554.043335", "High": "558.406982", "Low": "551.064453", "Close": "558.262512", "Adj Close": "558.262512", "Volume": "2725979"}, {"Date": "2014-01-02", "Open": "555.647278", "High": "556.788025", "Low": "552.060730", "Close": "554.481689", "Adj Close": "554.481689", "Volume": "3656454"}, {"Date": "2014-01-03", "Open": "555.418152", "High": "556.379578", "Low": "550.401978", "Close": "550.436829", "Adj Close": "550.436829", "Volume": "3345894"}, {"Date": "2014-01-06", "Open": "554.426880", "High": "557.340942", "Low": "551.154114", "Close": "556.573853", "Adj Close": "556.573853", "Volume": "3551864"}, {"Date": "2014-01-07", "Open": "560.399475", "High": "567.717041", "Low": "558.486633", "Close": "567.303589", "Adj Close": "567.303589", "Volume": "5124336"}, {"Date": "2014-01-08", "Open": "570.860291", "High": "571.517822", "Low": "564.528992", "Close": "568.484192", "Adj Close": "568.484192", "Volume": "4501811"}, {"Date": "2014-01-09", "Open": "569.585083", "High": "569.973572", "Low": "560.678467", "Close": "563.009705", "Adj Close": "563.009705", "Volume": "4184626"}, {"Date": "2014-01-10", "Open": "567.413208", "High": "567.413208", "Low": "559.029602", "Close": "562.979797", "Adj Close": "562.979797", "Volume": "4303069"}, {"Date": "2014-01-13", "Open": "561.131714", "High": "571.313599", "Low": "556.499084", "Close": "559.393250", "Adj Close": "559.393250", "Volume": "4855933"}, {"Date": "2014-01-14", "Open": "566.850281", "High": "573.350952", "Low": "561.938721", "Close": "572.553955", "Adj Close": "572.553955", "Volume": "4983811"}, {"Date": "2014-01-15", "Open": "574.342224", "High": "575.343445", "Low": "569.759399", "Close": "572.165405", "Adj Close": "572.165405", "Volume": "3915020"}, {"Date": "2014-01-16", "Open": "572.404480", "High": "576.802979", "Low": "571.856567", "Close": "575.951172", "Adj Close": "575.951172", "Volume": "3380423"}, {"Date": "2014-01-17", "Open": "576.265015", "High": "578.147949", "Low": "569.963623", "Close": "573.116821", "Adj Close": "573.116821", "Volume": "5422850"}, {"Date": "2014-01-21", "Open": "578.297424", "High": "579.826660", "Low": "573.500366", "Close": "579.677246", "Adj Close": "579.677246", "Volume": "3974642"}, {"Date": "2014-01-22", "Open": "581.126770", "High": "581.764404", "Low": "577.266235", "Close": "580.334778", "Adj Close": "580.334778", "Volume": "3154580"}, {"Date": "2014-01-23", "Open": "577.834106", "High": "579.074463", "Low": "575.029663", "Close": "577.883972", "Adj Close": "577.883972", "Volume": "3912811"}, {"Date": "2014-01-24", "Open": "573.355896", "High": "574.621155", "Low": "559.403198", "Close": "559.816650", "Adj Close": "559.816650", "Volume": "7814180"}, {"Date": "2014-01-27", "Open": "560.947449", "High": "561.146667", "Low": "539.114258", "Close": "548.558838", "Adj Close": "548.558838", "Volume": "8739837"}, {"Date": "2014-01-28", "Open": "553.086914", "High": "560.773071", "Low": "552.897583", "Close": "559.408203", "Adj Close": "559.408203", "Volume": "4436969"}, {"Date": "2014-01-29", "Open": "557.470459", "High": "558.780579", "Low": "547.657227", "Close": "551.393250", "Adj Close": "551.393250", "Volume": "4777641"}, {"Date": "2014-01-30", "Open": "570.362122", "High": "574.093140", "Low": "561.520264", "Close": "565.575073", "Adj Close": "565.575073", "Volume": "10220968"}, {"Date": "2014-01-31", "Open": "583.487915", "High": "591.054565", "Low": "573.415710", "Close": "588.279968", "Adj Close": "588.279968", "Volume": "11174328"}, {"Date": "2014-02-03", "Open": "587.398315", "High": "588.653564", "Low": "563.891418", "Close": "564.598755", "Adj Close": "564.598755", "Volume": "9172452"}, {"Date": "2014-02-04", "Open": "566.870239", "High": "575.343445", "Low": "566.382080", "Close": "566.954895", "Adj Close": "566.954895", "Volume": "5644879"}, {"Date": "2014-02-05", "Open": "569.555176", "High": "573.236389", "Low": "561.903870", "Close": "569.465515", "Adj Close": "569.465515", "Volume": "4806950"}, {"Date": "2014-02-06", "Open": "573.415710", "High": "577.913818", "Low": "571.632385", "Close": "577.814209", "Adj Close": "577.814209", "Volume": "3907793"}, {"Date": "2014-02-07", "Open": "581.634888", "High": "586.750732", "Low": "578.113098", "Close": "586.521545", "Adj Close": "586.521545", "Volume": "5292162"}, {"Date": "2014-02-10", "Open": "583.712097", "High": "588.992310", "Low": "582.327271", "Close": "584.275024", "Adj Close": "584.275024", "Volume": "3904982"}, {"Date": "2014-02-11", "Open": "587.881470", "High": "593.709656", "Low": "583.916321", "Close": "592.867798", "Adj Close": "592.867798", "Volume": "4116974"}, {"Date": "2014-02-12", "Open": "592.279968", "High": "592.778137", "Low": "588.484192", "Close": "591.129272", "Adj Close": "591.129272", "Volume": "3461928"}, {"Date": "2014-02-13", "Open": "588.170410", "High": "597.709656", "Low": "587.627441", "Close": "597.709656", "Adj Close": "597.709656", "Volume": "3686567"}, {"Date": "2014-02-14", "Open": "595.572632", "High": "599.946228", "Low": "594.172913", "Close": "599.154236", "Adj Close": "599.154236", "Volume": "4389793"}, {"Date": "2014-02-18", "Open": "598.461792", "High": "604.170410", "Low": "597.759460", "Close": "603.179138", "Adj Close": "603.179138", "Volume": "4233609"}, {"Date": "2014-02-19", "Open": "600.399536", "High": "602.352234", "Low": "596.514099", "Close": "598.925110", "Adj Close": "598.925110", "Volume": "4222970"}, {"Date": "2014-02-20", "Open": "599.323608", "High": "601.191589", "Low": "597.869019", "Close": "599.806763", "Adj Close": "599.806763", "Volume": "3414350"}, {"Date": "2014-02-21", "Open": "601.649841", "High": "602.676025", "Low": "599.174133", "Close": "599.647400", "Adj Close": "599.647400", "Volume": "3738561"}, {"Date": "2014-02-24", "Open": "600.429443", "High": "607.801819", "Low": "600.299927", "Close": "603.991089", "Adj Close": "603.991089", "Volume": "3361151"}, {"Date": "2014-02-25", "Open": "605.699707", "High": "609.963684", "Low": "602.950012", "Close": "607.722107", "Adj Close": "607.722107", "Volume": "2888185"}, {"Date": "2014-02-26", "Open": "609.714661", "High": "612.145508", "Low": "604.613770", "Close": "607.806763", "Adj Close": "607.806763", "Volume": "3979260"}, {"Date": "2014-02-27", "Open": "606.920105", "High": "609.829224", "Low": "606.232666", "Close": "607.328613", "Adj Close": "607.328613", "Volume": "2529446"}, {"Date": "2014-02-28", "Open": "607.891479", "High": "609.809265", "Low": "600.857849", "Close": "605.555237", "Adj Close": "605.555237", "Volume": "4644544"}, {"Date": "2014-03-03", "Open": "601.121826", "High": "601.664795", "Low": "593.844116", "Close": "599.099426", "Adj Close": "599.099426", "Volume": "4225379"}, {"Date": "2014-03-04", "Open": "605.231445", "High": "605.729553", "Low": "602.491699", "Close": "605.186584", "Adj Close": "605.186584", "Volume": "2946403"}, {"Date": "2014-03-05", "Open": "605.256348", "High": "609.256348", "Low": "603.443176", "Close": "606.855347", "Adj Close": "606.855347", "Volume": "2479860"}, {"Date": "2014-03-06", "Open": "608.857849", "High": "610.785645", "Low": "607.024719", "Close": "607.527832", "Adj Close": "607.527832", "Volume": "2545706"}, {"Date": "2014-03-07", "Open": "611.109436", "High": "611.204041", "Low": "603.458069", "Close": "605.126831", "Adj Close": "605.126831", "Volume": "3041558"}, {"Date": "2014-03-10", "Open": "605.575134", "High": "606.546509", "Low": "599.796814", "Close": "603.522827", "Adj Close": "603.522827", "Volume": "2438305"}, {"Date": "2014-03-11", "Open": "604.618713", "High": "604.892700", "Low": "596.085754", "Close": "597.754456", "Adj Close": "597.754456", "Volume": "3438841"}, {"Date": "2014-03-12", "Open": "595.966187", "High": "601.669800", "Low": "589.883972", "Close": "601.395813", "Adj Close": "601.395813", "Volume": "3943325"}, {"Date": "2014-03-13", "Open": "601.719604", "High": "602.989868", "Low": "590.167908", "Close": "592.309875", "Adj Close": "592.309875", "Volume": "4708784"}, {"Date": "2014-03-14", "Open": "588.788086", "High": "593.211487", "Low": "584.075745", "Close": "584.210266", "Adj Close": "584.210266", "Volume": "4604996"}, {"Date": "2014-03-17", "Open": "587.423218", "High": "596.299927", "Low": "586.855347", "Close": "593.824219", "Adj Close": "593.824219", "Volume": "4340408"}, {"Date": "2014-03-18", "Open": "595.104431", "High": "603.502930", "Low": "594.302429", "Close": "603.368408", "Adj Close": "603.368408", "Volume": "3643606"}, {"Date": "2014-03-19", "Open": "603.637390", "High": "603.732056", "Low": "594.974915", "Close": "597.385864", "Adj Close": "597.385864", "Volume": "3237891"}, {"Date": "2014-03-20", "Open": "597.734558", "High": "602.546509", "Low": "595.448120", "Close": "596.344727", "Adj Close": "596.344727", "Volume": "3382029"}, {"Date": "2014-03-21", "Open": "600.902649", "High": "602.556458", "Low": "589.017212", "Close": "589.311096", "Adj Close": "589.311096", "Volume": "6441052"}, {"Date": "2014-03-24", "Open": "589.883972", "High": "590.237671", "Low": "570.835388", "Close": "576.802979", "Adj Close": "576.802979", "Volume": "6096968"}, {"Date": "2014-03-25", "Open": "580.822937", "High": "582.735779", "Low": "571.358398", "Close": "577.196533", "Adj Close": "577.196533", "Volume": "4838468"}, {"Date": "2014-03-26", "Open": "578.835388", "High": "583.597534", "Low": "563.637329", "Close": "563.871460", "Adj Close": "563.871460", "Volume": "5179341"}, {"Date": "2014-03-27", "Open": "566.444824", "High": "566.444824", "Low": "551.406128", "Close": "556.930969", "Adj Close": "556.930969", "Volume": "13136"}, {"Date": "2014-03-28", "Open": "559.663452", "High": "564.879150", "Low": "557.140381", "Close": "558.456787", "Adj Close": "558.456787", "Volume": "41213"}, {"Date": "2014-03-31", "Open": "565.337891", "High": "565.447571", "Low": "555.405151", "Close": "555.445007", "Adj Close": "555.445007", "Volume": "10830"}, {"Date": "2014-04-01", "Open": "557.180237", "High": "566.893616", "Low": "557.180237", "Close": "565.607117", "Adj Close": "565.607117", "Volume": "7922"}, {"Date": "2014-04-02", "Open": "598.347229", "High": "603.174011", "Low": "560.650757", "Close": "565.447571", "Adj Close": "565.447571", "Volume": "147103"}, {"Date": "2014-04-03", "Open": "568.289734", "High": "585.672058", "Low": "562.585449", "Close": "568.180054", "Adj Close": "568.180054", "Volume": "5099161"}, {"Date": "2014-04-04", "Open": "573.076599", "High": "576.188049", "Low": "541.513245", "Close": "541.652893", "Adj Close": "541.652893", "Volume": "6369339"}, {"Date": "2014-04-07", "Open": "539.259460", "High": "546.978271", "Low": "525.706665", "Close": "536.676575", "Adj Close": "536.676575", "Volume": "4401652"}, {"Date": "2014-04-08", "Open": "541.114380", "High": "553.480408", "Low": "540.127075", "Close": "553.380676", "Adj Close": "553.380676", "Volume": "3151228"}, {"Date": "2014-04-09", "Open": "558.087769", "High": "563.822021", "Low": "551.436035", "Close": "562.595398", "Adj Close": "562.595398", "Volume": "3330820"}, {"Date": "2014-04-10", "Open": "563.453064", "High": "563.453064", "Low": "538.421753", "Close": "539.468872", "Adj Close": "539.468872", "Volume": "4036853"}, {"Date": "2014-04-11", "Open": "531.091858", "High": "538.521484", "Low": "525.088379", "Close": "529.147217", "Adj Close": "529.147217", "Volume": "3924846"}, {"Date": "2014-04-14", "Open": "536.776306", "High": "542.610291", "Low": "528.110046", "Close": "531.061951", "Adj Close": "531.061951", "Volume": "2575050"}, {"Date": "2014-04-15", "Open": "535.350220", "High": "536.975708", "Low": "517.040466", "Close": "534.971252", "Adj Close": "534.971252", "Volume": "3855055"}, {"Date": "2014-04-16", "Open": "541.513245", "High": "555.474915", "Low": "538.521484", "Close": "555.016174", "Adj Close": "555.016174", "Volume": "4893298"}, {"Date": "2014-04-17", "Open": "547.307373", "High": "547.995483", "Low": "529.695740", "Close": "534.632141", "Adj Close": "534.632141", "Volume": "6809544"}, {"Date": "2014-04-21", "Open": "534.632141", "High": "535.230530", "Low": "524.160889", "Close": "527.172668", "Adj Close": "527.172668", "Volume": "2566728"}, {"Date": "2014-04-22", "Open": "527.192566", "High": "535.759094", "Low": "526.065674", "Close": "533.345703", "Adj Close": "533.345703", "Volume": "2365376"}, {"Date": "2014-04-23", "Open": "532.328491", "High": "532.408264", "Low": "524.809143", "Close": "525.497253", "Adj Close": "525.497253", "Volume": "2052319"}, {"Date": "2014-04-24", "Open": "528.618652", "High": "530.194336", "Low": "520.690430", "Close": "523.722107", "Adj Close": "523.722107", "Volume": "1883156"}, {"Date": "2014-04-25", "Open": "521.079407", "High": "523.263367", "Low": "514.008789", "Close": "514.766724", "Adj Close": "514.766724", "Volume": "2100351"}, {"Date": "2014-04-28", "Open": "515.763977", "High": "517.180054", "Low": "501.423340", "Close": "515.734070", "Adj Close": "515.734070", "Volume": "3335533"}, {"Date": "2014-04-29", "Open": "515.484741", "High": "528.010376", "Low": "514.906311", "Close": "526.255188", "Adj Close": "526.255188", "Volume": "2699090"}, {"Date": "2014-04-30", "Open": "526.155457", "High": "526.554321", "Low": "521.089355", "Close": "525.218018", "Adj Close": "525.218018", "Volume": "1751195"}, {"Date": "2014-05-01", "Open": "525.666809", "High": "531.470825", "Low": "522.445618", "Close": "529.895203", "Adj Close": "529.895203", "Volume": "1905517"}, {"Date": "2014-05-02", "Open": "532.298584", "High": "532.537903", "Low": "524.170898", "Close": "526.484558", "Adj Close": "526.484558", "Volume": "1688523"}, {"Date": "2014-05-05", "Open": "523.383057", "High": "527.451904", "Low": "519.892639", "Close": "526.364868", "Adj Close": "526.364868", "Volume": "1024104"}, {"Date": "2014-05-06", "Open": "523.791931", "High": "525.367615", "Low": "513.649780", "Close": "513.729553", "Adj Close": "513.729553", "Volume": "1689025"}, {"Date": "2014-05-07", "Open": "514.377747", "High": "515.265320", "Low": "501.921967", "Close": "508.563751", "Adj Close": "508.563751", "Volume": "3224328"}, {"Date": "2014-05-08", "Open": "507.067841", "High": "515.813843", "Low": "505.063354", "Close": "509.600891", "Adj Close": "509.600891", "Volume": "2021334"}, {"Date": "2014-05-09", "Open": "509.351563", "High": "518.476501", "Low": "502.819519", "Close": "517.309753", "Adj Close": "517.309753", "Volume": "2439479"}, {"Date": "2014-05-12", "Open": "522.076660", "High": "528.738342", "Low": "517.588989", "Close": "528.469116", "Adj Close": "528.469116", "Volume": "1912536"}, {"Date": "2014-05-13", "Open": "529.436462", "High": "534.602234", "Low": "528.060181", "Close": "531.630432", "Adj Close": "531.630432", "Volume": "1653427"}, {"Date": "2014-05-14", "Open": "531.540649", "High": "531.540649", "Low": "523.851746", "Close": "525.208069", "Adj Close": "525.208069", "Volume": "1191763"}, {"Date": "2014-05-15", "Open": "524.260620", "High": "524.430176", "Low": "516.003296", "Close": "518.556274", "Adj Close": "518.556274", "Volume": "1704367"}, {"Date": "2014-05-16", "Open": "519.962463", "High": "520.371338", "Low": "514.028748", "Close": "519.204529", "Adj Close": "519.204529", "Volume": "1485267"}, {"Date": "2014-05-19", "Open": "518.277100", "High": "528.329468", "Low": "516.165894", "Close": "527.411987", "Adj Close": "527.411987", "Volume": "1277799"}, {"Date": "2014-05-20", "Open": "528.289551", "High": "534.761841", "Low": "524.859009", "Close": "528.319519", "Adj Close": "528.319519", "Volume": "1784787"}, {"Date": "2014-05-21", "Open": "531.440918", "High": "537.706726", "Low": "530.453613", "Close": "537.464417", "Adj Close": "537.464417", "Volume": "1196275"}, {"Date": "2014-05-22", "Open": "539.648376", "High": "546.100708", "Low": "539.299377", "Close": "543.567627", "Adj Close": "543.567627", "Volume": "1615824"}, {"Date": "2014-05-23", "Open": "545.761597", "High": "552.124146", "Low": "542.211365", "Close": "551.186707", "Adj Close": "551.186707", "Volume": "1932190"}, {"Date": "2014-05-27", "Open": "554.477661", "High": "564.450317", "Low": "552.832214", "Close": "564.400452", "Adj Close": "564.400452", "Volume": "2104161"}, {"Date": "2014-05-28", "Open": "563.024231", "High": "566.285278", "Low": "559.463989", "Close": "560.142151", "Adj Close": "560.142151", "Volume": "1652023"}, {"Date": "2014-05-29", "Open": "561.807556", "High": "562.455750", "Low": "557.180237", "Close": "558.546509", "Adj Close": "558.546509", "Volume": "1354108"}, {"Date": "2014-05-30", "Open": "559.264526", "High": "559.813049", "Low": "554.387939", "Close": "558.357056", "Adj Close": "558.357056", "Volume": "1771149"}, {"Date": "2014-06-02", "Open": "559.164795", "High": "559.364258", "Low": "544.235779", "Close": "552.413330", "Adj Close": "552.413330", "Volume": "1435029"}, {"Date": "2014-06-03", "Open": "549.481384", "High": "550.827698", "Low": "541.064514", "Close": "543.447937", "Adj Close": "543.447937", "Volume": "1866611"}, {"Date": "2014-06-04", "Open": "540.017395", "High": "547.107910", "Low": "537.274902", "Close": "543.168701", "Adj Close": "543.168701", "Volume": "1816473"}, {"Date": "2014-06-05", "Open": "544.903992", "High": "553.430542", "Low": "542.959290", "Close": "552.383423", "Adj Close": "552.383423", "Volume": "1689125"}, {"Date": "2014-06-06", "Open": "556.532043", "High": "556.532043", "Low": "547.427063", "Close": "554.806763", "Adj Close": "554.806763", "Volume": "1736755"}, {"Date": "2014-06-09", "Open": "555.624512", "High": "561.358765", "Low": "554.517578", "Close": "560.580933", "Adj Close": "560.580933", "Volume": "1467518"}, {"Date": "2014-06-10", "Open": "558.975342", "High": "562.056885", "Low": "556.372498", "Close": "559.015198", "Adj Close": "559.015198", "Volume": "1351701"}, {"Date": "2014-06-11", "Open": "556.472229", "High": "558.347046", "Low": "553.500366", "Close": "557.309875", "Adj Close": "557.309875", "Volume": "1100112"}, {"Date": "2014-06-12", "Open": "555.774109", "High": "556.462219", "Low": "546.958313", "Close": "549.840393", "Adj Close": "549.840393", "Volume": "1458493"}, {"Date": "2014-06-13", "Open": "550.747925", "High": "550.787842", "Low": "544.066284", "Close": "550.249268", "Adj Close": "550.249268", "Volume": "1220542"}, {"Date": "2014-06-16", "Open": "547.756165", "High": "548.115173", "Low": "540.037354", "Close": "542.789795", "Adj Close": "542.789795", "Volume": "1702562"}, {"Date": "2014-06-17", "Open": "542.709961", "High": "543.826904", "Low": "537.853333", "Close": "541.523254", "Adj Close": "541.523254", "Volume": "1444555"}, {"Date": "2014-06-18", "Open": "543.368164", "High": "552.044373", "Low": "542.510559", "Close": "551.854858", "Adj Close": "551.854858", "Volume": "1741769"}, {"Date": "2014-06-19", "Open": "552.722473", "High": "553.480408", "Low": "547.008179", "Close": "553.380676", "Adj Close": "553.380676", "Volume": "2456827"}, {"Date": "2014-06-20", "Open": "555.325378", "High": "556.053345", "Low": "548.885010", "Close": "554.836670", "Adj Close": "554.836670", "Volume": "4508344"}, {"Date": "2014-06-23", "Open": "553.630005", "High": "563.453064", "Low": "552.732483", "Close": "563.403198", "Adj Close": "563.403198", "Volume": "1536808"}, {"Date": "2014-06-24", "Open": "563.642517", "High": "571.078125", "Low": "559.473938", "Close": "563.074097", "Adj Close": "563.074097", "Volume": "2207143"}, {"Date": "2014-06-25", "Open": "563.712341", "High": "578.372070", "Low": "563.672424", "Close": "577.065674", "Adj Close": "577.065674", "Volume": "1969392"}, {"Date": "2014-06-26", "Open": "579.409241", "High": "580.855286", "Low": "570.284302", "Close": "574.422913", "Adj Close": "574.422913", "Volume": "1741969"}, {"Date": "2014-06-27", "Open": "575.599670", "High": "578.282349", "Low": "572.228943", "Close": "575.659546", "Adj Close": "575.659546", "Volume": "2236925"}, {"Date": "2014-06-30", "Open": "577.075623", "High": "577.983154", "Low": "573.176331", "Close": "573.704895", "Adj Close": "573.704895", "Volume": "1313797"}, {"Date": "2014-07-01", "Open": "576.736572", "High": "582.799927", "Low": "575.071167", "Close": "581.074646", "Adj Close": "581.074646", "Volume": "1447965"}, {"Date": "2014-07-02", "Open": "581.752808", "High": "583.837097", "Low": "578.800903", "Close": "580.740601", "Adj Close": "580.740601", "Volume": "1056392"}, {"Date": "2014-07-03", "Open": "581.752808", "High": "583.408264", "Low": "579.329468", "Close": "583.129028", "Adj Close": "583.129028", "Volume": "714155"}, {"Date": "2014-07-07", "Open": "582.161682", "High": "584.824341", "Low": "578.003113", "Close": "580.655823", "Adj Close": "580.655823", "Volume": "1064615"}, {"Date": "2014-07-08", "Open": "576.078369", "High": "577.941284", "Low": "564.584961", "Close": "569.526367", "Adj Close": "569.526367", "Volume": "1909528"}, {"Date": "2014-07-09", "Open": "570.015015", "High": "575.140930", "Low": "567.817078", "Close": "574.502686", "Adj Close": "574.502686", "Volume": "1116758"}, {"Date": "2014-07-10", "Open": "564.360535", "High": "575.011292", "Low": "563.463013", "Close": "569.536316", "Adj Close": "569.536316", "Volume": "1356715"}, {"Date": "2014-07-11", "Open": "570.344116", "High": "579.259644", "Low": "569.855469", "Close": "577.594238", "Adj Close": "577.594238", "Volume": "1621740"}, {"Date": "2014-07-14", "Open": "581.004822", "High": "583.607727", "Low": "576.447388", "Close": "583.268616", "Adj Close": "583.268616", "Volume": "1854076"}, {"Date": "2014-07-15", "Open": "584.136230", "High": "584.201050", "Low": "574.981384", "Close": "583.178894", "Adj Close": "583.178894", "Volume": "1623044"}, {"Date": "2014-07-16", "Open": "586.390076", "High": "586.789001", "Low": "580.605957", "Close": "581.064697", "Adj Close": "581.064697", "Volume": "1397125"}, {"Date": "2014-07-17", "Open": "577.943237", "High": "579.399231", "Low": "567.053162", "Close": "572.159119", "Adj Close": "572.159119", "Volume": "3016559"}, {"Date": "2014-07-18", "Open": "591.376404", "High": "595.165955", "Low": "580.406494", "Close": "593.450684", "Adj Close": "593.450684", "Volume": "4014191"}, {"Date": "2014-07-21", "Open": "590.129822", "High": "592.772522", "Low": "583.630615", "Close": "587.856018", "Adj Close": "587.856018", "Volume": "2062146"}, {"Date": "2014-07-22", "Open": "589.102600", "High": "598.008179", "Low": "588.982971", "Close": "593.111633", "Adj Close": "593.111633", "Volume": "1699152"}, {"Date": "2014-07-23", "Open": "591.605774", "High": "596.213074", "Low": "590.877747", "Close": "594.348206", "Adj Close": "594.348206", "Volume": "1233176"}, {"Date": "2014-07-24", "Open": "594.816956", "High": "597.858582", "Low": "590.149719", "Close": "591.725403", "Adj Close": "591.725403", "Volume": "1035134"}, {"Date": "2014-07-25", "Open": "588.783508", "High": "590.239502", "Low": "585.422729", "Close": "587.407288", "Adj Close": "587.407288", "Volume": "932453"}, {"Date": "2014-07-28", "Open": "586.459900", "High": "590.877747", "Low": "583.151978", "Close": "588.982971", "Adj Close": "588.982971", "Volume": "986802"}, {"Date": "2014-07-29", "Open": "587.138000", "High": "588.085388", "Low": "581.917358", "Close": "584.006592", "Adj Close": "584.006592", "Volume": "1349896"}, {"Date": "2014-07-30", "Open": "584.944031", "High": "587.885986", "Low": "582.401001", "Close": "585.811646", "Adj Close": "585.811646", "Volume": "1016483"}, {"Date": "2014-07-31", "Open": "579.010315", "High": "582.052002", "Low": "568.439331", "Close": "570.034973", "Adj Close": "570.034973", "Volume": "2102757"}, {"Date": "2014-08-01", "Open": "568.838257", "High": "574.383057", "Low": "561.308899", "Close": "564.520081", "Adj Close": "564.520081", "Volume": "1955253"}, {"Date": "2014-08-04", "Open": "567.481995", "High": "573.774719", "Low": "562.555481", "Close": "571.580750", "Adj Close": "571.580750", "Volume": "1427308"}, {"Date": "2014-08-05", "Open": "568.489197", "High": "570.413940", "Low": "561.069580", "Close": "563.522827", "Adj Close": "563.522827", "Volume": "1551247"}, {"Date": "2014-08-06", "Open": "560.241882", "High": "569.137451", "Low": "558.466736", "Close": "564.823303", "Adj Close": "564.823303", "Volume": "1334353"}, {"Date": "2014-08-07", "Open": "566.444824", "High": "568.329651", "Low": "559.563721", "Close": "561.817505", "Adj Close": "561.817505", "Volume": "1110942"}, {"Date": "2014-08-08", "Open": "562.016968", "High": "568.688660", "Low": "558.815796", "Close": "567.212708", "Adj Close": "567.212708", "Volume": "1494793"}, {"Date": "2014-08-11", "Open": "568.429382", "High": "568.927979", "Low": "564.450317", "Close": "566.325134", "Adj Close": "566.325134", "Volume": "1214726"}, {"Date": "2014-08-12", "Open": "562.974365", "High": "564.350586", "Low": "559.344299", "Close": "561.189270", "Adj Close": "561.189270", "Volume": "1542022"}, {"Date": "2014-08-13", "Open": "565.756714", "High": "573.425659", "Low": "564.200989", "Close": "573.206238", "Adj Close": "573.206238", "Volume": "1439241"}, {"Date": "2014-08-14", "Open": "574.602417", "High": "576.317749", "Low": "569.316956", "Close": "573.076599", "Adj Close": "573.076599", "Volume": "985498"}, {"Date": "2014-08-15", "Open": "576.277832", "High": "577.793640", "Low": "568.957947", "Close": "571.909851", "Adj Close": "571.909851", "Volume": "1519159"}, {"Date": "2014-08-18", "Open": "574.532593", "High": "582.909607", "Low": "574.422913", "Close": "580.566040", "Adj Close": "580.566040", "Volume": "1284116"}, {"Date": "2014-08-19", "Open": "583.398254", "High": "585.731873", "Low": "582.401001", "Close": "585.253174", "Adj Close": "585.253174", "Volume": "978680"}, {"Date": "2014-08-20", "Open": "584.275879", "High": "585.093628", "Low": "580.974915", "Close": "582.889648", "Adj Close": "582.889648", "Volume": "1036739"}, {"Date": "2014-08-21", "Open": "582.221497", "High": "582.899658", "Low": "579.548828", "Close": "581.772766", "Adj Close": "581.772766", "Volume": "914805"}, {"Date": "2014-08-22", "Open": "581.992126", "High": "583.633606", "Low": "579.050232", "Close": "580.964966", "Adj Close": "580.964966", "Volume": "789060"}, {"Date": "2014-08-25", "Open": "583.119019", "High": "583.398254", "Low": "577.414734", "Close": "578.611450", "Adj Close": "578.611450", "Volume": "1361428"}, {"Date": "2014-08-26", "Open": "579.668518", "High": "580.207031", "Low": "575.001343", "Close": "576.277832", "Adj Close": "576.277832", "Volume": "1639689"}, {"Date": "2014-08-27", "Open": "575.689453", "High": "576.906128", "Low": "568.542053", "Close": "569.436584", "Adj Close": "569.436584", "Volume": "1703364"}, {"Date": "2014-08-28", "Open": "568.000549", "High": "571.680481", "Low": "565.547302", "Close": "567.641541", "Adj Close": "567.641541", "Volume": "1292940"}, {"Date": "2014-08-29", "Open": "569.765686", "High": "570.473755", "Low": "565.516357", "Close": "570.034973", "Adj Close": "570.034973", "Volume": "1083767"}, {"Date": "2014-09-02", "Open": "570.284302", "High": "576.247925", "Low": "569.626099", "Close": "575.749268", "Adj Close": "575.749268", "Volume": "1578422"}, {"Date": "2014-09-03", "Open": "578.411987", "High": "581.393799", "Low": "573.425659", "Close": "576.357605", "Adj Close": "576.357605", "Volume": "1215127"}, {"Date": "2014-09-04", "Open": "578.411987", "High": "584.395569", "Low": "577.634094", "Close": "580.386536", "Adj Close": "580.386536", "Volume": "1458193"}, {"Date": "2014-09-05", "Open": "582.381104", "High": "584.944031", "Low": "580.356628", "Close": "584.475342", "Adj Close": "584.475342", "Volume": "1632369"}, {"Date": "2014-09-08", "Open": "584.993896", "High": "590.149719", "Low": "584.694702", "Close": "588.105347", "Adj Close": "588.105347", "Volume": "1431018"}, {"Date": "2014-09-09", "Open": "587.287598", "High": "587.387329", "Low": "578.411987", "Close": "579.419189", "Adj Close": "579.419189", "Volume": "1287224"}, {"Date": "2014-09-10", "Open": "579.907837", "High": "581.902405", "Low": "575.360352", "Close": "581.503479", "Adj Close": "581.503479", "Volume": "977376"}, {"Date": "2014-09-11", "Open": "578.770996", "High": "580.217041", "Low": "574.682190", "Close": "579.758301", "Adj Close": "579.758301", "Volume": "1221043"}, {"Date": "2014-09-12", "Open": "579.409241", "High": "580.047485", "Low": "572.887146", "Close": "574.043945", "Adj Close": "574.043945", "Volume": "1601685"}, {"Date": "2014-09-15", "Open": "571.371277", "High": "573.375793", "Low": "566.654236", "Close": "571.530884", "Adj Close": "571.530884", "Volume": "1597574"}, {"Date": "2014-09-16", "Open": "571.191772", "High": "579.907837", "Low": "571.092041", "Close": "578.362122", "Adj Close": "578.362122", "Volume": "1480353"}, {"Date": "2014-09-17", "Open": "578.421936", "High": "585.911377", "Low": "577.190308", "Close": "583.168884", "Adj Close": "583.168884", "Volume": "1692835"}, {"Date": "2014-09-18", "Open": "585.392822", "High": "587.925842", "Low": "583.398254", "Close": "587.656616", "Adj Close": "587.656616", "Volume": "1444555"}, {"Date": "2014-09-19", "Open": "589.880493", "High": "594.846863", "Low": "587.885986", "Close": "594.447937", "Adj Close": "594.447937", "Volume": "3736631"}, {"Date": "2014-09-22", "Open": "592.194153", "High": "592.322754", "Low": "581.862488", "Close": "585.761780", "Adj Close": "585.761780", "Volume": "1689526"}, {"Date": "2014-09-23", "Open": "585.243225", "High": "585.243225", "Low": "579.409241", "Close": "579.538879", "Adj Close": "579.538879", "Volume": "1471429"}, {"Date": "2014-09-24", "Open": "579.867981", "High": "588.015625", "Low": "578.930542", "Close": "586.380066", "Adj Close": "586.380066", "Volume": "1728132"}, {"Date": "2014-09-25", "Open": "585.941284", "High": "586.370117", "Low": "572.607910", "Close": "573.485474", "Adj Close": "573.485474", "Volume": "1925973"}, {"Date": "2014-09-26", "Open": "574.482788", "High": "577.664001", "Low": "573.086609", "Close": "575.519897", "Adj Close": "575.519897", "Volume": "1443653"}, {"Date": "2014-09-29", "Open": "570.184570", "High": "576.606934", "Low": "569.606140", "Close": "574.781921", "Adj Close": "574.781921", "Volume": "1282411"}, {"Date": "2014-09-30", "Open": "575.350403", "High": "578.262390", "Low": "571.281555", "Close": "575.779175", "Adj Close": "575.779175", "Volume": "1621740"}, {"Date": "2014-10-01", "Open": "574.432922", "High": "575.998596", "Low": "565.457520", "Close": "566.714111", "Adj Close": "566.714111", "Volume": "1445458"}, {"Date": "2014-10-02", "Open": "565.756714", "High": "570.344116", "Low": "561.777649", "Close": "568.519104", "Adj Close": "568.519104", "Volume": "1178427"}, {"Date": "2014-10-03", "Open": "571.481018", "High": "575.644592", "Low": "570.932495", "Close": "573.704895", "Adj Close": "573.704895", "Volume": "1141726"}, {"Date": "2014-10-06", "Open": "577.215271", "High": "579.409241", "Low": "572.867188", "Close": "575.769226", "Adj Close": "575.769226", "Volume": "1214626"}, {"Date": "2014-10-07", "Open": "572.827332", "High": "573.694946", "Low": "562.196472", "Close": "562.196472", "Adj Close": "562.196472", "Volume": "1911333"}, {"Date": "2014-10-08", "Open": "564.021484", "High": "572.308716", "Low": "555.963623", "Close": "570.932495", "Adj Close": "570.932495", "Volume": "1990851"}, {"Date": "2014-10-09", "Open": "569.616089", "High": "569.925293", "Low": "557.529297", "Close": "559.344299", "Adj Close": "559.344299", "Volume": "2524813"}, {"Date": "2014-10-10", "Open": "556.192993", "High": "563.582703", "Low": "542.560425", "Close": "542.999207", "Adj Close": "542.999207", "Volume": "3081938"}, {"Date": "2014-10-13", "Open": "543.497803", "High": "547.995483", "Low": "531.640381", "Close": "531.750061", "Adj Close": "531.750061", "Volume": "2581669"}, {"Date": "2014-10-14", "Open": "537.424500", "High": "545.691833", "Low": "531.710205", "Close": "536.467102", "Adj Close": "536.467102", "Volume": "2222585"}, {"Date": "2014-10-15", "Open": "529.556091", "High": "531.341187", "Low": "516.880920", "Close": "528.578796", "Adj Close": "528.578796", "Volume": "3719384"}, {"Date": "2014-10-16", "Open": "517.578979", "High": "527.980408", "Low": "513.589966", "Close": "523.073914", "Adj Close": "523.073914", "Volume": "3708554"}, {"Date": "2014-10-17", "Open": "525.806396", "High": "529.526184", "Low": "507.137665", "Close": "509.770416", "Adj Close": "509.770416", "Volume": "5539367"}, {"Date": "2014-10-20", "Open": "508.055145", "High": "520.331421", "Low": "506.708832", "Close": "519.413940", "Adj Close": "519.413940", "Volume": "2607539"}, {"Date": "2014-10-21", "Open": "523.752014", "High": "525.347656", "Low": "517.688660", "Close": "525.098328", "Adj Close": "525.098328", "Volume": "2336297"}, {"Date": "2014-10-22", "Open": "528.439148", "High": "538.322021", "Low": "527.352173", "Close": "531.251465", "Adj Close": "531.251465", "Volume": "2919293"}, {"Date": "2014-10-23", "Open": "537.843323", "High": "545.721741", "Low": "534.382874", "Close": "542.490601", "Adj Close": "542.490601", "Volume": "2348831"}, {"Date": "2014-10-24", "Open": "542.869568", "High": "543.388123", "Low": "534.322998", "Close": "538.302063", "Adj Close": "538.302063", "Volume": "1973102"}, {"Date": "2014-10-27", "Open": "535.559631", "High": "542.919434", "Low": "535.559631", "Close": "539.289368", "Adj Close": "539.289368", "Volume": "1185345"}, {"Date": "2014-10-28", "Open": "541.513245", "High": "547.476929", "Low": "540.137024", "Close": "547.397095", "Adj Close": "547.397095", "Volume": "1270980"}, {"Date": "2014-10-29", "Open": "548.494080", "High": "552.672607", "Low": "545.482361", "Close": "547.825928", "Adj Close": "547.825928", "Volume": "1770548"}, {"Date": "2014-10-30", "Open": "547.446960", "High": "551.286438", "Low": "542.021851", "Close": "548.803284", "Adj Close": "548.803284", "Volume": "1455686"}, {"Date": "2014-10-31", "Open": "557.818481", "High": "558.037903", "Low": "553.231079", "Close": "557.549255", "Adj Close": "557.549255", "Volume": "2035072"}, {"Date": "2014-11-03", "Open": "553.979065", "High": "556.372498", "Low": "551.715271", "Close": "553.699829", "Adj Close": "553.699829", "Volume": "1382285"}, {"Date": "2014-11-04", "Open": "551.485901", "High": "553.979065", "Low": "547.796021", "Close": "552.592834", "Adj Close": "552.592834", "Volume": "1244207"}, {"Date": "2014-11-05", "Open": "555.275513", "High": "555.275513", "Low": "542.560425", "Close": "544.425293", "Adj Close": "544.425293", "Volume": "2032264"}, {"Date": "2014-11-06", "Open": "544.006409", "High": "545.387634", "Low": "539.488831", "Close": "540.555908", "Adj Close": "540.555908", "Volume": "1333250"}, {"Date": "2014-11-07", "Open": "544.714478", "High": "544.714478", "Low": "537.195129", "Close": "539.528748", "Adj Close": "539.528748", "Volume": "1633773"}, {"Date": "2014-11-10", "Open": "539.977478", "High": "548.085205", "Low": "539.538696", "Close": "545.990967", "Adj Close": "545.990967", "Volume": "1134607"}, {"Date": "2014-11-11", "Open": "546.988220", "High": "550.428772", "Low": "544.804260", "Close": "548.783325", "Adj Close": "548.783325", "Volume": "965544"}, {"Date": "2014-11-12", "Open": "548.883057", "High": "548.952820", "Low": "543.677307", "Close": "545.811462", "Adj Close": "545.811462", "Volume": "1129693"}, {"Date": "2014-11-13", "Open": "548.294678", "High": "548.294678", "Low": "541.991943", "Close": "543.886780", "Adj Close": "543.886780", "Volume": "1339367"}, {"Date": "2014-11-14", "Open": "545.183228", "High": "545.183228", "Low": "540.665588", "Close": "542.909424", "Adj Close": "542.909424", "Volume": "1289531"}, {"Date": "2014-11-17", "Open": "542.091675", "High": "542.301086", "Low": "532.598755", "Close": "535.041016", "Adj Close": "535.041016", "Volume": "1726026"}, {"Date": "2014-11-18", "Open": "536.028320", "High": "540.456177", "Low": "532.707458", "Close": "533.565125", "Adj Close": "533.565125", "Volume": "1962674"}, {"Date": "2014-11-19", "Open": "533.535156", "High": "536.766296", "Low": "528.628662", "Close": "535.519714", "Adj Close": "535.519714", "Volume": "1392212"}, {"Date": "2014-11-20", "Open": "529.795471", "High": "533.644897", "Low": "529.625916", "Close": "533.365662", "Adj Close": "533.365662", "Volume": "1563381"}, {"Date": "2014-11-21", "Open": "540.127075", "High": "540.655640", "Low": "535.090881", "Close": "536.028320", "Adj Close": "536.028320", "Volume": "2224290"}, {"Date": "2014-11-24", "Open": "536.177917", "High": "541.214111", "Low": "534.153503", "Close": "537.793518", "Adj Close": "537.793518", "Volume": "1706372"}, {"Date": "2014-11-25", "Open": "537.524231", "High": "542.490601", "Low": "537.127319", "Close": "539.598511", "Adj Close": "539.598511", "Volume": "1789901"}, {"Date": "2014-11-26", "Open": "539.399109", "High": "540.067261", "Low": "535.571594", "Close": "538.890503", "Adj Close": "538.890503", "Volume": "1522970"}, {"Date": "2014-11-28", "Open": "539.139771", "High": "540.515991", "Low": "535.130798", "Close": "540.346497", "Adj Close": "540.346497", "Volume": "1148344"}, {"Date": "2014-12-01", "Open": "537.424500", "High": "539.927612", "Low": "530.403748", "Close": "532.338440", "Adj Close": "532.338440", "Volume": "2115392"}, {"Date": "2014-12-02", "Open": "532.049255", "High": "534.033813", "Low": "528.349426", "Close": "532.288574", "Adj Close": "532.288574", "Volume": "1526680"}, {"Date": "2014-12-03", "Open": "529.984924", "High": "534.528442", "Low": "527.810913", "Close": "529.865234", "Adj Close": "529.865234", "Volume": "1277999"}, {"Date": "2014-12-04", "Open": "529.705688", "High": "535.868774", "Low": "527.142700", "Close": "535.838867", "Adj Close": "535.838867", "Volume": "1392112"}, {"Date": "2014-12-05", "Open": "529.546143", "High": "531.430969", "Low": "522.844543", "Close": "523.821838", "Adj Close": "523.821838", "Volume": "2565625"}, {"Date": "2014-12-08", "Open": "525.686707", "High": "529.546143", "Low": "522.355896", "Close": "525.537109", "Adj Close": "525.537109", "Volume": "2329378"}, {"Date": "2014-12-09", "Open": "520.710388", "High": "532.727417", "Low": "519.074890", "Close": "531.909668", "Adj Close": "531.909668", "Volume": "1871324"}, {"Date": "2014-12-10", "Open": "531.620422", "High": "534.861511", "Low": "524.121033", "Close": "524.619629", "Adj Close": "524.619629", "Volume": "1712288"}, {"Date": "2014-12-11", "Open": "526.354919", "High": "532.458130", "Low": "525.656799", "Close": "526.893433", "Adj Close": "526.893433", "Volume": "1610810"}, {"Date": "2014-12-12", "Open": "522.076660", "High": "527.052979", "Low": "517.239929", "Close": "517.239929", "Adj Close": "517.239929", "Volume": "1994561"}, {"Date": "2014-12-15", "Open": "521.308777", "High": "521.667786", "Low": "511.864685", "Close": "512.393250", "Adj Close": "512.393250", "Volume": "2813403"}, {"Date": "2014-12-16", "Open": "510.159363", "High": "511.645264", "Low": "487.661133", "Close": "494.033630", "Adj Close": "494.033630", "Volume": "3964254"}, {"Date": "2014-12-17", "Open": "495.639221", "High": "505.611847", "Low": "495.449738", "Close": "503.507629", "Adj Close": "503.507629", "Volume": "2883194"}, {"Date": "2014-12-18", "Open": "511.545563", "High": "512.463013", "Low": "503.318146", "Close": "509.700623", "Adj Close": "509.700623", "Volume": "2926713"}, {"Date": "2014-12-19", "Open": "510.109497", "High": "516.302490", "Low": "505.523071", "Close": "514.936218", "Adj Close": "514.936218", "Volume": "3690204"}, {"Date": "2014-12-22", "Open": "514.666992", "High": "525.018555", "Low": "514.666992", "Close": "523.432922", "Adj Close": "523.432922", "Volume": "2723758"}, {"Date": "2014-12-23", "Open": "525.557068", "High": "533.096375", "Low": "524.848999", "Close": "529.137268", "Adj Close": "529.137268", "Volume": "2197617"}, {"Date": "2014-12-24", "Open": "529.057495", "High": "530.303040", "Low": "525.577026", "Close": "527.322266", "Adj Close": "527.322266", "Volume": "705933"}, {"Date": "2014-12-26", "Open": "527.322266", "High": "532.787231", "Low": "525.866211", "Close": "532.567810", "Adj Close": "532.567810", "Volume": "1040549"}, {"Date": "2014-12-29", "Open": "530.732849", "High": "534.013855", "Low": "528.559814", "Close": "528.877991", "Adj Close": "528.877991", "Volume": "2278539"}, {"Date": "2014-12-30", "Open": "526.644104", "High": "529.695740", "Low": "525.686707", "Close": "528.967712", "Adj Close": "528.967712", "Volume": "876299"}, {"Date": "2014-12-31", "Open": "529.795471", "High": "531.141724", "Low": "524.360352", "Close": "524.958740", "Adj Close": "524.958740", "Volume": "1368246"}, {"Date": "2015-01-02", "Open": "527.561584", "High": "529.815369", "Low": "522.665039", "Close": "523.373108", "Adj Close": "523.373108", "Volume": "1447563"}, {"Date": "2015-01-05", "Open": "521.827332", "High": "522.894409", "Low": "511.655243", "Close": "512.463013", "Adj Close": "512.463013", "Volume": "2059840"}, {"Date": "2015-01-06", "Open": "513.589966", "High": "514.761719", "Low": "499.678131", "Close": "500.585632", "Adj Close": "500.585632", "Volume": "2899940"}, {"Date": "2015-01-07", "Open": "505.611847", "High": "505.855164", "Low": "498.281952", "Close": "499.727997", "Adj Close": "499.727997", "Volume": "2065054"}, {"Date": "2015-01-08", "Open": "496.626526", "High": "502.101471", "Low": "489.655640", "Close": "501.303680", "Adj Close": "501.303680", "Volume": "3353582"}, {"Date": "2015-01-09", "Open": "503.377991", "High": "503.537537", "Low": "493.435272", "Close": "494.811493", "Adj Close": "494.811493", "Volume": "2071371"}, {"Date": "2015-01-12", "Open": "493.584869", "High": "494.618011", "Low": "486.225067", "Close": "491.201416", "Adj Close": "491.201416", "Volume": "2326771"}, {"Date": "2015-01-13", "Open": "497.474182", "High": "501.602844", "Low": "491.041840", "Close": "494.821472", "Adj Close": "494.821472", "Volume": "2370490"}, {"Date": "2015-01-14", "Open": "493.295654", "High": "501.852173", "Low": "491.650177", "Close": "499.498627", "Adj Close": "499.498627", "Volume": "2235721"}, {"Date": "2015-01-15", "Open": "504.185760", "High": "504.295471", "Low": "496.397156", "Close": "500.416107", "Adj Close": "500.416107", "Volume": "2715836"}, {"Date": "2015-01-16", "Open": "498.640991", "High": "506.798584", "Low": "498.631012", "Close": "506.688873", "Adj Close": "506.688873", "Volume": "2298293"}, {"Date": "2015-01-20", "Open": "509.600891", "High": "511.096771", "Low": "504.630524", "Close": "505.512115", "Adj Close": "505.512115", "Volume": "2232011"}, {"Date": "2015-01-21", "Open": "505.861145", "High": "517.858215", "Low": "504.814026", "Close": "516.621643", "Adj Close": "516.621643", "Volume": "2268712"}, {"Date": "2015-01-22", "Open": "520.052185", "High": "534.861511", "Low": "518.277100", "Close": "532.926819", "Adj Close": "532.926819", "Volume": "2676929"}, {"Date": "2015-01-23", "Open": "534.123535", "High": "540.685547", "Low": "531.540649", "Close": "538.471619", "Adj Close": "538.471619", "Volume": "2281747"}, {"Date": "2015-01-26", "Open": "537.055542", "High": "537.524231", "Low": "528.219788", "Close": "533.744629", "Adj Close": "533.744629", "Volume": "1543727"}, {"Date": "2015-01-27", "Open": "528.518921", "High": "529.246948", "Low": "516.771179", "Close": "517.210022", "Adj Close": "517.210022", "Volume": "1904013"}, {"Date": "2015-01-28", "Open": "521.348633", "High": "521.558044", "Low": "508.603638", "Close": "508.603638", "Adj Close": "508.603638", "Volume": "1683810"}, {"Date": "2015-01-29", "Open": "509.600891", "High": "509.690643", "Low": "499.827728", "Close": "509.261810", "Adj Close": "509.261810", "Volume": "4186362"}, {"Date": "2015-01-30", "Open": "514.447571", "High": "538.391846", "Low": "514.108521", "Close": "533.056519", "Adj Close": "533.056519", "Volume": "5606350"}, {"Date": "2015-02-02", "Open": "530.274109", "High": "531.540649", "Low": "517.130249", "Close": "527.033020", "Adj Close": "527.033020", "Volume": "2849803"}, {"Date": "2015-02-03", "Open": "526.554321", "High": "531.939575", "Low": "521.827332", "Close": "527.790955", "Adj Close": "527.790955", "Volume": "2038682"}, {"Date": "2015-02-04", "Open": "527.790955", "High": "531.213562", "Low": "519.842773", "Close": "521.328674", "Adj Close": "521.328674", "Volume": "1663655"}, {"Date": "2015-02-05", "Open": "522.355896", "High": "527.052979", "Low": "520.660522", "Close": "526.135498", "Adj Close": "526.135498", "Volume": "1849765"}, {"Date": "2015-02-06", "Open": "526.195313", "High": "535.729126", "Low": "524.968689", "Close": "529.546143", "Adj Close": "529.546143", "Volume": "1763529"}, {"Date": "2015-02-09", "Open": "526.554321", "High": "530.543396", "Low": "524.579773", "Close": "526.384827", "Adj Close": "526.384827", "Volume": "1267771"}, {"Date": "2015-02-10", "Open": "527.850769", "High": "536.227783", "Low": "525.477295", "Close": "535.469849", "Adj Close": "535.469849", "Volume": "1749891"}, {"Date": "2015-02-11", "Open": "533.834351", "High": "536.975708", "Low": "531.917603", "Close": "534.502502", "Adj Close": "534.502502", "Volume": "1377772"}, {"Date": "2015-02-12", "Open": "535.778992", "High": "543.328308", "Low": "533.209045", "Close": "541.443481", "Adj Close": "541.443481", "Volume": "1620236"}, {"Date": "2015-02-13", "Open": "541.862305", "High": "548.404358", "Low": "541.642944", "Close": "547.506836", "Adj Close": "547.506836", "Volume": "1900303"}, {"Date": "2015-02-17", "Open": "545.332764", "High": "548.494080", "Low": "539.608521", "Close": "541.353699", "Adj Close": "541.353699", "Volume": "1616827"}, {"Date": "2015-02-18", "Open": "539.917664", "High": "543.996460", "Low": "536.038330", "Close": "538.222290", "Adj Close": "538.222290", "Volume": "1453079"}, {"Date": "2015-02-19", "Open": "536.566833", "High": "541.622986", "Low": "536.536926", "Close": "541.383606", "Adj Close": "541.383606", "Volume": "989108"}, {"Date": "2015-02-20", "Open": "541.642944", "High": "542.261230", "Low": "534.333008", "Close": "537.474365", "Adj Close": "537.474365", "Volume": "1444355"}, {"Date": "2015-02-23", "Open": "534.582275", "High": "534.970215", "Low": "527.960510", "Close": "530.453613", "Adj Close": "530.453613", "Volume": "1457892"}, {"Date": "2015-02-24", "Open": "528.548889", "High": "535.320251", "Low": "526.803650", "Close": "534.622192", "Adj Close": "534.622192", "Volume": "1005052"}, {"Date": "2015-02-25", "Open": "534.432739", "High": "544.724487", "Low": "533.978943", "Close": "542.380920", "Adj Close": "542.380920", "Volume": "1826000"}, {"Date": "2015-02-26", "Open": "541.722717", "High": "554.617310", "Low": "540.017395", "Close": "553.959106", "Adj Close": "553.959106", "Volume": "2311529"}, {"Date": "2015-02-27", "Open": "552.722473", "High": "563.163818", "Low": "551.386169", "Close": "556.871094", "Adj Close": "556.871094", "Volume": "2410199"}, {"Date": "2015-03-02", "Open": "558.995300", "High": "570.583435", "Low": "557.220154", "Close": "569.775696", "Adj Close": "569.775696", "Volume": "2129631"}, {"Date": "2015-03-03", "Open": "568.888123", "High": "573.814575", "Low": "564.968872", "Close": "572.069397", "Adj Close": "572.069397", "Volume": "1704768"}, {"Date": "2015-03-04", "Open": "570.304260", "High": "575.529907", "Low": "566.454773", "Close": "571.800110", "Adj Close": "571.800110", "Volume": "1876839"}, {"Date": "2015-03-05", "Open": "573.445618", "High": "576.327698", "Low": "571.840027", "Close": "573.754761", "Adj Close": "573.754761", "Volume": "1389605"}, {"Date": "2015-03-06", "Open": "573.305969", "High": "575.101074", "Low": "565.208191", "Close": "566.130676", "Adj Close": "566.130676", "Volume": "1659143"}, {"Date": "2015-03-09", "Open": "565.307922", "High": "568.708618", "Low": "561.992065", "Close": "567.292480", "Adj Close": "567.292480", "Volume": "1062108"}, {"Date": "2015-03-10", "Open": "562.705078", "High": "563.303467", "Low": "553.211182", "Close": "553.490417", "Adj Close": "553.490417", "Volume": "1792307"}, {"Date": "2015-03-11", "Open": "553.620056", "High": "556.611816", "Low": "549.172241", "Close": "549.670898", "Adj Close": "549.670898", "Volume": "1820785"}, {"Date": "2015-03-12", "Open": "551.994507", "High": "554.846680", "Low": "548.952820", "Close": "553.989014", "Adj Close": "553.989014", "Volume": "1389605"}, {"Date": "2015-03-13", "Open": "551.984497", "High": "556.871094", "Low": "542.729919", "Close": "545.821472", "Adj Close": "545.821472", "Volume": "1703564"}, {"Date": "2015-03-16", "Open": "549.441528", "High": "555.325378", "Low": "544.505066", "Close": "552.991760", "Adj Close": "552.991760", "Volume": "1640993"}, {"Date": "2015-03-17", "Open": "550.199402", "High": "552.283691", "Low": "546.499573", "Close": "549.331787", "Adj Close": "549.331787", "Volume": "1805544"}, {"Date": "2015-03-18", "Open": "550.987244", "High": "558.247314", "Low": "545.502319", "Close": "557.968079", "Adj Close": "557.968079", "Volume": "2134544"}, {"Date": "2015-03-19", "Open": "557.858398", "High": "559.264526", "Low": "554.622314", "Close": "556.462219", "Adj Close": "556.462219", "Volume": "1197278"}, {"Date": "2015-03-20", "Open": "560.112183", "High": "560.182007", "Low": "557.519348", "Close": "558.825745", "Adj Close": "558.825745", "Volume": "2616865"}, {"Date": "2015-03-23", "Open": "558.895569", "High": "560.820251", "Low": "554.308167", "Close": "557.279968", "Adj Close": "557.279968", "Volume": "1643801"}, {"Date": "2015-03-24", "Open": "561.019714", "High": "573.016785", "Low": "559.673401", "Close": "568.628845", "Adj Close": "568.628845", "Volume": "2583273"}, {"Date": "2015-03-25", "Open": "568.937988", "High": "570.693176", "Low": "557.210205", "Close": "557.255066", "Adj Close": "557.255066", "Volume": "2152293"}, {"Date": "2015-03-26", "Open": "556.063354", "High": "557.369751", "Low": "549.142334", "Close": "553.649963", "Adj Close": "553.649963", "Volume": "1572606"}, {"Date": "2015-03-27", "Open": "551.485901", "High": "553.759644", "Low": "546.629211", "Close": "546.838684", "Adj Close": "546.838684", "Volume": "1897495"}, {"Date": "2015-03-30", "Open": "550.109680", "High": "551.954590", "Low": "546.669128", "Close": "550.518555", "Adj Close": "550.518555", "Volume": "1287525"}, {"Date": "2015-03-31", "Open": "548.494080", "High": "553.191223", "Low": "545.223083", "Close": "546.499573", "Adj Close": "546.499573", "Volume": "1588048"}, {"Date": "2015-04-01", "Open": "547.097961", "High": "549.630981", "Low": "538.022888", "Close": "541.074463", "Adj Close": "541.074463", "Volume": "1963075"}, {"Date": "2015-04-02", "Open": "539.369141", "High": "539.369141", "Low": "532.385315", "Close": "534.063721", "Adj Close": "534.063721", "Volume": "1716399"}, {"Date": "2015-04-06", "Open": "530.762817", "High": "536.935852", "Low": "528.120056", "Close": "535.295349", "Adj Close": "535.295349", "Volume": "1324426"}, {"Date": "2015-04-07", "Open": "536.606750", "High": "541.204102", "Low": "534.532471", "Close": "535.549622", "Adj Close": "535.549622", "Volume": "1302867"}, {"Date": "2015-04-08", "Open": "536.905945", "High": "542.360962", "Low": "536.905945", "Close": "540.127075", "Adj Close": "540.127075", "Volume": "1178527"}, {"Date": "2015-04-09", "Open": "539.548645", "High": "540.466125", "Low": "534.023865", "Close": "539.299377", "Adj Close": "539.299377", "Volume": "1557865"}, {"Date": "2015-04-10", "Open": "540.805237", "High": "540.805237", "Low": "535.838867", "Close": "538.531433", "Adj Close": "538.531433", "Volume": "1409459"}, {"Date": "2015-04-13", "Open": "536.935852", "High": "542.570374", "Low": "535.838867", "Close": "537.693787", "Adj Close": "537.693787", "Volume": "1645305"}, {"Date": "2015-04-14", "Open": "534.781738", "High": "536.098145", "Low": "526.646118", "Close": "528.937805", "Adj Close": "528.937805", "Volume": "2604130"}, {"Date": "2015-04-15", "Open": "527.252441", "High": "533.265930", "Low": "521.787415", "Close": "531.071960", "Adj Close": "531.071960", "Volume": "2318849"}, {"Date": "2015-04-16", "Open": "528.449158", "High": "534.123535", "Low": "528.159912", "Close": "532.338440", "Adj Close": "532.338440", "Volume": "1299859"}, {"Date": "2015-04-17", "Open": "527.212524", "High": "528.389282", "Low": "519.583496", "Close": "522.615173", "Adj Close": "522.615173", "Volume": "2151892"}, {"Date": "2015-04-20", "Open": "524.160889", "High": "534.622192", "Low": "523.063904", "Close": "533.914124", "Adj Close": "533.914124", "Volume": "1679298"}, {"Date": "2015-04-21", "Open": "536.038330", "High": "537.913147", "Low": "532.213806", "Close": "532.507996", "Adj Close": "532.507996", "Volume": "1844751"}, {"Date": "2015-04-22", "Open": "532.936829", "High": "539.598511", "Low": "530.294067", "Close": "537.888245", "Adj Close": "537.888245", "Volume": "1593563"}, {"Date": "2015-04-23", "Open": "539.518738", "High": "549.451477", "Low": "538.750854", "Close": "545.502319", "Adj Close": "545.502319", "Volume": "4184858"}, {"Date": "2015-04-24", "Open": "564.550049", "High": "569.576233", "Low": "555.724243", "Close": "563.512878", "Adj Close": "563.512878", "Volume": "4932505"}, {"Date": "2015-04-27", "Open": "563.390015", "High": "565.950012", "Low": "553.200012", "Close": "555.369995", "Adj Close": "555.369995", "Volume": "2398000"}, {"Date": "2015-04-28", "Open": "554.640015", "High": "556.020020", "Low": "550.366028", "Close": "553.679993", "Adj Close": "553.679993", "Volume": "1491000"}, {"Date": "2015-04-29", "Open": "550.469971", "High": "553.679993", "Low": "546.905029", "Close": "549.080017", "Adj Close": "549.080017", "Volume": "1698800"}, {"Date": "2015-04-30", "Open": "547.869995", "High": "548.590027", "Low": "535.049988", "Close": "537.340027", "Adj Close": "537.340027", "Volume": "2082200"}, {"Date": "2015-05-01", "Open": "538.429993", "High": "539.539978", "Low": "532.099976", "Close": "537.900024", "Adj Close": "537.900024", "Volume": "1768200"}, {"Date": "2015-05-04", "Open": "538.530029", "High": "544.070007", "Low": "535.059998", "Close": "540.780029", "Adj Close": "540.780029", "Volume": "1308000"}, {"Date": "2015-05-05", "Open": "538.210022", "High": "539.739990", "Low": "530.390991", "Close": "530.799988", "Adj Close": "530.799988", "Volume": "1383100"}, {"Date": "2015-05-06", "Open": "531.239990", "High": "532.380005", "Low": "521.085022", "Close": "524.219971", "Adj Close": "524.219971", "Volume": "1567000"}, {"Date": "2015-05-07", "Open": "523.989990", "High": "533.460022", "Low": "521.750000", "Close": "530.700012", "Adj Close": "530.700012", "Volume": "1546300"}, {"Date": "2015-05-08", "Open": "536.650024", "High": "541.150024", "Low": "525.000000", "Close": "538.219971", "Adj Close": "538.219971", "Volume": "1527600"}, {"Date": "2015-05-11", "Open": "538.369995", "High": "541.979980", "Low": "535.400024", "Close": "535.700012", "Adj Close": "535.700012", "Volume": "905300"}, {"Date": "2015-05-12", "Open": "531.599976", "High": "533.208984", "Low": "525.260010", "Close": "529.039978", "Adj Close": "529.039978", "Volume": "1634200"}, {"Date": "2015-05-13", "Open": "530.559998", "High": "534.322021", "Low": "528.655029", "Close": "529.619995", "Adj Close": "529.619995", "Volume": "1252300"}, {"Date": "2015-05-14", "Open": "533.770020", "High": "539.000000", "Low": "532.409973", "Close": "538.400024", "Adj Close": "538.400024", "Volume": "1403900"}, {"Date": "2015-05-15", "Open": "539.179993", "High": "539.273987", "Low": "530.380005", "Close": "533.849976", "Adj Close": "533.849976", "Volume": "1971300"}, {"Date": "2015-05-18", "Open": "532.010010", "High": "534.820007", "Low": "528.849976", "Close": "532.299988", "Adj Close": "532.299988", "Volume": "2003400"}, {"Date": "2015-05-19", "Open": "533.979980", "High": "540.659973", "Low": "533.039978", "Close": "537.359985", "Adj Close": "537.359985", "Volume": "1966900"}, {"Date": "2015-05-20", "Open": "538.489990", "High": "542.919983", "Low": "532.971985", "Close": "539.270020", "Adj Close": "539.270020", "Volume": "1430800"}, {"Date": "2015-05-21", "Open": "537.950012", "High": "543.840027", "Low": "535.979980", "Close": "542.510010", "Adj Close": "542.510010", "Volume": "1462700"}, {"Date": "2015-05-22", "Open": "540.150024", "High": "544.190002", "Low": "539.510010", "Close": "540.109985", "Adj Close": "540.109985", "Volume": "1176200"}, {"Date": "2015-05-26", "Open": "538.119995", "High": "539.000000", "Low": "529.880005", "Close": "532.320007", "Adj Close": "532.320007", "Volume": "2406500"}, {"Date": "2015-05-27", "Open": "532.799988", "High": "540.549988", "Low": "531.710022", "Close": "539.789978", "Adj Close": "539.789978", "Volume": "1525000"}, {"Date": "2015-05-28", "Open": "538.010010", "High": "540.609985", "Low": "536.250000", "Close": "539.780029", "Adj Close": "539.780029", "Volume": "1029800"}, {"Date": "2015-05-29", "Open": "537.369995", "High": "538.630005", "Low": "531.450012", "Close": "532.109985", "Adj Close": "532.109985", "Volume": "2597400"}, {"Date": "2015-06-01", "Open": "536.789978", "High": "536.789978", "Low": "529.760010", "Close": "533.989990", "Adj Close": "533.989990", "Volume": "1904300"}, {"Date": "2015-06-02", "Open": "532.929993", "High": "543.000000", "Low": "531.330017", "Close": "539.179993", "Adj Close": "539.179993", "Volume": "1939000"}, {"Date": "2015-06-03", "Open": "539.909973", "High": "543.500000", "Low": "537.109985", "Close": "540.309998", "Adj Close": "540.309998", "Volume": "1717000"}, {"Date": "2015-06-04", "Open": "537.760010", "High": "540.590027", "Low": "534.320007", "Close": "536.700012", "Adj Close": "536.700012", "Volume": "1348300"}, {"Date": "2015-06-05", "Open": "536.349976", "High": "537.200012", "Low": "532.520020", "Close": "533.330017", "Adj Close": "533.330017", "Volume": "1388200"}, {"Date": "2015-06-08", "Open": "533.309998", "High": "534.119995", "Low": "526.239990", "Close": "526.830017", "Adj Close": "526.830017", "Volume": "1520600"}, {"Date": "2015-06-09", "Open": "527.559998", "High": "529.200012", "Low": "523.010010", "Close": "526.690002", "Adj Close": "526.690002", "Volume": "1455300"}, {"Date": "2015-06-10", "Open": "529.359985", "High": "538.359985", "Low": "529.349976", "Close": "536.690002", "Adj Close": "536.690002", "Volume": "1815000"}, {"Date": "2015-06-11", "Open": "538.424988", "High": "538.979980", "Low": "533.020020", "Close": "534.609985", "Adj Close": "534.609985", "Volume": "1217500"}, {"Date": "2015-06-12", "Open": "531.599976", "High": "533.119995", "Low": "530.159973", "Close": "532.330017", "Adj Close": "532.330017", "Volume": "955800"}, {"Date": "2015-06-15", "Open": "528.000000", "High": "528.299988", "Low": "524.000000", "Close": "527.200012", "Adj Close": "527.200012", "Volume": "1632700"}, {"Date": "2015-06-16", "Open": "528.400024", "High": "529.640015", "Low": "525.559998", "Close": "528.150024", "Adj Close": "528.150024", "Volume": "1071800"}, {"Date": "2015-06-17", "Open": "529.369995", "High": "530.979980", "Low": "525.099976", "Close": "529.260010", "Adj Close": "529.260010", "Volume": "1294200"}, {"Date": "2015-06-18", "Open": "531.000000", "High": "538.150024", "Low": "530.789978", "Close": "536.729980", "Adj Close": "536.729980", "Volume": "1833100"}, {"Date": "2015-06-19", "Open": "537.210022", "High": "538.250000", "Low": "533.010010", "Close": "536.690002", "Adj Close": "536.690002", "Volume": "1893500"}, {"Date": "2015-06-22", "Open": "539.590027", "High": "543.739990", "Low": "537.530029", "Close": "538.190002", "Adj Close": "538.190002", "Volume": "1250300"}, {"Date": "2015-06-23", "Open": "539.640015", "High": "541.499023", "Low": "535.250000", "Close": "540.479980", "Adj Close": "540.479980", "Volume": "1197500"}, {"Date": "2015-06-24", "Open": "540.000000", "High": "540.000000", "Low": "535.659973", "Close": "537.840027", "Adj Close": "537.840027", "Volume": "1286600"}, {"Date": "2015-06-25", "Open": "538.869995", "High": "540.900024", "Low": "535.229980", "Close": "535.229980", "Adj Close": "535.229980", "Volume": "1335700"}, {"Date": "2015-06-26", "Open": "537.260010", "High": "537.760010", "Low": "531.349976", "Close": "531.690002", "Adj Close": "531.690002", "Volume": "2109100"}, {"Date": "2015-06-29", "Open": "525.010010", "High": "528.609985", "Low": "520.539978", "Close": "521.520020", "Adj Close": "521.520020", "Volume": "1937800"}, {"Date": "2015-06-30", "Open": "526.020020", "High": "526.250000", "Low": "520.500000", "Close": "520.510010", "Adj Close": "520.510010", "Volume": "2217200"}, {"Date": "2015-07-01", "Open": "524.729980", "High": "525.690002", "Low": "518.229980", "Close": "521.840027", "Adj Close": "521.840027", "Volume": "1961000"}, {"Date": "2015-07-02", "Open": "521.080017", "High": "524.650024", "Low": "521.080017", "Close": "523.400024", "Adj Close": "523.400024", "Volume": "1235900"}, {"Date": "2015-07-06", "Open": "519.500000", "High": "525.250000", "Low": "519.000000", "Close": "522.859985", "Adj Close": "522.859985", "Volume": "1280500"}, {"Date": "2015-07-07", "Open": "523.130005", "High": "526.179993", "Low": "515.179993", "Close": "525.020020", "Adj Close": "525.020020", "Volume": "1597200"}, {"Date": "2015-07-08", "Open": "521.049988", "High": "522.734009", "Low": "516.109985", "Close": "516.830017", "Adj Close": "516.830017", "Volume": "1296700"}, {"Date": "2015-07-09", "Open": "523.119995", "High": "523.770020", "Low": "520.349976", "Close": "520.679993", "Adj Close": "520.679993", "Volume": "1842300"}, {"Date": "2015-07-10", "Open": "526.289978", "High": "532.559998", "Low": "525.549988", "Close": "530.130005", "Adj Close": "530.130005", "Volume": "1956700"}, {"Date": "2015-07-13", "Open": "532.880005", "High": "547.109985", "Low": "532.400024", "Close": "546.549988", "Adj Close": "546.549988", "Volume": "2206500"}, {"Date": "2015-07-14", "Open": "546.760010", "High": "565.848999", "Low": "546.710022", "Close": "561.099976", "Adj Close": "561.099976", "Volume": "3244100"}, {"Date": "2015-07-15", "Open": "560.130005", "High": "566.502991", "Low": "556.789978", "Close": "560.219971", "Adj Close": "560.219971", "Volume": "1784600"}, {"Date": "2015-07-16", "Open": "565.119995", "High": "580.679993", "Low": "565.000000", "Close": "579.849976", "Adj Close": "579.849976", "Volume": "4768300"}, {"Date": "2015-07-17", "Open": "649.000000", "High": "674.468018", "Low": "645.000000", "Close": "672.929993", "Adj Close": "672.929993", "Volume": "11164900"}, {"Date": "2015-07-20", "Open": "659.239990", "High": "668.880005", "Low": "653.010010", "Close": "663.020020", "Adj Close": "663.020020", "Volume": "5860900"}, {"Date": "2015-07-21", "Open": "655.210022", "High": "673.000000", "Low": "654.299988", "Close": "662.299988", "Adj Close": "662.299988", "Volume": "3377200"}, {"Date": "2015-07-22", "Open": "660.890015", "High": "678.640015", "Low": "659.000000", "Close": "662.099976", "Adj Close": "662.099976", "Volume": "3929300"}, {"Date": "2015-07-23", "Open": "661.270020", "High": "663.630005", "Low": "641.000000", "Close": "644.280029", "Adj Close": "644.280029", "Volume": "3029100"}, {"Date": "2015-07-24", "Open": "647.000000", "High": "648.169983", "Low": "622.520020", "Close": "623.559998", "Adj Close": "623.559998", "Volume": "3625700"}, {"Date": "2015-07-27", "Open": "621.000000", "High": "634.299988", "Low": "620.500000", "Close": "627.260010", "Adj Close": "627.260010", "Volume": "2675400"}, {"Date": "2015-07-28", "Open": "632.830017", "High": "632.830017", "Low": "623.309998", "Close": "628.000000", "Adj Close": "628.000000", "Volume": "1727300"}, {"Date": "2015-07-29", "Open": "628.799988", "High": "633.359985", "Low": "622.650024", "Close": "631.929993", "Adj Close": "631.929993", "Volume": "1575100"}, {"Date": "2015-07-30", "Open": "630.000000", "High": "635.219971", "Low": "622.049988", "Close": "632.590027", "Adj Close": "632.590027", "Volume": "1474200"}, {"Date": "2015-07-31", "Open": "631.380005", "High": "632.909973", "Low": "625.500000", "Close": "625.609985", "Adj Close": "625.609985", "Volume": "1706100"}, {"Date": "2015-08-03", "Open": "625.340027", "High": "633.056030", "Low": "625.340027", "Close": "631.210022", "Adj Close": "631.210022", "Volume": "1304500"}, {"Date": "2015-08-04", "Open": "628.419983", "High": "634.809998", "Low": "627.159973", "Close": "629.250000", "Adj Close": "629.250000", "Volume": "1490900"}, {"Date": "2015-08-05", "Open": "634.330017", "High": "647.859985", "Low": "633.159973", "Close": "643.780029", "Adj Close": "643.780029", "Volume": "2334300"}, {"Date": "2015-08-06", "Open": "645.000000", "High": "645.379028", "Low": "632.250000", "Close": "642.679993", "Adj Close": "642.679993", "Volume": "1572600"}, {"Date": "2015-08-07", "Open": "640.229980", "High": "642.679993", "Low": "629.710022", "Close": "635.299988", "Adj Close": "635.299988", "Volume": "1403900"}, {"Date": "2015-08-10", "Open": "639.479980", "High": "643.440002", "Low": "631.249023", "Close": "633.729980", "Adj Close": "633.729980", "Volume": "1809200"}, {"Date": "2015-08-11", "Open": "669.200012", "High": "674.900024", "Low": "654.270020", "Close": "660.780029", "Adj Close": "660.780029", "Volume": "5029200"}, {"Date": "2015-08-12", "Open": "663.080017", "High": "665.000000", "Low": "652.289978", "Close": "659.559998", "Adj Close": "659.559998", "Volume": "2936700"}, {"Date": "2015-08-13", "Open": "659.322021", "High": "664.500000", "Low": "651.661011", "Close": "656.450012", "Adj Close": "656.450012", "Volume": "1810700"}, {"Date": "2015-08-14", "Open": "655.010010", "High": "659.854980", "Low": "652.659973", "Close": "657.119995", "Adj Close": "657.119995", "Volume": "1072100"}, {"Date": "2015-08-17", "Open": "656.799988", "High": "661.380005", "Low": "651.239990", "Close": "660.869995", "Adj Close": "660.869995", "Volume": "1051700"}, {"Date": "2015-08-18", "Open": "661.900024", "High": "664.000000", "Low": "653.460022", "Close": "656.130005", "Adj Close": "656.130005", "Volume": "1456100"}, {"Date": "2015-08-19", "Open": "656.599976", "High": "667.000000", "Low": "654.190002", "Close": "660.900024", "Adj Close": "660.900024", "Volume": "2134100"}, {"Date": "2015-08-20", "Open": "655.460022", "High": "662.989990", "Low": "642.900024", "Close": "646.830017", "Adj Close": "646.830017", "Volume": "2855300"}, {"Date": "2015-08-21", "Open": "639.780029", "High": "640.049988", "Low": "612.330017", "Close": "612.479980", "Adj Close": "612.479980", "Volume": "4265200"}, {"Date": "2015-08-24", "Open": "573.000000", "High": "599.330017", "Low": "565.049988", "Close": "589.609985", "Adj Close": "589.609985", "Volume": "5770300"}, {"Date": "2015-08-25", "Open": "614.909973", "High": "617.450012", "Low": "581.109985", "Close": "582.059998", "Adj Close": "582.059998", "Volume": "3538000"}, {"Date": "2015-08-26", "Open": "610.349976", "High": "631.710022", "Low": "599.049988", "Close": "628.619995", "Adj Close": "628.619995", "Volume": "4235900"}, {"Date": "2015-08-27", "Open": "639.400024", "High": "643.590027", "Low": "622.000000", "Close": "637.609985", "Adj Close": "637.609985", "Volume": "3491300"}, {"Date": "2015-08-28", "Open": "632.820007", "High": "636.880005", "Low": "624.559998", "Close": "630.380005", "Adj Close": "630.380005", "Volume": "1978700"}, {"Date": "2015-08-31", "Open": "627.539978", "High": "635.799988", "Low": "617.679993", "Close": "618.250000", "Adj Close": "618.250000", "Volume": "2176700"}, {"Date": "2015-09-01", "Open": "602.359985", "High": "612.859985", "Low": "594.099976", "Close": "597.789978", "Adj Close": "597.789978", "Volume": "3702100"}, {"Date": "2015-09-02", "Open": "605.590027", "High": "614.340027", "Low": "599.710022", "Close": "614.340027", "Adj Close": "614.340027", "Volume": "2575600"}, {"Date": "2015-09-03", "Open": "617.000000", "High": "619.710022", "Low": "602.820984", "Close": "606.250000", "Adj Close": "606.250000", "Volume": "1759600"}, {"Date": "2015-09-04", "Open": "600.000000", "High": "603.469971", "Low": "595.250000", "Close": "600.700012", "Adj Close": "600.700012", "Volume": "2089000"}, {"Date": "2015-09-08", "Open": "612.489990", "High": "616.309998", "Low": "604.119995", "Close": "614.659973", "Adj Close": "614.659973", "Volume": "2279500"}, {"Date": "2015-09-09", "Open": "621.219971", "High": "626.520020", "Low": "609.599976", "Close": "612.719971", "Adj Close": "612.719971", "Volume": "1702100"}, {"Date": "2015-09-10", "Open": "613.099976", "High": "624.159973", "Low": "611.429993", "Close": "621.349976", "Adj Close": "621.349976", "Volume": "1905300"}, {"Date": "2015-09-11", "Open": "619.750000", "High": "625.780029", "Low": "617.419983", "Close": "625.770020", "Adj Close": "625.770020", "Volume": "1373500"}, {"Date": "2015-09-14", "Open": "625.700012", "High": "625.859985", "Low": "619.429993", "Close": "623.239990", "Adj Close": "623.239990", "Volume": "1702300"}, {"Date": "2015-09-15", "Open": "626.700012", "High": "638.700012", "Low": "623.780029", "Close": "635.140015", "Adj Close": "635.140015", "Volume": "2084400"}, {"Date": "2015-09-16", "Open": "635.469971", "High": "637.950012", "Low": "632.320007", "Close": "635.979980", "Adj Close": "635.979980", "Volume": "1286500"}, {"Date": "2015-09-17", "Open": "637.789978", "High": "650.900024", "Low": "635.020020", "Close": "642.900024", "Adj Close": "642.900024", "Volume": "2274700"}, {"Date": "2015-09-18", "Open": "636.789978", "High": "640.000000", "Low": "627.020020", "Close": "629.250000", "Adj Close": "629.250000", "Volume": "5133400"}, {"Date": "2015-09-21", "Open": "634.400024", "High": "636.489990", "Low": "625.940002", "Close": "635.440002", "Adj Close": "635.440002", "Volume": "1788500"}, {"Date": "2015-09-22", "Open": "627.000000", "High": "627.549988", "Low": "615.429993", "Close": "622.690002", "Adj Close": "622.690002", "Volume": "2562900"}, {"Date": "2015-09-23", "Open": "622.049988", "High": "628.929993", "Low": "620.000000", "Close": "622.359985", "Adj Close": "622.359985", "Volume": "1470900"}, {"Date": "2015-09-24", "Open": "616.640015", "High": "627.320007", "Low": "612.400024", "Close": "625.799988", "Adj Close": "625.799988", "Volume": "2240100"}, {"Date": "2015-09-25", "Open": "629.770020", "High": "629.770020", "Low": "611.000000", "Close": "611.969971", "Adj Close": "611.969971", "Volume": "2174000"}, {"Date": "2015-09-28", "Open": "610.340027", "High": "614.604980", "Low": "589.380005", "Close": "594.890015", "Adj Close": "594.890015", "Volume": "3127700"}, {"Date": "2015-09-29", "Open": "597.280029", "High": "605.000000", "Low": "590.219971", "Close": "594.969971", "Adj Close": "594.969971", "Volume": "2309500"}, {"Date": "2015-09-30", "Open": "603.280029", "High": "608.760010", "Low": "600.729980", "Close": "608.419983", "Adj Close": "608.419983", "Volume": "2413400"}, {"Date": "2015-10-01", "Open": "608.369995", "High": "612.090027", "Low": "599.849976", "Close": "611.289978", "Adj Close": "611.289978", "Volume": "1867600"}, {"Date": "2015-10-02", "Open": "607.200012", "High": "627.340027", "Low": "603.130005", "Close": "626.909973", "Adj Close": "626.909973", "Volume": "2684800"}, {"Date": "2015-10-05", "Open": "632.000000", "High": "643.010010", "Low": "627.000000", "Close": "641.469971", "Adj Close": "641.469971", "Volume": "1803600"}, {"Date": "2015-10-06", "Open": "638.840027", "High": "649.250000", "Low": "636.530029", "Close": "645.440002", "Adj Close": "645.440002", "Volume": "2166300"}, {"Date": "2015-10-07", "Open": "649.239990", "High": "650.609009", "Low": "632.150024", "Close": "642.359985", "Adj Close": "642.359985", "Volume": "2092700"}, {"Date": "2015-10-08", "Open": "641.359985", "High": "644.450012", "Low": "625.559998", "Close": "639.159973", "Adj Close": "639.159973", "Volume": "2182100"}, {"Date": "2015-10-09", "Open": "640.000000", "High": "645.989990", "Low": "635.317993", "Close": "643.609985", "Adj Close": "643.609985", "Volume": "1648700"}, {"Date": "2015-10-12", "Open": "642.090027", "High": "648.500000", "Low": "639.010010", "Close": "646.669983", "Adj Close": "646.669983", "Volume": "1275200"}, {"Date": "2015-10-13", "Open": "643.150024", "High": "657.812012", "Low": "643.150024", "Close": "652.299988", "Adj Close": "652.299988", "Volume": "1807700"}, {"Date": "2015-10-14", "Open": "653.210022", "High": "659.390015", "Low": "648.849976", "Close": "651.159973", "Adj Close": "651.159973", "Volume": "1415500"}, {"Date": "2015-10-15", "Open": "654.659973", "High": "663.130005", "Low": "654.460022", "Close": "661.739990", "Adj Close": "661.739990", "Volume": "1885700"}, {"Date": "2015-10-16", "Open": "664.109985", "High": "664.969971", "Low": "657.200012", "Close": "662.200012", "Adj Close": "662.200012", "Volume": "1611100"}, {"Date": "2015-10-19", "Open": "661.179993", "High": "666.820007", "Low": "659.580017", "Close": "666.099976", "Adj Close": "666.099976", "Volume": "1477300"}, {"Date": "2015-10-20", "Open": "664.039978", "High": "664.719971", "Low": "644.195007", "Close": "650.280029", "Adj Close": "650.280029", "Volume": "2498200"}, {"Date": "2015-10-21", "Open": "654.150024", "High": "655.869995", "Low": "641.729980", "Close": "642.609985", "Adj Close": "642.609985", "Volume": "1791100"}, {"Date": "2015-10-22", "Open": "646.700012", "High": "657.799988", "Low": "644.010010", "Close": "651.789978", "Adj Close": "651.789978", "Volume": "4071000"}, {"Date": "2015-10-23", "Open": "727.500000", "High": "730.000000", "Low": "701.500000", "Close": "702.000000", "Adj Close": "702.000000", "Volume": "6653900"}, {"Date": "2015-10-26", "Open": "701.549988", "High": "719.150024", "Low": "701.260010", "Close": "712.780029", "Adj Close": "712.780029", "Volume": "2716600"}, {"Date": "2015-10-27", "Open": "707.380005", "High": "713.619995", "Low": "704.549988", "Close": "708.489990", "Adj Close": "708.489990", "Volume": "2245800"}, {"Date": "2015-10-28", "Open": "707.330017", "High": "712.979980", "Low": "703.080017", "Close": "712.950012", "Adj Close": "712.950012", "Volume": "2178900"}, {"Date": "2015-10-29", "Open": "710.500000", "High": "718.260010", "Low": "710.010010", "Close": "716.919983", "Adj Close": "716.919983", "Volume": "1456000"}, {"Date": "2015-10-30", "Open": "715.729980", "High": "718.000000", "Low": "710.049988", "Close": "710.809998", "Adj Close": "710.809998", "Volume": "1908800"}, {"Date": "2015-11-02", "Open": "711.059998", "High": "721.619995", "Low": "705.849976", "Close": "721.109985", "Adj Close": "721.109985", "Volume": "1886300"}, {"Date": "2015-11-03", "Open": "718.859985", "High": "724.650024", "Low": "714.719971", "Close": "722.159973", "Adj Close": "722.159973", "Volume": "1565400"}, {"Date": "2015-11-04", "Open": "722.000000", "High": "733.099976", "Low": "721.900024", "Close": "728.109985", "Adj Close": "728.109985", "Volume": "1706700"}, {"Date": "2015-11-05", "Open": "729.469971", "High": "739.479980", "Low": "729.469971", "Close": "731.250000", "Adj Close": "731.250000", "Volume": "1861600"}, {"Date": "2015-11-06", "Open": "731.500000", "High": "735.409973", "Low": "727.010010", "Close": "733.760010", "Adj Close": "733.760010", "Volume": "1511600"}, {"Date": "2015-11-09", "Open": "730.200012", "High": "734.710022", "Low": "719.429993", "Close": "724.890015", "Adj Close": "724.890015", "Volume": "2069800"}, {"Date": "2015-11-10", "Open": "724.400024", "High": "730.590027", "Low": "718.500000", "Close": "728.320007", "Adj Close": "728.320007", "Volume": "1608000"}, {"Date": "2015-11-11", "Open": "732.460022", "High": "741.000000", "Low": "730.229980", "Close": "735.400024", "Adj Close": "735.400024", "Volume": "1366400"}, {"Date": "2015-11-12", "Open": "731.000000", "High": "737.799988", "Low": "728.645020", "Close": "731.229980", "Adj Close": "731.229980", "Volume": "1837200"}, {"Date": "2015-11-13", "Open": "729.169983", "High": "731.150024", "Low": "716.729980", "Close": "717.000000", "Adj Close": "717.000000", "Volume": "2075500"}, {"Date": "2015-11-16", "Open": "715.599976", "High": "729.489990", "Low": "711.330017", "Close": "728.960022", "Adj Close": "728.960022", "Volume": "1905900"}, {"Date": "2015-11-17", "Open": "729.289978", "High": "731.844971", "Low": "723.026978", "Close": "725.299988", "Adj Close": "725.299988", "Volume": "1510900"}, {"Date": "2015-11-18", "Open": "727.580017", "High": "741.409973", "Low": "727.000000", "Close": "740.000000", "Adj Close": "740.000000", "Volume": "1684300"}, {"Date": "2015-11-19", "Open": "738.739990", "High": "742.000000", "Low": "737.429993", "Close": "738.409973", "Adj Close": "738.409973", "Volume": "1327100"}, {"Date": "2015-11-20", "Open": "746.530029", "High": "757.919983", "Low": "743.000000", "Close": "756.599976", "Adj Close": "756.599976", "Volume": "2212300"}, {"Date": "2015-11-23", "Open": "757.450012", "High": "762.708008", "Low": "751.820007", "Close": "755.979980", "Adj Close": "755.979980", "Volume": "1414500"}, {"Date": "2015-11-24", "Open": "752.000000", "High": "755.278992", "Low": "737.630005", "Close": "748.280029", "Adj Close": "748.280029", "Volume": "2333100"}, {"Date": "2015-11-25", "Open": "748.140015", "High": "752.000000", "Low": "746.059998", "Close": "748.150024", "Adj Close": "748.150024", "Volume": "1122100"}, {"Date": "2015-11-27", "Open": "748.460022", "High": "753.409973", "Low": "747.489990", "Close": "750.260010", "Adj Close": "750.260010", "Volume": "838500"}, {"Date": "2015-11-30", "Open": "748.809998", "High": "754.929993", "Low": "741.270020", "Close": "742.599976", "Adj Close": "742.599976", "Volume": "2097600"}, {"Date": "2015-12-01", "Open": "747.109985", "High": "768.950012", "Low": "746.700012", "Close": "767.039978", "Adj Close": "767.039978", "Volume": "2134600"}, {"Date": "2015-12-02", "Open": "768.900024", "High": "775.955017", "Low": "758.960022", "Close": "762.380005", "Adj Close": "762.380005", "Volume": "2230400"}, {"Date": "2015-12-03", "Open": "766.010010", "High": "768.994995", "Low": "745.630005", "Close": "752.539978", "Adj Close": "752.539978", "Volume": "2590600"}, {"Date": "2015-12-04", "Open": "753.099976", "High": "768.489990", "Low": "750.000000", "Close": "766.809998", "Adj Close": "766.809998", "Volume": "2757300"}, {"Date": "2015-12-07", "Open": "767.770020", "High": "768.729980", "Low": "755.090027", "Close": "763.250000", "Adj Close": "763.250000", "Volume": "1812300"}, {"Date": "2015-12-08", "Open": "757.890015", "High": "764.799988", "Low": "754.200012", "Close": "762.369995", "Adj Close": "762.369995", "Volume": "1829500"}, {"Date": "2015-12-09", "Open": "759.169983", "High": "764.229980", "Low": "737.000977", "Close": "751.609985", "Adj Close": "751.609985", "Volume": "2700000"}, {"Date": "2015-12-10", "Open": "752.849976", "High": "755.849976", "Low": "743.830017", "Close": "749.460022", "Adj Close": "749.460022", "Volume": "1988400"}, {"Date": "2015-12-11", "Open": "741.159973", "High": "745.710022", "Low": "736.750000", "Close": "738.869995", "Adj Close": "738.869995", "Volume": "2224400"}, {"Date": "2015-12-14", "Open": "741.789978", "High": "748.729980", "Low": "724.169983", "Close": "747.770020", "Adj Close": "747.770020", "Volume": "2412500"}, {"Date": "2015-12-15", "Open": "753.000000", "High": "758.080017", "Low": "743.010010", "Close": "743.400024", "Adj Close": "743.400024", "Volume": "2666200"}, {"Date": "2015-12-16", "Open": "750.000000", "High": "760.590027", "Low": "739.434998", "Close": "758.090027", "Adj Close": "758.090027", "Volume": "1993300"}, {"Date": "2015-12-17", "Open": "762.419983", "High": "762.679993", "Low": "749.000000", "Close": "749.429993", "Adj Close": "749.429993", "Volume": "1553400"}, {"Date": "2015-12-18", "Open": "746.510010", "High": "754.130005", "Low": "738.150024", "Close": "739.309998", "Adj Close": "739.309998", "Volume": "3148700"}, {"Date": "2015-12-21", "Open": "746.130005", "High": "750.000000", "Low": "740.000000", "Close": "747.770020", "Adj Close": "747.770020", "Volume": "1525700"}, {"Date": "2015-12-22", "Open": "751.650024", "High": "754.849976", "Low": "745.530029", "Close": "750.000000", "Adj Close": "750.000000", "Volume": "1365400"}, {"Date": "2015-12-23", "Open": "753.469971", "High": "754.210022", "Low": "744.000000", "Close": "750.309998", "Adj Close": "750.309998", "Volume": "1565900"}, {"Date": "2015-12-24", "Open": "749.549988", "High": "751.349976", "Low": "746.619995", "Close": "748.400024", "Adj Close": "748.400024", "Volume": "527200"}, {"Date": "2015-12-28", "Open": "752.919983", "High": "762.989990", "Low": "749.520020", "Close": "762.510010", "Adj Close": "762.510010", "Volume": "1515300"}, {"Date": "2015-12-29", "Open": "766.690002", "High": "779.979980", "Low": "766.429993", "Close": "776.599976", "Adj Close": "776.599976", "Volume": "1765000"}, {"Date": "2015-12-30", "Open": "776.599976", "High": "777.599976", "Low": "766.900024", "Close": "771.000000", "Adj Close": "771.000000", "Volume": "1293300"}, {"Date": "2015-12-31", "Open": "769.500000", "High": "769.500000", "Low": "758.340027", "Close": "758.880005", "Adj Close": "758.880005", "Volume": "1500900"}, {"Date": "2016-01-04", "Open": "743.000000", "High": "744.059998", "Low": "731.257996", "Close": "741.840027", "Adj Close": "741.840027", "Volume": "3272800"}, {"Date": "2016-01-05", "Open": "746.450012", "High": "752.000000", "Low": "738.640015", "Close": "742.580017", "Adj Close": "742.580017", "Volume": "1950700"}, {"Date": "2016-01-06", "Open": "730.000000", "High": "747.179993", "Low": "728.919983", "Close": "743.619995", "Adj Close": "743.619995", "Volume": "1947000"}, {"Date": "2016-01-07", "Open": "730.309998", "High": "738.500000", "Low": "719.059998", "Close": "726.390015", "Adj Close": "726.390015", "Volume": "2963700"}, {"Date": "2016-01-08", "Open": "731.450012", "High": "733.229980", "Low": "713.000000", "Close": "714.469971", "Adj Close": "714.469971", "Volume": "2450900"}, {"Date": "2016-01-11", "Open": "716.609985", "High": "718.854980", "Low": "703.539978", "Close": "716.030029", "Adj Close": "716.030029", "Volume": "2090600"}, {"Date": "2016-01-12", "Open": "721.679993", "High": "728.750000", "Low": "717.317017", "Close": "726.070007", "Adj Close": "726.070007", "Volume": "2024500"}, {"Date": "2016-01-13", "Open": "730.849976", "High": "734.739990", "Low": "698.609985", "Close": "700.559998", "Adj Close": "700.559998", "Volume": "2501700"}, {"Date": "2016-01-14", "Open": "705.380005", "High": "721.924988", "Low": "689.099976", "Close": "714.719971", "Adj Close": "714.719971", "Volume": "2225800"}, {"Date": "2016-01-15", "Open": "692.289978", "High": "706.739990", "Low": "685.369995", "Close": "694.450012", "Adj Close": "694.450012", "Volume": "3608100"}, {"Date": "2016-01-19", "Open": "703.299988", "High": "709.979980", "Low": "693.409973", "Close": "701.789978", "Adj Close": "701.789978", "Volume": "2268100"}, {"Date": "2016-01-20", "Open": "688.609985", "High": "706.849976", "Low": "673.260010", "Close": "698.450012", "Adj Close": "698.450012", "Volume": "3445000"}, {"Date": "2016-01-21", "Open": "702.179993", "High": "719.190002", "Low": "694.460022", "Close": "706.590027", "Adj Close": "706.590027", "Volume": "2412200"}, {"Date": "2016-01-22", "Open": "723.599976", "High": "728.130005", "Low": "720.120972", "Close": "725.250000", "Adj Close": "725.250000", "Volume": "2011800"}, {"Date": "2016-01-25", "Open": "723.580017", "High": "729.679993", "Low": "710.010010", "Close": "711.669983", "Adj Close": "711.669983", "Volume": "1711700"}, {"Date": "2016-01-26", "Open": "713.849976", "High": "718.280029", "Low": "706.479980", "Close": "713.039978", "Adj Close": "713.039978", "Volume": "1331700"}, {"Date": "2016-01-27", "Open": "713.669983", "High": "718.234985", "Low": "694.390015", "Close": "699.989990", "Adj Close": "699.989990", "Volume": "2194200"}, {"Date": "2016-01-28", "Open": "722.219971", "High": "733.690002", "Low": "712.349976", "Close": "730.960022", "Adj Close": "730.960022", "Volume": "2676400"}, {"Date": "2016-01-29", "Open": "731.530029", "High": "744.989990", "Low": "726.799988", "Close": "742.950012", "Adj Close": "742.950012", "Volume": "3474300"}, {"Date": "2016-02-01", "Open": "750.460022", "High": "757.859985", "Low": "743.270020", "Close": "752.000000", "Adj Close": "752.000000", "Volume": "5139200"}, {"Date": "2016-02-02", "Open": "784.500000", "High": "789.869995", "Low": "764.650024", "Close": "764.650024", "Adj Close": "764.650024", "Volume": "6348100"}, {"Date": "2016-02-03", "Open": "770.219971", "High": "774.500000", "Low": "720.500000", "Close": "726.950012", "Adj Close": "726.950012", "Volume": "6171000"}, {"Date": "2016-02-04", "Open": "722.809998", "High": "727.000000", "Low": "701.859985", "Close": "708.010010", "Adj Close": "708.010010", "Volume": "5168700"}, {"Date": "2016-02-05", "Open": "703.869995", "High": "703.989990", "Low": "680.150024", "Close": "683.570007", "Adj Close": "683.570007", "Volume": "5105700"}, {"Date": "2016-02-08", "Open": "667.849976", "High": "684.030029", "Low": "663.059998", "Close": "682.739990", "Adj Close": "682.739990", "Volume": "4247400"}, {"Date": "2016-02-09", "Open": "672.320007", "High": "699.900024", "Low": "668.770020", "Close": "678.109985", "Adj Close": "678.109985", "Volume": "3608900"}, {"Date": "2016-02-10", "Open": "686.859985", "High": "701.309998", "Low": "682.130005", "Close": "684.119995", "Adj Close": "684.119995", "Volume": "2638000"}, {"Date": "2016-02-11", "Open": "675.000000", "High": "689.349976", "Low": "668.867981", "Close": "683.109985", "Adj Close": "683.109985", "Volume": "3024000"}, {"Date": "2016-02-12", "Open": "690.260010", "High": "693.750000", "Low": "678.599976", "Close": "682.400024", "Adj Close": "682.400024", "Volume": "2141400"}, {"Date": "2016-02-16", "Open": "692.979980", "High": "698.000000", "Low": "685.049988", "Close": "691.000000", "Adj Close": "691.000000", "Volume": "2520000"}, {"Date": "2016-02-17", "Open": "698.090027", "High": "709.750000", "Low": "691.380005", "Close": "708.400024", "Adj Close": "708.400024", "Volume": "2492600"}, {"Date": "2016-02-18", "Open": "710.000000", "High": "712.349976", "Low": "696.030029", "Close": "697.349976", "Adj Close": "697.349976", "Volume": "1883200"}, {"Date": "2016-02-19", "Open": "695.030029", "High": "703.080994", "Low": "694.049988", "Close": "700.909973", "Adj Close": "700.909973", "Volume": "1589300"}, {"Date": "2016-02-22", "Open": "707.450012", "High": "713.239990", "Low": "702.510010", "Close": "706.460022", "Adj Close": "706.460022", "Volume": "1949800"}, {"Date": "2016-02-23", "Open": "701.450012", "High": "708.400024", "Low": "693.580017", "Close": "695.849976", "Adj Close": "695.849976", "Volume": "2009300"}, {"Date": "2016-02-24", "Open": "688.919983", "High": "700.000000", "Low": "680.780029", "Close": "699.559998", "Adj Close": "699.559998", "Volume": "1963600"}, {"Date": "2016-02-25", "Open": "700.010010", "High": "705.979980", "Low": "690.585022", "Close": "705.750000", "Adj Close": "705.750000", "Volume": "1642200"}, {"Date": "2016-02-26", "Open": "708.580017", "High": "713.429993", "Low": "700.859985", "Close": "705.070007", "Adj Close": "705.070007", "Volume": "2243500"}, {"Date": "2016-02-29", "Open": "700.320007", "High": "710.890015", "Low": "697.679993", "Close": "697.770020", "Adj Close": "697.770020", "Volume": "2481100"}, {"Date": "2016-03-01", "Open": "703.619995", "High": "718.809998", "Low": "699.770020", "Close": "718.809998", "Adj Close": "718.809998", "Volume": "2151400"}, {"Date": "2016-03-02", "Open": "719.000000", "High": "720.000000", "Low": "712.000000", "Close": "718.849976", "Adj Close": "718.849976", "Volume": "1629000"}, {"Date": "2016-03-03", "Open": "718.679993", "High": "719.450012", "Low": "706.020020", "Close": "712.419983", "Adj Close": "712.419983", "Volume": "1958000"}, {"Date": "2016-03-04", "Open": "714.989990", "High": "716.489990", "Low": "706.020020", "Close": "710.890015", "Adj Close": "710.890015", "Volume": "1972100"}, {"Date": "2016-03-07", "Open": "706.900024", "High": "708.091003", "Low": "686.900024", "Close": "695.159973", "Adj Close": "695.159973", "Volume": "2985100"}, {"Date": "2016-03-08", "Open": "688.590027", "High": "703.789978", "Low": "685.340027", "Close": "693.969971", "Adj Close": "693.969971", "Volume": "2076300"}, {"Date": "2016-03-09", "Open": "698.469971", "High": "705.679993", "Low": "694.000000", "Close": "705.239990", "Adj Close": "705.239990", "Volume": "1421500"}, {"Date": "2016-03-10", "Open": "708.119995", "High": "716.440002", "Low": "703.359985", "Close": "712.820007", "Adj Close": "712.820007", "Volume": "2833500"}, {"Date": "2016-03-11", "Open": "720.000000", "High": "726.919983", "Low": "717.125000", "Close": "726.820007", "Adj Close": "726.820007", "Volume": "1970800"}, {"Date": "2016-03-14", "Open": "726.809998", "High": "735.500000", "Low": "725.150024", "Close": "730.489990", "Adj Close": "730.489990", "Volume": "1718300"}, {"Date": "2016-03-15", "Open": "726.919983", "High": "732.289978", "Low": "724.770020", "Close": "728.330017", "Adj Close": "728.330017", "Volume": "1721000"}, {"Date": "2016-03-16", "Open": "726.369995", "High": "737.469971", "Low": "724.510010", "Close": "736.090027", "Adj Close": "736.090027", "Volume": "1624400"}, {"Date": "2016-03-17", "Open": "736.450012", "High": "743.070007", "Low": "736.000000", "Close": "737.780029", "Adj Close": "737.780029", "Volume": "1860800"}, {"Date": "2016-03-18", "Open": "741.859985", "High": "742.000000", "Low": "731.830017", "Close": "737.599976", "Adj Close": "737.599976", "Volume": "2980700"}, {"Date": "2016-03-21", "Open": "736.500000", "High": "742.500000", "Low": "733.515991", "Close": "742.090027", "Adj Close": "742.090027", "Volume": "1836500"}, {"Date": "2016-03-22", "Open": "737.460022", "High": "745.000000", "Low": "737.460022", "Close": "740.750000", "Adj Close": "740.750000", "Volume": "1269700"}, {"Date": "2016-03-23", "Open": "742.359985", "High": "745.719971", "Low": "736.150024", "Close": "738.059998", "Adj Close": "738.059998", "Volume": "1432100"}, {"Date": "2016-03-24", "Open": "732.010010", "High": "737.747009", "Low": "731.000000", "Close": "735.299988", "Adj Close": "735.299988", "Volume": "1594900"}, {"Date": "2016-03-28", "Open": "736.789978", "High": "738.989990", "Low": "732.500000", "Close": "733.530029", "Adj Close": "733.530029", "Volume": "1301300"}, {"Date": "2016-03-29", "Open": "734.590027", "High": "747.250000", "Low": "728.760010", "Close": "744.770020", "Adj Close": "744.770020", "Volume": "1903800"}, {"Date": "2016-03-30", "Open": "750.099976", "High": "757.880005", "Low": "748.739990", "Close": "750.530029", "Adj Close": "750.530029", "Volume": "1782400"}, {"Date": "2016-03-31", "Open": "749.250000", "High": "750.849976", "Low": "740.940002", "Close": "744.950012", "Adj Close": "744.950012", "Volume": "1718800"}, {"Date": "2016-04-01", "Open": "738.599976", "High": "750.340027", "Low": "737.000000", "Close": "749.909973", "Adj Close": "749.909973", "Volume": "1576700"}, {"Date": "2016-04-04", "Open": "750.059998", "High": "752.799988", "Low": "742.429993", "Close": "745.289978", "Adj Close": "745.289978", "Volume": "1134200"}, {"Date": "2016-04-05", "Open": "738.000000", "High": "742.799988", "Low": "735.369995", "Close": "737.799988", "Adj Close": "737.799988", "Volume": "1132300"}, {"Date": "2016-04-06", "Open": "735.770020", "High": "746.239990", "Low": "735.559998", "Close": "745.690002", "Adj Close": "745.690002", "Volume": "1053700"}, {"Date": "2016-04-07", "Open": "745.369995", "High": "747.000000", "Low": "736.280029", "Close": "740.280029", "Adj Close": "740.280029", "Volume": "1453200"}, {"Date": "2016-04-08", "Open": "743.969971", "High": "745.450012", "Low": "735.549988", "Close": "739.150024", "Adj Close": "739.150024", "Volume": "1290800"}, {"Date": "2016-04-11", "Open": "743.020020", "High": "745.000000", "Low": "736.049988", "Close": "736.099976", "Adj Close": "736.099976", "Volume": "1220100"}, {"Date": "2016-04-12", "Open": "738.000000", "High": "743.830017", "Low": "731.010010", "Close": "743.090027", "Adj Close": "743.090027", "Volume": "1353000"}, {"Date": "2016-04-13", "Open": "749.159973", "High": "754.380005", "Low": "744.260986", "Close": "751.719971", "Adj Close": "751.719971", "Volume": "1707100"}, {"Date": "2016-04-14", "Open": "754.010010", "High": "757.309998", "Low": "752.705017", "Close": "753.200012", "Adj Close": "753.200012", "Volume": "1135300"}, {"Date": "2016-04-15", "Open": "753.979980", "High": "761.000000", "Low": "752.693970", "Close": "759.000000", "Adj Close": "759.000000", "Volume": "1809300"}, {"Date": "2016-04-18", "Open": "760.460022", "High": "768.049988", "Low": "757.299988", "Close": "766.609985", "Adj Close": "766.609985", "Volume": "1558800"}, {"Date": "2016-04-19", "Open": "769.510010", "High": "769.900024", "Low": "749.330017", "Close": "753.929993", "Adj Close": "753.929993", "Volume": "2030500"}, {"Date": "2016-04-20", "Open": "758.000000", "High": "758.132019", "Low": "750.010010", "Close": "752.669983", "Adj Close": "752.669983", "Volume": "1529200"}, {"Date": "2016-04-21", "Open": "755.380005", "High": "760.450012", "Low": "749.549988", "Close": "759.140015", "Adj Close": "759.140015", "Volume": "3060500"}, {"Date": "2016-04-22", "Open": "726.299988", "High": "736.119995", "Low": "713.609985", "Close": "718.770020", "Adj Close": "718.770020", "Volume": "5951900"}, {"Date": "2016-04-25", "Open": "716.099976", "High": "723.929993", "Low": "715.590027", "Close": "723.150024", "Adj Close": "723.150024", "Volume": "1959200"}, {"Date": "2016-04-26", "Open": "725.419983", "High": "725.765991", "Low": "703.026001", "Close": "708.140015", "Adj Close": "708.140015", "Volume": "2744600"}, {"Date": "2016-04-27", "Open": "707.289978", "High": "708.979980", "Low": "692.364990", "Close": "705.840027", "Adj Close": "705.840027", "Volume": "3098600"}, {"Date": "2016-04-28", "Open": "708.260010", "High": "714.169983", "Low": "689.549988", "Close": "691.020020", "Adj Close": "691.020020", "Volume": "2867300"}, {"Date": "2016-04-29", "Open": "690.700012", "High": "697.619995", "Low": "689.000000", "Close": "693.010010", "Adj Close": "693.010010", "Volume": "2487700"}, {"Date": "2016-05-02", "Open": "697.630005", "High": "700.640015", "Low": "691.000000", "Close": "698.210022", "Adj Close": "698.210022", "Volume": "1645300"}, {"Date": "2016-05-03", "Open": "696.869995", "High": "697.840027", "Low": "692.000000", "Close": "692.359985", "Adj Close": "692.359985", "Volume": "1543800"}, {"Date": "2016-05-04", "Open": "690.489990", "High": "699.750000", "Low": "689.010010", "Close": "695.700012", "Adj Close": "695.700012", "Volume": "1693500"}, {"Date": "2016-05-05", "Open": "697.700012", "High": "702.320007", "Low": "695.719971", "Close": "701.429993", "Adj Close": "701.429993", "Volume": "1683500"}, {"Date": "2016-05-06", "Open": "698.380005", "High": "711.859985", "Low": "698.106995", "Close": "711.119995", "Adj Close": "711.119995", "Volume": "1829300"}, {"Date": "2016-05-09", "Open": "712.000000", "High": "718.710022", "Low": "710.000000", "Close": "712.900024", "Adj Close": "712.900024", "Volume": "1510300"}, {"Date": "2016-05-10", "Open": "716.750000", "High": "723.500000", "Low": "715.719971", "Close": "723.179993", "Adj Close": "723.179993", "Volume": "1569600"}, {"Date": "2016-05-11", "Open": "723.409973", "High": "724.479980", "Low": "712.799988", "Close": "715.289978", "Adj Close": "715.289978", "Volume": "1692100"}, {"Date": "2016-05-12", "Open": "717.059998", "High": "719.250000", "Low": "709.000000", "Close": "713.309998", "Adj Close": "713.309998", "Volume": "1360700"}, {"Date": "2016-05-13", "Open": "711.929993", "High": "716.661987", "Low": "709.260010", "Close": "710.830017", "Adj Close": "710.830017", "Volume": "1314500"}, {"Date": "2016-05-16", "Open": "709.130005", "High": "718.479980", "Low": "705.650024", "Close": "716.489990", "Adj Close": "716.489990", "Volume": "1317100"}, {"Date": "2016-05-17", "Open": "715.989990", "High": "721.520020", "Low": "704.109985", "Close": "706.229980", "Adj Close": "706.229980", "Volume": "2001200"}, {"Date": "2016-05-18", "Open": "703.669983", "High": "711.599976", "Low": "700.630005", "Close": "706.630005", "Adj Close": "706.630005", "Volume": "1766800"}, {"Date": "2016-05-19", "Open": "702.359985", "High": "706.000000", "Low": "696.799988", "Close": "700.320007", "Adj Close": "700.320007", "Volume": "1670200"}, {"Date": "2016-05-20", "Open": "701.619995", "High": "714.580017", "Low": "700.520020", "Close": "709.739990", "Adj Close": "709.739990", "Volume": "1828400"}, {"Date": "2016-05-23", "Open": "706.530029", "High": "711.478027", "Low": "704.179993", "Close": "704.239990", "Adj Close": "704.239990", "Volume": "1330700"}, {"Date": "2016-05-24", "Open": "706.859985", "High": "720.969971", "Low": "706.859985", "Close": "720.090027", "Adj Close": "720.090027", "Volume": "1929500"}, {"Date": "2016-05-25", "Open": "720.760010", "High": "727.510010", "Low": "719.705017", "Close": "725.270020", "Adj Close": "725.270020", "Volume": "1629200"}, {"Date": "2016-05-26", "Open": "722.869995", "High": "728.330017", "Low": "720.280029", "Close": "724.119995", "Adj Close": "724.119995", "Volume": "1576300"}, {"Date": "2016-05-27", "Open": "724.010010", "High": "733.935974", "Low": "724.000000", "Close": "732.659973", "Adj Close": "732.659973", "Volume": "1975000"}, {"Date": "2016-05-31", "Open": "731.739990", "High": "739.729980", "Low": "731.260010", "Close": "735.719971", "Adj Close": "735.719971", "Volume": "2129500"}, {"Date": "2016-06-01", "Open": "734.530029", "High": "737.210022", "Low": "730.659973", "Close": "734.150024", "Adj Close": "734.150024", "Volume": "1253600"}, {"Date": "2016-06-02", "Open": "732.500000", "High": "733.020020", "Low": "724.169983", "Close": "730.400024", "Adj Close": "730.400024", "Volume": "1341800"}, {"Date": "2016-06-03", "Open": "729.270020", "High": "729.489990", "Low": "720.559998", "Close": "722.340027", "Adj Close": "722.340027", "Volume": "1226300"}, {"Date": "2016-06-06", "Open": "724.909973", "High": "724.909973", "Low": "714.609985", "Close": "716.549988", "Adj Close": "716.549988", "Volume": "1565300"}, {"Date": "2016-06-07", "Open": "719.840027", "High": "721.979980", "Low": "716.549988", "Close": "716.650024", "Adj Close": "716.650024", "Volume": "1336200"}, {"Date": "2016-06-08", "Open": "723.960022", "High": "728.570007", "Low": "720.580017", "Close": "728.280029", "Adj Close": "728.280029", "Volume": "1583700"}, {"Date": "2016-06-09", "Open": "722.869995", "High": "729.539978", "Low": "722.335999", "Close": "728.580017", "Adj Close": "728.580017", "Volume": "988900"}, {"Date": "2016-06-10", "Open": "719.469971", "High": "725.890015", "Low": "716.429993", "Close": "719.409973", "Adj Close": "719.409973", "Volume": "1216400"}, {"Date": "2016-06-13", "Open": "716.510010", "High": "725.440002", "Low": "716.510010", "Close": "718.359985", "Adj Close": "718.359985", "Volume": "1258900"}, {"Date": "2016-06-14", "Open": "716.479980", "High": "722.469971", "Low": "713.119995", "Close": "718.270020", "Adj Close": "718.270020", "Volume": "1306100"}, {"Date": "2016-06-15", "Open": "719.000000", "High": "722.979980", "Low": "717.309998", "Close": "718.919983", "Adj Close": "718.919983", "Volume": "1214500"}, {"Date": "2016-06-16", "Open": "714.909973", "High": "716.650024", "Low": "703.260010", "Close": "710.359985", "Adj Close": "710.359985", "Volume": "1982500"}, {"Date": "2016-06-17", "Open": "708.650024", "High": "708.820007", "Low": "688.452026", "Close": "691.719971", "Adj Close": "691.719971", "Volume": "3402400"}, {"Date": "2016-06-20", "Open": "698.770020", "High": "702.479980", "Low": "693.409973", "Close": "693.710022", "Adj Close": "693.710022", "Volume": "2082500"}, {"Date": "2016-06-21", "Open": "698.400024", "High": "702.770020", "Low": "692.010010", "Close": "695.940002", "Adj Close": "695.940002", "Volume": "1465600"}, {"Date": "2016-06-22", "Open": "699.059998", "High": "700.859985", "Low": "693.081970", "Close": "697.460022", "Adj Close": "697.460022", "Volume": "1184300"}, {"Date": "2016-06-23", "Open": "697.450012", "High": "701.950012", "Low": "687.000000", "Close": "701.869995", "Adj Close": "701.869995", "Volume": "2171400"}, {"Date": "2016-06-24", "Open": "675.169983", "High": "689.400024", "Low": "673.450012", "Close": "675.219971", "Adj Close": "675.219971", "Volume": "4449000"}, {"Date": "2016-06-27", "Open": "671.000000", "High": "672.299988", "Low": "663.283997", "Close": "668.260010", "Adj Close": "668.260010", "Volume": "2629000"}, {"Date": "2016-06-28", "Open": "678.969971", "High": "680.330017", "Low": "673.000000", "Close": "680.039978", "Adj Close": "680.039978", "Volume": "2173800"}, {"Date": "2016-06-29", "Open": "683.000000", "High": "687.429016", "Low": "681.409973", "Close": "684.109985", "Adj Close": "684.109985", "Volume": "1932600"}, {"Date": "2016-06-30", "Open": "685.469971", "High": "692.320007", "Low": "683.650024", "Close": "692.099976", "Adj Close": "692.099976", "Volume": "1597700"}, {"Date": "2016-07-01", "Open": "692.200012", "High": "700.650024", "Low": "692.130005", "Close": "699.210022", "Adj Close": "699.210022", "Volume": "1344700"}, {"Date": "2016-07-05", "Open": "696.059998", "High": "696.940002", "Low": "688.880005", "Close": "694.950012", "Adj Close": "694.950012", "Volume": "1462600"}, {"Date": "2016-07-06", "Open": "689.979980", "High": "701.679993", "Low": "689.090027", "Close": "697.770020", "Adj Close": "697.770020", "Volume": "1411900"}, {"Date": "2016-07-07", "Open": "698.080017", "High": "698.200012", "Low": "688.215027", "Close": "695.359985", "Adj Close": "695.359985", "Volume": "1304200"}, {"Date": "2016-07-08", "Open": "699.500000", "High": "705.710022", "Low": "696.434998", "Close": "705.630005", "Adj Close": "705.630005", "Volume": "1575200"}, {"Date": "2016-07-11", "Open": "708.049988", "High": "716.510010", "Low": "707.239990", "Close": "715.090027", "Adj Close": "715.090027", "Volume": "1111800"}, {"Date": "2016-07-12", "Open": "719.119995", "High": "722.940002", "Low": "715.909973", "Close": "720.640015", "Adj Close": "720.640015", "Volume": "1336900"}, {"Date": "2016-07-13", "Open": "723.619995", "High": "724.000000", "Low": "716.849976", "Close": "716.979980", "Adj Close": "716.979980", "Volume": "935900"}, {"Date": "2016-07-14", "Open": "721.580017", "High": "722.210022", "Low": "718.030029", "Close": "720.950012", "Adj Close": "720.950012", "Volume": "950200"}, {"Date": "2016-07-15", "Open": "725.729980", "High": "725.739990", "Low": "719.054993", "Close": "719.849976", "Adj Close": "719.849976", "Volume": "1279300"}, {"Date": "2016-07-18", "Open": "722.710022", "High": "736.130005", "Low": "721.190002", "Close": "733.780029", "Adj Close": "733.780029", "Volume": "1295500"}, {"Date": "2016-07-19", "Open": "729.890015", "High": "736.989990", "Low": "729.000000", "Close": "736.960022", "Adj Close": "736.960022", "Volume": "1227500"}, {"Date": "2016-07-20", "Open": "737.330017", "High": "742.130005", "Low": "737.099976", "Close": "741.190002", "Adj Close": "741.190002", "Volume": "1289700"}, {"Date": "2016-07-21", "Open": "740.359985", "High": "741.690002", "Low": "735.830994", "Close": "738.630005", "Adj Close": "738.630005", "Volume": "1026300"}, {"Date": "2016-07-22", "Open": "741.859985", "High": "743.239990", "Low": "736.559998", "Close": "742.739990", "Adj Close": "742.739990", "Volume": "1259800"}, {"Date": "2016-07-25", "Open": "740.669983", "High": "742.609985", "Low": "737.500000", "Close": "739.770020", "Adj Close": "739.770020", "Volume": "1032400"}, {"Date": "2016-07-26", "Open": "739.039978", "High": "741.690002", "Low": "734.270020", "Close": "738.419983", "Adj Close": "738.419983", "Volume": "1186700"}, {"Date": "2016-07-27", "Open": "738.280029", "High": "744.460022", "Low": "737.000000", "Close": "741.770020", "Adj Close": "741.770020", "Volume": "1512500"}, {"Date": "2016-07-28", "Open": "747.039978", "High": "748.650024", "Low": "739.299988", "Close": "745.909973", "Adj Close": "745.909973", "Volume": "3530200"}, {"Date": "2016-07-29", "Open": "772.710022", "High": "778.549988", "Low": "766.770020", "Close": "768.789978", "Adj Close": "768.789978", "Volume": "3841500"}, {"Date": "2016-08-01", "Open": "761.090027", "High": "780.429993", "Low": "761.090027", "Close": "772.880005", "Adj Close": "772.880005", "Volume": "2700500"}, {"Date": "2016-08-02", "Open": "768.690002", "High": "775.840027", "Low": "767.849976", "Close": "771.070007", "Adj Close": "771.070007", "Volume": "1784500"}, {"Date": "2016-08-03", "Open": "767.179993", "High": "773.210022", "Low": "766.820007", "Close": "773.179993", "Adj Close": "773.179993", "Volume": "1287400"}, {"Date": "2016-08-04", "Open": "772.219971", "High": "774.070007", "Low": "768.794983", "Close": "771.609985", "Adj Close": "771.609985", "Volume": "1140300"}, {"Date": "2016-08-05", "Open": "773.780029", "High": "783.039978", "Low": "772.340027", "Close": "782.219971", "Adj Close": "782.219971", "Volume": "1801200"}, {"Date": "2016-08-08", "Open": "782.000000", "High": "782.630005", "Low": "778.091003", "Close": "781.760010", "Adj Close": "781.760010", "Volume": "1107900"}, {"Date": "2016-08-09", "Open": "781.099976", "High": "788.940002", "Low": "780.570007", "Close": "784.260010", "Adj Close": "784.260010", "Volume": "1318900"}, {"Date": "2016-08-10", "Open": "783.750000", "High": "786.812012", "Low": "782.778015", "Close": "784.679993", "Adj Close": "784.679993", "Volume": "786400"}, {"Date": "2016-08-11", "Open": "785.000000", "High": "789.750000", "Low": "782.969971", "Close": "784.849976", "Adj Close": "784.849976", "Volume": "975100"}, {"Date": "2016-08-12", "Open": "781.500000", "High": "783.395020", "Low": "780.400024", "Close": "783.219971", "Adj Close": "783.219971", "Volume": "740500"}, {"Date": "2016-08-15", "Open": "783.750000", "High": "787.489990", "Low": "780.109985", "Close": "782.440002", "Adj Close": "782.440002", "Volume": "938200"}, {"Date": "2016-08-16", "Open": "780.299988", "High": "780.979980", "Low": "773.443970", "Close": "777.140015", "Adj Close": "777.140015", "Volume": "1028000"}, {"Date": "2016-08-17", "Open": "777.320007", "High": "780.809998", "Low": "773.530029", "Close": "779.909973", "Adj Close": "779.909973", "Volume": "924200"}, {"Date": "2016-08-18", "Open": "780.010010", "High": "782.859985", "Low": "777.000000", "Close": "777.500000", "Adj Close": "777.500000", "Volume": "719400"}, {"Date": "2016-08-19", "Open": "775.000000", "High": "777.099976", "Low": "773.130005", "Close": "775.419983", "Adj Close": "775.419983", "Volume": "861500"}, {"Date": "2016-08-22", "Open": "773.270020", "High": "774.539978", "Low": "770.049988", "Close": "772.150024", "Adj Close": "772.150024", "Volume": "951400"}, {"Date": "2016-08-23", "Open": "775.479980", "High": "776.440002", "Low": "771.784973", "Close": "772.080017", "Adj Close": "772.080017", "Volume": "928200"}, {"Date": "2016-08-24", "Open": "770.580017", "High": "774.500000", "Low": "767.070007", "Close": "769.640015", "Adj Close": "769.640015", "Volume": "1072000"}, {"Date": "2016-08-25", "Open": "767.000000", "High": "771.890015", "Low": "763.184998", "Close": "769.409973", "Adj Close": "769.409973", "Volume": "926900"}, {"Date": "2016-08-26", "Open": "769.000000", "High": "776.080017", "Low": "765.849976", "Close": "769.539978", "Adj Close": "769.539978", "Volume": "1166700"}, {"Date": "2016-08-29", "Open": "768.739990", "High": "774.989990", "Low": "766.614990", "Close": "772.150024", "Adj Close": "772.150024", "Volume": "847600"}, {"Date": "2016-08-30", "Open": "769.330017", "High": "774.466003", "Low": "766.840027", "Close": "769.090027", "Adj Close": "769.090027", "Volume": "1130000"}, {"Date": "2016-08-31", "Open": "767.010010", "High": "769.090027", "Low": "765.380005", "Close": "767.049988", "Adj Close": "767.049988", "Volume": "1248600"}, {"Date": "2016-09-01", "Open": "769.250000", "High": "771.020020", "Low": "764.299988", "Close": "768.780029", "Adj Close": "768.780029", "Volume": "925100"}, {"Date": "2016-09-02", "Open": "773.010010", "High": "773.919983", "Low": "768.409973", "Close": "771.460022", "Adj Close": "771.460022", "Volume": "1072700"}, {"Date": "2016-09-06", "Open": "773.450012", "High": "782.000000", "Low": "771.000000", "Close": "780.080017", "Adj Close": "780.080017", "Volume": "1442800"}, {"Date": "2016-09-07", "Open": "780.000000", "High": "782.729980", "Low": "776.200012", "Close": "780.349976", "Adj Close": "780.349976", "Volume": "893700"}, {"Date": "2016-09-08", "Open": "778.590027", "High": "780.349976", "Low": "773.580017", "Close": "775.320007", "Adj Close": "775.320007", "Volume": "1270300"}, {"Date": "2016-09-09", "Open": "770.099976", "High": "773.244995", "Low": "759.659973", "Close": "759.659973", "Adj Close": "759.659973", "Volume": "1885500"}, {"Date": "2016-09-12", "Open": "755.130005", "High": "770.289978", "Low": "754.000000", "Close": "769.020020", "Adj Close": "769.020020", "Volume": "1311000"}, {"Date": "2016-09-13", "Open": "764.479980", "High": "766.219971", "Low": "755.799988", "Close": "759.690002", "Adj Close": "759.690002", "Volume": "1395000"}, {"Date": "2016-09-14", "Open": "759.609985", "High": "767.679993", "Low": "759.109985", "Close": "762.489990", "Adj Close": "762.489990", "Volume": "1087400"}, {"Date": "2016-09-15", "Open": "762.890015", "High": "773.799988", "Low": "759.960022", "Close": "771.760010", "Adj Close": "771.760010", "Volume": "1305100"}, {"Date": "2016-09-16", "Open": "769.750000", "High": "769.750000", "Low": "764.659973", "Close": "768.880005", "Adj Close": "768.880005", "Volume": "2049300"}, {"Date": "2016-09-19", "Open": "772.419983", "High": "774.000000", "Low": "764.440979", "Close": "765.700012", "Adj Close": "765.700012", "Volume": "1172800"}, {"Date": "2016-09-20", "Open": "769.000000", "High": "773.330017", "Low": "768.530029", "Close": "771.409973", "Adj Close": "771.409973", "Volume": "978600"}, {"Date": "2016-09-21", "Open": "772.659973", "High": "777.159973", "Low": "768.301025", "Close": "776.219971", "Adj Close": "776.219971", "Volume": "1167800"}, {"Date": "2016-09-22", "Open": "780.000000", "High": "789.849976", "Low": "778.440002", "Close": "787.210022", "Adj Close": "787.210022", "Volume": "1486200"}, {"Date": "2016-09-23", "Open": "786.590027", "High": "788.929993", "Low": "784.150024", "Close": "786.900024", "Adj Close": "786.900024", "Volume": "1411900"}, {"Date": "2016-09-26", "Open": "782.739990", "High": "782.739990", "Low": "773.070007", "Close": "774.210022", "Adj Close": "774.210022", "Volume": "1533200"}, {"Date": "2016-09-27", "Open": "775.500000", "High": "785.989990", "Low": "774.307983", "Close": "783.010010", "Adj Close": "783.010010", "Volume": "1153200"}, {"Date": "2016-09-28", "Open": "777.849976", "High": "781.809998", "Low": "774.969971", "Close": "781.559998", "Adj Close": "781.559998", "Volume": "1109800"}, {"Date": "2016-09-29", "Open": "781.440002", "High": "785.799988", "Low": "774.231995", "Close": "775.010010", "Adj Close": "775.010010", "Volume": "1314700"}, {"Date": "2016-09-30", "Open": "776.330017", "High": "780.940002", "Low": "774.090027", "Close": "777.289978", "Adj Close": "777.289978", "Volume": "1585300"}, {"Date": "2016-10-03", "Open": "774.250000", "High": "776.065002", "Low": "769.500000", "Close": "772.559998", "Adj Close": "772.559998", "Volume": "1278800"}, {"Date": "2016-10-04", "Open": "776.030029", "High": "778.710022", "Low": "772.890015", "Close": "776.429993", "Adj Close": "776.429993", "Volume": "1201400"}, {"Date": "2016-10-05", "Open": "779.309998", "High": "782.070007", "Low": "775.650024", "Close": "776.469971", "Adj Close": "776.469971", "Volume": "1461200"}, {"Date": "2016-10-06", "Open": "779.000000", "High": "780.479980", "Low": "775.539978", "Close": "776.859985", "Adj Close": "776.859985", "Volume": "1070700"}, {"Date": "2016-10-07", "Open": "779.659973", "High": "779.659973", "Low": "770.750000", "Close": "775.080017", "Adj Close": "775.080017", "Volume": "933200"}, {"Date": "2016-10-10", "Open": "777.710022", "High": "789.380005", "Low": "775.869995", "Close": "785.940002", "Adj Close": "785.940002", "Volume": "1174900"}, {"Date": "2016-10-11", "Open": "786.659973", "High": "792.280029", "Low": "780.580017", "Close": "783.070007", "Adj Close": "783.070007", "Volume": "1372500"}, {"Date": "2016-10-12", "Open": "783.760010", "High": "788.130005", "Low": "782.059998", "Close": "786.140015", "Adj Close": "786.140015", "Volume": "937400"}, {"Date": "2016-10-13", "Open": "781.219971", "High": "781.219971", "Low": "773.000000", "Close": "778.190002", "Adj Close": "778.190002", "Volume": "1365300"}, {"Date": "2016-10-14", "Open": "781.650024", "High": "783.950012", "Low": "776.000000", "Close": "778.530029", "Adj Close": "778.530029", "Volume": "852500"}, {"Date": "2016-10-17", "Open": "779.799988", "High": "785.849976", "Low": "777.500000", "Close": "779.960022", "Adj Close": "779.960022", "Volume": "1093000"}, {"Date": "2016-10-18", "Open": "787.849976", "High": "801.609985", "Low": "785.565002", "Close": "795.260010", "Adj Close": "795.260010", "Volume": "2056900"}, {"Date": "2016-10-19", "Open": "798.239990", "High": "804.599976", "Low": "798.030029", "Close": "801.500000", "Adj Close": "801.500000", "Volume": "1766800"}, {"Date": "2016-10-20", "Open": "803.299988", "High": "803.969971", "Low": "796.030029", "Close": "796.969971", "Adj Close": "796.969971", "Volume": "1757500"}, {"Date": "2016-10-21", "Open": "795.000000", "High": "799.500000", "Low": "794.000000", "Close": "799.369995", "Adj Close": "799.369995", "Volume": "1266200"}, {"Date": "2016-10-24", "Open": "804.900024", "High": "815.179993", "Low": "804.820007", "Close": "813.109985", "Adj Close": "813.109985", "Volume": "1697500"}, {"Date": "2016-10-25", "Open": "816.679993", "High": "816.679993", "Low": "805.140015", "Close": "807.669983", "Adj Close": "807.669983", "Volume": "1576400"}, {"Date": "2016-10-26", "Open": "806.340027", "High": "806.979980", "Low": "796.320007", "Close": "799.070007", "Adj Close": "799.070007", "Volume": "1647700"}, {"Date": "2016-10-27", "Open": "801.000000", "High": "803.489990", "Low": "791.500000", "Close": "795.349976", "Adj Close": "795.349976", "Volume": "2749200"}, {"Date": "2016-10-28", "Open": "808.349976", "High": "815.489990", "Low": "793.590027", "Close": "795.369995", "Adj Close": "795.369995", "Volume": "4269900"}, {"Date": "2016-10-31", "Open": "795.469971", "High": "796.859985", "Low": "784.000000", "Close": "784.539978", "Adj Close": "784.539978", "Volume": "2427300"}, {"Date": "2016-11-01", "Open": "782.890015", "High": "789.489990", "Low": "775.539978", "Close": "783.609985", "Adj Close": "783.609985", "Volume": "2406400"}, {"Date": "2016-11-02", "Open": "778.200012", "High": "781.650024", "Low": "763.450012", "Close": "768.700012", "Adj Close": "768.700012", "Volume": "1872400"}, {"Date": "2016-11-03", "Open": "767.250000", "High": "769.950012", "Low": "759.030029", "Close": "762.130005", "Adj Close": "762.130005", "Volume": "1943200"}, {"Date": "2016-11-04", "Open": "750.659973", "High": "770.359985", "Low": "750.560974", "Close": "762.020020", "Adj Close": "762.020020", "Volume": "2134800"}, {"Date": "2016-11-07", "Open": "774.500000", "High": "785.190002", "Low": "772.549988", "Close": "782.520020", "Adj Close": "782.520020", "Volume": "1585100"}, {"Date": "2016-11-08", "Open": "783.400024", "High": "795.632996", "Low": "780.190002", "Close": "790.510010", "Adj Close": "790.510010", "Volume": "1366900"}, {"Date": "2016-11-09", "Open": "779.940002", "High": "791.226990", "Low": "771.669983", "Close": "785.309998", "Adj Close": "785.309998", "Volume": "2607100"}, {"Date": "2016-11-10", "Open": "791.169983", "High": "791.169983", "Low": "752.179993", "Close": "762.559998", "Adj Close": "762.559998", "Volume": "4745200"}, {"Date": "2016-11-11", "Open": "756.539978", "High": "760.780029", "Low": "750.380005", "Close": "754.020020", "Adj Close": "754.020020", "Volume": "2431800"}, {"Date": "2016-11-14", "Open": "755.599976", "High": "757.849976", "Low": "727.539978", "Close": "736.080017", "Adj Close": "736.080017", "Volume": "3654400"}, {"Date": "2016-11-15", "Open": "746.969971", "High": "764.416016", "Low": "746.969971", "Close": "758.489990", "Adj Close": "758.489990", "Volume": "2384000"}, {"Date": "2016-11-16", "Open": "755.200012", "High": "766.359985", "Low": "750.510010", "Close": "764.479980", "Adj Close": "764.479980", "Volume": "1472600"}, {"Date": "2016-11-17", "Open": "766.919983", "High": "772.700012", "Low": "764.229980", "Close": "771.229980", "Adj Close": "771.229980", "Volume": "1304000"}, {"Date": "2016-11-18", "Open": "771.369995", "High": "775.000000", "Low": "760.000000", "Close": "760.539978", "Adj Close": "760.539978", "Volume": "1547100"}, {"Date": "2016-11-21", "Open": "762.609985", "High": "769.700012", "Low": "760.599976", "Close": "769.200012", "Adj Close": "769.200012", "Volume": "1330600"}, {"Date": "2016-11-22", "Open": "772.630005", "High": "776.960022", "Low": "767.000000", "Close": "768.270020", "Adj Close": "768.270020", "Volume": "1593100"}, {"Date": "2016-11-23", "Open": "767.729980", "High": "768.283020", "Low": "755.250000", "Close": "760.989990", "Adj Close": "760.989990", "Volume": "1478400"}, {"Date": "2016-11-25", "Open": "764.260010", "High": "765.000000", "Low": "760.520020", "Close": "761.679993", "Adj Close": "761.679993", "Volume": "587400"}, {"Date": "2016-11-28", "Open": "760.000000", "High": "779.530029", "Low": "759.799988", "Close": "768.239990", "Adj Close": "768.239990", "Volume": "2188200"}, {"Date": "2016-11-29", "Open": "771.530029", "High": "778.500000", "Low": "768.239990", "Close": "770.840027", "Adj Close": "770.840027", "Volume": "1616600"}, {"Date": "2016-11-30", "Open": "770.070007", "High": "772.989990", "Low": "754.830017", "Close": "758.039978", "Adj Close": "758.039978", "Volume": "2392900"}, {"Date": "2016-12-01", "Open": "757.440002", "High": "759.849976", "Low": "737.025024", "Close": "747.919983", "Adj Close": "747.919983", "Volume": "3017900"}, {"Date": "2016-12-02", "Open": "744.590027", "High": "754.000000", "Low": "743.099976", "Close": "750.500000", "Adj Close": "750.500000", "Volume": "1452500"}, {"Date": "2016-12-05", "Open": "757.710022", "High": "763.900024", "Low": "752.900024", "Close": "762.520020", "Adj Close": "762.520020", "Volume": "1394200"}, {"Date": "2016-12-06", "Open": "764.729980", "High": "768.830017", "Low": "757.340027", "Close": "759.109985", "Adj Close": "759.109985", "Volume": "1690700"}, {"Date": "2016-12-07", "Open": "761.000000", "High": "771.359985", "Low": "755.799988", "Close": "771.190002", "Adj Close": "771.190002", "Volume": "1761000"}, {"Date": "2016-12-08", "Open": "772.479980", "High": "778.179993", "Low": "767.229980", "Close": "776.419983", "Adj Close": "776.419983", "Volume": "1488100"}, {"Date": "2016-12-09", "Open": "780.000000", "High": "789.429993", "Low": "779.020996", "Close": "789.289978", "Adj Close": "789.289978", "Volume": "1821900"}, {"Date": "2016-12-12", "Open": "785.039978", "High": "791.250000", "Low": "784.354980", "Close": "789.270020", "Adj Close": "789.270020", "Volume": "2104100"}, {"Date": "2016-12-13", "Open": "793.900024", "High": "804.380005", "Low": "793.340027", "Close": "796.099976", "Adj Close": "796.099976", "Volume": "2145200"}, {"Date": "2016-12-14", "Open": "797.400024", "High": "804.000000", "Low": "794.010010", "Close": "797.070007", "Adj Close": "797.070007", "Volume": "1704200"}, {"Date": "2016-12-15", "Open": "797.340027", "High": "803.000000", "Low": "792.919983", "Close": "797.849976", "Adj Close": "797.849976", "Volume": "1626500"}, {"Date": "2016-12-16", "Open": "800.400024", "High": "800.856018", "Low": "790.289978", "Close": "790.799988", "Adj Close": "790.799988", "Volume": "2443800"}, {"Date": "2016-12-19", "Open": "790.219971", "High": "797.659973", "Low": "786.270020", "Close": "794.200012", "Adj Close": "794.200012", "Volume": "1232100"}, {"Date": "2016-12-20", "Open": "796.760010", "High": "798.650024", "Low": "793.270020", "Close": "796.419983", "Adj Close": "796.419983", "Volume": "951000"}, {"Date": "2016-12-21", "Open": "795.840027", "High": "796.676025", "Low": "787.099976", "Close": "794.559998", "Adj Close": "794.559998", "Volume": "1211300"}, {"Date": "2016-12-22", "Open": "792.359985", "High": "793.320007", "Low": "788.580017", "Close": "791.260010", "Adj Close": "791.260010", "Volume": "972200"}, {"Date": "2016-12-23", "Open": "790.900024", "High": "792.739990", "Low": "787.280029", "Close": "789.909973", "Adj Close": "789.909973", "Volume": "623400"}, {"Date": "2016-12-27", "Open": "790.679993", "High": "797.859985", "Low": "787.656982", "Close": "791.549988", "Adj Close": "791.549988", "Volume": "789100"}, {"Date": "2016-12-28", "Open": "793.700012", "High": "794.229980", "Low": "783.200012", "Close": "785.049988", "Adj Close": "785.049988", "Volume": "1153800"}, {"Date": "2016-12-29", "Open": "783.330017", "High": "785.929993", "Low": "778.919983", "Close": "782.789978", "Adj Close": "782.789978", "Volume": "744300"}, {"Date": "2016-12-30", "Open": "782.750000", "High": "782.780029", "Low": "770.409973", "Close": "771.820007", "Adj Close": "771.820007", "Volume": "1770000"}, {"Date": "2017-01-03", "Open": "778.809998", "High": "789.630005", "Low": "775.799988", "Close": "786.140015", "Adj Close": "786.140015", "Volume": "1657300"}, {"Date": "2017-01-04", "Open": "788.359985", "High": "791.340027", "Low": "783.159973", "Close": "786.900024", "Adj Close": "786.900024", "Volume": "1073000"}, {"Date": "2017-01-05", "Open": "786.080017", "High": "794.479980", "Low": "785.020020", "Close": "794.020020", "Adj Close": "794.020020", "Volume": "1335200"}, {"Date": "2017-01-06", "Open": "795.260010", "High": "807.900024", "Low": "792.203979", "Close": "806.150024", "Adj Close": "806.150024", "Volume": "1640200"}, {"Date": "2017-01-09", "Open": "806.400024", "High": "809.966003", "Low": "802.830017", "Close": "806.650024", "Adj Close": "806.650024", "Volume": "1274600"}, {"Date": "2017-01-10", "Open": "807.859985", "High": "809.130005", "Low": "803.510010", "Close": "804.789978", "Adj Close": "804.789978", "Volume": "1176800"}, {"Date": "2017-01-11", "Open": "805.000000", "High": "808.150024", "Low": "801.369995", "Close": "807.909973", "Adj Close": "807.909973", "Volume": "1065900"}, {"Date": "2017-01-12", "Open": "807.140015", "High": "807.390015", "Low": "799.169983", "Close": "806.359985", "Adj Close": "806.359985", "Volume": "1353100"}, {"Date": "2017-01-13", "Open": "807.479980", "High": "811.223999", "Low": "806.690002", "Close": "807.880005", "Adj Close": "807.880005", "Volume": "1099200"}, {"Date": "2017-01-17", "Open": "807.080017", "High": "807.140015", "Low": "800.369995", "Close": "804.609985", "Adj Close": "804.609985", "Volume": "1362100"}, {"Date": "2017-01-18", "Open": "805.809998", "High": "806.205017", "Low": "800.989990", "Close": "806.070007", "Adj Close": "806.070007", "Volume": "1294400"}, {"Date": "2017-01-19", "Open": "805.119995", "High": "809.479980", "Low": "801.799988", "Close": "802.174988", "Adj Close": "802.174988", "Volume": "919300"}, {"Date": "2017-01-20", "Open": "806.909973", "High": "806.909973", "Low": "801.690002", "Close": "805.020020", "Adj Close": "805.020020", "Volume": "1670000"}, {"Date": "2017-01-23", "Open": "807.250000", "High": "820.869995", "Low": "803.739990", "Close": "819.309998", "Adj Close": "819.309998", "Volume": "1963600"}, {"Date": "2017-01-24", "Open": "822.299988", "High": "825.900024", "Low": "817.820984", "Close": "823.869995", "Adj Close": "823.869995", "Volume": "1474000"}, {"Date": "2017-01-25", "Open": "829.619995", "High": "835.770020", "Low": "825.059998", "Close": "835.669983", "Adj Close": "835.669983", "Volume": "1494500"}, {"Date": "2017-01-26", "Open": "837.809998", "High": "838.000000", "Low": "827.010010", "Close": "832.150024", "Adj Close": "832.150024", "Volume": "2973900"}, {"Date": "2017-01-27", "Open": "834.710022", "High": "841.950012", "Low": "820.440002", "Close": "823.309998", "Adj Close": "823.309998", "Volume": "2965800"}, {"Date": "2017-01-30", "Open": "814.659973", "High": "815.840027", "Low": "799.799988", "Close": "802.320007", "Adj Close": "802.320007", "Volume": "3246600"}, {"Date": "2017-01-31", "Open": "796.859985", "High": "801.250000", "Low": "790.520020", "Close": "796.789978", "Adj Close": "796.789978", "Volume": "2160600"}, {"Date": "2017-02-01", "Open": "799.679993", "High": "801.190002", "Low": "791.190002", "Close": "795.695007", "Adj Close": "795.695007", "Volume": "2029700"}, {"Date": "2017-02-02", "Open": "793.799988", "High": "802.700012", "Low": "792.000000", "Close": "798.530029", "Adj Close": "798.530029", "Volume": "1532100"}, {"Date": "2017-02-03", "Open": "802.989990", "High": "806.000000", "Low": "800.369995", "Close": "801.489990", "Adj Close": "801.489990", "Volume": "1463400"}, {"Date": "2017-02-06", "Open": "799.700012", "High": "801.669983", "Low": "795.250000", "Close": "801.340027", "Adj Close": "801.340027", "Volume": "1184500"}, {"Date": "2017-02-07", "Open": "803.989990", "High": "810.500000", "Low": "801.780029", "Close": "806.969971", "Adj Close": "806.969971", "Volume": "1241200"}, {"Date": "2017-02-08", "Open": "807.000000", "High": "811.840027", "Low": "803.190002", "Close": "808.380005", "Adj Close": "808.380005", "Volume": "1155300"}, {"Date": "2017-02-09", "Open": "809.510010", "High": "810.659973", "Low": "804.539978", "Close": "809.559998", "Adj Close": "809.559998", "Volume": "989700"}, {"Date": "2017-02-10", "Open": "811.700012", "High": "815.250000", "Low": "809.780029", "Close": "813.669983", "Adj Close": "813.669983", "Volume": "1135000"}, {"Date": "2017-02-13", "Open": "816.000000", "High": "820.958984", "Low": "815.489990", "Close": "819.239990", "Adj Close": "819.239990", "Volume": "1213300"}, {"Date": "2017-02-14", "Open": "819.000000", "High": "823.000000", "Low": "816.000000", "Close": "820.450012", "Adj Close": "820.450012", "Volume": "1054700"}, {"Date": "2017-02-15", "Open": "819.359985", "High": "823.000000", "Low": "818.469971", "Close": "818.979980", "Adj Close": "818.979980", "Volume": "1313600"}, {"Date": "2017-02-16", "Open": "819.929993", "High": "824.400024", "Low": "818.979980", "Close": "824.159973", "Adj Close": "824.159973", "Volume": "1287600"}, {"Date": "2017-02-17", "Open": "823.020020", "High": "828.070007", "Low": "821.655029", "Close": "828.070007", "Adj Close": "828.070007", "Volume": "1611000"}, {"Date": "2017-02-21", "Open": "828.659973", "High": "833.450012", "Low": "828.349976", "Close": "831.659973", "Adj Close": "831.659973", "Volume": "1262300"}, {"Date": "2017-02-22", "Open": "828.659973", "High": "833.250000", "Low": "828.640015", "Close": "830.760010", "Adj Close": "830.760010", "Volume": "982900"}, {"Date": "2017-02-23", "Open": "830.119995", "High": "832.460022", "Low": "822.880005", "Close": "831.330017", "Adj Close": "831.330017", "Volume": "1472800"}, {"Date": "2017-02-24", "Open": "827.729980", "High": "829.000000", "Low": "824.200012", "Close": "828.640015", "Adj Close": "828.640015", "Volume": "1392200"}, {"Date": "2017-02-27", "Open": "824.549988", "High": "830.500000", "Low": "824.000000", "Close": "829.280029", "Adj Close": "829.280029", "Volume": "1101500"}, {"Date": "2017-02-28", "Open": "825.609985", "High": "828.539978", "Low": "820.200012", "Close": "823.210022", "Adj Close": "823.210022", "Volume": "2260800"}, {"Date": "2017-03-01", "Open": "828.849976", "High": "836.255005", "Low": "827.260010", "Close": "835.239990", "Adj Close": "835.239990", "Volume": "1496500"}, {"Date": "2017-03-02", "Open": "833.849976", "High": "834.510010", "Low": "829.640015", "Close": "830.630005", "Adj Close": "830.630005", "Volume": "942500"}, {"Date": "2017-03-03", "Open": "830.559998", "High": "831.359985", "Low": "825.750977", "Close": "829.080017", "Adj Close": "829.080017", "Volume": "896400"}, {"Date": "2017-03-06", "Open": "826.950012", "High": "828.880005", "Low": "822.400024", "Close": "827.780029", "Adj Close": "827.780029", "Volume": "1109000"}, {"Date": "2017-03-07", "Open": "827.400024", "High": "833.409973", "Low": "826.520020", "Close": "831.909973", "Adj Close": "831.909973", "Volume": "1037600"}, {"Date": "2017-03-08", "Open": "833.510010", "High": "838.150024", "Low": "831.789978", "Close": "835.369995", "Adj Close": "835.369995", "Volume": "989800"}, {"Date": "2017-03-09", "Open": "836.000000", "High": "842.000000", "Low": "834.210022", "Close": "838.679993", "Adj Close": "838.679993", "Volume": "1261500"}, {"Date": "2017-03-10", "Open": "843.280029", "High": "844.909973", "Low": "839.500000", "Close": "843.250000", "Adj Close": "843.250000", "Volume": "1704000"}, {"Date": "2017-03-13", "Open": "844.000000", "High": "848.684998", "Low": "843.250000", "Close": "845.539978", "Adj Close": "845.539978", "Volume": "1223600"}, {"Date": "2017-03-14", "Open": "843.640015", "High": "847.239990", "Low": "840.799988", "Close": "845.619995", "Adj Close": "845.619995", "Volume": "779900"}, {"Date": "2017-03-15", "Open": "847.590027", "High": "848.630005", "Low": "840.770020", "Close": "847.200012", "Adj Close": "847.200012", "Volume": "1381500"}, {"Date": "2017-03-16", "Open": "849.030029", "High": "850.849976", "Low": "846.130005", "Close": "848.780029", "Adj Close": "848.780029", "Volume": "977600"}, {"Date": "2017-03-17", "Open": "851.609985", "High": "853.400024", "Low": "847.109985", "Close": "852.119995", "Adj Close": "852.119995", "Volume": "1712300"}, {"Date": "2017-03-20", "Open": "850.010010", "High": "850.219971", "Low": "845.150024", "Close": "848.400024", "Adj Close": "848.400024", "Volume": "1231500"}, {"Date": "2017-03-21", "Open": "851.400024", "High": "853.500000", "Low": "829.020020", "Close": "830.460022", "Adj Close": "830.460022", "Volume": "2463500"}, {"Date": "2017-03-22", "Open": "831.909973", "High": "835.549988", "Low": "827.179993", "Close": "829.590027", "Adj Close": "829.590027", "Volume": "1401500"}, {"Date": "2017-03-23", "Open": "821.000000", "High": "822.570007", "Low": "812.257019", "Close": "817.580017", "Adj Close": "817.580017", "Volume": "3487100"}, {"Date": "2017-03-24", "Open": "820.080017", "High": "821.929993", "Low": "808.890015", "Close": "814.429993", "Adj Close": "814.429993", "Volume": "1981000"}, {"Date": "2017-03-27", "Open": "806.950012", "High": "821.630005", "Low": "803.369995", "Close": "819.510010", "Adj Close": "819.510010", "Volume": "1894300"}, {"Date": "2017-03-28", "Open": "820.409973", "High": "825.989990", "Low": "814.026978", "Close": "820.919983", "Adj Close": "820.919983", "Volume": "1620500"}, {"Date": "2017-03-29", "Open": "825.000000", "High": "832.765015", "Low": "822.380005", "Close": "831.409973", "Adj Close": "831.409973", "Volume": "1786300"}, {"Date": "2017-03-30", "Open": "833.500000", "High": "833.679993", "Low": "829.000000", "Close": "831.500000", "Adj Close": "831.500000", "Volume": "1055300"}, {"Date": "2017-03-31", "Open": "828.969971", "High": "831.640015", "Low": "827.390015", "Close": "829.559998", "Adj Close": "829.559998", "Volume": "1401900"}, {"Date": "2017-04-03", "Open": "829.219971", "High": "840.849976", "Low": "829.219971", "Close": "838.549988", "Adj Close": "838.549988", "Volume": "1671500"}, {"Date": "2017-04-04", "Open": "831.359985", "High": "835.179993", "Low": "829.036011", "Close": "834.570007", "Adj Close": "834.570007", "Volume": "1045400"}, {"Date": "2017-04-05", "Open": "835.510010", "High": "842.450012", "Low": "830.719971", "Close": "831.409973", "Adj Close": "831.409973", "Volume": "1555300"}, {"Date": "2017-04-06", "Open": "832.400024", "High": "836.390015", "Low": "826.460022", "Close": "827.880005", "Adj Close": "827.880005", "Volume": "1254400"}, {"Date": "2017-04-07", "Open": "827.960022", "High": "828.484985", "Low": "820.513000", "Close": "824.669983", "Adj Close": "824.669983", "Volume": "1057300"}, {"Date": "2017-04-10", "Open": "825.390015", "High": "829.349976", "Low": "823.770020", "Close": "824.729980", "Adj Close": "824.729980", "Volume": "978900"}, {"Date": "2017-04-11", "Open": "824.710022", "High": "827.427002", "Low": "817.020020", "Close": "823.349976", "Adj Close": "823.349976", "Volume": "1079700"}, {"Date": "2017-04-12", "Open": "821.929993", "High": "826.659973", "Low": "821.020020", "Close": "824.320007", "Adj Close": "824.320007", "Volume": "900500"}, {"Date": "2017-04-13", "Open": "822.140015", "High": "826.380005", "Low": "821.440002", "Close": "823.559998", "Adj Close": "823.559998", "Volume": "1122400"}, {"Date": "2017-04-17", "Open": "825.010010", "High": "837.750000", "Low": "824.469971", "Close": "837.169983", "Adj Close": "837.169983", "Volume": "895000"}, {"Date": "2017-04-18", "Open": "834.219971", "High": "838.929993", "Low": "832.710022", "Close": "836.820007", "Adj Close": "836.820007", "Volume": "836700"}, {"Date": "2017-04-19", "Open": "839.789978", "High": "842.219971", "Low": "836.289978", "Close": "838.210022", "Adj Close": "838.210022", "Volume": "954200"}, {"Date": "2017-04-20", "Open": "841.440002", "High": "845.200012", "Low": "839.320007", "Close": "841.650024", "Adj Close": "841.650024", "Volume": "959000"}, {"Date": "2017-04-21", "Open": "842.880005", "High": "843.880005", "Low": "840.599976", "Close": "843.190002", "Adj Close": "843.190002", "Volume": "1323600"}, {"Date": "2017-04-24", "Open": "851.200012", "High": "863.450012", "Low": "849.859985", "Close": "862.760010", "Adj Close": "862.760010", "Volume": "1372500"}, {"Date": "2017-04-25", "Open": "865.000000", "High": "875.000000", "Low": "862.809998", "Close": "872.299988", "Adj Close": "872.299988", "Volume": "1672000"}, {"Date": "2017-04-26", "Open": "874.229980", "High": "876.049988", "Low": "867.747986", "Close": "871.729980", "Adj Close": "871.729980", "Volume": "1237200"}, {"Date": "2017-04-27", "Open": "873.599976", "High": "875.400024", "Low": "870.380005", "Close": "874.250000", "Adj Close": "874.250000", "Volume": "2026800"}, {"Date": "2017-04-28", "Open": "910.659973", "High": "916.849976", "Low": "905.770020", "Close": "905.960022", "Adj Close": "905.960022", "Volume": "3276300"}, {"Date": "2017-05-01", "Open": "901.940002", "High": "915.679993", "Low": "901.450012", "Close": "912.570007", "Adj Close": "912.570007", "Volume": "2116000"}, {"Date": "2017-05-02", "Open": "909.619995", "High": "920.770020", "Low": "909.453003", "Close": "916.440002", "Adj Close": "916.440002", "Volume": "1587200"}, {"Date": "2017-05-03", "Open": "914.859985", "High": "928.099976", "Low": "912.543030", "Close": "927.039978", "Adj Close": "927.039978", "Volume": "1499500"}, {"Date": "2017-05-04", "Open": "926.070007", "High": "935.929993", "Low": "924.590027", "Close": "931.659973", "Adj Close": "931.659973", "Volume": "1422100"}, {"Date": "2017-05-05", "Open": "933.539978", "High": "934.900024", "Low": "925.200012", "Close": "927.130005", "Adj Close": "927.130005", "Volume": "1911300"}, {"Date": "2017-05-08", "Open": "926.119995", "High": "936.924988", "Low": "925.260010", "Close": "934.299988", "Adj Close": "934.299988", "Volume": "1329800"}, {"Date": "2017-05-09", "Open": "936.950012", "High": "937.500000", "Low": "929.530029", "Close": "932.169983", "Adj Close": "932.169983", "Volume": "1581800"}, {"Date": "2017-05-10", "Open": "931.979980", "High": "932.000000", "Low": "925.159973", "Close": "928.780029", "Adj Close": "928.780029", "Volume": "1173900"}, {"Date": "2017-05-11", "Open": "925.320007", "High": "932.530029", "Low": "923.030029", "Close": "930.599976", "Adj Close": "930.599976", "Volume": "835000"}, {"Date": "2017-05-12", "Open": "931.530029", "High": "933.440002", "Low": "927.849976", "Close": "932.219971", "Adj Close": "932.219971", "Volume": "1050600"}, {"Date": "2017-05-15", "Open": "932.950012", "High": "938.250000", "Low": "929.340027", "Close": "937.080017", "Adj Close": "937.080017", "Volume": "1108100"}, {"Date": "2017-05-16", "Open": "940.000000", "High": "943.109985", "Low": "937.580017", "Close": "943.000000", "Adj Close": "943.000000", "Volume": "969500"}, {"Date": "2017-05-17", "Open": "935.669983", "High": "939.333008", "Low": "918.140015", "Close": "919.619995", "Adj Close": "919.619995", "Volume": "2362100"}, {"Date": "2017-05-18", "Open": "921.000000", "High": "933.169983", "Low": "918.750000", "Close": "930.239990", "Adj Close": "930.239990", "Volume": "1596900"}, {"Date": "2017-05-19", "Open": "931.469971", "High": "937.755005", "Low": "931.000000", "Close": "934.010010", "Adj Close": "934.010010", "Volume": "1393000"}, {"Date": "2017-05-22", "Open": "935.000000", "High": "941.882996", "Low": "935.000000", "Close": "941.859985", "Adj Close": "941.859985", "Volume": "1120400"}, {"Date": "2017-05-23", "Open": "947.919983", "High": "951.466980", "Low": "942.575012", "Close": "948.820007", "Adj Close": "948.820007", "Volume": "1270800"}, {"Date": "2017-05-24", "Open": "952.979980", "High": "955.090027", "Low": "949.500000", "Close": "954.960022", "Adj Close": "954.960022", "Volume": "1024800"}, {"Date": "2017-05-25", "Open": "957.330017", "High": "972.629028", "Low": "955.469971", "Close": "969.539978", "Adj Close": "969.539978", "Volume": "1660500"}, {"Date": "2017-05-26", "Open": "969.700012", "High": "974.979980", "Low": "965.030029", "Close": "971.469971", "Adj Close": "971.469971", "Volume": "1252000"}, {"Date": "2017-05-30", "Open": "970.309998", "High": "976.200012", "Low": "969.489990", "Close": "975.880005", "Adj Close": "975.880005", "Volume": "1466700"}, {"Date": "2017-05-31", "Open": "975.020020", "High": "979.270020", "Low": "960.179993", "Close": "964.859985", "Adj Close": "964.859985", "Volume": "2448100"}, {"Date": "2017-06-01", "Open": "968.950012", "High": "971.500000", "Low": "960.010010", "Close": "966.950012", "Adj Close": "966.950012", "Volume": "1410500"}, {"Date": "2017-06-02", "Open": "969.460022", "High": "975.880005", "Low": "966.000000", "Close": "975.599976", "Adj Close": "975.599976", "Volume": "1751000"}, {"Date": "2017-06-05", "Open": "976.549988", "High": "986.909973", "Low": "975.099976", "Close": "983.679993", "Adj Close": "983.679993", "Volume": "1252100"}, {"Date": "2017-06-06", "Open": "983.159973", "High": "988.250000", "Low": "975.140015", "Close": "976.570007", "Adj Close": "976.570007", "Volume": "1814600"}, {"Date": "2017-06-07", "Open": "980.000000", "High": "983.979980", "Low": "975.940002", "Close": "980.940002", "Adj Close": "980.940002", "Volume": "1453900"}, {"Date": "2017-06-08", "Open": "982.349976", "High": "984.570007", "Low": "977.200012", "Close": "983.409973", "Adj Close": "983.409973", "Volume": "1481900"}, {"Date": "2017-06-09", "Open": "984.500000", "High": "984.500000", "Low": "935.630005", "Close": "949.830017", "Adj Close": "949.830017", "Volume": "3309400"}, {"Date": "2017-06-12", "Open": "939.559998", "High": "949.354980", "Low": "915.232971", "Close": "942.900024", "Adj Close": "942.900024", "Volume": "3763500"}, {"Date": "2017-06-13", "Open": "951.909973", "High": "959.979980", "Low": "944.090027", "Close": "953.400024", "Adj Close": "953.400024", "Volume": "2013300"}, {"Date": "2017-06-14", "Open": "959.919983", "High": "961.150024", "Low": "942.250000", "Close": "950.760010", "Adj Close": "950.760010", "Volume": "1489700"}, {"Date": "2017-06-15", "Open": "933.969971", "High": "943.338989", "Low": "924.440002", "Close": "942.309998", "Adj Close": "942.309998", "Volume": "2133100"}, {"Date": "2017-06-16", "Open": "940.000000", "High": "942.039978", "Low": "931.594971", "Close": "939.780029", "Adj Close": "939.780029", "Volume": "3094700"}, {"Date": "2017-06-19", "Open": "949.960022", "High": "959.989990", "Low": "949.049988", "Close": "957.369995", "Adj Close": "957.369995", "Volume": "1533300"}, {"Date": "2017-06-20", "Open": "957.520020", "High": "961.619995", "Low": "950.010010", "Close": "950.630005", "Adj Close": "950.630005", "Volume": "1126000"}, {"Date": "2017-06-21", "Open": "953.640015", "High": "960.099976", "Low": "950.760010", "Close": "959.450012", "Adj Close": "959.450012", "Volume": "1202200"}, {"Date": "2017-06-22", "Open": "958.700012", "High": "960.719971", "Low": "954.549988", "Close": "957.090027", "Adj Close": "957.090027", "Volume": "941400"}, {"Date": "2017-06-23", "Open": "956.830017", "High": "966.000000", "Low": "954.200012", "Close": "965.590027", "Adj Close": "965.590027", "Volume": "1527900"}, {"Date": "2017-06-26", "Open": "969.900024", "High": "973.309998", "Low": "950.789978", "Close": "952.270020", "Adj Close": "952.270020", "Volume": "1598400"}, {"Date": "2017-06-27", "Open": "942.460022", "High": "948.289978", "Low": "926.849976", "Close": "927.330017", "Adj Close": "927.330017", "Volume": "2579900"}, {"Date": "2017-06-28", "Open": "929.000000", "High": "942.750000", "Low": "916.000000", "Close": "940.489990", "Adj Close": "940.489990", "Volume": "2721400"}, {"Date": "2017-06-29", "Open": "929.919983", "High": "931.260010", "Low": "910.619995", "Close": "917.789978", "Adj Close": "917.789978", "Volume": "3299200"}, {"Date": "2017-06-30", "Open": "926.049988", "High": "926.049988", "Low": "908.309998", "Close": "908.729980", "Adj Close": "908.729980", "Volume": "2090200"}, {"Date": "2017-07-03", "Open": "912.179993", "High": "913.940002", "Low": "894.789978", "Close": "898.700012", "Adj Close": "898.700012", "Volume": "1709800"}, {"Date": "2017-07-05", "Open": "901.760010", "High": "914.510010", "Low": "898.500000", "Close": "911.710022", "Adj Close": "911.710022", "Volume": "1813900"}, {"Date": "2017-07-06", "Open": "904.119995", "High": "914.943970", "Low": "899.700012", "Close": "906.690002", "Adj Close": "906.690002", "Volume": "1424500"}, {"Date": "2017-07-07", "Open": "908.849976", "High": "921.539978", "Low": "908.849976", "Close": "918.590027", "Adj Close": "918.590027", "Volume": "1637800"}, {"Date": "2017-07-10", "Open": "921.770020", "High": "930.380005", "Low": "919.590027", "Close": "928.799988", "Adj Close": "928.799988", "Volume": "1192800"}, {"Date": "2017-07-11", "Open": "929.539978", "High": "931.429993", "Low": "922.000000", "Close": "930.090027", "Adj Close": "930.090027", "Volume": "1113200"}, {"Date": "2017-07-12", "Open": "938.679993", "High": "946.299988", "Low": "934.469971", "Close": "943.830017", "Adj Close": "943.830017", "Volume": "1532100"}, {"Date": "2017-07-13", "Open": "946.289978", "High": "954.450012", "Low": "943.010010", "Close": "947.159973", "Adj Close": "947.159973", "Volume": "1294700"}, {"Date": "2017-07-14", "Open": "952.000000", "High": "956.909973", "Low": "948.005005", "Close": "955.989990", "Adj Close": "955.989990", "Volume": "1053800"}, {"Date": "2017-07-17", "Open": "957.000000", "High": "960.739990", "Low": "949.241028", "Close": "953.419983", "Adj Close": "953.419983", "Volume": "1165500"}, {"Date": "2017-07-18", "Open": "953.000000", "High": "968.039978", "Low": "950.599976", "Close": "965.400024", "Adj Close": "965.400024", "Volume": "1154000"}, {"Date": "2017-07-19", "Open": "967.840027", "High": "973.039978", "Low": "964.030029", "Close": "970.890015", "Adj Close": "970.890015", "Volume": "1224500"}, {"Date": "2017-07-20", "Open": "975.000000", "High": "975.900024", "Low": "961.510010", "Close": "968.150024", "Adj Close": "968.150024", "Volume": "1624500"}, {"Date": "2017-07-21", "Open": "962.250000", "High": "973.229980", "Low": "960.150024", "Close": "972.919983", "Adj Close": "972.919983", "Volume": "1711000"}, {"Date": "2017-07-24", "Open": "972.219971", "High": "986.200012", "Low": "970.770020", "Close": "980.340027", "Adj Close": "980.340027", "Volume": "3248300"}, {"Date": "2017-07-25", "Open": "953.809998", "High": "959.700012", "Low": "945.400024", "Close": "950.700012", "Adj Close": "950.700012", "Volume": "4661000"}, {"Date": "2017-07-26", "Open": "954.679993", "High": "955.000000", "Low": "942.278992", "Close": "947.799988", "Adj Close": "947.799988", "Volume": "2088300"}, {"Date": "2017-07-27", "Open": "951.780029", "High": "951.780029", "Low": "920.000000", "Close": "934.090027", "Adj Close": "934.090027", "Volume": "3213000"}, {"Date": "2017-07-28", "Open": "929.400024", "High": "943.830017", "Low": "927.500000", "Close": "941.530029", "Adj Close": "941.530029", "Volume": "1846400"}, {"Date": "2017-07-31", "Open": "941.890015", "High": "943.590027", "Low": "926.039978", "Close": "930.500000", "Adj Close": "930.500000", "Volume": "1970100"}, {"Date": "2017-08-01", "Open": "932.380005", "High": "937.447021", "Low": "929.260010", "Close": "930.830017", "Adj Close": "930.830017", "Volume": "1277700"}, {"Date": "2017-08-02", "Open": "928.609985", "High": "932.599976", "Low": "916.679993", "Close": "930.390015", "Adj Close": "930.390015", "Volume": "1824400"}, {"Date": "2017-08-03", "Open": "930.340027", "High": "932.239990", "Low": "922.239990", "Close": "923.650024", "Adj Close": "923.650024", "Volume": "1202500"}, {"Date": "2017-08-04", "Open": "926.750000", "High": "930.307007", "Low": "923.030029", "Close": "927.960022", "Adj Close": "927.960022", "Volume": "1082300"}, {"Date": "2017-08-07", "Open": "929.059998", "High": "931.700012", "Low": "926.500000", "Close": "929.359985", "Adj Close": "929.359985", "Volume": "1032200"}, {"Date": "2017-08-08", "Open": "927.090027", "High": "935.814026", "Low": "925.609985", "Close": "926.789978", "Adj Close": "926.789978", "Volume": "1061600"}, {"Date": "2017-08-09", "Open": "920.609985", "High": "925.979980", "Low": "917.250000", "Close": "922.900024", "Adj Close": "922.900024", "Volume": "1192100"}, {"Date": "2017-08-10", "Open": "917.549988", "High": "919.260010", "Low": "906.130005", "Close": "907.239990", "Adj Close": "907.239990", "Volume": "1824000"}, {"Date": "2017-08-11", "Open": "907.969971", "High": "917.780029", "Low": "905.580017", "Close": "914.390015", "Adj Close": "914.390015", "Volume": "1206800"}, {"Date": "2017-08-14", "Open": "922.530029", "High": "924.668030", "Low": "918.190002", "Close": "922.669983", "Adj Close": "922.669983", "Volume": "1064500"}, {"Date": "2017-08-15", "Open": "924.229980", "High": "926.549988", "Low": "919.820007", "Close": "922.219971", "Adj Close": "922.219971", "Volume": "883400"}, {"Date": "2017-08-16", "Open": "925.289978", "High": "932.700012", "Low": "923.445007", "Close": "926.960022", "Adj Close": "926.960022", "Volume": "1006700"}, {"Date": "2017-08-17", "Open": "925.780029", "High": "926.859985", "Low": "910.979980", "Close": "910.979980", "Adj Close": "910.979980", "Volume": "1277200"}, {"Date": "2017-08-18", "Open": "910.309998", "High": "915.275024", "Low": "907.153992", "Close": "910.669983", "Adj Close": "910.669983", "Volume": "1342700"}, {"Date": "2017-08-21", "Open": "910.000000", "High": "913.000000", "Low": "903.400024", "Close": "906.659973", "Adj Close": "906.659973", "Volume": "943400"}, {"Date": "2017-08-22", "Open": "912.719971", "High": "925.859985", "Low": "911.474976", "Close": "924.690002", "Adj Close": "924.690002", "Volume": "1166700"}, {"Date": "2017-08-23", "Open": "921.929993", "High": "929.929993", "Low": "919.359985", "Close": "927.000000", "Adj Close": "927.000000", "Volume": "1090200"}, {"Date": "2017-08-24", "Open": "928.659973", "High": "930.840027", "Low": "915.500000", "Close": "921.280029", "Adj Close": "921.280029", "Volume": "1270300"}, {"Date": "2017-08-25", "Open": "923.489990", "High": "925.554993", "Low": "915.500000", "Close": "915.890015", "Adj Close": "915.890015", "Volume": "1053400"}, {"Date": "2017-08-28", "Open": "916.000000", "High": "919.244995", "Low": "911.869995", "Close": "913.809998", "Adj Close": "913.809998", "Volume": "1086500"}, {"Date": "2017-08-29", "Open": "905.099976", "High": "923.330017", "Low": "905.000000", "Close": "921.289978", "Adj Close": "921.289978", "Volume": "1185600"}, {"Date": "2017-08-30", "Open": "920.049988", "High": "930.818970", "Low": "919.650024", "Close": "929.570007", "Adj Close": "929.570007", "Volume": "1301200"}, {"Date": "2017-08-31", "Open": "931.760010", "High": "941.979980", "Low": "931.760010", "Close": "939.330017", "Adj Close": "939.330017", "Volume": "1582600"}, {"Date": "2017-09-01", "Open": "941.130005", "High": "942.479980", "Low": "935.150024", "Close": "937.340027", "Adj Close": "937.340027", "Volume": "947400"}, {"Date": "2017-09-05", "Open": "933.080017", "High": "937.000000", "Low": "921.960022", "Close": "928.450012", "Adj Close": "928.450012", "Volume": "1326400"}, {"Date": "2017-09-06", "Open": "930.150024", "High": "930.914978", "Low": "919.270020", "Close": "927.809998", "Adj Close": "927.809998", "Volume": "1527700"}, {"Date": "2017-09-07", "Open": "931.729980", "High": "936.409973", "Low": "923.619995", "Close": "935.950012", "Adj Close": "935.950012", "Volume": "1212700"}, {"Date": "2017-09-08", "Open": "936.489990", "High": "936.989990", "Low": "924.880005", "Close": "926.500000", "Adj Close": "926.500000", "Volume": "1011500"}, {"Date": "2017-09-11", "Open": "934.250000", "High": "938.380005", "Low": "926.919983", "Close": "929.080017", "Adj Close": "929.080017", "Volume": "1267000"}, {"Date": "2017-09-12", "Open": "932.590027", "High": "933.479980", "Low": "923.861023", "Close": "932.070007", "Adj Close": "932.070007", "Volume": "1134400"}, {"Date": "2017-09-13", "Open": "930.659973", "High": "937.250000", "Low": "929.859985", "Close": "935.090027", "Adj Close": "935.090027", "Volume": "1102600"}, {"Date": "2017-09-14", "Open": "931.250000", "High": "932.770020", "Low": "924.000000", "Close": "925.109985", "Adj Close": "925.109985", "Volume": "1397600"}, {"Date": "2017-09-15", "Open": "924.659973", "High": "926.489990", "Low": "916.359985", "Close": "920.289978", "Adj Close": "920.289978", "Volume": "2505400"}, {"Date": "2017-09-18", "Open": "920.010010", "High": "922.080017", "Low": "910.599976", "Close": "915.000000", "Adj Close": "915.000000", "Volume": "1306900"}, {"Date": "2017-09-19", "Open": "917.419983", "High": "922.419983", "Low": "912.549988", "Close": "921.809998", "Adj Close": "921.809998", "Volume": "936700"}, {"Date": "2017-09-20", "Open": "922.979980", "High": "933.880005", "Low": "922.000000", "Close": "931.580017", "Adj Close": "931.580017", "Volume": "1669800"}, {"Date": "2017-09-21", "Open": "933.000000", "High": "936.530029", "Low": "923.830017", "Close": "932.450012", "Adj Close": "932.450012", "Volume": "1290600"}, {"Date": "2017-09-22", "Open": "927.750000", "High": "934.729980", "Low": "926.479980", "Close": "928.530029", "Adj Close": "928.530029", "Volume": "1052700"}, {"Date": "2017-09-25", "Open": "925.450012", "High": "926.400024", "Low": "909.700012", "Close": "920.969971", "Adj Close": "920.969971", "Volume": "1856800"}, {"Date": "2017-09-26", "Open": "923.719971", "High": "930.820007", "Low": "921.140015", "Close": "924.859985", "Adj Close": "924.859985", "Volume": "1666900"}, {"Date": "2017-09-27", "Open": "927.739990", "High": "949.900024", "Low": "927.739990", "Close": "944.489990", "Adj Close": "944.489990", "Volume": "2239400"}, {"Date": "2017-09-28", "Open": "941.359985", "High": "950.690002", "Low": "940.549988", "Close": "949.500000", "Adj Close": "949.500000", "Volume": "1020300"}, {"Date": "2017-09-29", "Open": "952.000000", "High": "959.786011", "Low": "951.510010", "Close": "959.109985", "Adj Close": "959.109985", "Volume": "1581000"}, {"Date": "2017-10-02", "Open": "959.979980", "High": "962.539978", "Low": "947.840027", "Close": "953.270020", "Adj Close": "953.270020", "Volume": "1283400"}, {"Date": "2017-10-03", "Open": "954.000000", "High": "958.000000", "Low": "949.140015", "Close": "957.789978", "Adj Close": "957.789978", "Volume": "888300"}, {"Date": "2017-10-04", "Open": "957.000000", "High": "960.390015", "Low": "950.690002", "Close": "951.679993", "Adj Close": "951.679993", "Volume": "952400"}, {"Date": "2017-10-05", "Open": "955.489990", "High": "970.909973", "Low": "955.179993", "Close": "969.960022", "Adj Close": "969.960022", "Volume": "1213800"}, {"Date": "2017-10-06", "Open": "966.700012", "High": "979.460022", "Low": "963.359985", "Close": "978.890015", "Adj Close": "978.890015", "Volume": "1173900"}, {"Date": "2017-10-09", "Open": "980.000000", "High": "985.424988", "Low": "976.109985", "Close": "977.000000", "Adj Close": "977.000000", "Volume": "891400"}, {"Date": "2017-10-10", "Open": "980.000000", "High": "981.570007", "Low": "966.080017", "Close": "972.599976", "Adj Close": "972.599976", "Volume": "968400"}, {"Date": "2017-10-11", "Open": "973.719971", "High": "990.710022", "Low": "972.250000", "Close": "989.250000", "Adj Close": "989.250000", "Volume": "1693300"}, {"Date": "2017-10-12", "Open": "987.450012", "High": "994.119995", "Low": "985.000000", "Close": "987.830017", "Adj Close": "987.830017", "Volume": "1262400"}, {"Date": "2017-10-13", "Open": "992.000000", "High": "997.210022", "Low": "989.000000", "Close": "989.679993", "Adj Close": "989.679993", "Volume": "1169800"}, {"Date": "2017-10-16", "Open": "992.099976", "High": "993.906982", "Low": "984.000000", "Close": "992.000000", "Adj Close": "992.000000", "Volume": "910500"}, {"Date": "2017-10-17", "Open": "990.289978", "High": "996.440002", "Low": "988.590027", "Close": "992.179993", "Adj Close": "992.179993", "Volume": "1290200"}, {"Date": "2017-10-18", "Open": "991.770020", "High": "996.719971", "Low": "986.974976", "Close": "992.809998", "Adj Close": "992.809998", "Volume": "1057600"}, {"Date": "2017-10-19", "Open": "986.000000", "High": "988.880005", "Low": "978.390015", "Close": "984.450012", "Adj Close": "984.450012", "Volume": "1313600"}, {"Date": "2017-10-20", "Open": "989.440002", "High": "991.000000", "Low": "984.580017", "Close": "988.200012", "Adj Close": "988.200012", "Volume": "1183200"}, {"Date": "2017-10-23", "Open": "989.520020", "High": "989.520020", "Low": "966.119995", "Close": "968.450012", "Adj Close": "968.450012", "Volume": "1478400"}, {"Date": "2017-10-24", "Open": "970.000000", "High": "972.229980", "Low": "961.000000", "Close": "970.539978", "Adj Close": "970.539978", "Volume": "1212200"}, {"Date": "2017-10-25", "Open": "968.369995", "High": "976.090027", "Low": "960.520020", "Close": "973.330017", "Adj Close": "973.330017", "Volume": "1211300"}, {"Date": "2017-10-26", "Open": "980.000000", "High": "987.599976", "Low": "972.200012", "Close": "972.559998", "Adj Close": "972.559998", "Volume": "2042100"}, {"Date": "2017-10-27", "Open": "1009.190002", "High": "1048.390015", "Low": "1008.200012", "Close": "1019.270020", "Adj Close": "1019.270020", "Volume": "5167700"}, {"Date": "2017-10-30", "Open": "1014.000000", "High": "1024.969971", "Low": "1007.500000", "Close": "1017.109985", "Adj Close": "1017.109985", "Volume": "2085100"}, {"Date": "2017-10-31", "Open": "1015.219971", "High": "1024.000000", "Low": "1010.419983", "Close": "1016.640015", "Adj Close": "1016.640015", "Volume": "1330700"}, {"Date": "2017-11-01", "Open": "1017.210022", "High": "1029.670044", "Low": "1016.950012", "Close": "1025.500000", "Adj Close": "1025.500000", "Volume": "1373400"}, {"Date": "2017-11-02", "Open": "1021.760010", "High": "1028.089966", "Low": "1013.010010", "Close": "1025.579956", "Adj Close": "1025.579956", "Volume": "1049000"}, {"Date": "2017-11-03", "Open": "1022.109985", "High": "1032.650024", "Low": "1020.309998", "Close": "1032.479980", "Adj Close": "1032.479980", "Volume": "1076400"}, {"Date": "2017-11-06", "Open": "1028.989990", "High": "1034.869995", "Low": "1025.000000", "Close": "1025.900024", "Adj Close": "1025.900024", "Volume": "1125200"}, {"Date": "2017-11-07", "Open": "1027.270020", "High": "1033.969971", "Low": "1025.130005", "Close": "1033.329956", "Adj Close": "1033.329956", "Volume": "1112300"}, {"Date": "2017-11-08", "Open": "1030.520020", "High": "1043.521973", "Low": "1028.449951", "Close": "1039.849976", "Adj Close": "1039.849976", "Volume": "1088700"}, {"Date": "2017-11-09", "Open": "1033.989990", "High": "1033.989990", "Low": "1019.666016", "Close": "1031.260010", "Adj Close": "1031.260010", "Volume": "1245200"}, {"Date": "2017-11-10", "Open": "1026.459961", "High": "1030.760010", "Low": "1025.280029", "Close": "1028.069946", "Adj Close": "1028.069946", "Volume": "720000"}, {"Date": "2017-11-13", "Open": "1023.419983", "High": "1031.579956", "Low": "1022.570007", "Close": "1025.750000", "Adj Close": "1025.750000", "Volume": "885800"}, {"Date": "2017-11-14", "Open": "1022.590027", "High": "1026.810059", "Low": "1014.150024", "Close": "1026.000000", "Adj Close": "1026.000000", "Volume": "959200"}, {"Date": "2017-11-15", "Open": "1019.210022", "High": "1024.089966", "Low": "1015.419983", "Close": "1020.909973", "Adj Close": "1020.909973", "Volume": "854000"}, {"Date": "2017-11-16", "Open": "1022.520020", "High": "1035.920044", "Low": "1022.520020", "Close": "1032.500000", "Adj Close": "1032.500000", "Volume": "1129700"}, {"Date": "2017-11-17", "Open": "1034.010010", "High": "1034.420044", "Low": "1017.750000", "Close": "1019.090027", "Adj Close": "1019.090027", "Volume": "1397100"}, {"Date": "2017-11-20", "Open": "1020.260010", "High": "1022.609985", "Low": "1017.500000", "Close": "1018.380005", "Adj Close": "1018.380005", "Volume": "953500"}, {"Date": "2017-11-21", "Open": "1023.309998", "High": "1035.109985", "Low": "1022.655029", "Close": "1034.489990", "Adj Close": "1034.489990", "Volume": "1097000"}, {"Date": "2017-11-22", "Open": "1035.000000", "High": "1039.706055", "Low": "1031.430054", "Close": "1035.959961", "Adj Close": "1035.959961", "Volume": "746300"}, {"Date": "2017-11-24", "Open": "1035.869995", "High": "1043.177979", "Low": "1035.000000", "Close": "1040.609985", "Adj Close": "1040.609985", "Volume": "537000"}, {"Date": "2017-11-27", "Open": "1040.000000", "High": "1055.459961", "Low": "1038.439941", "Close": "1054.209961", "Adj Close": "1054.209961", "Volume": "1307900"}, {"Date": "2017-11-28", "Open": "1055.089966", "High": "1062.375000", "Low": "1040.000000", "Close": "1047.410034", "Adj Close": "1047.410034", "Volume": "1424400"}, {"Date": "2017-11-29", "Open": "1042.680054", "High": "1044.079956", "Low": "1015.650024", "Close": "1021.659973", "Adj Close": "1021.659973", "Volume": "2459400"}, {"Date": "2017-11-30", "Open": "1022.369995", "High": "1028.489990", "Low": "1015.000000", "Close": "1021.409973", "Adj Close": "1021.409973", "Volume": "1724000"}, {"Date": "2017-12-01", "Open": "1015.799988", "High": "1022.489990", "Low": "1002.020020", "Close": "1010.169983", "Adj Close": "1010.169983", "Volume": "1909600"}, {"Date": "2017-12-04", "Open": "1012.659973", "High": "1016.099976", "Low": "995.570007", "Close": "998.679993", "Adj Close": "998.679993", "Volume": "1906400"}, {"Date": "2017-12-05", "Open": "995.940002", "High": "1020.609985", "Low": "988.280029", "Close": "1005.150024", "Adj Close": "1005.150024", "Volume": "2067300"}, {"Date": "2017-12-06", "Open": "1001.500000", "High": "1024.969971", "Low": "1001.140015", "Close": "1018.380005", "Adj Close": "1018.380005", "Volume": "1272000"}, {"Date": "2017-12-07", "Open": "1020.429993", "High": "1034.239990", "Low": "1018.070984", "Close": "1030.930054", "Adj Close": "1030.930054", "Volume": "1458200"}, {"Date": "2017-12-08", "Open": "1037.489990", "High": "1042.050049", "Low": "1032.521973", "Close": "1037.050049", "Adj Close": "1037.050049", "Volume": "1290800"}, {"Date": "2017-12-11", "Open": "1035.500000", "High": "1043.800049", "Low": "1032.050049", "Close": "1041.099976", "Adj Close": "1041.099976", "Volume": "1192800"}, {"Date": "2017-12-12", "Open": "1039.630005", "High": "1050.310059", "Low": "1033.689941", "Close": "1040.479980", "Adj Close": "1040.479980", "Volume": "1279500"}, {"Date": "2017-12-13", "Open": "1046.119995", "High": "1046.665039", "Low": "1038.380005", "Close": "1040.609985", "Adj Close": "1040.609985", "Volume": "1282700"}, {"Date": "2017-12-14", "Open": "1045.000000", "High": "1058.500000", "Low": "1043.109985", "Close": "1049.150024", "Adj Close": "1049.150024", "Volume": "1558700"}, {"Date": "2017-12-15", "Open": "1054.609985", "High": "1067.619995", "Low": "1049.500000", "Close": "1064.189941", "Adj Close": "1064.189941", "Volume": "3275900"}, {"Date": "2017-12-18", "Open": "1066.079956", "High": "1078.489990", "Low": "1062.000000", "Close": "1077.140015", "Adj Close": "1077.140015", "Volume": "1554600"}, {"Date": "2017-12-19", "Open": "1075.199951", "High": "1076.839966", "Low": "1063.550049", "Close": "1070.680054", "Adj Close": "1070.680054", "Volume": "1338700"}, {"Date": "2017-12-20", "Open": "1071.780029", "High": "1073.380005", "Low": "1061.520020", "Close": "1064.949951", "Adj Close": "1064.949951", "Volume": "1268600"}, {"Date": "2017-12-21", "Open": "1064.949951", "High": "1069.329956", "Low": "1061.793945", "Close": "1063.630005", "Adj Close": "1063.630005", "Volume": "995700"}, {"Date": "2017-12-22", "Open": "1061.109985", "High": "1064.199951", "Low": "1059.439941", "Close": "1060.119995", "Adj Close": "1060.119995", "Volume": "755100"}, {"Date": "2017-12-26", "Open": "1058.069946", "High": "1060.119995", "Low": "1050.199951", "Close": "1056.739990", "Adj Close": "1056.739990", "Volume": "760600"}, {"Date": "2017-12-27", "Open": "1057.390015", "High": "1058.369995", "Low": "1048.050049", "Close": "1049.369995", "Adj Close": "1049.369995", "Volume": "1271900"}, {"Date": "2017-12-28", "Open": "1051.599976", "High": "1054.750000", "Low": "1044.770020", "Close": "1048.140015", "Adj Close": "1048.140015", "Volume": "837100"}, {"Date": "2017-12-29", "Open": "1046.719971", "High": "1049.699951", "Low": "1044.900024", "Close": "1046.400024", "Adj Close": "1046.400024", "Volume": "887500"}, {"Date": "2018-01-02", "Open": "1048.339966", "High": "1066.939941", "Low": "1045.229980", "Close": "1065.000000", "Adj Close": "1065.000000", "Volume": "1237600"}, {"Date": "2018-01-03", "Open": "1064.310059", "High": "1086.290039", "Low": "1063.209961", "Close": "1082.479980", "Adj Close": "1082.479980", "Volume": "1430200"}, {"Date": "2018-01-04", "Open": "1088.000000", "High": "1093.569946", "Low": "1084.001953", "Close": "1086.400024", "Adj Close": "1086.400024", "Volume": "1004600"}, {"Date": "2018-01-05", "Open": "1094.000000", "High": "1104.250000", "Low": "1092.000000", "Close": "1102.229980", "Adj Close": "1102.229980", "Volume": "1279100"}, {"Date": "2018-01-08", "Open": "1102.229980", "High": "1111.270020", "Low": "1101.619995", "Close": "1106.939941", "Adj Close": "1106.939941", "Volume": "1047600"}, {"Date": "2018-01-09", "Open": "1109.400024", "High": "1110.569946", "Low": "1101.230957", "Close": "1106.260010", "Adj Close": "1106.260010", "Volume": "902500"}, {"Date": "2018-01-10", "Open": "1097.099976", "High": "1104.599976", "Low": "1096.109985", "Close": "1102.609985", "Adj Close": "1102.609985", "Volume": "1042800"}, {"Date": "2018-01-11", "Open": "1106.300049", "High": "1106.525024", "Low": "1099.589966", "Close": "1105.520020", "Adj Close": "1105.520020", "Volume": "978300"}, {"Date": "2018-01-12", "Open": "1102.410034", "High": "1124.290039", "Low": "1101.150024", "Close": "1122.260010", "Adj Close": "1122.260010", "Volume": "1720500"}, {"Date": "2018-01-16", "Open": "1132.510010", "High": "1139.910034", "Low": "1117.832031", "Close": "1121.760010", "Adj Close": "1121.760010", "Volume": "1575300"}, {"Date": "2018-01-17", "Open": "1126.219971", "High": "1132.599976", "Low": "1117.010010", "Close": "1131.979980", "Adj Close": "1131.979980", "Volume": "1202600"}, {"Date": "2018-01-18", "Open": "1131.410034", "High": "1132.510010", "Low": "1117.500000", "Close": "1129.790039", "Adj Close": "1129.790039", "Volume": "1198200"}, {"Date": "2018-01-19", "Open": "1131.829956", "High": "1137.859985", "Low": "1128.300049", "Close": "1137.510010", "Adj Close": "1137.510010", "Volume": "1778200"}, {"Date": "2018-01-22", "Open": "1137.489990", "High": "1159.880005", "Low": "1135.109985", "Close": "1155.810059", "Adj Close": "1155.810059", "Volume": "1618000"}, {"Date": "2018-01-23", "Open": "1159.849976", "High": "1171.626953", "Low": "1158.750000", "Close": "1169.969971", "Adj Close": "1169.969971", "Volume": "1333100"}, {"Date": "2018-01-24", "Open": "1177.329956", "High": "1179.859985", "Low": "1161.050049", "Close": "1164.239990", "Adj Close": "1164.239990", "Volume": "1416600"}, {"Date": "2018-01-25", "Open": "1172.530029", "High": "1175.939941", "Low": "1162.760010", "Close": "1170.369995", "Adj Close": "1170.369995", "Volume": "1480500"}, {"Date": "2018-01-26", "Open": "1175.079956", "High": "1175.839966", "Low": "1158.109985", "Close": "1175.839966", "Adj Close": "1175.839966", "Volume": "2018800"}, {"Date": "2018-01-29", "Open": "1176.479980", "High": "1186.890015", "Low": "1171.979980", "Close": "1175.579956", "Adj Close": "1175.579956", "Volume": "1378900"}, {"Date": "2018-01-30", "Open": "1167.829956", "High": "1176.520020", "Low": "1163.520020", "Close": "1163.689941", "Adj Close": "1163.689941", "Volume": "1556300"}, {"Date": "2018-01-31", "Open": "1170.569946", "High": "1173.000000", "Low": "1159.130005", "Close": "1169.939941", "Adj Close": "1169.939941", "Volume": "1538700"}, {"Date": "2018-02-01", "Open": "1162.609985", "High": "1174.000000", "Low": "1157.520020", "Close": "1167.699951", "Adj Close": "1167.699951", "Volume": "2412100"}, {"Date": "2018-02-02", "Open": "1122.000000", "High": "1123.069946", "Low": "1107.277954", "Close": "1111.900024", "Adj Close": "1111.900024", "Volume": "4857900"}, {"Date": "2018-02-05", "Open": "1090.599976", "High": "1110.000000", "Low": "1052.030029", "Close": "1055.800049", "Adj Close": "1055.800049", "Volume": "3798300"}, {"Date": "2018-02-06", "Open": "1027.180054", "High": "1081.709961", "Low": "1023.137024", "Close": "1080.599976", "Adj Close": "1080.599976", "Volume": "3448000"}, {"Date": "2018-02-07", "Open": "1081.540039", "High": "1081.780029", "Low": "1048.260010", "Close": "1048.579956", "Adj Close": "1048.579956", "Volume": "2369200"}, {"Date": "2018-02-08", "Open": "1055.410034", "High": "1058.619995", "Low": "1000.659973", "Close": "1001.520020", "Adj Close": "1001.520020", "Volume": "2859100"}, {"Date": "2018-02-09", "Open": "1017.250000", "High": "1043.969971", "Low": "992.559998", "Close": "1037.780029", "Adj Close": "1037.780029", "Volume": "3505900"}, {"Date": "2018-02-12", "Open": "1048.000000", "High": "1061.500000", "Low": "1040.927979", "Close": "1051.939941", "Adj Close": "1051.939941", "Volume": "2057700"}, {"Date": "2018-02-13", "Open": "1045.000000", "High": "1058.369995", "Low": "1044.087036", "Close": "1052.099976", "Adj Close": "1052.099976", "Volume": "1265100"}, {"Date": "2018-02-14", "Open": "1048.949951", "High": "1071.719971", "Low": "1046.750000", "Close": "1069.699951", "Adj Close": "1069.699951", "Volume": "1555800"}, {"Date": "2018-02-15", "Open": "1079.069946", "High": "1091.479004", "Low": "1064.339966", "Close": "1089.520020", "Adj Close": "1089.520020", "Volume": "1843400"}, {"Date": "2018-02-16", "Open": "1088.410034", "High": "1104.670044", "Low": "1088.312988", "Close": "1094.800049", "Adj Close": "1094.800049", "Volume": "1679500"}, {"Date": "2018-02-20", "Open": "1090.569946", "High": "1113.949951", "Low": "1088.520020", "Close": "1102.459961", "Adj Close": "1102.459961", "Volume": "1423100"}, {"Date": "2018-02-21", "Open": "1106.469971", "High": "1133.969971", "Low": "1106.329956", "Close": "1111.339966", "Adj Close": "1111.339966", "Volume": "1512900"}, {"Date": "2018-02-22", "Open": "1116.189941", "High": "1122.819946", "Low": "1102.589966", "Close": "1106.630005", "Adj Close": "1106.630005", "Volume": "1317200"}, {"Date": "2018-02-23", "Open": "1112.640015", "High": "1127.280029", "Low": "1104.713989", "Close": "1126.790039", "Adj Close": "1126.790039", "Volume": "1261000"}, {"Date": "2018-02-26", "Open": "1127.800049", "High": "1143.959961", "Low": "1126.694946", "Close": "1143.750000", "Adj Close": "1143.750000", "Volume": "1559100"}, {"Date": "2018-02-27", "Open": "1141.239990", "High": "1144.040039", "Low": "1118.000000", "Close": "1118.290039", "Adj Close": "1118.290039", "Volume": "1774100"}, {"Date": "2018-02-28", "Open": "1123.030029", "High": "1127.530029", "Low": "1103.239990", "Close": "1104.729980", "Adj Close": "1104.729980", "Volume": "1882600"}, {"Date": "2018-03-01", "Open": "1107.869995", "High": "1110.119995", "Low": "1067.000977", "Close": "1069.520020", "Adj Close": "1069.520020", "Volume": "2515900"}, {"Date": "2018-03-02", "Open": "1053.079956", "High": "1081.999023", "Low": "1048.114990", "Close": "1078.920044", "Adj Close": "1078.920044", "Volume": "2271600"}, {"Date": "2018-03-05", "Open": "1075.140015", "High": "1097.099976", "Low": "1069.000000", "Close": "1090.930054", "Adj Close": "1090.930054", "Volume": "1202200"}, {"Date": "2018-03-06", "Open": "1099.219971", "High": "1101.849976", "Low": "1089.775024", "Close": "1095.060059", "Adj Close": "1095.060059", "Volume": "1532800"}, {"Date": "2018-03-07", "Open": "1089.189941", "High": "1112.219971", "Low": "1085.482056", "Close": "1109.640015", "Adj Close": "1109.640015", "Volume": "1292500"}, {"Date": "2018-03-08", "Open": "1115.319946", "High": "1127.599976", "Low": "1112.800049", "Close": "1126.000000", "Adj Close": "1126.000000", "Volume": "1355100"}, {"Date": "2018-03-09", "Open": "1136.000000", "High": "1160.800049", "Low": "1132.461060", "Close": "1160.040039", "Adj Close": "1160.040039", "Volume": "2128000"}, {"Date": "2018-03-12", "Open": "1163.849976", "High": "1177.050049", "Low": "1157.420044", "Close": "1164.500000", "Adj Close": "1164.500000", "Volume": "2172300"}, {"Date": "2018-03-13", "Open": "1170.000000", "High": "1176.760010", "Low": "1133.329956", "Close": "1138.170044", "Adj Close": "1138.170044", "Volume": "1907200"}, {"Date": "2018-03-14", "Open": "1145.209961", "High": "1158.589966", "Low": "1141.439941", "Close": "1149.489990", "Adj Close": "1149.489990", "Volume": "1291400"}, {"Date": "2018-03-15", "Open": "1149.959961", "High": "1161.079956", "Low": "1134.540039", "Close": "1149.579956", "Adj Close": "1149.579956", "Volume": "1395400"}, {"Date": "2018-03-16", "Open": "1154.140015", "High": "1155.880005", "Low": "1131.959961", "Close": "1135.729980", "Adj Close": "1135.729980", "Volume": "3092000"}, {"Date": "2018-03-19", "Open": "1120.010010", "High": "1121.989990", "Low": "1089.010010", "Close": "1099.819946", "Adj Close": "1099.819946", "Volume": "2805900"}, {"Date": "2018-03-20", "Open": "1099.000000", "High": "1105.199951", "Low": "1083.459961", "Close": "1097.709961", "Adj Close": "1097.709961", "Volume": "1831900"}, {"Date": "2018-03-21", "Open": "1092.739990", "High": "1106.300049", "Low": "1085.150024", "Close": "1090.880005", "Adj Close": "1090.880005", "Volume": "1878900"}, {"Date": "2018-03-22", "Open": "1081.880005", "High": "1082.900024", "Low": "1045.910034", "Close": "1049.079956", "Adj Close": "1049.079956", "Volume": "2667000"}, {"Date": "2018-03-23", "Open": "1047.030029", "High": "1063.359985", "Low": "1021.219971", "Close": "1021.570007", "Adj Close": "1021.570007", "Volume": "2156700"}, {"Date": "2018-03-26", "Open": "1046.000000", "High": "1055.630005", "Low": "1008.400024", "Close": "1053.209961", "Adj Close": "1053.209961", "Volume": "2665100"}, {"Date": "2018-03-27", "Open": "1063.000000", "High": "1064.838989", "Low": "996.919983", "Close": "1005.099976", "Adj Close": "1005.099976", "Volume": "3095300"}, {"Date": "2018-03-28", "Open": "998.000000", "High": "1024.229980", "Low": "980.640015", "Close": "1004.559998", "Adj Close": "1004.559998", "Volume": "3369300"}, {"Date": "2018-03-29", "Open": "1011.630005", "High": "1043.000000", "Low": "1002.900024", "Close": "1031.790039", "Adj Close": "1031.790039", "Volume": "2726800"}, {"Date": "2018-04-02", "Open": "1022.820007", "High": "1034.800049", "Low": "990.369995", "Close": "1006.469971", "Adj Close": "1006.469971", "Volume": "2680400"}, {"Date": "2018-04-03", "Open": "1013.909973", "High": "1020.989990", "Low": "994.070007", "Close": "1013.409973", "Adj Close": "1013.409973", "Volume": "2275100"}, {"Date": "2018-04-04", "Open": "993.409973", "High": "1028.718018", "Low": "993.000000", "Close": "1025.140015", "Adj Close": "1025.140015", "Volume": "2484700"}, {"Date": "2018-04-05", "Open": "1041.329956", "High": "1042.790039", "Low": "1020.130981", "Close": "1027.810059", "Adj Close": "1027.810059", "Volume": "1363000"}, {"Date": "2018-04-06", "Open": "1020.000000", "High": "1031.420044", "Low": "1003.030029", "Close": "1007.039978", "Adj Close": "1007.039978", "Volume": "1746400"}, {"Date": "2018-04-09", "Open": "1016.799988", "High": "1039.599976", "Low": "1014.080017", "Close": "1015.450012", "Adj Close": "1015.450012", "Volume": "1751600"}, {"Date": "2018-04-10", "Open": "1026.439941", "High": "1036.280029", "Low": "1011.340027", "Close": "1031.640015", "Adj Close": "1031.640015", "Volume": "1974500"}, {"Date": "2018-04-11", "Open": "1027.989990", "High": "1031.364014", "Low": "1015.869995", "Close": "1019.969971", "Adj Close": "1019.969971", "Volume": "1483900"}, {"Date": "2018-04-12", "Open": "1025.040039", "High": "1040.689941", "Low": "1021.434998", "Close": "1032.510010", "Adj Close": "1032.510010", "Volume": "1357000"}, {"Date": "2018-04-13", "Open": "1040.880005", "High": "1046.420044", "Low": "1022.979980", "Close": "1029.270020", "Adj Close": "1029.270020", "Volume": "1223000"}, {"Date": "2018-04-16", "Open": "1037.000000", "High": "1043.239990", "Low": "1026.739990", "Close": "1037.979980", "Adj Close": "1037.979980", "Volume": "1211200"}, {"Date": "2018-04-17", "Open": "1051.369995", "High": "1077.880005", "Low": "1048.260010", "Close": "1074.160034", "Adj Close": "1074.160034", "Volume": "2320300"}, {"Date": "2018-04-18", "Open": "1077.430054", "High": "1077.430054", "Low": "1066.224976", "Close": "1072.079956", "Adj Close": "1072.079956", "Volume": "1344100"}, {"Date": "2018-04-19", "Open": "1069.400024", "High": "1094.165039", "Low": "1068.180054", "Close": "1087.699951", "Adj Close": "1087.699951", "Volume": "1747700"}, {"Date": "2018-04-20", "Open": "1082.000000", "High": "1092.349976", "Low": "1069.569946", "Close": "1072.959961", "Adj Close": "1072.959961", "Volume": "1889700"}, {"Date": "2018-04-23", "Open": "1077.859985", "High": "1082.719971", "Low": "1060.699951", "Close": "1067.449951", "Adj Close": "1067.449951", "Volume": "2341300"}, {"Date": "2018-04-24", "Open": "1052.000000", "High": "1057.000000", "Low": "1010.590027", "Close": "1019.979980", "Adj Close": "1019.979980", "Volume": "4760300"}, {"Date": "2018-04-25", "Open": "1025.520020", "High": "1032.489990", "Low": "1015.309998", "Close": "1021.179993", "Adj Close": "1021.179993", "Volume": "2391100"}, {"Date": "2018-04-26", "Open": "1029.510010", "High": "1047.979980", "Low": "1018.190002", "Close": "1040.040039", "Adj Close": "1040.040039", "Volume": "2079500"}, {"Date": "2018-04-27", "Open": "1046.000000", "High": "1049.500000", "Low": "1025.589966", "Close": "1030.050049", "Adj Close": "1030.050049", "Volume": "1619800"}, {"Date": "2018-04-30", "Open": "1030.010010", "High": "1037.000000", "Low": "1016.849976", "Close": "1017.330017", "Adj Close": "1017.330017", "Volume": "1671300"}, {"Date": "2018-05-01", "Open": "1013.659973", "High": "1038.469971", "Low": "1008.210022", "Close": "1037.310059", "Adj Close": "1037.310059", "Volume": "1427900"}, {"Date": "2018-05-02", "Open": "1028.099976", "High": "1040.389038", "Low": "1022.869995", "Close": "1024.380005", "Adj Close": "1024.380005", "Volume": "1603100"}, {"Date": "2018-05-03", "Open": "1019.000000", "High": "1029.675049", "Low": "1006.289978", "Close": "1023.719971", "Adj Close": "1023.719971", "Volume": "1815100"}, {"Date": "2018-05-04", "Open": "1016.900024", "High": "1048.510010", "Low": "1016.900024", "Close": "1048.209961", "Adj Close": "1048.209961", "Volume": "1938700"}, {"Date": "2018-05-07", "Open": "1049.229980", "High": "1061.680054", "Low": "1047.099976", "Close": "1054.790039", "Adj Close": "1054.790039", "Volume": "1466100"}, {"Date": "2018-05-08", "Open": "1058.540039", "High": "1060.550049", "Low": "1047.145020", "Close": "1053.910034", "Adj Close": "1053.910034", "Volume": "1217700"}, {"Date": "2018-05-09", "Open": "1058.099976", "High": "1085.439941", "Low": "1056.364990", "Close": "1082.760010", "Adj Close": "1082.760010", "Volume": "2032800"}, {"Date": "2018-05-10", "Open": "1086.030029", "High": "1100.439941", "Low": "1085.640015", "Close": "1097.569946", "Adj Close": "1097.569946", "Volume": "1443000"}, {"Date": "2018-05-11", "Open": "1093.599976", "High": "1101.329956", "Low": "1090.910034", "Close": "1098.260010", "Adj Close": "1098.260010", "Volume": "1253700"}, {"Date": "2018-05-14", "Open": "1100.000000", "High": "1110.750000", "Low": "1099.109985", "Close": "1100.199951", "Adj Close": "1100.199951", "Volume": "1518100"}, {"Date": "2018-05-15", "Open": "1090.000000", "High": "1090.050049", "Low": "1073.469971", "Close": "1079.229980", "Adj Close": "1079.229980", "Volume": "1494900"}, {"Date": "2018-05-16", "Open": "1077.310059", "High": "1089.270020", "Low": "1076.260010", "Close": "1081.770020", "Adj Close": "1081.770020", "Volume": "1097300"}, {"Date": "2018-05-17", "Open": "1079.890015", "High": "1086.869995", "Low": "1073.500000", "Close": "1078.589966", "Adj Close": "1078.589966", "Volume": "1043800"}, {"Date": "2018-05-18", "Open": "1061.859985", "High": "1069.939941", "Low": "1060.680054", "Close": "1066.359985", "Adj Close": "1066.359985", "Volume": "1565200"}, {"Date": "2018-05-21", "Open": "1074.060059", "High": "1088.000000", "Low": "1073.650024", "Close": "1079.579956", "Adj Close": "1079.579956", "Volume": "1023200"}, {"Date": "2018-05-22", "Open": "1083.560059", "High": "1086.589966", "Low": "1066.689941", "Close": "1069.729980", "Adj Close": "1069.729980", "Volume": "1090000"}, {"Date": "2018-05-23", "Open": "1065.130005", "High": "1080.780029", "Low": "1061.709961", "Close": "1079.689941", "Adj Close": "1079.689941", "Volume": "1060700"}, {"Date": "2018-05-24", "Open": "1079.000000", "High": "1080.469971", "Low": "1066.150024", "Close": "1079.239990", "Adj Close": "1079.239990", "Volume": "766800"}, {"Date": "2018-05-25", "Open": "1079.020020", "High": "1082.560059", "Low": "1073.775024", "Close": "1075.660034", "Adj Close": "1075.660034", "Volume": "899400"}, {"Date": "2018-05-29", "Open": "1064.890015", "High": "1073.369995", "Low": "1055.219971", "Close": "1060.319946", "Adj Close": "1060.319946", "Volume": "1865100"}, {"Date": "2018-05-30", "Open": "1063.030029", "High": "1069.209961", "Low": "1056.829956", "Close": "1067.800049", "Adj Close": "1067.800049", "Volume": "1138500"}, {"Date": "2018-05-31", "Open": "1067.560059", "High": "1097.189941", "Low": "1067.560059", "Close": "1084.989990", "Adj Close": "1084.989990", "Volume": "3088300"}, {"Date": "2018-06-01", "Open": "1099.349976", "High": "1120.000000", "Low": "1098.500000", "Close": "1119.500000", "Adj Close": "1119.500000", "Volume": "2421600"}, {"Date": "2018-06-04", "Open": "1122.329956", "High": "1141.890015", "Low": "1122.005005", "Close": "1139.290039", "Adj Close": "1139.290039", "Volume": "1889600"}, {"Date": "2018-06-05", "Open": "1140.989990", "High": "1145.738037", "Low": "1133.189941", "Close": "1139.660034", "Adj Close": "1139.660034", "Volume": "1678000"}, {"Date": "2018-06-06", "Open": "1142.170044", "High": "1143.000000", "Low": "1125.743042", "Close": "1136.880005", "Adj Close": "1136.880005", "Volume": "1698200"}, {"Date": "2018-06-07", "Open": "1131.319946", "High": "1135.819946", "Low": "1116.520020", "Close": "1123.859985", "Adj Close": "1123.859985", "Volume": "1520000"}, {"Date": "2018-06-08", "Open": "1118.180054", "High": "1126.670044", "Low": "1112.150024", "Close": "1120.869995", "Adj Close": "1120.869995", "Volume": "1290800"}, {"Date": "2018-06-11", "Open": "1118.599976", "High": "1137.260010", "Low": "1118.599976", "Close": "1129.989990", "Adj Close": "1129.989990", "Volume": "1079300"}, {"Date": "2018-06-12", "Open": "1131.069946", "High": "1139.790039", "Low": "1130.734985", "Close": "1139.319946", "Adj Close": "1139.319946", "Volume": "912000"}, {"Date": "2018-06-13", "Open": "1141.119995", "High": "1146.500000", "Low": "1133.380005", "Close": "1134.790039", "Adj Close": "1134.790039", "Volume": "1506400"}, {"Date": "2018-06-14", "Open": "1143.849976", "High": "1155.469971", "Low": "1140.640015", "Close": "1152.119995", "Adj Close": "1152.119995", "Volume": "1343400"}, {"Date": "2018-06-15", "Open": "1148.859985", "High": "1153.420044", "Low": "1143.484985", "Close": "1152.260010", "Adj Close": "1152.260010", "Volume": "2122500"}, {"Date": "2018-06-18", "Open": "1143.650024", "High": "1174.310059", "Low": "1143.589966", "Close": "1173.459961", "Adj Close": "1173.459961", "Volume": "1413700"}, {"Date": "2018-06-19", "Open": "1158.500000", "High": "1171.270020", "Low": "1154.010010", "Close": "1168.060059", "Adj Close": "1168.060059", "Volume": "1621000"}, {"Date": "2018-06-20", "Open": "1175.310059", "High": "1186.286011", "Low": "1169.160034", "Close": "1169.839966", "Adj Close": "1169.839966", "Volume": "1648500"}, {"Date": "2018-06-21", "Open": "1174.849976", "High": "1177.295044", "Low": "1152.232056", "Close": "1157.660034", "Adj Close": "1157.660034", "Volume": "1238100"}, {"Date": "2018-06-22", "Open": "1159.140015", "High": "1162.496948", "Low": "1147.260010", "Close": "1155.479980", "Adj Close": "1155.479980", "Volume": "1311000"}, {"Date": "2018-06-25", "Open": "1143.599976", "High": "1143.910034", "Low": "1112.780029", "Close": "1124.810059", "Adj Close": "1124.810059", "Volume": "2157300"}, {"Date": "2018-06-26", "Open": "1128.000000", "High": "1133.209961", "Low": "1116.659058", "Close": "1118.459961", "Adj Close": "1118.459961", "Volume": "1563200"}, {"Date": "2018-06-27", "Open": "1121.339966", "High": "1131.836060", "Low": "1103.619995", "Close": "1103.979980", "Adj Close": "1103.979980", "Volume": "1293900"}, {"Date": "2018-06-28", "Open": "1102.089966", "High": "1122.310059", "Low": "1096.010010", "Close": "1114.219971", "Adj Close": "1114.219971", "Volume": "1072400"}, {"Date": "2018-06-29", "Open": "1120.000000", "High": "1128.227051", "Low": "1115.000000", "Close": "1115.650024", "Adj Close": "1115.650024", "Volume": "1315100"}, {"Date": "2018-07-02", "Open": "1099.000000", "High": "1128.000000", "Low": "1093.800049", "Close": "1127.459961", "Adj Close": "1127.459961", "Volume": "1217300"}, {"Date": "2018-07-03", "Open": "1135.819946", "High": "1135.819946", "Low": "1100.020020", "Close": "1102.890015", "Adj Close": "1102.890015", "Volume": "679000"}, {"Date": "2018-07-05", "Open": "1110.530029", "High": "1127.500000", "Low": "1108.479980", "Close": "1124.270020", "Adj Close": "1124.270020", "Volume": "1066700"}, {"Date": "2018-07-06", "Open": "1123.579956", "High": "1140.930054", "Low": "1120.737061", "Close": "1140.170044", "Adj Close": "1140.170044", "Volume": "996100"}, {"Date": "2018-07-09", "Open": "1148.479980", "High": "1154.670044", "Low": "1143.420044", "Close": "1154.050049", "Adj Close": "1154.050049", "Volume": "909000"}, {"Date": "2018-07-10", "Open": "1156.979980", "High": "1159.589966", "Low": "1149.589966", "Close": "1152.839966", "Adj Close": "1152.839966", "Volume": "798400"}, {"Date": "2018-07-11", "Open": "1144.589966", "High": "1164.290039", "Low": "1141.000000", "Close": "1153.900024", "Adj Close": "1153.900024", "Volume": "1120000"}, {"Date": "2018-07-12", "Open": "1159.890015", "High": "1184.410034", "Low": "1155.935059", "Close": "1183.479980", "Adj Close": "1183.479980", "Volume": "1251900"}, {"Date": "2018-07-13", "Open": "1185.000000", "High": "1195.416992", "Low": "1180.000000", "Close": "1188.819946", "Adj Close": "1188.819946", "Volume": "1221900"}, {"Date": "2018-07-16", "Open": "1189.390015", "High": "1191.000000", "Low": "1179.280029", "Close": "1183.859985", "Adj Close": "1183.859985", "Volume": "1055700"}, {"Date": "2018-07-17", "Open": "1172.219971", "High": "1203.040039", "Low": "1170.599976", "Close": "1198.800049", "Adj Close": "1198.800049", "Volume": "1610400"}, {"Date": "2018-07-18", "Open": "1196.560059", "High": "1204.500000", "Low": "1190.339966", "Close": "1195.880005", "Adj Close": "1195.880005", "Volume": "1393600"}, {"Date": "2018-07-19", "Open": "1191.000000", "High": "1200.000000", "Low": "1183.319946", "Close": "1186.959961", "Adj Close": "1186.959961", "Volume": "1276700"}, {"Date": "2018-07-20", "Open": "1186.959961", "High": "1196.859985", "Low": "1184.219971", "Close": "1184.910034", "Adj Close": "1184.910034", "Volume": "1247400"}, {"Date": "2018-07-23", "Open": "1181.010010", "High": "1206.489990", "Low": "1181.000000", "Close": "1205.500000", "Adj Close": "1205.500000", "Volume": "2619200"}, {"Date": "2018-07-24", "Open": "1262.589966", "High": "1266.000000", "Low": "1235.560059", "Close": "1248.079956", "Adj Close": "1248.079956", "Volume": "3318200"}, {"Date": "2018-07-25", "Open": "1239.130005", "High": "1265.859985", "Low": "1239.130005", "Close": "1263.699951", "Adj Close": "1263.699951", "Volume": "2127800"}, {"Date": "2018-07-26", "Open": "1251.000000", "High": "1269.770996", "Low": "1249.020020", "Close": "1268.329956", "Adj Close": "1268.329956", "Volume": "2405600"}, {"Date": "2018-07-27", "Open": "1271.000000", "High": "1273.890015", "Low": "1231.000000", "Close": "1238.500000", "Adj Close": "1238.500000", "Volume": "2130600"}, {"Date": "2018-07-30", "Open": "1228.010010", "High": "1234.916016", "Low": "1211.469971", "Close": "1219.739990", "Adj Close": "1219.739990", "Volume": "1849900"}, {"Date": "2018-07-31", "Open": "1220.010010", "High": "1227.588013", "Low": "1205.599976", "Close": "1217.260010", "Adj Close": "1217.260010", "Volume": "1644700"}, {"Date": "2018-08-01", "Open": "1228.000000", "High": "1233.469971", "Low": "1210.209961", "Close": "1220.010010", "Adj Close": "1220.010010", "Volume": "1567200"}, {"Date": "2018-08-02", "Open": "1205.900024", "High": "1229.880005", "Low": "1204.790039", "Close": "1226.150024", "Adj Close": "1226.150024", "Volume": "1531300"}, {"Date": "2018-08-03", "Open": "1229.619995", "High": "1230.000000", "Low": "1215.060059", "Close": "1223.709961", "Adj Close": "1223.709961", "Volume": "1089600"}, {"Date": "2018-08-06", "Open": "1225.000000", "High": "1226.088013", "Low": "1215.796997", "Close": "1224.770020", "Adj Close": "1224.770020", "Volume": "1081700"}, {"Date": "2018-08-07", "Open": "1237.000000", "High": "1251.170044", "Low": "1236.170044", "Close": "1242.219971", "Adj Close": "1242.219971", "Volume": "1494000"}, {"Date": "2018-08-08", "Open": "1240.469971", "High": "1256.500000", "Low": "1238.008057", "Close": "1245.609985", "Adj Close": "1245.609985", "Volume": "1370300"}, {"Date": "2018-08-09", "Open": "1249.900024", "High": "1255.541992", "Low": "1246.010010", "Close": "1249.099976", "Adj Close": "1249.099976", "Volume": "848600"}, {"Date": "2018-08-10", "Open": "1243.000000", "High": "1245.694946", "Low": "1232.000000", "Close": "1237.609985", "Adj Close": "1237.609985", "Volume": "1108700"}, {"Date": "2018-08-13", "Open": "1236.979980", "High": "1249.272949", "Low": "1233.640991", "Close": "1235.010010", "Adj Close": "1235.010010", "Volume": "997300"}, {"Date": "2018-08-14", "Open": "1235.189941", "High": "1245.869995", "Low": "1225.109985", "Close": "1242.099976", "Adj Close": "1242.099976", "Volume": "1348100"}, {"Date": "2018-08-15", "Open": "1229.260010", "High": "1235.239990", "Low": "1209.510010", "Close": "1214.380005", "Adj Close": "1214.380005", "Volume": "1828800"}, {"Date": "2018-08-16", "Open": "1224.729980", "High": "1226.000000", "Low": "1202.550049", "Close": "1206.489990", "Adj Close": "1206.489990", "Volume": "1343200"}, {"Date": "2018-08-17", "Open": "1202.030029", "High": "1209.020020", "Low": "1188.239990", "Close": "1200.959961", "Adj Close": "1200.959961", "Volume": "1389600"}, {"Date": "2018-08-20", "Open": "1205.020020", "High": "1211.000000", "Low": "1194.625977", "Close": "1207.770020", "Adj Close": "1207.770020", "Volume": "870800"}, {"Date": "2018-08-21", "Open": "1208.000000", "High": "1217.260010", "Low": "1200.354004", "Close": "1201.619995", "Adj Close": "1201.619995", "Volume": "1205600"}, {"Date": "2018-08-22", "Open": "1200.000000", "High": "1211.839966", "Low": "1199.000000", "Close": "1207.329956", "Adj Close": "1207.329956", "Volume": "887400"}, {"Date": "2018-08-23", "Open": "1207.140015", "High": "1221.280029", "Low": "1204.239990", "Close": "1205.380005", "Adj Close": "1205.380005", "Volume": "992600"}, {"Date": "2018-08-24", "Open": "1208.819946", "High": "1221.650024", "Low": "1206.359009", "Close": "1220.650024", "Adj Close": "1220.650024", "Volume": "946600"}, {"Date": "2018-08-27", "Open": "1227.599976", "High": "1243.089966", "Low": "1225.715942", "Close": "1241.819946", "Adj Close": "1241.819946", "Volume": "1156300"}, {"Date": "2018-08-28", "Open": "1241.290039", "High": "1242.545044", "Low": "1228.689941", "Close": "1231.150024", "Adj Close": "1231.150024", "Volume": "1304000"}, {"Date": "2018-08-29", "Open": "1237.449951", "High": "1250.660034", "Low": "1236.359009", "Close": "1249.300049", "Adj Close": "1249.300049", "Volume": "1298900"}, {"Date": "2018-08-30", "Open": "1244.229980", "High": "1253.635010", "Low": "1232.589966", "Close": "1239.119995", "Adj Close": "1239.119995", "Volume": "1331400"}, {"Date": "2018-08-31", "Open": "1234.979980", "High": "1238.660034", "Low": "1211.285034", "Close": "1218.189941", "Adj Close": "1218.189941", "Volume": "1816400"}, {"Date": "2018-09-04", "Open": "1204.270020", "High": "1212.989990", "Low": "1192.500000", "Close": "1197.000000", "Adj Close": "1197.000000", "Volume": "1831000"}, {"Date": "2018-09-05", "Open": "1193.800049", "High": "1199.010010", "Low": "1162.000000", "Close": "1186.479980", "Adj Close": "1186.479980", "Volume": "2061300"}, {"Date": "2018-09-06", "Open": "1186.300049", "High": "1186.300049", "Low": "1152.000000", "Close": "1171.439941", "Adj Close": "1171.439941", "Volume": "1888500"}, {"Date": "2018-09-07", "Open": "1158.670044", "High": "1175.260010", "Low": "1157.214966", "Close": "1164.829956", "Adj Close": "1164.829956", "Volume": "1401300"}, {"Date": "2018-09-10", "Open": "1172.189941", "High": "1174.540039", "Low": "1160.109985", "Close": "1164.640015", "Adj Close": "1164.640015", "Volume": "1115400"}, {"Date": "2018-09-11", "Open": "1161.630005", "High": "1178.680054", "Low": "1156.239990", "Close": "1177.359985", "Adj Close": "1177.359985", "Volume": "1209300"}, {"Date": "2018-09-12", "Open": "1172.719971", "High": "1178.609985", "Low": "1158.359985", "Close": "1162.819946", "Adj Close": "1162.819946", "Volume": "1295500"}, {"Date": "2018-09-13", "Open": "1170.739990", "High": "1178.609985", "Low": "1162.849976", "Close": "1175.329956", "Adj Close": "1175.329956", "Volume": "1431200"}, {"Date": "2018-09-14", "Open": "1179.099976", "High": "1180.425049", "Low": "1168.329956", "Close": "1172.530029", "Adj Close": "1172.530029", "Volume": "944000"}, {"Date": "2018-09-17", "Open": "1170.140015", "High": "1177.239990", "Low": "1154.030029", "Close": "1156.050049", "Adj Close": "1156.050049", "Volume": "1306500"}, {"Date": "2018-09-18", "Open": "1157.089966", "High": "1176.079956", "Low": "1157.089966", "Close": "1161.219971", "Adj Close": "1161.219971", "Volume": "1203600"}, {"Date": "2018-09-19", "Open": "1164.979980", "High": "1173.209961", "Low": "1154.579956", "Close": "1171.089966", "Adj Close": "1171.089966", "Volume": "1191400"}, {"Date": "2018-09-20", "Open": "1179.989990", "High": "1189.890015", "Low": "1173.359985", "Close": "1186.869995", "Adj Close": "1186.869995", "Volume": "1225400"}, {"Date": "2018-09-21", "Open": "1192.000000", "High": "1192.209961", "Low": "1166.040039", "Close": "1166.089966", "Adj Close": "1166.089966", "Volume": "4405600"}, {"Date": "2018-09-24", "Open": "1157.170044", "High": "1178.000000", "Low": "1146.910034", "Close": "1173.369995", "Adj Close": "1173.369995", "Volume": "1271000"}, {"Date": "2018-09-25", "Open": "1176.150024", "High": "1186.880005", "Low": "1168.000000", "Close": "1184.650024", "Adj Close": "1184.650024", "Volume": "977700"}, {"Date": "2018-09-26", "Open": "1185.150024", "High": "1194.229980", "Low": "1174.765015", "Close": "1180.489990", "Adj Close": "1180.489990", "Volume": "1462300"}, {"Date": "2018-09-27", "Open": "1186.729980", "High": "1202.099976", "Low": "1183.630005", "Close": "1194.640015", "Adj Close": "1194.640015", "Volume": "1260800"}, {"Date": "2018-09-28", "Open": "1191.869995", "High": "1195.410034", "Low": "1184.500000", "Close": "1193.469971", "Adj Close": "1193.469971", "Volume": "1380600"}, {"Date": "2018-10-01", "Open": "1199.890015", "High": "1209.900024", "Low": "1190.300049", "Close": "1195.310059", "Adj Close": "1195.310059", "Volume": "1357600"}, {"Date": "2018-10-02", "Open": "1190.959961", "High": "1209.959961", "Low": "1186.630005", "Close": "1200.109985", "Adj Close": "1200.109985", "Volume": "1687900"}, {"Date": "2018-10-03", "Open": "1205.000000", "High": "1206.410034", "Low": "1193.829956", "Close": "1202.949951", "Adj Close": "1202.949951", "Volume": "1256200"}, {"Date": "2018-10-04", "Open": "1195.329956", "High": "1197.510010", "Low": "1155.576050", "Close": "1168.189941", "Adj Close": "1168.189941", "Volume": "2209500"}, {"Date": "2018-10-05", "Open": "1167.500000", "High": "1173.500000", "Low": "1145.119995", "Close": "1157.349976", "Adj Close": "1157.349976", "Volume": "1184300"}, {"Date": "2018-10-08", "Open": "1150.109985", "High": "1168.000000", "Low": "1127.364014", "Close": "1148.969971", "Adj Close": "1148.969971", "Volume": "1932400"}, {"Date": "2018-10-09", "Open": "1146.150024", "High": "1154.349976", "Low": "1137.572021", "Close": "1138.819946", "Adj Close": "1138.819946", "Volume": "1308700"}, {"Date": "2018-10-10", "Open": "1131.079956", "High": "1132.170044", "Low": "1081.130005", "Close": "1081.219971", "Adj Close": "1081.219971", "Volume": "2675700"}, {"Date": "2018-10-11", "Open": "1072.939941", "High": "1106.400024", "Low": "1068.270020", "Close": "1079.319946", "Adj Close": "1079.319946", "Volume": "2949000"}, {"Date": "2018-10-12", "Open": "1108.000000", "High": "1115.000000", "Low": "1086.401978", "Close": "1110.079956", "Adj Close": "1110.079956", "Volume": "2101300"}, {"Date": "2018-10-15", "Open": "1108.910034", "High": "1113.446045", "Low": "1089.000000", "Close": "1092.250000", "Adj Close": "1092.250000", "Volume": "1372400"}, {"Date": "2018-10-16", "Open": "1104.589966", "High": "1124.219971", "Low": "1102.500000", "Close": "1121.280029", "Adj Close": "1121.280029", "Volume": "1928500"}, {"Date": "2018-10-17", "Open": "1126.459961", "High": "1128.989990", "Low": "1102.189941", "Close": "1115.689941", "Adj Close": "1115.689941", "Volume": "1467200"}, {"Date": "2018-10-18", "Open": "1121.839966", "High": "1121.839966", "Low": "1077.089966", "Close": "1087.969971", "Adj Close": "1087.969971", "Volume": "2094500"}, {"Date": "2018-10-19", "Open": "1093.369995", "High": "1110.359985", "Low": "1087.750000", "Close": "1096.459961", "Adj Close": "1096.459961", "Volume": "1267600"}, {"Date": "2018-10-22", "Open": "1103.060059", "High": "1112.229980", "Low": "1091.000000", "Close": "1101.160034", "Adj Close": "1101.160034", "Volume": "1514200"}, {"Date": "2018-10-23", "Open": "1080.890015", "High": "1107.890015", "Low": "1070.000000", "Close": "1103.689941", "Adj Close": "1103.689941", "Volume": "1848700"}, {"Date": "2018-10-24", "Open": "1104.250000", "High": "1106.119995", "Low": "1048.739990", "Close": "1050.709961", "Adj Close": "1050.709961", "Volume": "1982400"}, {"Date": "2018-10-25", "Open": "1071.790039", "High": "1110.979980", "Low": "1069.550049", "Close": "1095.569946", "Adj Close": "1095.569946", "Volume": "2545800"}, {"Date": "2018-10-26", "Open": "1037.030029", "High": "1106.530029", "Low": "1034.089966", "Close": "1071.469971", "Adj Close": "1071.469971", "Volume": "4187600"}, {"Date": "2018-10-29", "Open": "1082.469971", "High": "1097.040039", "Low": "995.830017", "Close": "1020.080017", "Adj Close": "1020.080017", "Volume": "3880700"}, {"Date": "2018-10-30", "Open": "1008.460022", "High": "1037.489990", "Low": "1000.750000", "Close": "1036.209961", "Adj Close": "1036.209961", "Volume": "3212700"}, {"Date": "2018-10-31", "Open": "1059.810059", "High": "1091.939941", "Low": "1057.000000", "Close": "1076.770020", "Adj Close": "1076.770020", "Volume": "2529800"}, {"Date": "2018-11-01", "Open": "1075.800049", "High": "1083.974976", "Low": "1062.459961", "Close": "1070.000000", "Adj Close": "1070.000000", "Volume": "1482000"}, {"Date": "2018-11-02", "Open": "1073.729980", "High": "1082.974976", "Low": "1054.609985", "Close": "1057.790039", "Adj Close": "1057.790039", "Volume": "1839000"}, {"Date": "2018-11-05", "Open": "1055.000000", "High": "1058.469971", "Low": "1021.239990", "Close": "1040.089966", "Adj Close": "1040.089966", "Volume": "2441400"}, {"Date": "2018-11-06", "Open": "1039.479980", "High": "1064.344971", "Low": "1038.069946", "Close": "1055.810059", "Adj Close": "1055.810059", "Volume": "1233300"}, {"Date": "2018-11-07", "Open": "1069.000000", "High": "1095.459961", "Low": "1065.900024", "Close": "1093.390015", "Adj Close": "1093.390015", "Volume": "2058400"}, {"Date": "2018-11-08", "Open": "1091.380005", "High": "1093.270020", "Low": "1072.204956", "Close": "1082.400024", "Adj Close": "1082.400024", "Volume": "1488200"}, {"Date": "2018-11-09", "Open": "1073.989990", "High": "1075.560059", "Low": "1053.109985", "Close": "1066.150024", "Adj Close": "1066.150024", "Volume": "1343200"}, {"Date": "2018-11-12", "Open": "1061.390015", "High": "1062.119995", "Low": "1031.000000", "Close": "1038.630005", "Adj Close": "1038.630005", "Volume": "1471800"}, {"Date": "2018-11-13", "Open": "1043.290039", "High": "1056.604980", "Low": "1031.150024", "Close": "1036.050049", "Adj Close": "1036.050049", "Volume": "1513700"}, {"Date": "2018-11-14", "Open": "1050.000000", "High": "1054.563965", "Low": "1031.000000", "Close": "1043.660034", "Adj Close": "1043.660034", "Volume": "1565900"}, {"Date": "2018-11-15", "Open": "1044.709961", "High": "1071.849976", "Low": "1031.780029", "Close": "1064.709961", "Adj Close": "1064.709961", "Volume": "1836100"}, {"Date": "2018-11-16", "Open": "1059.410034", "High": "1067.000000", "Low": "1048.979980", "Close": "1061.489990", "Adj Close": "1061.489990", "Volume": "1658100"}, {"Date": "2018-11-19", "Open": "1057.199951", "High": "1060.790039", "Low": "1016.260010", "Close": "1020.000000", "Adj Close": "1020.000000", "Volume": "1858600"}, {"Date": "2018-11-20", "Open": "1000.000000", "High": "1031.739990", "Low": "996.020020", "Close": "1025.760010", "Adj Close": "1025.760010", "Volume": "2449100"}, {"Date": "2018-11-21", "Open": "1036.760010", "High": "1048.560059", "Low": "1033.469971", "Close": "1037.609985", "Adj Close": "1037.609985", "Volume": "1534300"}, {"Date": "2018-11-23", "Open": "1030.000000", "High": "1037.589966", "Low": "1022.398987", "Close": "1023.880005", "Adj Close": "1023.880005", "Volume": "691500"}, {"Date": "2018-11-26", "Open": "1038.349976", "High": "1049.310059", "Low": "1033.910034", "Close": "1048.619995", "Adj Close": "1048.619995", "Volume": "1942800"}, {"Date": "2018-11-27", "Open": "1041.000000", "High": "1057.579956", "Low": "1038.489990", "Close": "1044.410034", "Adj Close": "1044.410034", "Volume": "1803200"}, {"Date": "2018-11-28", "Open": "1048.760010", "High": "1086.839966", "Low": "1035.760010", "Close": "1086.229980", "Adj Close": "1086.229980", "Volume": "2475400"}, {"Date": "2018-11-29", "Open": "1076.079956", "High": "1094.244995", "Low": "1076.000000", "Close": "1088.300049", "Adj Close": "1088.300049", "Volume": "1468900"}, {"Date": "2018-11-30", "Open": "1089.069946", "High": "1095.569946", "Low": "1077.880005", "Close": "1094.430054", "Adj Close": "1094.430054", "Volume": "2580200"}, {"Date": "2018-12-03", "Open": "1123.140015", "High": "1124.650024", "Low": "1103.665039", "Close": "1106.430054", "Adj Close": "1106.430054", "Volume": "1991200"}, {"Date": "2018-12-04", "Open": "1103.119995", "High": "1104.420044", "Low": "1049.979980", "Close": "1050.819946", "Adj Close": "1050.819946", "Volume": "2345200"}, {"Date": "2018-12-06", "Open": "1034.260010", "High": "1071.199951", "Low": "1030.770020", "Close": "1068.729980", "Adj Close": "1068.729980", "Volume": "2769200"}, {"Date": "2018-12-07", "Open": "1060.010010", "High": "1075.260010", "Low": "1028.500000", "Close": "1036.579956", "Adj Close": "1036.579956", "Volume": "2101200"}, {"Date": "2018-12-10", "Open": "1035.050049", "High": "1048.449951", "Low": "1023.289978", "Close": "1039.550049", "Adj Close": "1039.550049", "Volume": "1807700"}, {"Date": "2018-12-11", "Open": "1056.489990", "High": "1060.599976", "Low": "1039.839966", "Close": "1051.750000", "Adj Close": "1051.750000", "Volume": "1394700"}, {"Date": "2018-12-12", "Open": "1068.000000", "High": "1081.650024", "Low": "1062.790039", "Close": "1063.680054", "Adj Close": "1063.680054", "Volume": "1523800"}, {"Date": "2018-12-13", "Open": "1068.069946", "High": "1079.760010", "Low": "1053.930054", "Close": "1061.900024", "Adj Close": "1061.900024", "Volume": "1329800"}, {"Date": "2018-12-14", "Open": "1049.979980", "High": "1062.599976", "Low": "1040.790039", "Close": "1042.099976", "Adj Close": "1042.099976", "Volume": "1686600"}, {"Date": "2018-12-17", "Open": "1037.510010", "High": "1053.150024", "Low": "1007.900024", "Close": "1016.530029", "Adj Close": "1016.530029", "Volume": "2385400"}, {"Date": "2018-12-18", "Open": "1026.089966", "High": "1049.479980", "Low": "1021.440002", "Close": "1028.709961", "Adj Close": "1028.709961", "Volume": "2192500"}, {"Date": "2018-12-19", "Open": "1033.989990", "High": "1062.000000", "Low": "1008.049988", "Close": "1023.010010", "Adj Close": "1023.010010", "Volume": "2479300"}, {"Date": "2018-12-20", "Open": "1018.130005", "High": "1034.219971", "Low": "996.359985", "Close": "1009.409973", "Adj Close": "1009.409973", "Volume": "2673500"}, {"Date": "2018-12-21", "Open": "1015.299988", "High": "1024.020020", "Low": "973.690002", "Close": "979.539978", "Adj Close": "979.539978", "Volume": "4596000"}, {"Date": "2018-12-24", "Open": "973.900024", "High": "1003.539978", "Low": "970.109985", "Close": "976.219971", "Adj Close": "976.219971", "Volume": "1590300"}, {"Date": "2018-12-26", "Open": "989.010010", "High": "1040.000000", "Low": "983.000000", "Close": "1039.459961", "Adj Close": "1039.459961", "Volume": "2373300"}, {"Date": "2018-12-27", "Open": "1017.150024", "High": "1043.890015", "Low": "997.000000", "Close": "1043.880005", "Adj Close": "1043.880005", "Volume": "2109800"}, {"Date": "2018-12-28", "Open": "1049.619995", "High": "1055.560059", "Low": "1033.099976", "Close": "1037.079956", "Adj Close": "1037.079956", "Volume": "1414800"}, {"Date": "2018-12-31", "Open": "1050.959961", "High": "1052.699951", "Low": "1023.590027", "Close": "1035.609985", "Adj Close": "1035.609985", "Volume": "1493300"}, {"Date": "2019-01-02", "Open": "1016.570007", "High": "1052.319946", "Low": "1015.710022", "Close": "1045.849976", "Adj Close": "1045.849976", "Volume": "1532600"}, {"Date": "2019-01-03", "Open": "1041.000000", "High": "1056.979980", "Low": "1014.070007", "Close": "1016.059998", "Adj Close": "1016.059998", "Volume": "1841100"}, {"Date": "2019-01-04", "Open": "1032.589966", "High": "1070.839966", "Low": "1027.417969", "Close": "1070.709961", "Adj Close": "1070.709961", "Volume": "2093900"}, {"Date": "2019-01-07", "Open": "1071.500000", "High": "1074.000000", "Low": "1054.760010", "Close": "1068.390015", "Adj Close": "1068.390015", "Volume": "1981900"}, {"Date": "2019-01-08", "Open": "1076.109985", "High": "1084.560059", "Low": "1060.530029", "Close": "1076.280029", "Adj Close": "1076.280029", "Volume": "1764900"}, {"Date": "2019-01-09", "Open": "1081.650024", "High": "1082.630005", "Low": "1066.400024", "Close": "1074.660034", "Adj Close": "1074.660034", "Volume": "1199300"}, {"Date": "2019-01-10", "Open": "1067.660034", "High": "1071.150024", "Low": "1057.709961", "Close": "1070.329956", "Adj Close": "1070.329956", "Volume": "1456400"}, {"Date": "2019-01-11", "Open": "1063.180054", "High": "1063.775024", "Low": "1048.479980", "Close": "1057.189941", "Adj Close": "1057.189941", "Volume": "1520800"}, {"Date": "2019-01-14", "Open": "1046.920044", "High": "1051.530029", "Low": "1041.255005", "Close": "1044.689941", "Adj Close": "1044.689941", "Volume": "1144300"}, {"Date": "2019-01-15", "Open": "1050.170044", "High": "1080.050049", "Low": "1047.339966", "Close": "1077.150024", "Adj Close": "1077.150024", "Volume": "1463600"}, {"Date": "2019-01-16", "Open": "1080.000000", "High": "1092.375000", "Low": "1079.339966", "Close": "1080.969971", "Adj Close": "1080.969971", "Volume": "1331800"}, {"Date": "2019-01-17", "Open": "1079.469971", "High": "1091.800049", "Low": "1073.500000", "Close": "1089.900024", "Adj Close": "1089.900024", "Volume": "1242700"}, {"Date": "2019-01-18", "Open": "1100.000000", "High": "1108.352051", "Low": "1090.900024", "Close": "1098.260010", "Adj Close": "1098.260010", "Volume": "1955600"}, {"Date": "2019-01-22", "Open": "1088.000000", "High": "1091.510010", "Low": "1063.469971", "Close": "1070.520020", "Adj Close": "1070.520020", "Volume": "1613500"}, {"Date": "2019-01-23", "Open": "1077.349976", "High": "1084.930054", "Low": "1059.750000", "Close": "1075.569946", "Adj Close": "1075.569946", "Volume": "967000"}, {"Date": "2019-01-24", "Open": "1076.479980", "High": "1079.474976", "Low": "1060.699951", "Close": "1073.900024", "Adj Close": "1073.900024", "Volume": "1361300"}, {"Date": "2019-01-25", "Open": "1085.000000", "High": "1094.000000", "Low": "1081.819946", "Close": "1090.989990", "Adj Close": "1090.989990", "Volume": "1119100"}, {"Date": "2019-01-28", "Open": "1080.109985", "High": "1083.000000", "Low": "1063.800049", "Close": "1070.079956", "Adj Close": "1070.079956", "Volume": "1284300"}, {"Date": "2019-01-29", "Open": "1072.680054", "High": "1075.150024", "Low": "1055.864990", "Close": "1060.619995", "Adj Close": "1060.619995", "Volume": "1021800"}, {"Date": "2019-01-30", "Open": "1068.430054", "High": "1091.000000", "Low": "1066.849976", "Close": "1089.060059", "Adj Close": "1089.060059", "Volume": "1279800"}, {"Date": "2019-01-31", "Open": "1103.000000", "High": "1117.329956", "Low": "1095.410034", "Close": "1116.369995", "Adj Close": "1116.369995", "Volume": "1538300"}, {"Date": "2019-02-01", "Open": "1112.400024", "High": "1125.000000", "Low": "1104.890015", "Close": "1110.750000", "Adj Close": "1110.750000", "Volume": "1462200"}, {"Date": "2019-02-04", "Open": "1112.660034", "High": "1132.800049", "Low": "1109.020020", "Close": "1132.800049", "Adj Close": "1132.800049", "Volume": "2576500"}, {"Date": "2019-02-05", "Open": "1124.839966", "High": "1146.849976", "Low": "1117.248047", "Close": "1145.989990", "Adj Close": "1145.989990", "Volume": "3552200"}, {"Date": "2019-02-06", "Open": "1139.569946", "High": "1147.000000", "Low": "1112.770020", "Close": "1115.229980", "Adj Close": "1115.229980", "Volume": "2105600"}, {"Date": "2019-02-07", "Open": "1104.160034", "High": "1104.839966", "Low": "1086.000000", "Close": "1098.709961", "Adj Close": "1098.709961", "Volume": "2044800"}, {"Date": "2019-02-08", "Open": "1087.000000", "High": "1098.910034", "Low": "1086.550049", "Close": "1095.060059", "Adj Close": "1095.060059", "Volume": "1075800"}, {"Date": "2019-02-11", "Open": "1096.949951", "High": "1105.944946", "Low": "1092.859985", "Close": "1095.010010", "Adj Close": "1095.010010", "Volume": "1065200"}, {"Date": "2019-02-12", "Open": "1106.800049", "High": "1125.295044", "Low": "1105.849976", "Close": "1121.369995", "Adj Close": "1121.369995", "Volume": "1609100"}, {"Date": "2019-02-13", "Open": "1124.989990", "High": "1134.729980", "Low": "1118.500000", "Close": "1120.160034", "Adj Close": "1120.160034", "Volume": "1049800"}, {"Date": "2019-02-14", "Open": "1118.050049", "High": "1128.229980", "Low": "1110.444946", "Close": "1121.670044", "Adj Close": "1121.670044", "Volume": "947600"}, {"Date": "2019-02-15", "Open": "1130.079956", "High": "1131.670044", "Low": "1110.650024", "Close": "1113.650024", "Adj Close": "1113.650024", "Volume": "1449800"}, {"Date": "2019-02-19", "Open": "1110.000000", "High": "1121.890015", "Low": "1110.000000", "Close": "1118.560059", "Adj Close": "1118.560059", "Volume": "1046400"}, {"Date": "2019-02-20", "Open": "1119.989990", "High": "1123.410034", "Low": "1105.280029", "Close": "1113.800049", "Adj Close": "1113.800049", "Volume": "1087800"}, {"Date": "2019-02-21", "Open": "1110.839966", "High": "1111.939941", "Low": "1092.520020", "Close": "1096.969971", "Adj Close": "1096.969971", "Volume": "1415100"}, {"Date": "2019-02-22", "Open": "1100.900024", "High": "1111.239990", "Low": "1095.599976", "Close": "1110.369995", "Adj Close": "1110.369995", "Volume": "1049500"}, {"Date": "2019-02-25", "Open": "1116.000000", "High": "1118.540039", "Low": "1107.270020", "Close": "1109.400024", "Adj Close": "1109.400024", "Volume": "1413100"}, {"Date": "2019-02-26", "Open": "1105.750000", "High": "1119.510010", "Low": "1099.920044", "Close": "1115.130005", "Adj Close": "1115.130005", "Volume": "1471300"}, {"Date": "2019-02-27", "Open": "1106.949951", "High": "1117.979980", "Low": "1101.000000", "Close": "1116.050049", "Adj Close": "1116.050049", "Volume": "968400"}, {"Date": "2019-02-28", "Open": "1111.300049", "High": "1127.650024", "Low": "1111.010010", "Close": "1119.920044", "Adj Close": "1119.920044", "Volume": "1542500"}, {"Date": "2019-03-01", "Open": "1124.900024", "High": "1142.969971", "Low": "1124.750000", "Close": "1140.989990", "Adj Close": "1140.989990", "Volume": "1450300"}, {"Date": "2019-03-04", "Open": "1146.989990", "High": "1158.280029", "Low": "1130.689941", "Close": "1147.800049", "Adj Close": "1147.800049", "Volume": "1446000"}, {"Date": "2019-03-05", "Open": "1150.060059", "High": "1169.609985", "Low": "1146.194946", "Close": "1162.030029", "Adj Close": "1162.030029", "Volume": "1443200"}, {"Date": "2019-03-06", "Open": "1162.489990", "High": "1167.566040", "Low": "1155.489990", "Close": "1157.859985", "Adj Close": "1157.859985", "Volume": "1099300"}, {"Date": "2019-03-07", "Open": "1155.719971", "High": "1156.755005", "Low": "1134.910034", "Close": "1143.300049", "Adj Close": "1143.300049", "Volume": "1166600"}, {"Date": "2019-03-08", "Open": "1126.729980", "High": "1147.079956", "Low": "1123.300049", "Close": "1142.319946", "Adj Close": "1142.319946", "Volume": "1212400"}, {"Date": "2019-03-11", "Open": "1144.449951", "High": "1176.189941", "Low": "1144.449951", "Close": "1175.760010", "Adj Close": "1175.760010", "Volume": "1719200"}, {"Date": "2019-03-12", "Open": "1178.260010", "High": "1200.000000", "Low": "1178.260010", "Close": "1193.199951", "Adj Close": "1193.199951", "Volume": "2013100"}, {"Date": "2019-03-13", "Open": "1200.645020", "High": "1200.930054", "Low": "1191.939941", "Close": "1193.319946", "Adj Close": "1193.319946", "Volume": "1435900"}, {"Date": "2019-03-14", "Open": "1194.510010", "High": "1197.880005", "Low": "1184.479980", "Close": "1185.550049", "Adj Close": "1185.550049", "Volume": "1172800"}, {"Date": "2019-03-15", "Open": "1193.380005", "High": "1196.569946", "Low": "1182.609985", "Close": "1184.459961", "Adj Close": "1184.459961", "Volume": "2461800"}, {"Date": "2019-03-18", "Open": "1183.300049", "High": "1190.000000", "Low": "1177.421021", "Close": "1184.260010", "Adj Close": "1184.260010", "Volume": "1292600"}, {"Date": "2019-03-19", "Open": "1188.810059", "High": "1200.000000", "Low": "1185.869995", "Close": "1198.849976", "Adj Close": "1198.849976", "Volume": "1520700"}, {"Date": "2019-03-20", "Open": "1197.349976", "High": "1227.140015", "Low": "1196.170044", "Close": "1223.969971", "Adj Close": "1223.969971", "Volume": "2227400"}, {"Date": "2019-03-21", "Open": "1216.000000", "High": "1231.790039", "Low": "1213.150024", "Close": "1231.540039", "Adj Close": "1231.540039", "Volume": "1204000"}, {"Date": "2019-03-22", "Open": "1226.319946", "High": "1230.000000", "Low": "1202.824951", "Close": "1205.500000", "Adj Close": "1205.500000", "Volume": "1714200"}, {"Date": "2019-03-25", "Open": "1196.930054", "High": "1206.397949", "Low": "1187.040039", "Close": "1193.000000", "Adj Close": "1193.000000", "Volume": "1496800"}, {"Date": "2019-03-26", "Open": "1198.530029", "High": "1202.829956", "Low": "1176.719971", "Close": "1184.619995", "Adj Close": "1184.619995", "Volume": "1901200"}, {"Date": "2019-03-27", "Open": "1185.500000", "High": "1187.558960", "Low": "1159.369995", "Close": "1173.020020", "Adj Close": "1173.020020", "Volume": "1400200"}, {"Date": "2019-03-28", "Open": "1171.540039", "High": "1171.564941", "Low": "1159.431030", "Close": "1168.489990", "Adj Close": "1168.489990", "Volume": "961700"}, {"Date": "2019-03-29", "Open": "1174.900024", "High": "1178.989990", "Low": "1162.880005", "Close": "1173.310059", "Adj Close": "1173.310059", "Volume": "1269900"}, {"Date": "2019-04-01", "Open": "1184.099976", "High": "1196.660034", "Low": "1182.000000", "Close": "1194.430054", "Adj Close": "1194.430054", "Volume": "1252500"}, {"Date": "2019-04-02", "Open": "1195.319946", "High": "1201.349976", "Low": "1185.709961", "Close": "1200.489990", "Adj Close": "1200.489990", "Volume": "827900"}, {"Date": "2019-04-03", "Open": "1207.479980", "High": "1216.300049", "Low": "1200.500000", "Close": "1205.920044", "Adj Close": "1205.920044", "Volume": "1014300"}, {"Date": "2019-04-04", "Open": "1205.939941", "High": "1215.670044", "Low": "1204.130005", "Close": "1215.000000", "Adj Close": "1215.000000", "Volume": "950000"}, {"Date": "2019-04-05", "Open": "1214.989990", "High": "1216.219971", "Low": "1205.030029", "Close": "1207.150024", "Adj Close": "1207.150024", "Volume": "907200"}, {"Date": "2019-04-08", "Open": "1207.890015", "High": "1208.689941", "Low": "1199.859985", "Close": "1203.839966", "Adj Close": "1203.839966", "Volume": "860200"}, {"Date": "2019-04-09", "Open": "1196.000000", "High": "1202.290039", "Low": "1193.079956", "Close": "1197.250000", "Adj Close": "1197.250000", "Volume": "876400"}, {"Date": "2019-04-10", "Open": "1200.680054", "High": "1203.785034", "Low": "1196.435059", "Close": "1202.160034", "Adj Close": "1202.160034", "Volume": "724600"}, {"Date": "2019-04-11", "Open": "1203.959961", "High": "1207.959961", "Low": "1200.130005", "Close": "1204.619995", "Adj Close": "1204.619995", "Volume": "710200"}, {"Date": "2019-04-12", "Open": "1210.000000", "High": "1218.349976", "Low": "1208.109985", "Close": "1217.869995", "Adj Close": "1217.869995", "Volume": "933400"}, {"Date": "2019-04-15", "Open": "1218.000000", "High": "1224.199951", "Low": "1209.109985", "Close": "1221.099976", "Adj Close": "1221.099976", "Volume": "1187400"}, {"Date": "2019-04-16", "Open": "1225.000000", "High": "1230.819946", "Low": "1220.119995", "Close": "1227.130005", "Adj Close": "1227.130005", "Volume": "856300"}, {"Date": "2019-04-17", "Open": "1233.000000", "High": "1240.560059", "Low": "1227.819946", "Close": "1236.339966", "Adj Close": "1236.339966", "Volume": "1221900"}, {"Date": "2019-04-18", "Open": "1239.180054", "High": "1242.000000", "Low": "1234.609985", "Close": "1236.369995", "Adj Close": "1236.369995", "Volume": "1331800"}, {"Date": "2019-04-22", "Open": "1235.989990", "High": "1249.089966", "Low": "1228.310059", "Close": "1248.839966", "Adj Close": "1248.839966", "Volume": "807300"}, {"Date": "2019-04-23", "Open": "1250.689941", "High": "1269.000000", "Low": "1246.380005", "Close": "1264.550049", "Adj Close": "1264.550049", "Volume": "1319900"}, {"Date": "2019-04-24", "Open": "1264.119995", "High": "1268.010010", "Low": "1255.000000", "Close": "1256.000000", "Adj Close": "1256.000000", "Volume": "1018800"}, {"Date": "2019-04-25", "Open": "1264.770020", "High": "1267.407959", "Low": "1252.030029", "Close": "1263.449951", "Adj Close": "1263.449951", "Volume": "1107300"}, {"Date": "2019-04-26", "Open": "1269.000000", "High": "1273.069946", "Low": "1260.319946", "Close": "1272.180054", "Adj Close": "1272.180054", "Volume": "1241400"}, {"Date": "2019-04-29", "Open": "1274.000000", "High": "1289.270020", "Low": "1266.295044", "Close": "1287.579956", "Adj Close": "1287.579956", "Volume": "2499400"}, {"Date": "2019-04-30", "Open": "1185.000000", "High": "1192.810059", "Low": "1175.000000", "Close": "1188.479980", "Adj Close": "1188.479980", "Volume": "6207000"}, {"Date": "2019-05-01", "Open": "1188.050049", "High": "1188.050049", "Low": "1167.180054", "Close": "1168.079956", "Adj Close": "1168.079956", "Volume": "2639200"}, {"Date": "2019-05-02", "Open": "1167.760010", "High": "1174.189941", "Low": "1155.001953", "Close": "1162.609985", "Adj Close": "1162.609985", "Volume": "1944800"}, {"Date": "2019-05-03", "Open": "1173.650024", "High": "1186.800049", "Low": "1169.000000", "Close": "1185.400024", "Adj Close": "1185.400024", "Volume": "1980700"}, {"Date": "2019-05-06", "Open": "1166.260010", "High": "1190.849976", "Low": "1166.260010", "Close": "1189.390015", "Adj Close": "1189.390015", "Volume": "1563900"}, {"Date": "2019-05-07", "Open": "1180.469971", "High": "1190.439941", "Low": "1161.040039", "Close": "1174.099976", "Adj Close": "1174.099976", "Volume": "1551400"}, {"Date": "2019-05-08", "Open": "1172.010010", "High": "1180.423950", "Low": "1165.739990", "Close": "1166.270020", "Adj Close": "1166.270020", "Volume": "1309300"}, {"Date": "2019-05-09", "Open": "1159.030029", "High": "1169.660034", "Low": "1150.849976", "Close": "1162.380005", "Adj Close": "1162.380005", "Volume": "1185700"}, {"Date": "2019-05-10", "Open": "1163.589966", "High": "1172.599976", "Low": "1142.500000", "Close": "1164.270020", "Adj Close": "1164.270020", "Volume": "1314500"}, {"Date": "2019-05-13", "Open": "1141.959961", "High": "1147.939941", "Low": "1122.109985", "Close": "1132.030029", "Adj Close": "1132.030029", "Volume": "1860600"}, {"Date": "2019-05-14", "Open": "1137.209961", "High": "1140.420044", "Low": "1119.550049", "Close": "1120.439941", "Adj Close": "1120.439941", "Volume": "1836600"}, {"Date": "2019-05-15", "Open": "1117.869995", "High": "1171.329956", "Low": "1116.666016", "Close": "1164.209961", "Adj Close": "1164.209961", "Volume": "2289300"}, {"Date": "2019-05-16", "Open": "1164.510010", "High": "1188.160034", "Low": "1162.839966", "Close": "1178.979980", "Adj Close": "1178.979980", "Volume": "1531400"}, {"Date": "2019-05-17", "Open": "1168.469971", "High": "1180.150024", "Low": "1160.010010", "Close": "1162.300049", "Adj Close": "1162.300049", "Volume": "1208600"}, {"Date": "2019-05-20", "Open": "1144.500000", "High": "1146.796997", "Low": "1131.442993", "Close": "1138.849976", "Adj Close": "1138.849976", "Volume": "1353300"}, {"Date": "2019-05-21", "Open": "1148.489990", "High": "1152.708008", "Low": "1137.939941", "Close": "1149.630005", "Adj Close": "1149.630005", "Volume": "1159800"}, {"Date": "2019-05-22", "Open": "1146.750000", "High": "1158.520020", "Low": "1145.890015", "Close": "1151.420044", "Adj Close": "1151.420044", "Volume": "914500"}, {"Date": "2019-05-23", "Open": "1140.500000", "High": "1145.973022", "Low": "1129.223999", "Close": "1140.770020", "Adj Close": "1140.770020", "Volume": "1198900"}, {"Date": "2019-05-24", "Open": "1147.359985", "High": "1149.765015", "Low": "1131.660034", "Close": "1133.469971", "Adj Close": "1133.469971", "Volume": "1112000"}, {"Date": "2019-05-28", "Open": "1134.000000", "High": "1151.587036", "Low": "1133.119995", "Close": "1134.150024", "Adj Close": "1134.150024", "Volume": "1365000"}, {"Date": "2019-05-29", "Open": "1127.520020", "High": "1129.099976", "Low": "1108.219971", "Close": "1116.459961", "Adj Close": "1116.459961", "Volume": "1538200"}, {"Date": "2019-05-30", "Open": "1115.540039", "High": "1123.130005", "Low": "1112.119995", "Close": "1117.949951", "Adj Close": "1117.949951", "Volume": "951900"}, {"Date": "2019-05-31", "Open": "1101.290039", "High": "1109.599976", "Low": "1100.180054", "Close": "1103.630005", "Adj Close": "1103.630005", "Volume": "1507800"}, {"Date": "2019-06-03", "Open": "1065.500000", "High": "1065.500000", "Low": "1025.000000", "Close": "1036.229980", "Adj Close": "1036.229980", "Volume": "5130600"}, {"Date": "2019-06-04", "Open": "1042.900024", "High": "1056.050049", "Low": "1033.689941", "Close": "1053.050049", "Adj Close": "1053.050049", "Volume": "2833500"}, {"Date": "2019-06-05", "Open": "1051.540039", "High": "1053.550049", "Low": "1030.489990", "Close": "1042.219971", "Adj Close": "1042.219971", "Volume": "2168400"}, {"Date": "2019-06-06", "Open": "1044.989990", "High": "1047.489990", "Low": "1033.699951", "Close": "1044.339966", "Adj Close": "1044.339966", "Volume": "1703200"}, {"Date": "2019-06-07", "Open": "1050.630005", "High": "1070.920044", "Low": "1048.400024", "Close": "1066.040039", "Adj Close": "1066.040039", "Volume": "1802400"}, {"Date": "2019-06-10", "Open": "1072.979980", "High": "1092.660034", "Low": "1072.322021", "Close": "1080.380005", "Adj Close": "1080.380005", "Volume": "1464200"}, {"Date": "2019-06-11", "Open": "1093.979980", "High": "1101.989990", "Low": "1077.603027", "Close": "1078.719971", "Adj Close": "1078.719971", "Volume": "1436700"}, {"Date": "2019-06-12", "Open": "1078.000000", "High": "1080.930054", "Low": "1067.540039", "Close": "1077.030029", "Adj Close": "1077.030029", "Volume": "1061000"}, {"Date": "2019-06-13", "Open": "1083.640015", "High": "1094.170044", "Low": "1080.150024", "Close": "1088.770020", "Adj Close": "1088.770020", "Volume": "1057700"}, {"Date": "2019-06-14", "Open": "1086.420044", "High": "1092.689941", "Low": "1080.171997", "Close": "1085.349976", "Adj Close": "1085.349976", "Volume": "1111500"}, {"Date": "2019-06-17", "Open": "1086.280029", "High": "1099.180054", "Low": "1086.280029", "Close": "1092.500000", "Adj Close": "1092.500000", "Volume": "941600"}, {"Date": "2019-06-18", "Open": "1109.689941", "High": "1116.390015", "Low": "1098.989990", "Close": "1103.599976", "Adj Close": "1103.599976", "Volume": "1386700"}, {"Date": "2019-06-19", "Open": "1105.599976", "High": "1107.000000", "Low": "1093.479980", "Close": "1102.329956", "Adj Close": "1102.329956", "Volume": "1338800"}, {"Date": "2019-06-20", "Open": "1119.989990", "High": "1120.119995", "Low": "1104.739990", "Close": "1111.420044", "Adj Close": "1111.420044", "Volume": "1262000"}, {"Date": "2019-06-21", "Open": "1109.239990", "High": "1124.109985", "Low": "1108.079956", "Close": "1121.880005", "Adj Close": "1121.880005", "Volume": "1947600"}, {"Date": "2019-06-24", "Open": "1119.609985", "High": "1122.000000", "Low": "1111.010010", "Close": "1115.520020", "Adj Close": "1115.520020", "Volume": "1395600"}, {"Date": "2019-06-25", "Open": "1112.660034", "High": "1114.349976", "Low": "1083.800049", "Close": "1086.349976", "Adj Close": "1086.349976", "Volume": "1546900"}, {"Date": "2019-06-26", "Open": "1086.500000", "High": "1092.969971", "Low": "1072.239990", "Close": "1079.800049", "Adj Close": "1079.800049", "Volume": "1810900"}, {"Date": "2019-06-27", "Open": "1084.000000", "High": "1087.099976", "Low": "1075.290039", "Close": "1076.010010", "Adj Close": "1076.010010", "Volume": "1004300"}, {"Date": "2019-06-28", "Open": "1076.390015", "High": "1081.000000", "Low": "1073.369995", "Close": "1080.910034", "Adj Close": "1080.910034", "Volume": "1693200"}, {"Date": "2019-07-01", "Open": "1098.000000", "High": "1107.579956", "Low": "1093.703003", "Close": "1097.949951", "Adj Close": "1097.949951", "Volume": "1436300"}, {"Date": "2019-07-02", "Open": "1102.239990", "High": "1111.770020", "Low": "1098.170044", "Close": "1111.250000", "Adj Close": "1111.250000", "Volume": "991600"}, {"Date": "2019-07-03", "Open": "1117.410034", "High": "1126.760010", "Low": "1113.859985", "Close": "1121.579956", "Adj Close": "1121.579956", "Volume": "767000"}, {"Date": "2019-07-05", "Open": "1117.800049", "High": "1132.880005", "Low": "1116.140015", "Close": "1131.589966", "Adj Close": "1131.589966", "Volume": "1264300"}, {"Date": "2019-07-08", "Open": "1125.170044", "High": "1125.979980", "Low": "1111.209961", "Close": "1116.349976", "Adj Close": "1116.349976", "Volume": "1236400"}, {"Date": "2019-07-09", "Open": "1111.800049", "High": "1128.025024", "Low": "1107.170044", "Close": "1124.829956", "Adj Close": "1124.829956", "Volume": "1330400"}, {"Date": "2019-07-10", "Open": "1131.219971", "High": "1142.050049", "Low": "1130.969971", "Close": "1140.479980", "Adj Close": "1140.479980", "Volume": "1209500"}, {"Date": "2019-07-11", "Open": "1143.250000", "High": "1153.069946", "Low": "1139.579956", "Close": "1144.209961", "Adj Close": "1144.209961", "Volume": "1195500"}, {"Date": "2019-07-12", "Open": "1143.989990", "High": "1147.339966", "Low": "1138.780029", "Close": "1144.900024", "Adj Close": "1144.900024", "Volume": "864000"}, {"Date": "2019-07-15", "Open": "1146.859985", "High": "1150.819946", "Low": "1139.400024", "Close": "1150.339966", "Adj Close": "1150.339966", "Volume": "903800"}, {"Date": "2019-07-16", "Open": "1146.000000", "High": "1158.579956", "Low": "1145.000000", "Close": "1153.579956", "Adj Close": "1153.579956", "Volume": "1238800"}, {"Date": "2019-07-17", "Open": "1150.969971", "High": "1158.359985", "Low": "1145.770020", "Close": "1146.349976", "Adj Close": "1146.349976", "Volume": "1170000"}, {"Date": "2019-07-18", "Open": "1141.739990", "High": "1147.604980", "Low": "1132.729980", "Close": "1146.329956", "Adj Close": "1146.329956", "Volume": "1290700"}, {"Date": "2019-07-19", "Open": "1148.189941", "High": "1151.140015", "Low": "1129.619995", "Close": "1130.099976", "Adj Close": "1130.099976", "Volume": "1647200"}, {"Date": "2019-07-22", "Open": "1133.449951", "High": "1139.250000", "Low": "1124.239990", "Close": "1138.069946", "Adj Close": "1138.069946", "Volume": "1301500"}, {"Date": "2019-07-23", "Open": "1144.000000", "High": "1146.900024", "Low": "1131.800049", "Close": "1146.209961", "Adj Close": "1146.209961", "Volume": "1093700"}, {"Date": "2019-07-24", "Open": "1131.900024", "High": "1144.000000", "Low": "1126.989990", "Close": "1137.810059", "Adj Close": "1137.810059", "Volume": "1589800"}, {"Date": "2019-07-25", "Open": "1137.819946", "High": "1141.699951", "Low": "1120.920044", "Close": "1132.119995", "Adj Close": "1132.119995", "Volume": "2209800"}, {"Date": "2019-07-26", "Open": "1224.040039", "High": "1265.550049", "Low": "1224.000000", "Close": "1250.410034", "Adj Close": "1250.410034", "Volume": "4805800"}, {"Date": "2019-07-29", "Open": "1241.050049", "High": "1247.369995", "Low": "1228.229980", "Close": "1239.410034", "Adj Close": "1239.410034", "Volume": "2223700"}, {"Date": "2019-07-30", "Open": "1225.410034", "High": "1234.869995", "Low": "1223.300049", "Close": "1225.140015", "Adj Close": "1225.140015", "Volume": "1453300"}, {"Date": "2019-07-31", "Open": "1223.000000", "High": "1234.000000", "Low": "1207.764038", "Close": "1216.680054", "Adj Close": "1216.680054", "Volume": "1725500"}, {"Date": "2019-08-01", "Open": "1214.030029", "High": "1234.109985", "Low": "1205.719971", "Close": "1209.010010", "Adj Close": "1209.010010", "Volume": "1698500"}, {"Date": "2019-08-02", "Open": "1200.739990", "High": "1206.900024", "Low": "1188.939941", "Close": "1193.989990", "Adj Close": "1193.989990", "Volume": "1645100"}, {"Date": "2019-08-05", "Open": "1170.040039", "High": "1175.239990", "Low": "1140.140015", "Close": "1152.319946", "Adj Close": "1152.319946", "Volume": "2597500"}, {"Date": "2019-08-06", "Open": "1163.310059", "High": "1179.959961", "Low": "1160.000000", "Close": "1169.949951", "Adj Close": "1169.949951", "Volume": "1709400"}, {"Date": "2019-08-07", "Open": "1156.000000", "High": "1178.444946", "Low": "1149.624023", "Close": "1173.989990", "Adj Close": "1173.989990", "Volume": "1444300"}, {"Date": "2019-08-08", "Open": "1182.829956", "High": "1205.010010", "Low": "1173.020020", "Close": "1204.800049", "Adj Close": "1204.800049", "Volume": "1468000"}, {"Date": "2019-08-09", "Open": "1197.989990", "High": "1203.880005", "Low": "1183.603027", "Close": "1188.010010", "Adj Close": "1188.010010", "Volume": "1065700"}, {"Date": "2019-08-12", "Open": "1179.209961", "High": "1184.959961", "Low": "1167.671997", "Close": "1174.709961", "Adj Close": "1174.709961", "Volume": "1003000"}, {"Date": "2019-08-13", "Open": "1171.459961", "High": "1204.780029", "Low": "1171.459961", "Close": "1197.270020", "Adj Close": "1197.270020", "Volume": "1294400"}, {"Date": "2019-08-14", "Open": "1176.310059", "High": "1182.300049", "Low": "1160.540039", "Close": "1164.290039", "Adj Close": "1164.290039", "Volume": "1578700"}, {"Date": "2019-08-15", "Open": "1163.500000", "High": "1175.839966", "Low": "1162.109985", "Close": "1167.260010", "Adj Close": "1167.260010", "Volume": "1218700"}, {"Date": "2019-08-16", "Open": "1179.550049", "High": "1182.719971", "Low": "1171.810059", "Close": "1177.599976", "Adj Close": "1177.599976", "Volume": "1313300"}, {"Date": "2019-08-19", "Open": "1190.089966", "High": "1206.989990", "Low": "1190.089966", "Close": "1198.449951", "Adj Close": "1198.449951", "Volume": "1231600"}, {"Date": "2019-08-20", "Open": "1195.250000", "High": "1196.060059", "Low": "1182.109985", "Close": "1182.689941", "Adj Close": "1182.689941", "Volume": "915500"}, {"Date": "2019-08-21", "Open": "1193.150024", "High": "1199.000000", "Low": "1187.430054", "Close": "1191.250000", "Adj Close": "1191.250000", "Volume": "740700"}, {"Date": "2019-08-22", "Open": "1194.069946", "High": "1198.011963", "Low": "1178.579956", "Close": "1189.530029", "Adj Close": "1189.530029", "Volume": "947500"}, {"Date": "2019-08-23", "Open": "1181.989990", "High": "1194.079956", "Low": "1147.750000", "Close": "1151.290039", "Adj Close": "1151.290039", "Volume": "1687000"}, {"Date": "2019-08-26", "Open": "1157.260010", "High": "1169.469971", "Low": "1152.959961", "Close": "1168.890015", "Adj Close": "1168.890015", "Volume": "1226100"}, {"Date": "2019-08-27", "Open": "1180.530029", "High": "1182.400024", "Low": "1161.449951", "Close": "1167.839966", "Adj Close": "1167.839966", "Volume": "1077200"}, {"Date": "2019-08-28", "Open": "1161.709961", "High": "1176.420044", "Low": "1157.300049", "Close": "1171.020020", "Adj Close": "1171.020020", "Volume": "802000"}, {"Date": "2019-08-29", "Open": "1181.119995", "High": "1196.060059", "Low": "1181.119995", "Close": "1192.849976", "Adj Close": "1192.849976", "Volume": "1088400"}, {"Date": "2019-08-30", "Open": "1198.500000", "High": "1198.500000", "Low": "1183.802979", "Close": "1188.099976", "Adj Close": "1188.099976", "Volume": "1129800"}, {"Date": "2019-09-03", "Open": "1177.030029", "High": "1186.890015", "Low": "1163.199951", "Close": "1168.390015", "Adj Close": "1168.390015", "Volume": "1479900"}, {"Date": "2019-09-04", "Open": "1176.709961", "High": "1183.479980", "Low": "1171.000000", "Close": "1181.410034", "Adj Close": "1181.410034", "Volume": "1068900"}, {"Date": "2019-09-05", "Open": "1191.530029", "High": "1213.040039", "Low": "1191.530029", "Close": "1211.380005", "Adj Close": "1211.380005", "Volume": "1408100"}, {"Date": "2019-09-06", "Open": "1208.130005", "High": "1212.015015", "Low": "1202.521973", "Close": "1204.930054", "Adj Close": "1204.930054", "Volume": "1072100"}, {"Date": "2019-09-09", "Open": "1204.000000", "High": "1220.000000", "Low": "1192.619995", "Close": "1204.410034", "Adj Close": "1204.410034", "Volume": "1471900"}, {"Date": "2019-09-10", "Open": "1195.150024", "High": "1210.000000", "Low": "1194.579956", "Close": "1206.000000", "Adj Close": "1206.000000", "Volume": "1260100"}, {"Date": "2019-09-11", "Open": "1203.410034", "High": "1222.599976", "Low": "1202.199951", "Close": "1220.170044", "Adj Close": "1220.170044", "Volume": "1307000"}, {"Date": "2019-09-12", "Open": "1224.300049", "High": "1241.859985", "Low": "1223.020020", "Close": "1234.250000", "Adj Close": "1234.250000", "Volume": "1725900"}, {"Date": "2019-09-13", "Open": "1231.349976", "High": "1240.880005", "Low": "1227.010010", "Close": "1239.560059", "Adj Close": "1239.560059", "Volume": "1301400"}, {"Date": "2019-09-16", "Open": "1229.520020", "High": "1239.560059", "Low": "1225.609985", "Close": "1231.300049", "Adj Close": "1231.300049", "Volume": "1053300"}, {"Date": "2019-09-17", "Open": "1230.400024", "High": "1235.000000", "Low": "1223.689941", "Close": "1229.150024", "Adj Close": "1229.150024", "Volume": "955100"}, {"Date": "2019-09-18", "Open": "1227.510010", "High": "1235.609985", "Low": "1216.530029", "Close": "1232.410034", "Adj Close": "1232.410034", "Volume": "1135100"}, {"Date": "2019-09-19", "Open": "1232.060059", "High": "1244.439941", "Low": "1232.020020", "Close": "1238.709961", "Adj Close": "1238.709961", "Volume": "996000"}, {"Date": "2019-09-20", "Open": "1233.119995", "High": "1243.319946", "Low": "1223.079956", "Close": "1229.930054", "Adj Close": "1229.930054", "Volume": "2270000"}, {"Date": "2019-09-23", "Open": "1226.000000", "High": "1239.089966", "Low": "1224.170044", "Close": "1234.030029", "Adj Close": "1234.030029", "Volume": "1062400"}, {"Date": "2019-09-24", "Open": "1240.000000", "High": "1246.739990", "Low": "1210.680054", "Close": "1218.760010", "Adj Close": "1218.760010", "Volume": "1583200"}, {"Date": "2019-09-25", "Open": "1215.819946", "High": "1248.300049", "Low": "1210.089966", "Close": "1246.520020", "Adj Close": "1246.520020", "Volume": "1453000"}, {"Date": "2019-09-26", "Open": "1241.959961", "High": "1245.000000", "Low": "1232.267944", "Close": "1241.390015", "Adj Close": "1241.390015", "Volume": "1538000"}, {"Date": "2019-09-27", "Open": "1243.010010", "High": "1244.020020", "Low": "1214.449951", "Close": "1225.089966", "Adj Close": "1225.089966", "Volume": "1353900"}, {"Date": "2019-09-30", "Open": "1220.969971", "High": "1226.000000", "Low": "1212.300049", "Close": "1219.000000", "Adj Close": "1219.000000", "Volume": "1404100"}, {"Date": "2019-10-01", "Open": "1219.000000", "High": "1231.229980", "Low": "1203.579956", "Close": "1205.099976", "Adj Close": "1205.099976", "Volume": "1273500"}, {"Date": "2019-10-02", "Open": "1196.979980", "High": "1196.979980", "Low": "1171.290039", "Close": "1176.630005", "Adj Close": "1176.630005", "Volume": "1615100"}, {"Date": "2019-10-03", "Open": "1180.000000", "High": "1189.060059", "Low": "1162.430054", "Close": "1187.829956", "Adj Close": "1187.829956", "Volume": "1621200"}, {"Date": "2019-10-04", "Open": "1191.890015", "High": "1211.439941", "Low": "1189.170044", "Close": "1209.000000", "Adj Close": "1209.000000", "Volume": "1162400"}, {"Date": "2019-10-07", "Open": "1204.400024", "High": "1218.203979", "Low": "1203.750000", "Close": "1207.680054", "Adj Close": "1207.680054", "Volume": "842900"}, {"Date": "2019-10-08", "Open": "1197.589966", "High": "1206.079956", "Low": "1189.010010", "Close": "1189.130005", "Adj Close": "1189.130005", "Volume": "1039300"}, {"Date": "2019-10-09", "Open": "1199.349976", "High": "1208.349976", "Low": "1197.630005", "Close": "1202.310059", "Adj Close": "1202.310059", "Volume": "867700"}, {"Date": "2019-10-10", "Open": "1198.579956", "High": "1215.000000", "Low": "1197.339966", "Close": "1208.670044", "Adj Close": "1208.670044", "Volume": "846600"}, {"Date": "2019-10-11", "Open": "1222.209961", "High": "1228.390015", "Low": "1213.739990", "Close": "1215.449951", "Adj Close": "1215.449951", "Volume": "1272700"}, {"Date": "2019-10-14", "Open": "1212.339966", "High": "1226.329956", "Low": "1211.760010", "Close": "1217.140015", "Adj Close": "1217.140015", "Volume": "867500"}, {"Date": "2019-10-15", "Open": "1220.400024", "High": "1247.329956", "Low": "1220.400024", "Close": "1243.010010", "Adj Close": "1243.010010", "Volume": "1381700"}, {"Date": "2019-10-16", "Open": "1241.170044", "High": "1254.739990", "Low": "1238.449951", "Close": "1243.640015", "Adj Close": "1243.640015", "Volume": "1094600"}, {"Date": "2019-10-17", "Open": "1250.930054", "High": "1263.324951", "Low": "1249.939941", "Close": "1253.069946", "Adj Close": "1253.069946", "Volume": "952400"}, {"Date": "2019-10-18", "Open": "1253.459961", "High": "1258.890015", "Low": "1241.079956", "Close": "1245.489990", "Adj Close": "1245.489990", "Volume": "1352800"}, {"Date": "2019-10-21", "Open": "1252.260010", "High": "1254.629028", "Low": "1240.599976", "Close": "1246.150024", "Adj Close": "1246.150024", "Volume": "1027200"}, {"Date": "2019-10-22", "Open": "1247.849976", "High": "1250.599976", "Low": "1241.380005", "Close": "1242.800049", "Adj Close": "1242.800049", "Volume": "1023800"}, {"Date": "2019-10-23", "Open": "1242.359985", "High": "1259.890015", "Low": "1242.359985", "Close": "1259.130005", "Adj Close": "1259.130005", "Volume": "911500"}, {"Date": "2019-10-24", "Open": "1260.900024", "High": "1264.000000", "Low": "1253.714966", "Close": "1260.989990", "Adj Close": "1260.989990", "Volume": "1028100"}, {"Date": "2019-10-25", "Open": "1251.030029", "High": "1269.599976", "Low": "1250.010010", "Close": "1265.130005", "Adj Close": "1265.130005", "Volume": "1213100"}, {"Date": "2019-10-28", "Open": "1275.449951", "High": "1299.310059", "Low": "1272.540039", "Close": "1290.000000", "Adj Close": "1290.000000", "Volume": "2613200"}, {"Date": "2019-10-29", "Open": "1276.229980", "High": "1281.589966", "Low": "1257.212036", "Close": "1262.619995", "Adj Close": "1262.619995", "Volume": "1886400"}, {"Date": "2019-10-30", "Open": "1252.969971", "High": "1269.359985", "Low": "1252.000000", "Close": "1261.290039", "Adj Close": "1261.290039", "Volume": "1408900"}, {"Date": "2019-10-31", "Open": "1261.280029", "High": "1267.670044", "Low": "1250.843018", "Close": "1260.109985", "Adj Close": "1260.109985", "Volume": "1455700"}, {"Date": "2019-11-01", "Open": "1265.000000", "High": "1274.619995", "Low": "1260.500000", "Close": "1273.739990", "Adj Close": "1273.739990", "Volume": "1670100"}, {"Date": "2019-11-04", "Open": "1276.449951", "High": "1294.130005", "Low": "1276.354980", "Close": "1291.369995", "Adj Close": "1291.369995", "Volume": "1501000"}, {"Date": "2019-11-05", "Open": "1292.890015", "High": "1298.930054", "Low": "1291.229004", "Close": "1292.030029", "Adj Close": "1292.030029", "Volume": "1282700"}, {"Date": "2019-11-06", "Open": "1289.459961", "High": "1293.729980", "Low": "1282.500000", "Close": "1291.800049", "Adj Close": "1291.800049", "Volume": "1153000"}, {"Date": "2019-11-07", "Open": "1294.280029", "High": "1323.739990", "Low": "1294.244995", "Close": "1308.859985", "Adj Close": "1308.859985", "Volume": "2030000"}, {"Date": "2019-11-08", "Open": "1305.280029", "High": "1318.000000", "Low": "1304.364990", "Close": "1311.369995", "Adj Close": "1311.369995", "Volume": "1251400"}, {"Date": "2019-11-11", "Open": "1303.180054", "High": "1306.425049", "Low": "1297.410034", "Close": "1299.189941", "Adj Close": "1299.189941", "Volume": "1011900"}, {"Date": "2019-11-12", "Open": "1300.000000", "High": "1310.000000", "Low": "1295.770020", "Close": "1298.800049", "Adj Close": "1298.800049", "Volume": "1085900"}, {"Date": "2019-11-13", "Open": "1294.069946", "High": "1304.300049", "Low": "1293.510010", "Close": "1298.000000", "Adj Close": "1298.000000", "Volume": "826700"}, {"Date": "2019-11-14", "Open": "1297.500000", "High": "1317.000000", "Low": "1295.650024", "Close": "1311.459961", "Adj Close": "1311.459961", "Volume": "1193500"}, {"Date": "2019-11-15", "Open": "1318.939941", "High": "1334.880005", "Low": "1314.280029", "Close": "1334.869995", "Adj Close": "1334.869995", "Volume": "1782600"}, {"Date": "2019-11-18", "Open": "1332.219971", "High": "1335.529053", "Low": "1317.500000", "Close": "1320.699951", "Adj Close": "1320.699951", "Volume": "1487400"}, {"Date": "2019-11-19", "Open": "1327.699951", "High": "1327.699951", "Low": "1312.800049", "Close": "1315.459961", "Adj Close": "1315.459961", "Volume": "1269200"}, {"Date": "2019-11-20", "Open": "1311.739990", "High": "1315.000000", "Low": "1291.150024", "Close": "1303.050049", "Adj Close": "1303.050049", "Volume": "1308600"}, {"Date": "2019-11-21", "Open": "1301.479980", "High": "1312.589966", "Low": "1293.000000", "Close": "1301.349976", "Adj Close": "1301.349976", "Volume": "995500"}, {"Date": "2019-11-22", "Open": "1305.619995", "High": "1308.729980", "Low": "1291.410034", "Close": "1295.339966", "Adj Close": "1295.339966", "Volume": "1385700"}, {"Date": "2019-11-25", "Open": "1299.180054", "High": "1311.310059", "Low": "1298.130005", "Close": "1306.689941", "Adj Close": "1306.689941", "Volume": "1036200"}, {"Date": "2019-11-26", "Open": "1309.859985", "High": "1314.800049", "Low": "1305.089966", "Close": "1313.550049", "Adj Close": "1313.550049", "Volume": "1069700"}, {"Date": "2019-11-27", "Open": "1315.000000", "High": "1318.359985", "Low": "1309.630005", "Close": "1312.989990", "Adj Close": "1312.989990", "Volume": "995600"}, {"Date": "2019-11-29", "Open": "1307.119995", "High": "1310.204956", "Low": "1303.969971", "Close": "1304.959961", "Adj Close": "1304.959961", "Volume": "587000"}, {"Date": "2019-12-02", "Open": "1301.000000", "High": "1305.829956", "Low": "1281.000000", "Close": "1289.920044", "Adj Close": "1289.920044", "Volume": "1510900"}, {"Date": "2019-12-03", "Open": "1279.569946", "High": "1298.461060", "Low": "1279.000000", "Close": "1295.280029", "Adj Close": "1295.280029", "Volume": "1143800"}, {"Date": "2019-12-04", "Open": "1307.010010", "High": "1325.800049", "Low": "1304.869995", "Close": "1320.540039", "Adj Close": "1320.540039", "Volume": "1537500"}, {"Date": "2019-12-05", "Open": "1328.000000", "High": "1329.358032", "Low": "1316.439941", "Close": "1328.130005", "Adj Close": "1328.130005", "Volume": "1212700"}, {"Date": "2019-12-06", "Open": "1333.439941", "High": "1344.000000", "Low": "1333.439941", "Close": "1340.619995", "Adj Close": "1340.619995", "Volume": "1314800"}, {"Date": "2019-12-09", "Open": "1338.040039", "High": "1359.449951", "Low": "1337.839966", "Close": "1343.560059", "Adj Close": "1343.560059", "Volume": "1354300"}, {"Date": "2019-12-10", "Open": "1341.500000", "High": "1349.974976", "Low": "1336.040039", "Close": "1344.660034", "Adj Close": "1344.660034", "Volume": "1094100"}, {"Date": "2019-12-11", "Open": "1350.839966", "High": "1351.199951", "Low": "1342.670044", "Close": "1345.020020", "Adj Close": "1345.020020", "Volume": "850400"}, {"Date": "2019-12-12", "Open": "1345.939941", "High": "1355.775024", "Low": "1340.500000", "Close": "1350.270020", "Adj Close": "1350.270020", "Volume": "1281000"}, {"Date": "2019-12-13", "Open": "1347.949951", "High": "1353.093018", "Low": "1343.869995", "Close": "1347.829956", "Adj Close": "1347.829956", "Volume": "1549600"}, {"Date": "2019-12-16", "Open": "1356.500000", "High": "1364.680054", "Low": "1352.670044", "Close": "1361.170044", "Adj Close": "1361.170044", "Volume": "1397300"}, {"Date": "2019-12-17", "Open": "1362.890015", "High": "1365.000000", "Low": "1351.322998", "Close": "1355.119995", "Adj Close": "1355.119995", "Volume": "1854000"}, {"Date": "2019-12-18", "Open": "1356.599976", "High": "1360.469971", "Low": "1351.000000", "Close": "1352.619995", "Adj Close": "1352.619995", "Volume": "1522600"}, {"Date": "2019-12-19", "Open": "1351.819946", "High": "1358.099976", "Low": "1348.984985", "Close": "1356.040039", "Adj Close": "1356.040039", "Volume": "1469900"}, {"Date": "2019-12-20", "Open": "1363.349976", "High": "1363.640015", "Low": "1349.000000", "Close": "1349.589966", "Adj Close": "1349.589966", "Volume": "3315000"}, {"Date": "2019-12-23", "Open": "1355.869995", "High": "1359.800049", "Low": "1346.510010", "Close": "1348.839966", "Adj Close": "1348.839966", "Volume": "883100"}, {"Date": "2019-12-24", "Open": "1348.500000", "High": "1350.260010", "Low": "1342.780029", "Close": "1343.560059", "Adj Close": "1343.560059", "Volume": "347500"}, {"Date": "2019-12-26", "Open": "1346.170044", "High": "1361.327026", "Low": "1344.469971", "Close": "1360.400024", "Adj Close": "1360.400024", "Volume": "667500"}, {"Date": "2019-12-27", "Open": "1362.989990", "High": "1364.530029", "Low": "1349.310059", "Close": "1351.890015", "Adj Close": "1351.890015", "Volume": "1038400"}, {"Date": "2019-12-30", "Open": "1350.000000", "High": "1353.000000", "Low": "1334.020020", "Close": "1336.140015", "Adj Close": "1336.140015", "Volume": "1050900"}, {"Date": "2019-12-31", "Open": "1330.109985", "High": "1338.000000", "Low": "1329.084961", "Close": "1337.020020", "Adj Close": "1337.020020", "Volume": "961800"}, {"Date": "2020-01-02", "Open": "1341.550049", "High": "1368.140015", "Low": "1341.550049", "Close": "1367.369995", "Adj Close": "1367.369995", "Volume": "1406600"}, {"Date": "2020-01-03", "Open": "1347.859985", "High": "1372.500000", "Low": "1345.543945", "Close": "1360.660034", "Adj Close": "1360.660034", "Volume": "1186400"}, {"Date": "2020-01-06", "Open": "1350.000000", "High": "1396.500000", "Low": "1350.000000", "Close": "1394.209961", "Adj Close": "1394.209961", "Volume": "1732300"}, {"Date": "2020-01-07", "Open": "1397.939941", "High": "1402.989990", "Low": "1390.380005", "Close": "1393.339966", "Adj Close": "1393.339966", "Volume": "1502700"}, {"Date": "2020-01-08", "Open": "1392.079956", "High": "1411.579956", "Low": "1390.839966", "Close": "1404.319946", "Adj Close": "1404.319946", "Volume": "1528000"}, {"Date": "2020-01-09", "Open": "1420.569946", "High": "1427.329956", "Low": "1410.270020", "Close": "1419.829956", "Adj Close": "1419.829956", "Volume": "1500900"}, {"Date": "2020-01-10", "Open": "1427.560059", "High": "1434.928955", "Low": "1418.349976", "Close": "1429.729980", "Adj Close": "1429.729980", "Volume": "1820700"}, {"Date": "2020-01-13", "Open": "1436.130005", "High": "1440.520020", "Low": "1426.020020", "Close": "1439.229980", "Adj Close": "1439.229980", "Volume": "1652300"}, {"Date": "2020-01-14", "Open": "1439.010010", "High": "1441.800049", "Low": "1428.369995", "Close": "1430.880005", "Adj Close": "1430.880005", "Volume": "1558900"}, {"Date": "2020-01-15", "Open": "1430.209961", "High": "1441.395020", "Low": "1430.209961", "Close": "1439.199951", "Adj Close": "1439.199951", "Volume": "1282700"}, {"Date": "2020-01-16", "Open": "1447.439941", "High": "1451.989990", "Low": "1440.920044", "Close": "1451.699951", "Adj Close": "1451.699951", "Volume": "1173700"}, {"Date": "2020-01-17", "Open": "1462.910034", "High": "1481.295044", "Low": "1458.219971", "Close": "1480.390015", "Adj Close": "1480.390015", "Volume": "2396200"}, {"Date": "2020-01-21", "Open": "1479.119995", "High": "1491.849976", "Low": "1471.199951", "Close": "1484.400024", "Adj Close": "1484.400024", "Volume": "2036700"}, {"Date": "2020-01-22", "Open": "1491.000000", "High": "1503.213989", "Low": "1484.930054", "Close": "1485.949951", "Adj Close": "1485.949951", "Volume": "1610800"}, {"Date": "2020-01-23", "Open": "1487.640015", "High": "1495.520020", "Low": "1482.099976", "Close": "1486.650024", "Adj Close": "1486.650024", "Volume": "1351200"}, {"Date": "2020-01-24", "Open": "1493.589966", "High": "1495.494995", "Low": "1465.250000", "Close": "1466.709961", "Adj Close": "1466.709961", "Volume": "1784600"}, {"Date": "2020-01-27", "Open": "1431.000000", "High": "1438.069946", "Low": "1421.199951", "Close": "1433.900024", "Adj Close": "1433.900024", "Volume": "1755200"}, {"Date": "2020-01-28", "Open": "1443.000000", "High": "1456.000000", "Low": "1432.469971", "Close": "1452.560059", "Adj Close": "1452.560059", "Volume": "1577400"}, {"Date": "2020-01-29", "Open": "1458.800049", "High": "1465.430054", "Low": "1446.739990", "Close": "1458.630005", "Adj Close": "1458.630005", "Volume": "1077700"}, {"Date": "2020-01-30", "Open": "1439.959961", "High": "1457.280029", "Low": "1436.400024", "Close": "1455.839966", "Adj Close": "1455.839966", "Volume": "1339400"}, {"Date": "2020-01-31", "Open": "1468.900024", "High": "1470.130005", "Low": "1428.530029", "Close": "1434.229980", "Adj Close": "1434.229980", "Volume": "2417200"}, {"Date": "2020-02-03", "Open": "1462.000000", "High": "1490.000000", "Low": "1458.989990", "Close": "1485.939941", "Adj Close": "1485.939941", "Volume": "3036800"}, {"Date": "2020-02-04", "Open": "1457.069946", "High": "1469.500000", "Low": "1426.300049", "Close": "1447.069946", "Adj Close": "1447.069946", "Volume": "3933000"}, {"Date": "2020-02-05", "Open": "1462.420044", "High": "1463.839966", "Low": "1430.560059", "Close": "1448.229980", "Adj Close": "1448.229980", "Volume": "1986200"}, {"Date": "2020-02-06", "Open": "1450.329956", "High": "1482.000000", "Low": "1449.569946", "Close": "1476.229980", "Adj Close": "1476.229980", "Volume": "1679400"}, {"Date": "2020-02-07", "Open": "1467.300049", "High": "1485.839966", "Low": "1466.349976", "Close": "1479.229980", "Adj Close": "1479.229980", "Volume": "1172300"}, {"Date": "2020-02-10", "Open": "1474.319946", "High": "1509.500000", "Low": "1474.319946", "Close": "1508.680054", "Adj Close": "1508.680054", "Volume": "1419900"}, {"Date": "2020-02-11", "Open": "1511.810059", "High": "1529.630005", "Low": "1505.637939", "Close": "1508.790039", "Adj Close": "1508.790039", "Volume": "1344600"}, {"Date": "2020-02-12", "Open": "1514.479980", "High": "1520.694946", "Low": "1508.109985", "Close": "1518.270020", "Adj Close": "1518.270020", "Volume": "1167600"}, {"Date": "2020-02-13", "Open": "1512.689941", "High": "1527.180054", "Low": "1504.599976", "Close": "1514.660034", "Adj Close": "1514.660034", "Volume": "929500"}, {"Date": "2020-02-14", "Open": "1515.599976", "High": "1520.739990", "Low": "1507.339966", "Close": "1520.739990", "Adj Close": "1520.739990", "Volume": "1197800"}, {"Date": "2020-02-18", "Open": "1515.000000", "High": "1531.630005", "Low": "1512.589966", "Close": "1519.670044", "Adj Close": "1519.670044", "Volume": "1120700"}, {"Date": "2020-02-19", "Open": "1525.069946", "High": "1532.105957", "Low": "1521.400024", "Close": "1526.689941", "Adj Close": "1526.689941", "Volume": "949300"}, {"Date": "2020-02-20", "Open": "1522.000000", "High": "1529.640015", "Low": "1506.819946", "Close": "1518.150024", "Adj Close": "1518.150024", "Volume": "1096600"}, {"Date": "2020-02-21", "Open": "1508.030029", "High": "1512.214966", "Low": "1480.439941", "Close": "1485.109985", "Adj Close": "1485.109985", "Volume": "1731700"}, {"Date": "2020-02-24", "Open": "1426.109985", "High": "1436.969971", "Low": "1411.390015", "Close": "1421.589966", "Adj Close": "1421.589966", "Volume": "2867100"}, {"Date": "2020-02-25", "Open": "1433.000000", "High": "1438.140015", "Low": "1382.400024", "Close": "1388.449951", "Adj Close": "1388.449951", "Volume": "2478300"}, {"Date": "2020-02-26", "Open": "1396.140015", "High": "1415.699951", "Low": "1379.000000", "Close": "1393.180054", "Adj Close": "1393.180054", "Volume": "2202400"}, {"Date": "2020-02-27", "Open": "1362.060059", "High": "1371.703979", "Low": "1317.170044", "Close": "1318.089966", "Adj Close": "1318.089966", "Volume": "2978300"}, {"Date": "2020-02-28", "Open": "1277.500000", "High": "1341.140015", "Low": "1271.000000", "Close": "1339.329956", "Adj Close": "1339.329956", "Volume": "3789100"}, {"Date": "2020-03-02", "Open": "1351.609985", "High": "1390.869995", "Low": "1326.814941", "Close": "1389.109985", "Adj Close": "1389.109985", "Volume": "2431500"}, {"Date": "2020-03-03", "Open": "1399.420044", "High": "1410.150024", "Low": "1332.000000", "Close": "1341.390015", "Adj Close": "1341.390015", "Volume": "2402300"}, {"Date": "2020-03-04", "Open": "1359.229980", "High": "1388.089966", "Low": "1343.109985", "Close": "1386.520020", "Adj Close": "1386.520020", "Volume": "1913300"}, {"Date": "2020-03-05", "Open": "1350.199951", "High": "1358.910034", "Low": "1305.099976", "Close": "1319.040039", "Adj Close": "1319.040039", "Volume": "2561300"}, {"Date": "2020-03-06", "Open": "1277.060059", "High": "1306.219971", "Low": "1261.050049", "Close": "1298.410034", "Adj Close": "1298.410034", "Volume": "2660600"}, {"Date": "2020-03-09", "Open": "1205.300049", "High": "1254.760010", "Low": "1200.000000", "Close": "1215.560059", "Adj Close": "1215.560059", "Volume": "3365400"}, {"Date": "2020-03-10", "Open": "1260.000000", "High": "1281.150024", "Low": "1218.770020", "Close": "1280.390015", "Adj Close": "1280.390015", "Volume": "2611400"}, {"Date": "2020-03-11", "Open": "1249.699951", "High": "1260.959961", "Low": "1196.069946", "Close": "1215.410034", "Adj Close": "1215.410034", "Volume": "2608500"}, {"Date": "2020-03-12", "Open": "1126.000000", "High": "1193.869995", "Low": "1113.300049", "Close": "1114.910034", "Adj Close": "1114.910034", "Volume": "4226700"}, {"Date": "2020-03-13", "Open": "1179.000000", "High": "1219.760010", "Low": "1117.142944", "Close": "1219.729980", "Adj Close": "1219.729980", "Volume": "3700100"}, {"Date": "2020-03-16", "Open": "1096.000000", "High": "1152.266968", "Low": "1074.439941", "Close": "1084.329956", "Adj Close": "1084.329956", "Volume": "4252400"}, {"Date": "2020-03-17", "Open": "1093.109985", "High": "1130.859985", "Low": "1056.010010", "Close": "1119.800049", "Adj Close": "1119.800049", "Volume": "3861500"}, {"Date": "2020-03-18", "Open": "1056.510010", "High": "1106.500000", "Low": "1037.280029", "Close": "1096.800049", "Adj Close": "1096.800049", "Volume": "4233400"}, {"Date": "2020-03-19", "Open": "1093.050049", "High": "1157.969971", "Low": "1060.108032", "Close": "1115.290039", "Adj Close": "1115.290039", "Volume": "3651100"}, {"Date": "2020-03-20", "Open": "1135.719971", "High": "1143.989990", "Low": "1065.489990", "Close": "1072.319946", "Adj Close": "1072.319946", "Volume": "3601800"}, {"Date": "2020-03-23", "Open": "1061.319946", "High": "1071.319946", "Low": "1013.536011", "Close": "1056.619995", "Adj Close": "1056.619995", "Volume": "4044100"}, {"Date": "2020-03-24", "Open": "1103.770020", "High": "1135.000000", "Low": "1090.619995", "Close": "1134.459961", "Adj Close": "1134.459961", "Volume": "3344500"}, {"Date": "2020-03-25", "Open": "1126.469971", "High": "1148.900024", "Low": "1086.010010", "Close": "1102.489990", "Adj Close": "1102.489990", "Volume": "4081500"}, {"Date": "2020-03-26", "Open": "1111.800049", "High": "1169.969971", "Low": "1093.530029", "Close": "1161.750000", "Adj Close": "1161.750000", "Volume": "3571700"}, {"Date": "2020-03-27", "Open": "1125.670044", "High": "1150.670044", "Low": "1105.910034", "Close": "1110.709961", "Adj Close": "1110.709961", "Volume": "3208500"}, {"Date": "2020-03-30", "Open": "1125.040039", "High": "1151.630005", "Low": "1096.479980", "Close": "1146.819946", "Adj Close": "1146.819946", "Volume": "2574100"}, {"Date": "2020-03-31", "Open": "1147.300049", "High": "1175.310059", "Low": "1138.140015", "Close": "1162.810059", "Adj Close": "1162.810059", "Volume": "2486400"}, {"Date": "2020-04-01", "Open": "1122.000000", "High": "1129.689941", "Low": "1097.449951", "Close": "1105.619995", "Adj Close": "1105.619995", "Volume": "2344200"}, {"Date": "2020-04-02", "Open": "1098.260010", "High": "1126.859985", "Low": "1096.400024", "Close": "1120.839966", "Adj Close": "1120.839966", "Volume": "1964900"}, {"Date": "2020-04-03", "Open": "1119.015015", "High": "1123.540039", "Low": "1079.810059", "Close": "1097.880005", "Adj Close": "1097.880005", "Volume": "2313400"}, {"Date": "2020-04-06", "Open": "1138.000000", "High": "1194.660034", "Low": "1130.939941", "Close": "1186.920044", "Adj Close": "1186.920044", "Volume": "2664700"}, {"Date": "2020-04-07", "Open": "1221.000000", "High": "1225.000000", "Low": "1182.229980", "Close": "1186.510010", "Adj Close": "1186.510010", "Volume": "2387300"}, {"Date": "2020-04-08", "Open": "1206.500000", "High": "1219.069946", "Low": "1188.160034", "Close": "1210.280029", "Adj Close": "1210.280029", "Volume": "1975100"}, {"Date": "2020-04-09", "Open": "1224.079956", "High": "1225.569946", "Low": "1196.734985", "Close": "1211.449951", "Adj Close": "1211.449951", "Volume": "2175400"}, {"Date": "2020-04-13", "Open": "1209.180054", "High": "1220.510010", "Low": "1187.598022", "Close": "1217.560059", "Adj Close": "1217.560059", "Volume": "1739800"}, {"Date": "2020-04-14", "Open": "1245.089966", "High": "1282.069946", "Low": "1236.930054", "Close": "1269.229980", "Adj Close": "1269.229980", "Volume": "2470400"}, {"Date": "2020-04-15", "Open": "1245.609985", "High": "1280.459961", "Low": "1240.400024", "Close": "1262.469971", "Adj Close": "1262.469971", "Volume": "1671700"}, {"Date": "2020-04-16", "Open": "1274.099976", "High": "1279.000000", "Low": "1242.619995", "Close": "1263.469971", "Adj Close": "1263.469971", "Volume": "2518100"}, {"Date": "2020-04-17", "Open": "1284.849976", "High": "1294.430054", "Low": "1271.229980", "Close": "1283.250000", "Adj Close": "1283.250000", "Volume": "1949000"}, {"Date": "2020-04-20", "Open": "1271.000000", "High": "1281.599976", "Low": "1261.369995", "Close": "1266.609985", "Adj Close": "1266.609985", "Volume": "1695500"}, {"Date": "2020-04-21", "Open": "1247.000000", "High": "1254.270020", "Low": "1209.709961", "Close": "1216.339966", "Adj Close": "1216.339966", "Volume": "2153000"}, {"Date": "2020-04-22", "Open": "1245.540039", "High": "1285.613037", "Low": "1242.000000", "Close": "1263.209961", "Adj Close": "1263.209961", "Volume": "2092400"}, {"Date": "2020-04-23", "Open": "1271.550049", "High": "1293.310059", "Low": "1265.670044", "Close": "1276.310059", "Adj Close": "1276.310059", "Volume": "1566200"}, {"Date": "2020-04-24", "Open": "1261.170044", "High": "1280.400024", "Low": "1249.449951", "Close": "1279.310059", "Adj Close": "1279.310059", "Volume": "1639600"}, {"Date": "2020-04-27", "Open": "1296.000000", "High": "1296.150024", "Low": "1269.000000", "Close": "1275.880005", "Adj Close": "1275.880005", "Volume": "1600600"}, {"Date": "2020-04-28", "Open": "1287.930054", "High": "1288.050049", "Low": "1232.199951", "Close": "1233.670044", "Adj Close": "1233.670044", "Volume": "2951300"}, {"Date": "2020-04-29", "Open": "1341.459961", "High": "1359.989990", "Low": "1325.339966", "Close": "1341.479980", "Adj Close": "1341.479980", "Volume": "3793600"}, {"Date": "2020-04-30", "Open": "1324.880005", "High": "1352.819946", "Low": "1322.489990", "Close": "1348.660034", "Adj Close": "1348.660034", "Volume": "2668900"}, {"Date": "2020-05-01", "Open": "1328.500000", "High": "1352.069946", "Low": "1311.000000", "Close": "1320.609985", "Adj Close": "1320.609985", "Volume": "2072500"}, {"Date": "2020-05-04", "Open": "1308.229980", "High": "1327.660034", "Low": "1299.000000", "Close": "1326.800049", "Adj Close": "1326.800049", "Volume": "1504000"}, {"Date": "2020-05-05", "Open": "1337.920044", "High": "1373.939941", "Low": "1337.459961", "Close": "1351.109985", "Adj Close": "1351.109985", "Volume": "1651500"}, {"Date": "2020-05-06", "Open": "1361.689941", "High": "1371.119995", "Low": "1347.290039", "Close": "1347.300049", "Adj Close": "1347.300049", "Volume": "1215400"}, {"Date": "2020-05-07", "Open": "1365.939941", "High": "1377.599976", "Low": "1355.270020", "Close": "1372.560059", "Adj Close": "1372.560059", "Volume": "1397600"}, {"Date": "2020-05-08", "Open": "1383.130005", "High": "1398.760010", "Low": "1375.479980", "Close": "1388.369995", "Adj Close": "1388.369995", "Volume": "1386900"}, {"Date": "2020-05-11", "Open": "1378.280029", "High": "1416.530029", "Low": "1377.151978", "Close": "1403.260010", "Adj Close": "1403.260010", "Volume": "1412100"}, {"Date": "2020-05-12", "Open": "1407.119995", "High": "1415.000000", "Low": "1374.770020", "Close": "1375.739990", "Adj Close": "1375.739990", "Volume": "1390600"}, {"Date": "2020-05-13", "Open": "1377.050049", "High": "1385.482056", "Low": "1328.400024", "Close": "1349.329956", "Adj Close": "1349.329956", "Volume": "1812600"}, {"Date": "2020-05-14", "Open": "1335.020020", "High": "1357.420044", "Low": "1323.910034", "Close": "1356.130005", "Adj Close": "1356.130005", "Volume": "1603100"}, {"Date": "2020-05-15", "Open": "1350.000000", "High": "1374.479980", "Low": "1339.000000", "Close": "1373.189941", "Adj Close": "1373.189941", "Volume": "1707700"}, {"Date": "2020-05-18", "Open": "1361.750000", "High": "1392.324951", "Low": "1354.250000", "Close": "1383.939941", "Adj Close": "1383.939941", "Volume": "1822400"}, {"Date": "2020-05-19", "Open": "1386.996948", "High": "1392.000000", "Low": "1373.484985", "Close": "1373.484985", "Adj Close": "1373.484985", "Volume": "1280600"}, {"Date": "2020-05-20", "Open": "1389.579956", "High": "1410.420044", "Low": "1387.250000", "Close": "1406.719971", "Adj Close": "1406.719971", "Volume": "1655400"}, {"Date": "2020-05-21", "Open": "1408.000000", "High": "1415.489990", "Low": "1393.449951", "Close": "1402.800049", "Adj Close": "1402.800049", "Volume": "1385000"}, {"Date": "2020-05-22", "Open": "1396.709961", "High": "1412.760010", "Low": "1391.829956", "Close": "1410.420044", "Adj Close": "1410.420044", "Volume": "1309400"}, {"Date": "2020-05-26", "Open": "1437.270020", "High": "1441.000000", "Low": "1412.130005", "Close": "1417.020020", "Adj Close": "1417.020020", "Volume": "2060600"}, {"Date": "2020-05-27", "Open": "1417.250000", "High": "1421.739990", "Low": "1391.290039", "Close": "1417.839966", "Adj Close": "1417.839966", "Volume": "1685800"}, {"Date": "2020-05-28", "Open": "1396.859985", "High": "1440.839966", "Low": "1396.000000", "Close": "1416.729980", "Adj Close": "1416.729980", "Volume": "1692200"}, {"Date": "2020-05-29", "Open": "1416.939941", "High": "1432.569946", "Low": "1413.349976", "Close": "1428.920044", "Adj Close": "1428.920044", "Volume": "1820900"}, {"Date": "2020-06-01", "Open": "1418.390015", "High": "1437.959961", "Low": "1418.000000", "Close": "1431.819946", "Adj Close": "1431.819946", "Volume": "1217100"}, {"Date": "2020-06-02", "Open": "1430.550049", "High": "1439.609985", "Low": "1418.829956", "Close": "1439.219971", "Adj Close": "1439.219971", "Volume": "1278100"}, {"Date": "2020-06-03", "Open": "1438.300049", "High": "1446.552002", "Low": "1429.776978", "Close": "1436.380005", "Adj Close": "1436.380005", "Volume": "1256200"}, {"Date": "2020-06-04", "Open": "1430.400024", "High": "1438.959961", "Low": "1404.729980", "Close": "1412.180054", "Adj Close": "1412.180054", "Volume": "1484300"}, {"Date": "2020-06-05", "Open": "1413.170044", "High": "1445.050049", "Low": "1406.000000", "Close": "1438.390015", "Adj Close": "1438.390015", "Volume": "1734900"}, {"Date": "2020-06-08", "Open": "1422.339966", "High": "1447.989990", "Low": "1422.339966", "Close": "1446.609985", "Adj Close": "1446.609985", "Volume": "1404200"}, {"Date": "2020-06-09", "Open": "1445.359985", "High": "1468.000000", "Low": "1443.209961", "Close": "1456.160034", "Adj Close": "1456.160034", "Volume": "1409200"}, {"Date": "2020-06-10", "Open": "1459.540039", "High": "1474.259033", "Low": "1456.270020", "Close": "1465.849976", "Adj Close": "1465.849976", "Volume": "1525200"}, {"Date": "2020-06-11", "Open": "1442.479980", "High": "1454.474976", "Low": "1402.000000", "Close": "1403.839966", "Adj Close": "1403.839966", "Volume": "1991300"}, {"Date": "2020-06-12", "Open": "1428.489990", "High": "1437.000000", "Low": "1386.020020", "Close": "1413.180054", "Adj Close": "1413.180054", "Volume": "1946400"}, {"Date": "2020-06-15", "Open": "1390.800049", "High": "1424.800049", "Low": "1387.920044", "Close": "1419.849976", "Adj Close": "1419.849976", "Volume": "1503900"}, {"Date": "2020-06-16", "Open": "1445.219971", "High": "1455.020020", "Low": "1425.900024", "Close": "1442.719971", "Adj Close": "1442.719971", "Volume": "1709200"}, {"Date": "2020-06-17", "Open": "1447.160034", "High": "1460.000000", "Low": "1431.380005", "Close": "1451.119995", "Adj Close": "1451.119995", "Volume": "1549600"}, {"Date": "2020-06-18", "Open": "1449.160034", "High": "1451.410034", "Low": "1427.010010", "Close": "1435.959961", "Adj Close": "1435.959961", "Volume": "1581900"}, {"Date": "2020-06-19", "Open": "1444.000000", "High": "1447.800049", "Low": "1421.349976", "Close": "1431.719971", "Adj Close": "1431.719971", "Volume": "3157900"}, {"Date": "2020-06-22", "Open": "1429.000000", "High": "1452.750000", "Low": "1423.209961", "Close": "1451.859985", "Adj Close": "1451.859985", "Volume": "1542400"}, {"Date": "2020-06-23", "Open": "1455.640015", "High": "1475.941040", "Low": "1445.239990", "Close": "1464.410034", "Adj Close": "1464.410034", "Volume": "1429800"}, {"Date": "2020-06-24", "Open": "1461.510010", "High": "1475.420044", "Low": "1429.750000", "Close": "1431.969971", "Adj Close": "1431.969971", "Volume": "1756000"}, {"Date": "2020-06-25", "Open": "1429.900024", "High": "1442.900024", "Low": "1420.000000", "Close": "1441.329956", "Adj Close": "1441.329956", "Volume": "1230500"}, {"Date": "2020-06-26", "Open": "1431.390015", "High": "1433.449951", "Low": "1351.989990", "Close": "1359.900024", "Adj Close": "1359.900024", "Volume": "4267700"}, {"Date": "2020-06-29", "Open": "1358.180054", "High": "1395.599976", "Low": "1347.010010", "Close": "1394.969971", "Adj Close": "1394.969971", "Volume": "1810200"}, {"Date": "2020-06-30", "Open": "1390.439941", "High": "1418.650024", "Low": "1383.959961", "Close": "1413.609985", "Adj Close": "1413.609985", "Volume": "2042400"}, {"Date": "2020-07-01", "Open": "1411.099976", "High": "1443.000000", "Low": "1409.819946", "Close": "1438.040039", "Adj Close": "1438.040039", "Volume": "1775200"}, {"Date": "2020-07-02", "Open": "1446.939941", "High": "1482.949951", "Low": "1446.420044", "Close": "1464.699951", "Adj Close": "1464.699951", "Volume": "1859100"}, {"Date": "2020-07-06", "Open": "1480.060059", "High": "1506.589966", "Low": "1472.859985", "Close": "1495.699951", "Adj Close": "1495.699951", "Volume": "1564000"}, {"Date": "2020-07-07", "Open": "1490.000000", "High": "1516.800049", "Low": "1483.550049", "Close": "1485.180054", "Adj Close": "1485.180054", "Volume": "1458200"}, {"Date": "2020-07-08", "Open": "1494.319946", "High": "1505.880005", "Low": "1485.630005", "Close": "1496.000000", "Adj Close": "1496.000000", "Volume": "1249700"}, {"Date": "2020-07-09", "Open": "1506.449951", "High": "1522.719971", "Low": "1488.084961", "Close": "1510.989990", "Adj Close": "1510.989990", "Volume": "1423300"}, {"Date": "2020-07-10", "Open": "1506.150024", "High": "1543.829956", "Low": "1496.540039", "Close": "1541.739990", "Adj Close": "1541.739990", "Volume": "1856300"}, {"Date": "2020-07-13", "Open": "1550.000000", "High": "1577.131958", "Low": "1505.243042", "Close": "1511.339966", "Adj Close": "1511.339966", "Volume": "1846400"}, {"Date": "2020-07-14", "Open": "1490.310059", "High": "1522.949951", "Low": "1483.500000", "Close": "1520.579956", "Adj Close": "1520.579956", "Volume": "1585000"}, {"Date": "2020-07-15", "Open": "1523.130005", "High": "1535.329956", "Low": "1498.000000", "Close": "1513.640015", "Adj Close": "1513.640015", "Volume": "1610700"}, {"Date": "2020-07-16", "Open": "1500.000000", "High": "1518.689941", "Low": "1486.310059", "Close": "1518.000000", "Adj Close": "1518.000000", "Volume": "1519300"}, {"Date": "2020-07-17", "Open": "1521.619995", "High": "1523.439941", "Low": "1498.420044", "Close": "1515.550049", "Adj Close": "1515.550049", "Volume": "1456700"}, {"Date": "2020-07-20", "Open": "1515.260010", "High": "1570.290039", "Low": "1503.599976", "Close": "1565.719971", "Adj Close": "1565.719971", "Volume": "1557300"}, {"Date": "2020-07-21", "Open": "1586.989990", "High": "1586.989990", "Low": "1554.280029", "Close": "1558.420044", "Adj Close": "1558.420044", "Volume": "1216200"}, {"Date": "2020-07-22", "Open": "1560.500000", "High": "1570.000000", "Low": "1546.099976", "Close": "1568.489990", "Adj Close": "1568.489990", "Volume": "932000"}, {"Date": "2020-07-23", "Open": "1566.969971", "High": "1571.869995", "Low": "1507.391968", "Close": "1515.680054", "Adj Close": "1515.680054", "Volume": "1627600"}, {"Date": "2020-07-24", "Open": "1498.930054", "High": "1517.635986", "Low": "1488.400024", "Close": "1511.869995", "Adj Close": "1511.869995", "Volume": "1544000"}, {"Date": "2020-07-27", "Open": "1515.599976", "High": "1540.969971", "Low": "1515.209961", "Close": "1530.199951", "Adj Close": "1530.199951", "Volume": "1246000"}, {"Date": "2020-07-28", "Open": "1525.180054", "High": "1526.479980", "Low": "1497.660034", "Close": "1500.339966", "Adj Close": "1500.339966", "Volume": "1702200"}, {"Date": "2020-07-29", "Open": "1506.319946", "High": "1531.251953", "Low": "1501.329956", "Close": "1522.020020", "Adj Close": "1522.020020", "Volume": "1106500"}, {"Date": "2020-07-30", "Open": "1497.000000", "High": "1537.869995", "Low": "1492.219971", "Close": "1531.449951", "Adj Close": "1531.449951", "Volume": "1671400"}, {"Date": "2020-07-31", "Open": "1505.010010", "High": "1508.949951", "Low": "1454.030029", "Close": "1482.959961", "Adj Close": "1482.959961", "Volume": "3439900"}, {"Date": "2020-08-03", "Open": "1486.640015", "High": "1490.469971", "Low": "1465.640015", "Close": "1474.449951", "Adj Close": "1474.449951", "Volume": "2330200"}, {"Date": "2020-08-04", "Open": "1476.569946", "High": "1485.560059", "Low": "1458.650024", "Close": "1464.969971", "Adj Close": "1464.969971", "Volume": "1903500"}, {"Date": "2020-08-05", "Open": "1469.300049", "High": "1482.410034", "Low": "1463.459961", "Close": "1473.609985", "Adj Close": "1473.609985", "Volume": "1979500"}, {"Date": "2020-08-06", "Open": "1471.750000", "High": "1502.390015", "Low": "1466.000000", "Close": "1500.099976", "Adj Close": "1500.099976", "Volume": "1995400"}, {"Date": "2020-08-07", "Open": "1500.000000", "High": "1516.844971", "Low": "1481.640015", "Close": "1494.489990", "Adj Close": "1494.489990", "Volume": "1577800"}, {"Date": "2020-08-10", "Open": "1487.180054", "High": "1504.074951", "Low": "1473.079956", "Close": "1496.099976", "Adj Close": "1496.099976", "Volume": "1289300"}, {"Date": "2020-08-11", "Open": "1492.439941", "High": "1510.000000", "Low": "1478.000000", "Close": "1480.319946", "Adj Close": "1480.319946", "Volume": "1454400"}, {"Date": "2020-08-12", "Open": "1485.579956", "High": "1512.385986", "Low": "1485.250000", "Close": "1506.619995", "Adj Close": "1506.619995", "Volume": "1437000"}, {"Date": "2020-08-13", "Open": "1510.339966", "High": "1537.250000", "Low": "1508.005005", "Close": "1518.449951", "Adj Close": "1518.449951", "Volume": "1455200"}, {"Date": "2020-08-14", "Open": "1515.660034", "High": "1521.900024", "Low": "1502.880005", "Close": "1507.729980", "Adj Close": "1507.729980", "Volume": "1354800"}, {"Date": "2020-08-17", "Open": "1514.670044", "High": "1525.609985", "Low": "1507.969971", "Close": "1517.979980", "Adj Close": "1517.979980", "Volume": "1378300"}, {"Date": "2020-08-18", "Open": "1526.180054", "High": "1562.469971", "Low": "1523.709961", "Close": "1558.599976", "Adj Close": "1558.599976", "Volume": "2027100"}, {"Date": "2020-08-19", "Open": "1553.310059", "High": "1573.680054", "Low": "1543.949951", "Close": "1547.530029", "Adj Close": "1547.530029", "Volume": "1660600"}, {"Date": "2020-08-20", "Open": "1543.449951", "High": "1585.869995", "Low": "1538.199951", "Close": "1581.750000", "Adj Close": "1581.750000", "Volume": "1706900"}, {"Date": "2020-08-21", "Open": "1577.030029", "High": "1597.719971", "Low": "1568.005005", "Close": "1580.420044", "Adj Close": "1580.420044", "Volume": "1446500"}, {"Date": "2020-08-24", "Open": "1593.979980", "High": "1614.170044", "Low": "1580.569946", "Close": "1588.199951", "Adj Close": "1588.199951", "Volume": "1409900"}, {"Date": "2020-08-25", "Open": "1582.069946", "High": "1611.619995", "Low": "1582.069946", "Close": "1608.219971", "Adj Close": "1608.219971", "Volume": "2247100"}, {"Date": "2020-08-26", "Open": "1608.000000", "High": "1659.219971", "Low": "1603.599976", "Close": "1652.380005", "Adj Close": "1652.380005", "Volume": "3993400"}, {"Date": "2020-08-27", "Open": "1653.680054", "High": "1655.000000", "Low": "1625.750000", "Close": "1634.329956", "Adj Close": "1634.329956", "Volume": "1861600"}, {"Date": "2020-08-28", "Open": "1633.489990", "High": "1647.170044", "Low": "1630.750000", "Close": "1644.410034", "Adj Close": "1644.410034", "Volume": "1499000"}, {"Date": "2020-08-31", "Open": "1647.890015", "High": "1647.964966", "Low": "1630.310059", "Close": "1634.180054", "Adj Close": "1634.180054", "Volume": "1823400"}, {"Date": "2020-09-01", "Open": "1636.630005", "High": "1665.729980", "Low": "1632.219971", "Close": "1660.709961", "Adj Close": "1660.709961", "Volume": "1825300"}, {"Date": "2020-09-02", "Open": "1673.775024", "High": "1733.180054", "Low": "1666.329956", "Close": "1728.280029", "Adj Close": "1728.280029", "Volume": "2511200"}, {"Date": "2020-09-03", "Open": "1709.713989", "High": "1709.713989", "Low": "1615.060059", "Close": "1641.839966", "Adj Close": "1641.839966", "Volume": "3107800"}, {"Date": "2020-09-04", "Open": "1624.260010", "High": "1645.109985", "Low": "1547.613037", "Close": "1591.040039", "Adj Close": "1591.040039", "Volume": "2608600"}, {"Date": "2020-09-08", "Open": "1533.510010", "High": "1563.864990", "Low": "1528.010010", "Close": "1532.390015", "Adj Close": "1532.390015", "Volume": "2610900"}, {"Date": "2020-09-09", "Open": "1557.530029", "High": "1569.000000", "Low": "1536.051025", "Close": "1556.959961", "Adj Close": "1556.959961", "Volume": "1774700"}, {"Date": "2020-09-10", "Open": "1560.640015", "High": "1584.081055", "Low": "1525.805054", "Close": "1532.020020", "Adj Close": "1532.020020", "Volume": "1618600"}, {"Date": "2020-09-11", "Open": "1536.000000", "High": "1575.199951", "Low": "1497.359985", "Close": "1520.719971", "Adj Close": "1520.719971", "Volume": "1597100"}, {"Date": "2020-09-14", "Open": "1539.005005", "High": "1564.000000", "Low": "1515.739990", "Close": "1519.280029", "Adj Close": "1519.280029", "Volume": "1696600"}, {"Date": "2020-09-15", "Open": "1536.000000", "High": "1559.569946", "Low": "1531.834961", "Close": "1541.439941", "Adj Close": "1541.439941", "Volume": "1331100"}, {"Date": "2020-09-16", "Open": "1555.540039", "High": "1562.000000", "Low": "1519.819946", "Close": "1520.900024", "Adj Close": "1520.900024", "Volume": "1311700"}, {"Date": "2020-09-17", "Open": "1496.000000", "High": "1508.297974", "Low": "1470.000000", "Close": "1495.530029", "Adj Close": "1495.530029", "Volume": "1879800"}, {"Date": "2020-09-18", "Open": "1498.010010", "High": "1503.003052", "Low": "1437.130005", "Close": "1459.989990", "Adj Close": "1459.989990", "Volume": "3103900"}, {"Date": "2020-09-21", "Open": "1440.060059", "High": "1448.359985", "Low": "1406.550049", "Close": "1431.160034", "Adj Close": "1431.160034", "Volume": "2888800"}, {"Date": "2020-09-22", "Open": "1450.089966", "High": "1469.520020", "Low": "1434.530029", "Close": "1465.459961", "Adj Close": "1465.459961", "Volume": "1583200"}, {"Date": "2020-09-23", "Open": "1458.780029", "High": "1460.959961", "Low": "1407.699951", "Close": "1415.209961", "Adj Close": "1415.209961", "Volume": "1657400"}, {"Date": "2020-09-24", "Open": "1411.030029", "High": "1443.708984", "Low": "1409.849976", "Close": "1428.290039", "Adj Close": "1428.290039", "Volume": "1450200"}, {"Date": "2020-09-25", "Open": "1432.630005", "High": "1450.000000", "Low": "1413.339966", "Close": "1444.959961", "Adj Close": "1444.959961", "Volume": "1323000"}, {"Date": "2020-09-28", "Open": "1474.209961", "High": "1476.800049", "Low": "1449.301025", "Close": "1464.520020", "Adj Close": "1464.520020", "Volume": "2007900"}, {"Date": "2020-09-29", "Open": "1470.390015", "High": "1476.662964", "Low": "1458.805054", "Close": "1469.329956", "Adj Close": "1469.329956", "Volume": "978200"}, {"Date": "2020-09-30", "Open": "1466.800049", "High": "1489.750000", "Low": "1459.880005", "Close": "1469.599976", "Adj Close": "1469.599976", "Volume": "1701600"}, {"Date": "2020-10-01", "Open": "1484.270020", "High": "1499.040039", "Low": "1479.209961", "Close": "1490.089966", "Adj Close": "1490.089966", "Volume": "1779500"}, {"Date": "2020-10-02", "Open": "1462.030029", "High": "1483.199951", "Low": "1450.920044", "Close": "1458.420044", "Adj Close": "1458.420044", "Volume": "1284100"}, {"Date": "2020-10-05", "Open": "1466.209961", "High": "1488.209961", "Low": "1464.270020", "Close": "1486.020020", "Adj Close": "1486.020020", "Volume": "1113300"}, {"Date": "2020-10-06", "Open": "1475.579956", "High": "1486.760010", "Low": "1448.589966", "Close": "1453.439941", "Adj Close": "1453.439941", "Volume": "1245400"}, {"Date": "2020-10-07", "Open": "1464.290039", "High": "1468.959961", "Low": "1436.000000", "Close": "1460.290039", "Adj Close": "1460.290039", "Volume": "1746200"}, {"Date": "2020-10-08", "Open": "1465.089966", "High": "1490.000000", "Low": "1465.089966", "Close": "1485.930054", "Adj Close": "1485.930054", "Volume": "1187800"}, {"Date": "2020-10-09", "Open": "1494.699951", "High": "1516.520020", "Low": "1489.449951", "Close": "1515.219971", "Adj Close": "1515.219971", "Volume": "1435300"}, {"Date": "2020-10-12", "Open": "1543.000000", "High": "1593.859985", "Low": "1532.569946", "Close": "1569.150024", "Adj Close": "1569.150024", "Volume": "2482600"}, {"Date": "2020-10-13", "Open": "1583.729980", "High": "1590.000000", "Low": "1563.199951", "Close": "1571.680054", "Adj Close": "1571.680054", "Volume": "1601000"}, {"Date": "2020-10-14", "Open": "1578.589966", "High": "1587.683960", "Low": "1550.530029", "Close": "1568.079956", "Adj Close": "1568.079956", "Volume": "1929300"}, {"Date": "2020-10-15", "Open": "1547.150024", "High": "1575.104980", "Low": "1545.030029", "Close": "1559.130005", "Adj Close": "1559.130005", "Volume": "1540000"}, {"Date": "2020-10-16", "Open": "1565.849976", "High": "1581.130005", "Low": "1563.000000", "Close": "1573.010010", "Adj Close": "1573.010010", "Volume": "1434700"}, {"Date": "2020-10-19", "Open": "1580.459961", "High": "1588.150024", "Low": "1528.000000", "Close": "1534.609985", "Adj Close": "1534.609985", "Volume": "1607100"}, {"Date": "2020-10-20", "Open": "1527.050049", "High": "1577.500000", "Low": "1525.670044", "Close": "1555.930054", "Adj Close": "1555.930054", "Volume": "2241700"}, {"Date": "2020-10-21", "Open": "1573.329956", "High": "1618.729980", "Low": "1571.630005", "Close": "1593.310059", "Adj Close": "1593.310059", "Volume": "2568300"}, {"Date": "2020-10-22", "Open": "1593.050049", "High": "1621.989990", "Low": "1585.000000", "Close": "1615.329956", "Adj Close": "1615.329956", "Volume": "1433600"}, {"Date": "2020-10-23", "Open": "1626.069946", "High": "1642.359985", "Low": "1620.510010", "Close": "1641.000000", "Adj Close": "1641.000000", "Volume": "1375800"}, {"Date": "2020-10-26", "Open": "1625.010010", "High": "1638.239990", "Low": "1576.500000", "Close": "1590.449951", "Adj Close": "1590.449951", "Volume": "1853300"}, {"Date": "2020-10-27", "Open": "1595.670044", "High": "1606.844971", "Low": "1582.780029", "Close": "1604.260010", "Adj Close": "1604.260010", "Volume": "1229000"}, {"Date": "2020-10-28", "Open": "1559.739990", "High": "1561.349976", "Low": "1514.619995", "Close": "1516.619995", "Adj Close": "1516.619995", "Volume": "1834000"}, {"Date": "2020-10-29", "Open": "1522.359985", "High": "1593.709961", "Low": "1522.239990", "Close": "1567.239990", "Adj Close": "1567.239990", "Volume": "2003100"}, {"Date": "2020-10-30", "Open": "1672.109985", "High": "1687.000000", "Low": "1604.459961", "Close": "1621.010010", "Adj Close": "1621.010010", "Volume": "4329100"}, {"Date": "2020-11-02", "Open": "1628.160034", "High": "1660.770020", "Low": "1616.030029", "Close": "1626.030029", "Adj Close": "1626.030029", "Volume": "2535400"}, {"Date": "2020-11-03", "Open": "1631.780029", "High": "1661.699951", "Low": "1616.619995", "Close": "1650.209961", "Adj Close": "1650.209961", "Volume": "1661700"}, {"Date": "2020-11-04", "Open": "1710.280029", "High": "1771.364990", "Low": "1706.030029", "Close": "1749.130005", "Adj Close": "1749.130005", "Volume": "3570900"}, {"Date": "2020-11-05", "Open": "1781.000000", "High": "1793.640015", "Low": "1750.510010", "Close": "1763.369995", "Adj Close": "1763.369995", "Volume": "2065800"}, {"Date": "2020-11-06", "Open": "1753.949951", "High": "1772.430054", "Low": "1740.349976", "Close": "1761.750000", "Adj Close": "1761.750000", "Volume": "1660900"}, {"Date": "2020-11-09", "Open": "1790.900024", "High": "1818.060059", "Low": "1760.020020", "Close": "1763.000000", "Adj Close": "1763.000000", "Volume": "2268300"}, {"Date": "2020-11-10", "Open": "1731.089966", "High": "1763.000000", "Low": "1717.300049", "Close": "1740.390015", "Adj Close": "1740.390015", "Volume": "2636100"}, {"Date": "2020-11-11", "Open": "1750.000000", "High": "1764.219971", "Low": "1747.364990", "Close": "1752.709961", "Adj Close": "1752.709961", "Volume": "1264000"}, {"Date": "2020-11-12", "Open": "1747.630005", "High": "1768.270020", "Low": "1745.599976", "Close": "1749.839966", "Adj Close": "1749.839966", "Volume": "1247500"}, {"Date": "2020-11-13", "Open": "1757.630005", "High": "1781.040039", "Low": "1744.550049", "Close": "1777.020020", "Adj Close": "1777.020020", "Volume": "1499900"}, {"Date": "2020-11-16", "Open": "1771.699951", "High": "1799.069946", "Low": "1767.689941", "Close": "1781.380005", "Adj Close": "1781.380005", "Volume": "1246800"}, {"Date": "2020-11-17", "Open": "1776.939941", "High": "1785.000000", "Low": "1767.000000", "Close": "1770.150024", "Adj Close": "1770.150024", "Volume": "1147100"}, {"Date": "2020-11-18", "Open": "1765.229980", "High": "1773.469971", "Low": "1746.140015", "Close": "1746.780029", "Adj Close": "1746.780029", "Volume": "1173500"}, {"Date": "2020-11-19", "Open": "1738.380005", "High": "1769.589966", "Low": "1737.005005", "Close": "1763.920044", "Adj Close": "1763.920044", "Volume": "1249900"}, {"Date": "2020-11-20", "Open": "1765.209961", "High": "1774.000000", "Low": "1741.859985", "Close": "1742.189941", "Adj Close": "1742.189941", "Volume": "2313500"}, {"Date": "2020-11-23", "Open": "1749.599976", "High": "1753.900024", "Low": "1717.719971", "Close": "1734.859985", "Adj Close": "1734.859985", "Volume": "2161600"}, {"Date": "2020-11-24", "Open": "1730.500000", "High": "1771.599976", "Low": "1727.689941", "Close": "1768.880005", "Adj Close": "1768.880005", "Volume": "1578000"}, {"Date": "2020-11-25", "Open": "1772.890015", "High": "1778.540039", "Low": "1756.540039", "Close": "1771.430054", "Adj Close": "1771.430054", "Volume": "1045800"}, {"Date": "2020-11-27", "Open": "1773.089966", "High": "1804.000000", "Low": "1772.439941", "Close": "1793.189941", "Adj Close": "1793.189941", "Volume": "884900"}, {"Date": "2020-11-30", "Open": "1781.183960", "High": "1788.064941", "Low": "1755.000000", "Close": "1760.739990", "Adj Close": "1760.739990", "Volume": "1823800"}, {"Date": "2020-12-01", "Open": "1774.369995", "High": "1824.829956", "Low": "1769.369995", "Close": "1798.099976", "Adj Close": "1798.099976", "Volume": "1739000"}, {"Date": "2020-12-02", "Open": "1798.099976", "High": "1835.650024", "Low": "1789.473022", "Close": "1827.949951", "Adj Close": "1827.949951", "Volume": "1222000"}, {"Date": "2020-12-03", "Open": "1824.010010", "High": "1847.199951", "Low": "1822.650024", "Close": "1826.770020", "Adj Close": "1826.770020", "Volume": "1227300"}, {"Date": "2020-12-04", "Open": "1824.520020", "High": "1833.160034", "Low": "1816.989990", "Close": "1827.989990", "Adj Close": "1827.989990", "Volume": "1378200"}, {"Date": "2020-12-07", "Open": "1819.000000", "High": "1832.369995", "Low": "1805.780029", "Close": "1819.479980", "Adj Close": "1819.479980", "Volume": "1320900"}, {"Date": "2020-12-08", "Open": "1810.099976", "High": "1821.900024", "Low": "1796.204956", "Close": "1818.550049", "Adj Close": "1818.550049", "Volume": "1096300"}, {"Date": "2020-12-09", "Open": "1812.010010", "High": "1834.270020", "Low": "1767.810059", "Close": "1784.130005", "Adj Close": "1784.130005", "Volume": "1507600"}, {"Date": "2020-12-10", "Open": "1769.800049", "High": "1781.310059", "Low": "1740.319946", "Close": "1775.329956", "Adj Close": "1775.329956", "Volume": "1362800"}, {"Date": "2020-12-11", "Open": "1763.060059", "High": "1784.449951", "Low": "1760.000000", "Close": "1781.770020", "Adj Close": "1781.770020", "Volume": "1220700"}, {"Date": "2020-12-14", "Open": "1775.000000", "High": "1797.390015", "Low": "1757.214966", "Close": "1760.060059", "Adj Close": "1760.060059", "Volume": "1600200"}, {"Date": "2020-12-15", "Open": "1764.420044", "High": "1771.420044", "Low": "1749.949951", "Close": "1767.770020", "Adj Close": "1767.770020", "Volume": "1482300"}, {"Date": "2020-12-16", "Open": "1772.880005", "High": "1773.000000", "Low": "1756.079956", "Close": "1763.000000", "Adj Close": "1763.000000", "Volume": "1513500"}, {"Date": "2020-12-17", "Open": "1768.510010", "High": "1771.784058", "Low": "1738.660034", "Close": "1747.900024", "Adj Close": "1747.900024", "Volume": "1624700"}, {"Date": "2020-12-18", "Open": "1754.180054", "High": "1755.109985", "Low": "1720.219971", "Close": "1731.010010", "Adj Close": "1731.010010", "Volume": "4016400"}, {"Date": "2020-12-21", "Open": "1713.510010", "High": "1740.849976", "Low": "1699.000000", "Close": "1739.369995", "Adj Close": "1739.369995", "Volume": "1828400"}, {"Date": "2020-12-22", "Open": "1734.430054", "High": "1737.405029", "Low": "1712.574951", "Close": "1723.500000", "Adj Close": "1723.500000", "Volume": "936700"}, {"Date": "2020-12-23", "Open": "1728.109985", "High": "1747.989990", "Low": "1725.040039", "Close": "1732.380005", "Adj Close": "1732.380005", "Volume": "1033800"}, {"Date": "2020-12-24", "Open": "1735.000000", "High": "1746.000000", "Low": "1729.109985", "Close": "1738.849976", "Adj Close": "1738.849976", "Volume": "346800"}, {"Date": "2020-12-28", "Open": "1751.635010", "High": "1790.728027", "Low": "1746.334961", "Close": "1776.089966", "Adj Close": "1776.089966", "Volume": "1393000"}, {"Date": "2020-12-29", "Open": "1787.790039", "High": "1792.439941", "Low": "1756.089966", "Close": "1758.719971", "Adj Close": "1758.719971", "Volume": "1299400"}, {"Date": "2020-12-30", "Open": "1762.010010", "High": "1765.094971", "Low": "1725.599976", "Close": "1739.520020", "Adj Close": "1739.520020", "Volume": "1306100"}, {"Date": "2020-12-31", "Open": "1735.420044", "High": "1758.930054", "Low": "1735.420044", "Close": "1751.880005", "Adj Close": "1751.880005", "Volume": "1011900"}, {"Date": "2021-01-04", "Open": "1757.540039", "High": "1760.650024", "Low": "1707.849976", "Close": "1728.239990", "Adj Close": "1728.239990", "Volume": "1901900"}, {"Date": "2021-01-05", "Open": "1725.000000", "High": "1747.670044", "Low": "1718.015015", "Close": "1740.920044", "Adj Close": "1740.920044", "Volume": "1145300"}, {"Date": "2021-01-06", "Open": "1702.630005", "High": "1748.000000", "Low": "1699.000000", "Close": "1735.290039", "Adj Close": "1735.290039", "Volume": "2602100"}, {"Date": "2021-01-07", "Open": "1740.060059", "High": "1788.400024", "Low": "1737.050049", "Close": "1787.250000", "Adj Close": "1787.250000", "Volume": "2265000"}, {"Date": "2021-01-08", "Open": "1787.979980", "High": "1809.839966", "Low": "1773.535034", "Close": "1807.209961", "Adj Close": "1807.209961", "Volume": "2050600"}, {"Date": "2021-01-11", "Open": "1786.069946", "High": "1794.314941", "Low": "1760.520020", "Close": "1766.719971", "Adj Close": "1766.719971", "Volume": "1209700"}, {"Date": "2021-01-12", "Open": "1753.920044", "High": "1778.040039", "Low": "1725.310059", "Close": "1746.550049", "Adj Close": "1746.550049", "Volume": "1357700"}, {"Date": "2021-01-13", "Open": "1738.579956", "High": "1765.035034", "Low": "1738.010010", "Close": "1754.400024", "Adj Close": "1754.400024", "Volume": "1094100"}, {"Date": "2021-01-14", "Open": "1753.619995", "High": "1775.010010", "Low": "1733.400024", "Close": "1740.180054", "Adj Close": "1740.180054", "Volume": "1179500"}, {"Date": "2021-01-15", "Open": "1738.189941", "High": "1756.000000", "Low": "1721.550049", "Close": "1736.189941", "Adj Close": "1736.189941", "Volume": "1342200"}, {"Date": "2021-01-19", "Open": "1752.250000", "High": "1809.275024", "Low": "1741.459961", "Close": "1790.859985", "Adj Close": "1790.859985", "Volume": "1734600"}, {"Date": "2021-01-20", "Open": "1831.459961", "High": "1903.709961", "Low": "1825.530029", "Close": "1886.900024", "Adj Close": "1886.900024", "Volume": "2490300"}, {"Date": "2021-01-21", "Open": "1898.000000", "High": "1934.859985", "Low": "1887.109985", "Close": "1891.250000", "Adj Close": "1891.250000", "Volume": "2063900"}, {"Date": "2021-01-22", "Open": "1895.680054", "High": "1910.949951", "Low": "1881.760010", "Close": "1901.050049", "Adj Close": "1901.050049", "Volume": "1272100"}, {"Date": "2021-01-25", "Open": "1920.670044", "High": "1929.579956", "Low": "1867.530029", "Close": "1899.400024", "Adj Close": "1899.400024", "Volume": "1927300"}, {"Date": "2021-01-26", "Open": "1888.839966", "High": "1925.000000", "Low": "1884.244995", "Close": "1917.239990", "Adj Close": "1917.239990", "Volume": "1313100"}, {"Date": "2021-01-27", "Open": "1882.530029", "High": "1890.000000", "Low": "1809.000000", "Close": "1830.790039", "Adj Close": "1830.790039", "Volume": "2748300"}, {"Date": "2021-01-28", "Open": "1843.939941", "High": "1898.829956", "Low": "1842.640015", "Close": "1863.109985", "Adj Close": "1863.109985", "Volume": "1773100"}, {"Date": "2021-01-29", "Open": "1846.170044", "High": "1857.280029", "Low": "1810.199951", "Close": "1835.739990", "Adj Close": "1835.739990", "Volume": "1612600"}, {"Date": "2021-02-01", "Open": "1853.569946", "High": "1922.391968", "Low": "1850.930054", "Close": "1901.349976", "Adj Close": "1901.349976", "Volume": "1602200"}, {"Date": "2021-02-02", "Open": "1922.560059", "High": "1955.760010", "Low": "1914.489990", "Close": "1927.510010", "Adj Close": "1927.510010", "Volume": "2273700"}, {"Date": "2021-02-03", "Open": "2073.000000", "High": "2116.500000", "Low": "2018.380005", "Close": "2070.070068", "Adj Close": "2070.070068", "Volume": "4118200"}, {"Date": "2021-02-04", "Open": "2068.889893", "High": "2078.550049", "Low": "2042.589966", "Close": "2062.370117", "Adj Close": "2062.370117", "Volume": "1852300"}, {"Date": "2021-02-05", "Open": "2070.000000", "High": "2102.510010", "Low": "2059.330078", "Close": "2098.000000", "Adj Close": "2098.000000", "Volume": "1533900"}, {"Date": "2021-02-08", "Open": "2105.909912", "High": "2123.547119", "Low": "2072.000000", "Close": "2092.909912", "Adj Close": "2092.909912", "Volume": "1241900"}, {"Date": "2021-02-09", "Open": "2078.540039", "High": "2105.129883", "Low": "2078.540039", "Close": "2083.510010", "Adj Close": "2083.510010", "Volume": "889900"}, {"Date": "2021-02-10", "Open": "2094.209961", "High": "2108.370117", "Low": "2063.090088", "Close": "2095.379883", "Adj Close": "2095.379883", "Volume": "1135500"}, {"Date": "2021-02-11", "Open": "2099.510010", "High": "2102.030029", "Low": "2077.320068", "Close": "2095.889893", "Adj Close": "2095.889893", "Volume": "945200"}, {"Date": "2021-02-12", "Open": "2090.250000", "High": "2108.820068", "Low": "2083.129883", "Close": "2104.110107", "Adj Close": "2104.110107", "Volume": "855700"}, {"Date": "2021-02-16", "Open": "2104.360107", "High": "2152.679932", "Low": "2104.360107", "Close": "2121.899902", "Adj Close": "2121.899902", "Volume": "1132900"}, {"Date": "2021-02-17", "Open": "2100.000000", "High": "2133.659912", "Low": "2098.919922", "Close": "2128.310059", "Adj Close": "2128.310059", "Volume": "1070100"}, {"Date": "2021-02-18", "Open": "2110.389893", "High": "2132.735107", "Low": "2103.709961", "Close": "2117.199951", "Adj Close": "2117.199951", "Volume": "1121600"}, {"Date": "2021-02-19", "Open": "2119.270020", "High": "2130.530029", "Low": "2097.409912", "Close": "2101.139893", "Adj Close": "2101.139893", "Volume": "1457400"}]