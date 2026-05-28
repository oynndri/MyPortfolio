#!/bin/bash
find ./src/components -name "*.jsx" -type f | while read -r file; do
  sed -i '' -e 's/text-white/text-textmain/g' \
            -e 's/text-slate-100/text-textmain/g' \
            -e 's/text-slate-200/text-textmain/g' \
            -e 's/text-slate-300/text-textmuted/g' \
            -e 's/text-slate-400/text-textmuted/g' \
            -e 's/text-slate-500/text-textmuted/g' \
            -e 's/text-slate-600/text-textmuted/g' \
            -e 's/bg-slate-900/bg-cardbg/g' \
            -e 's/bg-slate-800/bg-bordercol/g' \
            -e 's/bg-slate-600/bg-textmuted/g' \
            -e 's/border-slate-800/border-bordercol/g' \
            -e 's/border-slate-700/border-bordercol/g' \
            -e 's/hover:bg-slate-800/hover:bg-cardhover/g' \
            -e 's/hover:border-slate-600/hover:border-primary/g' \
            "$file"
done
