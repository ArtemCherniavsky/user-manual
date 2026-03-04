#!/usr/bin/env python3
"""Parse index.md and generate _data/sidebar.yml for Jekyll."""

import re
import yaml
from pathlib import Path

ROOT = Path(__file__).parent.parent
INDEX = ROOT / "index.md"
OUTPUT = ROOT / "_data" / "sidebar.yml"

ITEM_RE = re.compile(r'^( *)- \[([^\]]+)\]\(([^)]+)\)')


def parse_sidebar(text):
    items = []
    stack = []  # (indent_level, list_ref)

    for line in text.splitlines():
        m = ITEM_RE.match(line)
        if not m:
            continue

        indent = len(m.group(1))
        title = m.group(2)
        path = m.group(3)

        # Convert path: remove .md, make absolute URL
        url = "/" + path.replace("\\", "/")
        if url.endswith("/index.md"):
            url = url[:-len("index.md")]
        elif url.endswith(".md"):
            url = url[:-3]

        node = {"title": title, "url": url}

        if not stack:
            items.append(node)
            stack = [(indent, items)]
        else:
            # Pop stack until we find parent level
            while len(stack) > 1 and stack[-1][0] >= indent:
                stack.pop()

            parent_indent, parent_list = stack[-1]

            if indent > parent_indent:
                # Child of last item in parent_list
                parent_node = parent_list[-1]
                if "children" not in parent_node:
                    parent_node["children"] = []
                parent_node["children"].append(node)
                stack.append((indent, parent_node["children"]))
            else:
                parent_list.append(node)

    return items


def main():
    text = INDEX.read_text(encoding="utf-8")
    sidebar = parse_sidebar(text)

    OUTPUT.parent.mkdir(exist_ok=True)
    with open(OUTPUT, "w", encoding="utf-8") as f:
        yaml.dump(sidebar, f, allow_unicode=True, default_flow_style=False, sort_keys=False)

    count = sum(1 for line in OUTPUT.read_text().splitlines() if "title:" in line)
    print(f"Generated {OUTPUT} with {count} items")


if __name__ == "__main__":
    main()
