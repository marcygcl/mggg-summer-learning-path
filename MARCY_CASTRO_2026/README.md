# Learning Journey: Marcy Castro Livano

## About Me

Data scientist transitioning from geospatial census work to electoral analysis. Learning to replicate MGGG's methodology for Kansas City electoral counterfactual analysis.

## Objective

Replicate MGGG's electoral analysis methodology to model what Kansas City representation would look like under RCV/STV instead of plurality voting.

## Current Status

**Week:** 1-2 / 7  
**Status:** ✅ Foundations completed, 🟡 Data collection in progress

## Learning Timeline

| Phase | Topic | Status | Time |
|-------|-------|--------|------|
| 1-2 | Foundations (Census, Electoral Systems) | ✅ Complete | 8 hrs |
| 3 | Data Collection for KC | 🟡 In Progress | TBD |
| 4 | Methodology Definition | ⬜ Not Started | TBD |
| 5-6 | Analysis & Simulations | ⬜ Not Started | TBD |
| 7 | Final Report | ⬜ Not Started | TBD |

## Key Discoveries So Far

1. **Census decisions matter:** Order of demographic categories (Black → Hispanic → Asian) prevents double-counting and affects results
2. **CVAP is harder than VAP:** No direct Census data for block level; must estimate using ACS citizenship rates
3. **Electoral systems encode values:** Different systems have fundamentally different representation properties

See `DISCOVERIES.md` for full details.

## Questions for Advisors

### For Peter Rock (Tool Setup)
- Which versions of GerryChain, VoteKit, GerryTools for KC analysis?
- Should I wait for GerryChain interface changes or use current PyPI?

### For Moon Duchin (Methodology)
- For KC: IRV (single-winner) or STV (multi-winner districts)?
- Which voter bloc categories most important for KC analysis?
- Which preference model to use (Plackett-Luce, Bradley-Terry, Cambridge)?

### For Brock (Data & Implementation)
- Where to find precinct-level electoral data for KC?
- How to handle incomplete historical election data?
- Are there precedent analyses for cities like KC?

## Resources Used

### Main Documents
- VAP-CVAP.pdf (MGGG Census convention guide)
- Lowell Report (RCV analysis template)
- Massachusetts RCV Report (comprehensive example)

### Videos
- NotebookLM: Census Fundamentals (22 min, Spanish)
- NotebookLM: Electoral Systems (25 min, English)

### Code/Tools
- GerryChain (redistricting analysis)
- VoteKit (electoral simulation)
- IPUMS NHGIS (Census data)

## Next Steps

1. Find KC Census data (VAP/CVAP by demographic group)
2. Locate historical election results (precinct-level if possible)
3. Get KC geographic boundaries (shapefiles)
4. Define parameters for KC analysis
5. Run initial simulations

---

Last updated: 2026-06-24
