li = [1000,1001,1008,1038,1062,1174,1182,1189,1330,1342,1405,1469,1497,1553,1759,1799,1941,1987,2023,2212,2239,2438,2529,2557,2558,2580,2661,2739,2922,3980,6443,6603,6987,7490,7682,8393,9498,9663,10171,10172,10421,10597,10819,10869,10926,10971,10974,10998,12101,12908,13305,13908,14712,14888,14889,15566,15649,15650,15651,15652,15654,15655,15656,15657,15658,15659,15663,15664,15665,15666,15684,15918,16198,16922,16938,16987,17136,18290,18429,18430,19699,19942,19949,20208,20950,22944]

text = """
## 해설 작성 Table

#### 풀이 완료 : ✅| 풀이 중 : 🔼 미풀이 : ❌|

|문제 번호|문제 이름|풀이 작성 여부|
|--------|--------|-------------|
|1000|A+B|✅|
|1001|A-B|✅|
|1008|A/B|✅|
|1038|감소하는 수|✅|
|1062|가르침|✅|
|1174|줄어드는 수|✅|
|1182|부분수열의 합|✅|
|1189|컴백홈|✅|
|1342|행운의 문자열|✅|
|1497|기타콘서트|✅|
|1553|도미노 찾기|✅|
|1759|암호 만들기|✅|
|1799|비숍|✅|
|2529|부등호|✅|
|2557|Hello World|✅|
|2558|A+B - 2|✅|
|2580|스도쿠|✅|
|2661|좋은수열|✅|
|3980|선발 명단|✅|
|6443|애너그램|✅|
|6603|로또 |✅|
|9663|N-Queen|✅|
|10597|순열장난|✅|
|10819|차이를 최대로|✅|
|10869|사칙연산|❌|
|10926|??!|❌|
|10971|외판원 순회 2|✅|
|10974|모든 순열|✅|
|10998|A×B|❌|
|12101|1, 2, 3 더하기 2|❌|
|13908|비밀번호|❌|
|14712|넴모넴모 (Easy)|✅|
|14888|연산자 끼워넣기|✅|
|14889|스타트와 링크|✅|
|15566|개구리 1|❌|
|15649|N과 M (1)|✅|
|15650|N과 M (2)|✅|
|15651|N과 M (3)|✅|
|15652|N과 M (4)|✅|
|15654|N과 M (5)|✅|
|15655|N과 M (6)|✅|
|15656|N과 M (7)|✅|
|15657|N과 M (8)|✅|
|15658|연산자 끼워넣기 (2)|❌|
|15663|N과 M(9)|✅|
|15664|N과 M (10)|✅|
|15665|N과 M (11)|✅|
|15666|N과 M (12)|✅|
|16198|에너지 모으기|❌|
|16922|로마 숫자 만들기|❌|
|16987|계란으로 계란치기|✅|
|17136|색종이 붙이기|❌|
|18290|NM과 K (1)|❌|
|18429|근손실|❌|
|18430|무기 공학|✅|
|19699|소-난다!|❌|
|19942|다이어트|❌|
|19949|영재의 시험|❌|
|20950|미술가 미미|❌|
|22944|죽음의 비|❌|
|2023|신기한 소수|❌|
|7490|0 만들기|❌|
|1330|두 수 비교하기|❌|
|7682|틱택토|❌|
|20208|진우의 민트초코우유|❌|
|2922|즐거운 단어|❌|
|16938|캠프 준비|❌|
|9498|시험 성적|❌|
|8393|합|❌|
|13305|주유소|❌|
|15918|랭퍼든 수열쟁이야!!|❌|
|12908|텔레포트 3|❌|
|6987|월드컵|✅|
|1405|미친로봇|✅|
|1987|알파벳|✅|
|2239|스도쿠|✅|
|15659|연산자 끼워넣기 (3)|✅|
|10171|고양이|✅|
|2212|센서|❌|
|1941|소문난 칠공주|❌|
|15684|사다리 조작|❌|
|10172|개|❌|
|2739|구구단|❌|
|2438|별 찍기 - 1|❌|
"""
for number in li:
    if str(number) not in text:
        print(number)