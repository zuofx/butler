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

def edit_lights(lights, state, hue, saturation, brightness):

    for light in lights:
        lights[light].on = state
        lights[light].hue = hue
        lights[light].saturation = saturation
        lights[light].brightness = brightness
    
if __name__ == '__main__':

    bridge_ip_address = extra_values.get('ip', None)
    state = bool(extra_values.get('state', None))
    hexcode = extra_values.get('hex', None)

    print(state)

    hue, saturation, brightness = hex_to_hsb(hexcode)

    print(hue, saturation, brightness)
    lights = access_lights(bridge_ip_address)

    edit_lights(lights, state, hue, saturation, brightness)
