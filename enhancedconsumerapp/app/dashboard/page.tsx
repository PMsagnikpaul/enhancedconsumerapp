"use client"

import { useState } from "react"
import Link from "next/link"
import { BarChart, Wallet, ArrowUpRight, ArrowDownRight, Plus, Clock, CheckCircle2, AlertCircle } from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-500">Welcome back! Here's an overview of your Base activity.</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-primary">
            <Plus className="mr-2 h-4 w-4 inline" /> New Transaction
          </button>
          <Link href="/demo">
            <button className="btn-secondary">Launch Demo</button>
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="card">
          <div className="p-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium">Total Balance</h3>
              <Wallet className="h-4 w-4 text-gray-400" />
            </div>
            <div className="text-2xl font-bold">1.245 ETH</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              +20.1% from last month
            </p>
          </div>
        </div>
        <div className="card">
          <div className="p-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium">NFTs Owned</h3>
              <BarChart className="h-4 w-4 text-gray-400" />
            </div>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              +3 new this week
            </p>
          </div>
        </div>
        <div className="card">
          <div className="p-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium">Transactions</h3>
              <ArrowUpRight className="h-4 w-4 text-gray-400" />
            </div>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-red-500 flex items-center mt-1">
              <ArrowDownRight className="mr-1 h-4 w-4" />
              -4% from last week
            </p>
          </div>
        </div>
        <div className="card">
          <div className="p-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium">Gas Spent</h3>
              <BarChart className="h-4 w-4 text-gray-400" />
            </div>
            <div className="text-2xl font-bold">0.032 ETH</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              -12% from last month
            </p>
          </div>
        </div>
      </div>

      <div className="tabs-container mb-8">
        <div className="tabs-header">
          <button
            className={`tab-button ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`tab-button ${activeTab === "transactions" ? "active" : ""}`}
            onClick={() => setActiveTab("transactions")}
          >
            Transactions
          </button>
          <button className={`tab-button ${activeTab === "nfts" ? "active" : ""}`} onClick={() => setActiveTab("nfts")}>
            NFTs
          </button>
        </div>

        <div className={`tab-content ${activeTab === "overview" ? "active" : ""}`}>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Recent Transactions</h3>
                <div className="space-y-4">
                  {[
                    { type: "Sent", amount: "0.12 ETH", status: "completed", time: "2 hours ago" },
                    { type: "Received", amount: "0.5 ETH", status: "completed", time: "1 day ago" },
                    { type: "NFT Purchase", amount: "0.25 ETH", status: "completed", time: "3 days ago" },
                    { type: "Swap", amount: "0.3 ETH", status: "pending", time: "3 days ago" },
                    { type: "Sent", amount: "0.05 ETH", status: "failed", time: "5 days ago" },
                  ].map((tx, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {tx.status === "completed" ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        ) : tx.status === "pending" ? (
                          <Clock className="h-5 w-5 text-yellow-500" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-red-500" />
                        )}
                        <div>
                          <div className="font-medium">{tx.type}</div>
                          <div className="text-sm text-gray-500">{tx.time}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{tx.amount}</div>
                        <div className="text-sm capitalize text-gray-500">{tx.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="card">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">NFT Collection</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="space-y-2">
                      <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center">
                        <span className="text-gray-400">NFT #{item}</span>
                      </div>
                      <div className="text-sm font-medium">Base Original #{item}</div>
                      <div className="text-xs text-gray-500">Floor: 0.2 ETH</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`tab-content ${activeTab === "transactions" ? "active" : ""}`}>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">Transaction History</h3>
            <div className="space-y-6">
              {[
                { type: "Sent", amount: "0.12 ETH", status: "completed", time: "Apr 9, 2025", to: "0x1a2...3b4c" },
                {
                  type: "Received",
                  amount: "0.5 ETH",
                  status: "completed",
                  time: "Apr 8, 2025",
                  from: "0x5d6...7e8f",
                },
                {
                  type: "NFT Purchase",
                  amount: "0.25 ETH",
                  status: "completed",
                  time: "Apr 6, 2025",
                  to: "0x9a0...1b2c",
                },
                { type: "Swap", amount: "0.3 ETH", status: "pending", time: "Apr 6, 2025", to: "0x3d4...5e6f" },
                { type: "Sent", amount: "0.05 ETH", status: "failed", time: "Apr 4, 2025", to: "0x7g8...9h0i" },
                {
                  type: "Contract Interaction",
                  amount: "0.01 ETH",
                  status: "completed",
                  time: "Apr 3, 2025",
                  to: "0xab1...cd2e",
                },
                {
                  type: "Received",
                  amount: "0.75 ETH",
                  status: "completed",
                  time: "Apr 1, 2025",
                  from: "0xef3...gh4i",
                },
                {
                  type: "NFT Sale",
                  amount: "0.4 ETH",
                  status: "completed",
                  time: "Mar 29, 2025",
                  from: "0xjk5...lm6n",
                },
              ].map((tx, i) => (
                <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center space-x-3">
                    {tx.status === "completed" ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : tx.status === "pending" ? (
                      <Clock className="h-5 w-5 text-yellow-500" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    )}
                    <div>
                      <div className="font-medium">{tx.type}</div>
                      <div className="text-sm text-gray-500">{tx.time}</div>
                      {tx.to && <div className="text-xs text-gray-500">To: {tx.to}</div>}
                      {tx.from && <div className="text-xs text-gray-500">From: {tx.from}</div>}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{tx.amount}</div>
                    <div className="text-sm capitalize text-gray-500">{tx.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`tab-content ${activeTab === "nfts" ? "active" : ""}`}>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">NFT Collection</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="space-y-3">
                  <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center">
                    <span className="text-gray-400">NFT #{i + 1}</span>
                  </div>
                  <div>
                    <div className="font-medium">Base Original #{i + 1}</div>
                    <div className="text-sm text-gray-500">Collection: Base Originals</div>
                    <div className="text-sm text-gray-500">Floor: {(0.1 + i * 0.05).toFixed(2)} ETH</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}