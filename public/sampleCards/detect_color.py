from PIL import Image
import os
import sys

def get_dominant_color(filepath):
    img = Image.open(filepath)
    img = img.convert('RGB')
    img = img.resize((50, 50))
    colors = img.getcolors(2500)
    sorted_colors = sorted(colors, key=lambda t: t[0], reverse=True)
    return sorted_colors[0][1]

files = [f for f in os.listdir('.') if f.startswith('Screenshot')]
for f in files:
    r, g, b = get_dominant_color(f)
    print(f"{f}: R={r} G={g} B={b}")
