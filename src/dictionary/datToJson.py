import re
import os

lines = []
cwd = os.path.dirname(os.path.abspath(__file__))
datFilePath = os.path.normpath(os.path.join(cwd, 'nzsl.dat'))
jsonFilePath = os.path.normpath(os.path.join(cwd, 'nzsl.json'))

with open(datFilePath, encoding='iso8859') as datFile:
    for line in datFile:
        line = re.sub(r'\t+', '", "', line)
        line = '["' + line
        line = line.replace("\n", '"]')
        lines.append(line)

with open(jsonFilePath, 'w', encoding='iso8859') as jsonFile:
    jsonFile.write(f'[{",".join(lines)}]')