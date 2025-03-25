import { Agent, ayaLogger } from '@tribesxyz/ayaos'

async function main(): Promise<void> {
  try {
    const agent = new Agent({
      dataDir: 'data'
    })

    agent.on('pre:llm', async (context) => {
      ayaLogger.info('llm:pre', context.memory)
      return true
    })

    agent.on('post:llm', async (context) => {
      ayaLogger.info('llm:post', context.memory)
      return true
    })

    await agent.start()

    ayaLogger.success('sdk initialized', agent.agentId)
  } catch {
    process.exit(1)
  }
}

main().catch(ayaLogger.error)
