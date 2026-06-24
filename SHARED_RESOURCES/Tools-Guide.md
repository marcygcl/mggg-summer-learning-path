# Electoral Analysis Tools Guide

Tools and resources for replicating electoral analysis.

## Core MGGG Tools

### GerryChain

**What it is:** Python library for analyzing and sampling electoral redistricting plans

**GitHub:** https://github.com/mggg/GerryChain  
**Documentation:** https://gerrychain.readthedocs.io/  
**Installation:** `pip install gerrychain`

**When to use:** 
- Creating alternative redistricting plans
- Analyzing gerrymandering
- Building ensembles of maps
- For electoral counterfactuals (voter preference analysis)

**Current Status:** Stable on PyPI. Interface changes coming before August 2026.

### VoteKit

**What it is:** Python package for computational social choice research and voter preference modeling

**GitHub:** https://github.com/mggg/VoteKit  
**Documentation:** https://github.com/mggg/VoteKit  
**Installation:** `pip install votekit`

**When to use:**
- Generating voter preference profiles
- Simulating electoral outcomes
- Comparing electoral systems (plurality, IRV, STV)
- For counterfactual analysis (what if we used RCV/STV?)

**Current Status:** Stable on both PyPI and GitHub

### GerryTools

**What it is:** Tools for evaluating districting plans with visualizations and scoring

**GitHub:** https://github.com/mggg/gerrytools  
**Branch:** Version 2.0.0 has major updates in progress  
**Installation:** `pip install gerrytools` (stable) or from GitHub (development)

**When to use:**
- Plotting and visualizing election data
- Scoring districts on compactness, partisan impact
- Analyzing demographic representation

**Current Status:** Major overhaul in progress. Scoring module, plotting interfaces, census module consistency being improved.

## Data Sources

### Census Data

**IPUMS NHGIS:** https://www.nhgis.org/
- Historical Census data by Census tract
- VAP/CVAP data available
- Free with registration
- Coverage: 1970-2020 (incomplete before 1990)

### Electoral Results

**OpenElections:** https://openelections.net/
- Precinct-level election data
- Free and open source
- Varies by state
- Coverage: recent elections

**mggg-states:** https://github.com/mggg-states
- Precinct-level shapefiles + election data
- Compiled by MGGG
- Better coverage than OpenElections

### Geographic Data

**Census Bureau:** https://www.census.gov/
- Official Census tracts, blocks
- Shapefiles available
- Free

**IPUMS NHGIS:** Also provides historical shapefiles

## Supporting Libraries

- **GeoPandas:** Geospatial data analysis in Python
- **Shapely:** Geometric operations
- **Matplotlib/Seaborn:** Data visualization
- **Pandas:** Data manipulation
