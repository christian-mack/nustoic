export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      agent_purchases: {
        Row: {
          agent_id: string
          billing_invoice_id: string | null
          buyer_id: string
          created_at: string | null
          id: string
          purchase_date: string | null
          status: string
        }
        Insert: {
          agent_id: string
          billing_invoice_id?: string | null
          buyer_id: string
          created_at?: string | null
          id?: string
          purchase_date?: string | null
          status?: string
        }
        Update: {
          agent_id?: string
          billing_invoice_id?: string | null
          buyer_id?: string
          created_at?: string | null
          id?: string
          purchase_date?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "agent_purchases_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "market_agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agent_purchases_billing_invoice_id_fkey"
            columns: ["billing_invoice_id"]
            isOneToOne: false
            referencedRelation: "billing_invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agent_purchases_buyer_id_fkey"
            columns: ["buyer_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_reviews: {
        Row: {
          agent_id: string
          created_at: string | null
          id: string
          rating: number
          review_text: string | null
          user_id: string
        }
        Insert: {
          agent_id: string
          created_at?: string | null
          id?: string
          rating: number
          review_text?: string | null
          user_id: string
        }
        Update: {
          agent_id?: string
          created_at?: string | null
          id?: string
          rating?: number
          review_text?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "agent_reviews_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "market_agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agent_reviews_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_versions: {
        Row: {
          agent_id: string
          changes: string | null
          code_ref: string | null
          created_at: string | null
          id: string
          version_label: string
        }
        Insert: {
          agent_id: string
          changes?: string | null
          code_ref?: string | null
          created_at?: string | null
          id?: string
          version_label: string
        }
        Update: {
          agent_id?: string
          changes?: string | null
          code_ref?: string | null
          created_at?: string | null
          id?: string
          version_label?: string
        }
        Relationships: [
          {
            foreignKeyName: "agent_versions_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "market_agents"
            referencedColumns: ["id"]
          },
        ]
      }
      alert_keys: {
        Row: {
          created_at: string | null
          id: string
          key_name: string
          secret_value: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          key_name: string
          secret_value: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          key_name?: string
          secret_value?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "alert_keys_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      alert_logs: {
        Row: {
          action: string | null
          alert_payload: Json
          broker_id: string | null
          broker_response: Json | null
          created_at: string | null
          id: string
          quantity: number | null
          status: string | null
          user_id: string
        }
        Insert: {
          action?: string | null
          alert_payload: Json
          broker_id?: string | null
          broker_response?: Json | null
          created_at?: string | null
          id?: string
          quantity?: number | null
          status?: string | null
          user_id: string
        }
        Update: {
          action?: string | null
          alert_payload?: Json
          broker_id?: string | null
          broker_response?: Json | null
          created_at?: string | null
          id?: string
          quantity?: number | null
          status?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "alerts_logs_broker_id_fkey"
            columns: ["broker_id"]
            isOneToOne: false
            referencedRelation: "broker_credentials"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alerts_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      billing_invoices: {
        Row: {
          amount_cents: number
          created_at: string | null
          currency: string
          external_invoice_id: string | null
          id: string
          invoice_number: string | null
          paid_at: string | null
          status: string
          user_subscription_id: string
        }
        Insert: {
          amount_cents: number
          created_at?: string | null
          currency?: string
          external_invoice_id?: string | null
          id?: string
          invoice_number?: string | null
          paid_at?: string | null
          status: string
          user_subscription_id: string
        }
        Update: {
          amount_cents?: number
          created_at?: string | null
          currency?: string
          external_invoice_id?: string | null
          id?: string
          invoice_number?: string | null
          paid_at?: string | null
          status?: string
          user_subscription_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "billing_invoices_user_subscription_id_fkey"
            columns: ["user_subscription_id"]
            isOneToOne: false
            referencedRelation: "user_subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      broker_credentials: {
        Row: {
          api_key: string
          api_secret: string
          broker_name: string
          created_at: string | null
          extra_params: Json | null
          id: string
          user_id: string
        }
        Insert: {
          api_key: string
          api_secret: string
          broker_name: string
          created_at?: string | null
          extra_params?: Json | null
          id?: string
          user_id: string
        }
        Update: {
          api_key?: string
          api_secret?: string
          broker_name?: string
          created_at?: string | null
          extra_params?: Json | null
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "broker_credentials_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      market_agents: {
        Row: {
          agent_name: string
          author_id: string
          created_at: string | null
          currency: string
          description: string | null
          id: string
          is_published: boolean | null
          price_cents: number | null
          updated_at: string | null
        }
        Insert: {
          agent_name: string
          author_id: string
          created_at?: string | null
          currency?: string
          description?: string | null
          id?: string
          is_published?: boolean | null
          price_cents?: number | null
          updated_at?: string | null
        }
        Update: {
          agent_name?: string
          author_id?: string
          created_at?: string | null
          currency?: string
          description?: string | null
          id?: string
          is_published?: boolean | null
          price_cents?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "market_agents_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          is_read: boolean | null
          message: string
          notification_type: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message: string
          notification_type?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message?: string
          notification_type?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      positions: {
        Row: {
          broker_id: string
          entry_price: number
          id: string
          opened_at: string
          quantity: number
          side: string
          stop_loss: number | null
          symbol: string
          take_profit: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          broker_id: string
          entry_price: number
          id?: string
          opened_at: string
          quantity: number
          side: string
          stop_loss?: number | null
          symbol: string
          take_profit?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          broker_id?: string
          entry_price?: number
          id?: string
          opened_at?: string
          quantity?: number
          side?: string
          stop_loss?: number | null
          symbol?: string
          take_profit?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "positions_broker_id_fkey"
            columns: ["broker_id"]
            isOneToOne: false
            referencedRelation: "broker_credentials"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "positions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_plans: {
        Row: {
          alerts_limit: number | null
          created_at: string | null
          currency: string
          description: string | null
          id: string
          plan_name: string
          price_cents: number
        }
        Insert: {
          alerts_limit?: number | null
          created_at?: string | null
          currency: string
          description?: string | null
          id?: string
          plan_name: string
          price_cents: number
        }
        Update: {
          alerts_limit?: number | null
          created_at?: string | null
          currency?: string
          description?: string | null
          id?: string
          plan_name?: string
          price_cents?: number
        }
        Relationships: []
      }
      usage_stats: {
        Row: {
          alerts_count: number | null
          created_at: string | null
          id: string
          period_end: string
          period_start: string
          trades_count: number | null
          user_id: string
        }
        Insert: {
          alerts_count?: number | null
          created_at?: string | null
          id?: string
          period_end: string
          period_start: string
          trades_count?: number | null
          user_id: string
        }
        Update: {
          alerts_count?: number | null
          created_at?: string | null
          id?: string
          period_end?: string
          period_start?: string
          trades_count?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "usage_stats_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_subscriptions: {
        Row: {
          canceled_at: string | null
          created_at: string | null
          ends_at: string | null
          external_customer_id: string | null
          external_subscription_id: string | null
          id: string
          payment_method: string | null
          plan_id: string
          started_at: string | null
          status: string
          trial_until: string | null
          user_id: string
        }
        Insert: {
          canceled_at?: string | null
          created_at?: string | null
          ends_at?: string | null
          external_customer_id?: string | null
          external_subscription_id?: string | null
          id?: string
          payment_method?: string | null
          plan_id: string
          started_at?: string | null
          status?: string
          trial_until?: string | null
          user_id: string
        }
        Update: {
          canceled_at?: string | null
          created_at?: string | null
          ends_at?: string | null
          external_customer_id?: string | null
          external_subscription_id?: string | null
          id?: string
          payment_method?: string | null
          plan_id?: string
          started_at?: string | null
          status?: string
          trial_until?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_subscriptions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          auth_user_id: string
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          secret: string | null
        }
        Insert: {
          auth_user_id: string
          created_at?: string | null
          email: string
          full_name?: string | null
          id?: string
          secret?: string | null
        }
        Update: {
          auth_user_id?: string
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          secret?: string | null
        }
        Relationships: []
      }
      webhook_endpoints: {
        Row: {
          created_at: string | null
          endpoint_name: string
          id: string
          secret_value: string
          url_path: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          endpoint_name: string
          id?: string
          secret_value: string
          url_path: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          endpoint_name?: string
          id?: string
          secret_value?: string
          url_path?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "webhook_endpoints_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
