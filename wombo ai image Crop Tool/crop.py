from PIL import Image
from tkinter import filedialog as filegui
from tkinter import messagebox as msgbox
import sys

if len(sys.argv) <= 1:
    files = filegui.askopenfilenames(filetypes=[("Image",[".png",".jpg"])])
    save_path = filegui.askdirectory()
    for f in files:
        img = Image.open(f)
        img_croped = img.crop((67,216,1014,1771))
        img_croped = img_croped.resize((950,1550))
        print(save_path + '/' + f.rsplit('/')[-1])
        img_croped.save(save_path + '/' + f.rsplit('/')[-1])
else :
    
    save_path = filegui.askdirectory()
    for f in sys.argv:
        if f == sys.argv[0]:
            continue
        img = Image.open(f)
        img_croped = img.crop((67,216,1014,1771))
        img_croped = img_croped.resize((950,1550))
        print(save_path + '\\' + f.rsplit('\\')[-1])
        img_croped.save(save_path + '\\' + f.rsplit('\\')[-1])