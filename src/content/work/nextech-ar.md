---
title: "Nextech AR"
description: "A 15-year-old monolith, slow releases, and a team ready to fix it. I bet on infrastructure before features — CI/CD, fewer defects, a new revenue line."
tags: ["ENTERPRISE", "SCALE"]
badge: "Enterprise SaaS transformation"
category: "enterprise"
# actionLabel: "View details"
# actionUrl: "#"
priority: 5
---

## The Context

I walked into a 15-year-old PHP monolith running a live events-and-marketplace platform — the kind of codebase where every deploy felt like a small bet against the day going well. Releases were slow. Defects were common. And the team knew it, which is its own kind of pressure.

## The Challenge

The obvious move was to ship features and chase revenue. The actual constraint was underneath that: nobody could ship anything fast or safely enough to make new features matter. Fixing the foundation had to come first, and foundations don't excite anyone in a roadmap review.

## Key Product & Engineering Decisions

I bet on delivery infrastructure over feature count. CI/CD and automated testing don't show up on a highlight reel, but without them nothing else compounds — so that's where I spent the political capital.

I looked for revenue that didn't require a platform rewrite first. Boost Ads — paid visibility for event organizers — was demand that already existed; I just had to build the smallest thing that could capture it, instead of waiting for the "real" platform work to finish.

And I consolidated a tangle of payment gateways into one reliable setup, because every extra integration was a place a transaction could quietly fail, and nobody notices reliability until it's gone.

## Execution

Getting engineering to adopt CI/CD wasn't a technical sell, it was a trust sell — convincing a team that had been burned by risky deploys that testing infrastructure would make their lives easier, not slower. It did. Releases got faster and safer at the same time, which is a combination people don't believe is possible until they've lived it.

Boost Ads shipped without waiting for the monolith to be fixed, and it became a real new revenue line. The payments consolidation happened quietly in the background — the best sign an infrastructure project worked is that nobody talks about it afterward.

## What Actually Happened

Release velocity improved. Defects dropped. A new revenue stream existed that hadn't before.

But the thing I actually took away from this one: in a legacy system, the unglamorous infrastructure work is the leverage. Everyone wants to talk about the feature. The feature only works because of the boring thing nobody wanted to fund.
