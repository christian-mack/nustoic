import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

import { CreditCard } from "@/components/dashboard/credit-card";
import { WeeklyActivity } from "@/components/dashboard/weekly-activity";
import { QuickTransfer } from "@/components/dashboard/quick-transfer";
import { BalanceHistory } from "@/components/dashboard/balance-history";
import { ExpenseStatistics } from "@/components/dashboard/expense-statistics";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">My Cards</h2>
          <button className="text-[#4543E8] text-sm font-medium">
            See All
          </button>
        </div>
        <div className="flex space-x-6 overflow-x-auto pb-4">
          <CreditCard
            balance="5,756"
            cardHolder="Eddy Cusuma"
            cardNumber="3778 **** **** 1234"
            expiry="12/22"
            variant="primary"
          />
          <CreditCard
            balance="5,756"
            cardHolder="Eddy Cusuma"
            cardNumber="3778 **** **** 1234"
            expiry="12/22"
            variant="secondary"
          />
        </div>
      </div>

      <div className="col-span-12 lg:col-span-8">
        <WeeklyActivity />
      </div>

      <div className="col-span-12 lg:col-span-4">
        <ExpenseStatistics />
      </div>

      <div className="col-span-12 lg:col-span-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <QuickTransfer />
          <BalanceHistory />
        </div>
      </div>

      <div className="col-span-12 lg:col-span-4">
        <RecentTransactions />
      </div>
    </div>
  );
}
