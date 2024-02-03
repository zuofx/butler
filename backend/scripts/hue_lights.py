# pip3 install phue (on local)

from phue import Bridge
import json
import colorsys

# from ip_address import bridge_ip_address

def hex_to_hsb(hex_color):
    # Remove the '#' character if present
    hex_color = hex_color.lstrip('#')

    rgb = tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

    rgb_normalized = [value / 255.0 for value in rgb]

    hsb = colorsys.rgb_to_hsv(*rgb_normalized)

    hue = int(hsb[0] * 65535)
    saturation = int(hsb[1] * 254)
    brightness = int(hsb[2] * 254)

    return hue, saturation, brightness


def access_lights(bridge_ip_address):
    b = Bridge(bridge_ip_address)
    light_names_list = b.get_light_objects('name')
    return light_names_list

def edit_lights(json_data, hue, saturation, brightness):
    lights = access_lights(json_data["bridge_ip_address"])

    for light in lights:
        if "state" in json_data:
            lights[light].on = json_data["state"] 

        if "hue" in json_data:
            lights[light].hue = hue

        if "saturation" in json_data:
            lights[light].saturation = saturation

        if "brightness" in json_data:
            lights[light].brightness = brightness
    
if __name__ == '__main__':

    
    json_data = {
        "bridge_ip_address" : "192.168.2.42",
        "state": True,
        "hexcode": "#FF0000"
    }


    json_file_path = "/path/"
    with open(json_file_path, 'r') as file:
        json_data = json.load(file)
        hue, saturation, brightness = hex_to_hsb(json_data.get("hexcode"))

    edit_lights(json_data, hue, saturation, brightness)
