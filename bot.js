import { Client,Guild, GuildManager, GatewayIntentBits, User, GuildMemberMagager, GuildMember, Collection, Client } from "discord.js"

const Client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ],
});

import dotenv from