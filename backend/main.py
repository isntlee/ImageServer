import os, shlex, subprocess
from fastapi import FastAPI
from pathlib import Path
from pydicom import dcmread

app = FastAPI()

@app.get("/button_one")
async def server_read():
    commands = ["uptime", "date"]
    values = []

    for cmd in commands:
        args = shlex.split(cmd)
        p = subprocess.Popen(args, stdout=subprocess.PIPE)
        output = p.communicate()

        if cmd == commands[0]:
            str_load = output[0].decode("utf-8")
            idx_load = str_load.find('load')
            load = str_load[idx_load:-1]
            values.append(load)

        else:
            str_date = output[0].decode("utf-8")
            date = str_date[0:10]
            values.append(" -- " + date)

    return values

@app.get("/button_two")
async def file_read():
    dir_path = r"/Users/leemartina/image_server/backend/SE000001"

    for root, _, filenames in os.walk(dir_path):
        for filename in filenames:
            dcm_path = Path(root, filename)
            files = dcmread(dcm_path)
            name = str(files.PatientName)

    return name
