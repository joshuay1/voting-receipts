PYTHON ?= python3
PORT ?= 8000

.PHONY: check serve

check:
	@test -f index.html
	@test -f projects.html
	@test -f outcomes.html
	@test -f info.html
	@test -f assets/data/kk26.json
	@test -f assets/data/kk26-data.js
	@test -f CNAME
	@test -f .nojekyll
	@test ! -e raw_data
	@test ! -e internal
	@test ! -e data
	@test ! -e kk26_voting
	@test ! -e previous_old_scripts
	@if find . \( -name '*.xlsx' -o -name '*.xls' -o -name '.env*' \) -not -path './.git/*' -print | grep .; then \
		echo "Unexpected private/workbook file in public repo"; \
		exit 1; \
	fi
	@if rg -n "firebase|FIREBASE|OPENAI_API_KEY|raw_data|internal/|kk26_voting/" index.html projects.html outcomes.html info.html assets; then \
		echo "Unexpected private or obsolete reference in public repo"; \
		exit 1; \
	fi

serve:
	$(PYTHON) -m http.server $(PORT)
