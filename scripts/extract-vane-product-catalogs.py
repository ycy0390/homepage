"""Create product-specific vane-pump catalog PDFs from the supplied source catalog."""

from pathlib import Path

from pypdf import PdfReader, PdfWriter


PROJECT_ROOT = Path(__file__).resolve().parents[1]
SOURCE = PROJECT_ROOT / "public" / "catalogs" / "fixed-displacement-vane-pumps.pdf"
OUTPUT_DIRECTORY = PROJECT_ROOT / "public" / "catalogs"

# Page numbers are one-based and keep the cover/common information and safety notes.
COMMON_PAGES = [*range(1, 7), 62, 63]
PRODUCT_PAGES = {
    "sqp-sqps-single": [*range(7, 18)],
    "sqp-sqps-double": [*range(18, 30)],
    "sqp-triple": [*range(30, 38)],
    "vq-single": [38, *range(39, 45)],
    "vq-double": [38, *range(45, 52)],
    "v-104-124-134-144": [*range(52, 55)],
    # The double-pump catalogue refers to the single-pump standard specification.
    "v-108-128-138-148": [52, *range(55, 58)],
    "v20-v30": [*range(58, 62)],
}


def main() -> None:
    reader = PdfReader(SOURCE)
    OUTPUT_DIRECTORY.mkdir(parents=True, exist_ok=True)

    for slug, product_pages in PRODUCT_PAGES.items():
        writer = PdfWriter()
        selected_pages = list(dict.fromkeys([*COMMON_PAGES, *product_pages]))

        for page_number in selected_pages:
            writer.add_page(reader.pages[page_number - 1])

        output_path = OUTPUT_DIRECTORY / f"{slug}.pdf"
        with output_path.open("wb") as output_file:
            writer.write(output_file)

        print(f"{output_path.name}: {len(selected_pages)} pages")


if __name__ == "__main__":
    main()
