import re

lines = []
with open('nzsl.dat', encoding='iso8859') as datFile:
    for line in datFile:
        line = re.sub(r'\t+', '", "', line)
        line = '["' + line
        # print(line)
        line = line.replace("\n", '"]')
        # print(line)
        lines.append(line)

with open('nzsl.json', 'w', encoding='iso8859') as jsonFile:
    jsonFile.write(f'{{"data": [{",".join(lines)}]}}')