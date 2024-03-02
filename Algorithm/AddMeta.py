import os.path
from datetime import datetime

folder=os.getcwd()

for filename in os.listdir(folder):
	ext=filename.split('.')[-1]
	if ext == 'md' and filename[0] >= '0'and filename[0] <= '9':
		new_text_content = ''
		with open(filename, 'r', encoding='utf-8') as f:
			lines = f.readlines()
			for i, l in enumerate(lines):
				if i == 1: # Created
					creation_time = os.path.getctime(filename)
					creation_time = datetime.fromtimestamp(creation_time)
					new_string = f'created : {creation_time}\n'
					new_text_content += new_string
					print(new_string)
				elif i == 2: # title
					new_string = f'title : {lines[7][lines[7].find("백"):]}'
					new_text_content += new_string
					print(new_string)
				elif i == 3: # Tag
					idx = 0
					for i, l in enumerate(lines):
						if "문제 구분" in l:
							idx = i
							break
					new_string = f'tag : [{lines[idx][lines[idx].find("#"):]}]'
					new_string = new_string.replace('#', '', 1)
					new_string = new_string.replace('#', ',', 1)
					new_text_content += new_string
					print(new_string)
				elif i == 4: # Author
					new_string = f'author : taehyeok\n'
					new_text_content += new_string
					print(new_string)
				elif i == 5: # Catagory
					new_string = f'category : algorithm\n'
					new_text_content += new_string
					print(new_string)
				else:
					new_text_content += l
		with open(filename,'w') as f:
			f.write(new_text_content)