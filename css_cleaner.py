from bs4 import BeautifulSoup
import cssutils


# Завантажте вміст ваших HTML файлів
html_files = ["index.html", "assembly.html",
              "other.html", "productions.html", "Projects.html"]
html_contents = [open(file, "r").read() for file in html_files]

# Завантажте вміст вашого CSS файлу
with open("css/style.css", "r") as file:
    css_content = file.read()

# Парсінг CSS файла
css_parser = cssutils.CSSParser()
css_stylesheet = css_parser.parseString(css_content)

# Парсінг HTML файлів
soup_pages = [BeautifulSoup(content, 'html.parser')
              for content in html_contents]

# Збираємо всі CSS селектори використовувані в CSS файлі
css_rules = [rule for rule in css_stylesheet.cssRules if rule.type ==
             cssutils.css.CSSRule.STYLE_RULE]

# Перевіряємо кожний CSS селектор проти HTML файлів
for rule in css_rules:
    if all(soup.select(rule.selectorText) == [] for soup in soup_pages):
        css_stylesheet.deleteRule(rule)

# Зберігаємо оновлену версію CSS файлу
with open("style.css", "w") as file:
    file.write(css_stylesheet.cssText.decode("utf-8"))
