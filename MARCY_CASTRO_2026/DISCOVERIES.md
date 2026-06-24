# Key Discoveries & Aha Moments

Personal insights and major learning moments throughout the internship.

## Week 1-2 Discoveries

### 💡 Discovery #1: Census Order Prevents Double-Counting

The sequence (Black → Hispanic → Asian → AMIN → White) isn't arbitrary. It prevents double-counting multiracial respondents. Someone identifying as "Black and White" gets counted ONLY as Black under this convention.

**Why it matters:** Different ordering = different population counts = different analysis

### 💡 Discovery #2: CVAP is Harder Than VAP

VAP comes directly from Census decennial data (P3 table). CVAP requires estimating citizenship rates from ACS at tract level, then "discounting" to block level. This introduces estimation uncertainty.

**Why it matters:** Must account for this uncertainty in analysis

### 💡 Discovery #3: Electoral Systems Encode Values

I initially thought electoral systems were purely technical. They're not. Each system has different representation consequences:
- Plurality: benefits large voting blocs
- IRV: requires broader consensus
- STV: creates proportional representation

**Why it matters:** System choice is fundamentally a political/values choice, not just a technical one

## Surprises

### 🤔 Data is Never Neutral

Every decision about data (racial categories, geographic units, time periods) reflects choices and values. The "raw data" isn't raw—it's already been processed through many human decisions.

### 🤔 You Need More Than Electoral Data

Electoral analysis requires combining census data, candidate information, historical turnout, geographic boundaries, and more. It's a complex integration of multiple data sources.

### 🤔 Methodology Matters as Much as Results

How you generate voter preferences (Plackett-Luce? Bradley-Terry? Cambridge Sampler?) and define parameters (blocs? turnout assumptions? cohesion?) shapes your results just as much as the data does.

## Perspective Shifts

**Before:** "I'll load census data and run an analysis"  
**After:** "Census data is constructed through human choices. I need to understand those choices and their implications."

**Before:** "Electoral systems are just technical rules"  
**After:** "Electoral systems encode different values about representation and consensus"

**Before:** "Results are what they are"  
**After:** "Results depend heavily on assumptions and methodology. Transparency and sensitivity testing are critical."

## Things Still Confused About

- Exact mechanics of the CVAP "discount" method when ACS samples are small
- Choosing right geographic unit (tract vs precinct) for KC
- Whether to model KC as 12 single-winner IRV races or fewer multi-winner STV districts
- How much historical data is "enough" for reliable simulations
