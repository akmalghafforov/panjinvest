# Original Figma design restored

Reference: https://rise-step-87098168.figma.site/

The published reference's component bundle was inspected and matched against the original source in `reference/react`. The public frontend now follows that design: system sans-serif typography, navy `#123A63`, green `#0F8A5F`, gold `#D6A536`, gray `#F6F8FA`, IP logo, patterned gradient hero, summary strip, icon cards, three-column opportunities, map preview, sector cards, numbered journey, gradient data panel, resources, and navy footer. Existing public form and portal pages use the original palette and gradient bands again.

The current six proposed concepts, sourced national statistics, regional references, news and demo behavior remain intact. This is a design restoration, not a restoration of the reference's illustrative project budgets, unsourced figures or testimonials. No backend, schema, authentication or deployment changes were made.

## Validation

- Production build passed.
- Laravel: 36 tests, 308 assertions passed.
- Browser regressions passed: catalog filters, sorting, empty states, query sharing, grouped map markers, tile failure/retry, news keyboard navigation, portal tabs, file selection and complete demo interest submission; existing admin regressions also passed.
- Responsive review passed all 60 checks across 15 public page types at 1440, 390, 768 and 320px, including loaded images, font availability, page overflow and JavaScript errors. It also exercises homepage sector filters, Escape focus restoration and reduced-motion styling.
- Initial responsive review identified header overflow at 320px; compact logo/menu sizing corrected it.
- `git diff --check` passed.

## Artifacts

- [Screenshot gallery](../storage/app/verification/figma/index.html)
- [Desktop homepage](../storage/app/verification/figma/1440-_.png)
- [Mobile homepage](../storage/app/verification/figma/390-_.png)
- [Responsive results](../storage/app/verification/figma/results.json)

The gallery contains all public page types at desktop and mobile sizes. These are local, ignored verification artifacts. Production assets were used for the checks; the pre-existing Vite hot-file reference was temporarily moved and restored afterward. The demo flows still do not persist applications or uploads.
