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
- **Deployment**: Vercel, or any Node-compatible environment.

---

## Table of Contents

1. [Architecture](#architecture)
2. [Schema Overview](#schema-overview)
3. [Endpoints](#endpoints)
4. [Local Development](#local-development)
5. [Environment Variables](#environment-variables)
6. [Database Setup & Migrations](#database-setup--migrations)
7. [Authentication & Security](#authentication--security)
8. [Usage & Billing Flows](#usage--billing-flows)
9. [Testing](#testing)
10. [Deployment](#deployment)
11. [License](#license)

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

## Endpoints

**REST-like** endpoints are located in [`/pages/api`](./pages/api). Notable routes include:

- `POST /api/auth/register`, `POST /api/auth/login`
- `GET|POST|PATCH|DELETE /api/broker-credentials/...`
- `GET|POST /api/alert-keys`, `GET|POST /api/webhook-endpoints`
- `POST /api/tv-webhook/{endpointOrKeySecret}`
- `GET|POST|PATCH /api/user-subscriptions`, `GET /api/subscription-plans`
- `GET|POST|PATCH|DELETE /api/market-agents`, `api/agent-purchases`, `api/agent-reviews`, `api/agent-versions`, etc.

See [Endpoints.md](./docs/Endpoints.md) for a complete list (or refer to the itemized list above).

---

## Local Development

1. **Clone** the repo:
   ```bash
   git clone https://github.com/your-org/your-project.git
   cd your-project
   ```
