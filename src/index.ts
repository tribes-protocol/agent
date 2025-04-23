import { elizaLogger } from '@elizaos/core'
import { Agent } from '@tribesxyz/ayaos'
import 'dotenv/config'

async function main(): Promise<void> {
  try {
    const agent = new Agent({ dataDir: process.env.DATA_DIR })

    await agent.start()

    elizaLogger.success('sdk initialized', agent.agentId)
  } catch {
    process.exit(1)
  }
}

console.log('hello, agent!')
main().catch(console.error)
