# Week 1-2: Foundations

**Status:** ✅ Completed  
**Time Invested:** ~8 hours  
**Format:** Reading, NotebookLM videos, document analysis

## Overview

The first two weeks focused on building foundational knowledge for electoral analysis. I studied Census data concepts (VAP/CVAP), learned about electoral systems (plurality, IRV, STV), and reviewed MGGG's methodology from published reports.

## Census Data Fundamentals

### VAP (Voting Age Population)

- **Definition:** All people 18+ years old (citizens AND non-citizens)
- **Source:** Census PL 94-171 decennial data, P3 table
- **Use:** Demographic context, understanding total voting-eligible population
- **Why it matters:** Shows who COULD vote (not just citizens)

### CVAP (Citizen Voting Age Population)

- **Definition:** People 18+ years old WHO ARE CITIZENS
- **Source:** ACS 5-year estimates, estimated using "discount" method
- **Use:** Determining who can ACTUALLY vote in elections
- **Why it matters:** More legally relevant for electoral analysis

### Key Insight: Why Both?

Example: Kansas City might have 375,000 VAP but 340,000 CVAP.
- The 35,000 difference = immigrants, permanent residents, others ineligible to vote
- VAP gives context, CVAP gives legal reality

### Demographic Categories (Racial/Ethnic)

Convention from VAP-CVAP.pdf: **Order matters to prevent double-counting**

1. **Black:** Anyone selecting Black (including multi-racial)
2. **Hispanic:** Anyone Hispanic (from remaining population)
3. **Asian:** Anyone Asian/NHPI (from remaining population)
4. **AMIN:** American Indian/Alaska Native (from remaining population)
5. **Other:** Other races (from remaining population)
6. **White:** Non-Hispanic, single-race White

**Why this order?** Someone identifying as "Black and White" gets counted as Black, not both.

### Key Abbreviations

- **BVAP:** Black VAP
- **HVAP:** Hispanic VAP
- **AVAP:** Asian VAP
- **WVAP:** White VAP

## Electoral Systems

### System 1: Plurality (Current U.S. Standard)

**How it works:** Candidate with most first-place votes wins (no majority needed)

**Example:** In a 3-candidate race:
- Candidate A: 35% → A WINS
- Candidate B: 33% → Loses
- Candidate C: 32% → Loses

**Problem:** A won with only 35% support. B and C voters feel unrepresented.

### System 2: IRV (Instant Runoff Voting)

**How it works:**
1. Voters rank candidates (1st, 2nd, 3rd, ...)
2. If no one has 50%+ majority, eliminate candidate with fewest votes
3. Redistribute their votes based on voters' next preferences
4. Repeat until someone has majority

**Example same race:**
- Round 1: A=35%, B=33%, C=32% (no majority)
- Eliminate C (fewest votes)
- C voters' 2nd choices: 60% prefer B, 40% prefer A
- Round 2: A=47.8%, B=52.2%
- **B WINS with 52.2% (has majority)**

**Advantages:** Winner has majority support, broader consensus needed

**Used in:** Maine, Alaska, some U.S. cities

### System 3: STV (Single Transferable Vote)

**How it works:** IRV but for multi-winner elections (multiple seats)

**Key concept: Droop Quota**
- In 4-seat election with 1,000 voters: Quota = (1,000 ÷ 5) + 1 = 201 votes
- Anyone with 201+ votes guaranteed a seat
- Proportional representation: If 40% are Black, ~40% of seats go to Black-preferred candidates

**Advantages:** Proportional representation, minority representation

**Used in:** Ireland, Malta, Portland OR, some other cities

### Quick Comparison

| Feature | Plurality | IRV | STV |
|---------|-----------|-----|-----|
| Winner needs | Most votes (any %) | Majority (50%+) | Droop Quota |
| Voter ranking | Pick 1 | Rank all | Rank all |
| Seats | Single-winner | Single-winner | Multi-winner |
| Proportionality | Low | Medium | High |

## Resources Used

- **VAP-CVAP.pdf** - Official MGGG guide on Census demographics
- **NotebookLM Video:** Census Fundamentals (ES, 22 min) - Generated from VAP-CVAP.pdf + MA Report
- **NotebookLM Video:** Electoral Systems (EN, 25 min) - Generated from Lowell + MA Reports + VoteKit docs
- **Lowell Report** - RCV analysis for Lowell, MA (good template)
- **Massachusetts RCV Report** - Comprehensive state-level analysis

## Key Discoveries & Aha Moments

### 💡 Discovery #1: The Order Matters

I didn't realize that the sequence (Black → Hispanic → Asian) in demographic categorization is intentional to prevent double-counting. Someone identifying as "Black and Asian" gets counted ONLY as Black. **Different order = different population counts = different analysis results.**

### 💡 Discovery #2: CVAP is Hard to Get

VAP comes directly from Census decennial data. But CVAP? It's calculated using ACS citizenship rates at the tract level, then "discounted" to block level. This introduces uncertainty that must be accounted for in analysis.

### 💡 Discovery #3: Electoral Systems Encode Values

I thought electoral systems were just "technical rules." But they're not. Plurality benefits large blocs. IRV requires broader consensus. STV creates proportional representation. **Which system you choose IS A POLITICAL CHOICE with real representation consequences.**

### 🤔 Surprise: Data is Never Neutral

Every decision in Census data (who you count as "any-part-Black" vs "single-race Black," how you handle multi-racial respondents, when you use tract vs block level data) has implications. The data doesn't speak for itself—each choice reflects values.

## Remaining Questions

### ❓ How exactly does the "discount" work?

VAP-CVAP.pdf shows the formula, but I want to see it in practice. If a tract has 1,000 VAP and 95% citizenship rate from ACS, that's 950 CVAP. But what if the ACS sample is small (denominator < 20)?

### ❓ At what geographic level should I work for KC?

Census tract? Block group? Precinct? Each has pros/cons for data availability and analysis granularity.

### ❓ For KC, should I use IRV or STV?

KC has 12 councillors (multi-seat, at-large). STV seems more appropriate than IRV (which is single-winner). But should I model 12 single-winner seats or 3-4 multi-winner districts?

## Next Week

Week 3: Data Collection
- Finding KC census data (IPUMS NHGIS)
- Locating electoral history
- Understanding geographic units for KC
- Validating data availability
