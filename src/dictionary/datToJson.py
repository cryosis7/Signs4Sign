import json
import re
import os

lines = []
cwd = os.path.dirname(os.path.abspath(__file__))
datFilePath = os.path.normpath(os.path.join(cwd, 'nzsl.dat'))
jsonFilePath = os.path.normpath(os.path.join(cwd, 'nzsl.json'))

with open(datFilePath, encoding='iso8859') as datFile:
    for line in datFile:
        words = line.split('\t')
        entry = {}
        entry['english'] = words[0]
        entry['description'] = words[1]
        entry['maori'] = words[2]
        entry['videoUrl'] = words[3]
        entry['handShape'] = words[4]
        entry['location'] = words[5]
        lines.append(json.dump(entry))

with open(jsonFilePath, 'w', encoding='iso8859') as jsonFile:
    jsonFile.write(f'[{",".join(lines)}]')