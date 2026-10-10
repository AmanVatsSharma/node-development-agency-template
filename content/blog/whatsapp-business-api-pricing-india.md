---
slug: whatsapp-business-api-pricing-india
title: "WhatsApp Business API Pricing in India: Meta Charges vs Provider Fees"
excerpt: "How WhatsApp Business API pricing works in India: what Meta charges, what providers add on top, how to estimate monthly cost and how to choose a provider."
category: whatsapp
tags: ["whatsapp business api", "whatsapp pricing", "india", "whatsapp marketing", "business solution provider"]
publishedAt: "2026-10-10"
updatedAt: "2026-10-10"
readTime: 7
author: "Aman Kumar Sharma"
authorTitle: "Founder, Vedpragya"
featured: false
draft: true
---

When businesses ask what the WhatsApp Business API costs, they are really asking about two separate bills: what Meta charges for messages, and what your provider charges for the platform around them. The first depends on message type and country and is published by Meta. The second varies a great deal between providers and is where most of the surprises hide. This guide explains both, shows how to estimate your monthly cost, and lists what to check before choosing a provider.

**Important:** Meta changes its pricing model, categories and rates from time to time. This article explains the structure and how to calculate cost, but it does not quote current rates. Always confirm the latest numbers on Meta's official WhatsApp Business pricing page and in your provider's rate card before you commit.

## The two parts of the bill

| Part | Who sets it | What you pay for |
|---|---|---|
| Message charges | Meta, via a published rate card by country and currency | Business-initiated template messages, charged by category |
| Platform and service fees | Your provider (a Business Solution Provider or technology partner) | Access to the API, shared inbox, chatbot builder, integrations, analytics, support |

Your provider normally collects both charges from you. Some pass Meta's charges through at cost and charge a platform fee. Others add a markup on every message, and some combine both. Knowing which model you are on is the single most important thing to find out.

## How Meta charges

Meta moved from charging per 24-hour conversation to charging per delivered template message for business-initiated messages in 2025. Since pricing can change again, treat the following as a framework to verify. At the time of writing, the key ideas are:

- **Message categories.** Business-initiated template messages fall into categories, commonly marketing, utility and authentication, each with its own rate. Marketing is typically the most expensive.
- **Customer service window.** When a customer messages you, a window opens (24 hours at the time of writing) in which you can reply with free-form messages. Replies sent inside this window to a customer-initiated chat have generally not been charged as marketing messages. Check Meta's current rules for what is free and what is not.
- **Free entry points.** Messages that start from certain click-to-WhatsApp ads or page buttons have offered a free window. Confirm the current terms before relying on them.
- **Rates vary by country** and are published in a rate card. The rate for messages to Indian numbers is not the same as for other countries.

Because categories drive cost, a marketing broadcast, an order update and a login code can be charged differently. Sending a promotional message as a utility template is against the rules, and Meta can reclassify or reject templates.

## What providers add

Most businesses reach the API through an official Business Solution Provider or technology partner. Typical charges on top of Meta's:

- **Subscription or platform fee** — monthly or annual access to the dashboard, shared inbox, chatbot tools and APIs.
- **Per-message markup** — an extra amount on each message beyond Meta's rate.
- **Setup or onboarding fee** — one-time charge for business verification support, number setup and template creation.
- **Per-seat charges** — for agents using the shared inbox.
- **Add-ons** — chatbots, AI features, CRM connectors, broadcast tools, extra numbers.
- **Support tiers** — faster response times or a dedicated manager.

### Common pricing models

| Model | How it works | Watch out for |
|---|---|---|
| Pass-through plus platform fee | You pay Meta's rate plus a fixed monthly fee | Fee tiers that jump as volume grows |
| Markup per message | Provider adds a fixed amount or percentage to each message | Costs scale with volume and can exceed other models quickly |
| All-in bundle | A monthly plan with included messages and overage rates | Included volume that does not match your usage; overage rates |
| Pay as you go | Wallet top-ups, no commitment | Minimum balances, expiry on credits |

## How to estimate your monthly cost

You can estimate cost with a simple formula:

**Monthly cost = (marketing messages × marketing rate) + (utility messages × utility rate) + (authentication messages × authentication rate) + provider platform fee + provider markup + seats and add-ons**

### A worked example with hypothetical numbers

The rates below are **made up purely to demonstrate the arithmetic.** They are not Meta's or any provider's real prices. Replace them with the numbers from the current rate card.

Suppose a store sends 10,000 marketing messages and 20,000 utility messages (order updates) in a month.

| Item | Quantity | Hypothetical rate | Amount |
|---|---|---|---|
| Marketing messages | 10,000 | ₹0.80 | ₹8,000 |
| Utility messages | 20,000 | ₹0.15 | ₹3,000 |
| Provider platform fee | 1 month | ₹2,500 | ₹2,500 |
| Agent seats | 3 | ₹500 | ₹1,500 |
| **Total** | | | **₹15,000** |

Notice how the number of marketing messages dominates the bill, and how fixed platform fees matter more for low-volume businesses.

## Templates, quality and limits

- **Templates need approval.** Every business-initiated message outside the service window must use an approved template. Plan time for review and rejections.
- **Quality matters.** If many recipients block or report you, your quality rating drops and your messaging limits can be reduced. Send only to people who opted in and who expect the message.
- **Messaging limits grow with good behaviour.** New numbers start with lower limits that increase as you send quality messages. Do not plan a large first-day broadcast.
- **Opt-in is required.** You must have permission to message customers on WhatsApp and be able to show how you collected it.

## How to choose a provider

Ask these questions and compare answers in writing:

1. **Is the provider officially approved by Meta** as a Business Solution Provider or technology partner, and can you verify it?
2. **How exactly is pricing structured?** Ask for a sample monthly bill at your expected volume.
3. **Do you own your number, templates and customer data**, and can you move them if you leave?
4. **What does onboarding include**, and how long does business verification usually take?
5. **What integrations exist** with your CRM, e-commerce store, payment links and helpdesk? See our [WhatsApp Business API service](/pages/whatsapp-business-api) and [CRM services](/pages/crm).
6. **What are the chatbot and automation options?** Our guide to [WhatsApp AI chatbots in India](/pages/blog/whatsapp-ai-chatbot-india) explains what is realistic.
7. **What support do you get**, in which hours and languages?
8. **What are the contract terms**, minimum commitments and exit conditions?

If you are planning campaigns, our article on [WhatsApp marketing strategy for India](/pages/blog/whatsapp-marketing-strategy-india-2025) covers consent, templates and timing.

## FAQ

### Is the WhatsApp Business API free?

No. Meta charges for business-initiated template messages, and providers charge for platform access. Some customer-initiated conversations have been free or cheaper under Meta's rules, but the details change, so check the current terms.

### What is the difference between the WhatsApp Business app and the API?

The Business app is a free app for small businesses to chat manually from a phone. The API is for businesses that need multiple agents, automation, integrations and higher volumes. You get API access through a provider.

### Do replies to customers cost money?

Replies inside the customer service window to a conversation the customer started have generally been treated differently from business-initiated templates. Verify the current rule with Meta and with your provider before you assume anything is free.

### How long does setup take?

It depends on business verification, number readiness and template approval. Allow days to a couple of weeks, and longer if verification needs corrections.

### Can I use my existing WhatsApp number?

Often yes, but the number must be able to move to the API, and it will usually stop working on the regular app. Your provider can confirm the process before you start.

### Do I need a chatbot?

Not necessarily. A shared inbox with templates handles many cases. Chatbots help when message volume is high or you need after-hours replies. See our [AI chatbot development](/pages/ai-chatbot-development) service for options.

If you would like help comparing providers or setting up WhatsApp for your business, [contact us](/pages/contact).
