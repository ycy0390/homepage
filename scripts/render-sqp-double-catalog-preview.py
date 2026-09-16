"""Refresh only the SQP/SQPS double-vane catalog preview.

Run: python scripts/render-sqp-double-catalog-preview.py
Requires Pillow and Poppler (pdftoppm on PATH). Reads the PDF without modifying it.
"""

import re
import shutil
import subprocess
import tempfile
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
CATALOG = ROOT / "public/sqp-pump-detail/catalogs"
HTML = ROOT / "public/sqp-sqps-double.html"
START = "<!-- catalog-preview:pages:start -->"
END = "<!-- catalog-preview:pages:end -->"


def main():
    renderer = shutil.which("pdftoppm")
    if renderer is None:
        raise SystemExit("Poppler pdftoppm must be available on PATH.")
    html = HTML.read_text(encoding="utf-8")
    if html.count(START) != 1 or html.count(END) != 1:
        raise SystemExit("Expected one catalog preview start/end marker pair.")
    output = CATALOG / "double-preview"
    output.mkdir(parents=True, exist_ok=True)
    figures = []
    with tempfile.TemporaryDirectory(prefix="sqp-double-catalog-") as temporary:
        subprocess.run(
            [renderer, "-png", "-scale-to-x", "1600", "-scale-to-y", "-1",
             str(CATALOG / "sqp-sqps-double.pdf"), str(Path(temporary) / "page")],
            check=True,
        )
        pages = sorted(Path(temporary).glob("page-*.png"),
                       key=lambda path: int(path.stem.split("-")[-1]))
        if not pages:
            raise SystemExit("PDF rendering produced no pages.")
        for number, path in enumerate(pages, 1):
            with Image.open(path) as rendered:
                image = rendered.convert("RGB")
            width, height = image.size
            stem = f"page-{number:02d}"
            image.save(output / f"{stem}-1600.webp", quality=90, method=6)
            small = image.resize((800, round(height * 800 / width)), Image.Resampling.LANCZOS)
            small.save(output / f"{stem}-800.webp", quality=88, method=6)
            url = f"./sqp-pump-detail/catalogs/double-preview/{stem}"
            figures.append(
                '            <figure class="catalog-page">\n'
                f'              <img src="{url}-1600.webp" '
                f'srcset="{url}-800.webp 800w, {url}-1600.webp 1600w" '
                'sizes="(max-width: 600px) calc(100vw - 70px), '
                '(max-width: 720px) calc(100vw - 114px), '
                '(max-width: 1030px) calc(100vw - 146px), 900px" '
                f'width="{width}" height="{height}" '
                f'alt="SQP/SQPS 2연 카탈로그 {number}페이지" loading="lazy" decoding="async">\n'
                f'              <figcaption>{number} / {len(pages)} 페이지</figcaption>\n'
                '            </figure>'
            )
    replacement = START + "\n" + "\n".join(figures) + "\n            " + END
    html = re.sub(re.escape(START) + r".*?" + re.escape(END),
                  lambda _: replacement, html, flags=re.DOTALL)
    with HTML.open("w", encoding="utf-8", newline="\n") as destination:
        destination.write(html)
    print(f"Rendered {len(figures)} SQP/SQPS catalog pages at 800px and 1600px.")


if __name__ == "__main__":
    main()
