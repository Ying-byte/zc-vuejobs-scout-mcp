#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "vuejobs",
  boardId: "vuejobs-official",
  domain: "vuejobs.com",
  npmName: "zc-vuejobs-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
