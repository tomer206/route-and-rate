
'use client';
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
} from "recharts";

const fetchExchangeRates = async () => {
  try {
    const res = await fetch("https://api.exchangerate.host/latest?base=THB");
    const data = await res.json();
    return data.rates;
  } catch (error) {
    console.error("Currency fetch error:", error);
    return {};
  }
};

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-50 p-6">
      <img src="/logo.png" alt="Route&Rate Logo" className="w-32 h-32 mb-4" />
      <h1 className="text-4xl font-bold mb-2 text-gray-800">Welcome to Route&Rate</h1>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-md">
        Plan your dream trip with full budget control, live weather insights, and location-based breakdowns. Everything you need in one place.
      </p>
      <Card className="w-full max-w-sm shadow-xl">
        <CardContent className="p-6 text-center">
          <Button onClick={() => router.push("/planner")} className="w-full text-lg p-4 rounded-xl">
            התחל לתכנן
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
