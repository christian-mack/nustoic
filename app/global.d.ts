import type { Database } from "@/lib/database.types";

declare global {
  type AgentPurchase = Database["public"]["Tables"]["agent_purchases"]["Row"];
  type AgentReview = Database["public"]["Tables"]["agent_reviews"]["Row"];
  type AgentVersion = Database["public"]["Tables"]["agent_versions"]["Row"];
  type AlertKeys = Database["public"]["Tables"]["alert_keys"]["Row"];
  type AlertLog = Database["public"]["Tables"]["alert_logs"]["Row"];
  type BillingInvoices =
    Database["public"]["Tables"]["billing_invoices"]["Row"];
  type BrokerCredentials =
    Database["public"]["Tables"]["broker_credentials"]["Row"];
  type MarketAgents = Database["public"]["Tables"]["market_agents"]["Row"];
  type Notifications = Database["public"]["Tables"]["notifications"]["Row"];
  type Position = Database["public"]["Tables"]["positions"]["Row"];
  type SubscriptionPlan =
    Database["public"]["Tables"]["subscription_plans"]["Row"];
  type UsageStat = Database["public"]["Tables"]["usage_stats"]["Row"];
  type UserSubscription =
    Database["public"]["Tables"]["user_subscriptions"]["Row"];
  type User = Database["public"]["Tables"]["users"]["Row"];
  type WebhookEndpoint =
    Database["public"]["Tables"]["webhook_endpoints"]["Row"];
}
