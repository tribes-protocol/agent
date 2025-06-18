import { Agent, ayaLogger } from '@tribesxyz/ayaos'
import 'dotenv/config'

async function main(): Promise<void> {
  try {
    const agent = new Agent({ dataDir: process.env.DATA_DIR })

    await agent.start()

    ayaLogger.info('sdk initialized', { agentId: agent.agentId })
  } catch (error) {
    ayaLogger.error('error initializing agent', { error })
    process.exit(1)
  }
}

ayaLogger.info('hello, agent!')
main().catch(console.error)
