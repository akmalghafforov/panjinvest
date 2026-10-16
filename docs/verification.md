# Migration verification

The feature matrix in `tests/route-matrix.json` covers all 26 active routes. Feature tests also cover both scoped 404s, slug/numeric parameters, generated routes, safely serialized query-prefill values and detail parameters, and the absence of submission endpoints.

Browser verification checks page layouts, local images, JavaScript errors, opportunity searching/filtering/sorting, portal and application tabs, settings tabs, map selection/filtering, chart tooltips, mobile navigation/sidebar controls, file selection, and the complete four-step interest demo. It rejects external asset requests and non-GET requests.

Visual references cover all 28 screens at 390, 768, and 1440 pixels, plus alternate portal/application/settings tabs and interest-form steps 2–4. Screenshots are available under `storage/app/verification`. `comparison.json` records page dimensions, visible text comparisons, and JavaScript errors. Native select option text and SVG chart labels can differ from the React accessibility/text serialization without a visible content change.

Charts use the original mock values, colors, and labels in responsive SVG with local tooltips. Dropdown and select controls use Alpine/native HTML rather than Radix portals. The unavailable honey image variants use the original fallback graphic, locally stored.

Run the commands in the README to repeat the checks after editing templates or fixtures. The original React application is a reference only and is not required to run or build Laravel.

## Completed checks

- Laravel feature suite: 30 tests, 186 assertions, passed.
- All 84 route/viewport screenshot pairs have matching page dimensions and no JavaScript errors.
- Alternate tabs and form steps were captured at all three widths and visually reviewed.
- Expanded browser interaction suite passed, including map filtering, chart tooltips, language menus, sidebar collapse, mobile drawers, and interest-form completion. No external assets or write requests were detected.
- Production Vite build, Composer validation, route caching, Blade compilation, and PHP/compiled-Blade syntax checks passed.
