import json
import pandas as pd

with open('src//data//rawOutAPI.json', 'r') as infile:
    #raw = json.load(infile)
    #raw = pd.read_json(infile)



# count = -1
# for game in raw:
#     if count == -1:
#         # Writing headers of CSV file
#         header = game.keys()
#         csv_writer.writerow(header)
#         count += 1

print(raw)