---
title: "Pernia's Pop-Up Shop"
description: "A checkout so slow it lost customers mid-purchase. I decoupled cart from the monolith, then rebuilt how the marketplace brought on its own designers."
tags: ["ENTERPRISE", "SCALE"]
badge: "Enterprise ecommerce scale"
category: "enterprise"
# actionLabel: "View details"
# actionUrl: "#"
priority: 6
---

## The Context

Pernia's is luxury fashion ecommerce — hundreds of designers, real daily transaction volume, the kind of scale where a slow page isn't an annoyance, it's lost revenue happening in real time.

## The Problem

The cart and checkout ran on a tightly coupled monolith, and it showed: painfully slow loads, transactions that just failed, a checkout funnel that leaked customers at exactly the moment they were ready to pay. On top of that, bringing a new designer onto the platform was a manual, internal-team-heavy process that slowed how fast the marketplace could grow its own supply.

## My Role & Scope

I owned discovery and execution across the flows that actually moved revenue — homepage, cart, checkout, seller onboarding — working closely with engineering and design to fix what was broken without stalling a business that depended on staying up.

## Key Product & Technical Decisions

I treated cart and checkout as the highest-leverage surface on the platform and fought to decouple it from the monolith first, before touching anything else, because a beautiful homepage means nothing if checkout fails.

I made performance the priority over new features. It's a harder sell internally — nobody gets excited pitching "make the existing thing faster" — but a broken checkout makes every other roadmap item irrelevant.

And I built self-serve onboarding specifically to get my own team out of the loop, because every hour a designer waited on a human to onboard them was an hour a competitor could reach them first.

## Execution Highlights

Migrating cart off the monolith into microservices took load times from something customers would abandon down to something they wouldn't notice — and checkout reliability improved right alongside it. I rebuilt onboarding as a self-serve flow, and redesigned localized homepages around what the merchandising data was actually telling us, not what looked good in a deck.

## What Actually Happened

Load times dropped from unusable to instant. Click-through and session duration both improved after the redesign. Onboarding time for new designers fell sharply. Revenue scaled meaningfully across the engagement.

The lesson I keep relearning: performance isn't an engineering line item, it's a growth lever hiding in plain sight. Every team has a "boring" fix like this one sitting in the backlog. It's usually worth more than the next feature.
