import json
import os
import re

def sortFunction(word: str):
    return re.sub(r'^\"\(.*\)\s?', '"', word)

cwd = os.path.dirname(os.path.abspath(__file__))
datFilePath = os.path.normpath(os.path.join(cwd, 'nzsl.dat'))
jsonFilePath = os.path.normpath(os.path.join(cwd, 'nzsl.json'))
wordlistFilePath = os.path.normpath(os.path.join(cwd, 'wordlist.json'))

dictionary = []
wordlist = []
with open(datFilePath, encoding='iso8859') as datFile:
    for line in datFile:
        words = line.split('\t')
        entry = {}
        entry['english'] = words[0]
        entry['secondary'] = words[1]
        entry['maori'] = words[2]
        entry['picture'] = words[3]
        entry['video'] = words[4]
        entry['handShape'] = words[5]
        entry['location'] = words[6].rstrip()
        dictionary.append(json.dumps(entry))

        synonyms = []
        for key in ['english', 'secondary', 'maori']:
            if entry[key] != '':
                [synonyms.append('"' + word.lower().strip() + '"') for word in entry[key].split(",")]
        [wordlist.append(word) for word in list(set(synonyms))]

with open(jsonFilePath, 'w', encoding='iso8859') as jsonFile:
    jsonFile.write(f'[{",".join(dictionary)}]')

with open(wordlistFilePath, 'w', encoding='iso8859') as wordlistFile:
    wordlistFile.write(f'[{",".join(sorted(wordlist, key=sortFunction))}]')