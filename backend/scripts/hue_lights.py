# pip3 install phue (on local)

from phue import Bridge
import json
# from ip_address import bridge_ip_address


def access_lights(bridge_ip_address):
    b = Bridge(bridge_ip_address)
    light_names_list = b.get_light_objects('name')
    return light_names_list

def edit_lights(json_data):
    lights = access_lights(json_data["bridge_ip_address"])

    for light in lights:
        if "state" in json_data:
            lights[light].on = json_data["state"] 

        if "hue" in json_data:
            lights[light].hue = json_data["hue"]

        if "saturation" in json_data:
            lights[light].saturation = json_data["saturation"]

        if "brightness" in json_data:
            lights[light].brightness = json_data["brightness"]
    
if __name__ == '__main__':


    json_data = {
        "bridge_ip_address" : "192.168.2.42",
        "state": True,
        "hue": 25000,
        "saturation": 100,
        "brightness": 127
    }

    json_file_path = "/path/"
    with open(json_file_path, 'r') as file:
        json_data = json.load(file)


    edit_lights(json_data)
