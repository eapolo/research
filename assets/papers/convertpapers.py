import os
import json
import bibtexparser

def parse_bib_file(file_path):
    """Reads a single .bib file and extracts relevant publication details."""
    with open(file_path, 'r', encoding='utf-8') as bibtex_file:
        bib_database = bibtexparser.load(bibtex_file)

    publications = []
    
    for entry in bib_database.entries:
        paper = {
            "title": entry.get("title", "No Title"),
            "author": entry.get("author", "Unknown"),
            "year": entry.get("year", "N/A"),
            "journal": entry.get("journal", ""),
            "conference": entry.get("booktitle", ""),  # For conference papers
            "publisher": entry.get("publisher", ""),
            "doi": entry.get("doi", ""),
            "url": entry.get("url", ""),
            "type": entry.get("ENTRYTYPE", "article")  # Distinguish journal vs. conference
        }
        publications.append(paper)

    return publications

def process_all_bib_files(directory):
    """Scans a directory for .bib files and processes them all."""
    all_publications = []

    for filename in os.listdir(directory):
        if filename.endswith(".bib"):
            file_path = os.path.join(directory, filename)
            publications = parse_bib_file(file_path)
            all_publications.extend(publications)

    return all_publications

# Directory containing multiple .bib files
bib_directory = "/Users/quiqueapolo/Documents/GitHub/research/assets/papers/docsbib"  # Update this path if necessary
json_output_path = "publications.json"

# Process all .bib files and save to JSON
all_papers = process_all_bib_files(bib_directory)

with open(json_output_path, "w", encoding="utf-8") as json_file:
    json.dump(all_papers, json_file, indent=4)

print(f"✅ Processed {len(all_papers)} publications. JSON file created successfully!")
