import json

ret = {}
with open("./해설 작성 내역.md", "r", encoding="utf-8") as file:
    datas = file.readlines()
    for data in datas[6:]:
        row = data.strip().split('|')
        ret[row[1]] = {"number" : row[1], "name" : row[2]}

with open("./algorithm.json", "w", encoding='UTF-8') as file:
    json.dump(ret, file, ensure_ascii=False)
    