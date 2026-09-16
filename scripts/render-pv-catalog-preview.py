"""Render a product catalog into responsive images and update its detail page.

Requires Pillow and Poppler (pdftoppm on PATH). Run from any working directory:
    python scripts/render-pv-catalog-preview.py
    python scripts/render-pv-catalog-preview.py --product ph
The original PDF is read only. The deployed site requires no Python or PDF viewer.
"""

import argparse
import re
import shutil
import subprocess
import tempfile
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
PRODUCTS = {
    "pv": {"label": "P**V", "html": "pv-v1.html"},
    "ph": {"label": "PH", "html": "ph.html"},
}
START = "<!-- catalog-preview:pages:start -->"
END = "<!-- catalog-preview:pages:end -->"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--product", choices=PRODUCTS, default="pv")
    product = parser.parse_args().product
    label = PRODUCTS[product]["label"]
    catalog_directory = ROOT / f"public/{product}-pump-detail/catalogs"
    pdf_path = catalog_directory / f"{product}-series-piston-pumps.pdf"
    output_directory = catalog_directory / f"{product}-preview"
    html_path = ROOT / "public" / PRODUCTS[product]["html"]
    renderer = shutil.which("pdftoppm")
    if renderer is None:
        raise SystemExit("Poppler pdftoppm must be available on PATH.")
    html = html_path.read_text(encoding="utf-8")
    if html.count(START) != 1 or html.count(END) != 1:
        raise SystemExit("Expected one catalog preview start/end marker pair.")

    output_directory.mkdir(parents=True, exist_ok=True)
    figures = []
    with tempfile.TemporaryDirectory(prefix=f"{product}-catalog-") as temporary:
        subprocess.run(
            [renderer, "-png", "-scale-to-x", "1600", "-scale-to-y", "-1",
             str(pdf_path), str(Path(temporary) / "page")],
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
            image.save(output_directory / f"{stem}-1600.webp", quality=90, method=6)
            small_height = round(height * 800 / width)
            small = image.resize((800, small_height), Image.Resampling.LANCZOS)
            small.save(output_directory / f"{stem}-800.webp", quality=88, method=6)
            url = f"./{product}-pump-detail/catalogs/{product}-preview/{stem}"
            figures.append(
                '          <figure class="catalog-page">\n'
                f'            <img src="{url}-1600.webp" '
                f'srcset="{url}-800.webp 800w, {url}-1600.webp 1600w" '
                'sizes="(max-width: 600px) calc(100vw - 70px), '
                '(max-width: 720px) calc(100vw - 114px), '
                '(max-width: 1030px) calc(100vw - 146px), 900px" '
                f'width="{width}" height="{height}" '
                f'alt="{label} 카탈로그 {number}페이지" loading="lazy" decoding="async">\n'
                f'            <figcaption>{number} / {len(pages)} 페이지</figcaption>\n'
                '          </figure>'
            )

    replacement = START + "\n" + "\n".join(figures) + "\n          " + END
    html = re.sub(re.escape(START) + r".*?" + re.escape(END),
                  lambda _: replacement, html, flags=re.DOTALL)
    with html_path.open("w", encoding="utf-8", newline="\n") as output:
        output.write(html)
    print(f"Rendered {len(figures)} catalog pages at 800px and 1600px; updated {html_path.name}.")


if __name__ == "__main__":
    main()
