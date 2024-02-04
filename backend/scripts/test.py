from pathlib import Path
import json
from phue import Bridge
import colorsys


def main():
    path = Path(__file__).parent / "../../api/techniques.json"
    with path.open() as f:
        data = json.load(f)
        print(data)

    for entry in data:
        if 'prompt' in entry and entry['prompt'] == 'Turn on the lights':
            script_path = Path(__file__).parent / entry['script']
            extra_values = entry['extra']

            execute_script(script_path, extra_values)
            break  # Assuming you only want to execute the first script with the specified prompt


def execute_script(script_path, extra_values):
    exec(open(script_path).read(), globals(), {'extra_values': extra_values})


if __name__ == '__main__':
    main()
