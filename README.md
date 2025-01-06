# NuStoic - TradingView Broker Bridge - SaaS Platform

## Overview

This project is a multi-tenant SaaS that bridges **TradingView alerts** to various **broker APIs**. Users can:

- Create **custom agents** (webhook endpoints) for auto-trading.
- Store and manage **broker credentials** securely.
- Subscribe to **plans** (Free, Pro, etc.) for usage limits.
- Log trades, positions, and usage stats in a unified dashboard.
- Explore a **marketplace** of agents created by other users, with reviews and versioning.

### Tech Stack

- **Frontend/Backend**: [Next.js](https://nextjs.org/) (React + API routes)
- **Database & Auth**: [Supabase](https://supabase.com/) (Postgres + Row-Level Security)
- **Broker APIs**: Various (OANDA, Alpaca, Binance, etc.)
- **Deployment**: Vercel.

---

## Table of Contents

1. [Architecture](#architecture)
2. [Schema Overview](#schema-overview)
3. [Local Development](#local-development)
4. [Environment Variables](#environment-variables)
5. [Database Setup & Migrations](#database-setup--migrations)
6. [Authentication & Security](#authentication--security)
7. [Usage & Billing Flows](#usage--billing-flows)
8. [Testing](#testing)
9. [Deployment](#deployment)
10. [License](#license)

---

## Architecture

1. **Next.js** handles both **web** pages and **API routes** in a single codebase.
2. **Supabase** manages the Postgres DB, user auth (`auth.users`), and row-level security (RLS) for multi-tenant data isolation.
3. **TradingView** sends alerts via **webhooks** to `/api/tv-webhook/...`, which triggers trades via broker APIs.
4. **Stripe** or a similar provider can be used for subscription billing and invoice management (optional).

---

## Schema Overview

We have a rich set of tables:

- **users**, **broker_credentials**, **alerts_logs**, **alert_keys** (managing user data and keys)
- **subscription_plans**, **user_subscriptions**, **billing_invoices** (handling SaaS subscriptions)
- **positions**, **notifications**, **usage_stats** (tracking real-time trades, notifications, usage)
- **market_agents**, **agent_purchases**, **agent_reviews**, **agent_versions** (marketplace functionality)

For a deep dive, see [`/docs/database-schema.sql`](./docs/database-schema.sql) or the Supabase migrations.

---

## Local Development

1. **Clone** the repo:
   ```bash
   git clone https://github.com/your-org/your-project.git
   cd your-project
   ```
