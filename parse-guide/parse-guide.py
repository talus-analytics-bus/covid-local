import re
from bs4 import BeautifulSoup
# from docx import Document

# guide = Document('guide.docx')

# # print(guide)

# objectives = []

# for table in guide.tables:
# 	for rownumber, row in enumerate(table.rows):
# 		# print(row.cells[0].text)
# 		if re.match('^Key Objective', row.cells[0].text) is not None:
# 			objectives.append({
# 				"name": row.cells[0].text,
# 				"description": row.cells[2].text,
# 				"required": table.rows[rownumber + 1].cells[2].text,
# 				"additional": table.rows[rownumber + 2].cells[2].text,
# 				})
# 		# for cell in row.cells:
# 			# print(cell.text)

# # print(objectives)


# for objective in objectives[0:1]:
# 	print(objective['name'])
# 	print(objective['required'])

with open('guide.html') as guideHTML: 

	soup = BeautifulSoup(guideHTML, 'html.parser')

	# objectives = soup.select('tr > td:first-of-type p span')
	# objectives = soup.find_all(string=re.compile('^(Key Objective|Resources|Required for Key Objective)'))

	# for objective in objectives: 
	# 	print(objective.strip())


	for a in soup.find_all('a', href=True): 
		print(a['href'])