"use client"

import { useState } from "react"
import { Wallet, ImageIcon, Code } from "lucide-react"

export default function DemoPage() {
  const [isConnected, setIsConnected] = useState(false)
  const [activeTab, setActiveTab] = useState("nfts")

  const handleConnect = () => {
    setIsConnected(true)
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h1 className="text-3xl font-bold">Interactive Demo</h1>
        <p className="text-gray-500 text-lg max-w-[700px]">
          Experience the power of Base's OnchainKit with this interactive demo.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
        <div className="lg:col-span-1">
          <div className="card h-full flex flex-col items-center justify-center p-6">
            <Wallet className="h-16 w-16 text-[var(--primary-color)] mb-6" />
            <h3 className="text-xl font-bold mb-2">Connect Wallet</h3>
            <p className="text-gray-500 text-center mb-6">Connect your wallet to interact with the Base blockchain.</p>

            {!isConnected ? (
              <button onClick={handleConnect} className="btn-primary">
                Connect Wallet
              </button>
            ) : (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                <h4 className="font-bold">Connected</h4>
                <p>Wallet successfully connected to Base network.</p>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="tabs-container h-full">
            <div className="tabs-header">
              <button
                className={`tab-button ${activeTab === "nfts" ? "active" : ""}`}
                onClick={() => setActiveTab("nfts")}
              >
                NFTs
              </button>
              <button
                className={`tab-button ${activeTab === "transactions" ? "active" : ""}`}
                onClick={() => setActiveTab("transactions")}
              >
                Transactions
              </button>
              <button
                className={`tab-button ${activeTab === "contracts" ? "active" : ""}`}
                onClick={() => setActiveTab("contracts")}
              >
                Smart Contracts
              </button>
            </div>

            <div className={`tab-content ${activeTab === "nfts" ? "active" : ""}`}>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Your NFT Collection</h3>
                {isConnected ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="card overflow-hidden">
                        <div className="aspect-square bg-gray-100 relative">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <ImageIcon className="h-12 w-12 text-gray-400" />
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-medium">Base NFT #{item}</h4>
                          <p className="text-sm text-gray-500">Collection: Base Originals</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-[400px] text-center">
                    <ImageIcon className="h-16 w-16 text-gray-300 mb-4" />
                    <h4 className="text-lg font-medium">Connect your wallet</h4>
                    <p className="text-gray-500 max-w-[300px] mt-2">
                      Connect your wallet to view your NFT collection on Base.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className={`tab-content ${activeTab === "transactions" ? "active" : ""}`}>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Recent Transactions</h3>
                {isConnected ? (
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div key={item} className="card p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">Transaction #{item}</h4>
                            <p className="text-sm text-gray-500">
                              {item % 2 === 0 ? "Sent 0.05 ETH" : "Received 0.1 ETH"}
                            </p>
                          </div>
                          <span className={`text-sm ${item % 2 === 0 ? "text-red-500" : "text-green-500"}`}>
                            {item % 2 === 0 ? "-0.05 ETH" : "+0.1 ETH"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-[400px] text-center">
                    <Code className="h-16 w-16 text-gray-300 mb-4" />
                    <h4 className="text-lg font-medium">Connect your wallet</h4>
                    <p className="text-gray-500 max-w-[300px] mt-2">
                      Connect your wallet to view your transaction history on Base.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className={`tab-content ${activeTab === "contracts" ? "active" : ""}`}>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Smart Contracts</h3>
                {isConnected ? (
                  <div className="space-y-6">
                    <div className="card">
                      <div className="p-6">
                        <h4 className="text-lg font-bold mb-2">NFT Marketplace</h4>
                        <p className="text-gray-500 mb-4">Interact with the Base NFT marketplace contract.</p>
                        <div className="space-y-2">
                          <button className="btn-primary w-full justify-start">View Available NFTs</button>
                          <button className="btn-primary w-full justify-start">List NFT for Sale</button>
                          <button className="btn-primary w-full justify-start">Purchase NFT</button>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="p-6">
                        <h4 className="text-lg font-bold mb-2">Token Swap</h4>
                        <p className="text-gray-500 mb-4">Swap tokens on the Base network.</p>
                        <div className="space-y-2">
                          <button className="btn-primary w-full justify-start">Swap ETH to BASE</button>
                          <button className="btn-primary w-full justify-start">Swap BASE to ETH</button>
                          <button className="btn-primary w-full justify-start">View Liquidity Pools</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-[400px] text-center">
                    <Code className="h-16 w-16 text-gray-300 mb-4" />
                    <h4 className="text-lg font-medium">Connect your wallet</h4>
                    <p className="text-gray-500 max-w-[300px] mt-2">
                      Connect your wallet to interact with smart contracts on Base.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}